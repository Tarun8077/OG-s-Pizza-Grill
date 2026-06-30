import PropTypes from 'prop-types'
import { Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import './ContactHero.css'

/**
 * Editorial, typographic hero for the Contact page. Owns the page <h1>.
 * Mirrors the About hero's restraint — type and warm light, no stock imagery.
 */
const ContactHero = ({ eyebrow, titleLines, lead }) => {
  return (
    <header className="contact-hero">
      <div className="contact-hero__glow" aria-hidden="true" />
      <Container size="narrow" className="contact-hero__inner">
        <p className="eyebrow contact-hero__kicker">{eyebrow}</p>
        <h1 className="contact-hero__title">
          {titleLines.map((line, i) => (
            <AnimatedText
              as="span"
              key={line}
              className="contact-hero__line"
              text={line}
              delay={0.15 + i * 0.18}
            />
          ))}
        </h1>
        <Reveal as="p" className="contact-hero__lead lead" delay={0.25}>
          {lead}
        </Reveal>
      </Container>
    </header>
  )
}

ContactHero.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  titleLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  lead: PropTypes.string.isRequired,
}

export default ContactHero
