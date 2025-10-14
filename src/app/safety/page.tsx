import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Users, FileText, Globe, Building2 } from "lucide-react"
import Link from "next/link"

const safetyStandards = [
  {
    title: "OSHA Compliance",
    description: "Full compliance with Occupational Safety and Health Administration standards for workplace safety.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Biological Safety",
    description: "Comprehensive protocols for handling biological materials and tissue processing safety.",
    icon: <AlertTriangle className="size-5 stroke-1" />,
  },
  {
    title: "Chemical Safety",
    description: "Strict protocols for chemical handling, storage, and disposal in manufacturing processes.",
    icon: <CheckCircle className="size-5 stroke-1" />,
  },
  {
    title: "Equipment Safety",
    description: "Regular maintenance and safety inspections of all manufacturing and processing equipment.",
    icon: <Building2 className="size-5 stroke-1" />,
  },
  {
    title: "Training Programs",
    description: "Comprehensive safety training for all employees with regular updates and certifications.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Documentation",
    description: "Detailed safety protocols, incident reporting, and continuous improvement documentation.",
    icon: <FileText className="size-5 stroke-1" />,
  },
]

const safetyMetrics = [
  { label: "Safety Incidents", value: "0", period: "2024" },
  { label: "Training Completion", value: "100%", period: "All Staff" },
  { label: "Safety Audits", value: "Passed", period: "All Areas" },
  { label: "Compliance Score", value: "99.9%", period: "OSHA Standards" }
]

const safetyProtocols = [
  {
    title: "Personal Protective Equipment (PPE)",
    description: "Comprehensive PPE requirements and protocols for all work environments.",
    requirements: [
      "Lab coats and protective clothing",
      "Safety glasses and face shields", 
      "Gloves for chemical and biological handling",
      "Respiratory protection where required",
      "Foot protection in manufacturing areas"
    ]
  },
  {
    title: "Biological Material Handling",
    description: "Specialized protocols for safe handling of biological materials and tissue processing.",
    requirements: [
      "Biosafety level 2 (BSL-2) protocols",
      "Sterile technique requirements",
      "Waste disposal procedures",
      "Contamination prevention measures",
      "Emergency response procedures"
    ]
  },
  {
    title: "Chemical Safety Management",
    description: "Comprehensive chemical safety protocols for manufacturing and processing operations.",
    requirements: [
      "Chemical inventory management",
      "Safe storage and handling procedures",
      "Spill response protocols",
      "Waste disposal procedures",
      "Material Safety Data Sheet (MSDS) access"
    ]
  }
]

const emergencyProcedures = [
  {
    title: "Medical Emergency",
    description: "Immediate response procedures for medical emergencies in the workplace.",
    steps: ["Call 911", "Provide first aid", "Notify safety officer", "Document incident", "Follow-up care"]
  },
  {
    title: "Chemical Spill",
    description: "Response procedures for chemical spills and contamination incidents.",
    steps: ["Evacuate area", "Contain spill", "Notify safety team", "Clean up safely", "Document incident"]
  },
  {
    title: "Fire Emergency",
    description: "Fire safety procedures and evacuation protocols for all facilities.",
    steps: ["Sound alarm", "Evacuate building", "Call fire department", "Account for personnel", "Secure facility"]
  }
]

export default function Safety() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Safety & Compliance
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Safety Standards
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Safety is our top priority at Tiger BioSciences. Our comprehensive safety program ensures 
              the protection of our employees, the environment, and the communities we serve. We maintain 
              the highest standards of workplace safety through rigorous protocols, continuous training, 
              and proactive risk management.
            </p>
          </div>
        </div>
      </Section>

      {/* Safety Metrics */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Safety Performance</h2>
            <p className="text-muted-foreground">Our commitment to safety excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {safetyMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tiger-red mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Safety Standards */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Safety Standards
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {safetyStandards.map((standard, index) => (
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

      {/* Safety Protocols */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Safety Protocols
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety protocols covering all aspects of our operations, 
              from biological material handling to chemical safety management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyProtocols.map((protocol, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {protocol.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {protocol.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Key Requirements:</h4>
                    {protocol.requirements.map((requirement, reqIndex) => (
                      <div key={reqIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-tiger-red mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Emergency Procedures */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Emergency Procedures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clear, well-defined emergency response procedures to ensure the safety 
              of all personnel and the protection of our facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyProcedures.map((procedure, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20">
                      <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-tiger-red transition-colors">
                      {procedure.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {procedure.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {procedure.steps.map((step, stepIndex) => (
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

      {/* Safety Training */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Safety Training Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive safety training ensures all employees are equipped with the knowledge 
              and skills to maintain a safe working environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">New Employee Orientation</h3>
              <p className="text-sm text-muted-foreground">Comprehensive safety orientation for all new hires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Annual Refresher Training</h3>
              <p className="text-sm text-muted-foreground">Regular updates on safety protocols and procedures</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Emergency Response</h3>
              <p className="text-sm text-muted-foreground">Training on emergency procedures and response protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Specialized Training</h3>
              <p className="text-sm text-muted-foreground">Role-specific safety training for specialized functions</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Safety Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our safety team is available to answer questions about our safety protocols, 
            training programs, and emergency procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Contact Safety Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/certifications">
                View Certifications
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
