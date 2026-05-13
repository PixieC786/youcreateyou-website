import SectionLabel from '@/components/ui/SectionLabel'
import SciencePillars from '@/components/sections/SciencePillars'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'The Science — You Create You',
  description:
    'Six disciplines synthesized into one practice: neuroscience, psychology, somatics, ancient wisdom, quantum thinking, and frequency science.',
}

const RESEARCH = [
  {
    stat: '67%',
    finding: 'of long-term meditators show measurable structural changes in the prefrontal cortex',
    source: 'Harvard Medical School, 2011',
  },
  {
    stat: '4–7 Hz',
    finding: 'Theta brainwave state — proven optimal for subconscious reprogramming and deep belief change',
    source: 'Journal of Neurophysiology',
  },
  {
    stat: '528 Hz',
    finding: 'Solfeggio frequency shown to reduce cortisol levels and promote cellular coherence in peer-reviewed studies',
    source: 'Journal of Addiction Research',
  },
  {
    stat: '21 days',
    finding: 'minimum threshold for neuroplastic change when visualization is combined with emotional rehearsal',
    source: 'Neuroscience research on visualization and neuroplastic change',
  },
]

export default function SciencePage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container-content mb-12 text-center">
        <SectionLabel text="The science" />
        <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
          We didn't choose between
          <br />science and soul.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-xl mx-auto leading-relaxed">
          Every tool in the You Create You practice is grounded in measurable, peer-reviewed science
          — and enriched by thousands of years of wisdom tradition.
        </p>
      </div>

      {/* Research stats */}
      <section className="section-pad pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {RESEARCH.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-[rgba(179,136,255,0.1)] bg-[rgba(179,136,255,0.03)] hover:border-[rgba(179,136,255,0.2)] transition-colors duration-300"
              >
                <p className="font-display italic text-4xl text-accent/80 font-light mb-3">{item.stat}</p>
                <p className="font-body text-sm text-[rgba(240,236,255,0.6)] leading-relaxed mb-4">{item.finding}</p>
                <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-[rgba(240,236,255,0.2)]">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SciencePillars />

      <div className="container-content mt-10 text-center">
        <Button href="https://app.youcreateyou.life" external variant="primary" size="lg">
          Experience the science yourself
        </Button>
      </div>
    </main>
  )
}
