import SectionLabel from '@/components/ui/SectionLabel'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'
import CreatorFieldExplorer from '@/components/sections/CreatorFieldExplorer'

export const metadata = {
  title: 'The Creator Field — You Create You',
  description:
    'A community built around one idea: the worst thing that can happen when you share something true is silence. No fake accounts, no algorithm, no public reply-wars — just real people, real replies, and a private constellation of everyone who ever showed up for you.',
}

const DIFFERENCES = [
  {
    mark: '✦',
    title: 'No fake accounts. Ever.',
    body: 'Every voice in the field is a real person who chose to be there. Nothing here is manufactured to look bigger than it is.',
  },
  {
    mark: '◎',
    title: 'No algorithm deciding what you see.',
    body: 'Chronological, always. Filtered by what you actually care about — never by what keeps you scrolling.',
  },
  {
    mark: '◉',
    title: 'No public reply-wars.',
    body: 'Replies are flat, one layer deep. Nobody debates you for sharing something true. There is nothing to win here.',
  },
  {
    mark: '◈',
    title: 'No hollow notifications.',
    body: 'You are told someone responded — never shown what they said, until you choose to open it, wherever you are.',
  },
  {
    mark: '♡',
    title: 'No scoreboard.',
    body: 'There is no follower count anywhere in this field. Reactions are a private act of witnessing, not a public performance.',
  },
  {
    mark: '◇',
    title: 'No one left in silence.',
    body: 'One tap sends real words back, even on the days you do not know what to say. Nobody who shares something true is left with nothing.',
  },
  {
    mark: '✷',
    title: 'No follow. No following.',
    body: 'There is no growth mechanic to game and no audience to build. You show up as yourself, exactly the same as everyone else here.',
  },
  {
    mark: '✦',
    title: 'No ads. Ever.',
    body: 'Nothing here is for sale except the practice itself. Nothing you share is data harvested for someone else’s campaign.',
  },
  {
    mark: '◎',
    title: 'No marketing games.',
    body: 'No growth hacks, no engagement bait, no manufactured urgency. Just people, showing up, for each other.',
  },
]

export default function CreatorFieldPage() {
  return (
    <main className="pt-24 pb-16">

      {/* Hero */}
      <div className="container-content mb-16 md:mb-20 text-center">
        <SectionLabel text="The Creator Field" />
        <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-light italic text-[#f0ecff] mt-6 mb-6 leading-[1.1]">
          A social space built on
          <br />
          <span className="text-gradient">one uncomfortable question.</span>
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.55)] text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          What happens the moment someone shares something true, and nobody answers? Everywhere
          else, that&apos;s just Tuesday. Here, it&apos;s the one thing the entire field is built to prevent.
        </p>
        <BeginPracticeButton variant="primary" size="lg">
          Step Into The Field
        </BeginPracticeButton>
      </div>

      {/* What makes it different */}
      <section className="section-pad relative">
        <div className="absolute top-0 inset-x-0 divider-glow" />
        <div className="container-site relative z-10">
          <div className="text-center mb-14">
            <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)]">
              What makes this different
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-light italic text-[#f0ecff] mt-4">
              Nobody else has built it this way.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIFFERENCES.map((d) => (
              <div
                key={d.title}
                className="card-base p-7"
              >
                <span className="font-display text-2xl text-[rgba(200,166,255,0.75)] block mb-4">
                  {d.mark}
                </span>
                <h3 className="font-display italic text-[1.15rem] text-[#f0ecff] mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="font-body text-[rgba(240,236,255,0.55)] text-[14px] leading-[1.75]">
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="font-display italic text-[clamp(1.4rem,3vw,2.1rem)] font-light text-[#f0ecff] leading-[1.5]">
              Not a network to grow.
              <br />
              <span className="text-gradient">A world of people becoming the same way you are.</span>
            </p>
            <p className="font-body text-[rgba(240,236,255,0.5)] text-[15px] leading-[1.8] mt-6 max-w-[54ch] mx-auto">
              Same direction. Same vision. Found without ever having to perform for it — this is
              what it looks like when people who are actually like-minded find each other,
              inside the YCY world, with nothing standing between you but the truth you shared.
            </p>
          </div>
        </div>
      </section>

      {/* The four moments, in full */}
      <section className="section-pad relative">
        <div className="absolute top-0 inset-x-0 divider-glow" />
        <div className="container-site relative z-10">
          <div className="text-center mb-14">
            <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[rgba(179,136,255,0.5)]">
              How it actually works
            </span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-light italic text-[#f0ecff] mt-4">
              Five moments. One field.
            </h2>
          </div>
          <CreatorFieldExplorer />
        </div>
      </section>

      {/* Closing */}
      <div className="container-content text-center mt-6">
        <p className="font-display italic text-[clamp(1.3rem,2.5vw,1.8rem)] font-light text-[rgba(210,175,255,0.75)] leading-[1.6] max-w-xl mx-auto mb-10">
          &ldquo;The practice is personal.
          <br />
          The effect is planetary.&rdquo;
        </p>
        <BeginPracticeButton variant="primary" size="lg">
          Step Into The Field
        </BeginPracticeButton>
      </div>

    </main>
  )
}
