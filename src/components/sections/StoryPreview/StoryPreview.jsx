import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants'
import { STORY } from '../../../data/home'
import { Section, Container, AnimatedText, Button, Badge, ImageWrapper } from '../../common'
import Reveal from '../Reveal'
import './StoryPreview.css'

const StoryPreview = () => {
  return (
    <Section id="story" className="story" aria-labelledby="story-title">
      <Container className="story__grid">
        <Reveal className="story__media" y={56}>
          <ImageWrapper
            src={STORY.image}
            alt={STORY.imageAlt}
            ratio="4/5"
            radius="lg"
          />
        </Reveal>

        <div className="story__content">
          <p className="eyebrow">{STORY.eyebrow}</p>
          <AnimatedText
            as="h2"
            id="story-title"
            className="story__title display-2"
            text={STORY.title}
            scrollReveal
          />

          {STORY.paragraphs.map((text, i) => (
            <Reveal as="p" key={i} className="story__para" delay={i * 0.05}>
              {text}
            </Reveal>
          ))}

          <Reveal className="story__signoff-wrap" delay={0.1}>
            <Badge variant="accent" size="md">Pet-friendly</Badge>
            <p className="story__signoff">{STORY.signoff}</p>
          </Reveal>

          <Reveal className="story__cta" delay={0.15}>
            <Button as={Link} to={ROUTES.ABOUT} variant="ghost">
              Read our full story →
            </Button>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}

export default StoryPreview
