'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const EASE = [0.22, 1, 0.36, 1] as const

const SHIFTS = [
  {
    before: 'Trying to fix yourself',
    after:  'Becoming who you already are',
  },
  {
    before: 'Consuming self-help content',
    after:  'Building a daily identity practice',
  },
  {
    before: 'Managing symptoms endlessly',
    after:  'Rewiring the root-level pattern',
  },
  {
    before: 'Waiting for motivation to arrive',
    after:  'Creating internal momentum daily',
  },
  {
    before: 'Borrowing someone else\'s framework',
    after:  'Knowing yourself from the inside',
  },
]

export default function Pivot() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: 'rgba(11,9,22,0.6)' }}>

      {/* Top / bottom hairlines */}
      <div className="absolute top-0 inset-x-0 divider-glow" />
      <div className="absolute bottom-0 inset-x-0 divider-glow" />

      {/* Background bloom */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(100,55,200,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-content relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <SectionLabel text="The paradigm shift" />

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light italic text-[#f0ecff] mt-6 leading-[1.12]"
          >
            Not self-improvement.
            <br />
            <span className="text-gradient">Self-remembering.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="mt-5 font-body text-[rgba(240,236,255,0.48)] text-[clamp(1rem,1.25vw,1.1rem)] leading-[1.82] max-w-[48ch] mx-auto"
          >
            Why most self-help leaves you exactly where you started —
            and what changes everything.
          </motion.p>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_36px_1fr] max-w-2xl mx-auto mb-3">
          <div className="px-1">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(240,236,255,0.35)]">
              The old loop
            </span>
          </div>
          <div />
          <div className="px-1">
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.75)]">
              You Create You
            </span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="flex flex-col gap-px max-w-2xl mx-auto">
          {SHIFTS.map(({ before, after }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: EASE }}
              className="grid grid-cols-[1fr_36px_1fr] items-center group"
            >
              {/* Before */}
              <div className="py-4 px-1 border-t border-[rgba(179,136,255,0.06)] group-last:border-b">
                <p className="font-body text-[15px] text-[rgba(240,236,255,0.32)] leading-relaxed line-through decoration-[rgba(179,136,255,0.4)] decoration-1">
                  {before}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center border-t border-[rgba(179,136,255,0.06)] py-4 group-last:border-b">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(179,136,255,0.55)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>

              {/* After */}
              <div className="py-4 px-1 border-t border-[rgba(179,136,255,0.06)] group-last:border-b">
                <p className="font-body text-[15px] leading-relaxed transition-colors duration-300"
                  style={{ color: 'rgba(210,175,255,0.88)' }}>
                  {after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Science note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.45, duration: 0.7, ease: EASE }}
          className="max-w-lg mx-auto mt-10 text-center"
        >
          <p className="font-display italic text-[clamp(1rem,1.8vw,1.3rem)] text-[rgba(240,236,255,0.55)] leading-[1.65]">
            "Your brain cannot distinguish between a vividly imagined
            experience and a real one. We use this fact — deliberately,
            every single day."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
