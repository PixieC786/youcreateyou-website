import SectionLabel from '@/components/ui/SectionLabel'
import EmailCapture from '@/components/ui/EmailCapture'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'Begin — You Create You',
  description:
    'Start your You Create You practice today. 21 days free — all 20 consciousness tools, a 9-step daily morning practice, and your personal journal.',
}

const STEPS = [
  {
    number: '01',
    title: 'Start your 21-day free trial',
    desc: 'Enter your email. No credit card needed. Your full practice unlocks immediately.',
  },
  {
    number: '02',
    title: 'Begin your morning practice',
    desc: 'A 9-step sequence: breathe, read, create your day, gratitude, affirm out loud, meditate, embody, seal, complete. One hour that reshapes who you are.',
  },
  {
    number: '03',
    title: 'Go deeper with 20 tools',
    desc: 'Explore consciousness tools across 4 phases. Each one deepens the last. Most users feel a meaningful shift within 7 days.',
  },
  {
    number: '04',
    title: 'Track your transformation',
    desc: 'Your journal, your coherence score, your 33-day growth — all visible, measurable, yours.',
  },
]

export default function BeginPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container-content mb-12 text-center">
        <SectionLabel text="Begin today" />
        <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
          The practice that
          <br />actually changes things.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-lg mx-auto leading-relaxed mb-12">
          21 days free. No credit card. One hour a day.
          20 tools + a 9-step morning practice ready immediately.
        </p>
        <div className="max-w-md mx-auto">
          <EmailCapture
            placeholder="Your email address"
            ctaText="Start My 21-Day Free Trial"
            size="lg"
          />
        </div>
      </div>

      {/* Steps */}
      <section className="section-pad pt-0">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl border border-[rgba(179,136,255,0.1)] bg-[rgba(179,136,255,0.03)]"
              >
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-[rgba(179,136,255,0.4)]">{step.number}</span>
                <h3 className="font-display italic text-xl text-[#f0ecff] font-light mt-3 mb-3">{step.title}</h3>
                <p className="font-body text-sm text-[rgba(240,236,255,0.5)] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App link */}
      <div className="container-content text-center mt-8">
        <p className="font-body text-sm text-[rgba(240,236,255,0.3)] mb-5">
          Already have an account?
        </p>
        <Button href="https://app.youcreateyou.life" external variant="secondary" size="md">
          Open the App
        </Button>
      </div>
    </main>
  )
}
