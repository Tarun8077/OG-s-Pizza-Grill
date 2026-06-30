# OG's Pizza & Grill — Project Status

**Last Updated:** June 30, 2026
**Status:** 🟢 Milestone 6 complete — luxury UX layer, micro-interactions, performance, SEO and accessibility polish all shipped. Build + lint green.

---

## 🎯 Current State

A React 18 + Vite 5 application with functional routing, smooth scroll (Lenis),
GSAP, and now a **complete premium design system**. The visual language is
token-driven (warm-luxury palette, editorial typography) with a modern CSS
architecture. Build and lint are both green.

---

## ✅ Completed Milestones

### Foundation (scaffolding)
- React 18 + Vite 5, ESLint (clean), all dependencies installed.
- Entry chain: `index.html` → `main.jsx` (`StrictMode` + `BrowserRouter`) → `App.jsx`.
- `useLenis` smooth-scroll hook; `utils/gsap.js` central GSAP/ScrollTrigger registration.

### Navigation (functional routing)
- Routes wired in `App.jsx`: `/`, `/menu`, `/about`, `/contact`, plus `*` (404).
- `constants.js` is the single source of truth (`ROUTES` + `NAV_LINKS`).
- Responsive `Header` with hamburger drawer, animated underline, active states.
- Pages exist: `Home`, `Menu`, `About`, `Contact`, `NotFound`.

### Milestone 1 — Design System & Theming Foundation ✅
- **`src/styles/theme.css`** — full design-token set:
  colors (raw ramps + semantic), typography (serif display + sans body, fluid
  scale), spacing, border radius, shadows (warm-tinted + glows), z-index,
  animation durations/easings, and breakpoint reference tokens.
  Includes `prefers-reduced-motion` overrides.
- **`src/styles/reset.css`** — modern reset; removes all default Vite styles;
  full-width `#root`; token-driven focus ring, selection, custom scrollbar.
- **`src/styles/utilities.css`** — hand-built utility layer (no Tailwind/Bootstrap):
  containers, sections, flex/grid helpers, editorial typography utilities
  (`.display-1/2/3`, `.eyebrow`, `.lead`, `.text-gradient`), surfaces, spacing,
  `.sr-only`, `.skip-link`.
- **`src/styles/index.css`** — orchestrator (`@import` theme → reset → utilities)
  plus global base element styling (body background gradients, heading/paragraph/
  link defaults). All Vite default styles removed.
- **`src/styles/App.css`** — refactored app-shell: full-width layout, removed the
  old `#root { max-width: 1280px; text-align: center }` centering constraint.
  Token-based styles for existing markup (`.page`, `.page-header`, `.hero`, `.back-home`).
- **`src/components/layout/Header.css`** — refactored to consume design tokens
  (no hardcoded colors/spacing/timing).
- **`index.html`** — Playfair Display + Inter via Google Fonts (preconnect),
  meta description, theme-color, updated title to "OG's Pizza & Grill".

**Design language:** warm-luxury — charcoal espresso base, ember-red primary,
antique-gold accent, warm cream text; editorial serif headings + clean sans body.

### Milestone 2 — Reusable UI Component Library ✅
Location: `src/components/common/<Component>/` — each with `Component.jsx`,
`Component.css`, and `index.js`. A barrel `common/index.js` enables
`import { Button, Card } from '../components/common'`.

| Component | Variants / key props | Notes |
|-----------|----------------------|-------|
| **Button** | `variant` (primary/secondary/outline/ghost), `size`, `fullWidth`, `loading`, `disabled`, `leftIcon`/`rightIcon`, polymorphic `as` | Premium CSS hover: lift, glow, sheen sweep. `forwardRef`. |
| **IconButton** | `variant` (solid/outline/ghost), `size`, required `label` (a11y) | Circular icon-only button. `forwardRef`. |
| **Card** | `variant` (default/elevated/outline/glass), `padding`, `interactive` | Subtle hover elevation when interactive. `forwardRef`. |
| **Container** | `size` (narrow/default/wide/fluid), `flush`, `as` | Single source of truth for page width. |
| **Section** | `size` (sm/default/lg), `tone` (default/surface/deep), `as` | Vertical rhythm + background tone. |
| **SectionHeading** | `eyebrow`, `title`, `subtitle`, `align`, `as` | Reuses global type utilities. |
| **Badge** | `variant` (neutral/primary/accent/success/danger), `size`, `icon` | Non-interactive label pill. |
| **Chip** | `selected`, `disabled`, `size`, `leftIcon`, `onClick` | Interactive filter chip; real `<button>` + `aria-pressed`. |
| **Divider** | `orientation`, `variant` (solid/gradient), `label` | Horizontal/vertical, optional centered label. |
| **ImageWrapper** | `src`, required `alt`, `ratio`, `fit`, `radius`, `overlay`, `loading` | Aspect-ratio frame, lazy-load, fade-in on decode. |
| **AnimatedText** | `animation` (fade/fade-up/slide), `split`, `stagger`, `scrollReveal` | GSAP word-stagger reveal; honors reduced-motion. Consumes `utils/gsap.js`. |
| **LoadingSpinner** | `size`, `tone`, `label`, `inline` | `role="status"` + visually-hidden label. |

