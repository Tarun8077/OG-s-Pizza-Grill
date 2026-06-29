import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Chip.css'

/**
 * Interactive, toggleable pill — typically used for filters/categories.
 * Renders a real <button> so keyboard activation (Enter/Space) and focus
 * work for free. `selected` is exposed via aria-pressed.
 */
const Chip = ({
  selected = false,
  disabled = false,
  size = 'md',
  leftIcon,
  onClick,
  type,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      type={type || 'button'}
      className={cn('chip', `chip--${size}`, selected && 'chip--selected', className)}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && <span className="chip__icon" aria-hidden="true">{leftIcon}</span>}
      <span className="chip__label">{children}</span>
    </button>
  )
}

Chip.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md']),
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Chip
