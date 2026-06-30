import { useId } from 'react'
import PropTypes from 'prop-types'
import { FaMagnifyingGlass, FaXmark } from 'react-icons/fa6'
import './MenuSearch.css'

/**
 * Accessible search field for the menu. Controlled input with a clear button;
 * results count is announced politely via aria-live from the parent.
 */
const MenuSearch = ({ value, onChange, resultCount }) => {
  const id = useId()
  return (
    <div className="menu-search">
      <label htmlFor={id} className="sr-only">
        Search the menu
      </label>
      <span className="menu-search__icon" aria-hidden="true">
        <FaMagnifyingGlass />
      </span>
      <input
        id={id}
        type="search"
        className="menu-search__input"
        placeholder="Search dishes, ingredients…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        aria-describedby={`${id}-count`}
      />
      {value && (
        <button
          type="button"
          className="menu-search__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <FaXmark aria-hidden="true" />
        </button>
      )}
      <span id={`${id}-count`} className="sr-only" aria-live="polite">
        {value ? `${resultCount} ${resultCount === 1 ? 'dish' : 'dishes'} found` : ''}
      </span>
    </div>
  )
}

MenuSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
}

export default MenuSearch
