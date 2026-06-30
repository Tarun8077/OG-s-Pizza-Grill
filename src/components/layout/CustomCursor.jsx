import { useEffect, useRef, useState } from 'react'
import { hasFinePointer, prefersReducedMotion } from '../../utils/motion'
import './CustomCursor.css'

/* Elements that should trigger the hover/magnetic state. */
const INTERACTIVE =
  'a, button, input, textarea, select, summary, [data-magnetic], .card--interactive, .gallery-masonry__tile'

/**
 * Custom two-part cursor (precise dot + trailing ring) for fine-pointer
 * desktops only. The ring lerps toward the pointer and, while hovering an
 * interactive element, is magnetically biased toward that element's centre and
 * scaled up with a blend effect. Never renders on touch devices or under
 * prefers-reduced-motion. All listeners + rAF are cleaned up on unmount.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined
    setEnabled(true)

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return undefined

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let stuck = null // currently-hovered interactive element
    let raf = 0
    let visible = false

    document.body.classList.add('has-custom-cursor')

    const onMove = (e) => {
      pointerX = e.clientX
      pointerY = e.clientY
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`
      if (!visible) {
        visible = true
        ring.classList.add('is-visible')
        dot.classList.add('is-visible')
      }
    }

    const render = () => {
      // Magnetically bias the ring toward a hovered element's centre.
      let targetX = pointerX
      let targetY = pointerY
      if (stuck) {
        const r = stuck.getBoundingClientRect()
        targetX = pointerX + (r.left + r.width / 2 - pointerX) * 0.35
        targetY = pointerY + (r.top + r.height / 2 - pointerY) * 0.35
      }
      ringX += (targetX - ringX) * 0.18
      ringY += (targetY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    const onOver = (e) => {
      const el = e.target.closest?.(INTERACTIVE)
      if (el) {
        stuck = el
        ring.classList.add('is-hover')
      }
    }
    const onOut = (e) => {
      const el = e.target.closest?.(INTERACTIVE)
      if (el && el === stuck && !el.contains(e.relatedTarget)) {
        stuck = null
        ring.classList.remove('is-hover')
      }
    }
    const onDown = () => ring.classList.add('is-down')
    const onUp = () => ring.classList.remove('is-down')
    const onLeaveWindow = () => {
      visible = false
      ring.classList.remove('is-visible')
      dot.classList.remove('is-visible')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerout', onOut, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeaveWindow)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerout', onOut)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <div className="cursor" aria-hidden="true">
      <span ref={ringRef} className="cursor__ring" />
      <span ref={dotRef} className="cursor__dot" />
    </div>
  )
}

export default CustomCursor
