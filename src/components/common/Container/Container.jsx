import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Container.css'

/**
 * Centered max-width wrapper that constrains content and applies
 * responsive horizontal gutters. The single source of truth for page width.
 */
const Container = ({
  as: Tag = 'div',
  size = 'default',
  flush = false,
  className,
  children,
  ...rest
}) => {
  return (
    <Tag
      className={cn(
        'ui-container',
        size !== 'default' && `ui-container--${size}`,
        flush && 'ui-container--flush',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Container.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.oneOf(['narrow', 'default', 'wide', 'fluid']),
  flush: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container
