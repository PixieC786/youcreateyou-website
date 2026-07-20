'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const MOMENTS = [
  {
    id: 'share',
    step: '01',
    name: 'Share',
    tagline: 'Seven ways in. Never a blank page.',
    description: `Reflection. Intention. Milestone. Feeling. Gratitude. Becoming. Sacred Word. Every share starts from a real place — never "what's on your mind."`,
    color: 'rgba(140,80,255,0.12)',
  },
  {
    id: 'respond',
    step: '02',
    name: 'Respond',
    tagline: 'The real danger was never a bad reply. It was silence.',
    description: `One tap sends real words back — "I see you," "I've felt this too" — so nobody who shares something true is ever left with nothing.`,
    color: 'rgba(179,136,255,0.12)',
  },
  {
    id: 'notice',
    step: '03',
    name: 'Notice',
    tagline: 'A letter, not a headline.',
    description: `When someone responds, you're told — never shown. What was said stays sealed until you choose to open it, wherever you are.`,
    color: 'rgba(124,77,255,0.12)',
  },
  {
    id: 'remember',
    step: '04',
    name: 'Remember',
    tagline: 'Every reply becomes a star.',
    description: `A private, growing map of every moment someone truly saw you — yours alone, filling in one act of love at a time.`,
    color: 'rgba(200,166,255,0.12)',
  },
]

// Same spiral placement math as the real Constellation page: angle sweeps
// 4 full rotations outward from centre, y compressed for an elliptical
// galaxy shape. Pure math, no Math.random — deterministic so server and
// client render identically (avoids hydration mismatches).
const REMEMBER_STAR_COUNT = 34
const REMEMBER_STARS = Array.from({ length: REMEMBER_STAR_COUNT }, (_, i) => {
  const total = REMEMBER_STAR_COUNT
  const angle = (i / total) * Math.PI * 2 * 4
  const radius = (i / (total - 1)) * 44
  const isReply = i % 5 === 0
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius * 0.62,
    r: isReply ? 3.4 : 1.7,
    isReply,
  }
})

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[240px] aspect-[9/18.5] rounded-[2rem] border border-[rgba(179,136,255,0.2)] bg-[#0a0620] shadow-[0_30px_70px_-24px_rgba(90,25,170,0.5)] overflow-hidden">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-1 rounded-full bg-[rgba(255,255,255,0.1)] z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_18%,rgba(179,136,255,0.14),transparent_60%)]" />
      <div className="relative z-10 h-full pt-8 px-3.5 pb-4 flex flex-col">
        {children}
      </div>
    </div>
  )
}

function FieldHeader() {
  return (
    <p className="font-mono text-[6.5px] tracking-[0.2em] uppercase text-[rgba(179,136,255,0.42)] text-center mb-3">
      The Creator Field ✦
    </p>
  )
}

function ShareMock() {
  return (
    <>
      <FieldHeader />
      <div className="flex gap-2 mb-3 overflow-hidden">
        {['✦ Reflection', '◎ Intention', '◉ Milestone'].map((c) => (
          <span key={c} className="flex-shrink-0 font-display italic text-[7.5px] text-[rgba(200,166,255,0.5)] whitespace-nowrap">{c}</span>
        ))}
      </div>
      <div className="rounded-lg border border-[rgba(179,136,255,0.16)] bg-[rgba(179,136,255,0.05)] p-3">
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-display italic text-[11px] text-[rgba(200,166,255,0.88)]">Lüna</span>
          <span className="font-mono text-[5.5px] tracking-[0.15em] uppercase text-[rgba(179,136,255,0.4)]">Milestone</span>
        </div>
        <p className="font-display italic text-[11.5px] text-[rgba(240,236,255,0.85)] leading-snug mb-3">
          I started to read the book. Anyone else? 🙃
        </p>
        <div className="flex gap-1.5">
          {['💜', '🙏', '✨'].map((e) => <span key={e} className="text-[10px]">{e}</span>)}
        </div>
      </div>
    </>
  )
}

