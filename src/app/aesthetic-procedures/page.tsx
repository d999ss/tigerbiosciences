import { UseCasePage } from "@/components/templates/use-case-page"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, Award, Shield, Heart, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"

const aestheticProcedures = [
  {
    title: "Facial Rejuvenation",
    description: "Advanced facial treatments using cellular and matrix-based products for natural-looking results.",
    icon: <Sparkles className="size-5 stroke-1" />,
  },
  {
    title: "Body Contouring",
    description: "Non-surgical body contouring solutions for enhanced body shape and definition.",
    icon: <Heart className="size-5 stroke-1" />,
  },
  {
    title: "Skin Regeneration",
    description: "Cutting-edge skin regeneration treatments for improved texture and appearance.",
    icon: <Shield className="size-5 stroke-1" />,
  },
  {
    title: "Scar Revision",
    description: "Advanced scar revision techniques for improved skin appearance and texture.",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Hair Restoration",
    description: "Innovative hair restoration treatments using cellular and growth factor technology.",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Anti-Aging Treatments",
    description: "Comprehensive anti-aging solutions for youthful, radiant skin.",
    icon: <Zap className="size-5 stroke-1" />,
  },
]

const treatmentBenefits = [
  {
    title: "Natural Results",
    description: "Achieve natural-looking results with minimal downtime and maximum patient satisfaction.",
    features: [
      "Minimal downtime",
      "Natural appearance",
      "Long-lasting results",
      "High patient satisfaction"
    ]
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge cellular and matrix-based technology for superior aesthetic outcomes.",
    features: [
      "Cellular technology",
      "Matrix-based products",
      "Growth factors",
      "Regenerative medicine"
    ]
  },
  {
    title: "Safety & Efficacy",
    description: "Proven safety profile with demonstrated efficacy across multiple aesthetic applications.",
    features: [
      "FDA-approved products",
      "Clinical validation",
      "Safety protocols",
      "Quality assurance"
    ]
  }
]

const procedureTypes = [
  {
    type: "Non-Surgical Facelift",
    description: "Advanced non-surgical facial rejuvenation using cellular and matrix-based products.",
    duration: "60-90 minutes",
    downtime: "Minimal"
  },
  {
    type: "Body Sculpting",
    description: "Non-invasive body contouring treatments for enhanced body shape and definition.",
    duration: "45-60 minutes",
    downtime: "None"
  },
  {
    type: "Skin Resurfacing",
    description: "Advanced skin resurfacing treatments for improved texture and appearance.",
    duration: "30-45 minutes",
    downtime: "2-3 days"
  },
  {
    type: "Scar Treatment",
    description: "Specialized scar revision treatments for improved skin appearance and texture.",
    duration: "30-60 minutes",
    downtime: "Minimal"
  }
]

export default function AestheticProcedures() {
  return (
    <UseCasePage
      badge="Aesthetic Excellence"
      title="Aesthetic Procedures"
      description="Tiger Aesthetics offers cutting-edge aesthetic procedures using advanced cellular and matrix-based technology. Our innovative treatments provide natural-looking results with minimal downtime, helping patients achieve their aesthetic goals safely and effectively."
      primaryCta={{ href: "/contact", label: "Schedule Consultation" }}
      secondaryCta={{ href: "/our-companies", label: "Learn About Tiger Aesthetics" }}
    >

      {/* Treatment Benefits */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Why Choose Tiger Aesthetics?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced technology and proven expertise deliver exceptional aesthetic results 
              with the highest standards of safety and patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentBenefits.map((benefit, index) => (
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

      {/* Aesthetic Procedures */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Aesthetic Procedures
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {aestheticProcedures.map((procedure, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{procedure.icon}</ItemIcon>
                  {procedure.title}
                </ItemTitle>
                <ItemDescription>{procedure.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Procedure Types */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Popular Procedures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most requested aesthetic procedures, each designed to deliver exceptional results 
              with minimal downtime and maximum patient satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procedureTypes.map((procedure, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {procedure.type}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {procedure.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-tiger-red/5 rounded-lg">
                      <div className="text-lg font-bold text-tiger-red">{procedure.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-tiger-red/5 rounded-lg">
                      <div className="text-lg font-bold text-tiger-red">{procedure.downtime}</div>
                      <div className="text-xs text-muted-foreground">Downtime</div>
                    </div>
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
            Transform Your Aesthetic Practice
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading aesthetic professionals who trust Tiger Aesthetics for advanced, 
            safe, and effective aesthetic treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Learn About Tiger Aesthetics
              </Link>
            </Button>
          </div>
        </div>
      </Section>

    </UseCasePage>
  )
}
