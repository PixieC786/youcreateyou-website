'use client'

import { motion } from 'framer-motion'
import { beginCheckout } from '@/lib/checkout'

/* YCY STAR LIFE CYCLE SECTION START */

const EASE = [0.22, 1, 0.36, 1] as const

const STAGES = [
  {
    num: '01', name: 'Nebula', sub: 'POTENTIAL',
    star: 'Dust. Energy. Possibility.\nEverything begins unseen.',
    ycy: 'Everything begins within.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <defs>
          <radialGradient id="ycy-neb-g" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CFA8FF" stopOpacity="0.48"/>
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="32" fill="url(#ycy-neb-g)"/>
        <circle cx="28" cy="32" r="1.5" fill="#CFA8FF" opacity="0.55"/>
        <circle cx="53" cy="26" r="1"   fill="#CFA8FF" opacity="0.45"/>
        <circle cx="33" cy="54" r="1.2" fill="#CFA8FF" opacity="0.4"/>
        <circle cx="55" cy="50" r="1.8" fill="#CFA8FF" opacity="0.5"/>
        <circle cx="40" cy="19" r="0.9" fill="#CFA8FF" opacity="0.38"/>
        <circle cx="17" cy="44" r="1.2" fill="#CFA8FF" opacity="0.32"/>
        <circle cx="63" cy="36" r="0.9" fill="#CFA8FF" opacity="0.38"/>
        <circle cx="46" cy="59" r="1"   fill="#CFA8FF" opacity="0.3"/>
        <circle cx="22" cy="23" r="0.8" fill="#CFA8FF" opacity="0.28"/>
        <circle cx="58" cy="60" r="0.7" fill="#CFA8FF" opacity="0.25"/>
      </svg>
    ),
  },
  {
    num: '02', name: 'Collapse', sub: 'FOCUS',
    star: 'Gravity pulls inward.\nThe scattered becomes one.',
    ycy: 'What you focus on grows.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <path
          d="M 66 40 Q 66 13 40 13 Q 13 13 13 40 Q 13 62 37 62 Q 57 62 57 44 Q 57 28 40 28 Q 27 28 27 40 Q 27 50 36 50 Q 44 50 44 43"
          stroke="#CFA8FF" strokeWidth="1.4" opacity="0.68" strokeLinecap="round"
        />
        <circle cx="40" cy="40" r="3.5" fill="#CFA8FF" opacity="0.88"/>
        <circle cx="40" cy="40" r="1.8" fill="white"   opacity="0.92"/>
      </svg>
    ),
  },
  {
    num: '03', name: 'Ignition', sub: 'BECOMING',
    star: 'Fusion begins.\nThe star is born.',
    ycy: 'You become who you choose.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="9"   fill="#CFA8FF" opacity="0.82"/>
        <circle cx="40" cy="40" r="4.5" fill="white"/>
        <line x1="40" y1="27" x2="40" y2="9"  stroke="#CFA8FF" strokeWidth="1.5" opacity="0.68" strokeLinecap="round"/>
        <line x1="40" y1="53" x2="40" y2="71" stroke="#CFA8FF" strokeWidth="1.5" opacity="0.68" strokeLinecap="round"/>
        <line x1="27" y1="40" x2="9"  y2="40" stroke="#CFA8FF" strokeWidth="1.5" opacity="0.68" strokeLinecap="round"/>
        <line x1="53" y1="40" x2="71" y2="40" stroke="#CFA8FF" strokeWidth="1.5" opacity="0.68" strokeLinecap="round"/>
        <line x1="30" y1="30" x2="18" y2="18" stroke="#CFA8FF" strokeWidth="1"   opacity="0.42" strokeLinecap="round"/>
        <line x1="50" y1="30" x2="62" y2="18" stroke="#CFA8FF" strokeWidth="1"   opacity="0.42" strokeLinecap="round"/>
        <line x1="30" y1="50" x2="18" y2="62" stroke="#CFA8FF" strokeWidth="1"   opacity="0.42" strokeLinecap="round"/>
        <line x1="50" y1="50" x2="62" y2="62" stroke="#CFA8FF" strokeWidth="1"   opacity="0.42" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '04', name: 'Radiance', sub: 'EXPRESSION',
    star: 'Energy radiates outward.\nLight changes everything around it.',
    ycy: 'Your inner world meets the outer one.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="35" stroke="#CFA8FF" strokeWidth="0.5" opacity="0.16"/>
        <circle cx="40" cy="40" r="25" stroke="#CFA8FF" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="40" cy="40" r="15" stroke="#CFA8FF" strokeWidth="1.2" opacity="0.52"/>
        <circle cx="40" cy="40" r="7"  fill="#CFA8FF"   opacity="0.8"/>
        <circle cx="40" cy="40" r="3.5" fill="white"/>
      </svg>
    ),
  },
  {
    num: '05', name: 'Supernova', sub: 'TRANSFORMATION',
    star: 'Collapse becomes expansion.\nEndings create new beginnings.',
    ycy: 'Destruction becomes creation.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="36" stroke="#CFA8FF" strokeWidth="0.7" opacity="0.2"  strokeDasharray="3 4"/>
        <circle cx="40" cy="40" r="24" stroke="#CFA8FF" strokeWidth="1.1" opacity="0.4"/>
        <circle cx="40" cy="40" r="10" stroke="#CFA8FF" strokeWidth="2"   opacity="0.72"/>
        <circle cx="40" cy="3"  r="1.5" fill="#CFA8FF" opacity="0.6"/>
        <circle cx="40" cy="77" r="1.5" fill="#CFA8FF" opacity="0.6"/>
        <circle cx="3"  cy="40" r="1.5" fill="#CFA8FF" opacity="0.6"/>
        <circle cx="77" cy="40" r="1.5" fill="#CFA8FF" opacity="0.6"/>
        <circle cx="15" cy="15" r="1"   fill="#CFA8FF" opacity="0.45"/>
        <circle cx="65" cy="15" r="1"   fill="#CFA8FF" opacity="0.45"/>
        <circle cx="15" cy="65" r="1"   fill="#CFA8FF" opacity="0.45"/>
        <circle cx="65" cy="65" r="1"   fill="#CFA8FF" opacity="0.45"/>
        <circle cx="40" cy="40" r="3.5" fill="white"   opacity="0.95"/>
      </svg>
    ),
  },
  {
    num: '06', name: 'Legacy', sub: 'NEW STARS',
    star: 'The remains become new stars,\nplanets, and life.',
    ycy: 'You are always becoming.',
    symbol: (
      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="30" stroke="#CFA8FF" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="40" cy="10" r="2.2" fill="#CFA8FF" opacity="0.85"/>
        <circle cx="66" cy="25" r="1.7" fill="#CFA8FF" opacity="0.72"/>
        <circle cx="66" cy="55" r="2"   fill="#CFA8FF" opacity="0.8"/>
        <circle cx="40" cy="70" r="1.8" fill="#CFA8FF" opacity="0.72"/>
        <circle cx="14" cy="55" r="2.2" fill="#CFA8FF" opacity="0.82"/>
        <circle cx="14" cy="25" r="1.6" fill="#CFA8FF" opacity="0.68"/>
        <circle cx="40" cy="40" r="5"   fill="#CFA8FF" opacity="0.28"/>
        <circle cx="40" cy="40" r="2.2" fill="#CFA8FF" opacity="0.7"/>
      </svg>
    ),
  },
]

