import PropTypes from 'prop-types'
import { Container } from '../../common'
import Reveal from '../../sections/Reveal'
import './ChefNote.css'

/**
 * Centred editorial pull-quote from the kitchen. Uses a semantic
 * <blockquote> + <figcaption> for correct attribution structure.
 */
const ChefNote = ({ eyebrow, quote, attribution }) => {
  return (
    <section className="chef-note" aria-label="A note from the kitchen">
      <Container size="narrow">
        <Reveal className="chef-note__inner" y={32}>
          <p className="eyebrow">{eyebrow}</p>
          <figure className="chef-note__figure">
            <span className="chef-note__mark" aria-hidden="true">“</span>
            <blockquote className="chef-note__quote">{quote}</blockquote>
            <figcaption className="chef-note__attr">
              <span className="chef-note__rule" aria-hidden="true" />
              {attribution}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}

ChefNote.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
}

export default ChefNote
