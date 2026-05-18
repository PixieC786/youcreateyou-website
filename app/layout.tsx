import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, DM_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import StarField from '@/components/ui/StarField'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'You Create You — The version of you who has everything exists.',
    template: '%s | You Create You',
  },
  description:
    'Not a new you. The real one. A daily practice for rewiring your mind, reclaiming your identity, and creating the life you actually want.',
  keywords: [
    'conscious creation',
    'identity transformation',
    'subconscious reprogramming',
    'manifestation',
    'neuroscience',
    'daily practice',
    'self concept',
    'consciousness tools',
    'inner transformation',
  ],
  authors: [{ name: 'You Create You' }],
  creator: 'You Create You',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://youcreateyou.life',
    siteName: 'You Create You',
    title: 'You Create You — The version of you who has everything exists.',
    description:
      'Not a new you. The real one. A daily practice for rewiring your mind, reclaiming your identity, and creating the life you actually want.',
    images: [
      {
        url: 'https://youcreateyou.life/icon-512.png',
        width: 512,
        height: 512,
        alt: 'You Create You',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'You Create You — The version of you who has everything exists.',
    description: 'Not a new you. The real one. A daily practice for rewiring your mind, reclaiming your identity, and creating the life you actually want.',
    images: ['https://youcreateyou.life/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  metadataBase: new URL('https://youcreateyou.life'),
  icons: {
    icon: [
      { url: '/icon-512.png',   sizes: 'any',     type: 'image/png' },
      { url: '/icon-192.png',   sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png',   sizes: '512x512', type: 'image/png' },
      { url: '/icon.svg',       type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#120d28',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="bg-space text-[#f0ecff] font-body antialiased" suppressHydrationWarning>
        {/* Global star field — fixed, behind everything */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden>
          <StarField density={1.3} connectDistance={115} showLines={true} />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
