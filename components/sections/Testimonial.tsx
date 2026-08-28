'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { supabase, type YCYReview } from '@/lib/supabase'

const EASE = [0.22, 1, 0.36, 1] as const
const DURATION = 14000

function initialsFor(name: string): string {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase() ?? '').join('') || '?'
}

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState<{ quote: string; name: string; rating: number; initials: string }[]>([])
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startRef = useRef<number>(Date.now())

  useEffect(() => {
    supabase
      .from('ycy_reviews')
      .select('id, name, rating, review_text, created_at')
      .order('created_at', { ascending: false })
      .then(({ data }: { data: YCYReview[] | null }) => {
        if (!data || data.length === 0) return
        setTestimonials(
          data.map(r => ({
            quote: r.review_text,
            name: r.name,
            rating: r.rating,
            initials: initialsFor(r.name),
          }))
        )
      })
  }, [])

  const start = () => {
    startRef.current = Date.now()
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(pct)
      if (elapsed >= DURATION) {
        setActive(prev => (prev + 1) % testimonials.length)
        setProgress(0)
        startRef.current = Date.now()
      }
    }, 30)
  }

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const goTo = (i: number) => {
    stop()
    setActive(i)
    setProgress(0)
    start()
  }

  useEffect(() => {
    if (testimonials.length === 0) return
    start()
    return stop
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials])

  if (testimonials.length === 0) return null

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: 'rgba(10,8,20,0.5)' }}>
      <div className="absolute top-0 inset-x-0 divider-glow" />

      {/* Sacred geometry background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]" aria-hidden>
        <svg width="500" height="500" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="150" stroke="rgba(179,136,255,1)" strokeWidth="0.5"/>
          <circle cx="200" cy="200" r="100" stroke="rgba(179,136,255,1)" strokeWidth="0.4"/>
          <polygon points="200,60 330,340 70,340" stroke="rgba(179,136,255,1)" strokeWidth="0.5" fill="none"/>
          <polygon points="200,340 330,60 70,60" stroke="rgba(179,136,255,1)" strokeWidth="0.5" fill="none"/>
          <circle cx="200" cy="200" r="50" stroke="rgba(179,136,255,1)" strokeWidth="0.3"/>
        </svg>
      </div>

      <div className="container-content relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel text="From the community" />
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light italic text-[#f0ecff] mt-6 leading-[1.12]"
          >
            Real people. Real shifts.
          </motion.h2>
        </div>

        {/* Testimonial panel */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.55, ease: EASE }}
              className="text-center mb-10"
            >
              <blockquote className="font-display italic text-[clamp(1.15rem,2.2vw,1.55rem)] font-light text-[rgba(240,236,255,0.78)] leading-[1.6] mb-10">
                {testimonials[active].quote}
              </blockquote>

              {/* Avatar + attribution */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[rgba(179,136,255,0.2)] bg-[rgba(179,136,255,0.08)] flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.08em] text-[rgba(179,136,255,0.7)]">
                    {testimonials[active].initials}
                  </span>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.65)]">
                    {testimonials[active].name}
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(240,236,255,0.2)] mt-1">
                    {'★'.repeat(testimonials[active].rating)}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots with auto-advance indicator */}
          <div className="flex justify-center items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-400"
                style={{ width: active === i ? '48px' : '12px', background: 'rgba(179,136,255,0.15)' }}
                suppressHydrationWarning
              >
                {active === i && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[rgba(179,136,255,0.55)] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
