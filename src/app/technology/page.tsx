import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Microscope, Shield, Zap, Heart, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const campTechnologies = [
  {
    title: "Cellular Products",
    description: "Living cells that promote natural healing and regeneration through biological processes.",
    icon: <Microscope className="h-8 w-8 text-tiger-red" />,
    applications: ["Wound Healing", "Tissue Regeneration", "Stem Cell Therapy"],
    examples: ["Allografts", "Xenografts", "Cultured Cells"]
  },
  {
    title: "Acellular Products",
    description: "Non-living biological materials that provide structural support and promote healing without cellular components.",
    icon: <Shield className="h-8 w-8 text-tiger-red" />,
    applications: ["Scaffold Support", "Growth Factor Delivery", "Barrier Function"],
    examples: ["Decellularized Tissues", "Collagen Matrices", "Hyaluronic Acid"]
  },
  {
    title: "Matrix-like Products",
    description: "Synthetic or processed materials that mimic natural extracellular matrix to support tissue growth.",
    icon: <Zap className="h-8 w-8 text-tiger-red" />,
    applications: ["Structural Support", "Cell Migration", "Tissue Engineering"],
    examples: ["Synthetic Polymers", "Processed Collagen", "Bioactive Glass"]
  }
];

const applications = [
  {
    title: "Wound Care",
    description: "Advanced CAMP solutions for chronic and complex wounds, promoting faster healing and better outcomes.",
    icon: <Heart className="h-6 w-6 text-tiger-red" />,
    products: ["Tiger Wound Care", "Extremity Care", "Encore Surgical"]
  },
  {
    title: "Aesthetic Procedures",
    description: "Regenerative aesthetics using CAMP technologies for facial and body contouring applications.",
    icon: <Zap className="h-6 w-6 text-tiger-red" />,
    products: ["Sientra", "BioCreations", "Suneva", "Revelle Aesthetics"]
  },
  {
    title: "Tissue Processing",
    description: "Professional tissue processing services ensuring quality and consistency in CAMP products.",
    icon: <Microscope className="h-6 w-6 text-tiger-red" />,
    products: ["RegenTX", "RegenTX Labs", "Birth Tissue Recovery"]
  },
  {
    title: "Global Distribution",
    description: "International distribution of CAMP technologies with regulatory compliance across borders.",
    icon: <Globe className="h-6 w-6 text-tiger-red" />,
    products: ["Tiger International", "Lizard Health", "Airway Medix"]
  }
];

export default function Technology() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                CAMP Technologies
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Cellular, Acellular, and Matrix-like Products
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences specializes in CAMP technologies—the cutting-edge approach to regenerative medicine 
              that combines cellular, acellular, and matrix-like products to promote natural healing and tissue regeneration.
            </p>
          </div>
        </div>
      </Section>

      {/* CAMP Technologies Overview */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
              Understanding CAMP Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach to regenerative medicine through three distinct but complementary product categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campTechnologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center group-hover:bg-tiger-red/20 transition-colors">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.applications.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.examples.map((example, exIndex) => (
                          <Badge key={exIndex} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
              Clinical Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How our CAMP technologies are transforming healthcare across multiple specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-tiger-red/10 group-hover:bg-tiger-red/20 transition-colors">
                      {app.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      {app.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {app.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Our Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.products.map((product, prodIndex) => (
                        <Badge key={prodIndex} variant="secondary" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality & Innovation */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
                Quality & Innovation Standards
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our CAMP technologies are developed under the highest quality standards with 25+ FDA approvals 
                and international certifications. We maintain rigorous protocols throughout our vertically integrated process.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From donor screening and tissue collection to research, manufacturing, and distribution, 
                every step is designed to ensure the highest quality and safety standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">25+</div>
                  <div className="text-sm text-muted-foreground">FDA Approvals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">30+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/06/tiger_wound_care_logo.png"
                alt="Tiger BioSciences Quality Standards"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Learn More About Our Technologies
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our CAMP technologies can enhance your clinical practice and improve patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/our-companies">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact Our Experts
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
