'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const PARAGRAPHS = [
  { text: `Every human carries a version of themselves they have not yet lived.`, style: 'normal' },
  { text: `Not a better version. Not an improved version. The real one — the one underneath everything that was borrowed, inherited, or learned in fear.`, style: 'normal' },
  { text: `YCY was built for that person. The one who already knows. The one who has always known.`, style: 'normal' },
  { text: `what if the version of you who has everything is not who you become — but who you already are?`, style: 'italic-accent' },
  { text: `Twenty-one tools. Four phases. One direction: back to yourself.`, style: 'normal' },
  { text: `What no one expects is what happens next. Not just the personal shifts — though those are real, and they go deep.`, style: 'normal' },
  { text: `Something larger begins to move.`, style: 'large' },
  { text: `A frequency. A field.`, style: 'large-accent' },
  { text: `When a human truly remembers who they are — in the body, in the quiet, beneath all the borrowed noise — they do not only change themselves. They become a different signal in the world.`, style: 'normal' },
  { text: `We are at a point in our collective story where this matters more than it ever has.`, style: 'normal' },
]

export default function CreatorField() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.18)] to-transparent" />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="cf-blur" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="60"/>
            </filter>
            <radialGradient id="cf-ng" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(100,40,200,0.18)"/>
              <stop offset="55%" stopColor="rgba(60,20,140,0.06)"/>
              <stop offset="100%" stopColor="rgba(60,20,140,0)"/>
            </radialGradient>
          </defs>
          <path
            d="M 300,100 C 500,20 780,60 880,220 C 980,380 900,560 700,600 C 500,640 280,560 220,380 C 160,200 100,180 300,100 Z"
            fill="url(#cf-ng)"
            filter="url(#cf-blur)"
            style={{ animation: 'breathe 11s ease-in-out 2s infinite' }}
          />
        </svg>
      </div>

      <div className="container-prose relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-mono text-[9px] tracking-[0.28em] uppercase text-[rgba(179,136,255,0.5)] mb-10 text-center"
        >
          Why this exists
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.06 }}
          className="font-display text-[clamp(2.2rem,5.5vw,3.5rem)] font-light italic text-[rgba(240,236,255,0.95)] leading-[1.2] mb-16 text-center"
        >
          The real you already exists.
        </motion.h2>

        <div className="space-y-6">
          {PARAGRAPHS.map((para, i) => {
            const base = 'font-display font-light leading-[1.9]'

            if (para.style === 'large-accent') return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.06 + i * 0.04 }}
                className={`${base} text-[clamp(1.6rem,4vw,2.4rem)] italic text-[rgba(210,175,255,0.9)] text-center py-2`}
              >
                {para.text}
              </motion.p>
            )

            if (para.style === 'large') return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.06 + i * 0.04 }}
                className={`${base} text-[clamp(1.2rem,2.5vw,1.6rem)] italic text-[rgba(240,236,255,0.75)] text-center`}
              >
                {para.text}
              </motion.p>
            )

            if (para.style === 'italic-accent') return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.06 + i * 0.04 }}
                className={`${base} text-[clamp(1.1rem,1.8vw,1.3rem)] italic text-[rgba(210,175,255,0.8)] text-center px-4`}
              >
                {para.text}
              </motion.p>
            )

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.06 + i * 0.04 }}
                className={`${base} text-[clamp(1.05rem,1.5vw,1.2rem)] text-[rgba(240,236,255,0.62)]`}
              >
                {para.text}
              </motion.p>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
          className="mt-16 pt-12 text-center"
          style={{ borderTop: '1px solid rgba(179,136,255,0.1)' }}
        >
          <p className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] font-light italic text-[rgba(210,175,255,0.75)] leading-[1.6]">
            "The practice is personal.<br />The effect is planetary."
          </p>
        </motion.div>

      </div>
    </section>
  )
}
