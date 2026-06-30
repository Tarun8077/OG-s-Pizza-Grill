import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Container, AnimatedText } from '../../common'
import Reveal from '../../sections/Reveal'
import DishCard, { dishShape } from '../DishCard'
import './MenuCategorySection.css'

/**
 * One menu category: an anchored, labelled region with a heading and a
 * responsive grid of dish cards. The forwarded ref points at the <section>
 * so the page's scroll-spy IntersectionObserver can track it.
 */
const MenuCategorySection = forwardRef(function MenuCategorySection({ category, items }, ref) {
  const headingId = `cat-${category.id}-heading`
  return (
    <section
      ref={ref}
      id={`category-${category.id}`}
      className="menu-category"
      aria-labelledby={headingId}
      data-category={category.id}
    >
      <Container>
        <header className="menu-category__head">
          <p className="eyebrow">{category.label}</p>
          <AnimatedText
            as="h2"
            id={headingId}
            className="menu-category__title display-3"
            text={category.title}
            scrollReveal
          />
          {category.tagline && <p className="menu-category__tagline">{category.tagline}</p>}
        </header>

        <ul className="menu-category__grid" role="list">
          {items.map((item, i) => (
            <Reveal as="li" key={item.id} className="menu-category__cell" delay={(i % 3) * 0.06} y={28}>
              <DishCard item={item} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
})

MenuCategorySection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
  }).isRequired,
  items: PropTypes.arrayOf(dishShape).isRequired,
}

export default MenuCategorySection
