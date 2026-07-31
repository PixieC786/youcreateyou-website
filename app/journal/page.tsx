import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import JournalPreview from '@/components/sections/JournalPreview'
import BeginPracticeButton from '@/components/ui/BeginPracticeButton'

export const metadata = {
  title: 'The Journal — You Create You',
  description:
    'A consciousness navigation system, not a diary. Daily prompts from the path, aligned to all 21 portals — access the answers already inside you.',
}

export default function JournalPage() {
  return (
    <main className="pt-28 pb-16">
      <div className="container-content grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12">

        {/* Cover */}
        <div className="flex justify-center md:justify-start order-1">
          <div
            className="relative w-full max-w-[320px] rounded-lg overflow-hidden"
            style={{
              aspectRatio: '427 / 609',
              boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 60px rgba(140,70,255,0.12)',
            }}
          >
            <Image
              src="/images/the-journal-cover.png"
              alt="You Create You — The Journal, by Zirka Ray"
              fill
              sizes="(max-width: 768px) 90vw, 320px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Intro */}
        <div className="order-2 text-center md:text-left">
          <SectionLabel text="The journal" align="left" className="justify-center md:justify-start" />
          <h1 className="font-display text-5xl sm:text-6xl font-light italic text-[#f0ecff] mt-6 mb-6 leading-snug">
            The most powerful questions
            <br />are already waiting for you.
          </h1>
          <p className="font-body text-[rgba(240,236,255,0.5)] text-lg max-w-lg mx-auto md:mx-0 leading-relaxed mb-10">
            This is not journaling as you know it. Every question is chosen to meet you
            exactly where you are — and to reach the places ordinary writing never does.
          </p>
          <BeginPracticeButton variant="primary" size="lg">
            Open My Journal
          </BeginPracticeButton>
        </div>

      </div>

      <JournalPreview />
    </main>
  )
}
