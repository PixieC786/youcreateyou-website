'use client'

import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

const ITEMS = [
  { label: 'The Transmission — the full ebook', value: 29 },
  { label: 'Lifetime app access — every portal & tool', value: 237 },
]

const TOTAL = ITEMS.reduce((sum, item) => sum + item.value, 0)
const PRICE = 97
const SAVINGS = TOTAL - PRICE

export default function ValueStack({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`rounded-2xl p-8 max-w-[420px] mx-auto text-left ${className || ''}`}
      style={{ border: '1px solid rgba(210,175,255,0.16)', background: 'rgba(210,175,255,0.03)' }}
    >
      <div className="flex flex-col gap-3 mb-5">
        {ITEMS.map(item => (
          <div key={item.label} className="flex items-baseline justify-between gap-4">
            <span className="font-body text-[0.92rem] leading-[1.5]" style={{ color: 'rgba(235,228,255,0.65)' }}>
              {item.label}
            </span>
            <span className="font-mono text-[0.85rem] flex-shrink-0" style={{ color: 'rgba(220,195,255,0.5)' }}>
              ${item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="h-px w-full mb-5" style={{ background: 'rgba(210,175,255,0.14)' }} />

      <div className="flex items-baseline justify-between gap-4 mb-1">
        <span className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: 'rgba(220,195,255,0.45)' }}>
          Total value
        </span>
        <span className="font-mono text-[0.95rem] line-through" style={{ color: 'rgba(220,195,255,0.4)' }}>
          ${TOTAL}
        </span>
      </div>

      <div className="flex items-baseline justify-between gap-4">
        <span className="font-display italic text-[1.1rem]" style={{ color: '#f8f5ff' }}>
          Today, one time
        </span>
        <span className="font-display text-[1.6rem] font-light" style={{ color: '#f8f5ff' }}>
          ${PRICE}
        </span>
      </div>

      <p className="font-mono text-[9px] tracking-[0.15em] uppercase mt-3 text-right" style={{ color: 'rgba(190,255,210,0.55)' }}>
        You save ${SAVINGS}
      </p>
    </motion.div>
  )
}
