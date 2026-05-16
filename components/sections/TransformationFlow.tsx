'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const STEPS = [
  {
    num: '01', label: 'Recognize',
    phrase: 'You are not your patterns. You never were.',
    color: '#c88aff', shadow: 'rgba(180,100,255,0.55)',
    symbol: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="22" fill="none" stroke="currentColor" strokeWidth="1"   opacity="0.25"/>
        <circle cx="25" cy="25" r="14" fill="none" stroke="currentColor" strokeWidth="1"   opacity="0.5"/>
        <circle cx="25" cy="25" r="6"  fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.72"/>
        <circle cx="25" cy="25" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '02', label: 'Understand',
    phrase: 'Everything you feel vibrates at its own frequency.',
    color: '#60d4f0', shadow: 'rgba(50,200,240,0.5)',
    symbol: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <path d="M2,25 Q9,9 16,25 Q23,41 30,25 Q37,9 44,25 Q47,31 48,25"
          fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85" strokeLinecap="round"/>
        <circle cx="25" cy="25" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '03', label: 'Choose',
    phrase: 'Consciously. From identity — not habit.',
    color: '#ffd060', shadow: 'rgba(255,195,40,0.55)',
    symbol: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <polygon points="25,2 48,25 25,48 2,25"  fill="none" stroke="currentColor" strokeWidth="1"   opacity="0.35"/>
        <polygon points="25,13 37,25 25,37 13,25" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.62"/>
        <circle cx="25" cy="25" r="3" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '04', label: 'Practice',
    phrase: 'One morning. One hour. One new version of you.',
    color: '#ff8eb4', shadow: 'rgba(255,100,155,0.5)',
    symbol: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <polygon points="25,3 45,14 45,36 25,47 5,36 5,14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="25" cy="7"  r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="43" cy="17" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="43" cy="33" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="25" cy="43" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="7"  cy="33" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="7"  cy="17" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="25" cy="25" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '05', label: 'Become',
    phrase: 'Not someday. Right now. In this one quiet hour.',
    color: '#ffffff', shadow: 'rgba(220,205,255,0.6)',
    symbol: (
      <svg width="50" height="50" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
        <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.32"/>
        <circle cx="25" cy="25" r="9"  fill="currentColor" opacity="0.45"/>
        <circle cx="25" cy="25" r="5"  fill="currentColor" opacity="0.75"/>
        <circle cx="25" cy="25" r="2"  fill="currentColor"/>
      </svg>
    ),
  },
]

export default function TransformationFlow() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(120,60,200,0.05) 0%, transparent 70%)',
      }}/>

      <div className="container-content">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="label-line justify-center mb-5">How transformation actually works</p>
          <p className="font-body text-[rgba(235,228,255,0.38)] text-sm max-w-[38ch] mx-auto leading-relaxed">
            Not motivation. Not information.<br/>Identity — rebuilt from the inside out.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative">

          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-[52px] left-[8%] right-[8%] h-px pointer-events-none" style={{
            background: 'linear-gradient(90deg, rgba(200,138,255,0.25), rgba(96,212,240,0.25), rgba(255,208,96,0.25), rgba(255,142,180,0.25), rgba(255,255,255,0.25))',
          }}/>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.78, ease: EASE, delay: i * 0.12 }}
                className="flex flex-col items-center text-center gap-4"
              >
                {/* Symbol with glow */}
                <div className="relative flex items-center justify-center w-[104px] h-[104px]">
                  <div className="absolute inset-0 rounded-full" style={{
                    background: `radial-gradient(circle, ${step.shadow} 0%, transparent 68%)`,
                    filter: 'blur(14px)',
                  }}/>
                  <div style={{ color: step.color, filter: `drop-shadow(0 0 7px ${step.shadow})` }}>
                    {step.symbol}
                  </div>
                </div>

                {/* Step number */}
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase" style={{ color: step.color, opacity: 0.5 }}>
                  {step.num}
                </span>

                {/* Label */}
                <h3 className="font-display italic text-[1.4rem] font-light leading-tight -mt-1" style={{ color: step.color }}>
                  {step.label}
                </h3>

                {/* Phrase */}
                <p className="font-body text-[rgba(235,228,255,0.42)] text-[0.78rem] leading-relaxed max-w-[17ch]">
                  {step.phrase}
                </p>

                {/* Mobile connector arrow */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden flex flex-col items-center gap-1 mt-2 opacity-20">
                    <div className="w-px h-6" style={{ background: `linear-gradient(to bottom, ${step.color}, ${STEPS[i+1].color})` }}/>
                    <span className="text-[10px]" style={{ color: STEPS[i+1].color }}>↓</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
