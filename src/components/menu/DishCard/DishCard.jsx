import { memo } from 'react'
import { FaStar, FaPepperHot, FaUtensils } from 'react-icons/fa'
import { Card, Badge, ImageWrapper } from '../../common'
import { cn } from '../../../utils/classNames'
import DietDot from '../DietDot'
import { dishShape } from './dishShape'
import './DishCard.css'

/* Derive a 1–2 letter monogram for the crest used when a dish has no photo
   (the brand supplied no per-dish photography). Skips bracketed/qualifier
   words so "OG Garlic Bread" → "OG", "Margherita" → "M". */
const monogram = (name) => {
  const words = name.replace(/\(.*?\)/g, '').trim().split(/\s+/).filter(Boolean)
  if (!words.length) return '·'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

const DishCard = ({ item }) => {
  const { name, description, price, image, tags, spicy, vegetarian, bestseller, chefRecommendation } = item

  return (
    <Card as="article" variant="elevated" padding="none" interactive className="dish-card">
      <div className="dish-card__media" aria-hidden={image ? undefined : 'true'}>
        {image ? (
          <ImageWrapper src={image} alt={name} ratio="4/3" radius="none" className="dish-card__image" />
        ) : (
          <span className="dish-card__crest" data-monogram={monogram(name)} />
        )}

        <span className="dish-card__flags">
          {bestseller && (
            <Badge variant="accent" size="sm" icon={<FaStar />} className="dish-card__flag">
              Bestseller
            </Badge>
          )}
          {chefRecommendation && (
            <Badge variant="primary" size="sm" icon={<FaUtensils />} className="dish-card__flag">
              Chef’s pick
            </Badge>
          )}
        </span>
      </div>

      <div className="dish-card__body">
        <div className="dish-card__head">
          <DietDot vegetarian={vegetarian} className="dish-card__diet" />
          <h3 className="dish-card__name">{name}</h3>
          {spicy && (
            <span className="dish-card__spicy" title="Spicy">
              <FaPepperHot aria-hidden="true" />
              <span className="sr-only">Spicy</span>
            </span>
          )}
        </div>

        <p className="dish-card__desc">{description}</p>

        <div className="dish-card__foot">
          {tags?.length > 0 && (
            <ul className="dish-card__tags" role="list">
              {tags.map((tag) => (
                <li key={tag} className="dish-card__tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <p className={cn('dish-card__price', !tags?.length && 'dish-card__price--solo')}>
            <span className="dish-card__currency" aria-hidden="true">₹</span>
            <span className="sr-only">Price: rupees </span>
            {price}
          </p>
        </div>
      </div>
    </Card>
  )
}

DishCard.propTypes = {
  item: dishShape.isRequired,
}

export default memo(DishCard)
