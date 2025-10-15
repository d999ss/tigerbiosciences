import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: <Target className="h-8 w-8 text-tiger-red" />,
    title: "Innovation First",
    description: "We pioneer the future of regenerative medicine through cutting-edge research, development, and clinical applications that push the boundaries of what's possible."
  },
  {
    icon: <Eye className="h-8 w-8 text-tiger-red" />,
    title: "Quality Excellence",
    description: "Our fully integrated approach ensures unparalleled quality, accountability, and confidence for both clinicians and patients through rigorous standards and protocols."
  },
  {
    icon: <Users className="h-8 w-8 text-tiger-red" />,
    title: "Patient-Centered",
    description: "Every product and service we develop is designed with the end goal of improving patient outcomes and advancing the field of regenerative medicine."
  },
  {
    icon: <Award className="h-8 w-8 text-tiger-red" />,
    title: "Regulatory Excellence",
    description: "We maintain the highest standards of regulatory compliance with 25+ FDA approvals and international certifications across our portfolio."
  }
];

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description: "Tiger BioSciences established in San Antonio, Texas, with a vision to revolutionize regenerative medicine through innovative CAMP technologies."
  },
  {
    year: "2023",
    title: "Lizard Health Acquisition",
    description: "Acquired controlling stake in Lizard Health Technology, strengthening our position in biotechnology and quality management."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations to serve healthcare providers in 30+ countries through Tiger BioSciences International."
  },
  {
    year: "2024",
    title: "25+ FDA Approvals",
    description: "Achieved milestone of 25+ FDA approvals and regulatory clearances across our comprehensive portfolio of companies."
  },
  {
    year: "2025",
    title: "Legal Action",
    description: "Filed legal action against MiMedx Group to protect our intellectual property and market position in regenerative medicine."
  }
];

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                About Tiger BioSciences
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Pioneering the Future of Regenerative Medicine
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences is a pioneering leader in regenerative medicine, established in 2023 and headquartered in San Antonio, Texas. 
              We are the first of its kind in comprehensive tissue processing and medical device innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tiger-red">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize patient care by harnessing the body&apos;s own regenerative potential. We combine state-of-the-art technologies 
                  with a deep understanding of human biology to develop next-generation biomedical products that address evolving clinical needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-tiger-red">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in regenerative medicine, setting new standards for quality, innovation, and patient outcomes. 
                  We envision a future where our CAMP technologies transform healthcare delivery worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Tiger BioSciences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10 group-hover:bg-tiger-red/20 transition-colors">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Company Timeline */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to advance regenerative medicine
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-tiger-red text-white flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Vertical Integration */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6 text-tiger-red">
                Vertical Integration Advantage
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Tiger BioSciences operates through a vertically integrated model, overseeing every stage of product development—from donor screening and tissue collection to research, manufacturing, and distribution.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This comprehensive approach ensures quality and innovation at each step, providing unparalleled accountability and confidence for both clinicians and patients.
              </p>
              <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
                <Link href="/our-companies">
                  Explore Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/assets/images/06/tiger_regentx.png"
                alt="Tiger BioSciences Vertical Integration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in advancing the future of regenerative medicine. Discover how our comprehensive portfolio 
            can enhance your clinical outcomes and advance your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/partnerships">
                Explore Partnerships
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
