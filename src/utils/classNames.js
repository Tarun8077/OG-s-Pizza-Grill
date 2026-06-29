// Tiny class-name merge helper. Flattens, drops falsy values, joins.
// Keeps component markup clean without pulling in a dependency.
export function cn(...args) {
  return args
    .flat()
    .filter(Boolean)
    .join(' ')
}

export default cn
