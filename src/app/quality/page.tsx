import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Award, CheckCircle, FileText, Users, Globe, Zap } from "lucide-react"
import Link from "next/link"

const qualityStandards = [
  {
    title: "FDA Compliance",
    description: "Full compliance with FDA regulations and quality system requirements for medical device manufacturing.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "ISO Certification",
    description: "ISO 13485:2016 certified quality management system ensuring consistent product quality and safety.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "GMP Standards",
    description: "Good Manufacturing Practice (GMP) compliance ensuring the highest standards in production processes.",
    icon: <CheckCircle className="size-5 stroke-1" />,
  },
  {
    title: "Documentation",
    description: "Comprehensive documentation and traceability systems for complete product lifecycle management.",
    icon: <FileText className="size-5 stroke-1" />,
  },
  {
    title: "Training Programs",
    description: "Ongoing training and certification programs for all staff to maintain the highest quality standards.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Global Standards",
    description: "Compliance with international quality standards including CE marking and other regional requirements.",
    icon: <Globe className="size-5 stroke-1" />,
  },
]

const certifications = [
  {
    name: "FDA Registration",
    description: "Registered with the FDA as a medical device manufacturer",
    status: "Active",
    expiry: "2025-12-31",
    icon: <Shield className="h-8 w-8 text-tiger-red" />
  },
  {
    name: "ISO 13485:2016",
    description: "Quality management system for medical devices",
    status: "Certified",
    expiry: "2026-03-15",
    icon: <Award className="h-8 w-8 text-tiger-red" />
  },
  {
    name: "CE Marking",
    description: "European conformity marking for medical devices",
    status: "Valid",
    expiry: "2025-08-20",
    icon: <CheckCircle className="h-8 w-8 text-tiger-red" />
  },
  {
    name: "GMP Compliance",
    description: "Good Manufacturing Practice compliance certification",
    status: "Current",
    expiry: "2025-11-30",
    icon: <Zap className="h-8 w-8 text-tiger-red" />
  }
]

const qualityMetrics = [
  { label: "Quality Score", value: "99.8%" },
  { label: "FDA Inspections", value: "0 Issues" },
  { label: "Product Recalls", value: "0" },
  { label: "Customer Satisfaction", value: "98%" }
]

export default function Quality() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Quality & Compliance
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Quality Assurance
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Quality is at the heart of everything we do. Our comprehensive quality management system 
              ensures that every product meets the highest standards of safety, efficacy, and reliability 
              for healthcare providers and patients worldwide.
            </p>
          </div>
        </div>
      </Section>

      {/* Quality Metrics */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
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

      {/* Quality Standards */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Quality Standards
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {qualityStandards.map((standard, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{standard.icon}</ItemIcon>
                  {standard.title}
                </ItemTitle>
                <ItemDescription>{standard.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certifications demonstrate our commitment to maintaining the highest quality 
              and safety standards in medical device manufacturing and tissue processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      {cert.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                        {cert.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <strong>Expires:</strong> {new Date(cert.expiry).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality Process */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Our Quality Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial design to final delivery, our comprehensive quality process 
              ensures every product meets our exacting standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">1</span>
              </div>
              <h3 className="font-semibold mb-2">Design & Development</h3>
              <p className="text-sm text-muted-foreground">Quality by design principles integrated from concept to completion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">2</span>
              </div>
              <h3 className="font-semibold mb-2">Testing & Validation</h3>
              <p className="text-sm text-muted-foreground">Rigorous testing protocols ensure product safety and efficacy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">3</span>
              </div>
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">Controlled manufacturing processes with continuous monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">4</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Control</h3>
              <p className="text-sm text-muted-foreground">Final inspection and quality control before product release</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our commitment to quality ensures that healthcare providers can trust our products 
            to deliver consistent, reliable results for their patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Learn More
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
