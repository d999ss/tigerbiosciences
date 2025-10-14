import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Division information mapping
const divisions = {
  'encore-surgical-dressings': {
    title: 'Encore Surgical Dressings',
    description: 'A Division of Tiger BioSciences',
    category: 'Wound Care & Pain Management',
    comingSoon: true
  },
  'tiger-aesthetics': {
    title: 'Tiger Aesthetics',
    description: 'Soft Tissue Reconstruction & Aesthetics',
    category: 'Soft Tissue Recon & Aesthetics',
    comingSoon: true
  },
  'biocreations': {
    title: 'BioCreations Medical',
    description: 'Advanced Medical Solutions',
    category: 'Soft Tissue Recon & Aesthetics',
    comingSoon: true
  },
  'revelle-aesthetics': {
    title: 'Revelle Aesthetics Inc',
    description: 'Innovative Aesthetic Solutions',
    category: 'Soft Tissue Recon & Aesthetics',
    comingSoon: true
  },
  'suneva': {
    title: 'Suneva',
    description: 'A Tiger Aesthetics™ Brand',
    category: 'Soft Tissue Recon & Aesthetics',
    comingSoon: true
  },
  'regentx': {
    title: 'RegenTX',
    description: 'Tissue Research & Development',
    category: 'Tissue R&D, Processing and Recovery',
    comingSoon: true
  },
  'regentx-labs': {
    title: 'RegenTX Labs',
    description: 'Advanced Laboratory Services',
    category: 'Tissue R&D, Processing and Recovery',
    comingSoon: true
  },
  'biocare': {
    title: 'bioCARE',
    description: 'Donor Tissue Network',
    category: 'Tissue R&D, Processing and Recovery',
    comingSoon: true
  },
  'lizard-health-technology': {
    title: 'Lizard Health Technology',
    description: 'A Part of Tiger BioSciences',
    category: 'Tiger International',
    comingSoon: true
  },
  'airway-medix': {
    title: 'Airway Medix S.A.',
    description: 'Smarter Care Solutions',
    category: 'Tiger International',
    comingSoon: true
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function DivisionPage({ params }: PageProps) {
  const division = divisions[params.slug as keyof typeof divisions]

  if (!division) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-tiger-red hover:text-tiger-red-dark mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Division Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-tiger-red-light/10 px-4 py-2 rounded-full text-tiger-red text-sm font-medium mb-4">
              {division.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {division.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {division.description}
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="bg-gradient-to-br from-tiger-red-light/5 to-tiger-red/10 rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-tiger-red rounded-full flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                We're working hard to bring you detailed information about {division.title}. 
                This page will be available soon with comprehensive details about our services, 
                products, and solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-tiger-red hover:bg-tiger-red-dark">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    Return Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              For immediate assistance, please contact us at{' '}
              <Link href="tel:+18886655005" className="text-tiger-red hover:underline">
                (+1) 888 665 5005
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

// Generate static params for all division pages
export async function generateStaticParams() {
  return Object.keys(divisions).map((slug) => ({
    slug,
  }))
}
