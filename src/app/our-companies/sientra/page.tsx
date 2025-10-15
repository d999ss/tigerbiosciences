import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Sientra() {
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
                <span className="text-tiger-red">Sientra</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium aesthetic solutions. Leading provider of breast implants and expanders, delivering innovative aesthetic technologies with a focus on safety, quality, and patient satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Sientra
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="https://sientra.com" target="_blank" rel="noopener noreferrer">
                    Visit Sientra.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/08/sientra_box_left.png"
                alt="Sientra"
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
                <div className="text-lg font-semibold mb-1">Years Experience</div>
                <div className="text-sm text-muted-foreground">Aesthetic solutions</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">50+</div>
                <div className="text-lg font-semibold mb-1">Countries</div>
                <div className="text-sm text-muted-foreground">Global presence</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">1000+</div>
                <div className="text-lg font-semibold mb-1">Surgeons</div>
                <div className="text-sm text-muted-foreground">Trust our products</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sientra</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sientra is a leading provider of premium aesthetic solutions, specializing in breast implants and expanders. With over two decades of experience, we deliver innovative aesthetic technologies with an unwavering focus on safety, quality, and patient satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-tiger-red" />
                  Premium Aesthetics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading provider of breast implants and expanders, delivering innovative aesthetic technologies with a focus on safety and patient satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-tiger-red" />
                  Quality & Safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unwavering commitment to safety, quality, and regulatory compliance, ensuring the highest standards in aesthetic medicine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Products</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive aesthetic solutions for breast reconstruction and enhancement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Breast Implants</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality breast implants designed for natural-looking results with advanced safety features.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tissue Expanders</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced tissue expanders for breast reconstruction with precise control and patient comfort.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Support Products</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive support products and accessories for optimal surgical outcomes and patient care.
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
