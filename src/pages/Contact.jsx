import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Section, Container } from '../components/common'
import Reveal from '../components/sections/Reveal'
import { ContactHero, ContactInfo, ContactForm } from '../components/contact'
import { CONTACT, CONTACT_INTRO, CONTACT_SEO } from '../data/contact'
import './Contact.css'

const Contact = () => {
  useDocumentTitle(CONTACT_SEO.title)

  return (
    <div className="contact-page">
      <ContactHero
        eyebrow={CONTACT_INTRO.eyebrow}
        titleLines={CONTACT_INTRO.titleLines}
        lead={CONTACT_INTRO.lead}
      />

      <Section className="contact-page__body" aria-label="Send us a message and visit details">
        <Container>
          <div className="contact-page__grid">
            <Reveal className="contact-page__form" y={32}>
              <ContactForm phone={CONTACT.phone} whatsapp={CONTACT.whatsapp} />
            </Reveal>

            <Reveal className="contact-page__info" y={32} delay={0.08}>
              <ContactInfo contact={CONTACT} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default Contact
