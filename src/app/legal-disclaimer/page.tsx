import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function LegalDisclaimer() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Legal Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Medical Information</h2>
              <p className="mb-6">
                The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Product Information</h2>
              <p className="mb-6">
                Tiger BioSciences products are regulated medical devices. Product information on this website is not intended to replace the instructions for use or other product documentation. Please consult the appropriate product labeling and instructions for use for complete information.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">No Warranty</h2>
              <p className="mb-6">
                Tiger BioSciences makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of the information contained on this website. We reserve the right to modify or discontinue any aspect of this website at any time without notice.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                Tiger BioSciences shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or the information contained herein.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-6">
                For questions regarding this legal disclaimer, please contact us at:
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

