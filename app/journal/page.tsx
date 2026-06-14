import SectionLabel from '@/components/ui/SectionLabel'
import JournalPreview from '@/components/sections/JournalPreview'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'The Journal — You Create You',
  description:
    'A consciousness navigation system, not a diary. Daily quantum prompts aligned to your 20 consciousness tools — access the answers already inside you.',
}

export default function JournalPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container-content mb-12 text-center">
        <SectionLabel text="The journal" />
        <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
          The most powerful questions
          <br />are already waiting for you.
        </h1>
        <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-lg mx-auto leading-relaxed mb-10">
          This is not journaling as you know it. Every question is chosen to meet you
          exactly where you are — and to reach the places ordinary writing never does.
        </p>
        <Button href="/start" variant="primary" size="lg">
          Open My Journal
        </Button>
      </div>

      <JournalPreview />
    </main>
  )
}
