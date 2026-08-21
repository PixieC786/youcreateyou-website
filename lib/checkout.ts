// Shared checkout trigger — every "Begin Your Practice" button on the site
// calls this same function, so there's exactly one path from click to paid,
// signed-in access, no matter which button someone used to start.

import { trackEvent } from './analytics'

const YCY_SUPABASE_URL = 'https://xdfxawwydrypjzgpncam.supabase.co'
const YCY_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkZnhhd3d5ZHJ5cGp6Z3BuY2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMjI5MTUsImV4cCI6MjA5MDg5ODkxNX0.N-UQ0HuPQS-1LUPBFprEgbsjndPSZ_cbh3HYuQTtNiw'

export async function beginCheckout(email?: string): Promise<void> {
  // GA4 conversion: someone clicked a "Begin Your Practice" button and is
  // heading to Stripe. Fires before the redirect so it isn't lost.
  trackEvent('begin_checkout', {
    currency: 'USD',
    items: [{ item_id: 'ebook_app', item_name: 'You Create You — Ebook + App' }],
  })
  try {
    const res = await fetch(`${YCY_SUPABASE_URL}/functions/v1/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'apikey': YCY_SUPABASE_KEY },
      body: JSON.stringify({
        plan: 'ebook_app',
        email: email && email.trim() ? email.trim() : null,
        returnUrl: 'https://app.youcreateyou.life',
        // If they back out of Stripe without paying, send them back to the
        // actual page they were reading — not a bare app paywall with no context.
        cancelUrl: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Could not open checkout. Please try again.')
    }
  } catch {
    alert('Could not open checkout. Please try again.')
  }
}

// Fire-and-forget — captures an email the moment someone types it, even if
// they never finish paying, so near-buyers aren't lost entirely.
export function captureAbandonedEmail(email: string): void {
  if (!email || !email.includes('@')) return
  // GA4 conversion: a visitor gave us their email (lead), even if they
  // never complete the purchase.
  trackEvent('generate_lead', { method: 'email_capture' })
  fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).catch(() => {})
}
