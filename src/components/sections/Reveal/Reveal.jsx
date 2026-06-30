import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from '../../../utils/gsap'
import { prefersReducedMotion } from '../../../utils/motion'

/**
 * Scroll-triggered reveal wrapper for non-text content (images, cards, rows).
 * Fades + lifts its element into view once. Headings use <AnimatedText>;
 * this handles everything else. Honors prefers-reduced-motion.
 */
const Reveal = ({
  as: Tag = 'div',
  y = 40,
  delay = 0,
  duration = 0.9,
  start = 'top 85%',
  className,
  children,
  ...rest
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start },
      })
    }, ref)

    return () => ctx.revert()
  }, [y, delay, duration, start])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  as: PropTypes.elementType,
  y: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  start: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Reveal
