// Thin wrapper around gtag so anywhere in the app can fire a GA4 event
// without repeating the existence check. Safely no-ops when GA hasn't
// loaded — server-side rendering, or an ad blocker that stripped gtag.
// window.gtag is typed globally in components/ui/GoogleAnalytics.tsx.
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
