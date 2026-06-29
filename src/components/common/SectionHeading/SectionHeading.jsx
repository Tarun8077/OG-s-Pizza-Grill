import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './SectionHeading.css'

/**
 * Editorial heading block: optional eyebrow kicker, a title, and an
 * optional subtitle. Reuses global typography utilities for the type styles.
 */
const SectionHeading = ({
  as: Tag = 'h2',
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  children,
  ...rest
}) => {
  return (
    <header
      className={cn('section-heading', `section-heading--${align}`, className)}
      {...rest}
    >
      {eyebrow && <span className="eyebrow section-heading__eyebrow">{eyebrow}</span>}
      <Tag className="section-heading__title display-3">{title}</Tag>
      {subtitle && <p className="section-heading__subtitle lead">{subtitle}</p>}
      {children}
    </header>
  )
}

SectionHeading.propTypes = {
  as: PropTypes.elementType,
  eyebrow: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
  children: PropTypes.node,
}

export default SectionHeading
