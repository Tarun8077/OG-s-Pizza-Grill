/* Contact details — VERIFIED business information only.
   Do not invent values: there is no verified public email, so email is
   intentionally omitted everywhere (the contact form is a UI without a live
   submission endpoint). This file is the single source of truth for the
   Contact page and the footer. */

const PHONE_DISPLAY = '+91 98710 66105'
const PHONE_E164 = '+919871066105' // tel: / wa.me canonical form
const WA_NUMBER = '919871066105'

const MAPS_QUERY = 'HA-32, Block A, Sector 104, Noida, Uttar Pradesh 201301'

export const CONTACT = {
  name: "OG's Pizza & Grill",

  address: {
    lines: ['HA-32, Block A, Sector 104', 'Noida, Uttar Pradesh 201301', 'India'],
    full: 'HA-32, Block A, Sector 104, Noida, Uttar Pradesh 201301, India',
  },

  phone: {
    display: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
  },

  whatsapp: {
    display: PHONE_DISPLAY,
    href: `https://wa.me/${WA_NUMBER}`,
  },

  // Mon–Sun, single block — kept as a list so the UI can render rows.
  hours: [{ days: 'Monday – Sunday', time: '10:00 AM – 11:00 PM' }],

  maps: {
    link: 'https://maps.google.com/?q=HA-32,+Block+A,+Sector+104,+Noida,+Uttar+Pradesh+201301',
    embed: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`,
  },

  instagram: {
    handle: '@ogspizzaandgrill',
    url: 'https://www.instagram.com/ogspizzaandgrill/',
  },
}

// Page micro-copy for the Contact hero. UI/voice copy only — contains no
// invented business facts (those live in CONTACT above, verified).
export const CONTACT_INTRO = {
  eyebrow: 'Get in Touch',
  titleLines: ['Come say', 'hello'],
  lead: 'Reserve a garden table, plan a celebration, or just ask us a question — we’d love to hear from you. For the fastest reply, call or WhatsApp us; the form reaches us too.',
}

export const CONTACT_SEO = {
  title: "Contact & Reservations — OG's Pizza & Grill",
  description:
    "Visit OG's Pizza & Grill in Sector 104, Noida. Open daily 10 AM–11 PM. Call or WhatsApp +91 98710 66105 to reserve a table in our pet-friendly garden.",
}
