import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Live reference to the active Lenis instance. Exposed so feature code (e.g.
 * the Menu category nav) can drive programmatic smooth scrolling through the
 * same engine that handles wheel/touch — keeping one source of truth for
 * scrolling. `current` is null before mount and after unmount.
 */
export const lenisRef = { current: null }

/**
 * Smoothly scroll to an element (or absolute Y). Falls back to native
 * scrolling when Lenis isn't mounted (e.g. reduced-motion / SSR). `offset`
 * is negative to leave room for the fixed header + sticky bar.
 */
export const scrollToTarget = (target, { offset = 0 } = {}) => {
  const lenis = lenisRef.current
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.1 })
    return
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (el && typeof el.scrollIntoView === 'function') {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])
}
