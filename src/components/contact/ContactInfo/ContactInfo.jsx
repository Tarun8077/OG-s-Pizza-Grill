import PropTypes from 'prop-types'
import {
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaRegClock,
  FaInstagram,
  FaArrowRightLong,
} from 'react-icons/fa6'
import { Card, Button } from '../../common'
import './ContactInfo.css'

/**
 * Verified visit + contact details, rendered from the single source of truth
 * (data/contact.js). Every value here is real: clickable tel:/wa.me/maps
 * links, the genuine address and the genuine opening hours. No email is shown
 * because no verified address exists — by design.
 */
const ContactInfo = ({ contact }) => {
  const { address, phone, whatsapp, hours, instagram, maps } = contact

  return (
    <aside className="contact-info" aria-label="Visit and contact details">
      <Card variant="glass" padding="lg" className="contact-info__card">
        <ul className="contact-info__list" role="list">
          {/* Address */}
          <li className="contact-info__row">
            <span className="contact-info__icon" aria-hidden="true">
              <FaLocationDot />
            </span>
            <div className="contact-info__body">
              <h3 className="contact-info__label">Visit us</h3>
              <address className="contact-info__address">
                {address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <Button
                as="a"
                href={maps.link}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                size="sm"
                rightIcon={<FaArrowRightLong />}
                className="contact-info__action"
              >
                Get directions
              </Button>
            </div>
          </li>

          {/* Phone + WhatsApp */}
          <li className="contact-info__row">
            <span className="contact-info__icon" aria-hidden="true">
              <FaPhone />
            </span>
            <div className="contact-info__body">
              <h3 className="contact-info__label">Call or WhatsApp</h3>
              <a className="contact-info__link" href={phone.href}>
                {phone.display}
              </a>
              <Button
                as="a"
                href={whatsapp.href}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
                leftIcon={<FaWhatsapp />}
                className="contact-info__action"
              >
                Message on WhatsApp
              </Button>
            </div>
          </li>

          {/* Hours */}
          <li className="contact-info__row">
            <span className="contact-info__icon" aria-hidden="true">
              <FaRegClock />
            </span>
            <div className="contact-info__body">
              <h3 className="contact-info__label">Opening hours</h3>
              <dl className="contact-info__hours">
                {hours.map(({ days, time }) => (
                  <div key={days} className="contact-info__hours-row">
                    <dt>{days}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </li>

          {/* Instagram */}
          <li className="contact-info__row">
            <span className="contact-info__icon" aria-hidden="true">
              <FaInstagram />
            </span>
            <div className="contact-info__body">
              <h3 className="contact-info__label">Follow along</h3>
              <a
                className="contact-info__link"
                href={instagram.url}
                target="_blank"
                rel="noreferrer"
              >
                {instagram.handle}
              </a>
            </div>
          </li>
        </ul>
      </Card>
    </aside>
  )
}

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    address: PropTypes.shape({
      lines: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    phone: PropTypes.shape({
      display: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    whatsapp: PropTypes.shape({ href: PropTypes.string.isRequired }).isRequired,
    hours: PropTypes.arrayOf(
      PropTypes.shape({ days: PropTypes.string.isRequired, time: PropTypes.string.isRequired })
    ).isRequired,
    instagram: PropTypes.shape({
      handle: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
    maps: PropTypes.shape({ link: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
}

export default ContactInfo
