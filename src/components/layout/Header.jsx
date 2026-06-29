import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ROUTES, NAV_LINKS } from '../../utils/constants'
import './Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to={ROUTES.HOME} className="logo" onClick={closeMenu}>
          <h1>OG&apos;s Pizza & Grill</h1>
        </Link>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink key={path} to={path} end={path === ROUTES.HOME} onClick={closeMenu}>
              {label}
            </NavLink>
          ))}
        </nav>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header
