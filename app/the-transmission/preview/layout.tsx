import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Read Transmission One, Free — You Create You',
  description:
    '"The Mirror" — the opening Transmission from The Transmission, by Zirka Ray. Enter your email and read it in full, free.',
  openGraph: {
    title: 'Transmission One, Free — The Transmission',
    description: '"The Mirror" — the opening Transmission from The Transmission, by Zirka Ray.',
    images: [
      {
        url: 'https://youcreateyou.life/images/the-transmission-cover.webp',
        width: 900,
        height: 1613,
        alt: 'The Transmission — A Gift to Humanity, by Zirka Ray',
      },
    ],
  },
}

export default function TransmissionPreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
