import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function Regulatory() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Regulatory Compliance</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tiger BioSciences maintains the highest standards of regulatory compliance across all our operations and products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">FDA Compliance</h3>
                <p className="mb-4">
                  All Tiger BioSciences products are manufactured in compliance with FDA regulations and quality system requirements for medical device manufacturing.
                </p>
                <ul className="list-disc pl-6">
                  <li>21 CFR Part 820 Quality System Regulation</li>
                  <li>FDA Registration and Listing</li>
                  <li>Pre-market Notification (510(k))</li>
                  <li>Post-market Surveillance</li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">International Standards</h3>
                <p className="mb-4">
                  Our products meet international regulatory requirements for medical devices and tissue products.
                </p>
                <ul className="list-disc pl-6">
                  <li>ISO 13485:2016 Quality Management</li>
                  <li>CE Marking (European Union)</li>
                  <li>Health Canada Licensing</li>
                  <li>ANVISA (Brazil)</li>
                </ul>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Regulatory Affairs Team</h2>
              <p className="mb-6">
                Our dedicated regulatory affairs team ensures ongoing compliance with evolving regulations and maintains all necessary approvals and certifications.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Quality Management System</h2>
              <p className="mb-6">
                Tiger BioSciences operates under a comprehensive quality management system that meets or exceeds all applicable regulatory requirements.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Regulatory Affairs</h2>
              <p className="mb-6">
                For regulatory questions or documentation requests, please contact our regulatory affairs team:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Tiger BioSciences Regulatory Affairs</strong></p>
                <p>555 E North Ln, Ste 5000</p>
                <p>Bldg D, Conshohocken, PA 19428</p>
                <p>Phone: 1-888-665-5005</p>
                <p>Email: regulatory@tigerbiosciences.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  )
}