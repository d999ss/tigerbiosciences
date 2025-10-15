import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AirwayMedix() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                Tiger BioSciences International
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-tiger-red">Airway Medix</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">S.A.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                International distribution excellence. Specializing in global distribution of advanced cell and tissue products, with a focus on regulatory excellence and international partnerships across borders and care systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Airway Medix
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
                src="/assets/images/08/airway_medix_boxed_right.png"
                alt="Airway Medix S.A."
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
                <div className="text-4xl font-bold text-tiger-red mb-2">30+</div>
                <div className="text-lg font-semibold mb-1">Countries</div>
                <div className="text-sm text-muted-foreground">Global distribution</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">50+</div>
                <div className="text-lg font-semibold mb-1">Products</div>
                <div className="text-sm text-muted-foreground">Cell & tissue products</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">12+</div>
                <div className="text-lg font-semibold mb-1">Years</div>
                <div className="text-sm text-muted-foreground">International expertise</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Airway Medix S.A.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Airway Medix S.A. specializes in international distribution of advanced cell and tissue products, with a focus on regulatory excellence and international partnerships. Based in Germany, we enable worldwide access to cutting-edge regenerative medicine technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-tiger-red" />
                  International Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specializing in global distribution of advanced cell and tissue products with regulatory excellence and international partnerships across borders.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-tiger-red" />
                  Global Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enabling worldwide access to cutting-edge regenerative medicine technologies through our international distribution network and regulatory expertise.
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
              Comprehensive international distribution and regulatory solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Distribution</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive international distribution network for advanced cell and tissue products across multiple countries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Regulatory Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Expert regulatory compliance and international standards adherence for seamless global product distribution.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Partnership Network</h3>
                <p className="text-sm text-muted-foreground">
                  Strong international partnerships and collaborations across borders and healthcare systems worldwide.
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
