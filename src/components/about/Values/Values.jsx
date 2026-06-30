import PropTypes from 'prop-types'
import { Section, Container, AnimatedText, Card } from '../../common'
import Reveal from '../../sections/Reveal'
import './Values.css'

/**
 * Values grid — reuses the library <Card> for each pillar. Content is a
 * semantic list so the set reads as a group to assistive tech.
 */
const Values = ({ eyebrow, title, items }) => {
  return (
    <Section className="values" aria-labelledby="values-title">
      <Container>
        <header className="values__head">
          <p className="eyebrow">{eyebrow}</p>
          <AnimatedText
            as="h2"
            id="values-title"
            className="values__title display-2"
            text={title}
            scrollReveal
          />
        </header>

        <ul className="values__grid" role="list">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.06} y={28}>
              <Card variant="outline" padding="lg" className="values__card">
                <span className="values__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="values__card-title">{item.title}</h3>
                <p className="values__card-text">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

Values.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired, text: PropTypes.string.isRequired })
  ).isRequired,
}

export default Values
