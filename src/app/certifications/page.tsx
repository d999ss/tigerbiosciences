import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Shield, CheckCircle, Globe, Building2, FileText, Calendar } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    name: "FDA Registration",
    description: "Registered with the FDA as a medical device manufacturer",
    status: "Active",
    expiry: "2025-12-31",
    icon: <Shield className="h-8 w-8 text-tiger-red" />,
    category: "Regulatory"
  },
  {
    name: "ISO 13485:2016",
    description: "Quality management system for medical devices",
    status: "Certified",
    expiry: "2026-03-15",
    icon: <Award className="h-8 w-8 text-tiger-red" />,
    category: "Quality Management"
  },
  {
    name: "CE Marking",
    description: "European conformity marking for medical devices",
    status: "Valid",
    expiry: "2025-08-20",
    icon: <CheckCircle className="h-8 w-8 text-tiger-red" />,
    category: "International"
  },
  {
    name: "GMP Compliance",
    description: "Good Manufacturing Practice compliance certification",
    status: "Current",
    expiry: "2025-11-30",
    icon: <Building2 className="h-8 w-8 text-tiger-red" />,
    category: "Manufacturing"
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certification",
    status: "Certified",
    expiry: "2026-01-15",
    icon: <Award className="h-8 w-8 text-tiger-red" />,
    category: "Quality Management"
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental management system certification",
    status: "Certified",
    expiry: "2026-02-28",
    icon: <Globe className="h-8 w-8 text-tiger-red" />,
    category: "Environmental"
  }
]

const certificationCategories = [
  {
    title: "Regulatory Compliance",
    description: "FDA and international regulatory certifications ensuring full compliance with medical device regulations.",
    count: "2 Active"
  },
  {
    title: "Quality Management",
    description: "ISO certifications demonstrating our commitment to quality management and continuous improvement.",
    count: "2 Certified"
  },
  {
    title: "Manufacturing Excellence",
    description: "GMP and manufacturing certifications ensuring the highest standards in production processes.",
    count: "1 Current"
  },
  {
    title: "Environmental Responsibility",
    description: "Environmental management certifications demonstrating our commitment to sustainable practices.",
    count: "1 Certified"
  }
]

const auditResults = [
  { label: "FDA Inspections", value: "0 Issues", status: "Passed" },
  { label: "ISO Audits", value: "100%", status: "Passified" },
  { label: "GMP Audits", value: "Passed", status: "Compliant" },
  { label: "Environmental Audits", value: "Passed", status: "Compliant" }
]

export default function Certifications() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Industry Certifications
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Certifications
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences maintains comprehensive industry certifications and accreditations that demonstrate 
              our commitment to quality, safety, and regulatory compliance. Our certifications span regulatory 
              compliance, quality management, manufacturing excellence, and environmental responsibility.
            </p>
          </div>
        </div>
      </Section>

      {/* Audit Results */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Audit Results</h2>
            <p className="text-muted-foreground">Recent audit performance across all certification areas</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {auditResults.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tiger-red mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {result.label}
                </div>
                <Badge variant="secondary" className="text-xs">
                  {result.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certification Categories */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Certification Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certifications cover all aspects of our operations, ensuring comprehensive 
              compliance and quality across regulatory, manufacturing, and environmental areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      {category.title}
                    </CardTitle>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Active Certifications */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Active Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Current certifications and accreditations demonstrating our commitment to 
              quality, safety, and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-tiger-red transition-colors">
                        {cert.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {cert.category}
                        </Badge>
                        <Badge 
                          variant={cert.status === "Active" || cert.status === "Certified" ? "default" : "outline"}
                          className="text-xs"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {cert.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Expires: {new Date(cert.expiry).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Certification Process */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Certification Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach to maintaining and renewing certifications ensures 
              continuous compliance and quality excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">1</span>
              </div>
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">Comprehensive evaluation of current processes and compliance status</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">2</span>
              </div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">Implementation of required processes and quality systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">3</span>
              </div>
              <h3 className="font-semibold mb-2">Audit</h3>
              <p className="text-sm text-muted-foreground">Third-party audit and certification by accredited bodies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-tiger-red">4</span>
              </div>
              <h3 className="font-semibold mb-2">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Ongoing monitoring and continuous improvement processes</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Certification Documentation
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access detailed certification documentation, audit reports, and compliance 
            information for our quality and regulatory certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Request Documentation
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
