import PropTypes from 'prop-types'
import { Container, AnimatedText, ImageWrapper, Badge } from '../../common'
import Reveal from '../../sections/Reveal'
import DietDot from '../DietDot'
import { dishShape } from '../DishCard'
import './SignatureHighlight.css'

/**
 * Editorial feature band for the brand's marquee dishes. The photo is an
 * honest ambience shot (no dish photography exists); the picks are real
 * signature items pulled from the menu data.
 */
const SignatureHighlight = ({ data, picks, onJump }) => {
  if (!picks.length) return null
  return (
    <section className="sig-highlight" aria-labelledby="sig-highlight-title">
      <Container className="sig-highlight__grid">
        <Reveal className="sig-highlight__media" y={48}>
          <ImageWrapper src={data.image} alt={data.imageAlt} ratio="4/5" radius="lg" />
        </Reveal>

        <div className="sig-highlight__content">
          <p className="eyebrow">{data.eyebrow}</p>
          <AnimatedText
            as="h2"
            id="sig-highlight-title"
            className="sig-highlight__title display-2"
            text={data.title}
            scrollReveal
          />
          <Reveal as="p" className="sig-highlight__text" delay={0.1}>
            {data.text}
          </Reveal>

          <Reveal as="ul" className="sig-highlight__list" delay={0.15}>
            {picks.map((item) => (
              <li key={item.id} className="sig-highlight__pick">
                <DietDot vegetarian={item.vegetarian} size="sm" className="sig-highlight__diet" />
                <span className="sig-highlight__pick-name">{item.name}</span>
                <span className="sig-highlight__pick-dots" aria-hidden="true" />
                <span className="sig-highlight__pick-price">₹{item.price}</span>
              </li>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <button type="button" className="sig-highlight__cta" onClick={() => onJump('signatures')}>
              See all signatures
              <span aria-hidden="true"> →</span>
            </button>
          </Reveal>

          <Badge variant="accent" size="sm" className="sig-highlight__badge">
            Chef’s recommendation
          </Badge>
        </div>
      </Container>
    </section>
  )
}

SignatureHighlight.propTypes = {
  data: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }).isRequired,
  picks: PropTypes.arrayOf(dishShape).isRequired,
  onJump: PropTypes.func.isRequired,
}

export default SignatureHighlight
