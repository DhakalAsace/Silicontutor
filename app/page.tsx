import { HeroSection } from '@/components/ui/hero-section'
import { ComparisonTable } from '@/components/ui/comparison-table'
import { EmailCollection } from '@/components/ui/email-collection'
import { InnovatorsSection } from '@/components/ui/innovators-section'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <InnovatorsSection />
      <ComparisonTable />
      <EmailCollection />
    </main>
  )
}
