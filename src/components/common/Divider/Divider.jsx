import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Divider.css'

/**
 * Visual separator. Horizontal or vertical, solid or gradient, with an
 * optional centered label (e.g. "or"). Decorative dividers are hidden from
 * assistive tech; labelled dividers expose their text.
 */
const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className,
  ...rest
}) => {
  if (label && orientation === 'horizontal') {
    return (
      <div
        className={cn('ui-divider', 'ui-divider--labelled', `ui-divider--${variant}`, className)}
        role="separator"
        {...rest}
      >
        <span className="ui-divider__label">{label}</span>
      </div>
    )
  }

  return (
    <hr
      className={cn(
        'ui-divider',
        `ui-divider--${orientation}`,
        `ui-divider--${variant}`,
        className
      )}
      aria-orientation={orientation}
      {...rest}
    />
  )
}

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['solid', 'gradient']),
  label: PropTypes.node,
  className: PropTypes.string,
}

export default Divider
