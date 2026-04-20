import SectionLabel from '@/components/ui/SectionLabel'
import JournalPreview from '@/components/sections/JournalPreview'
import Button from '@/components/ui/Button'

export const metadata = {
  title: 'The Journal — You Create You',
  description:
    'A consciousness navigation system, not a diary. Daily quantum prompts aligned to your 18 practice tools — access the answers already inside you.',
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
          This isn't journaling as you know it. Every prompt is calibrated to your phase,
          designed to access the subconscious, and aligned with your active practice tools.
        </p>
        <Button href="https://app.youcreateyou.life" external variant="primary" size="lg">
          Open My Journal
        </Button>
      </div>

      <JournalPreview />
    </main>
  )
}
