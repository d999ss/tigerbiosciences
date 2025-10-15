import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RevelleAesthetics() {
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
                <span className="text-tiger-red">Revelle</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">Aesthetics Inc</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced aesthetic treatments. Delivering sophisticated aesthetic solutions with cutting-edge technologies, personalized approaches, and exceptional clinical outcomes for patients seeking premium aesthetic care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Revelle Aesthetics
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
                src="/assets/images/08/revelle_boxed_left.png"
                alt="Revelle Aesthetics Inc"
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
                <div className="text-lg font-semibold mb-1">Treatment Options</div>
                <div className="text-sm text-muted-foreground">Advanced procedures</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">200+</div>
                <div className="text-lg font-semibold mb-1">Practitioners</div>
                <div className="text-sm text-muted-foreground">Trained professionals</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">8+</div>
                <div className="text-lg font-semibold mb-1">Years</div>
                <div className="text-sm text-muted-foreground">Clinical excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Revelle Aesthetics Inc</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Revelle Aesthetics Inc delivers sophisticated aesthetic solutions with cutting-edge technologies and personalized approaches. Our commitment to exceptional clinical outcomes and patient satisfaction drives our innovation in premium aesthetic care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-tiger-red" />
                  Advanced Treatments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Delivering sophisticated aesthetic solutions with cutting-edge technologies and personalized approaches for exceptional clinical outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-tiger-red" />
                  Clinical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Commitment to exceptional clinical outcomes and patient satisfaction drives our innovation in premium aesthetic care and treatment delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive aesthetic treatments and advanced procedures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Facial Aesthetics</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced facial aesthetic treatments designed for natural-looking results and optimal patient satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Body Contouring</h3>
                <p className="text-sm text-muted-foreground">
                  Sophisticated body contouring solutions with cutting-edge technologies for comprehensive aesthetic enhancement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety Protocols</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous safety protocols and quality assurance ensuring the highest standards in aesthetic treatment delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
