import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Card.css'

/**
 * Surface container for grouped content. Variants control elevation/treatment.
 * Set `interactive` for a subtle hover lift (use on clickable cards). When
 * rendered as a non-interactive element but made clickable, pass `as` + role.
 */
const Card = forwardRef(function Card(
  {
    as: Tag = 'div',
    variant = 'default',
    padding = 'md',
    interactive = false,
    className,
    children,
    ...rest
  },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        'card',
        `card--${variant}`,
        `card--pad-${padding}`,
        interactive && 'card--interactive',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
})

Card.propTypes = {
  as: PropTypes.elementType,
  variant: PropTypes.oneOf(['default', 'elevated', 'outline', 'glass']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  interactive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Card
