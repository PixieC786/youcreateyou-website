import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import Card from '@/components/ui/Card'
import TransformationFlow from '@/components/sections/TransformationFlow'

export const metadata = {
  title: 'The Practice — You Create You',
  description:
    '21 consciousness portals across 4 phases: Remember, Return, Create, and Radiate. A complete system for lasting change.',
}

const ALL_TOOLS = [
  { phase: '01', name: 'Ancient Wisdom', desc: 'Daily transmission from 16 wisdom traditions. What was always yours to know — returned to you, one day at a time.' },
  { phase: '01', name: 'Reality Architect', desc: 'Track the thoughts, feelings, and words running your life. See the frequency you are actually broadcasting.' },
  { phase: '01', name: 'Frequency Tuner', desc: 'Map where you are. Tune to where you are going. Your inner state is the signal — this is how you read it.' },
  { phase: '01', name: 'The Witness', desc: 'Name the thought. Feel it. Question it. See the cost. Flip it. Choose who you become.' },
  { phase: '02', name: 'Fear Alchemist', desc: '6 stages from naming to gift. Every fear contains its opposite — this is how you find it.' },
  { phase: '02', name: 'Mind Body Connection', desc: 'The body holds everything you have not yet said. A guided somatic process to release what the mind cannot reach.' },
  { phase: '02', name: 'Ego Alchemy', desc: 'The ego is not the enemy — it is protecting you. This is how you finally understand what it built, and why.' },
  { phase: '02', name: 'Identity Rebirth', desc: 'Who were you before they told you who to be? A ceremony for shedding inherited identities and choosing your own.' },
  { phase: '02', name: 'The Love You Are', desc: 'A journey from root to vow. The practice of meeting yourself — fully, without conditions — from the inside out.' },
  { phase: '02', name: 'Purpose Compass', desc: 'Your purpose was never lost — just buried. Find where your deepest gifts meet what the world most needs.' },
  { phase: '02', name: 'The New Chapter', desc: 'Design what comes next. A structured vision for your next season — built from who you are becoming, not who you were.' },
  { phase: '03', name: 'The First Move', desc: 'There is something you keep preparing to begin. A 4-stage guided process to name it, see the story that has kept you waiting, find the one step the mind cannot refuse, and move — today.' },
  { phase: '03', name: 'The Deep', desc: 'The deep does not know the difference between what is imagined and what is real. This is where you go to give it new truth.' },
  { phase: '03', name: 'The Creation Field', desc: 'Feel the future into form. A 7-stage journey into the field where your inner state and outer reality meet.' },
  { phase: '03', name: 'The Inner Cinema', desc: 'Not a mental movie watched from the outside. A felt reality inhabited from within. The most powerful portal in the practice.' },
  { phase: '04', name: 'The Frequency of Thanks', desc: 'The real kind of gratitude does not feel like appreciation — it feels like the chest opening. This is how you find it.' },
  { phase: '04', name: 'Heart Coherence', desc: 'When your heart and mind finally agree, something shifts. Build that inner harmony, one session at a time.' },
  { phase: '04', name: 'Manifestation Garden', desc: 'Plant it. Water it. Tend it daily. A visual practice for holding intentions with attention over 33 days.' },
  { phase: '04', name: 'The Flowing Quality', desc: 'The flowing quality — what was taken and what returns. Reclaim the full spectrum of your nature.' },
  { phase: '04', name: 'The Directing Quality', desc: 'The directing quality — what was taken and what returns. Reclaim the full spectrum of your nature.' },
  { phase: '04', name: 'Fun Is the Frequency', desc: 'Joy is not a reward. It is a practice. A daily portal for wonder, lightness, and the frequency that changes everything.' },
]

const PHASE_NAMES: Record<string, string> = {
  '01': 'Remember',
  '02': 'Return',
  '03': 'Create',
  '04': 'Radiate',
}

export default function PracticePage() {
  const phases = ['01', '02', '03', '04']

  return (
    <main className="pt-24 pb-16 overflow-hidden">
      <div className="container-content mb-8 text-center">
        <SectionLabel text="The full practice" />
        {/* Same full-bleed breakout + scale as the Hero and Creator Field headlines. */}
        <h1
          className="font-display text-[clamp(2.75rem,6.5vw,6.5rem)] font-light italic text-[#f0ecff] mt-6 mb-6 leading-[1.08] px-2"
          style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
        >
          21 portals. One complete system.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Each portal is a standalone practice and part of a larger journey.
          Work through them in sequence, or use them as you need.
        </p>
        <BeginPracticeButton variant="primary" size="lg">
          Open the App
        </BeginPracticeButton>
      </div>

      <TransformationFlow />

      {/* Big full-bleed break — the app itself, before the portal grid */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(140,70,255,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-6">
          <div
            className="relative rounded-2xl overflow-hidden mx-auto"
            style={{
              aspectRatio: '1915 / 991',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(140,70,255,0.14)',
              border: '1px solid rgba(210,175,255,0.12)',
            }}
          >
            <Image
              src="/images/app-home-screen.png"
              alt="You Create You — app home screen"
              fill
              sizes="(max-width: 1200px) 90vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

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

    </main>
  )
}
