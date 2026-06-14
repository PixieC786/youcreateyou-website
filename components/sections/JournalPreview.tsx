'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const EASE = [0.22, 1, 0.36, 1] as const

const ENTRIES = [
  {
    day: 'Day 1',
    prompt: 'Who were you before the world told you who to be?',
    preview: 'I was fearless. I sang in public without thinking twice. I believed anything was possible — not because of evidence, but because I simply hadn\'t learned not to yet...',
  },
  {
    day: 'Day 14',
    prompt: 'What fear are you currently alchemising?',
    preview: 'The fear of being fully seen. Not the curated version. The real me — uncertain, still becoming, not quite arrived. That\'s the one I\'m sitting with...',
  },
  {
    day: 'Day 33',
    prompt: 'Describe your life from the eyes of your future self.',
    preview: 'I\'m writing this from the studio I built. The one I said I couldn\'t afford, couldn\'t find, wasn\'t ready for. It turns out ready was never the requirement...',
  },
]

const FEATURES = [
  'Questions that shift as you do — matched to where you are in the practice',
  'Prompts that reach beneath the thinking mind',
  'Patterns that reveal themselves across entries over time',
  'One prompt per day — matched to your phase in the practice',
  'Private — only you can read it',
]

export default function JournalPreview() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,55,200,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: copy */}
          <div>
            <SectionLabel text="The journal" align="left" />

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: EASE }}
              className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light italic text-[#f0ecff] mt-6 mb-5 leading-[1.12]"
            >
              Every answer
              <br />you need is
              <br /><span className="text-gradient">already inside.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
              className="font-body text-[rgba(240,236,255,0.5)] text-[clamp(1rem,1.25vw,1.1rem)] leading-[1.82] mb-8"
            >
              This is not a diary. These are questions designed to reach
              the parts of you that ordinary journaling has never touched.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.18, duration: 0.65, ease: EASE }}
              className="flex flex-col gap-3 mb-10"
            >
              {FEATURES.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-[6px] w-[5px] h-[5px] rounded-full bg-accent/50 flex-shrink-0" />
                  <span className="font-body text-[14px] text-[rgba(240,236,255,0.55)] leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.28, duration: 0.6, ease: EASE }}
            >
              <Button href="/start" variant="primary" size="md">
                Open My Journal
              </Button>
            </motion.div>
          </div>

          {/* Right: journal entry cards */}
          <div className="flex flex-col gap-3">
            {ENTRIES.map(({ day, prompt, preview }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09, duration: 0.65, ease: EASE }}
                className="group relative p-6 rounded-2xl border border-[rgba(179,136,255,0.08)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(179,136,255,0.2)] hover:bg-[rgba(179,136,255,0.04)] transition-all duration-350 overflow-hidden"
              >
                {/* Paper-like top accent */}
                <div className="absolute top-0 inset-x-6 h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.2)] to-transparent" />

                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.42)]">
                    {day}
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(179,136,255,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[rgba(179,136,255,0.45)] transition-colors duration-300">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>

                <p className="font-display italic text-[1.05rem] text-[rgba(240,236,255,0.72)] mb-3 leading-snug group-hover:text-[rgba(240,236,255,0.88)] transition-colors duration-300">
                  {prompt}
                </p>

                <p className="font-body text-[13px] text-[rgba(240,236,255,0.28)] leading-relaxed italic line-clamp-3">
                  {preview}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
