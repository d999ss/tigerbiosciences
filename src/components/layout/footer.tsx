import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, Linkedin, FileText, Users, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full">
        <img 
          src="/assets/images/07/new_footer_divider.svg" 
          alt="Footer divider" 
          className="w-full h-auto"
        />
      </div>
      
      {/* CMS CTA Button */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex justify-center">
          <Button 
            asChild
            className="bg-tiger-red hover:bg-tiger-red-dark text-white px-6 py-3 text-sm font-medium"
          >
            <Link 
              href="https://tigerbiosciences.com/wp-content/uploads/2025/09/Tiger_BioSciences_MPFS_and_OPPS_Comment_Letter_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="mr-2 h-4 w-4" />
              Review Tiger BioSciences' comments on CMS's proposed Physician Fee Schedule rules
            </Link>
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/images/01/tiger_logo-v2.png"
              alt="Tiger BioSciences"
              width={120}
              height={120}
              className="h-24 w-auto"
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+18886655005" className="hover:text-tiger-red transition-colors">
                  1-888-665-5005
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@tigerbiosciences.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>555 E North Ln, Ste 5000</div>
                  <div>Bldg D</div>
                  <div>Conshohocken, PA 19428</div>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-tiger-red">About</h3>
            <div className="space-y-3">
              <Link href="/our-companies/" className="block hover:text-tiger-red transition-colors flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Our Companies
              </Link>
              <Link href="/career/" className="block hover:text-tiger-red transition-colors flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Career
              </Link>
              <Link href="/contact/" className="block hover:text-tiger-red transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-tiger-red">Our Solutions</h3>
            <div className="space-y-2">
              <Link href="https://tigerbiosciences.com/our-companies/wound-care/" className="block hover:text-tiger-red transition-colors text-sm">
                Wound Care & Pain Management
              </Link>
              <Link href="https://tigerbiosciences.com/our-companies/tissue-processing/" className="block hover:text-tiger-red transition-colors text-sm">
                Tissue R&D, Processing & Recovery
              </Link>
              <Link href="https://tigerbiosciences.com/our-companies/aesthetics/" className="block hover:text-tiger-red transition-colors text-sm">
                Soft Tissue Recon & Aesthetics
              </Link>
              <Link href="https://tigerbiosciences.com/our-companies/international/" className="block hover:text-tiger-red transition-colors text-sm">
                Tiger International
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-tiger-red">Connect</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/tiger-biosciences-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tiger-red transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
              <div className="text-sm text-gray-300">
                <p className="mb-2">We welcome potential partnership opportunities.</p>
                <p>For inquiries, please contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Copyright Tiger BioSciences. Realized by{" "}
              <Link href="https://cloud54.eu" className="hover:text-tiger-red transition-colors">
                Cloud54
              </Link>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/legal-disclaimer" className="text-sm text-gray-400 hover:text-tiger-red transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="/terms-conditions/" className="text-sm text-gray-400 hover:text-tiger-red transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy/" className="text-sm text-gray-400 hover:text-tiger-red transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
