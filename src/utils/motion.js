/* Single source of truth for the reduced-motion check. Several components
   previously inlined this; new polish code shares it. SSR-safe. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* True only on devices with a precise pointer (mouse/trackpad). Used to gate
   desktop-only flourishes like the custom cursor. */
export const hasFinePointer = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches
