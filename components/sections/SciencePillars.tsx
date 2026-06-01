'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'

const EASE = [0.22, 1, 0.36, 1] as const

// Simple, hand-tuned SVG icons — no icon library dependency
const ICONS = {
  brain: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  ),
  person: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/>
      <path d="M5 21v-2a7 7 0 0 1 14 0v2"/>
      <path d="M12 11v5M9.5 14.5l2.5-2.5 2.5 2.5"/>
    </svg>
  ),
  wave: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s2-6 5-6 4 12 7 12 5-6 5-6"/>
    </svg>
  ),
  infinity: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4Z"/>
      <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4Z"/>
    </svg>
  ),
  atom: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  music: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <path d="M6 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    </svg>
  ),
}

const PILLARS = [
  {
    label: '01 — Neuroscience',
    title: 'Neuroplasticity on demand',
    body: 'Your brain reshapes itself with every repeated thought. We use theta-wave entrainment, visualization, and daily identity rehearsal to make structural change — not temporary motivation.',
    icon: ICONS.brain,
  },
  {
    label: '02 — Psychology',
    title: 'Identity-level change',
    body: 'Behavior follows identity, not willpower. Jungian shadow work, ego transcendence, and cognitive reprogramming shift who you believe you are at the deepest level.',
    icon: ICONS.person,
  },
  {
    label: '03 — Somatics',
    title: 'The body holds the code',
    body: 'Trauma, stress, and old patterns live in the nervous system — not just the mind. Breathwork, coherence training, and somatic release bring the body into alignment.',
    icon: ICONS.wave,
  },
  {
    label: '04 — Ancient Wisdom',
    title: '5,000 years of knowing',
    body: 'Stoicism, Taoism, Vedanta, Buddhism — every tradition points toward the same truth. We synthesize these lineages into practical tools, bridged by modern science.',
    icon: ICONS.infinity,
  },
  {
    label: '05 — Quantum Thinking  ·  emerging science + contemplative tradition',
    title: 'Consciousness shapes reality',
    body: 'Observer-effect principles, manifestation field dynamics, and visualization science all converge on one truth: how you hold reality determines what you experience.',
    icon: ICONS.atom,
  },
  {
    label: '06 — Frequency Science',
    title: 'Sound as medicine',
    body: 'Solfeggio frequencies, binaural beats, and heart-brain synchronization are measurable phenomena. We embed them into every session as active transformation tools.',
    icon: ICONS.music,
  },
]

export default function SciencePillars() {
  return (
    <section id="science" className="section-pad relative overflow-hidden">
      {/* Ambient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 50% 75%, rgba(100,55,200,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <SectionLabel text="The science" />

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light italic text-[#f0ecff] mt-6 leading-[1.12]"
          >
            Built on six disciplines.
            <br />
            Delivered as one practice.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
            className="mt-5 font-body text-[rgba(240,236,255,0.48)] text-[clamp(1rem,1.25vw,1.1rem)] leading-[1.82] max-w-[44ch] mx-auto"
          >
            We didn't choose between modern neuroscience and ancient wisdom.
            We synthesized them into 20 tools that work together.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map(({ label, title, body, icon }, i) => (
            <Card
              key={title}
              label={label}
              title={title}
              body={body}
              icon={icon}
              delay={i * 0.055}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
