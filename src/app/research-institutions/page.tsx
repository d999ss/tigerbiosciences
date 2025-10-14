import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Microscope, Users, Award, Globe, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const researchPartnerships = [
  {
    title: "Joint Research Projects",
    description: "Collaborative research initiatives advancing medical technology and regenerative medicine.",
    icon: <Microscope className="size-5 stroke-1" />,
  },
  {
    title: "Student Training Programs",
    description: "Comprehensive training programs for students and researchers in medical technology.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Technology Transfer",
    description: "Facilitating the transfer of research innovations to clinical applications.",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Publication Collaboration",
    description: "Joint publications and research dissemination in peer-reviewed journals.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Grant Opportunities",
    description: "Collaborative grant applications and funding opportunities for research projects.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Clinical Validation",
    description: "Clinical research and validation studies for new medical technologies.",
    icon: <Shield className="size-5 stroke-1" />,
  },
]

const collaborationBenefits = [
  {
    title: "Access to Advanced Technology",
    description: "Access to cutting-edge medical technologies and research facilities.",
    features: [
      "State-of-the-art equipment",
      "Advanced processing capabilities",
      "Research-grade materials",
      "Technical expertise"
    ]
  },
  {
    title: "Research Funding",
    description: "Collaborative funding opportunities for innovative research projects.",
    features: [
      "Joint grant applications",
      "Research funding support",
      "Equipment access",
      "Travel and conference support"
    ]
  },
  {
    title: "Publication Opportunities",
    description: "Opportunities for joint publications and research dissemination.",
    features: [
      "Peer-reviewed publications",
      "Conference presentations",
      "Research networking",
      "Academic recognition"
    ]
  }
]

export default function ResearchInstitutions() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Academic Partnerships
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Research Institutions
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences partners with leading research institutions and universities to advance 
              medical technology through collaborative research, student training, and technology transfer. 
              We support academic excellence and innovation in regenerative medicine.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Partnerships */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Research Partnerships
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {researchPartnerships.map((partnership, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{partnership.icon}</ItemIcon>
                  {partnership.title}
                </ItemTitle>
                <ItemDescription>{partnership.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Collaboration Benefits */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our research partnerships provide comprehensive benefits for academic institutions, 
              researchers, and students in advancing medical technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationBenefits.map((benefit, index) => (
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
            Join leading research institutions in advancing medical technology through collaborative research and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Explore Research Partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/research-development">
                View Research Programs
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
