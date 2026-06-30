import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { FaPaperPlane, FaCheck, FaWhatsapp } from 'react-icons/fa6'
import { Button } from '../../common'
import './ContactForm.css'

/**
 * Contact form — UI only, ready for backend integration.
 *
 * There is no live submission endpoint yet, so on a valid submit we surface a
 * graceful confirmation and point the visitor at the verified phone / WhatsApp
 * for an immediate reply. Wire a real POST where marked when a backend exists.
 *
 * The email field collects the *visitor's* address (so we can reply) — it does
 * NOT display or invent any business email.
 */
const TOPICS = [
  'General enquiry',
  'Table reservation',
  'Catering & events',
  'Feedback',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL = { name: '', email: '', phone: '', topic: TOPICS[0], message: '' }

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'Please add an email so we can reply.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email doesn’t look quite right.'
  if (!values.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

const ContactForm = ({ phone, whatsapp, onSubmit }) => {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const update = (field) => (event) => {
    const { value } = event.target
    setValues((prev) => ({ ...prev, [field]: value }))
    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const firstInvalid = ['name', 'email', 'message'].find((key) => found[key])
      formRef.current?.elements?.[firstInvalid]?.focus?.()
      return
    }

    // TODO: wire to a real endpoint when a backend exists, e.g.
    //   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
    onSubmit?.(values)
    setSubmitted(true)
  }

  const reset = () => {
    setValues(INITIAL)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="contact-form contact-form--done" role="status" aria-live="polite">
        <span className="contact-form__check" aria-hidden="true">
          <FaCheck />
        </span>
        <h2 className="contact-form__done-title">Thank you{values.name ? `, ${values.name.trim()}` : ''}!</h2>
        <p className="contact-form__done-text">
          Your message is ready to send. We’re still wiring up online messaging — for an
          immediate reply, call or message us and we’ll sort you out.
        </p>
        <div className="contact-form__done-actions">
          <Button as="a" href={phone.href} variant="primary">
            Call {phone.display}
          </Button>
          <Button
            as="a"
            href={whatsapp.href}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            leftIcon={<FaWhatsapp />}
          >
            WhatsApp us
          </Button>
        </div>
        <button type="button" className="contact-form__again" onClick={reset}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="contact-form__input"
            value={values.name}
            onChange={update('name')}
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
          />
          {errors.name && (
            <p className="contact-form__error" id="cf-name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="contact-form__input"
            value={values.email}
            onChange={update('email')}
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
          />
          {errors.email && (
            <p className="contact-form__error" id="cf-email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-phone">
            Phone <span className="contact-form__optional">(optional)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            className="contact-form__input"
            value={values.phone}
            onChange={update('phone')}
            autoComplete="tel"
          />
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="cf-topic">
            Reason
          </label>
          <select
            id="cf-topic"
            name="topic"
            className="contact-form__input contact-form__select"
            value={values.topic}
            onChange={update('topic')}
          >
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="cf-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="contact-form__input contact-form__textarea"
          rows={5}
          value={values.message}
          onChange={update('message')}
          required
          aria-required="true"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
        />
        {errors.message && (
          <p className="contact-form__error" id="cf-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth rightIcon={<FaPaperPlane />}>
        Send message
      </Button>
      <p className="contact-form__note">
        We’ll only use your details to reply to this message.
      </p>
    </form>
  )
}

ContactForm.propTypes = {
  phone: PropTypes.shape({
    display: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  whatsapp: PropTypes.shape({ href: PropTypes.string.isRequired }).isRequired,
  onSubmit: PropTypes.func,
}

export default ContactForm
