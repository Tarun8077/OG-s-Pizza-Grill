/* Home page content — sourced entirely from OG's Pizza & Grill's own menu
   and brand material. Spelling normalised from the menu PDF's text layer.
   No generic or invented copy. */

import { photos } from '../assets/images'

export const HERO = {
  kicker: 'Sit, Stay, Savour',
  titleLines: ['Where fire', 'meets flavour'],
  intro:
    'Grill-inspired plates from our signature wood-fired oven and Argentinian grill — classic Neapolitan pizzas, hand-rolled pastas and juicy steaks, crafted with care.',
}

export const STORY = {
  eyebrow: 'Our Story',
  title: 'Meet OG, the heart behind it all',
  paragraphs: [
    'OG’s is named after our beloved golden retriever — and like him, this is a place built on warmth, welcome and good company. We’re a proudly pet-friendly space.',
    'A symphony of flavours, where global cooking meets coastal Indian spices and textures. Tiramisu takes a trip to Kerala, parotta turns quesadilla, and mousse becomes raita.',
  ],
  signoff: 'We promise to surprise, comfort and delight.',
  image: photos.meetOg,
  imageAlt: 'OG, the golden retriever the restaurant is named after, on the garden bench',
}

export const SIGNATURE_DISHES = [
  {
    name: 'Margherita',
    category: 'Wood-fired Pizza',
    description: 'Marinara sauce, fresh mozzarella, basil — Neapolitan or thin crust.',
    price: '540',
  },
  {
    name: 'Pepperoni',
    category: 'Wood-fired Pizza',
    description: 'Marinara sauce, fresh mozzarella, cured pork pepperoni.',
    price: '780',
  },
  {
    name: 'Sukka Lamb Chops',
    category: 'From the Grill',
    description: 'Kerala sukka masala lamb chops, kappa mash, kosambari salad & papadam.',
    price: '780',
  },
  {
    name: 'Prawn Ravioli',
    category: 'Hand-rolled Pasta',
    description: 'Housemade prawn ravioli, moilee sauce, tempered curry leaf & mustard seed.',
    price: '620',
  },
  {
    name: 'Kongu Risotto',
    category: 'Coastal Signature',
    description: 'Chicken risotto biryani served with raita mousse & kosambari salad.',
    price: '520',
  },
  {
    name: 'Kerala Spiced Filter Coffee Tiramisu',
    category: 'Sweet Finale',
    description: 'Our take on the classic tiramisu, with filter coffee & Kerala spices.',
    price: '350',
  },
]

export const EXPERIENCE = {
  eyebrow: 'The Experience',
  title: 'A garden table, lit low and warm',
  image: photos.patioDinersNight,
  imageAlt: 'Guests dining under the lamp-lit garden pergola at night',
  pillars: [
    {
      title: 'Wood-fired Oven',
      text: 'Neapolitan pizzas blistered fast and hot, the way the dough was meant to be cooked.',
    },
    {
      title: 'Argentinian Grill',
      text: 'Steaks, chops and skewers kissed by open flame, finished with chimichurri and house sauces.',
    },
    {
      title: 'Coastal Indian Soul',
      text: 'Kerala spice and coastal technique threaded through everything — spice meeting sass.',
    },
    {
      title: 'Pet-Friendly',
      text: 'Bring your fur companions. Gather, feast, and make memories — OG would insist.',
    },
  ],
}

export const GALLERY = {
  eyebrow: 'The Space',
  title: 'An evening at OG’s',
  items: [
    { src: photos.patioNightTall, alt: 'Live-edge wood tables under the pergola at dusk', ratio: '3/4' },
    { src: photos.patioAerialNight, alt: 'The garden courtyard from above, lamps glowing', ratio: '16/10' },
    { src: photos.icedLatte, alt: 'Iced filter coffee beside a warm brass table lamp', ratio: '3/4' },
    { src: photos.gardenDay, alt: 'The curved garden bench and greenery by day', ratio: '16/10' },
    { src: photos.basilCooler, alt: 'A sparkling cooler garnished with fresh basil', ratio: '3/4' },
    { src: photos.terraceNight, alt: 'The terrace at night under hanging pendant lamps', ratio: '3/4' },
  ],
}

export const RESERVATION = {
  eyebrow: 'Sit, Stay, Savour',
  title: 'Save your table at OG’s',
  text:
    'Gather friends, family and your fur companions. Complement your meal with specialty coffee brewed to perfection, or a refreshing cooler.',
  image: photos.tableLampNight,
  imageAlt: 'An intimate lamp-lit table set for the evening',
}

export const INSTAGRAM = {
  eyebrow: 'From our table to yours',
  title: 'Follow the feed',
  handle: '@ogspizzaandgrill',
  url: 'https://www.instagram.com/ogspizzaandgrill/',
  items: [
    { src: photos.patioDinersNight, alt: 'A full house on a warm evening' },
    { src: photos.icedLatte, alt: 'Iced filter coffee in the afternoon light' },
    { src: photos.basilCooler, alt: 'House cooler with fresh basil' },
    { src: photos.gardenDay, alt: 'The garden seating by day' },
  ],
}

export const FOOTER = {
  tagline: 'Sit, Stay, Savour.',
  blurb:
    'Where fire meets flavour. Wood-fired pizzas, the Argentinian grill, and coastal Indian soul — in a pet-friendly garden.',
}

export const HOME_SEO = {
  title: "OG's Pizza & Grill — Wood-fired Pizza & Argentinian Grill in Noida",
  description:
    'Where fire meets flavour: wood-fired Neapolitan pizzas, the Argentinian grill and coastal Indian soul, served in a pet-friendly garden in Sector 104, Noida. Sit, stay, savour.',
}
