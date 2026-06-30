import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { Container } from '../components/common'
import {
  MenuHero,
  CategoryNav,
  MenuSearch,
  DietToggle,
  MenuCategorySection,
  SignatureHighlight,
} from '../components/menu'
import { MENU_CATEGORIES, MENU_ITEMS, SIGNATURE_HIGHLIGHT, MENU_SEO } from '../data/menu'
import { scrollToTarget } from '../hooks/useLenis'
import './Menu.css'

const HEADER_H = 80 // matches --header-height (5rem)

const Menu = () => {
  const [query, setQuery] = useState('')
  const [diet, setDiet] = useState('all') // 'all' | 'veg' | 'nonveg'
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id)

  // Document title for this route (no router-level head management in place).
  useDocumentTitle(MENU_SEO.title)

  /* Filter + group in one pass, preserving MENU_CATEGORIES order. Categories
     that have no matching dishes drop out entirely so the page never shows an
     empty heading. */
  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matches = (item) => {
      if (diet === 'veg' && !item.vegetarian) return false
      if (diet === 'nonveg' && item.vegetarian) return false
      if (!q) return true
      const hay = `${item.name} ${item.description} ${item.tags.join(' ')}`.toLowerCase()
      return hay.includes(q)
    }
    return MENU_CATEGORIES.map((category) => ({
      category,
      items: MENU_ITEMS.filter((it) => it.category === category.id && matches(it)),
    })).filter((g) => g.items.length > 0)
  }, [query, diet])

  const resultCount = useMemo(() => grouped.reduce((n, g) => n + g.items.length, 0), [grouped])
  const visibleCategories = useMemo(() => grouped.map((g) => g.category), [grouped])
  const isFiltering = query.trim().length > 0 || diet !== 'all'

  // Signature picks: resolve the curated id list to live dish records.
  const signaturePicks = useMemo(() => {
    const byId = new Map(MENU_ITEMS.map((it) => [it.id, it]))
    return SIGNATURE_HIGHLIGHT.picks.map((id) => byId.get(id)).filter(Boolean)
  }, [])

  // Measure the sticky controls bar so scroll offsets / spy margins are exact.
  const controlsRef = useRef(null)
  const [barH, setBarH] = useState(0)
  useLayoutEffect(() => {
    const measure = () => setBarH(controlsRef.current?.offsetHeight ?? 0)
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])
  const topOffset = HEADER_H + barH

  const sectionRefs = useRef({})
  const registerSection = (id) => (el) => {
    if (el) sectionRefs.current[id] = el
    else delete sectionRefs.current[id]
  }

  const goToCategory = (id) => {
    const el = sectionRefs.current[id]
    if (!el) return
    setActiveId(id)
    scrollToTarget(el, { offset: -(topOffset + 12) })
  }

  /* Scroll-spy: a thin activation band sits just below the sticky controls.
     The first rendered section intersecting that band wins the active state. */
  useEffect(() => {
    const ids = grouped.map((g) => g.category.id)
    if (!ids.length) return undefined

    // Keep the active id valid as the filtered set changes.
    setActiveId((cur) => (ids.includes(cur) ? cur : ids[0]))

    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.dataset.category
          if (entry.isIntersecting) visible.add(id)
          else visible.delete(id)
        }
        const top = ids.find((id) => visible.has(id))
        if (top) setActiveId(top)
      },
      { rootMargin: `-${topOffset + 8}px 0px -68% 0px`, threshold: 0 }
    )

    ids.forEach((id) => {
      const el = sectionRefs.current[id]
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [grouped, topOffset])

  return (
    <div className="menu-page">
      <MenuHero categories={MENU_CATEGORIES} onJump={goToCategory} />

      {!isFiltering && (
        <SignatureHighlight data={SIGNATURE_HIGHLIGHT} picks={signaturePicks} onJump={goToCategory} />
      )}

      <div className="menu-controls" ref={controlsRef}>
        <Container className="menu-controls__inner">
          <div className="menu-controls__filters">
            <MenuSearch value={query} onChange={setQuery} resultCount={resultCount} />
            <DietToggle value={diet} onChange={setDiet} />
          </div>
          {visibleCategories.length > 0 && (
            <CategoryNav categories={visibleCategories} activeId={activeId} onSelect={goToCategory} />
          )}
        </Container>
      </div>

      <div className="menu-body">
        {grouped.length > 0 ? (
          grouped.map(({ category, items }) => (
            <MenuCategorySection
              key={category.id}
              ref={registerSection(category.id)}
              category={category}
              items={items}
            />
          ))
        ) : (
          <Container size="narrow">
            <div className="menu-empty" role="status">
              <p className="menu-empty__title display-3">No dishes match</p>
              <p className="menu-empty__text">
                Try a different search term or clear the filters to see the full menu.
              </p>
              <button
                type="button"
                className="menu-empty__reset"
                onClick={() => {
                  setQuery('')
                  setDiet('all')
                }}
              >
                Clear filters
              </button>
            </div>
          </Container>
        )}
      </div>
    </div>
  )
}

export default Menu
