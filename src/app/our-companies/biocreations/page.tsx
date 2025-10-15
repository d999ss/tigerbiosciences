import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Award, Globe, Shield, Zap, Microscope, Users, Building2, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BioCreations() {
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
                <span className="text-tiger-red">BioCreations</span>
                <br />
                <span className="text-2xl md:text-3xl text-muted-foreground">Medical</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Innovative aesthetic technologies. Pioneering the future of aesthetic medicine through cutting-edge research, advanced technologies, and breakthrough solutions in regenerative aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact BioCreations
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
                src="/assets/images/08/biocreations_boxed_right.png"
                alt="BioCreations Medical"
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
                <div className="text-4xl font-bold text-tiger-red mb-2">10+</div>
                <div className="text-lg font-semibold mb-1">Innovation Patents</div>
                <div className="text-sm text-muted-foreground">Aesthetic technologies</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">25+</div>
                <div className="text-lg font-semibold mb-1">Research Projects</div>
                <div className="text-sm text-muted-foreground">Active development</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">15+</div>
                <div className="text-lg font-semibold mb-1">Years</div>
                <div className="text-sm text-muted-foreground">Innovation excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About BioCreations Medical</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              BioCreations Medical is at the forefront of aesthetic innovation, pioneering breakthrough technologies in regenerative aesthetics. Our cutting-edge research and development focus on creating next-generation solutions that push the boundaries of what&apos;s possible in aesthetic medicine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-tiger-red" />
                  Innovation Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pioneering breakthrough technologies in regenerative aesthetics through cutting-edge research and innovative development approaches.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Microscope className="h-5 w-5 text-tiger-red" />
                  Research Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced research and development programs focused on creating next-generation aesthetic solutions with scientific rigor and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Cutting-edge aesthetic technologies and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Regenerative Aesthetics</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced regenerative aesthetic technologies that harness the body&apos;s natural healing processes for optimal results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Advanced Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative biomaterials and advanced technologies designed for superior aesthetic outcomes and patient safety.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-tiger-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-tiger-red" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Clinical Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Rigorous clinical validation and testing ensuring the highest standards of safety, efficacy, and patient satisfaction.
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
