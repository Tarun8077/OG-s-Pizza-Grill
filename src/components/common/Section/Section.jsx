import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './Section.css'

/**
 * Vertical-rhythm wrapper for page sections. Controls block padding and
 * optional background tone. Layout-only — does not constrain width
 * (compose with <Container> inside).
 */
const Section = ({
  as: Tag = 'section',
  size = 'default',
  tone = 'default',
  className,
  children,
  ...rest
}) => {
  return (
    <Tag
      className={cn(
        'ui-section',
        size !== 'default' && `ui-section--${size}`,
        tone !== 'default' && `ui-section--${tone}`,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Section.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  tone: PropTypes.oneOf(['default', 'surface', 'deep']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Section
