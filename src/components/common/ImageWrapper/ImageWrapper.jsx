import { useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './ImageWrapper.css'

/**
 * Responsive image in a fixed aspect-ratio frame. Prevents layout shift,
 * lazy-loads by default, and fades the image in once it has decoded.
 * `alt` is required (use alt="" intentionally for decorative images).
 */
const ImageWrapper = ({
  src,
  alt,
  ratio = '4/3',
  fit = 'cover',
  radius = 'lg',
  overlay = false,
  loading = 'lazy',
  className,
  imgClassName,
  children,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <figure
      className={cn(
        'image-wrapper',
        `image-wrapper--radius-${radius}`,
        overlay && 'image-wrapper--overlay',
        className
      )}
      style={{ '--image-ratio': ratio }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn('image-wrapper__img', loaded && 'is-loaded', imgClassName)}
        style={{ objectFit: fit }}
      />
      {children && <figcaption className="image-wrapper__content">{children}</figcaption>}
    </figure>
  )
}

ImageWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.string,
  fit: PropTypes.oneOf(['cover', 'contain']),
  radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  overlay: PropTypes.bool,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  children: PropTypes.node,
}

export default ImageWrapper
