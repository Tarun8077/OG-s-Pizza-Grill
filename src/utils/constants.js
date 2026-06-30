// Centralized app constants.
export const SITE_NAME = "OG's Pizza & Grill"

/* Canonical production origin — used for <link rel="canonical">, og:url and the
   sitemap. PLACEHOLDER: confirm/replace with the real domain before deploy.
   No trailing slash. */
export const SITE_URL = 'https://www.ogspizzaandgrill.com'

export const ROUTES = {
  HOME: '/',
  MENU: '/menu',
  GALLERY: '/gallery',
  ABOUT: '/about',
  CONTACT: '/contact',
}

// Primary navigation links, driven from ROUTES so the Header and router
// stay in sync from a single source of truth.
export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Menu', path: ROUTES.MENU },
  { label: 'Gallery', path: ROUTES.GALLERY },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Contact', path: ROUTES.CONTACT },
]
