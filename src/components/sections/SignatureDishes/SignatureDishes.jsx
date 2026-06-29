import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'
import { SIGNATURE_DISHES } from '../../../data/home'
import { Section, Container, AnimatedText, Card, Badge, Button, Divider } from '../../common'
import Reveal from '../Reveal'
import './SignatureDishes.css'

const SignatureDishes = () => {
  return (
    <Section tone="deep" className="dishes" aria-labelledby="dishes-title">
      <Container>
        <div className="dishes__head">
          <div>
            <p className="eyebrow">Signature Dishes</p>
            <AnimatedText
              as="h2"
              id="dishes-title"
              className="dishes__title display-2"
              text="From the oven, the grill, the coast"
              scrollReveal
            />
          </div>
          <Button as={Link} to={ROUTES.MENU} variant="outline" className="dishes__head-cta">
            View full menu
          </Button>
        </div>

        <ul className="dishes__grid" role="list">
          {SIGNATURE_DISHES.map((dish, i) => (
            <Reveal as="li" key={dish.name} delay={(i % 3) * 0.08}>
              <Card variant="elevated" padding="lg" className="dish">
                <Badge variant="neutral" size="sm">{dish.category}</Badge>
                <h3 className="dish__name">{dish.name}</h3>
                <p className="dish__desc">{dish.description}</p>
                <Divider variant="gradient" className="dish__rule" />
                <p className="dish__price">
                  <span className="dish__currency">₹</span>{dish.price}
                </p>
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export default SignatureDishes