const PARTICLES = [
  { id: 0,  x: 7,  y: 18, s: 1.5, dur: 14, d: 0   },
  { id: 1,  x: 19, y: 74, s: 1,   dur: 18, d: 2.5 },
  { id: 2,  x: 31, y: 7,  s: 1.8, dur: 11, d: 1   },
  { id: 3,  x: 44, y: 87, s: 1.2, dur: 15, d: 3.5 },
  { id: 4,  x: 57, y: 11, s: 1,   dur: 19, d: 0.8 },
  { id: 5,  x: 73, y: 70, s: 1.8, dur: 12, d: 4   },
  { id: 6,  x: 86, y: 24, s: 1.3, dur: 16, d: 1.5 },
  { id: 7,  x: 93, y: 79, s: 1,   dur: 14, d: 5   },
  { id: 8,  x: 14, y: 48, s: 0.8, dur: 21, d: 2   },
  { id: 9,  x: 64, y: 38, s: 1.4, dur: 10, d: 3   },
  { id: 10, x: 79, y: 57, s: 0.9, dur: 23, d: 0.5 },
  { id: 11, x: 37, y: 62, s: 1.1, dur: 17, d: 4.5 },
]

export default function StarLifeCycle() {
  return (
    <section className="relative overflow-hidden" style={{
      padding: 'clamp(80px, 10vw, 140px) 0',
      background: 'linear-gradient(180deg, #07050f 0%, #0B0620 48%, #07050f 100%)',
    }}>
      {/* YCY STAR LIFE CYCLE SECTION START */}

      {/* Atmospheric orbs */}
      <div aria-hidden className="absolute pointer-events-none" style={{
        left: '5%', top: '10%', width: '45vw', height: '45vw',
        background: 'radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'breathe 20s ease-in-out infinite',
      }}/>
      <div aria-hidden className="absolute pointer-events-none" style={{
        right: '3%', bottom: '15%', width: '38vw', height: '38vw',
        background: 'radial-gradient(ellipse, rgba(207,168,255,0.05) 0%, transparent 70%)',
        filter: 'blur(55px)',
        animation: 'breathe 16s ease-in-out 4s infinite',
      }}/>

      {/* Drifting star particles */}
      {PARTICLES.map(p => (
        <div key={p.id} aria-hidden className="absolute rounded-full pointer-events-none" style={{
          left: `${p.x}%`, top: `${p.y}%`,
          width: `${p.s}px`, height: `${p.s}px`,
          background: 'rgba(207,168,255,0.38)',
          animation: `breathe ${p.dur}s ease-in-out ${p.d}s infinite`,
        }}/>
      ))}

      <div className="container-content relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10"
        >
          <p className="label-line justify-center">The Universe Outside Is a Reflection of the Universe Within</p>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.88, ease: EASE, delay: 0.08 }}
          className="heading-display text-center mb-6"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)',
            maxWidth: '20ch',
            margin: '0 auto 1.5rem',
          }}
        >
          The life cycle of stars.<br/>
          The life cycle of <span className="text-gradient">you.</span>
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
          className="font-body text-center"
          style={{
            color: 'rgba(216,194,255,0.62)',
            fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
            maxWidth: '44ch',
            margin: '0 auto 2rem',
            lineHeight: 2,
          }}
        >
          Stars don&apos;t rush. They gather. They collapse inward.<br/>
          They ignite. They radiate. They transform.<br/>
          <em style={{ color: 'rgba(207,168,255,0.8)' }}>So do you.</em>
        </motion.p>

        {/* Philosophy block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.22 }}
          style={{ maxWidth: '52ch', margin: '0 auto 5rem', textAlign: 'center' }}
        >
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,168,255,0.25), transparent)', marginBottom: '2.5rem' }}/>
          <p className="font-display" style={{
            color: 'rgba(235,220,255,0.92)',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.35,
            letterSpacing: '-0.01em',
            textShadow: '0 0 60px rgba(180,120,255,0.35)',
          }}>
            Stars transform inward<br/>before they shine outward.
          </p>
          <p className="font-display" style={{
            color: 'rgba(207,168,255,0.7)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            marginTop: '0.6rem',
          }}>
            So do we.
          </p>
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(207,168,255,0.25), transparent)', marginTop: '2.5rem' }}/>
        </motion.div>

        {/* 6 Stages */}
        <div className="relative">

          {/* Connecting gradient line — desktop only */}
          <div aria-hidden className="hidden lg:block absolute top-[52px] left-[4%] right-[4%] h-px pointer-events-none" style={{
            background: 'linear-gradient(90deg, rgba(207,168,255,0.1), rgba(168,85,247,0.25), rgba(255,255,255,0.28), rgba(255,255,255,0.22), rgba(168,85,247,0.18), rgba(207,168,255,0.08))',
          }}/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-10 lg:gap-3">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                {/* Symbol with glow halo */}
                <div className="relative flex items-center justify-center" style={{ width: '104px', height: '104px' }}>
                  <div aria-hidden className="absolute inset-0 rounded-full" style={{
                    background: 'radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 72%)',
                    filter: 'blur(14px)',
                    animation: `breathe ${8 + i}s ease-in-out ${i * 0.7}s infinite`,
                  }}/>
                  <div style={{ color: '#CFA8FF', filter: 'drop-shadow(0 0 7px rgba(207,168,255,0.48))' }}>
                    {stage.symbol}
                  </div>
                </div>

                {/* Stage number */}
                <span className="font-mono" style={{
                  fontSize: '9px',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: 'rgba(207,168,255,0.42)',
                }}>
                  {stage.num}
                </span>

                {/* Name + sub */}
                <div className="flex flex-col items-center gap-0.5 -mt-1">
                  <h3 className="font-display italic font-light leading-tight" style={{
                    fontSize: '1.22rem',
                    color: '#F1E7FF',
                  }}>
                    {stage.name}
                  </h3>
                  <span className="font-mono" style={{
                    fontSize: '7.5px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(207,168,255,0.46)',
                  }}>
                    {stage.sub}
                  </span>
                </div>

                {/* Star description */}
                <p className="font-body" style={{
                  fontSize: '0.73rem',
                  lineHeight: 1.75,
                  color: 'rgba(216,194,255,0.36)',
                  maxWidth: '13ch',
                  whiteSpace: 'pre-line',
                }}>
                  {stage.star}
                </p>

                {/* YCY meaning */}
                <p className="font-mono" style={{
                  fontSize: '8px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(207,168,255,0.58)',
                  maxWidth: '16ch',
                }}>
                  {stage.ycy}
                </p>

                {/* Mobile connector */}
                {i < STAGES.length - 1 && (
                  <div aria-hidden className="md:hidden flex flex-col items-center gap-1 mt-1 opacity-18">
                    <div style={{ width: '1px', height: '24px', background: 'linear-gradient(to bottom, rgba(207,168,255,0.3), transparent)' }}/>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="divider-glow my-20"
        />

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-center"
        >
          <div style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: 'clamp(36px, 5vw, 60px) clamp(24px, 5vw, 52px)',
            border: '1px solid rgba(207,168,255,0.18)',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.022)',
            boxShadow: '0 0 90px rgba(120,70,220,0.07), inset 0 1px 0 rgba(207,168,255,0.06)',
          }}>
            <p className="heading-display mb-5" style={{
              fontSize: 'clamp(1.55rem, 3.5vw, 2.5rem)',
              color: '#F1E7FF',
              lineHeight: 1.25,
            }}>
              &ldquo;You are not behind.<br/>You are becoming.&rdquo;
            </p>
            <span className="font-mono" style={{
              fontSize: '9px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'rgba(207,168,255,0.4)',
            }}>
              You Create You
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.14 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <button
            onClick={() => beginCheckout()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2.75rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#CFA8FF',
              background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(207,168,255,0.09) 100%)',
              border: '1px solid rgba(207,168,255,0.3)',
              boxShadow: '0 0 32px rgba(168,85,247,0.1)',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(207,168,255,0.55)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 48px rgba(168,85,247,0.22)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(207,168,255,0.3)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(168,85,247,0.1)'
            }}
          >
            Begin Your Practice
          </button>
          <p className="font-body" style={{
            fontSize: '0.8rem',
            color: 'rgba(207,168,255,0.38)',
          }}>
            Your inner world is where the practice begins.
          </p>
        </motion.div>

      </div>
      {/* YCY STAR LIFE CYCLE SECTION END */}
    </section>
  )
}
