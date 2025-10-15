import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Sparkles, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Aesthetics() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                Tiger Aesthetics Division
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-tiger-red">Aesthetic</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Shaping the Future of Aesthetics. Comprehensive aesthetic solutions across reconstructive, cosmetic, and regenerative domains with advanced CAMP technologies and personalized approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/aesthetic-procedures">
                    View Procedures
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
                src="/assets/images/06/TigerAestheticsCircleColor.jpg"
                alt="Aesthetic Solutions"
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
                <div className="text-4xl font-bold text-tiger-red mb-2">15+</div>
                <div className="text-lg font-semibold mb-1">FDA Approvals</div>
                <div className="text-sm text-muted-foreground">Aesthetic products</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">20+</div>
                <div className="text-lg font-semibold mb-1">Countries</div>
                <div className="text-sm text-muted-foreground">Global presence</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">25+</div>
                <div className="text-lg font-semibold mb-1">Product Lines</div>
                <div className="text-sm text-muted-foreground">Aesthetic solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Aesthetic Solutions</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our aesthetic division delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Each product is designed to meet personalized needs and maximize clinical results with advanced CAMP technologies and innovative approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-tiger-red" />
                  Advanced Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cutting-edge solutions across reconstructive, cosmetic, and regenerative domains with advanced CAMP technologies and personalized approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-tiger-red" />
                  Clinical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each product is designed to meet personalized needs and maximize clinical results with proven efficacy and patient satisfaction.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Aesthetic Companies</h2>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of aesthetic companies and their solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/sientra_box_left.png"
                  alt="Sientra"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Sientra</h3>
                <p className="text-sm text-muted-foreground mb-4">Breast implants & expanders</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/sientra">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/biocreations_boxed_right.png"
                  alt="BioCreations Medical"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">BioCreations</h3>
                <p className="text-sm text-muted-foreground mb-4">Innovative technologies</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/biocreations">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/revelle_boxed_left.png"
                  alt="Revelle Aesthetics"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Revelle Aesthetics</h3>
                <p className="text-sm text-muted-foreground mb-4">Advanced treatments</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/revelle-aesthetics">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/suneva_box_right.png"
                  alt="Suneva"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Suneva</h3>
                <p className="text-sm text-muted-foreground mb-4">Facial aesthetics</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/suneva">
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
