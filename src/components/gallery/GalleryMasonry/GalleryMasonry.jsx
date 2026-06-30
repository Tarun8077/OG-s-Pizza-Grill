import PropTypes from 'prop-types'
import { FaExpand } from 'react-icons/fa6'
import { ImageWrapper } from '../../common'
import Reveal from '../../sections/Reveal'
import './GalleryMasonry.css'

/**
 * Column-based masonry of gallery photos. Each tile is a real <button> that
 * opens the lightbox, so keyboard users get it for free. Images lazy-load via
 * <ImageWrapper>; each tile reveals on scroll (GSAP, honors reduced-motion).
 */
const GalleryMasonry = ({ items, onOpen }) => {
  return (
    <ul className="gallery-masonry" role="list">
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} className="gallery-masonry__item" delay={(i % 3) * 0.06} y={28}>
          <button
            type="button"
            className="gallery-masonry__tile"
            onClick={() => onOpen(i)}
            aria-label={`View larger: ${item.title}`}
          >
            <ImageWrapper
              src={item.src}
              alt={item.alt}
              ratio={item.ratio}
              radius="md"
              className="gallery-masonry__image"
            />
            <span className="gallery-masonry__overlay" aria-hidden="true">
              <span className="gallery-masonry__title">{item.title}</span>
              <span className="gallery-masonry__icon">
                <FaExpand />
              </span>
            </span>
          </button>
        </Reveal>
      ))}
    </ul>
  )
}

GalleryMasonry.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ratio: PropTypes.string,
    })
  ).isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default GalleryMasonry
