import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger } from '../../utils/gsap'
import { prefersReducedMotion } from '../../utils/motion'
import { lenisRef } from '../../hooks/useLenis'
import './RouteTransition.css'

/* eslint-disable react/prop-types */
/**
 * Elegant route transition. On each navigation it resets scroll to the top
 * (through the shared Lenis engine) and plays one GSAP timeline: a soft
 * fade + scale on the incoming content, with a mask wipe on larger screens.
 * Mobile gets a lighter, shorter variant; reduced-motion skips animation
 * entirely. The first render is left alone — the Preloader owns that moment.
 */
const RouteTransition = ({ children }) => {
  const { pathname } = useLocation()
  const rootRef = useRef(null)
  const maskRef = useRef(null)
  const isFirst = useRef(true)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined

    // Always start a new page at the top.
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)

    if (isFirst.current) {
      isFirst.current = false
      return undefined
    }

    if (prefersReducedMotion()) {
      ScrollTrigger.refresh()
      return undefined
    }

    const mobile = window.innerWidth < 768
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => ScrollTrigger.refresh() })
      tl.fromTo(
        el,
        { autoAlpha: 0, y: mobile ? 8 : 18, scale: mobile ? 1 : 0.992 },
        { autoAlpha: 1, y: 0, scale: 1, duration: mobile ? 0.4 : 0.6, ease: 'power2.out' }
      )
      if (!mobile && maskRef.current) {
        tl.fromTo(
          maskRef.current,
          { scaleY: 1 },
          { scaleY: 0, transformOrigin: 'top center', duration: 0.6, ease: 'power4.inOut' },
          0
        )
      }
    }, rootRef)

    return () => ctx.revert()
  }, [pathname])

  return (
    <div className="route-transition" ref={rootRef}>
      <span className="route-transition__mask" ref={maskRef} aria-hidden="true" />
      {children}
    </div>
  )
}

export default RouteTransition
