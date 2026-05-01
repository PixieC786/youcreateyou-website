import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space:   '#120d28',
        deep:    '#0f0b22',
        void:    '#0d0920',
        surface: 'rgba(255,255,255,0.03)',

        // Core accent — kept, used everywhere
        accent:  '#b388ff',
        // Brighter luminous accent for highlights
        'accent-bright': '#d4aaff',
        // Warm near-white lavender — for top-of-gradient moments
        aurora:  '#f0e4ff',
        gold:    '#c8a96e',
        'gold-dim': 'rgba(200,169,110,0.6)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'hero':        ['clamp(3.25rem,8vw,6.25rem)',    { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-2xl': ['clamp(2.75rem,6.5vw,5.25rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-xl':  ['clamp(2.25rem,4.5vw,3.75rem)', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'display-lg':  ['clamp(1.75rem,3vw,2.75rem)',   { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md':  ['clamp(1.375rem,2vw,2rem)',     { lineHeight: '1.25' }],
        'body-lg':     ['clamp(1rem,1.25vw,1.125rem)',  { lineHeight: '1.8'  }],
        'label':       ['10px',  { letterSpacing: '0.24em', lineHeight: '1' }],
        'label-sm':    ['9px',   { letterSpacing: '0.2em',  lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem', '22': '5.5rem', '26': '6.5rem',
        '30': '7.5rem', '34': '8.5rem', '42': '10.5rem',
        '50': '12.5rem', '72': '18rem', '88': '22rem',
      },
      maxWidth: {
        'site':    '1200px',
        'content': '1040px',
        'prose':   '660px',
        'narrow':  '520px',
        'tight':   '400px',
      },
      animation: {
        'glow-pulse': 'glowPulse 3.5s ease-in-out infinite',
        'float':      'float 8s ease-in-out infinite',
        'breathe':    'breathe 5s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
        'fade-in':    'fadeIn 0.7s ease forwards',
        'fade-up':    'fadeUp 0.7s ease forwards',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        // Warmer, more luminous pulse — feels alive
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 16px rgba(210,175,255,0.22), 0 0 36px rgba(179,136,255,0.08)',
          },
          '50%': {
            boxShadow: '0 0 32px rgba(220,180,255,0.48), 0 0 72px rgba(180,100,255,0.18)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%':      { opacity: '0.9',  transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Warmer, more luminous bloom for hero
        'hero-bloom':     'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(140,70,255,0.18) 0%, rgba(100,40,200,0.06) 55%, transparent 75%)',
        'section-bloom':  'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(130,65,220,0.08) 0%, transparent 70%)',
        'glow-purple':    'radial-gradient(ellipse at center, rgba(210,175,255,0.18) 0%, transparent 70%)',
        'glow-subtle':    'radial-gradient(ellipse at center, rgba(210,175,255,0.09) 0%, transparent 65%)',
      },
      boxShadow: {
        // Warmer — start from near-white lavender at peak
        'glow-xs':    '0 0 10px rgba(210,175,255,0.18), 0 0 24px rgba(179,136,255,0.07)',
        'glow-sm':    '0 0 16px rgba(210,175,255,0.28), 0 0 36px rgba(179,136,255,0.1)',
        'glow-md':    '0 0 24px rgba(210,175,255,0.38), 0 0 60px rgba(179,136,255,0.14)',
        'glow-lg':    '0 0 40px rgba(220,180,255,0.5),  0 0 96px rgba(180,100,255,0.2)',
        'card':       '0 1px 28px rgba(0,0,0,0.42), 0 0 0 1px rgba(210,175,255,0.09)',
        'card-hover': '0 4px 48px rgba(0,0,0,0.52), 0 0 0 1px rgba(210,175,255,0.24)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'swift':     'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
