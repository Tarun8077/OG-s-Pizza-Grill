# OG's Pizza & Grill — Project Status

**Last Updated:** June 29, 2026
**Status:** 🟢 Milestone 2 complete — Reusable UI component library in place

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
3. ⬜ Home page — premium hero + featured/story/CTA sections w/ GSAP reveals
4. ⬜ Menu page — menu data model + filterable category grid
5. ⬜ About page — story, values, team
6. ⬜ Contact page — form + hours/location
7. ⬜ Premium footer redesign
8. ⬜ Polish — page transitions, parallax, a11y, meta/favicon, performance

**Next milestone:** #3 — Home page (premium hero + sections) (awaiting approval).

---

## 📦 NPM Scripts

```bash
npm run dev       # Dev server (localhost:3000)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
```

## ✅ Verification (Milestone 2)
- `npm run lint` → exit 0, clean.
- `npm run build` → success, 102 modules, no warnings/errors (CSS 23.92 kB gzip 5.47 kB).
