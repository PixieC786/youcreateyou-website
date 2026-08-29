'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'

const EASE = [0.22, 1, 0.36, 1] as const

const STATEMENTS = [
  {
    num: '01',
    text: 'You wake up and wonder if today will be any different.',
  },
  {
    num: '02',
    text: 'You\'ve done the therapy, the books, the apps. But something deeper hasn\'t shifted.',
  },
  {
    num: '03',
    text: 'You scroll through other people\'s lives and feel quietly hollow.',
  },
  {
    num: '04',
    text: 'You know you\'re capable of more — you just don\'t know what\'s in the way.',
  },
]

export default function Recognition() {
  return (
    <section className="section-pad relative overflow-hidden">

      {/* Ambient — warmer, more luminous center bloom */}
      <div aria-hidden className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(150,80,255,0.08) 0%, rgba(120,55,220,0.04) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
      </div>

      {/* Warm top crown — subtle lift of light */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: '60vw', height: '30vh',
        background: 'radial-gradient(ellipse at top, rgba(210,175,255,0.06) 0%, transparent 70%)',
        filter: 'blur(24px)',
      }} />

      <div className="container-content relative z-10">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <SectionLabel text="You already know" />

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light italic mt-6 mb-5 leading-[1.12]"
            style={{ color: '#f8f5ff' }}
          >
            That feeling is the beginning,
            <br />
            <span className="text-gradient">not a flaw.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="font-body text-[rgba(235,228,255,0.62)] text-[clamp(1rem,1.25vw,1.1rem)] leading-[1.85]"
          >
            It means part of you is ready to expand beyond the story you've been living.
          </motion.p>
        </div>

        {/* Statement list — warmer numbers, more readable text */}
        <div
          className="flex flex-col gap-0 px-[clamp(20px,6vw,120px)]"
          style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
        >
          {STATEMENTS.map(({ num, text }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
              className="group flex gap-6 md:gap-8 items-start py-6 border-b border-[rgba(210,175,255,0.09)] last:border-b-0 cursor-default"
            >
              {/* Number — warmer at rest, luminous on hover */}
              <span className="font-display italic text-[2.5rem] font-light leading-none flex-shrink-0 pt-1 select-none text-gradient opacity-70 group-hover:opacity-100 transition-opacity duration-400"
              >
                {num}
              </span>
              {/* Text — readable, warms on hover */}
              <p className="font-display italic text-[clamp(1.15rem,2vw,1.45rem)] font-light leading-[1.52] transition-colors duration-400"
                style={{ color: 'rgba(235,228,255,0.62)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(248,244,255,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(235,228,255,0.62)')}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pull quote — luminous, warm, aurora gradient */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.38, duration: 0.88, ease: EASE }}
          className="max-w-xl mx-auto mt-16 md:mt-20 text-center"
        >
          {/* Quote text — aurora gradient for warmth and luminosity */}
          <p className="font-display italic text-[clamp(1.25rem,2.5vw,1.75rem)] font-light leading-[1.58] text-aurora"
            style={{
              background: 'linear-gradient(160deg, #f0e4ff 0%, #d4aaff 50%, #b388ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The version of you who was here all along already exists.
            This practice helps you remember.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
