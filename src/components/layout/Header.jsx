import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ROUTES, NAV_LINKS, SITE_NAME } from '../../utils/constants'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  // Close the mobile drawer on Escape for keyboard users.
  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo is a brand mark, not the page heading — kept as a span so each
            page has exactly one <h1> (its hero). */}
        <Link to={ROUTES.HOME} className="logo" onClick={closeMenu} aria-label={`${SITE_NAME} — home`}>
          <span className="logo__name">OG&apos;s Pizza &amp; Grill</span>
        </Link>

        <nav
          id="primary-navigation"
          className={`nav ${isOpen ? 'nav-open' : ''}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink key={path} to={path} end={path === ROUTES.HOME} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
