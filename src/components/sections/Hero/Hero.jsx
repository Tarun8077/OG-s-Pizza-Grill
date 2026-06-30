import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '../../../utils/gsap'
import { ROUTES } from '../../../utils/constants'
import { photos } from '../../../assets/images'
import { HERO } from '../../../data/home'
import { Button, AnimatedText, Container } from '../../common'
import './Hero.css'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const Hero = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return undefined

    const reduced = prefersReducedMotion()

    const ctx = gsap.context(() => {
      // Smooth image reveal on mount: settle from a slight zoom.
      if (!reduced) {
        gsap.fromTo(
          image,
          { scale: 1.18, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' }
        )

        // Subtle parallax: drift the image as the hero scrolls away.
        gsap.to(image, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })

        // Fade the scroll indicator out as the user begins to scroll.
        if (indicatorRef.current) {
          gsap.to(indicatorRef.current, {
            opacity: 0,
            y: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: '20% top',
              scrub: true,
            },
          })
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={sectionRef} aria-label="Welcome to OG's Pizza & Grill">
      <div className="hero__media">
        <img
          ref={imageRef}
          className="hero__image"
          src={photos.patioAerialNight}
          alt="OG's Pizza & Grill garden courtyard glowing with warm lamplight at night"
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <Container className="hero__inner">
        <p className="eyebrow hero__kicker">{HERO.kicker}</p>

        <h1 className="hero__title">
          <AnimatedText as="span" className="hero__title-line" text={HERO.titleLines[0]} delay={0.2} />
          <AnimatedText
            as="span"
            className="hero__title-line hero__title-line--accent"
            text={HERO.titleLines[1]}
            delay={0.45}
          />
        </h1>

        <p className="hero__intro">{HERO.intro}</p>

        <div className="hero__actions">
          <Button as={Link} to={ROUTES.CONTACT} variant="primary" size="lg">
            Reserve a table
          </Button>
          <Button as={Link} to={ROUTES.MENU} variant="outline" size="lg">
            Explore the menu
          </Button>
        </div>
      </Container>

      <a className="hero__scroll" href="#story" ref={indicatorRef} aria-label="Scroll to discover more">
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
