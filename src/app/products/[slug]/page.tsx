import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getProduct, getAllProductSlugs } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-tiger-red">{product.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {product.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {product.externalUrl ? (
                  <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                    <Link href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                      Visit Official Site
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {product.internalUrl && (
                  <Button asChild variant="outline" size="lg">
                    <Link href={product.internalUrl}>View Company Page</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="text-center">
              <Image
                src={product.heroImage}
                alt={product.title}
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Details Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">High</div>
                <div className="text-lg font-semibold mb-1">Quality</div>
                <div className="text-sm text-muted-foreground">Consistent, validated processes</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">Global</div>
                <div className="text-lg font-semibold mb-1">Access</div>
                <div className="text-sm text-muted-foreground">Available across key markets</div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-4xl font-bold text-tiger-red mb-2">Trusted</div>
                <div className="text-lg font-semibold mb-1">Outcomes</div>
                <div className="text-sm text-muted-foreground">Clinically aligned solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="py-16 bg-gray-50">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About {product.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}. Explore consistent, unified product information including key benefits, applications, and related companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Consistent design and information layout across products</li>
                  <li>Clear CTAs to company pages or official sites</li>
                  <li>Strong readability using Tiger design system tokens</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Typical Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc pl-6 space-y-2">
                  <li>Clinical use cases relevant to the product domain</li>
                  <li>Integration with tissue processing and CAMP technologies</li>
                  <li>Support for providers and research institutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}