import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Bandage, Stethoscope } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EncoreSurgicalDressings() {
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
                <span className="text-tiger-red">Encore Surgical</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">Dressings</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium surgical dressing solutions. Providing high-quality, advanced wound care dressings designed for optimal healing outcomes in surgical and clinical settings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Encore Surgical
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
                src="/assets/images/09/encore_boxed_left.png"
                alt="Encore Surgical Dressings"
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
                <div className="text-4xl font-bold text-tiger-red mb-2">20+</div>
                <div className="text-lg font-semibold mb-1">Product Lines</div>
                <div className="text-sm text-muted-foreground">Surgical dressings</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">500+</div>
                <div className="text-lg font-semibold mb-1">Healthcare Facilities</div>
                <div className="text-sm text-muted-foreground">Served nationwide</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">15+</div>
                <div className="text-lg font-semibold mb-1">Years</div>
                <div className="text-sm text-muted-foreground">Industry experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Encore Surgical Dressings</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Encore Surgical Dressings provides premium surgical dressing solutions designed for optimal healing outcomes. Our comprehensive product line serves healthcare facilities nationwide with high-quality, advanced wound care dressings for surgical and clinical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bandage className="h-5 w-5 text-tiger-red" />
                  Premium Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-quality surgical dressings designed for optimal healing outcomes in surgical and clinical settings with advanced materials and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-tiger-red" />
                  Clinical Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Serving healthcare facilities nationwide with comprehensive product lines and reliable supply chain management for clinical excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Product Categories */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Categories</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive surgical dressing solutions for all clinical needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bandage className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Surgical Dressings</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced surgical dressings for post-operative care and wound management in clinical settings.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Specialized Care</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized dressings for complex wounds, burns, and other challenging clinical scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous quality control and regulatory compliance ensuring the highest standards in surgical care.
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
