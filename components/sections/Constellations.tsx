'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const ORBS = [
  {
    label: 'Send Love',
    sub: 'Into the World',
    href: 'https://app.youcreateyou.life/send_love.html',
    color: 'rgba(179,136,255',
    glow: 'rgba(140,70,230,0.18)',
  },
  {
    label: 'Read My',
    sub: 'Frequency',
    href: 'https://app.youcreateyou.life/frequency_reader.html',
    color: 'rgba(55,190,255',
    glow: 'rgba(30,160,240,0.18)',
  },
]

function OrbitButton({ label, sub, href, color, glow, delay, size = 150 }: {
  label: string; sub: string; href: string
  color: string; glow: string; delay: number; size?: number
}) {
  const r = size / 150
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="relative"
          style={{ width: size, height: size }}
        >
          {/* Outer ring — slow clockwise drift */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${color},0.18)` }}
          />

          {/* Second ring — counter-rotate */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              inset: Math.round(10 * r),
              border: `1px solid ${color},0.28)`,
              borderTopColor: `${color},0.6)`,
            }}
          />

          {/* Third ring — breathing */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{ inset: Math.round(28 * r), border: `1px solid ${color},0.4)` }}
          />

          {/* Glow bloom */}
          <div
            className="absolute rounded-full"
            style={{
              inset: Math.round(28 * r),
              background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
              filter: 'blur(8px)',
            }}
          />

          {/* Core */}
          <motion.div
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${color},0.1) 0%, transparent 65%)`,
              border: `1px solid ${color},0.32)`,
              backdropFilter: 'blur(4px)',
            }}
          >
            <span
              className="font-display font-light italic text-center leading-snug"
              style={{ fontSize: `${r}rem`, color: `${color},0.95)` }}
            >
              {label}<br />{sub}
            </span>
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  )
}

export default function Constellations() {
  return (
    <>
      {/* ── The live map ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ marginTop: '76px', height: 'calc(100dvh - 76px)', minHeight: '520px' }}
      >
        <iframe
          src="https://app.youcreateyou.life/world_love.html"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          title="YCY Live Constellation"
        />

        {/* Top fade */}
        <div aria-hidden className="absolute inset-x-0 top-0 pointer-events-none z-10"
          style={{ height: 40, background: 'linear-gradient(to bottom, #07050f 0%, transparent 100%)' }} />

        {/* Bottom fade */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 pointer-events-none z-10"
          style={{ height: 200, background: 'linear-gradient(to top, #07050f 0%, #07050f 8%, transparent 100%)' }} />

        {/* Cover ← back */}
        <div aria-hidden className="absolute top-0 left-0 z-20"
          style={{
            width: 115, height: 36,
            background: 'linear-gradient(to right, #07050f 55%, transparent 100%)',
            pointerEvents: 'auto',
          }}
        />

        {/* ── MOBILE layout: centered column ─────────────────────────────── */}
        <div className="md:hidden absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-4 pointer-events-none" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="text-center px-6"
          >
            <h2
              className="font-display font-light italic text-[rgba(240,236,255,0.88)] leading-[1.2] mb-1"
              style={{ fontSize: 'clamp(1.1rem, 5vw, 1.4rem)', textShadow: '0 2px 30px rgba(7,5,15,0.9)' }}
            >
              This is what a world<br />waking up looks like.
            </h2>
            <p
              className="font-body font-light text-[rgba(240,236,255,0.32)]"
              style={{ fontSize: '0.75rem' }}
            >
              Every dot is a human, practicing. Right now.
            </p>
          </motion.div>

          <div className="flex gap-5 pointer-events-auto">
            {ORBS.map((orb, i) => (
              <OrbitButton key={orb.href} {...orb} delay={0.1 + i * 0.12} size={110} />
            ))}
          </div>
        </div>

        {/* ── DESKTOP layout: original absolute positions ─────────────────── */}
        <div
          className="hidden md:flex absolute z-20 gap-6 pointer-events-auto"
          style={{ bottom: '8%', left: '56%' }}
        >
          {ORBS.map((orb, i) => (
            <OrbitButton key={orb.href} {...orb} delay={0.1 + i * 0.12} size={150} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="hidden md:block absolute z-20 pointer-events-none"
          style={{ bottom: '18%', left: '3%' }}
        >
          <h2
            className="font-display font-light italic text-[rgba(240,236,255,0.88)] leading-[1.2] mb-1"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)', textShadow: '0 2px 30px rgba(7,5,15,0.9)' }}
          >
            This is what a world<br />waking up looks like.
          </h2>
          <p
            className="font-body font-light text-[rgba(240,236,255,0.32)]"
            style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
          >
            Every dot is a human, practicing. Right now.
          </p>
        </motion.div>

        {/* Scroll indicator — right side, glowing dot arrow pointing down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
          className="absolute right-5 z-30 pointer-events-none bottom-[9%] md:bottom-auto md:top-[52%]"
          aria-hidden
        >
          <div className="relative" style={{ width: 20, height: 52 }}>
            {[
              { x: 10, y: 0,  delay: 0,    size: 4 },
              { x: 10, y: 11, delay: 0.16, size: 4 },
              { x: 10, y: 22, delay: 0.32, size: 4 },
              { x: 2,  y: 32, delay: 0.44, size: 4 },
              { x: 18, y: 32, delay: 0.44, size: 4 },
              { x: 10, y: 44, delay: 0.6,  size: 5 },
            ].map((dot, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 1, 0.1], scale: [0.6, 1.3, 0.6] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.4,
                  delay: dot.delay,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  left: dot.x - dot.size / 2,
                  top: dot.y - dot.size / 2,
                  width: dot.size,
                  height: dot.size,
                  background: 'rgba(200,155,255,0.95)',
                  borderRadius: '50%',
                  boxShadow: `0 0 ${dot.size * 2}px ${dot.size}px rgba(170,100,255,0.45)`,
                }}
              />
            ))}
          </div>
        </motion.div>

      </section>
    </>
  )
}
