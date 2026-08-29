'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  title: string
  body: string
  icon?: React.ReactNode
  label?: string
  delay?: number
  className?: string
}

export default function Card({ title, body, icon, label, delay = 0, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-56px' }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className={clsx(
        'group relative rounded-2xl p-7 overflow-hidden',
        'bg-[rgba(255,255,255,0.025)]',
        'border border-[rgba(179,136,255,0.09)]',
        'shadow-[0_1px_28px_rgba(0,0,0,0.45),0_0_0_1px_rgba(179,136,255,0.05)_inset]',
        'transition-all duration-400 ease-in-out',
        'hover:border-[rgba(179,136,255,0.22)]',
        'hover:bg-[rgba(179,136,255,0.04)]',
        'hover:shadow-[0_8px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(179,136,255,0.1)_inset]',
        className,
      )}
    >
      {/* Corner glow on hover */}
      <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(179,136,255,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {icon && (
        <div className="mb-5 w-10 h-10 text-[rgba(179,136,255,0.65)] group-hover:text-[rgba(200,166,255,0.85)] transition-colors duration-300 [&>svg]:w-full [&>svg]:h-full">
          {icon}
        </div>
      )}

      {label && (
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-[rgba(179,136,255,0.45)] mb-3 group-hover:text-[rgba(179,136,255,0.65)] transition-colors duration-300">
          {label}
        </p>
      )}

      <h3 className="font-display text-[1.3rem] italic font-light text-[#f0ecff] mb-3.5 leading-snug">
        {title}
      </h3>

      <p className="font-body text-[14px] text-[rgba(240,236,255,0.48)] leading-relaxed group-hover:text-[rgba(240,236,255,0.62)] transition-colors duration-300">
        {body}
      </p>
    </motion.div>
  )
}
