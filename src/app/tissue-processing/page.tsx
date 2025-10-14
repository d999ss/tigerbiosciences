import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Microscope, Shield, Award, Users, Globe, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

const processingCapabilities = [
  {
    title: "Tissue Recovery",
    description: "Professional tissue recovery services with strict quality control and donor screening protocols.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Processing & Preservation",
    description: "Advanced processing techniques to maintain tissue integrity and biological activity.",
    icon: <Microscope className="size-5 stroke-1" />,
  },
  {
    title: "Quality Control",
    description: "Comprehensive quality control testing and validation for all processed tissues.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Storage & Distribution",
    description: "Secure storage and distribution network ensuring product integrity and traceability.",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Regulatory Compliance",
    description: "Full compliance with FDA regulations and industry standards for tissue processing.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Research & Development",
    description: "Continuous R&D to advance tissue processing technologies and applications.",
    icon: <Zap className="size-5 stroke-1" />,
  },
]

const tissueTypes = [
  {
    type: "Birth Tissues",
    description: "Processing of placental and umbilical cord tissues for regenerative applications.",
    applications: [
      "Wound healing",
      "Surgical applications",
      "Regenerative medicine",
      "Research applications"
    ]
  },
  {
    type: "Skin Tissues",
    description: "Advanced processing of skin tissues for wound care and surgical applications.",
    applications: [
      "Burn treatment",
      "Surgical reconstruction",
      "Chronic wound care",
      "Dermatological applications"
    ]
  },
  {
    type: "Musculoskeletal Tissues",
    description: "Processing of bone, cartilage, and tendon tissues for orthopedic applications.",
    applications: [
      "Bone grafting",
      "Cartilage repair",
      "Tendon reconstruction",
      "Sports medicine"
    ]
  }
]

const qualityMetrics = [
  { label: "Processing Accuracy", value: "99.8%" },
  { label: "Quality Control Pass Rate", value: "100%" },
  { label: "Regulatory Compliance", value: "100%" },
  { label: "Customer Satisfaction", value: "98%" }
]

const processingSteps = [
  {
    step: "Donor Screening",
    description: "Comprehensive donor screening and medical history evaluation",
    duration: "24-48 hours"
  },
  {
    step: "Tissue Recovery",
    description: "Sterile tissue recovery using advanced surgical techniques",
    duration: "2-4 hours"
  },
  {
    step: "Processing",
    description: "Controlled processing to maintain tissue integrity and function",
    duration: "24-72 hours"
  },
  {
    step: "Quality Testing",
    description: "Comprehensive quality control testing and validation",
    duration: "48-96 hours"
  },
  {
    step: "Packaging & Storage",
    description: "Sterile packaging and controlled storage conditions",
    duration: "4-8 hours"
  }
]

export default function TissueProcessing() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Professional Tissue Processing
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Tissue Processing
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences provides professional tissue processing services with the highest standards 
              of quality, safety, and regulatory compliance. Our advanced processing capabilities ensure 
              optimal tissue integrity and biological activity for clinical applications.
            </p>
          </div>
        </div>
      </Section>

      {/* Quality Metrics */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Processing Excellence</h2>
            <p className="text-muted-foreground">Our commitment to quality and precision</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
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

      {/* Processing Capabilities */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Processing Capabilities
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {processingCapabilities.map((capability, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{capability.icon}</ItemIcon>
                  {capability.title}
                </ItemTitle>
                <ItemDescription>{capability.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Tissue Types */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Tissue Types & Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive processing capabilities for various tissue types, each optimized 
              for specific clinical applications and therapeutic outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tissueTypes.map((tissue, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {tissue.type}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {tissue.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Applications:</h4>
                    {tissue.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-tiger-red flex-shrink-0" />
                        <span className="text-muted-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Processing Steps */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Processing Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures consistent quality and safety throughout 
              the entire tissue processing workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-tiger-red">{index + 1}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.step}</h3>
                <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                <Badge variant="outline" className="text-xs">{step.duration}</Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Professional Tissue Processing Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Tiger BioSciences for professional tissue processing services that meet 
            the highest standards of quality, safety, and regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Request Processing Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Learn About RegenTX
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