**Shared rules applied:** token-driven (no hardcoded colors), keyboard
`:focus-visible` rings, hover/active states, disabled states where applicable,
PropTypes validation on every component.

**Helper added:** `src/utils/classNames.js` (`cn`) for conditional class merging.

**Refactors:**
- `utils/gsap.js` is now actually consumed (by AnimatedText).
- Removed duplicated `.container` / `.section` / `.divider` / `.surface` blocks
  from `utilities.css` — these are now owned by their components.
- Existing pages adopt the library: Menu / About / Contact / NotFound replaced
  their duplicated `page-header` markup with `<Container>` + `<SectionHeading>`;
  NotFound's back link is now a `<Button as={Link}>`. Dead `.page-header` /
  `.back-home` CSS removed from `App.css`; `.page` recentered.

### Milestone 3 — Home Page (premium hero + sections) ✅
Location: `src/components/sections/<Section>/` — each with `Section.jsx`,
`Section.css`, and `index.js`; barrel at `sections/index.js`. Content is
data-driven via `src/data/home.js`. `pages/Home.jsx` composes the sections in
order.

| Section | Purpose |
|---------|---------|
| **Hero** | Full-bleed night-courtyard image, kicker/headline, dual CTA, GSAP parallax on scroll. (`fetchPriority` on the LCP image.) |
| **StoryPreview** | Brand story teaser with editorial copy + image. |
| **SignatureDishes** | Featured menu highlights grid. |
| **Experience** | Value/atmosphere pillars. |
| **GalleryPreview** | Photo grid teaser into the gallery. |
| **ReservationCTA** | Booking call-to-action band. |
| **InstagramPreview** | Social feed teaser. |

**Supporting pieces:** `sections/Reveal/` (GSAP scroll-reveal wrapper reused
across sections), `components/layout/Footer.jsx` + `Layout.jsx`, and the
photo asset map in `src/assets/images.js`.

### Milestone 4 — Menu Page (filterable category grid) ✅
Data-driven from `src/data/menu.js` (14 categories, full restaurant menu
extracted verbatim from the brand PDF). Feature components live in
`src/components/menu/<Component>/` with a barrel at `menu/index.js`.

| Component | Purpose |
|-----------|---------|
| **MenuHero** | Editorial typographic hero (page `<h1>`) + category jump-links. |
| **SignatureHighlight** | Marquee band for curated signature picks (hidden while filtering). |
| **MenuSearch** | Accessible search field, clear button, `aria-live` result count. |
| **DietToggle** | Veg / Non-veg / All segmented control (ARIA radiogroup, arrow-key nav). |
| **CategoryNav** | Scroll-spy category strip with sliding underline indicator. |
| **MenuCategorySection** | Anchored category region + responsive `DishCard` grid (forwards ref for the spy). |
| **DishCard** | Dish card with monogram crest (no per-dish photos), diet dot, spicy/bestseller/chef flags, tags, price. |
| **DietDot** | Indian veg/non-veg square indicator. |

**Page assembly (`pages/Menu.jsx`):**
- Single-pass `useMemo` filter+group over `MENU_ITEMS`, preserving
  `MENU_CATEGORIES` order; empty categories drop out so no bare headings show.
- **Filtering connected:** search matches name/description/tags; diet toggle
  filters veg/non-veg; live result count feeds `MenuSearch`’s `aria-live`.
- **Empty state** with a "Clear filters" reset when nothing matches.
- **Scroll-spy** via `IntersectionObserver` with a thin activation band below
  the sticky bar; active category drives `CategoryNav`.
