'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ReviewForm() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewText, setReviewText] = useState('')
  const [website, setWebsite] = useState('') // honeypot — real users never see or fill this
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (website) return // bot filled the honeypot
    if (!name.trim() || !reviewText.trim() || rating === 0) return

    setStatus('submitting')
    const { error } = await supabase
      .from('ycy_reviews')
      .insert({ name: name.trim(), rating, review_text: reviewText.trim() })

    if (error) {
      setStatus('error')
      return
    }
    setStatus('success')
    setName('')
    setRating(0)
    setReviewText('')
  }

  return (
    <section id="leave-a-review" className="section-pad relative overflow-hidden">
      <div className="container-content relative z-10">
        <div className="text-center mb-12">
          <SectionLabel text="Leave a review" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-light italic text-[rgba(240,236,255,0.95)] leading-[1.3] mt-6"
          >
            How has this practice been for you?
          </motion.h2>
        </div>

        <div className="max-w-[520px] mx-auto">
          {status === 'success' ? (
            <p className="text-center font-body text-[15px] text-[rgba(240,236,255,0.75)]">
              Thank you — your review has been received and will appear once approved.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={e => setWebsite(e.target.value)}
                className="absolute -left-[9999px] w-px h-px opacity-0"
                aria-hidden="true"
              />

              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-[28px] leading-none transition-colors duration-150"
                    style={{
                      color: star <= (hoverRating || rating)
                        ? 'rgba(200,166,255,0.95)'
                        : 'rgba(240,236,255,0.2)',
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>

              <input
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="bg-[rgba(179,136,255,0.05)] border border-[rgba(179,136,255,0.18)] rounded-lg px-5 py-3.5 font-body text-[15px] text-[rgba(240,236,255,0.9)] placeholder:text-[rgba(240,236,255,0.35)] focus:outline-none focus:border-[rgba(179,136,255,0.45)] transition-colors"
              />

              <textarea
                required
                rows={5}
                placeholder="What has this practice given you?"
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                className="bg-[rgba(179,136,255,0.05)] border border-[rgba(179,136,255,0.18)] rounded-lg px-5 py-3.5 font-body text-[15px] text-[rgba(240,236,255,0.9)] placeholder:text-[rgba(240,236,255,0.35)] focus:outline-none focus:border-[rgba(179,136,255,0.45)] transition-colors resize-none"
              />

              {status === 'error' && (
                <p className="text-center font-body text-[13px] text-[rgba(255,140,140,0.85)]">
                  Something went wrong — please try again.
                </p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === 'submitting' || rating === 0}
                className="w-full justify-center"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit review'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
