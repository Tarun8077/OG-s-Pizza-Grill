import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'
import { RESERVATION } from '../../../data/home'
import { Container, AnimatedText, Button } from '../../common'
import Reveal from '../Reveal'
import './ReservationCTA.css'

const ReservationCTA = () => {
  return (
    <section className="reserve" aria-labelledby="reserve-title">
      <div className="reserve__media" aria-hidden="true">
        <img className="reserve__image" src={RESERVATION.image} alt="" loading="lazy" />
        <div className="reserve__scrim" />
      </div>

      <Container className="reserve__inner">
        <p className="eyebrow">{RESERVATION.eyebrow}</p>
        <AnimatedText
          as="h2"
          id="reserve-title"
          className="reserve__title display-1"
          text={RESERVATION.title}
          scrollReveal
        />
        <Reveal as="p" className="reserve__text" delay={0.1}>
          {RESERVATION.text}
        </Reveal>
        <Reveal className="reserve__actions" delay={0.15}>
          <Button as={Link} to={ROUTES.CONTACT} variant="primary" size="lg">
            Reserve a table
          </Button>
          <Button as={Link} to={ROUTES.MENU} variant="outline" size="lg">
            Browse the menu
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default ReservationCTA
