import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import TransformationFlow from '@/components/sections/TransformationFlow'

export const metadata = {
  title: 'The Practice — You Create You',
  description:
    '20 consciousness tools across 4 phases: See Clearly, Release & Discover, Install the New Reality, and Signal & Nurture Daily. A complete system for lasting change.',
}

const ALL_TOOLS = [
  { phase: '01', name: 'Ancient Wisdom Library', desc: 'Rotating wisdom from 16 traditions. Daily inspiration rooted in timeless truth.' },
  { phase: '01', name: 'Reality Architect', desc: 'Track your dominant thoughts, feelings, and words. See the frequency you\'re broadcasting.' },
  { phase: '01', name: 'Frequency Tuner', desc: 'I AM Frequency Map + Solfeggio tone player. Calibrate your vibrational frequency.' },
  { phase: '01', name: 'The Observer', desc: '4-question quantum journaling method. Dissolve belief-based suffering.' },
  { phase: '02', name: 'The Fear Alchemist', desc: '6-stage somatic process that transforms fear into its hidden evolutionary gift.' },
  { phase: '02', name: 'Mind Body Connection', desc: '5-stage guided somatic release. The body holds every pattern you want to change.' },
  { phase: '02', name: 'Ego Alchemy', desc: '7-stage process for recognizing, understanding, and befriending your ego structures.' },
  { phase: '02', name: 'Identity Rebirth', desc: '6-stage ceremony for shedding old identities and consciously choosing who you become.' },
  { phase: '02', name: 'The Love You Are', desc: '7-phase journey from root to vow. The practice of meeting yourself with unconditional love — from the inside out.' },
  { phase: '02', name: 'The Purpose Compass', desc: 'Ikigai 4-question discovery + visual diagram. Find where your gifts meet the world\'s need.' },
  { phase: '02', name: 'New Chapter Vision', desc: '5-area vision + 90-day plan + personal manifesto. Design your next season with precision.' },
  { phase: '03', name: 'Subconscious Reprogrammer', desc: 'Theta binaural beats + scene writing + breath. Rewrite your deepest programming.' },
  { phase: '03', name: 'Quantum Creation', desc: '7-phase manifestation field journey with coherence activation, visualization, and solfeggio tones.' },
  { phase: '03', name: 'Creative Visualisation', desc: '20-min guided meditation into your future self. The most powerful tool in the practice.' },
  { phase: '04', name: 'The Gratitude Portal', desc: 'Gratitude chips + miracle morning sequence + heart-pulse activation.' },
  { phase: '04', name: 'Coherence Lab', desc: 'Emotion + breath + 528/432 Hz frequencies. Measure and build heart-brain coherence.' },
  { phase: '04', name: 'Manifestation Garden', desc: 'Plant intention seeds. Track 33-day growth. Visual metaphor for real-world creation.' },
  { phase: '04', name: 'The Feminine Way', desc: '7 feminine qualities + wisdom carousel + daily affirmations. Reclaim the full spectrum of your nature.' },
  { phase: '04', name: 'The Masculine Way', desc: '7 masculine qualities + wisdom carousel + affirmations. Balance the full energetic spectrum.' },
  { phase: '04', name: 'Fun Is the Frequency', desc: 'A daily practice for joy, lightness, play, and loving presence. Transformation is also built through joy.' },
]

const PHASE_NAMES: Record<string, string> = {
  '01': 'See Clearly',
  '02': 'Release & Discover',
  '03': 'Install the New Reality',
  '04': 'Signal & Nurture Daily',
}

export default function PracticePage() {
  const phases = ['01', '02', '03', '04']

  return (
    <main className="pt-24 pb-16">
      <div className="container-content mb-8 text-center">
        <SectionLabel text="The full practice" />
        <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
          20 tools. One complete system.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Each tool is a standalone practice and part of a larger journey.
          Work through them in sequence, or use them as you need.
        </p>
        <Button href="https://app.youcreateyou.life" external variant="primary" size="lg">
          Open the App — 21 Days
        </Button>
      </div>

      <TransformationFlow />

      {phases.map(phase => (
        <section key={phase} className="pb-10">
          <div className="container-site">
            <div className="mb-8">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(179,136,255,0.45)]">Phase {phase}</span>
              <h2 className="font-display text-3xl italic font-light text-[#f0ecff] mt-2">{PHASE_NAMES[phase]}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {ALL_TOOLS.filter(t => t.phase === phase).map((tool, i) => (
                <Card
                  key={tool.name}
                  label={`Phase ${phase}`}
                  title={tool.name}
                  body={tool.desc}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Frequency Check-in feature */}
      <section className="pb-16 pt-4">
        <div className="container-site">
          <div className="mb-8">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(179,136,255,0.45)]">Home Screen</span>
            <h2 className="font-display text-3xl italic font-light text-[#f0ecff] mt-2">Daily Frequency Check-in</h2>
          </div>
          <div className="max-w-2xl">
            <div className="p-8 rounded-2xl border border-[rgba(179,136,255,0.18)] bg-[rgba(179,136,255,0.04)]">
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(179,136,255,0.55)] mb-4 block">✦ Read My Frequency</span>
              <h3 className="font-display text-2xl italic font-light text-[#f0ecff] mb-4">
                45 seconds. Finger on camera. Your nervous system tells the truth.
              </h3>
              <p className="font-body text-[rgba(240,236,255,0.55)] leading-relaxed mb-4">
                Place your finger over the back camera. In 45 seconds, the app reads your heart rate variability and maps it to a consciousness level — Courage, Willingness, Love, Peace, and more. Come back weekly and watch your frequency shift over time.
              </p>
              <p className="font-body text-[rgba(240,236,255,0.38)] text-sm leading-relaxed">
                Every reading is saved. Over weeks and months, you build an undeniable arc — proof that the work is moving something real.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
