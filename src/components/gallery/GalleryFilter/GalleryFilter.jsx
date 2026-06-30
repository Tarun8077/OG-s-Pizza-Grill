import PropTypes from 'prop-types'
import { Chip } from '../../common'
import './GalleryFilter.css'

/**
 * Category filter for the gallery. Reuses the library <Chip> (a real button
 * with focus + keyboard activation). Single-select: the active chip reflects
 * the current filter via aria-pressed.
 */
const GalleryFilter = ({ categories, activeId, onSelect }) => {
  return (
    <div className="gallery-filter" role="group" aria-label="Filter gallery by category">
      {categories.map((cat) => (
        <Chip
          key={cat.id}
          selected={cat.id === activeId}
          onClick={() => onSelect(cat.id)}
          className="gallery-filter__chip"
        >
          {cat.label}
        </Chip>
      ))}
    </div>
  )
}

GalleryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default GalleryFilter
