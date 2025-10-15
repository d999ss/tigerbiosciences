import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <Section>
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-6">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, and other contact information.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal obligations</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
              <p className="mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy or as required by law.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-6">
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information below.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this privacy policy, please contact us at:
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

