/* About page content — grounded entirely in OG's Pizza & Grill's established
   brand facts (the menu PDF, the home-page copy and the supplied photography).
   Deliberately avoids inventing specifics we cannot verify — no founding
   dates, no chef names, no awards, no seat counts. The "timeline" is the
   honest craft journey of a plate, not a fabricated company history. The chef's
   note is attributed to the kitchen, not an invented individual.

   Imagery note (carried over from the menu): the brand supplied only ambience,
   venue and beverage photography — no per-dish food photos exist. We use those
   real atmosphere shots honestly and never imply they are food. */

import { photos } from '../assets/images'

export const ABOUT_HERO = {
  eyebrow: 'Our Story',
  titleLines: ['Sit, stay,', 'savour'],
  lead: 'OG’s Pizza & Grill is where fire meets flavour — wood-fired pizzas, the Argentinian grill and coastal Indian soul, served in a pet-friendly garden lit low and warm.',
}

// Brand Story — paired with the dog the place is named after.
export const ABOUT_STORY = {
  eyebrow: 'The Beginning',
  title: 'Named after OG, built on welcome',
  paragraphs: [
    'OG’s is named after our beloved golden retriever — and like him, this is a place built on warmth, welcome and good company. From the first table to the last, the idea has never changed: gather friends, family and fur companions, and make a meal feel like home.',
    'It’s a proudly pet-friendly garden, lit low and warm, where an evening stretches comfortably into the night. Sit, stay, savour — OG would insist.',
  ],
  image: photos.meetOg,
  imageAlt: 'OG, the golden retriever the restaurant is named after, on the garden bench',
}

// Philosophy — the brand's own "symphony of flavours" line, as a statement band.
export const ABOUT_PHILOSOPHY = {
  eyebrow: 'Our Philosophy',
  title: 'A symphony of flavours',
  text: 'Where global cooking meets coastal Indian spice and texture. Tiramisu takes a trip to Kerala, parotta turns quesadilla, and mousse becomes raita. We promise to surprise, comfort and delight — never the same note twice.',
  image: photos.patioAerialNight,
  imageAlt: 'The lamp-lit garden courtyard at OG’s seen from above at night',
}

// Wood-fired Pizza Story — craft narrative (atmosphere image, honestly the venue).
export const ABOUT_WOODFIRED = {
  eyebrow: 'The Wood-Fired Oven',
  title: 'Blistered fast, the way dough was meant to be cooked',
  paragraphs: [
    'Our pizzas are fired hard and fast in the wood-fired oven — a Neapolitan char on the crust, a tender, airy crumb within. Choose Neapolitan or thin crust; both blister in minutes against live flame.',
    'From a classic Margherita to a fully loaded Meat Monster, the oven is the heart of the kitchen, and the reason a slice here tastes of smoke and patience at once.',
  ],
  image: photos.patioNightTall,
  imageAlt: 'Live-edge wood tables glowing under the pergola at dusk',
}

// Fresh Ingredients — house-made craft (garden-by-day image reads honest & fresh).
export const ABOUT_INGREDIENTS = {
  eyebrow: 'Fresh & House-Made',
  title: 'Rolled, baked and sauced in-house',
  paragraphs: [
    'Pasta is hand-rolled in the kitchen — fettuccini, ravioli, cannelloni and lasagna, made the slow way. Garlic bread is baked to order, sauces are built from scratch, and the ice creams are 100% milk-based, made without compromise.',
    'Coastal Indian technique threads through everything: ghee roast, moilee, sukka masala and curry-leaf tempering, drawn from the kitchen’s own roots.',
  ],
  image: photos.gardenDay,
  imageAlt: 'The curved garden bench and fresh greenery at OG’s by day',
}

// Signature Experience — the room and the evening.
export const ABOUT_EXPERIENCE = {
  eyebrow: 'The Experience',
  title: 'A garden table, lit low and warm',
  paragraphs: [
    'The wood-fired oven, the Argentinian grill and a coastal-Indian soul share one garden. Steaks, chops and skewers finish over open flame with chimichurri and house sauces; specialty coffee and fresh coolers carry the afternoon into the evening.',
    'Bring the people you love — and the dog. Gather, feast and stay a while.',
  ],
  image: photos.patioDinersNight,
  imageAlt: 'Guests dining under the lamp-lit garden pergola at night',
}

// Craft journey — an honest "from flame to table" sequence, not a dated history.
export const ABOUT_TIMELINE = {
  eyebrow: 'From Flame to Table',
  title: 'How a plate finds you',
  steps: [
    { label: 'The fire is lit', text: 'The wood-fired oven and the grill come up to heat — everything here begins with flame.' },
    { label: 'Made by hand', text: 'Dough is stretched, pasta is rolled, sauces are built from scratch in the kitchen.' },
    { label: 'Fire meets flavour', text: 'Pizzas blister Neapolitan-fast; steaks and skewers char over open coals.' },
    { label: 'A coastal finish', text: 'Kerala spice and coastal technique tie the plate together — spice meeting sass.' },
    { label: 'Sit, stay, savour', text: 'It arrives at your garden table, lit low and warm. Stay as long as you like.' },
  ],
}

export const ABOUT_CHEF_NOTE = {
  eyebrow: 'From the Kitchen',
  quote:
    'We cook the food we want to eat with the people we love — a little fire, a little spice, and a lot of welcome. If you leave fuller and happier than you arrived, we’ve done our job.',
  attribution: 'The OG Kitchen',
}

export const ABOUT_VALUES = {
  eyebrow: 'What We Stand For',
  title: 'The things we won’t compromise on',
  items: [
    { title: 'Warmth & Welcome', text: 'A pet-friendly garden where everyone — and every good dog — has a seat at the table.' },
    { title: 'Fire & Craft', text: 'The wood-fired oven and Argentinian grill at the centre of everything we serve.' },
    { title: 'Coastal Soul', text: 'Kerala spice and coastal Indian technique woven honestly through the menu.' },
    { title: 'Made Fresh', text: 'Hand-rolled pasta, bread baked to order, scratch sauces and milk-based ice creams.' },
  ],
}

export const ABOUT_SEO = {
  title: "Our Story — OG's Pizza & Grill",
  description:
    "The story behind OG's Pizza & Grill: named after a golden retriever, built on welcome. Wood-fired pizzas, the Argentinian grill and coastal Indian soul in a pet-friendly Noida garden.",
}
