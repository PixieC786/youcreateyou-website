import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Transmission — You Create You',
  description:
    'A Gift to Humanity, by Zirka Ray. Twenty-nine Transmissions, five phases, and the app that turns each one into a daily practice.',
  openGraph: {
    title: 'The Transmission — A Gift to Humanity',
    description:
      'Twenty-nine Transmissions, five phases, and the app that turns each one into a daily practice.',
    images: [
      {
        url: 'https://youcreateyou.life/images/the-transmission-cover.webp',
        width: 900,
        height: 1613,
        alt: 'The Transmission — A Gift to Humanity, by Zirka Ray',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Transmission — A Gift to Humanity',
    description:
      'Twenty-nine Transmissions, five phases, and the app that turns each one into a daily practice.',
    images: ['https://youcreateyou.life/images/the-transmission-cover.webp'],
  },
}

export default function TheTransmissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
