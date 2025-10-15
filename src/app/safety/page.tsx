import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function Safety() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Safety Standards</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tiger BioSciences is committed to maintaining the highest safety standards in all our operations, from tissue processing to product delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Tissue Safety</h3>
                <p className="mb-4">
                  Comprehensive donor screening and testing protocols ensure the safety of all tissue products.
                </p>
                <ul className="list-disc pl-6">
                  <li>Rigorous donor screening</li>
                  <li>Infectious disease testing</li>
                  <li>Sterilization protocols</li>
                  <li>Traceability systems</li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Manufacturing Safety</h3>
                <p className="mb-4">
                  Controlled manufacturing environments with strict safety protocols and quality controls.
                </p>
                <ul className="list-disc pl-6">
                  <li>Clean room environments</li>
                  <li>Environmental monitoring</li>
                  <li>Personnel training</li>
                  <li>Equipment validation</li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Product Safety</h3>
                <p className="mb-4">
                  Comprehensive testing and validation ensure product safety and efficacy.
                </p>
                <ul className="list-disc pl-6">
                  <li>Biocompatibility testing</li>
                  <li>Sterility testing</li>
                  <li>Performance validation</li>
                  <li>Post-market surveillance</li>
                </ul>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="mb-4">
                  Adherence to all applicable safety regulations and standards.
                </p>
                <ul className="list-disc pl-6">
                  <li>FDA safety requirements</li>
                  <li>ISO safety standards</li>
                  <li>International regulations</li>
                  <li>Industry best practices</li>
                </ul>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Safety Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">0</div>
                  <div className="text-sm text-muted-foreground">Product Recalls</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">99.9%</div>
                  <div className="text-sm text-muted-foreground">Safety Record</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">0</div>
                  <div className="text-sm text-muted-foreground">Safety Incidents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tiger-red">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mb-4">Adverse Event Reporting</h2>
              <p className="mb-6">
                Tiger BioSciences maintains a comprehensive adverse event reporting system in compliance with FDA requirements. All adverse events are investigated thoroughly and reported to regulatory authorities as required.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Safety Team</h2>
              <p className="mb-6">
                For safety-related questions or to report an adverse event, please contact our safety team:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Tiger BioSciences Safety Team</strong></p>
                <p>555 E North Ln, Ste 5000</p>
                <p>Bldg D, Conshohocken, PA 19428</p>
                <p>Phone: 1-888-665-5005</p>
                <p>Email: safety@tigerbiosciences.com</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
    </main>
  )
}