import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const newsItems = [
  {
    title: "Tiger BioSciences Receives FDA Approval for New Wound Care Product",
    excerpt: "Our latest CAMP-based wound care solution has received FDA clearance, expanding our portfolio of advanced medical technologies.",
    date: "2025-01-15",
    category: "Regulatory",
    image: "/assets/images/news/fda-approval.jpg",
    href: "/news/fda-approval-wound-care",
    featured: true
  },
  {
    title: "RegenTX Launches Advanced Tissue Processing Facility",
    excerpt: "New state-of-the-art facility increases our tissue processing capacity by 300%, enabling us to serve more healthcare providers worldwide.",
    date: "2025-01-10",
    category: "Expansion",
    image: "/assets/images/news/facility-launch.jpg",
    href: "/news/regenTX-facility-launch",
    featured: true
  },
  {
    title: "Tiger Aesthetics Partners with Leading Dermatology Practices",
    excerpt: "Strategic partnerships with 50+ dermatology practices across the US to expand access to our aesthetic solutions.",
    date: "2025-01-08",
    category: "Partnerships",
    image: "/assets/images/news/partnerships.jpg",
    href: "/news/aesthetics-partnerships",
    featured: false
  },
  {
    title: "International Expansion: Tiger BioSciences Enters European Markets",
    excerpt: "We're excited to announce our expansion into key European markets, bringing our innovative solutions to healthcare providers across the continent.",
    date: "2025-01-05",
    category: "International",
    image: "/assets/images/news/europe-expansion.jpg",
    href: "/news/europe-expansion",
    featured: false
  },
  {
    title: "Research Collaboration with Leading Medical Universities",
    excerpt: "New research partnerships with top medical universities to advance tissue processing and wound care technologies.",
    date: "2025-01-03",
    category: "Research",
    image: "/assets/images/news/research-collaboration.jpg",
    href: "/news/research-collaboration",
    featured: false
  },
  {
    title: "Tiger BioSciences Recognized for Innovation Excellence",
    excerpt: "Industry recognition for our commitment to innovation and quality in medical device manufacturing and tissue processing.",
    date: "2024-12-28",
    category: "Awards",
    image: "/assets/images/news/innovation-award.jpg",
    href: "/news/innovation-excellence-award",
    featured: false
  }
]

const categories = [
  { name: "All", count: 6 },
  { name: "Regulatory", count: 1 },
  { name: "Expansion", count: 1 },
  { name: "Partnerships", count: 1 },
  { name: "International", count: 1 },
  { name: "Research", count: 1 },
  { name: "Awards", count: 1 }
]

export default function News() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Latest Updates
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              News & Updates
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Stay informed about the latest developments in medical technology, 
              regulatory approvals, partnerships, and innovations from Tiger BioSciences 
              and our portfolio companies.
            </p>
          </div>
        </div>
      </Section>

      {/* Category Filter */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-tiger-red hover:bg-tiger-red-dark text-white" : ""}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured News */}
      <Section>
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-semibold mb-8">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {newsItems.filter(item => item.featured).map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button asChild variant="outline" className="group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                    <Link href={item.href}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* All News */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-semibold mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-tiger-red transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-full group-hover:bg-tiger-red group-hover:text-white transition-all">
                    <Link href={item.href}>
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news, regulatory updates, 
            and insights from the medical technology industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tiger-red focus:border-transparent"
            />
            <Button className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
