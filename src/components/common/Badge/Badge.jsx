import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Badge.css'

/**
 * Small, non-interactive status/label pill (e.g. "New", "Vegan", "Spicy").
 * For interactive/selectable labels use <Chip> instead.
 */
const Badge = ({
  variant = 'neutral',
  size = 'md',
  icon,
  className,
  children,
  ...rest
}) => {
  return (
    <span
      className={cn('badge', `badge--${variant}`, `badge--${size}`, className)}
      {...rest}
    >
      {icon && <span className="badge__icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  )
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['neutral', 'primary', 'accent', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md']),
  icon: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Badge
