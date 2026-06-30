import { useCallback, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FaXmark, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { IconButton } from '../../common'
import { lenisRef } from '../../../hooks/useLenis'
import './Lightbox.css'

/**
 * Accessible image lightbox. Rendered only when `index >= 0`.
 * - role="dialog" + aria-modal, labelled by the current image title.
 * - Keyboard: Esc closes, ← / → navigate, Tab is trapped within the dialog.
 * - Locks page scroll (pauses Lenis) while open and restores focus on close.
 */
const Lightbox = ({ items, index, onClose, onNavigate }) => {
  const open = index >= 0 && index < items.length
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const lastFocused = useRef(null)

  const item = open ? items[index] : null

  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate]
  )
  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate]
  )

  useEffect(() => {
    if (!open) return undefined

    lastFocused.current = document.activeElement

    // Lock scrolling: pause Lenis and hide body overflow.
    const lenis = lenisRef.current
    lenis?.stop()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusTimer = requestAnimationFrame(() => closeRef.current?.focus())

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      } else if (e.key === 'Tab') {
        // Trap focus within the dialog's interactive controls.
        const focusables = dialogRef.current?.querySelectorAll('button')
        if (!focusables || focusables.length === 0) return
        const list = Array.from(focusables)
        const first = list[0]
        const last = list[list.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(focusTimer)
      document.body.style.overflow = prevOverflow
      lenis?.start()
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus()
    }
  }, [open, onClose, prev, next])

  if (!open) return null

  const multiple = items.length > 1

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
      ref={dialogRef}
    >
      <button
        type="button"
        className="lightbox__backdrop"
        aria-label="Close gallery viewer"
        onClick={onClose}
      />

      <div className="lightbox__chrome">
        <IconButton
          ref={closeRef}
          label="Close"
          variant="solid"
          className="lightbox__close"
          onClick={onClose}
        >
          <FaXmark />
        </IconButton>
      </div>

      {multiple && (
        <IconButton
          label="Previous image"
          variant="solid"
          size="lg"
          className="lightbox__nav lightbox__nav--prev"
          onClick={prev}
        >
          <FaChevronLeft />
        </IconButton>
      )}

      <figure className="lightbox__figure">
        <img className="lightbox__img" src={item.src} alt={item.alt} />
        <figcaption className="lightbox__caption">
          <span className="lightbox__title">{item.title}</span>
          {multiple && (
            <span className="lightbox__count">
              {index + 1} / {items.length}
            </span>
          )}
        </figcaption>
      </figure>

      {multiple && (
        <IconButton
          label="Next image"
          variant="solid"
          size="lg"
          className="lightbox__nav lightbox__nav--next"
          onClick={next}
        >
          <FaChevronRight />
        </IconButton>
      )}
    </div>
  )
}

Lightbox.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default Lightbox
