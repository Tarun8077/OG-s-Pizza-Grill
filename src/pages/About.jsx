import { useDocumentTitle } from '../hooks/useDocumentTitle'
import {
  AboutHero,
  EditorialSplit,
  Statement,
  Timeline,
  ChefNote,
  Values,
} from '../components/about'
import {
  ABOUT_HERO,
  ABOUT_STORY,
  ABOUT_PHILOSOPHY,
  ABOUT_WOODFIRED,
  ABOUT_INGREDIENTS,
  ABOUT_EXPERIENCE,
  ABOUT_TIMELINE,
  ABOUT_CHEF_NOTE,
  ABOUT_VALUES,
  ABOUT_SEO,
} from '../data/about'

const About = () => {
  useDocumentTitle(ABOUT_SEO.title)

  return (
    <div className="about-page">
      <AboutHero
        eyebrow={ABOUT_HERO.eyebrow}
        titleLines={ABOUT_HERO.titleLines}
        lead={ABOUT_HERO.lead}
      />

      {/* Brand Story */}
      <EditorialSplit
        id="story"
        eyebrow={ABOUT_STORY.eyebrow}
        title={ABOUT_STORY.title}
        paragraphs={ABOUT_STORY.paragraphs}
        image={ABOUT_STORY.image}
        imageAlt={ABOUT_STORY.imageAlt}
      />

      {/* Philosophy */}
      <Statement
        eyebrow={ABOUT_PHILOSOPHY.eyebrow}
        title={ABOUT_PHILOSOPHY.title}
        text={ABOUT_PHILOSOPHY.text}
        image={ABOUT_PHILOSOPHY.image}
      />

      {/* Wood-fired Pizza Story */}
      <EditorialSplit
        id="woodfired"
        reverse
        eyebrow={ABOUT_WOODFIRED.eyebrow}
        title={ABOUT_WOODFIRED.title}
        paragraphs={ABOUT_WOODFIRED.paragraphs}
        image={ABOUT_WOODFIRED.image}
        imageAlt={ABOUT_WOODFIRED.imageAlt}
      />

      {/* Fresh Ingredients */}
      <EditorialSplit
        id="ingredients"
        tone="surface"
        eyebrow={ABOUT_INGREDIENTS.eyebrow}
        title={ABOUT_INGREDIENTS.title}
        paragraphs={ABOUT_INGREDIENTS.paragraphs}
        image={ABOUT_INGREDIENTS.image}
        imageAlt={ABOUT_INGREDIENTS.imageAlt}
      />

      {/* Signature Experience */}
      <EditorialSplit
        id="experience"
        reverse
        eyebrow={ABOUT_EXPERIENCE.eyebrow}
        title={ABOUT_EXPERIENCE.title}
        paragraphs={ABOUT_EXPERIENCE.paragraphs}
        image={ABOUT_EXPERIENCE.image}
        imageAlt={ABOUT_EXPERIENCE.imageAlt}
      />

      {/* Craft journey timeline */}
      <Timeline
        eyebrow={ABOUT_TIMELINE.eyebrow}
        title={ABOUT_TIMELINE.title}
        steps={ABOUT_TIMELINE.steps}
      />

      {/* Chef's note */}
      <ChefNote
        eyebrow={ABOUT_CHEF_NOTE.eyebrow}
        quote={ABOUT_CHEF_NOTE.quote}
        attribution={ABOUT_CHEF_NOTE.attribution}
      />

      {/* Values */}
      <Values eyebrow={ABOUT_VALUES.eyebrow} title={ABOUT_VALUES.title} items={ABOUT_VALUES.items} />
    </div>
  )
}

export default About
