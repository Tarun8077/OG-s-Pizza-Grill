import { EXPERIENCE } from '../../../data/home'
import { Container, AnimatedText } from '../../common'
import Reveal from '../Reveal'
import './Experience.css'

const Experience = () => {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience__media" aria-hidden="true">
        <img className="experience__image" src={EXPERIENCE.image} alt="" loading="lazy" />
        <div className="experience__scrim" />
      </div>

      <Container className="experience__inner">
        <div className="experience__head">
          <p className="eyebrow">{EXPERIENCE.eyebrow}</p>
          <AnimatedText
            as="h2"
            id="experience-title"
            className="experience__title display-2"
            text={EXPERIENCE.title}
            scrollReveal
          />
        </div>

        <ul className="experience__pillars" role="list">
          {EXPERIENCE.pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} className="pillar" delay={i * 0.1}>
              <span className="pillar__num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="pillar__text">{pillar.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Experience
