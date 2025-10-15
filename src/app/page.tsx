import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import HeroVQA from "@/components/HeroVQA"
import { WelcomeEnhanced } from "@/components/sections/welcome-enhanced"
import { DivisionsEnhanced } from "@/components/sections/divisions-enhanced"
import { StatsEnhanced } from "@/components/sections/stats-enhanced"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroVQA />
      <WelcomeEnhanced />
      <DivisionsEnhanced />
      <StatsEnhanced />
      <Footer />
    </main>
  )
}