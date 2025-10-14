import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Item, ItemIcon, ItemTitle, ItemDescription } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Building2, Users, Award, Globe, Shield, Zap } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    title: "RegenTX",
    description: "Tissue Science Redefined with advanced processing and quality assurance.",
    icon: <Building2 className="size-5 stroke-1" />,
    href: "/our-companies/regentx/",
    external: false,
    category: "Tissue Processing"
  },
  {
    title: "Tiger Wound Care",
    description: "Advanced CAMP Solutions for Complex Wounds with FDA approvals.",
    icon: <Award className="size-5 stroke-1" />,
    href: "https://tigerwoundcare.com/",
    external: true,
    category: "Wound Care"
  },
  {
    title: "Tiger Aesthetics",
    description: "Shaping the Future of Aesthetics with advanced CAMP technologies.",
    icon: <Users className="size-5 stroke-1" />,
    href: "/our-companies/tiger-aesthetics/",
    external: false,
    category: "Aesthetics"
  },
  {
    title: "Tiger International",
    description: "Global Access to Advanced Cell & Tissue Technologies.",
    icon: <Globe className="size-5 stroke-1" />,
    href: "/our-companies/international/",
    external: false,
    category: "International"
  },
  {
    title: "Extremity Care",
    description: "Specialized solutions for extremity wound care and treatment.",
    icon: <Shield className="size-5 stroke-1" />,
    href: "https://extremitycare.com",
    external: true,
    category: "Wound Care"
  },
  {
    title: "Sientra",
    description: "Premium aesthetic solutions and technologies for clinical excellence.",
    icon: <Zap className="size-5 stroke-1" />,
    href: "/our-companies/sientra/",
    external: false,
    category: "Aesthetics"
  }
]

export default function OurCompanies() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Comprehensive Portfolio
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Our Companies
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              A comprehensive portfolio of specialized companies working together to advance 
              medical technology and deliver exceptional outcomes across multiple domains.
            </p>
          </div>
        </div>
      </Section>

      {/* Companies Grid */}
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Specialized Excellence Across Industries
          </h2>
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {companies.map((company, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{company.icon}</ItemIcon>
                  <div className="flex items-center gap-2">
                    {company.title}
                    {company.external && <ExternalLink className="size-3" />}
                  </div>
                </ItemTitle>
                <ItemDescription>{company.description}</ItemDescription>
                <div className="mt-4 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {company.category}
                  </Badge>
                  <Button 
                    asChild
                    variant="ghost" 
                    size="sm"
                    className="h-8 px-2"
                  >
                    <Link 
                      href={company.href}
                      {...(company.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </Item>
            ))}
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
            Discover how our comprehensive portfolio of companies can enhance 
            your clinical outcomes and advance your practice.
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
