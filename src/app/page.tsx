import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroEnhanced } from "@/components/sections/hero-enhanced"
import { WelcomeEnhanced } from "@/components/sections/welcome-enhanced"
import { DivisionsEnhanced } from "@/components/sections/divisions-enhanced"
import { StatsEnhanced } from "@/components/sections/stats-enhanced"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroEnhanced />
      <StatsEnhanced />
      <WelcomeEnhanced />
      <DivisionsEnhanced />
      <Footer />
    </main>
  )
}