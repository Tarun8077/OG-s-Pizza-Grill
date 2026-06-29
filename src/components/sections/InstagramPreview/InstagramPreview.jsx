import { FaInstagram } from 'react-icons/fa'
import { INSTAGRAM } from '../../../data/home'
import { Section, Container, AnimatedText, Button, ImageWrapper } from '../../common'
import Reveal from '../Reveal'
import './InstagramPreview.css'

const InstagramPreview = () => {
  return (
    <Section tone="deep" className="insta" aria-labelledby="insta-title">
      <Container>
        <div className="insta__head">
          <div>
            <p className="eyebrow">{INSTAGRAM.eyebrow}</p>
            <AnimatedText
              as="h2"
              id="insta-title"
              className="insta__title display-3"
              text={INSTAGRAM.title}
              scrollReveal
            />
          </div>
          <Button
            as="a"
            href={INSTAGRAM.url}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            leftIcon={<FaInstagram />}
          >
            {INSTAGRAM.handle}
          </Button>
        </div>

        <div className="insta__grid">
          {INSTAGRAM.items.map((item, i) => (
            <Reveal key={item.src} className="insta__tile" delay={i * 0.07} y={28}>
              <a
                className="insta__link"
                href={INSTAGRAM.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.alt} — open Instagram`}
              >
                <ImageWrapper src={item.src} alt={item.alt} ratio="1/1" radius="md" />
                <span className="insta__overlay" aria-hidden="true">
                  <FaInstagram />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default InstagramPreview
