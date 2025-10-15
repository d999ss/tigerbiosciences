import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Download, Book, Users, Shield, Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

const documentationCategories = [
  {
    title: "Product Documentation",
    description: "Technical specifications, user guides, and product information for all Tiger BioSciences products.",
    icon: <FileText className="h-8 w-8 text-tiger-red" />,
    count: "25+ Documents"
  },
  {
    title: "Regulatory Documentation",
    description: "FDA submissions, regulatory compliance documents, and certification materials.",
    icon: <Shield className="h-8 w-8 text-tiger-red" />,
    count: "15+ Documents"
  },
  {
    title: "Quality Documentation",
    description: "Quality management systems, procedures, and compliance documentation.",
    icon: <Award className="h-8 w-8 text-tiger-red" />,
    count: "20+ Documents"
  },
  {
    title: "Training Materials",
    description: "Educational resources, training guides, and certification programs.",
    icon: <Users className="h-8 w-8 text-tiger-red" />,
    count: "12+ Resources"
  }
]

const featuredDocuments = [
  {
    title: "Tiger BioSciences Product Catalog",
    description: "Comprehensive catalog of all Tiger BioSciences products and services across our divisions.",
    type: "PDF",
    size: "2.4 MB",
    date: "2025-01-15",
    category: "Product Documentation",
    icon: <Book className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "FDA Comment Letter - MPFS Rules",
    description: "Tiger BioSciences comments on CMS proposed Physician Fee Schedule rules and regulatory impact.",
    type: "PDF",
    size: "1.8 MB",
    date: "2025-01-10",
    category: "Regulatory Documentation",
    icon: <FileText className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "Quality Management System Manual",
    description: "Complete quality management system documentation and procedures.",
    type: "PDF",
    size: "3.2 MB",
    date: "2025-01-08",
    category: "Quality Documentation",
    icon: <Award className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "Safety Protocols and Procedures",
    description: "Comprehensive safety protocols for all Tiger BioSciences operations and facilities.",
    type: "PDF",
    size: "2.1 MB",
    date: "2025-01-05",
    category: "Safety Documentation",
    icon: <Shield className="h-6 w-6 text-tiger-red" />
  }
]

const technicalGuides = [
  {
    title: "Tissue Processing Guidelines",
    description: "Detailed guidelines for tissue processing procedures and quality control measures.",
    audience: "Laboratory Technicians",
    level: "Technical"
  },
  {
    title: "Wound Care Application Guide",
    description: "Clinical application guidelines for Tiger Wound Care products and treatments.",
    audience: "Healthcare Providers",
    level: "Clinical"
  },
  {
    title: "Aesthetic Procedure Protocols",
    description: "Step-by-step protocols for aesthetic procedures using Tiger Aesthetics products.",
    audience: "Medical Professionals",
    level: "Clinical"
  },
  {
    title: "Regulatory Compliance Checklist",
    description: "Comprehensive checklist for maintaining regulatory compliance across all operations.",
    audience: "Compliance Officers",
    level: "Administrative"
  }
]

const documentationStats = [
  { label: "Total Documents", value: "72+" },
  { label: "Languages", value: "3" },
  { label: "Last Updated", value: "Jan 2025" },
  { label: "Download Count", value: "1,200+" }
]

export default function Documentation() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Technical Documentation
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Documentation
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Access comprehensive technical documentation, regulatory materials, and educational resources 
              for all Tiger BioSciences products and services. Our documentation library provides detailed 
              information for healthcare providers, researchers, and industry professionals.
            </p>
          </div>
        </div>
      </Section>

      {/* Documentation Stats */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">Documentation Library</h2>
            <p className="text-muted-foreground">Comprehensive resources for all stakeholders</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {documentationStats.map((stat, index) => (
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

      {/* Documentation Categories */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Documentation Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organized documentation covering all aspects of our products, services, 
              and operations for easy access and reference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentationCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-tiger-red transition-colors">
                        {category.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {category.count}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                    <Link href="#">
                      Browse Documents
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Documents */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Featured Documents
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most requested and recently updated documentation for quick access.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredDocuments.map((doc, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-tiger-red transition-colors mb-2">
                        {doc.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="secondary">{doc.type}</Badge>
                        <Badge variant="outline">{doc.size}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(doc.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {doc.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" className="flex-1 group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                      <Link href={doc.title.includes("FDA Comment") ? "https://tigerbiosciences.com/wp-content/uploads/2025/09/Tiger_BioSciences_MPFS_and_OPPS_Comment_Letter_v2.pdf" : "#"} target={doc.title.includes("FDA Comment") ? "_blank" : undefined}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="#">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical Guides */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Technical Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized technical guides and protocols for different professional audiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalGuides.map((guide, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                    {guide.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary">{guide.audience}</Badge>
                    <Badge variant="outline">{guide.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                    <Link href="#">
                      Access Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Search and Filter */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Find Documentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Search our comprehensive documentation library by category, product, or topic.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiger-red focus:border-transparent"
                />
              </div>
              <Button className="bg-tiger-red hover:bg-tiger-red-dark text-white px-8">
                Search
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="cursor-pointer hover:bg-tiger-red hover:text-white">All Categories</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-tiger-red hover:text-white">Product Docs</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-tiger-red hover:text-white">Regulatory</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-tiger-red hover:text-white">Quality</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-tiger-red hover:text-white">Training</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Need Specific Documentation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our technical team can provide 
            customized documentation and support for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Request Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-companies">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
