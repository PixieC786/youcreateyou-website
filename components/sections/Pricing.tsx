'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const EASE = [0.22, 1, 0.36, 1] as const

const INCLUDES = [
  '21 tools across 4 phases: Remember, Return, Create, Radiate',
  'Inner Cinema — inhabit your future self from within',
  'Fear Alchemist — turn what holds you back into fuel',
  'The Witness — dissolve the thoughts that are not yours',
  'The Frequency of Thanks — the state that changes everything',
]

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">

      {/* Top rule */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.18)] to-transparent" />

      <div className="container-site">
        <div className="max-w-[640px] mx-auto text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-[9px] tracking-[0.28em] uppercase text-[rgba(179,136,255,0.5)] mb-7"
          >
            Begin your practice
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-light italic text-[rgba(240,236,255,0.95)] leading-[1.3] mb-4"
          >
            Your first 21 days<br />to remember who you are.
          </motion.h2>


          {/* Ornament */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="font-mono text-[13px] tracking-[0.1em] text-[rgba(179,136,255,0.35)] mb-10"
          >
            — ✦ —
          </motion.p>

          {/* Includes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mb-12 space-y-2"
          >
            {INCLUDES.map((item) => (
              <p key={item} className="font-body text-[1rem] font-light text-[rgba(240,236,255,0.42)] leading-relaxed">
                <span className="text-[rgba(179,136,255,0.6)] mr-2">✦</span>{item}
              </p>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.36 }}
          >
            <Link
              href="/start"
              className="inline-block font-mono text-[10px] tracking-[0.22em] uppercase text-[rgba(220,190,255,0.95)] bg-[rgba(155,90,230,0.15)] border border-[rgba(179,136,255,0.4)] rounded-full px-12 py-[18px] hover:bg-[rgba(155,90,230,0.28)] hover:border-[rgba(179,136,255,0.7)] transition-all duration-300 mb-5"
            >
              21 Days to Remember Who You Are
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
