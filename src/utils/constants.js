// Centralized app constants.
export const SITE_NAME = "OG's Pizza"

export const ROUTES = {
  HOME: '/',
  MENU: '/menu',
  ABOUT: '/about',
  CONTACT: '/contact',
}

// Primary navigation links, driven from ROUTES so the Header and router
// stay in sync from a single source of truth.
export const NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Menu', path: ROUTES.MENU },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Contact', path: ROUTES.CONTACT },
]
