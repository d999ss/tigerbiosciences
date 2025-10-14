import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, DollarSign, Users, Globe, Award, FileText, Calendar } from "lucide-react"
import Link from "next/link"

const financialHighlights = [
  { label: "Revenue Growth", value: "25%", period: "YoY" },
  { label: "Market Cap", value: "$2.1B", period: "Current" },
  { label: "Products Launched", value: "12", period: "2024" },
  { label: "Global Reach", value: "30+", period: "Countries" }
]

const investorResources = [
  {
    title: "Annual Report 2024",
    description: "Comprehensive overview of our financial performance and strategic initiatives",
    type: "PDF",
    date: "2025-01-15",
    icon: <FileText className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "Q4 2024 Earnings Call",
    description: "Recording and transcript of our latest quarterly earnings presentation",
    type: "Audio/Transcript",
    date: "2025-01-10",
    icon: <Calendar className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "Investor Presentation",
    description: "Strategic overview and market opportunity presentation for investors",
    type: "PDF",
    date: "2025-01-08",
    icon: <TrendingUp className="h-6 w-6 text-tiger-red" />
  },
  {
    title: "SEC Filings",
    description: "All regulatory filings and disclosures with the Securities and Exchange Commission",
    type: "SEC EDGAR",
    date: "2025-01-05",
    icon: <Award className="h-6 w-6 text-tiger-red" />
  }
]

const keyMetrics = [
  {
    title: "Revenue",
    value: "$485M",
    change: "+25%",
    period: "2024 vs 2023",
    icon: <DollarSign className="h-8 w-8 text-tiger-red" />
  },
  {
    title: "EBITDA",
    value: "$89M",
    change: "+18%",
    period: "2024 vs 2023",
    icon: <TrendingUp className="h-8 w-8 text-tiger-red" />
  },
  {
    title: "Employees",
    value: "1,247",
    change: "+12%",
    period: "2024 vs 2023",
    icon: <Users className="h-8 w-8 text-tiger-red" />
  },
  {
    title: "Global Presence",
    value: "30+",
    change: "+5",
    period: "New Markets 2024",
    icon: <Globe className="h-8 w-8 text-tiger-red" />
  }
]

export default function Investors() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
        <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
            <Badge variant="outline" className="animate-appear">
              <span className="text-muted-foreground">
                Investor Relations
              </span>
            </Badge>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
              Investors
            </h1>
            <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
              Tiger BioSciences is driving innovation in medical technology with strong financial performance 
              and strategic growth initiatives. Learn about our investment opportunity and access key 
              financial information and resources.
            </p>
          </div>
        </div>
      </Section>

      {/* Financial Highlights */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Financial Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strong financial performance driven by innovation, market expansion, and operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-tiger-red mb-2">
                  {highlight.value}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {highlight.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {highlight.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Metrics */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Key Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track our progress with key financial and operational metrics that drive long-term value creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tiger-red/10 flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-tiger-red">
                    {metric.value}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {metric.title}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm font-medium text-green-600 mb-1">
                    {metric.change}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Investor Resources */}
      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
              Investor Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access our latest financial reports, presentations, and regulatory filings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investorResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-tiger-red/10">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-tiger-red transition-colors mb-2">
                        {resource.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="secondary">{resource.type}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(resource.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-tiger-red group-hover:text-white group-hover:border-tiger-red transition-all">
                    <Link href="#">
                      Download
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact IR */}
      <Section>
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight mb-6">
            Investor Relations Contact
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            For investor inquiries, please contact our Investor Relations team. 
            We&apos;re committed to providing timely and transparent communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/contact">
                Contact IR Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/news">
                Latest News
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
