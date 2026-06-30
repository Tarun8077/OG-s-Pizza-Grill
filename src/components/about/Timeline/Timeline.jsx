import PropTypes from 'prop-types'
import { Section, Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import './Timeline.css'

/**
 * Vertical craft-journey timeline. An ordered list of steps, each revealed on
 * scroll. Semantic <ol> so the sequence is conveyed to assistive tech.
 */
const Timeline = ({ eyebrow, title, steps }) => {
  return (
    <Section tone="surface" className="timeline" aria-labelledby="timeline-title">
      <Container>
        <header className="timeline__head">
          <p className="eyebrow">{eyebrow}</p>
          <AnimatedText
            as="h2"
            id="timeline-title"
            className="timeline__title display-2"
            text={title}
            scrollReveal
          />
        </header>

        <ol className="timeline__list">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.label} className="timeline__item" delay={(i % 2) * 0.05} y={28}>
              <span className="timeline__marker" aria-hidden="true">
                <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
              </span>
              <div className="timeline__body">
                <h3 className="timeline__label">{step.label}</h3>
                <p className="timeline__text">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

Timeline.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired, text: PropTypes.string.isRequired })
  ).isRequired,
}

export default Timeline
