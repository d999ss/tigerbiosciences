import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <div className="space-y-2">
              <Link href="/our-companies/" className="block hover:text-tiger-red transition-colors">
                Our Companies
              </Link>
              <Link href="/career/" className="block hover:text-tiger-red transition-colors">
                Career
              </Link>
              <Link href="/contact/" className="block hover:text-tiger-red transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/tiger-biosciences-llc/"
                target="_blank"
                className="hover:text-tiger-red transition-colors"
                legacyBehavior>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Copyright Tiger BioSciences. Realized by{" "}
              <Link href="https://cloud54.eu" className="hover:text-tiger-red transition-colors">
                Cloud54
              </Link>
              .
            </p>
            <div className="flex space-x-6">
              <Link href="/legal-disclaimer" className="text-sm text-gray-400 hover:text-tiger-red transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="/terms-conditions/" className="text-sm text-gray-400 hover:text-tiger-red transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
