import { useRef } from 'react'
import PropTypes from 'prop-types'
import { cn } from '../../../utils/classNames'
import DietDot from '../DietDot'
import './DietToggle.css'

const OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'veg', label: 'Veg' },
  { value: 'nonveg', label: 'Non-veg' },
]

/**
 * Single-select segmented control for the veg / non-veg / all filter.
 * Implemented as an ARIA radiogroup with roving focus + arrow-key navigation.
 */
const DietToggle = ({ value, onChange }) => {
  const refs = useRef([])

  const move = (dir) => {
    const idx = OPTIONS.findIndex((o) => o.value === value)
    const next = (idx + dir + OPTIONS.length) % OPTIONS.length
    onChange(OPTIONS[next].value)
    refs.current[next]?.focus()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      move(1)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      move(-1)
    }
  }

  return (
    <div className="diet-toggle" role="radiogroup" aria-label="Filter by dietary preference">
      {OPTIONS.map((opt, i) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            ref={(el) => (refs.current[i] = el)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            className={cn('diet-toggle__option', active && 'is-active')}
            onClick={() => onChange(opt.value)}
            onKeyDown={onKeyDown}
          >
            {opt.value !== 'all' && <DietDot vegetarian={opt.value === 'veg'} size="sm" />}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

DietToggle.propTypes = {
  value: PropTypes.oneOf(['all', 'veg', 'nonveg']).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default DietToggle
