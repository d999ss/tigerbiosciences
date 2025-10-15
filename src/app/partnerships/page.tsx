import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Users, Award, Building2, Shield, Zap } from "lucide-react"
import PartnershipsVQA from "@/components/PartnershipsVQA"
import Link from "next/link"

const partnershipTypes = [
  {
    title: "Healthcare Provider Partnerships",
    description: "Collaborate with hospitals, clinics, and healthcare systems to deliver our advanced medical technologies.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Research Collaborations",
    description: "Partner with leading research institutions and universities to advance medical technology innovation.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Distribution Partnerships",
    description: "Expand global reach through strategic distribution partnerships in key international markets.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Technology Partnerships",
    description: "Collaborate with technology companies to integrate cutting-edge solutions into our products.",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Manufacturing Partnerships",
    description: "Work with specialized manufacturers to ensure the highest quality and efficiency in production.",
    icon: <Building2 className="size-5 stroke-1" />,
  },
  {
    title: "Regulatory Partnerships",
    description: "Partner with regulatory experts to navigate complex approval processes and ensure compliance.",
    icon: <Shield className="size-5 stroke-1" />,
  },
]


export default function Partnerships() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Strategic Partnerships
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Partnerships
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              We believe in the power of collaboration. Our strategic partnerships with healthcare providers, 
              research institutions, and technology companies enable us to deliver innovative solutions 
              that advance medical technology and improve patient outcomes.
            </p>
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#partnership-types">
                  Explore Opportunities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnership Types */}
      <Section id="partnership-types">
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Partnership Opportunities
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {partnershipTypes.map((type, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{type.icon}</ItemIcon>
                  {type.title}
                </ItemTitle>
                <ItemDescription>{type.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Current Partners */}
      <Section className="bg-muted/30">
        <PartnershipsVQA />
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Ready to Partner?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in advancing medical technology. Whether you&apos;re a healthcare provider, 
            research institution, or technology company, we&apos;d love to explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Start a Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Learn About Our Companies
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
