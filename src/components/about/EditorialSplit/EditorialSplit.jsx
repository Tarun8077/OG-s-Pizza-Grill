import PropTypes from 'prop-types'
import { Section, Container, AnimatedText, ImageWrapper } from '../../common'
import Reveal from '../../sections/Reveal'
import { cn } from '../../../utils/classNames'
import './EditorialSplit.css'

/**
 * Reusable two-column editorial block: an image on one side, an eyebrow +
 * heading + paragraphs on the other. Alternating `reverse` flips the sides so
 * a stack of these reads as a rhythmic editorial spread. Composes the existing
 * library primitives — no bespoke layout duplicated per About section.
 */
const EditorialSplit = ({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  reverse = false,
  ratio = '4/5',
  tone = 'default',
  id,
}) => {
  const titleId = id ? `${id}-title` : undefined
  return (
    <Section
      tone={tone}
      className={cn('editorial-split', reverse && 'editorial-split--reverse')}
      aria-labelledby={titleId}
    >
      <Container className="editorial-split__grid">
        <Reveal className="editorial-split__media" y={48}>
          <ImageWrapper src={image} alt={imageAlt} ratio={ratio} radius="lg" />
        </Reveal>

        <div className="editorial-split__content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <AnimatedText
            as="h2"
            id={titleId}
            className="editorial-split__title display-2"
            text={title}
            scrollReveal
          />
          {paragraphs.map((text, i) => (
            <Reveal as="p" key={i} className="editorial-split__para" delay={i * 0.05}>
              {text}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

EditorialSplit.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  ratio: PropTypes.string,
  tone: PropTypes.oneOf(['default', 'surface', 'deep']),
  id: PropTypes.string,
}

export default EditorialSplit
