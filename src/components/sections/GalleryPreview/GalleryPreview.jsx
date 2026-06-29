import { GALLERY } from '../../../data/home'
import { Section, Container, AnimatedText, ImageWrapper } from '../../common'
import Reveal from '../Reveal'
import './GalleryPreview.css'

const GalleryPreview = () => {
  return (
    <Section className="gallery" aria-labelledby="gallery-title">
      <Container>
        <div className="gallery__head">
          <p className="eyebrow">{GALLERY.eyebrow}</p>
          <AnimatedText
            as="h2"
            id="gallery-title"
            className="gallery__title display-2"
            text={GALLERY.title}
            scrollReveal
          />
        </div>

        <div className="gallery__mosaic">
          {GALLERY.items.map((item, i) => (
            <Reveal key={item.src} className="gallery__item" delay={(i % 3) * 0.08} y={32}>
              <ImageWrapper src={item.src} alt={item.alt} ratio={item.ratio} radius="md" />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default GalleryPreview
