'use client'

import Button from './Button'
import { beginCheckout } from '@/lib/checkout'

interface BeginPracticeButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// Self-contained client component so server-component pages (ones exporting
// `metadata`) can still render a working checkout button without needing to
// pass a function across the server/client boundary, which Next.js disallows.
export default function BeginPracticeButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
}: BeginPracticeButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} onClick={() => beginCheckout()}>
      {children}
    </Button>
  )
}
