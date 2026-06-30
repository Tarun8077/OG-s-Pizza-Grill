import PropTypes from 'prop-types'
import { Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import './Statement.css'

/**
 * Full-bleed statement band — a centred philosophy line over a dimmed
 * ambience photo. The image is decorative (alt=""); the meaning is the text.
 */
const Statement = ({ eyebrow, title, text, image, imageAlt = '' }) => {
  return (
    <section className="statement" aria-labelledby="statement-title">
      <div className="statement__media" aria-hidden="true">
        <img className="statement__image" src={image} alt={imageAlt} loading="lazy" decoding="async" />
        <div className="statement__scrim" />
      </div>
      <Container size="narrow" className="statement__inner">
        <p className="eyebrow">{eyebrow}</p>
        <AnimatedText
          as="h2"
          id="statement-title"
          className="statement__title display-1"
          text={title}
          scrollReveal
        />
        <Reveal as="p" className="statement__text" delay={0.1}>
          {text}
        </Reveal>
      </Container>
    </section>
  )
}

Statement.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
}

export default Statement
