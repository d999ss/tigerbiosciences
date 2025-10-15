import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Heart, Baby } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BioCare() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                RegenTX Division
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-tiger-red">BioCare</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive tissue care solutions. Specializing in birth tissue processing and recovery, providing holistic approaches to regenerative medicine with a focus on maternal and neonatal care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact BioCare
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/our-companies/regentx">
                    View RegenTX Division
                  </Link>
                </Button>
              </div>
            </div>
            <div className="text-center">
              <Image
                src="/assets/images/08/bioCare_box_right.png"
                alt="BioCare"
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
                <div className="text-4xl font-bold text-tiger-red mb-2">5+</div>
                <div className="text-lg font-semibold mb-1">Years Experience</div>
                <div className="text-sm text-muted-foreground">Birth tissue processing</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">1000+</div>
                <div className="text-lg font-semibold mb-1">Tissue Recoveries</div>
                <div className="text-sm text-muted-foreground">Successful processing</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">25+</div>
                <div className="text-lg font-semibold mb-1">Partner Hospitals</div>
                <div className="text-sm text-muted-foreground">Healthcare network</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BioCare</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BioCare specializes in birth tissue processing and recovery, providing comprehensive tissue care solutions with a focus on maternal and neonatal care. Our holistic approach ensures the highest quality standards while supporting families through the donation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Baby className="h-5 w-5 text-tiger-red" />
                  Birth Tissue Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized in birth tissue processing and recovery, providing comprehensive care solutions for maternal and neonatal applications.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-tiger-red" />
                  Holistic Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our holistic approach ensures the highest quality standards while providing compassionate support throughout the donation process.
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
              Comprehensive birth tissue processing and care solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Tissue Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Professional recovery services for birth tissues with strict quality control and safety protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced processing techniques to prepare tissues for therapeutic applications in regenerative medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Support</h3>
                <p className="text-sm text-muted-foreground">
                  Compassionate support and guidance for families throughout the tissue donation process.
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
