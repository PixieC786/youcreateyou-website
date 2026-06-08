'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const EASE = [0.22, 1, 0.36, 1] as const

const TOOLS = [
  {
    id: 'observer',
    phase: 'Phase I — See Clearly',
    name: 'The Observer',
    tagline: 'Question the thought. Not yourself.',
    description: 'A 6-stage inquiry journey — the most direct path to dissolving the beliefs that create your suffering. From naming the thought to choosing who you become, reality shifts from the inside.',
    stages: ['The Thought', 'The Body', 'The Inquiry', 'The Cost', 'The Flip', 'The Choice'],
    color: 'rgba(100,55,200,0.12)',
  },
  {
    id: 'fear',
    phase: 'Phase II — Release & Discover',
    name: 'The Fear Alchemist',
    tagline: 'Every fear contains its opposite gift.',
    description: 'A 6-stage guided somatic process that transmutes what holds you back into the exact fuel you need for expansion. Named "the most powerful 20 minutes" by our community.',
    stages: ['Presence', 'Naming', 'Body', 'Dialogue', 'Gift', 'Integration'],
    color: 'rgba(140,80,255,0.12)',
  },
  {
    id: 'visualisation',
    phase: 'Phase III — Install the New Reality',
    name: 'Creative Visualisation',
    tagline: 'You meet your future self here.',
    description: 'A 20-minute guided journey into the life you\'re calling in — followed by Embody Your Identity, where you become the person you just saw. The most powerful sequence in the practice.',
    stages: ['Arrival', 'Descent', 'Vision', 'Meeting', 'Merge', 'Embody'],
    color: 'rgba(179,136,255,0.1)',
  },
  {
    id: 'gratitude',
    phase: 'Phase IV — Signal & Nurture Daily',
    name: 'The Gratitude Portal',
    tagline: 'What you appreciate, appreciates.',
    description: 'A daily gratitude practice with miracle morning sequencing and heart-pulse activation. The tool that compounds faster than any other in the practice.',
    stages: ['Arrival', 'Chips', 'Morning', 'Heart Pulse', 'Anchor', 'Signal'],
    color: 'rgba(124,77,255,0.1)',
  },
]

const PHASES = [
  { number: '01', name: 'See Clearly',            count: 4, tools: 'Ancient Wisdom · Reality Architect · Frequency Tuner · The Observer' },
  { number: '02', name: 'Release & Discover',      count: 7, tools: 'The Fear Alchemist · Mind Body · Ego Alchemy · Identity Rebirth · The Love You Are · The Purpose Compass · New Chapter Vision' },
  { number: '03', name: 'Install the New Reality', count: 3, tools: 'Subconscious Reprogrammer · Quantum Creation · Creative Visualisation' },
  { number: '04', name: 'Signal & Nurture Daily',  count: 6, tools: 'Gratitude Portal · Coherence Lab · Manifestation Garden · Feminine Way · Masculine Way · Fun Is the Frequency' },
]

export default function AppShowcase() {
  const [active, setActive] = useState(0)
  const tool = TOOLS[active]

  return (
    <section id="practice" className="section-pad relative overflow-hidden">

      {/* Separator */}
      <div className="absolute top-0 inset-x-0 divider-glow" />

      <div className="container-site relative z-10">

        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <SectionLabel text="The practice" />
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light italic text-[#f0ecff] mt-6 leading-[1.12]"
          >
            20 tools. 4 phases.
            <br />
            <span className="text-gradient">One complete transformation.</span>
          </motion.h2>
        </div>

        {/* Interactive tool explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 mb-16">

          {/* Sidebar selector */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
            {TOOLS.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: EASE }}
                suppressHydrationWarning
                className={`
                  group relative flex-shrink-0 text-left px-5 py-4 rounded-xl border
                  transition-all duration-300 cursor-pointer
                  ${active === i
                    ? 'border-[rgba(179,136,255,0.32)] bg-[rgba(179,136,255,0.08)] shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
                    : 'border-[rgba(179,136,255,0.07)] bg-transparent hover:border-[rgba(179,136,255,0.16)] hover:bg-[rgba(179,136,255,0.03)]'
                  }
                `}
              >
                {active === i && (
                  <motion.div
                    layoutId="tool-pill"
                    className="absolute left-0 top-1/4 bottom-1/4 w-[2px] rounded-full bg-accent/60"
                  />
                )}
                <span className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.42)] block mb-1">
                  {t.phase.split(' — ')[0]}
                </span>
                <p className={`font-display italic text-[1.05rem] leading-snug transition-colors duration-300 ${active === i ? 'text-[#f0ecff]' : 'text-[rgba(240,236,255,0.48)]'}`}>
                  {t.name}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:sticky lg:top-24 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
                transition={{ duration: 0.38, ease: EASE }}
                className="relative rounded-2xl border border-[rgba(179,136,255,0.14)] overflow-hidden"
              >
                {/* Ambient color wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 20% 30%, ${tool.color} 0%, transparent 70%)` }}
                />

                <div className="relative z-10 p-8 md:p-10">
                  {/* Phase label */}
                  <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)]">
                    {tool.phase}
                  </span>

                  {/* Title + tagline */}
                  <h3 className="font-display italic text-[clamp(1.6rem,3vw,2.25rem)] text-[#f0ecff] mt-3 mb-1 font-light leading-[1.1]">
                    {tool.name}
                  </h3>
                  <p className="font-display italic text-[1rem] text-[rgba(200,166,255,0.6)] mb-5">
                    {tool.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-[rgba(240,236,255,0.58)] text-[15px] leading-[1.8] mb-8 max-w-[52ch]">
                    {tool.description}
                  </p>

                  {/* Stage progression */}
                  <div className="mb-8">
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-[rgba(179,136,255,0.38)] mb-3">
                      {tool.stages.length} stages
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.stages.map((stage, i) => (
                        <div
                          key={stage}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(179,136,255,0.12)] bg-[rgba(179,136,255,0.05)]"
                        >
                          <span className="font-mono text-[8px] text-[rgba(179,136,255,0.4)]">{String(i + 1).padStart(2, '0')}</span>
                          <span className="font-body text-[11px] text-[rgba(240,236,255,0.55)]">{stage}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button href="https://app.youcreateyou.life/tools_hub.html" external variant="primary" size="sm">
                    Try This Tool — 21 Days
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 4-phase overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: EASE }}
              className="p-5 rounded-xl border border-[rgba(179,136,255,0.08)] bg-[rgba(179,136,255,0.025)] hover:border-[rgba(179,136,255,0.18)] transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[rgba(179,136,255,0.38)] group-hover:text-[rgba(179,136,255,0.58)] transition-colors duration-300">
                  {phase.number}
                </span>
                <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-[rgba(179,136,255,0.28)]">
                  {phase.count} tools
                </span>
              </div>
              <p className="font-display italic text-[1.15rem] text-[rgba(240,236,255,0.75)] mb-2 font-light group-hover:text-[#f0ecff] transition-colors duration-300">
                {phase.name}
              </p>
              <p className="font-body text-[11px] text-[rgba(240,236,255,0.26)] leading-relaxed">
                {phase.tools}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
