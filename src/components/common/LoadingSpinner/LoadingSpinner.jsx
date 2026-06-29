import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './LoadingSpinner.css'

/**
 * Accessible loading indicator. Exposes role="status" with a visually
 * hidden label so screen readers announce the loading state.
 */
const LoadingSpinner = ({
  size = 'md',
  tone = 'primary',
  label = 'Loading…',
  inline = false,
  className,
  ...rest
}) => {
  return (
    <span
      className={cn(
        'spinner',
        `spinner--${size}`,
        `spinner--${tone}`,
        inline && 'spinner--inline',
        className
      )}
      role="status"
      {...rest}
    >
      <span className="spinner__ring" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  )
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  tone: PropTypes.oneOf(['primary', 'accent', 'inherit']),
  label: PropTypes.string,
  inline: PropTypes.bool,
  className: PropTypes.string,
}

export default LoadingSpinner
