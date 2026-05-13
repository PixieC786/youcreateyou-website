import Hero from '@/components/sections/Hero'
import Recognition from '@/components/sections/Recognition'
import AppShowcase from '@/components/sections/AppShowcase'
import Testimonial from '@/components/sections/Testimonial'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata = {
  title: 'You Create You — The version of you who has everything exists.',
  description:
    'Not a new you. The real one. A daily practice for rewiring your mind, reclaiming your identity, and creating the life you actually want.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Recognition />
      <AppShowcase />
      <Testimonial />
      <Pricing />
      <FinalCTA />
    </main>
  )
}
