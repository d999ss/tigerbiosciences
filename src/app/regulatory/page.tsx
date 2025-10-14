import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, FileText, CheckCircle, Award, Globe, Users, Building2 } from "lucide-react"
import Link from "next/link"

const regulatoryStandards = [
  {
    title: "FDA Registration",
    description: "Registered with the FDA as a medical device manufacturer with full compliance to 21 CFR Part 820 Quality System Regulation.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "ISO 13485:2016",
    description: "Quality management system for medical devices ensuring consistent product quality and safety standards.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "CE Marking",
    description: "European conformity marking for medical devices meeting EU regulatory requirements.",
    icon: <CheckCircle className="size-5 stroke-1" />,
  },
  {
    title: "GMP Compliance",
    description: "Good Manufacturing Practice compliance ensuring the highest standards in production processes.",
    icon: <Building2 className="size-5 stroke-1" />,
  },
  {
    title: "Documentation",
    description: "Comprehensive documentation and traceability systems for complete product lifecycle management.",
    icon: <FileText className="size-5 stroke-1" />,
  },
  {
    title: "Global Standards",
    description: "Compliance with international quality standards including regional requirements worldwide.",
    icon: <Globe className="size-5 stroke-1" />,
  },
]

const regulatoryProcesses = [
  {
    title: "Pre-Market Approval",
    description: "Comprehensive pre-market evaluation process ensuring safety and efficacy before product launch.",
    steps: ["Design Review", "Risk Assessment", "Clinical Evaluation", "Regulatory Submission", "FDA Review"]
  },
  {
    title: "Post-Market Surveillance",
    description: "Ongoing monitoring and reporting system to ensure continued safety and effectiveness.",
    steps: ["Adverse Event Reporting", "Quality Monitoring", "Customer Feedback", "Regulatory Updates", "Compliance Audits"]
  },
  {
    title: "Change Control",
    description: "Structured process for managing product and process changes while maintaining compliance.",
    steps: ["Change Request", "Impact Assessment", "Regulatory Review", "Implementation", "Documentation Update"]
  }
]

const complianceMetrics = [
  { label: "FDA Inspections", value: "0 Issues" },
  { label: "Regulatory Submissions", value: "100%" },
  { label: "Compliance Score", value: "99.8%" },
  { label: "Audit Results", value: "Passed" }
]

export default function Regulatory() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Regulatory Compliance
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Regulatory Information
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences maintains the highest standards of regulatory compliance across all our medical device 
              and tissue processing operations. Our comprehensive regulatory framework ensures patient safety, 
              product quality, and full compliance with FDA and international standards.
            </p>
          </div>
        </div>
      </Section>

      {/* Compliance Metrics */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceMetrics.map((metric, index) => (
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

      {/* Regulatory Standards */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Regulatory Standards
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {regulatoryStandards.map((standard, index) => (
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

      {/* Regulatory Processes */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Regulatory Processes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our structured regulatory processes ensure comprehensive compliance throughout 
              the entire product lifecycle from development to post-market surveillance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regulatoryProcesses.map((process, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {process.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {process.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-6 h-6 rounded-full bg-tiger-red/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-tiger-red">{stepIndex + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Regulatory Resources */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Regulatory Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our regulatory documentation, compliance reports, and regulatory guidance materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-tiger-red/10">
                    <FileText className="h-6 w-6 text-tiger-red" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      FDA Comment Letter
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      PDF Document
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Tiger BioSciences&apos; comments on CMS&apos;s proposed Physician Fee Schedule rules 
                  and regulatory impact on medical device manufacturers.
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                  <Link href="https://tigerbiosciences.com/wp-content/uploads/2025/09/Tiger_BioSciences_MPFS_and_OPPS_Comment_Letter_v2.pdf" target="_blank">
                    Download PDF
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-tiger-red/10">
                    <Shield className="h-6 w-6 text-tiger-red" />
                  </div>
                  <div>
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      Compliance Reports
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      Annual Reports
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Annual compliance reports detailing our regulatory performance, 
                  audit results, and continuous improvement initiatives.
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                  <Link href="/contact">
                    Request Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Regulatory Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our regulatory team is available to answer questions about compliance, 
            regulatory requirements, and our quality assurance processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Contact Regulatory Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/quality">
                View Quality Standards
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
