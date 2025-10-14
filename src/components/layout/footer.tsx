import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        {/* CMS CTA Section */}
        <div className="mb-12 text-center">
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
              Review Tiger BioSciences' comments on CMS's proposed Physician Fee Schedule rules
            </Link>
          </Button>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/images/01/tiger_logo-v2.png"
              alt="Tiger BioSciences"
              width={120}
              height={120}
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Advancing medical technology through innovative cellular, acellular, and matrix-like products (CAMPs).
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Solutions</h3>
            <div className="space-y-2">
              <Link 
                href="https://tigerbiosciences.com/our-companies/wound-care/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Wound Care & Pain Management
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/tissue-processing/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tissue R&D, Processing & Recovery
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/aesthetics/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Soft Tissue Recon & Aesthetics
              </Link>
              <Link 
                href="https://tigerbiosciences.com/our-companies/international/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tiger International
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2">
              <Link 
                href="/our-companies/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Companies
              </Link>
              <Link 
                href="/career/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Career
              </Link>
              <Link 
                href="/contact/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@tigerbiosciences.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
                <Link 
                  href="https://www.linkedin.com/company/tiger-biosciences-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground">
                555 E North Ln, Ste 5000<br />
                Bldg D, Conshohocken, PA 19428
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Tiger BioSciences. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              href="/legal-disclaimer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Legal
            </Link>
            <Link 
              href="/terms-conditions/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/privacy-policy/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}