function RespondMock() {
  return (
    <>
      <FieldHeader />
      <div className="rounded-lg border border-[rgba(179,136,255,0.1)] bg-[rgba(179,136,255,0.03)] p-2.5 mb-2.5 opacity-60">
        <p className="font-display italic text-[10px] text-[rgba(240,236,255,0.7)] leading-snug">
          Some days the practice feels heavy. I showed up anyway.
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {['I see you 💜', 'Sending you love'].map((c) => (
          <span key={c} className="font-display italic text-[7.5px] border border-[rgba(179,136,255,0.25)] rounded-full px-2 py-1 text-[rgba(200,166,255,0.75)]">{c}</span>
        ))}
      </div>
      <div className="rounded-lg border-l-2 border-[rgba(179,136,255,0.4)] bg-[rgba(255,255,255,0.025)] p-2.5">
        <span className="font-display italic text-[9.5px] text-[rgba(200,166,255,0.85)] block mb-0.5">Sparkle</span>
        <p className="font-display italic text-[10.5px] text-[rgba(240,236,255,0.82)] leading-snug">
          I've felt that too — showing up is the whole thing 💜
        </p>
      </div>
    </>
  )
}

function NoticeMock() {
  return (
    <div className="flex-1 flex items-center justify-center px-1">
      <div className="w-full rounded-xl border border-[rgba(179,136,255,0.3)] bg-[rgba(12,8,28,0.92)] backdrop-blur p-3">
        <p className="font-mono text-[6px] tracking-[0.15em] uppercase text-[rgba(179,136,255,0.55)] mb-1.5">
          You Create You
        </p>
        <p className="font-display italic text-[12px] text-[rgba(240,236,255,0.94)] mb-1">
          Someone responded ✦
        </p>
        <p className="font-body text-[8.5px] text-[rgba(240,236,255,0.4)] leading-snug">
          Someone responded to what you shared in The Creator Field.
        </p>
      </div>
    </div>
  )
}

function RememberMock() {
  const points = REMEMBER_STARS.map((s) => `${s.x},${s.y}`).join(' ')
  return (
    <div className="flex-1 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,80,255,0.22)_0%,rgba(100,40,200,0.1)_40%,transparent_70%)]" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="rgba(200,138,255,0.12)"
          strokeWidth="0.3"
        />
        {REMEMBER_STARS.map((s, i) => (
          <g key={i}>
            <circle
              cx={s.x} cy={s.y} r={s.r * 2.4}
              fill={s.isReply ? 'rgba(255,245,220,0.28)' : 'rgba(200,138,255,0.22)'}
            />
            <circle
              cx={s.x} cy={s.y} r={s.r}
              fill={s.isReply ? 'rgba(255,250,240,0.95)' : 'rgba(220,155,255,0.92)'}
            />
          </g>
        ))}
      </svg>
      <p className="absolute bottom-1 inset-x-0 text-center font-mono text-[6.5px] tracking-[0.15em] uppercase text-[rgba(179,136,255,0.55)]">
        {REMEMBER_STAR_COUNT} stars in your constellation
      </p>
    </div>
  )
}

const MOCKS: Record<string, () => JSX.Element> = {
  share: ShareMock,
  respond: RespondMock,
  notice: NoticeMock,
  remember: RememberMock,
}

export default function CreatorFieldExplorer() {
  const [active, setActive] = useState(0)
  const moment = MOMENTS[active]
  const Mock = MOCKS[moment.id]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5">

      {/* Selector */}
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
        {MOMENTS.map((m, i) => (
          <motion.button
            key={m.id}
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
                layoutId="field-moment-pill"
                className="absolute left-0 top-1/4 bottom-1/4 w-[2px] rounded-full bg-accent/60"
              />
            )}
            <span className="font-mono text-[8.5px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.42)] block mb-1">
              Moment {m.step}
            </span>
            <p className={`font-display italic text-[1.05rem] leading-snug transition-colors duration-300 ${active === i ? 'text-[#f0ecff]' : 'text-[rgba(240,236,255,0.48)]'}`}>
              {m.name}
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
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 80% 60% at 20% 30%, ${moment.color} 0%, transparent 70%)` }}
            />

            <div className="relative z-10 p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

              <div>
                <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)]">
                  Moment {moment.step}
                </span>
                <h3 className="font-display italic text-[clamp(1.5rem,2.6vw,2rem)] text-[#f0ecff] mt-3 mb-2 font-light leading-[1.15]">
                  {moment.name}
                </h3>
                <p className="font-display italic text-[1rem] text-[rgba(200,166,255,0.65)] mb-5 leading-snug">
                  {moment.tagline}
                </p>
                <p className="font-body text-[rgba(240,236,255,0.58)] text-[14px] leading-[1.8] max-w-[42ch]">
                  {moment.description}
                </p>
              </div>

              <PhoneFrame>
                <Mock />
              </PhoneFrame>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
