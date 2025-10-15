import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function TermsConditions() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="mb-6">
                Permission is granted to temporarily download one copy of the materials on Tiger BioSciences&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
              <p className="mb-6">
                The materials on Tiger BioSciences&apos; website are provided on an &apos;as is&apos; basis. Tiger BioSciences makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
              <p className="mb-6">
                In no event shall Tiger BioSciences or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tiger BioSciences&apos; website, even if Tiger BioSciences or a Tiger BioSciences authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-6">
                For questions regarding these terms and conditions, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Tiger BioSciences</strong></p>
                <p>555 E North Ln, Ste 5000</p>
                <p>Bldg D, Conshohocken, PA 19428</p>
                <p>Phone: 1-888-665-5005</p>
                <p>Email: info@tigerbiosciences.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  )
}

