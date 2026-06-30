import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from '../../../utils/gsap'
import { prefersReducedMotion } from '../../../utils/motion'
import { cn } from '../../../utils/classNames'
import './AnimatedText.css'

const FROM_VARS = {
  fade: { opacity: 0 },
  'fade-up': { opacity: 0, yPercent: 100 },
  slide: { opacity: 0, xPercent: -15 },
}

/**
 * GSAP-powered text reveal, built for future hero/section headings.
 * Splits text into words for a staggered entrance, or animates the whole
 * block when `split="none"`. Set `scrollReveal` to trigger on scroll.
 * Honors prefers-reduced-motion (renders immediately, no motion).
 */
const AnimatedText = ({
  as: Tag = 'span',
  text,
  animation = 'fade-up',
  split = 'words',
  stagger = 0.08,
  delay = 0,
  duration = 0.8,
  scrollReveal = false,
  start = 'top 85%',
  once = true,
  className,
  children,
  ...rest
}) => {
  const ref = useRef(null)
  const content =
    typeof text === 'string'
      ? text
      : typeof children === 'string'
        ? children
        : null
  const useSplit = split !== 'none' && content !== null

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const targets = useSplit
      ? el.querySelectorAll('.animated-text__word')
      : [el]
    if (!targets.length) return undefined

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, clearProps: 'transform' })
      return undefined
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        ...(FROM_VARS[animation] || FROM_VARS['fade-up']),
        duration,
        delay,
        ease: 'power3.out',
        stagger: useSplit ? stagger : 0,
        scrollTrigger: scrollReveal ? { trigger: el, start, once } : undefined,
      })
    }, ref)

    return () => ctx.revert()
  }, [content, animation, split, stagger, delay, duration, scrollReveal, start, once, useSplit])

  const renderContent = () => {
    if (useSplit && content) {
      const words = content.split(' ')
      return words.map((word, i) => (
        <span className="animated-text__word-wrap" key={`${word}-${i}`}>
          <span className="animated-text__word">{word}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))
    }
    return children ?? text
  }

  return (
    <Tag
      ref={ref}
      className={cn('animated-text', useSplit && 'animated-text--split', className)}
      {...rest}
    >
      {renderContent()}
    </Tag>
  )
}

AnimatedText.propTypes = {
  as: PropTypes.elementType,
  text: PropTypes.string,
  animation: PropTypes.oneOf(['fade', 'fade-up', 'slide']),
  split: PropTypes.oneOf(['words', 'none']),
  stagger: PropTypes.number,
  delay: PropTypes.number,
  duration: PropTypes.number,
  scrollReveal: PropTypes.bool,
  start: PropTypes.string,
  once: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default AnimatedText
