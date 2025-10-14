import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Divisions } from "@/components/sections/divisions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Divisions />
      <Footer />
    </main>
  )
}