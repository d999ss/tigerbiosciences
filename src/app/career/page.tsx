import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Award, Globe, Heart, Zap, Building2, Shield } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Competitive Benefits",
    description: "Comprehensive health, dental, and vision coverage for you and your family",
    icon: <Heart className="size-5 stroke-1" />,
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities and career advancement programs",
    icon: <Award className="size-5 stroke-1" />,
  },
  {
    title: "Innovation Focus",
    description: "Work on cutting-edge medical technology that makes a real difference",
    icon: <Zap className="size-5 stroke-1" />,
  },
  {
    title: "Global Impact",
    description: "Be part of a team that serves healthcare providers worldwide",
    icon: <Globe className="size-5 stroke-1" />,
  },
  {
    title: "Collaborative Culture",
    description: "Join a diverse team of passionate professionals working together",
    icon: <Users className="size-5 stroke-1" />,
  },
  {
    title: "Quality Standards",
    description: "Work in an environment committed to the highest quality and safety",
    icon: <Shield className="size-5 stroke-1" />,
  },
]

const openPositions = [
  {
    title: "Senior Research Scientist",
    department: "Research & Development",
    location: "Conshohocken, PA",
    type: "Full-time",
    description: "Lead innovative research in tissue processing and medical device development."
  },
  {
    title: "Quality Assurance Manager",
    department: "Quality & Compliance",
    location: "Conshohocken, PA",
    type: "Full-time",
    description: "Ensure compliance with FDA regulations and maintain quality standards."
  },
  {
    title: "Clinical Affairs Specialist",
    department: "Clinical Affairs",
    location: "Remote",
    type: "Full-time",
    description: "Support clinical trials and regulatory submissions for new products."
  },
  {
    title: "Manufacturing Engineer",
    department: "Manufacturing",
    location: "Conshohocken, PA",
    type: "Full-time",
    description: "Optimize production processes and ensure manufacturing excellence."
  },
  {
    title: "Business Development Manager",
    department: "Business Development",
    location: "Remote",
    type: "Full-time",
    description: "Identify and develop strategic partnerships and business opportunities."
  },
  {
    title: "Regulatory Affairs Coordinator",
    department: "Regulatory Affairs",
    location: "Conshohocken, PA",
    type: "Full-time",
    description: "Support regulatory submissions and maintain compliance documentation."
  }
]

export default function Career() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Join Our Team
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Career Opportunities
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Join Tiger BioSciences and be part of a team that's advancing medical technology 
              and improving patient outcomes worldwide. We're looking for passionate professionals 
              who want to make a difference.
            </p>
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
                <Link href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact HR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Why Work With Us
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{benefit.icon}</ItemIcon>
                  {benefit.title}
                </ItemTitle>
                <ItemDescription>{benefit.description}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section id="open-positions" className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore current opportunities to join our growing team of medical technology professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                      {position.title}
                    </CardTitle>
                    <Badge variant="secondary">
                      {position.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {position.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      {position.location}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                    <Link href="/contact">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Send Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Learn About Our Companies
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