- **Programmatic jumps** reuse the shared Lenis engine (`scrollToTarget`) with
  an offset measured from the live sticky-bar height (`--header-height` + bar).
- New page CSS `src/pages/Menu.css` owns only page-level layout: sticky
  glass controls bar, section rhythm, empty state, responsive stacking
  (≤640px), and `prefers-reduced-motion` fallback.
- `MENU_SEO.title` applied to `document.title` for the route.

### Milestone 5 — About, Gallery, Contact & Premium Footer ✅
The remaining content pages, each data-driven and composed entirely from the
reusable library + real brand photography. Routes `/gallery`, `/about`,
`/contact` are all live (`ROUTES.GALLERY` route added in `App.jsx`).

**About page** (`pages/About.jsx`, data `src/data/about.js`) — feature
components in `src/components/about/<Component>/` with barrel:

| Component | Purpose |
|-----------|---------|
| **AboutHero** | Editorial typographic hero, owns the page `<h1>` (GSAP word reveal). |
| **EditorialSplit** | Reusable alternating image/copy spread; reused across Story, Wood-fired, Ingredients, Experience. |
| **Statement** | Full-width philosophy band over an atmosphere image. |
| **Timeline** | "Flame to table" craft sequence (honest, undated — no fabricated history). |
| **ChefNote** | Centred pull-quote, attributed to *The OG Kitchen* (no invented chef). |
| **Values** | Four-pillar grid of `Card`s. |

**Gallery page** (`pages/Gallery.jsx`, data `src/data/gallery.js`) — feature
components in `src/components/gallery/<Component>/` with barrel:

| Component | Purpose |
|-----------|---------|
| **GalleryFilter** | Category chips (All / Ambience / Drinks / Interior — honest to what the photos show; no "Food" filter since no food photography exists). Reuses `Chip`. |
| **GalleryMasonry** | Column-masonry of real photos; each tile is a `<button>` with GSAP scroll-reveal + `ImageWrapper` lazy-load. |
| **Lightbox** | Accessible `role="dialog"` viewer — Esc/←/→ keys, focus trap + restore, scroll lock via the shared Lenis engine. Indexes into the *filtered* list. |

**Contact page** (`pages/Contact.jsx`, data `src/data/contact.js`) — feature
components in `src/components/contact/<Component>/` with barrel:

| Component | Purpose |
|-----------|---------|
| **ContactHero** | Editorial hero, owns the page `<h1>`. |
| **ContactInfo** | Verified details only — clickable `tel:` / `wa.me` / Maps links, real address & Mon–Sun 10 AM–11 PM hours, Instagram. **No email** (none verified — intentionally absent). "Get directions" links to the verified Google Maps URL (no external iframe → keeps "local assets only"). |
| **ContactForm** | Accessible form **UI only, ready for backend** — controlled inputs, client-side validation, `aria-invalid`/`aria-describedby` errors, focus-first-invalid, graceful success state pointing to phone/WhatsApp. A `// TODO` marks where a real POST goes; collects the *visitor's* email, never invents a business one. |

**Premium footer** (`components/layout/Footer.jsx`) — enhanced (not recreated):
added a verified **Visit** column (address, Mon–Sun hours, `tel:` phone) sourced
from `data/contact.js`, alongside the existing brand / Explore / Connect columns.
Grid widened to four columns with the existing responsive collapse preserved.

**Honesty guardrails kept throughout:** only the supplied brand photography is
used (no stock, no placeholders, no per-dish food shots), and no business facts
were invented (no email, no founding date, no chef name, no awards).

### Milestone 6 — Polish: luxury UX, motion, performance, SEO & a11y ✅
The final premium-polish pass. Resumed from a partially-complete state (PART A &
B were already shipped and were **preserved untouched**); PART C was finished and
PARTS D & E verified/completed.

**PART A — Luxury UX layer** (`components/layout/`): `Preloader` (cinematic brand
reveal, scroll-locked, self-cleaning timers/listeners/GSAP), `ScrollProgress`
(reading bar + scroll-direction signal), `CustomCursor` (fine-pointer-only
two-part magnetic cursor), `RouteTransition` (per-navigation GSAP fade/mask wipe,
scroll-to-top), `RouteFallback` (Suspense fallback for lazy routes). All wired in
`Layout.jsx`.

