import { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import './CategoryNav.css'

/**
 * Horizontal, scroll-spy-driven category navigation. A single underline
 * indicator slides to the active item. Clicking scrolls the page (handled by
 * the parent); the active item also auto-centres within this strip.
 */
const CategoryNav = ({ categories, activeId, onSelect }) => {
  const listRef = useRef(null)
  const btnRefs = useRef({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false })

  useLayoutEffect(() => {
    const btn = btnRefs.current[activeId]
    const list = listRef.current
    if (!btn || !list) return

    setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth, ready: true })

    // Keep the active chip in view as the user scrolls through sections.
    const bLeft = btn.offsetLeft
    const bRight = bLeft + btn.offsetWidth
    const view = list.scrollLeft
    const viewRight = view + list.clientWidth
    if (bLeft < view + 24) {
      list.scrollTo({ left: bLeft - 24, behavior: 'smooth' })
    } else if (bRight > viewRight - 24) {
      list.scrollTo({ left: bRight - list.clientWidth + 24, behavior: 'smooth' })
    }
  }, [activeId, categories])

  return (
    <nav className="category-nav" aria-label="Menu categories">
      <ul className="category-nav__list" ref={listRef} role="list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              type="button"
              ref={(el) => (btnRefs.current[cat.id] = el)}
              className={cn('category-nav__item', cat.id === activeId && 'is-active')}
              aria-current={cat.id === activeId ? 'true' : undefined}
              onClick={() => onSelect(cat.id)}
            >
              {cat.label}
            </button>
          </li>
        ))}
        <span
          className="category-nav__indicator"
          aria-hidden="true"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`,
            opacity: indicator.ready ? 1 : 0,
          }}
        />
      </ul>
    </nav>
  )
}

CategoryNav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  activeId: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
}

export default CategoryNav
