import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, Users, Award, Globe, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const partnershipOpportunities = [
  {
    title: "Technology Integration",
    description: "Integrate Tiger BioSciences technologies into existing medical device platforms.",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Manufacturing Partnerships",
    description: "Collaborative manufacturing and production capabilities for medical devices.",
    icon: <Building2 className="size-5 stroke-1" />,
  },
  {
    title: "Regulatory Support",
    description: "Comprehensive regulatory support and compliance expertise for device approval.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Research Collaboration",
    description: "Joint research and development initiatives for innovative medical devices.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Market Access",
    description: "Access to global markets and distribution networks for medical devices.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Clinical Validation",
    description: "Clinical research and validation support for new medical device technologies.",
    icon: <Users className="size-5 stroke-1" />,
  },
]

const partnershipBenefits = [
  {
    title: "Regulatory Expertise",
    description: "Access to comprehensive regulatory expertise and FDA compliance support.",
    features: [
      "FDA submission support",
      "Regulatory strategy development",
      "Compliance monitoring",
      "Quality system implementation"
    ]
  },
  {
    title: "Manufacturing Excellence",
    description: "State-of-the-art manufacturing capabilities and quality assurance.",
    features: [
      "GMP-compliant facilities",
      "Quality control systems",
      "Scalable production",
      "Supply chain management"
    ]
  },
  {
    title: "Market Access",
    description: "Global market access and distribution network for medical devices.",
    features: [
      "International distribution",
      "Market entry support",
      "Sales and marketing",
      "Customer support"
    ]
  }
]

export default function MedicalDeviceCompanies() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Industry Partnerships
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Medical Device Companies
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences partners with medical device companies to advance medical technology 
              through collaborative development, manufacturing partnerships, and regulatory support. 
              We provide comprehensive solutions for device development and market access.
            </p>
          </div>
        </div>
      </Section>

      {/* Partnership Opportunities */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Partnership Opportunities
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {partnershipOpportunities.map((opportunity, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{opportunity.icon}</ItemIcon>
                  {opportunity.title}
                </ItemTitle>
                <ItemDescription>{opportunity.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our partnerships provide comprehensive benefits for medical device companies, 
              from regulatory support to global market access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {benefit.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-tiger-red flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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
            Join leading medical device companies in advancing medical technology through strategic partnerships and collaborative development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Explore Partnership Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/partnerships">
                View All Partnerships
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
