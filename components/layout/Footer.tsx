'use client'

import Link from 'next/link'

const EXPLORE_LINKS = [
  { href: 'https://zirkaray.com', label: 'The Book' },
  { href: '/about',               label: 'About' },
  { href: '/start',               label: 'Begin' },
]

const MORE_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms of Service' },
  { href: 'mailto:hello@youcreateyou.life', label: 'Contact' },
]

const SOCIALS = [
  {
    href: 'https://www.instagram.com/youcreateyou_/',
    label: 'Follow @youcreateyou_ on Instagram',
    handle: '@youcreateyou_',
  },
  {
    href: 'https://www.instagram.com/zirkaray/',
    label: 'Follow @zirkaray on Instagram',
    handle: '@zirkaray',
  },
]

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(179,136,255,0.07)]" style={{ background: '#120d28' }}>
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[rgba(179,136,255,0.22)] to-transparent" />

      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-14">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-[1.6rem] italic font-light text-[#f0ecff] hover:text-[rgba(200,166,255,0.9)] transition-colors duration-300 block mb-4"
            >
              You Create You
            </Link>
            <p className="font-body text-[13px] text-[rgba(240,236,255,0.4)] leading-[1.85] max-w-[30ch] mb-6">
              A 365-day practice rooted in ancient wisdom, modern science, and one
              understanding: your inner world meets the outer one.
            </p>
            <div className="flex items-center gap-5">
              {SOCIALS.map(({ href, label, handle }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(179,136,255,0.16)] text-[rgba(179,136,255,0.55)] group-hover:text-[rgba(200,166,255,0.9)] group-hover:border-[rgba(179,136,255,0.4)] transition-colors duration-200">
                    <InstagramIcon />
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.05em] text-[rgba(240,236,255,0.35)] group-hover:text-[rgba(240,236,255,0.65)] transition-colors duration-200">
                    {handle}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)] mb-5">
              Explore
            </p>
            <nav className="flex flex-col gap-3">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-[13.5px] text-[rgba(240,236,255,0.5)] hover:text-[rgba(240,236,255,0.85)] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* More column */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)] mb-5">
              More
            </p>
            <nav className="flex flex-col gap-3">
              {MORE_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="font-body text-[13.5px] text-[rgba(240,236,255,0.5)] hover:text-[rgba(240,236,255,0.85)] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Direct line column */}
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)] mb-5">
              The Direct Line
            </p>
            <a
              href="mailto:hello@youcreateyou.life"
              className="font-body text-[14px] text-[rgba(240,236,255,0.7)] hover:text-[rgba(200,166,255,0.9)] transition-colors duration-200 underline underline-offset-4 decoration-[rgba(179,136,255,0.25)]"
            >
              hello@youcreateyou.life
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(179,136,255,0.06)] pt-8 flex items-center justify-center">
          <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-[rgba(240,236,255,0.2)]">
            You Create You &copy; {new Date().getFullYear()} — All realities reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
