import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Bandage, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WoundCare() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                Tiger Wound Care Division
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-tiger-red">Wound Care</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced CAMP Solutions for Complex Wounds. Comprehensive wound care solutions including Cellular, Acellular, and Matrix-like Products (CAMPs) for chronic and hard-to-treat wounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/wound-care-applications">
                    View Applications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/our-companies">
                    View All Companies
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/08/tiger_wound_care_box_left.png"
                alt="Wound Care Solutions"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">12+</div>
                <div className="text-lg font-semibold mb-1">FDA Approvals</div>
                <div className="text-sm text-muted-foreground">Wound care products</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">25+</div>
                <div className="text-lg font-semibold mb-1">Countries</div>
                <div className="text-sm text-muted-foreground">Global distribution</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">18+</div>
                <div className="text-lg font-semibold mb-1">Product Lines</div>
                <div className="text-sm text-muted-foreground">Advanced solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Wound Care Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our wound care division provides comprehensive solutions for complex wounds through advanced CAMP technologies. We offer a complete portfolio of products and services designed to address chronic and hard-to-treat wounds with clinically validated outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bandage className="h-5 w-5 text-tiger-red" />
                  CAMP Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds with innovative research and development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-tiger-red" />
                  Clinical Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technologies suitable for all care settings with clinically validated outcomes and proven efficacy in wound healing applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Related Companies */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Wound Care Companies</h2>
            <p className="text-lg text-muted-foreground">
              Explore our specialized wound care companies and their solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/tiger_wound_care_box_left.png"
                  alt="Tiger Wound Care"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Tiger Wound Care</h3>
                <p className="text-sm text-muted-foreground mb-4">FDA-approved solutions</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/tiger-wound-care">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/extremitycare_box_right.png"
                  alt="Extremity Care"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Extremity Care</h3>
                <p className="text-sm text-muted-foreground mb-4">Specialized extremity care</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://extremitycare.com" target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/09/encore_boxed_left.png"
                  alt="Encore Surgical Dressings"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Encore Surgical</h3>
                <p className="text-sm text-muted-foreground mb-4">Premium dressings</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/encore-surgical-dressings">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
