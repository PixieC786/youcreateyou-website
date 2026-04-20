'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  pulse?: boolean
  className?: string
}

const SIZE: Record<string, string> = {
  sm:  'px-6 py-2.5 text-[10px] tracking-[0.22em]',
  md:  'px-8 py-3.5 text-[10px] tracking-[0.22em]',
  lg:  'px-10 py-4  text-[11px] tracking-[0.22em]',
}

const VARIANT: Record<string, string> = {
  primary: [
    'bg-transparent',
    'border border-[rgba(179,136,255,0.35)]',
    'text-[rgba(240,236,255,0.88)]',
    'hover:border-[rgba(179,136,255,0.65)]',
    'hover:text-white',
    'hover:shadow-[0_0_22px_rgba(179,136,255,0.2),0_0_48px_rgba(179,136,255,0.08)]',
  ].join(' '),
  secondary: [
    'bg-[rgba(179,136,255,0.1)]',
    'border border-[rgba(179,136,255,0.22)]',
    'text-[rgba(200,166,255,0.9)]',
    'hover:bg-[rgba(179,136,255,0.18)]',
    'hover:border-[rgba(179,136,255,0.42)]',
    'hover:text-accent-bright',
    'hover:shadow-[0_0_18px_rgba(179,136,255,0.15)]',
  ].join(' '),
  ghost: [
    'bg-transparent border border-transparent',
    'text-[rgba(240,236,255,0.45)]',
    'hover:text-[rgba(240,236,255,0.78)]',
    'underline-offset-4 hover:underline decoration-[rgba(179,136,255,0.3)]',
  ].join(' '),
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  onClick,
  type = 'button',
  disabled = false,
  pulse = false,
  className,
}: ButtonProps) {
  const base = clsx(
    'inline-flex items-center justify-center gap-2.5',
    'rounded-full',
    'font-mono uppercase font-normal',
    'transition-all duration-300 ease-in-out',
    'cursor-pointer select-none',
    'relative overflow-hidden',
    disabled && 'opacity-25 pointer-events-none',
    pulse && 'animate-glow-pulse',
    SIZE[size],
    VARIANT[variant],
    className,
  )

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={base}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.975 }}
          onClick={onClick}
          suppressHydrationWarning
        >
          {children}
        </motion.a>
      )
    }
    return (
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.975 }} className="inline-flex">
        <Link href={href} className={base} onClick={onClick} suppressHydrationWarning>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      className={base}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.975 }}
      suppressHydrationWarning
    >
      {children}
    </motion.button>
  )
}
