import PropTypes from 'prop-types'
import { Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import './AboutHero.css'

/**
 * Editorial, typographic hero for the About page. No food photography (none
 * was supplied); the page leads with type and warm light. Owns the page <h1>.
 */
const AboutHero = ({ eyebrow, titleLines, lead }) => {
  return (
    <header className="about-hero">
      <div className="about-hero__glow" aria-hidden="true" />
      <Container size="narrow" className="about-hero__inner">
        <p className="eyebrow about-hero__kicker">{eyebrow}</p>
        <h1 className="about-hero__title">
          {titleLines.map((line, i) => (
            <AnimatedText
              as="span"
              key={line}
              className="about-hero__line"
              text={line}
              delay={0.15 + i * 0.18}
            />
          ))}
        </h1>
        <Reveal as="p" className="about-hero__lead lead" delay={0.25}>
          {lead}
        </Reveal>
      </Container>
    </header>
  )
}

AboutHero.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  titleLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  lead: PropTypes.string.isRequired,
}

export default AboutHero
