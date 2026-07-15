'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import SciencePillars from '@/components/sections/SciencePillars'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'

const EASE = [0.22, 1, 0.36, 1] as const

const RESEARCH = [
  {
    stat: '67%',
    finding: 'of long-term meditators show measurable structural changes in the prefrontal cortex',
    source: 'Harvard Medical School, 2011',
  },
  {
    stat: '4–7 Hz',
    finding: 'Theta brainwave state — proven optimal for deep belief change and accessing the receptive state where new truth takes root',
    source: 'Journal of Neurophysiology',
  },
  {
    stat: '528 Hz',
    finding: 'Solfeggio frequency — emerging research suggests it may reduce cortisol levels and support cellular coherence',
    source: 'Journal of Addiction Research',
  },
  {
    stat: '21 days',
    finding: 'minimum threshold for neuroplastic change when visualization is combined with emotional rehearsal',
    source: 'Neuroscience research on visualization and neuroplastic change',
  },
]

export default function SciencePage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container-content mb-12 text-center">
        <SectionLabel text="The science" />
        <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
          Where science and soul
          <br />point at the same place.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-xl mx-auto leading-relaxed">
          Every portal in the practice is grounded in science, ancient wisdom, and lived experience
          — each chosen because it works.
        </p>
      </div>

      {/* Research stats */}
      <section className="section-pad pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {RESEARCH.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[rgba(179,136,255,0.1)] bg-[rgba(179,136,255,0.03)] hover:border-[rgba(179,136,255,0.2)] transition-colors duration-300"
              >
                <p className="font-display italic text-4xl text-accent/80 font-light mb-3">{item.stat}</p>
                <p className="font-body text-sm text-[rgba(240,236,255,0.6)] leading-relaxed mb-4">{item.finding}</p>
                <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(240,236,255,0.2)]">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wisdom pull quote */}
      <div className="container-content mb-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative py-10 px-8 md:px-16 rounded-2xl text-center overflow-hidden"
          style={{
            border: '1px solid rgba(210,175,255,0.14)',
            background: 'rgba(210,175,255,0.03)',
            boxShadow: '0 0 60px rgba(140,70,255,0.07) inset',
          }}
        >
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(180,120,255,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <p
            className="relative font-display italic text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.85] max-w-[52ch] mx-auto"
            style={{
              background: 'linear-gradient(150deg, #f0e4ff 0%, #d4aaff 50%, #b388ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            "The ancient knowing is not a philosophy. It is not a belief system.
            It is the oldest intelligence in the room —
            and it has been waiting, patiently, for you to finally trust it."
          </p>
        </motion.div>
      </div>

      <SciencePillars />

      <div className="container-content mt-10 text-center">
        <BeginPracticeButton variant="primary" size="lg">
          Experience the science yourself
        </BeginPracticeButton>
      </div>
    </main>
  )
}
