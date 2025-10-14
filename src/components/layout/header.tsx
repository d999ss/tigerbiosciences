"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    title: "Wound Care Solutions",
    items: [
      { title: "Tiger Wound Care", href: "https://tigerwoundcare.com/", description: "Advanced CAMP Solutions for Complex Wounds", external: true },
      { title: "Extremity Care", href: "https://extremitycare.com", description: "Specialized extremity wound care", external: true },
      { title: "Encore Surgical Dressings", href: "https://tigerbiosciences.com/our-companies/encore-surgical-dressings/", description: "Premium surgical dressing solutions", external: true },
    ],
  },
  {
    title: "Tissue Processing",
    items: [
      { title: "RegenTX", href: "https://tigerbiosciences.com/our-companies/regentx/", description: "Tissue Science Redefined", external: true },
      { title: "RegenTX Labs", href: "https://tigerbiosciences.com/our-companies/regentx-labs/", description: "Advanced tissue research and development", external: true },
      { title: "Birth Tissue Recovery", href: "https://tigerbiosciences.com/our-companies/biocare/", description: "Birth tissue processing and recovery", external: true },
      { title: "bioCARE", href: "https://tigerbiosciences.com/our-companies/biocare/", description: "Comprehensive tissue care solutions", external: true },
    ],
  },
  {
    title: "Aesthetic Solutions",
    items: [
      { title: "Tiger Aesthetics", href: "https://tigerbiosciences.com/our-companies/tiger-aesthetics/", description: "Shaping the Future of Aesthetics", external: true },
      { title: "Sientra", href: "https://sientra.com", description: "Premium aesthetic solutions", external: true },
      { title: "BioCreations", href: "https://tigerbiosciences.com/our-companies/biocreations/", description: "Innovative aesthetic technologies", external: true },
      { title: "Revelle Aesthetics", href: "https://tigerbiosciences.com/our-companies/revelle-aesthetics/", description: "Advanced aesthetic treatments", external: true },
      { title: "Suneva", href: "https://tigerbiosciences.com/our-companies/suneva/", description: "Cutting-edge aesthetic products", external: true },
    ],
  },
]

const resources = [
  {
    title: "Company",
    items: [
      { title: "Our Companies", href: "/our-companies", description: "Explore our portfolio of companies" },
      { title: "Leadership", href: "/leadership", description: "Meet our executive team" },
      { title: "News & Updates", href: "/news", description: "Latest company news and updates" },
      { title: "Investors", href: "/investors", description: "Investor relations and information" },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
      { title: "Career Opportunities", href: "/career", description: "Join our growing team" },
      { title: "Partnerships", href: "/partnerships", description: "Partner with Tiger BioSciences" },
      { title: "Quality & Compliance", href: "/quality", description: "Our commitment to quality" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Regulatory Information", href: "/regulatory", description: "FDA and regulatory compliance" },
      { title: "Certifications", href: "/certifications", description: "Industry certifications and standards" },
      { title: "Safety Standards", href: "/safety", description: "Safety protocols and procedures" },
      { title: "Documentation", href: "/docs", description: "Technical documentation and guides" },
    ],
  },
]

const solutions = [
  {
    title: "Use Cases",
    items: [
      { title: "Wound Care Applications", href: "/wound-care-applications", description: "Advanced wound care solutions" },
      { title: "Aesthetic Procedures", href: "/aesthetic-procedures", description: "Comprehensive aesthetic treatments" },
      { title: "Tissue Processing", href: "/tissue-processing", description: "Professional tissue processing services" },
      { title: "Research & Development", href: "/research-development", description: "Innovative R&D solutions" },
    ],
  },
  {
    title: "Industries",
    items: [
      { title: "Healthcare Providers", href: "/healthcare-providers", description: "Solutions for healthcare professionals" },
      { title: "Research Institutions", href: "/research-institutions", description: "Supporting research and academia" },
      { title: "Medical Device Companies", href: "/medical-device-companies", description: "Partnership opportunities" },
    ],
  },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/images/01/tiger_horizontal-v2.png"
              alt="Tiger BioSciences"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[80vw] max-w-[600px] gap-3 p-4 grid-cols-1 md:grid-cols-3">
                    {products.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h4 className="font-semibold text-tiger-red">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                                {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                                {item.external && <span className="ml-1 text-xs">↗</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[80vw] max-w-[600px] gap-3 p-4 grid-cols-1 md:grid-cols-3">
                    {resources.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h4 className="font-semibold text-tiger-red">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[80vw] max-w-[600px] gap-3 p-4 grid-cols-1 md:grid-cols-2">
                    {solutions.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h4 className="font-semibold text-tiger-red">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-muted-foreground">{item.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              
              <div className="px-3 py-2">
                <div className="text-base font-medium mb-2">Products</div>
                <div className="pl-4 space-y-1">
                  {products.map((section) => (
                    <div key={section.title} className="mb-3">
                      <div className="text-sm font-semibold text-tiger-red mb-1">{section.title}</div>
                      <div className="pl-2 space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm hover:text-tiger-red"
                            onClick={() => setIsMobileMenuOpen(false)}
                            {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}>
                            {item.title}
                            {item.external && <span className="ml-1 text-xs">↗</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-base font-medium mb-2">Resources</div>
                <div className="pl-4 space-y-1">
                  {resources.map((section) => (
                    <div key={section.title} className="mb-3">
                      <div className="text-sm font-semibold text-tiger-red mb-1">{section.title}</div>
                      <div className="pl-2 space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm hover:text-tiger-red"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="text-base font-medium mb-2">Solutions</div>
                <div className="pl-4 space-y-1">
                  {solutions.map((section) => (
                    <div key={section.title} className="mb-3">
                      <div className="text-sm font-semibold text-tiger-red mb-1">{section.title}</div>
                      <div className="pl-2 space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-sm hover:text-tiger-red"
                            onClick={() => setIsMobileMenuOpen(false)}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
