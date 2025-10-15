import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { ItemIcon } from "@/components/ui/item"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Building2, Users, Award, Globe, Shield, Zap, Heart, Microscope, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const companies = [
  {
    title: "RegenTX",
    description: "Tissue Science Redefined with advanced processing and quality assurance. Leading tissue processing with 8+ FDA approvals across 15+ countries.",
    icon: <Building2 className="size-5 stroke-1" />,
    href: "/our-companies/regentx/",
    external: false,
    category: "Tissue Processing",
    logo: "/assets/images/08/regenTX_box_left.png",
    stats: { fdaApprovals: "8+", countries: "15+", products: "12+" }
  },
  {
    title: "Tiger Wound Care",
    description: "Advanced CAMP Solutions for Complex Wounds with 12+ FDA approvals. Serving 25+ countries with clinically validated wound care solutions.",
    icon: <Award className="size-5 stroke-1" />,
    href: "https://tigerwoundcare.com/",
    external: true,
    category: "Wound Care",
    logo: "/assets/images/08/tiger_wound_care_box_left.png",
    stats: { fdaApprovals: "12+", countries: "25+", products: "18+" }
  },
  {
    title: "Tiger Aesthetics",
    description: "Shaping the Future of Aesthetics with advanced CAMP technologies. 15+ FDA approvals across 20+ countries with comprehensive aesthetic solutions.",
    icon: <Users className="size-5 stroke-1" />,
    href: "/our-companies/tiger-aesthetics/",
    external: false,
    category: "Aesthetics",
    logo: "/assets/images/06/TigerAestheticsCircleColor.jpg",
    stats: { fdaApprovals: "15+", countries: "20+", products: "25+" }
  },
  {
    title: "Tiger International",
    description: "Global Access to Advanced Cell & Tissue Technologies. Based in Germany with regulatory excellence across 30+ countries.",
    icon: <Globe className="size-5 stroke-1" />,
    href: "/our-companies/international/",
    external: false,
    category: "International",
    logo: "/assets/images/06/tiger_international_logo.png",
    stats: { fdaApprovals: "5+", countries: "30+", products: "8+" }
  },
  {
    title: "Extremity Care",
    description: "Specialized solutions for extremity wound care and treatment. Advanced cell and tissue technologies for tissue regeneration and repair.",
    icon: <Shield className="size-5 stroke-1" />,
    href: "https://extremitycare.com",
    external: true,
    category: "Wound Care",
    logo: "/assets/images/08/extremitycare_box_right.png",
    stats: { fdaApprovals: "6+", countries: "18+", products: "10+" }
  },
  {
    title: "Sientra",
    description: "Premium aesthetic solutions and technologies for clinical excellence. Transformative plastic surgery treatments including breast implants and tissue expanders.",
    icon: <Zap className="size-5 stroke-1" />,
    href: "/our-companies/sientra/",
    external: false,
    category: "Aesthetics",
    logo: "/assets/images/08/sientra_box_left.png",
    stats: { fdaApprovals: "10+", countries: "22+", products: "15+" }
  },
  {
    title: "BioCreations Medical",
    description: "Cutting-edge biomedical product development. Innovative aesthetic technologies and advanced medical products for clinical applications.",
    icon: <Microscope className="size-5 stroke-1" />,
    href: "/our-companies/biocreations/",
    external: false,
    category: "Aesthetics",
    logo: "/assets/images/08/biocreations_boxed_right.png",
    stats: { fdaApprovals: "4+", countries: "12+", products: "8+" }
  },
  {
    title: "Suneva",
    description: "Facial regenerative aesthetics specialists. Experts in facial regenerative aesthetics with advanced aesthetic products and treatments.",
    icon: <Heart className="size-5 stroke-1" />,
    href: "/our-companies/suneva/",
    external: false,
    category: "Aesthetics",
    logo: "/assets/images/08/suneva_box_right.png",
    stats: { fdaApprovals: "3+", countries: "8+", products: "6+" }
  },
  {
    title: "Lizard Health Technology",
    description: "Development and quality management excellence. Acquired controlling stake in 2023, specializing in performance at the highest level.",
    icon: <Stethoscope className="size-5 stroke-1" />,
    href: "/our-companies/lizard-health-technology/",
    external: false,
    category: "International",
    logo: "/assets/images/08/lizard_box_left.png",
    stats: { fdaApprovals: "2+", countries: "5+", products: "4+" }
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
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight text-tiger-red">
            A Billion-Dollar Portfolio of Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl text-center">
            Our comprehensive portfolio spans regenerative medicine, wound care, aesthetics, and international distribution, 
            with over 25 FDA approvals and serving 30+ countries worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {companies.map((company, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors flex items-center justify-center gap-2">
                    <ItemIcon>{company.icon}</ItemIcon>
                    <div className="flex items-center gap-2">
                      {company.title}
                      {company.external && <ExternalLink className="size-3" />}
                    </div>
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {company.category}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{company.stats.fdaApprovals}</div>
                      <div className="text-xs text-muted-foreground">FDA Approvals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{company.stats.countries}</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{company.stats.products}</div>
                      <div className="text-xs text-muted-foreground">Products</div>
                    </div>
                  </div>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all"
                  >
                    <Link 
                      href={company.href}
                      {...(company.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      Learn More
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
