import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, FileText, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-16">
        {/* CMS CTA Section */}
        <div className="mb-16 text-center">
          <Button 
            asChild
            variant="outline"
            className="border-tiger-red text-tiger-red hover:bg-tiger-red hover:text-white"
          >
            <Link 
              href="https://tigerbiosciences.com/wp-content/uploads/2025/09/Tiger_BioSciences_MPFS_and_OPPS_Comment_Letter_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Review Tiger BioSciences&apos; comments on CMS&apos;s proposed Physician Fee Schedule rules
            </Link>
          </Button>
        </div>

        <Separator className="mb-16" />

        {/* Main Footer Content - Expanded like Vercel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/assets/images/01/tiger_logo-v2.png"
              alt="Tiger BioSciences"
              width={120}
              height={120}
              className="h-20 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing medical technology through innovative cellular, acellular, and matrix-like products (CAMPs). 
              We are the first of its kind in comprehensive tissue processing and medical device innovation.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/company/tiger-biosciences-llc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold">Products</h3>
            <div className="space-y-3">
              <Link 
                href="https://tigerbiosciences.com/our-companies/wound-care/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Wound Care Solutions
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tissue-processing/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tissue Processing
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/aesthetics/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Aesthetic Solutions
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/international/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                International Products
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <div className="space-y-3">
              <Link 
                href="https://tigerbiosciences.com/our-companies/wound-care/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pain Management
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tissue-processing/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                R&D Services
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/aesthetics/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Soft Tissue Reconstruction
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/international/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Global Distribution
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-3">
              <Link 
                href="/technology/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Technology
              </Link>
              <Link 
                href="/career/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Career Opportunities
              </Link>
              <Link 
                href="/contact/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/our-companies/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Companies
              </Link>
              <Link 
                href="/partnerships/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Partnerships
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-3">
              <Link 
                href="/about/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/leadership/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Leadership
              </Link>
              <Link 
                href="/news/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                News & Updates
              </Link>
              <Link 
                href="/investors/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Investors
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Link 
                  href="tel:+18886655005" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  1-888-665-5005
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@tigerbiosciences.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <div>555 E North Ln, Ste 5000</div>
                  <div>Bldg D, Conshohocken, PA 19428</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Divisions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Divisions</h3>
            <div className="space-y-3">
              <Link 
                href="https://tigerbiosciences.com/our-companies/regenTX/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                RegenTX
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tiger-wound-care/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tiger Wound Care
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tiger-aesthetics/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tiger Aesthetics
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tiger-production/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tiger Production & Services
              </Link>
            </div>
          </div>

          {/* Quality & Compliance */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quality & Compliance</h3>
            <div className="space-y-3">
              <Link 
                href="/quality/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Quality Assurance
              </Link>
              <Link 
                href="/regulatory/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Regulatory Compliance
              </Link>
              <Link 
                href="/certifications/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Certifications
              </Link>
              <Link 
                href="/safety/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Safety Standards
              </Link>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-sm text-muted-foreground">
              © 2025 Tiger BioSciences. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span>FDA Registered</span>
              <span>•</span>
              <span>ISO Certified</span>
              <span>•</span>
              <span>GMP Compliant</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/legal-disclaimer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal Disclaimer
            </Link>
            <Link 
              href="/terms-conditions/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link 
              href="/privacy-policy/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/sitemap/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}