**PART B — Micro-interactions:** shared `utils/motion.js` (`prefersReducedMotion`,
`hasFinePointer`) as the single source of truth for the reduced-motion / pointer
checks; hover/press/sheen states already live on the component library.

**PART C — Performance:**
- **Code splitting / dynamic imports** — every non-home route is `lazy()`-loaded
  behind `<Suspense>` (`App.jsx`); Home stays eager (it's the LCP).
- **Bundle optimization** — `vite.config.js` `manualChunks` splits `react-vendor`,
  `gsap-vendor`, `lenis-vendor` into long-cacheable chunks.
- **Lazy loading / images** — `ImageWrapper` lazy-loads + async-decodes + fades in;
  the hero LCP image uses `fetchPriority="high"`.
- **GSAP / ScrollTrigger cleanup** — audited every animated component: all use
  `gsap.context(...)` + `ctx.revert()` on unmount; `IntersectionObserver`s
  `disconnect()`, listeners are removed, `requestAnimationFrame` loops are
  cancelled. `useLenis` now also cancels its rAF on teardown.
- **Code cleanup** — three components (`Hero`, `Reveal`, `AnimatedText`) that
  inlined their own `prefersReducedMotion` now import the shared `utils/motion.js`
  helper (dead-duplication removed). CSS is strictly component-scoped (each
  component owns + imports its own `.css`), so there are no orphaned stylesheets;
  design-system tokens/utilities were intentionally **not** pruned (documented,
  intentionally-complete API).

**PART D — SEO** (`index.html` + `public/` + `hooks/useSeo.js`):
- Full `<head>`: title, meta description, `theme-color`, **canonical**, robots.
- **Open Graph** + **Twitter Card** (`summary_large_image`) with `og-cover.jpg`.
- **JSON-LD** `Restaurant` structured data — verified business details only.
- `public/`: `robots.txt`, `sitemap.xml` (all 5 routes), `manifest.webmanifest`,
  `favicon.svg`, apple-touch icon (`icon.jpg`).
- `useSeo` keeps title / description / OG / Twitter / canonical in sync per route
  on client-side navigation; now applied on **all** real routes (Menu migrated
  from title-only to full `useSeo`); the 404 gets its own document title.

**PART E — Accessibility:**
- **Landmarks**: singular `header` / `nav` / `main` / `footer`; `skip-link` →
  `#main-content` (focusable `<main tabIndex=-1>`).
- **ARIA / keyboard**: icon-only controls all carry `aria-label` (hamburger also
  `aria-expanded` + `aria-controls`); decorative icons `aria-hidden`; all
  interactive elements are real `<button>`/`<a>`; menu category strip + diet
  toggle are proper ARIA widgets; Lightbox is a `role="dialog"` with focus trap,
  Esc/←/→ keys and focus restore.
- **Focus visibility**: token-driven global `:focus-visible` ring (`reset.css`).
- **Forms**: `ContactForm` has `htmlFor`/`id` labels, `aria-required`,
  `aria-invalid`, `aria-describedby` errors, and focus-first-invalid.
- **Reduced motion**: global CSS override + every motion component checks
  `prefersReducedMotion()`; `CustomCursor` also requires a fine pointer.
- **Images**: `alt` required by `ImageWrapper`'s PropTypes; decorative images use
  `alt=""`.

---

## 🎨 Design Tokens Reference

| Group | Examples |
|-------|----------|
| Colors | `--color-bg`, `--color-primary`, `--color-accent`, `--gradient-ember` |
| Typography | `--font-display`, `--font-body`, `--text-xs … --text-6xl`, weights, tracking |
| Spacing | `--space-1 … --space-32`, `--container-*`, `--header-height` |
| Radius | `--radius-xs … --radius-2xl`, `--radius-pill`, `--radius-full` |
| Shadows | `--shadow-xs … --shadow-xl`, `--shadow-glow-ember/-gold` |
| Z-index | `--z-base … --z-toast`, `--z-header`, `--z-drawer`, `--z-modal` |
| Motion | `--duration-fast … --duration-slowest`, `--ease-*` |
| Breakpoints | `--bp-xs … --bp-2xl` (reference; literals used in `@media`) |

---

## 🗺️ Milestone Roadmap

1. ✅ **Design system & theming foundation** — *complete*
2. ✅ **Reusable UI component library** — *complete* (12 components)
3. ✅ **Home page** — premium hero + featured/story/CTA sections w/ GSAP reveals — *complete*
4. ✅ **Menu page** — menu data model + filterable category grid w/ scroll-spy — *complete*
5. ✅ **About page** — story, values, craft timeline, chef's note — *complete*
6. ✅ **Gallery page** — filterable masonry + accessible lightbox — *complete*
7. ✅ **Contact page** — verified info + form UI (backend-ready) — *complete*
8. ✅ **Premium footer** — verified Visit column added — *complete*
9. ✅ **Polish (Milestone 6)** — luxury UX, micro-interactions, performance, SEO, a11y — *complete*

**Next milestone:** none outstanding. The site is feature- and polish-complete;
remaining work is deployment (set the real domain in `utils/constants.js`) and
wiring the contact form to a real backend endpoint. See `FINAL_REVIEW.md`.

---

## 📦 NPM Scripts

```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## ✅ Verification (Milestone 3)
- Fixed lint error in `Hero.jsx`: `fetchpriority` → `fetchPriority` (React DOM prop casing).
- `npm run lint` → exit 0, clean.
- `npm run build` → success, 140 modules, no warnings/errors
  (CSS 34.15 kB gzip 7.00 kB, JS 328.10 kB gzip 113.84 kB).

## ✅ Verification (Milestone 4)
- `npm run lint` → 0 errors. (1 pre-existing `react-refresh/only-export-components`
  warning in `DishCard.jsx`, which co-exports `dishShape`; left untouched as
  it is completed Milestone-4 component code and the warning is benign.)
- `npm run build` → success, 168 modules, no warnings/errors
  (CSS 46.22 kB gzip 8.86 kB, JS 367.61 kB gzip 125.80 kB).
- Responsive behavior handled in `Menu.css`: filters stack and the controls
  bar goes single-column ≤640px; the category strip scrolls horizontally; the
  dish grid is fluid; `prefers-reduced-motion` drops the sticky-bar blur.

## ✅ Verification (Milestone 5)
- Resumed from a partially-complete state: About was already finished and was
  **preserved untouched**. Gallery had components but was missing its `index.js`
  barrels, `Lightbox.css`, the page, and its route; Contact was a stub.
- Finished Gallery (barrels + `Lightbox.css` + `pages/Gallery.jsx` + `/gallery`
  route), built the Contact page + `components/contact/`, and enhanced the footer.
- `npm run lint` → 0 errors. (Same single pre-existing `react-refresh/only-export-components`
  warning in `DishCard.jsx`; untouched, benign.)
- `npm run build` → success, 214 modules, no warnings/errors
  (CSS 62.45 kB gzip 11.13 kB, JS 399.53 kB gzip 135.04 kB).
- Responsive: Gallery masonry 3→2→1 columns; Contact grid stacks ≤960px with the
  verified visit details ordered first; footer collapses 4→2→1 columns. All new
  motion (hero reveals, masonry tiles, lightbox) honors `prefers-reduced-motion`.

## ✅ Verification (Milestone 6)
- Resumed mid-milestone after an interrupted session. PARTS A & B (luxury UX
  components + micro-interactions) were already shipped and **preserved untouched**.
- PART C finished: verified GSAP/ScrollTrigger cleanup across all animated
  components (all use `gsap.context` + `ctx.revert`, observers `disconnect`,
  listeners removed); added `cancelAnimationFrame` to `useLenis` teardown;
  consolidated three inlined `prefersReducedMotion` copies onto the shared
  `utils/motion.js`. Code-split / lazy-loaded / chunked bundle confirmed.
- PART D verified complete and made consistent: migrated the Menu route from
  title-only to full `useSeo`; gave the 404 a document title. `index.html` head,
  `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, favicon, apple-touch icon,
  canonical and JSON-LD all present and internally consistent.
- PART E verified complete: landmarks, skip link, ARIA on all icon-only controls,
  real interactive elements, focus-visible ring, accessible form, dialog focus
  trap, and reduced-motion coverage.
- `npm run lint` → **0 errors, 0 warnings**.
- `npm run build` → success, **228 modules, no warnings/errors**
  (CSS: index 37.94 kB gzip 7.68 kB; JS: react-vendor 163.47 kB gzip 53.39 kB,
  gsap-vendor 114.85 kB gzip 45.47 kB, app index 42.28 kB gzip 14.57 kB, route
  chunks lazy-loaded). No page was redesigned and no working component replaced.
