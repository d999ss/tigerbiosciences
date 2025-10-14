import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Microscope, Users, Award, Globe, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const researchAreas = [
  {
    title: "Regenerative Medicine",
    description: "Advanced research in cellular and tissue regeneration for therapeutic applications.",
    icon: <Microscope className="size-5 stroke-1" />,
  },
  {
    title: "Wound Healing",
    description: "Innovative approaches to accelerate wound healing and improve patient outcomes.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Aesthetic Medicine",
    description: "Cutting-edge research in aesthetic treatments and cosmetic applications.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Tissue Engineering",
    description: "Development of engineered tissues and biomaterials for clinical applications.",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Biomaterial Science",
    description: "Research in advanced biomaterials and their applications in medicine.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Clinical Research",
    description: "Comprehensive clinical research programs to validate new technologies.",
    icon: <Users className="size-5 stroke-1" />,
  },
]

const researchPrograms = [
  {
    title: "Cellular Therapy Research",
    description: "Investigating the therapeutic potential of cellular products for various medical conditions.",
    focus: "Cellular Products",
    status: "Active"
  },
  {
    title: "Matrix-Based Therapies",
    description: "Developing advanced matrix-based products for tissue regeneration and repair.",
    focus: "Matrix Products",
    status: "Active"
  },
  {
    title: "Growth Factor Research",
    description: "Research into growth factors and their role in tissue healing and regeneration.",
    focus: "Growth Factors",
    status: "Active"
  }
]

const researchMetrics = [
  { label: "Active Research Projects", value: "15+" },
  { label: "Published Studies", value: "25+" },
  { label: "Research Partnerships", value: "12+" },
  { label: "Patent Applications", value: "8+" }
]

const collaborationTypes = [
  {
    type: "Academic Partnerships",
    description: "Collaborations with leading universities and research institutions worldwide.",
    benefits: [
      "Access to cutting-edge research",
      "Shared expertise and resources",
      "Joint publication opportunities",
      "Student training programs"
    ]
  },
  {
    type: "Clinical Collaborations",
    description: "Partnerships with healthcare providers for clinical research and validation.",
    benefits: [
      "Real-world clinical data",
      "Patient outcome studies",
      "Clinical validation",
      "Healthcare provider insights"
    ]
  },
  {
    type: "Industry Partnerships",
    description: "Strategic partnerships with technology and pharmaceutical companies.",
    benefits: [
      "Technology transfer",
      "Market access",
      "Regulatory expertise",
      "Commercial development"
    ]
  }
]

export default function ResearchDevelopment() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Innovation & Research
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Research & Development
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences is at the forefront of medical technology innovation through our comprehensive 
              research and development programs. We invest heavily in cutting-edge research to advance 
              regenerative medicine, wound healing, and aesthetic treatments.
            </p>
          </div>
        </div>
      </Section>

      {/* Research Metrics */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Research Excellence</h2>
            <p className="text-muted-foreground">Our commitment to advancing medical technology</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tiger-red mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Areas */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Research Areas
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {researchAreas.map((area, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{area.icon}</ItemIcon>
                  {area.title}
                </ItemTitle>
                <ItemDescription>{area.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Programs */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Active Research Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our ongoing research programs focus on advancing medical technology and 
              developing innovative solutions for healthcare challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      {program.title}
                    </CardTitle>
                    <Badge variant="default">{program.status}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{program.focus}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Collaboration Types */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Research Collaborations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We collaborate with leading institutions and organizations to advance medical research 
              and bring innovative solutions to market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationTypes.map((collaboration, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {collaboration.type}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {collaboration.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Benefits:</h4>
                    {collaboration.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-tiger-red flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
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
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Partner in Research
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in advancing medical technology through collaborative research. 
            We welcome partnerships with academic institutions, healthcare providers, and industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Explore Research Partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/partnerships">
                View Partnership Opportunities
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
