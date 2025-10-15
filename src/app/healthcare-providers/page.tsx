import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Shield, Award, Globe, Zap, Heart } from "lucide-react"
import Link from "next/link"

const providerSolutions = [
  {
    title: "Wound Care Solutions",
    description: "Advanced CAMP products for chronic and acute wound management.",
    icon: <Heart className="size-5 stroke-1" />,
  },
  {
    title: "Aesthetic Treatments",
    description: "Cutting-edge aesthetic procedures for enhanced patient outcomes.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Surgical Support",
    description: "Tissue-based products for surgical applications and reconstruction.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Clinical Training",
    description: "Comprehensive training programs for proper product application.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Regulatory Support",
    description: "Full regulatory compliance and documentation support.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Research Collaboration",
    description: "Opportunities for clinical research and product development.",
    icon: <Zap className="size-5 stroke-1" />,
  },
]

const providerBenefits = [
  {
    title: "Improved Patient Outcomes",
    description: "Enhanced healing times and better patient satisfaction with our advanced products.",
    metrics: "95% Patient Satisfaction"
  },
  {
    title: "Clinical Support",
    description: "24/7 clinical support and guidance from our expert medical team.",
    metrics: "24/7 Support Available"
  },
  {
    title: "Training Programs",
    description: "Comprehensive training programs to ensure optimal product application.",
    metrics: "100% Training Completion"
  }
]

export default function HealthcareProviders() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Healthcare Solutions
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Healthcare Providers
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences provides comprehensive solutions for healthcare providers, offering 
              advanced medical technologies, clinical support, and training programs to enhance 
              patient care and improve clinical outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* Provider Solutions */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Solutions for Healthcare Providers
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {providerSolutions.map((solution, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{solution.icon}</ItemIcon>
                  {solution.title}
                </ItemTitle>
                <ItemDescription>{solution.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Provider Benefits */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Why Choose Tiger BioSciences?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with Tiger BioSciences for advanced medical technologies and comprehensive support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providerBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {benefit.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-tiger-red">
                    {benefit.metrics}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Partner with Tiger BioSciences
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading healthcare providers who trust Tiger BioSciences for advanced medical technologies and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
