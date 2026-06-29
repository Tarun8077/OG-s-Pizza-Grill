import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { ROUTES, NAV_LINKS, SITE_NAME } from '../../utils/constants'
import { brand } from '../../assets/images'
import { FOOTER, INSTAGRAM } from '../../data/home'
import { Button } from '../common'
import './Footer.css'

const year = 2026

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to={ROUTES.HOME} className="footer__logo" aria-label={`${SITE_NAME} home`}>
            <img src={brand.logo} alt={`${SITE_NAME} logo`} width="64" height="64" />
          </Link>
          <p className="footer__tagline">{FOOTER.tagline}</p>
          <p className="footer__blurb">{FOOTER.blurb}</p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h2 className="footer__heading">Explore</h2>
          <ul className="footer__links" role="list">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Connect</h2>
          <a
            className="footer__insta"
            href={INSTAGRAM.url}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram aria-hidden="true" />
            <span>{INSTAGRAM.handle}</span>
          </a>
          <p className="footer__note">A pet-friendly garden — bring your fur companions.</p>
          <Button as={Link} to={ROUTES.CONTACT} variant="outline" size="sm" className="footer__cta">
            Reserve a table
          </Button>
        </div>
      </div>

      <div className="footer__bar">
        <p>© {year} {SITE_NAME}. All rights reserved.</p>
        <p className="footer__bar-tag">Where fire meets flavour.</p>
      </div>
    </footer>
  )
}

export default Footer
