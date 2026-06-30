import { useEffect, useRef } from 'react'
import { lenisRef } from '../../hooks/useLenis'
import './ScrollProgress.css'

/**
 * Slim reading-progress bar pinned to the top of the viewport, plus a
 * scroll-direction signal published to `documentElement.dataset.scrollDir`
 * ("up" | "down") so CSS/other components can react to direction. Driven by
 * Lenis when available, with a passive native-scroll fallback. Purely visual
 * and not motion-sickness inducing, so it stays on under reduced motion.
 */
const ScrollProgress = () => {
  const barRef = useRef(null)

  useEffect(() => {
    const doc = document.documentElement
    let lastY = window.scrollY

    const update = () => {
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY
      const progress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`

      if (y > lastY + 1) doc.dataset.scrollDir = 'down'
      else if (y < lastY - 1) doc.dataset.scrollDir = 'up'
      lastY = y
    }

    update()

    // Prefer the shared Lenis engine; fall back to native scroll.
    const lenis = lenisRef.current
    lenis?.on?.('scroll', update)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      lenis?.off?.('scroll', update)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      delete doc.dataset.scrollDir
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span ref={barRef} className="scroll-progress__bar" />
    </div>
  )
}

export default ScrollProgress
