/* Gallery content — built only from the real, supplied brand photography
   (src/assets/images). No placeholders, no stock, no invented imagery.

   IMPORTANT: the brand supplied ambience, venue and beverage photos only —
   there are NO food photographs. We therefore do not offer a "Food" filter,
   because we will not fill it with fabricated or misrepresented images. The
   honest categories below — Ambience, Drinks and Interior — reflect exactly
   what the photography actually shows. */

import { photos } from '../assets/images'

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ambience', label: 'Ambience' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'interior', label: 'Interior' },
]

export const GALLERY_ITEMS = [
  { id: 'patio-night-tall', src: photos.patioNightTall, category: 'ambience', ratio: '3/4', title: 'Under the pergola', alt: 'Live-edge wood tables under the pergola at dusk' },
  { id: 'patio-aerial-night', src: photos.patioAerialNight, category: 'ambience', ratio: '4/3', title: 'The garden from above', alt: 'The garden courtyard from above, lamps glowing at night' },
  { id: 'patio-diners-night', src: photos.patioDinersNight, category: 'ambience', ratio: '4/3', title: 'A full house', alt: 'Guests dining under the lamp-lit garden pergola at night' },
  { id: 'garden-day', src: photos.gardenDay, category: 'ambience', ratio: '4/3', title: 'The garden by day', alt: 'The curved garden bench and greenery by day' },
  { id: 'terrace-night', src: photos.terraceNight, category: 'ambience', ratio: '3/4', title: 'The terrace at night', alt: 'The terrace at night under hanging pendant lamps' },
  { id: 'meet-og', src: photos.meetOg, category: 'ambience', ratio: '3/4', title: 'Meet OG', alt: 'OG, the golden retriever the restaurant is named after, on the garden bench' },
  { id: 'bar-counter-night', src: photos.barCounterNight, category: 'interior', ratio: '4/3', title: 'The bar counter', alt: 'The warmly lit bar counter at night' },
  { id: 'table-lamp-night', src: photos.tableLampNight, category: 'interior', ratio: '3/4', title: 'Set for the evening', alt: 'An intimate lamp-lit table set for the evening' },
  { id: 'iced-latte', src: photos.icedLatte, category: 'drinks', ratio: '3/4', title: 'Iced filter coffee', alt: 'Iced filter coffee beside a warm brass table lamp' },
  { id: 'basil-cooler', src: photos.basilCooler, category: 'drinks', ratio: '3/4', title: 'House basil cooler', alt: 'A sparkling cooler garnished with fresh basil' },
]

export const GALLERY_SEO = {
  title: "Gallery — OG's Pizza & Grill",
  description:
    "Step inside OG's Pizza & Grill: the lamp-lit garden, the bar, the terrace and house coolers — an evening at our pet-friendly Noida space.",
}
