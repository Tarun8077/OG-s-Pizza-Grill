import PropTypes from 'prop-types'

/* Shared PropTypes shape for a menu dish. Lives in its own module so the
   DishCard component file exports only the component (keeps React Fast Refresh
   happy) while MenuCategorySection / SignatureHighlight can still reuse it. */
export const dishShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  spicy: PropTypes.bool,
  vegetarian: PropTypes.bool,
  bestseller: PropTypes.bool,
  chefRecommendation: PropTypes.bool,
})
