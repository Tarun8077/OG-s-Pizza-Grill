import { useMemo, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Container, SectionHeading } from '../components/common'
import { GalleryFilter, GalleryMasonry, Lightbox } from '../components/gallery'
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GALLERY_SEO } from '../data/gallery'
import './Gallery.css'

/**
 * Gallery page — a filterable, editorial masonry of the real brand
 * photography, with an accessible lightbox. The lightbox indexes into the
 * *currently filtered* list, so changing the filter closes any open viewer to
 * avoid stale indices.
 */
const Gallery = () => {
  useDocumentTitle(GALLERY_SEO.title)

  const [activeId, setActiveId] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const items = useMemo(
    () =>
      activeId === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeId),
    [activeId]
  )

  const handleSelect = (id) => {
    setLightboxIndex(-1)
    setActiveId(id)
  }

  return (
    <div className="gallery-page">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          title="An evening at OG’s"
          subtitle={GALLERY_SEO.description}
          className="gallery-page__head"
        />

        <GalleryFilter
          categories={GALLERY_CATEGORIES}
          activeId={activeId}
          onSelect={handleSelect}
        />

        <div className="gallery-page__grid">
          <GalleryMasonry items={items} onOpen={setLightboxIndex} />
        </div>
      </Container>

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={setLightboxIndex}
      />
    </div>
  )
}

export default Gallery
