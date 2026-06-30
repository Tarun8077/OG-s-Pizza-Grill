import { useEffect } from 'react'
import { SITE_URL, SITE_NAME } from '../utils/constants'

/* Lightweight per-route head manager. Keeps document.title, the meta
   description, Open Graph / Twitter title+description+url, and the canonical
   link in sync with the active route — no react-helmet dependency. The static
   base tags (og:image, site_name, card type, JSON-LD) live in index.html; this
   only updates the per-page values and restores the title on unmount. */

const upsertMeta = (key, attr, content) => {
  if (!content) return
  let el = document.head.querySelector(`meta[${key}="${attr}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, attr)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const upsertCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export const useSeo = ({ title, description, path = '' } = {}) => {
  useEffect(() => {
    const previousTitle = document.title
    const fullTitle = title || previousTitle
    const url = `${SITE_URL}${path}`

    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertCanonical(url)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, path])
}

export const SITE = { name: SITE_NAME, url: SITE_URL }
