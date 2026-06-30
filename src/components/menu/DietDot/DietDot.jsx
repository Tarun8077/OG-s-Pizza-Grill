import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './DietDot.css'

/**
 * The familiar Indian veg / non-veg indicator: a bordered square enclosing a
 * dot — green for vegetarian, red otherwise. Decorative by default; the
 * meaning is conveyed in text elsewhere, but an accessible label is provided
 * so it is not silent to assistive tech when used standalone.
 */
const DietDot = ({ vegetarian, size = 'md', className, ...rest }) => {
  const label = vegetarian ? 'Vegetarian' : 'Non-vegetarian'
  return (
    <span
      className={cn('diet-dot', `diet-dot--${size}`, vegetarian ? 'diet-dot--veg' : 'diet-dot--nonveg', className)}
      role="img"
      aria-label={label}
      title={label}
      {...rest}
    >
      <span className="diet-dot__dot" aria-hidden="true" />
    </span>
  )
}

DietDot.propTypes = {
  vegetarian: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
}

export default DietDot
