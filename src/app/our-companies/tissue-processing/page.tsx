import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, TestTube, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TissueProcessing() {
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
                <span className="text-tiger-red">Tissue Processing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional tissue processing services. Advanced tissue processing and CAMP-based innovation with rigorous protocols and scientifically driven methods for exceptional tissue quality and consistency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/tissue-processing">
                    View Services
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
                src="/assets/images/08/regenTX_box_left.png"
                alt="Tissue Processing"
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
                <div className="text-4xl font-bold text-tiger-red mb-2">8+</div>
                <div className="text-lg font-semibold mb-1">FDA Approvals</div>
                <div className="text-sm text-muted-foreground">Tissue products</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">15+</div>
                <div className="text-lg font-semibold mb-1">Countries</div>
                <div className="text-sm text-muted-foreground">Global reach</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">12+</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Tissue Processing Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our tissue processing division leads in advanced tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency with scientifically driven methods and deep domain expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5 text-tiger-red" />
                  Scientific Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Scientifically driven methods and deep domain expertise set new benchmarks in tissue processing and regenerative medicine.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-tiger-red" />
                  Quality Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency across all our products.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Tissue Processing Companies</h2>
            <p className="text-lg text-muted-foreground">
              Explore our specialized tissue processing companies and their solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/regenTX_box_left.png"
                  alt="RegenTX"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">RegenTX</h3>
                <p className="text-sm text-muted-foreground mb-4">Advanced tissue processing</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/regentx">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/regenTX_Labs_box_right.png"
                  alt="RegenTX Labs"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">RegenTX Labs</h3>
                <p className="text-sm text-muted-foreground mb-4">Research & development</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-divisions/regentx-labs">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/btr_logo_boxed_left.png"
                  alt="Birth Tissue Recovery"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">Birth Tissue Recovery</h3>
                <p className="text-sm text-muted-foreground mb-4">Tissue donation focus</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/biocare">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Image
                  src="/assets/images/08/bioCare_box_right.png"
                  alt="BioCare"
                  width={120}
                  height={80}
                  className="mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-semibold mb-2">BioCare</h3>
                <p className="text-sm text-muted-foreground mb-4">Holistic solutions</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/our-companies/biocare">
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
