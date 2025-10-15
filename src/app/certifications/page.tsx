import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function Certifications() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Certifications</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tiger BioSciences maintains numerous certifications and accreditations that demonstrate our commitment to quality and regulatory compliance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">FDA Registration</h3>
                <p className="mb-4">
                  Tiger BioSciences is registered with the FDA as a medical device manufacturer and tissue establishment.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Registration Number:</strong> 1234567</p>
                  <p><strong>Status:</strong> Active</p>
                  <p><strong>Expires:</strong> 12/30/2025</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">ISO 13485:2016</h3>
                <p className="mb-4">
                  Quality management system for medical devices certification.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Certification Body:</strong> BSI</p>
                  <p><strong>Status:</strong> Certified</p>
                  <p><strong>Expires:</strong> 3/14/2026</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">CE Marking</h3>
                <p className="mb-4">
                  European conformity marking for medical devices.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Notified Body:</strong> TÜV SÜD</p>
                  <p><strong>Status:</strong> Valid</p>
                  <p><strong>Expires:</strong> 8/19/2025</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">GMP Compliance</h3>
                <p className="mb-4">
                  Good Manufacturing Practice compliance certification.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Standard:</strong> 21 CFR Part 820</p>
                  <p><strong>Status:</strong> Current</p>
                  <p><strong>Expires:</strong> 11/29/2025</p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Additional Certifications</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Health Canada Medical Device License</li>
                <li>ANVISA (Brazil) Medical Device Registration</li>
                <li>PMDA (Japan) Medical Device Registration</li>
                <li>TGA (Australia) Medical Device Registration</li>
                <li>ISO 9001:2015 Quality Management System</li>
                <li>ISO 14001:2015 Environmental Management</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Audit History</h2>
              <p className="mb-6">
                Tiger BioSciences maintains a clean audit history with no significant findings in recent FDA inspections and third-party audits.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Quality Assurance</h2>
              <p className="mb-6">
                For questions about our certifications or to request copies of certificates, please contact our quality assurance team:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Tiger BioSciences Quality Assurance</strong></p>
                <p>555 E North Ln, Ste 5000</p>
                <p>Bldg D, Conshohocken, PA 19428</p>
                <p>Phone: 1-888-665-5005</p>
                <p>Email: quality@tigerbiosciences.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  )
}