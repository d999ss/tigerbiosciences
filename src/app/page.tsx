import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import HeroVQA from "@/components/HeroVQA"
import { WelcomeEnhanced } from "@/components/sections/welcome-enhanced"
import { FeatureEnhanced } from "@/components/sections/feature-enhanced"
import { LogosEnhanced } from "@/components/sections/logos-enhanced"
import { DivisionsEnhanced } from "@/components/sections/divisions-enhanced"
import { StatsEnhanced } from "@/components/sections/stats-enhanced"
import { TestimonialsEnhanced } from "@/components/sections/testimonials-enhanced"
import { CTAEnhanced } from "@/components/sections/cta-enhanced"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroVQA />
      <WelcomeEnhanced />
      <FeatureEnhanced 
        title="Comprehensive regenerative medicine solutions"
        description="Tiger BioSciences provides end-to-end solutions in cellular, acellular, and matrix-like products (CAMPs), from donor screening to global distribution, ensuring the highest standards of care."
      />
      <LogosEnhanced />
      <DivisionsEnhanced />
      <StatsEnhanced />
      <TestimonialsEnhanced />
      <CTAEnhanced />
      <Footer />
    </main>
  )
}