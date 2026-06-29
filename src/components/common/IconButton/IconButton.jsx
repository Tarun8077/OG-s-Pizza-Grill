import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './IconButton.css'

/**
 * Circular, icon-only button. Always requires an accessible `label`
 * (rendered as aria-label) since there is no visible text.
 */
const IconButton = forwardRef(function IconButton(
  {
    as: Tag = 'button',
    label,
    variant = 'ghost',
    size = 'md',
    disabled = false,
    type,
    className,
    children,
    ...rest
  },
  ref
) {
  const isNativeButton = Tag === 'button'

  return (
    <Tag
      ref={ref}
      className={cn('icon-btn', `icon-btn--${variant}`, `icon-btn--${size}`, className)}
      aria-label={label}
      title={label}
      type={isNativeButton ? type || 'button' : undefined}
      disabled={isNativeButton ? disabled : undefined}
      aria-disabled={!isNativeButton && disabled ? true : undefined}
      {...rest}
    >
      <span className="icon-btn__icon" aria-hidden="true">
        {children}
      </span>
    </Tag>
  )
})

IconButton.propTypes = {
  as: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default IconButton
