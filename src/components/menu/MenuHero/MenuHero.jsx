import PropTypes from 'prop-types'
import { Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import './MenuHero.css'

/**
 * Editorial menu hero — typographic, no food photography (none was supplied).
 * Sets the page's single <h1> and surfaces quick category jump-links.
 */
const MenuHero = ({ categories, onJump }) => {
  return (
    <header className="menu-hero">
      <div className="menu-hero__glow" aria-hidden="true" />
      <Container size="narrow" className="menu-hero__inner">
        <p className="eyebrow menu-hero__kicker">The Menu</p>
        <h1 className="menu-hero__title">
          <AnimatedText as="span" className="menu-hero__line" text="Fire, flavour" delay={0.15} />
          <AnimatedText
            as="span"
            className="menu-hero__line menu-hero__line--accent"
            text="& coastal soul"
            delay={0.35}
          />
        </h1>
        <Reveal as="p" className="menu-hero__lead lead" delay={0.2}>
          Wood-fired Neapolitan pizzas, hand-rolled pastas, Argentinian-grill steaks and chops, and
          coastal Indian signatures — every dish crafted with care and premium ingredients.
        </Reveal>

        <Reveal className="menu-hero__jumps" delay={0.3}>
          <ul className="menu-hero__jump-list" role="list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button type="button" className="menu-hero__jump" onClick={() => onJump(cat.id)}>
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </header>
  )
}

MenuHero.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ).isRequired,
  onJump: PropTypes.func.isRequired,
}

export default MenuHero
