import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const leadership = [
  {
    name: "Dr. Sarah Johnson",
    title: "Chief Executive Officer",
    company: "Tiger BioSciences",
    bio: "Dr. Johnson brings over 25 years of experience in regenerative medicine and medical device innovation. She has led the establishment of Tiger BioSciences in 2023 and orchestrated the acquisition of Lizard Health Technology, positioning the company as a pioneering leader in the field.",
    image: "/assets/images/leadership/sarah-johnson.jpg",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    email: "sarah.johnson@tigerbiosciences.com",
    expertise: ["Regenerative Medicine", "Strategic Leadership", "M&A"]
  },
  {
    name: "Michael Chen",
    title: "Chief Technology Officer",
    company: "RegenTX Division",
    bio: "Michael leads our technology innovation efforts across the RegenTX division, overseeing R&D initiatives and ensuring our tissue processing technologies meet the highest quality standards. He has been instrumental in achieving 8+ FDA approvals.",
    image: "/assets/images/leadership/michael-chen.jpg",
    linkedin: "https://linkedin.com/in/michael-chen",
    email: "michael.chen@tigerbiosciences.com",
    expertise: ["Tissue Processing", "R&D", "Quality Assurance"]
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Chief Medical Officer",
    company: "Tiger Wound Care",
    bio: "Dr. Rodriguez is a board-certified physician with extensive experience in wound care and clinical research. She ensures our CAMP-based solutions meet clinical needs and has led the development of 12+ FDA-approved wound care products.",
    image: "/assets/images/leadership/emily-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/emily-rodriguez",
    email: "emily.rodriguez@tigerbiosciences.com",
    expertise: ["Clinical Research", "Wound Care", "CAMP Technologies"]
  },
  {
    name: "David Thompson",
    title: "Chief Operating Officer",
    company: "Tiger International",
    bio: "David oversees our global operations and manufacturing excellence across 30+ countries. He ensures our products reach healthcare providers worldwide with consistent quality and regulatory compliance.",
    image: "/assets/images/leadership/david-thompson.jpg",
    linkedin: "https://linkedin.com/in/david-thompson",
    email: "david.thompson@tigerbiosciences.com",
    expertise: ["Global Operations", "Manufacturing", "International Distribution"]
  },
  {
    name: "Lisa Park",
    title: "Chief Financial Officer",
    company: "Tiger BioSciences",
    bio: "Lisa manages our financial strategy and investor relations for our billion-dollar portfolio. She brings extensive experience in healthcare finance and strategic planning, overseeing the financial health of 13+ portfolio companies.",
    image: "/assets/images/leadership/lisa-park.jpg",
    linkedin: "https://linkedin.com/in/lisa-park",
    email: "lisa.park@tigerbiosciences.com",
    expertise: ["Healthcare Finance", "Investor Relations", "Portfolio Management"]
  },
  {
    name: "Dr. James Wilson",
    title: "Chief Regulatory Officer",
    company: "Tiger BioSciences",
    bio: "Dr. Wilson ensures compliance with FDA regulations and international standards across our entire portfolio. He has successfully navigated complex regulatory pathways for medical devices, achieving 25+ FDA approvals.",
    image: "/assets/images/leadership/james-wilson.jpg",
    linkedin: "https://linkedin.com/in/james-wilson",
    email: "james.wilson@tigerbiosciences.com",
    expertise: ["FDA Compliance", "Regulatory Affairs", "International Standards"]
  }
]

const stats = [
  { label: "Years Combined Experience", value: "150+" },
  { label: "FDA Approvals Led", value: "25+" },
  { label: "Countries Served", value: "30+" },
  { label: "Portfolio Companies", value: "13+" }
]

export default function Leadership() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Executive Leadership
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Leadership Team
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Meet the experienced leaders driving innovation in medical technology. 
              Our executive team brings together decades of expertise in healthcare, 
              regulatory affairs, and business development.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tiger-red mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership Grid */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Executive Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our leadership team combines deep industry expertise with a shared vision 
              for advancing medical technology and improving patient outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                    {leader.name}
                  </CardTitle>
                  <div className="text-sm text-tiger-red font-medium">
                    {leader.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {leader.company}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-foreground">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Button asChild variant="ghost" size="sm">
                      <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`mailto:${leader.email}`}>
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our leadership team is committed to advancing medical technology. 
            Reach out to learn more about our vision and how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Get in Touch
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
