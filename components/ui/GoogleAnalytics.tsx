'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Sends a GA4 page_view on every route change.
 *
 * Next.js client-side navigation does not reload the page, so gtag's own
 * page_view only fires for the first page a visitor lands on. The `config`
 * call in the root layout sets `send_page_view: false` so this component is
 * the single source of page_view events — one per route, no double counting.
 */
export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return

    const query = searchParams.toString()
    window.gtag('event', 'page_view', {
      page_path: query ? `${pathname}?${query}` : pathname,
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId,
    })
  }, [pathname, searchParams, measurementId])

  return null
}
