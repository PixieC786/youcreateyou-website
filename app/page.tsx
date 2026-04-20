import Hero from '@/components/sections/Hero'
import Recognition from '@/components/sections/Recognition'
import Pivot from '@/components/sections/Pivot'
import SciencePillars from '@/components/sections/SciencePillars'
import AppShowcase from '@/components/sections/AppShowcase'
import Testimonial from '@/components/sections/Testimonial'
import JournalPreview from '@/components/sections/JournalPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata = {
  title: 'You Create You — Consciousness Tools for Real Transformation',
  description:
    'Science-backed, soul-aligned daily practice for rewiring your mind, reclaiming your identity, and creating the life you actually want. 20 tools. Free to begin.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Recognition />
      <Pivot />
      <SciencePillars />
      <AppShowcase />
      <Testimonial />
      <JournalPreview />
      <FinalCTA />
    </main>
  )
}
