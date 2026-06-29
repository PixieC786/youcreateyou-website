import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Science — You Create You',
  description:
    'Six disciplines synthesized into one practice: neuroscience, psychology, somatics, ancient wisdom, the science of the field, and frequency science.',
}

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
