import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../utils/gsap'
import { prefersReducedMotion } from '../../utils/motion'
import { lenisRef } from '../../hooks/useLenis'
import { brand } from '../../assets/images'
import { SITE_NAME } from '../../utils/constants'
import './Preloader.css'

const MIN_VISIBLE = 600 // ms — avoids a jarring flash on fast loads
const MAX_WAIT = 4000 // ms — never trap the user behind a stalled asset

/**
 * Cinematic page preloader. Reveals the brand mark, holds while the document
 * and fonts settle, then fades away and hands scrolling back to Lenis. Locks
 * scroll while visible. Under prefers-reduced-motion it shows briefly with no
 * animation. Self-cleans all timers, listeners and GSAP context.
 */
const Preloader = () => {
  const [done, setDone] = useState(false)
  const rootRef = useRef(null)
  const logoRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    const reduced = prefersReducedMotion()
    const startedAt = performance.now()

    // Lock scrolling while the loader is on screen.
    const lenis = lenisRef.current
    lenis?.stop()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let released = false
    const release = () => {
      if (released) return
      released = true
      document.body.style.overflow = prevOverflow
      lenis?.start()
      lenis?.scrollTo(0, { immediate: true })
      setDone(true)
      // Layout is now final — let ScrollTrigger recompute start/end positions.
      ScrollTrigger.refresh()
    }

    let ctx
    if (!reduced && rootRef.current) {
      ctx = gsap.context(() => {
        gsap
          .timeline()
          .from(logoRef.current, { scale: 0.82, autoAlpha: 0, duration: 0.8, ease: 'power3.out' })
          .from(
            barRef.current,
            { scaleX: 0, duration: 1, ease: 'power2.inOut', transformOrigin: 'left center' },
            '-=0.35'
          )
      }, rootRef)
    }

    const finish = () => {
      if (reduced || !rootRef.current) {
        release()
        return
      }
      gsap.to(rootRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: release,
      })
    }

    const onReady = () => {
      const elapsed = performance.now() - startedAt
      window.setTimeout(finish, Math.max(0, MIN_VISIBLE - elapsed))
    }

    const maxTimer = window.setTimeout(finish, MAX_WAIT)

    if (document.readyState === 'complete') {
      onReady()
    } else {
      window.addEventListener('load', onReady, { once: true })
    }

    return () => {
      window.removeEventListener('load', onReady)
      window.clearTimeout(maxTimer)
      ctx?.revert()
      // Safety: never leave scroll locked if we unmount mid-flight.
      document.body.style.overflow = prevOverflow
      lenis?.start()
    }
  }, [])

  if (done) return null

  return (
    <div className="preloader" ref={rootRef} role="status" aria-live="polite">
      <div className="preloader__inner">
        <img
          ref={logoRef}
          className="preloader__logo"
          src={brand.logo}
          alt=""
          width="96"
          height="96"
        />
        <span className="preloader__name">{SITE_NAME}</span>
        <span className="preloader__track" aria-hidden="true">
          <span ref={barRef} className="preloader__bar" />
        </span>
      </div>
      <span className="sr-only">Loading the OG’s Pizza &amp; Grill experience…</span>
    </div>
  )
}

export default Preloader
