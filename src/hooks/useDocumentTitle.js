import { useEffect } from 'react'

/**
 * Sets document.title for the lifetime of the mounted page and restores the
 * previous title on unmount. A tiny, dependency-free stand-in for a head
 * manager — keeps per-page titles DRY across routes (no react-helmet in use).
 */
export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (!title) return undefined
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
