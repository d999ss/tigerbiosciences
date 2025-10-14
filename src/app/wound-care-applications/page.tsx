import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Heart, Shield, Users, Award, Globe, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

const woundCareApplications = [
  {
    title: "Chronic Wound Management",
    description: "Advanced CAMP solutions for diabetic ulcers, pressure sores, and venous leg ulcers.",
    icon: <Heart className="size-5 stroke-1" />,
  },
  {
    title: "Surgical Wound Care",
    description: "Post-surgical wound healing support with cellular and matrix-based products.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Trauma Wound Treatment",
    description: "Emergency and trauma wound care solutions for acute injury management.",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Burn Wound Care",
    description: "Specialized treatments for burn wounds and thermal injury management.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Pediatric Wound Care",
    description: "Gentle, effective wound care solutions designed for pediatric patients.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Geriatric Wound Management",
    description: "Specialized care for age-related wound healing challenges and complications.",
    icon: <Globe className="size-5 stroke-1" />,
  },
]

const campProducts = [
  {
    title: "Cellular Products",
    description: "Living cellular products that provide active biological components for enhanced healing.",
    benefits: [
      "Active cellular components",
      "Enhanced healing response",
      "Reduced healing time",
      "Improved patient outcomes"
    ]
  },
  {
    title: "Acellular Products",
    description: "Processed tissue products that retain beneficial growth factors and structural proteins.",
    benefits: [
      "Preserved growth factors",
      "Structural support",
      "Reduced immunogenicity",
      "Consistent performance"
    ]
  },
  {
    title: "Matrix-like Products",
    description: "Advanced scaffold products that provide structural support for tissue regeneration.",
    benefits: [
      "3D structural support",
      "Cell migration facilitation",
      "Tissue regeneration",
      "Versatile applications"
    ]
  }
]

const clinicalEvidence = [
  {
    title: "Clinical Studies",
    description: "Peer-reviewed clinical studies demonstrating efficacy and safety of our wound care products.",
    count: "15+ Studies",
    status: "Published"
  },
  {
    title: "Case Studies",
    description: "Real-world case studies showing successful wound healing outcomes across various applications.",
    count: "50+ Cases",
    status: "Documented"
  },
  {
    title: "Clinical Outcomes",
    description: "Measurable improvements in healing times, patient satisfaction, and clinical outcomes.",
    count: "95% Success",
    status: "Rate"
  }
]

const woundTypes = [
  {
    type: "Diabetic Foot Ulcers",
    description: "Advanced treatment for diabetic foot ulcers with cellular and matrix-based products.",
    healingTime: "4-8 weeks",
    successRate: "92%"
  },
  {
    type: "Pressure Sores",
    description: "Comprehensive care for pressure sores and bedsores in various care settings.",
    healingTime: "3-6 weeks",
    successRate: "88%"
  },
  {
    type: "Venous Leg Ulcers",
    description: "Effective treatment for venous leg ulcers with compression therapy support.",
    healingTime: "6-12 weeks",
    successRate: "85%"
  },
  {
    type: "Surgical Wounds",
    description: "Post-surgical wound care to minimize complications and promote optimal healing.",
    healingTime: "2-4 weeks",
    successRate: "96%"
  }
]

export default function WoundCareApplications() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Advanced Wound Care
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Wound Care Applications
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger Wound Care provides advanced Cellular, Acellular, and Matrix-like Products (CAMPs) 
              for complex wound management. Our innovative solutions are designed for healthcare providers 
              treating chronic wounds, surgical wounds, and trauma injuries across all care settings.
            </p>
          </div>
        </div>
      </Section>

      {/* CAMP Products Overview */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              CAMP Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our Cellular, Acellular, and Matrix-like Products (CAMPs) represent the next generation 
              of wound care technology, providing targeted solutions for different wound types and healing stages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
                    {product.benefits.map((benefit, benefitIndex) => (
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

      {/* Wound Care Applications */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Wound Care Applications
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {woundCareApplications.map((application, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{application.icon}</ItemIcon>
                  {application.title}
                </ItemTitle>
                <ItemDescription>{application.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Wound Types and Outcomes */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Wound Types & Clinical Outcomes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proven results across various wound types with measurable improvements in healing times and patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {woundTypes.map((wound, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {wound.type}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {wound.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-tiger-red/5 rounded-lg">
                      <div className="text-lg font-bold text-tiger-red">{wound.healingTime}</div>
                      <div className="text-xs text-muted-foreground">Healing Time</div>
                    </div>
                    <div className="text-center p-3 bg-tiger-red/5 rounded-lg">
                      <div className="text-lg font-bold text-tiger-red">{wound.successRate}</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Clinical Evidence */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Clinical Evidence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rigorous clinical research and real-world evidence support the efficacy and safety of our wound care solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalEvidence.map((evidence, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-tiger-red" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {evidence.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {evidence.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-tiger-red mb-1">
                    {evidence.count}
                  </div>
                  <Badge variant="secondary">{evidence.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Healthcare Provider Support */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Healthcare Provider Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for healthcare providers including training, clinical guidance, and ongoing assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Clinical Training</h3>
              <p className="text-sm text-muted-foreground">Comprehensive training programs for proper product application and patient care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Clinical Support</h3>
              <p className="text-sm text-muted-foreground">24/7 clinical support and guidance from our expert medical team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <p className="text-sm text-muted-foreground">Evidence-based best practices and clinical protocols for optimal outcomes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                <Globe className="h-8 w-8 text-tiger-red" />
              </div>
              <h3 className="font-semibold mb-2">Global Network</h3>
              <p className="text-sm text-muted-foreground">Worldwide network of clinical experts and healthcare partners</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Ready to Transform Wound Care?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Tiger Wound Care&apos;s advanced CAMP technology can improve patient outcomes 
            and streamline your wound care protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Contact Clinical Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Learn About Tiger Wound Care
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
