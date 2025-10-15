import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Suneva() {
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
                <span className="text-tiger-red">Suneva</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Cutting-edge facial aesthetics. Specializing in innovative facial aesthetic products and treatments, delivering advanced solutions for skin rejuvenation and facial enhancement with proven clinical results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Suneva
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
                src="/assets/images/08/suneva_box_right.png"
                alt="Suneva"
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
                <div className="text-lg font-semibold mb-1">Product Lines</div>
                <div className="text-sm text-muted-foreground">Facial aesthetics</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">500+</div>
                <div className="text-lg font-semibold mb-1">Practitioners</div>
                <div className="text-sm text-muted-foreground">Trained professionals</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">10+</div>
                <div className="text-lg font-semibold mb-1">Years</div>
                <div className="text-sm text-muted-foreground">Facial expertise</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Suneva</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Suneva specializes in cutting-edge facial aesthetics, delivering innovative products and treatments for skin rejuvenation and facial enhancement. Our advanced solutions combine proven clinical results with the latest aesthetic technologies for optimal patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-tiger-red" />
                  Facial Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specializing in cutting-edge facial aesthetics with innovative products and treatments for skin rejuvenation and facial enhancement.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-tiger-red" />
                  Clinical Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced solutions combining proven clinical results with the latest aesthetic technologies for optimal patient outcomes and satisfaction.
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
              Innovative facial aesthetic products and treatments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Skin Rejuvenation</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced skin rejuvenation products designed for optimal results and natural-looking enhancement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Facial Enhancement</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative facial enhancement treatments with cutting-edge technologies for comprehensive aesthetic improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Safety & Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous safety protocols and quality assurance ensuring the highest standards in facial aesthetic care.
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
