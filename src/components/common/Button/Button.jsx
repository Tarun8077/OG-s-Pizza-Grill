import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Button.css'

/**
 * Primary action element. Polymorphic via `as` (renders a <button> by
 * default, or e.g. a router <Link> / <a>). Premium hover handled in CSS:
 * lift, glow, and a gradient sheen sweep.
 */
const Button = forwardRef(function Button(
  {
    as: Tag = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    type,
    className,
    children,
    ...rest
  },
  ref
) {
  const isNativeButton = Tag === 'button'
  const isDisabled = disabled || loading

  return (
    <Tag
      ref={ref}
      className={cn(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth && 'btn--full',
        loading && 'btn--loading',
        className
      )}
      // Only native buttons get a type/disabled attribute; links use aria.
      type={isNativeButton ? type || 'button' : undefined}
      disabled={isNativeButton ? isDisabled : undefined}
      aria-disabled={!isNativeButton && isDisabled ? true : undefined}
      aria-busy={loading || undefined}
      {...rest}
    >
      <span className="btn__sheen" aria-hidden="true" />
      {leftIcon && <span className="btn__icon" aria-hidden="true">{leftIcon}</span>}
      <span className="btn__label">{children}</span>
      {rightIcon && <span className="btn__icon" aria-hidden="true">{rightIcon}</span>}
    </Tag>
  )
})

Button.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Button
