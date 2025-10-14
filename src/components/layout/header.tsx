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
import { Menu, X, Phone, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    title: "Wound Care & Pain Management",
    items: [
      { title: "Tiger Wound Care", href: "https://tigerwoundcare.com/" },
      { title: "Extremity Care", href: "https://extremitycare.com" },
      { title: "Encore Surgical Dressings", href: "/our-divisions/encore-surgical-dressings/" },
    ],
  },
  {
    title: "Soft Tissue Recon & Aesthetics",
    items: [
      { title: "Tiger Aesthetics", href: "/our-divisions/tiger-aesthetics/" },
      { title: "Sientra", href: "/our-divisions/sientra/" },
      { title: "BioCreations", href: "/our-divisions/biocreations/" },
      { title: "Revelle Aesthetics", href: "/our-divisions/revelle-aesthetics/" },
      { title: "Suneva", href: "/our-divisions/suneva/" },
    ],
  },
  {
    title: "Tissue R&D, Processing and Recovery",
    items: [
      { title: "RegenTX", href: "/our-divisions/regentx/" },
      { title: "RegenTX Labs", href: "/our-divisions/regentx-labs/" },
      { title: "Birth Tissue Recovery", href: "/our-divisions/biocare/" },
      { title: "bioCARE", href: "/our-divisions/biocare/" },
    ],
  },
  {
    title: "Tiger International",
    items: [
      { title: "Lizard Health Technology", href: "/our-divisions/lizard-health-technology/" },
      { title: "Airway Medix", href: "/our-divisions/airway-medix/" },
    ],
  },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="bg-tiger-red text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>555 E North Ln, Ste 5000, Bldg D, Conshohocken, PA 19428</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <Link href="tel:+18886655005" className="hover:underline">
                (+1) 888 665 5005
              </Link>
            </div>
            <Button size="sm" className="bg-white text-tiger-red hover:bg-gray-100">
              <Link href="/contact">Let&apos;s Get Together</Link>
            </Button>
            <Link href="https://www.linkedin.com/company/tiger-biosciences-llc/" target="_blank">
              <Linkedin className="h-5 w-5 hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
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

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] gap-3 p-4 md:grid-cols-2">
                    {solutions.map((section) => (
                      <div key={section.title} className="space-y-2">
                        <h4 className="font-semibold text-tiger-red">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                              >
                                {item.title}
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
                  <Link href="/career" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Career
                  </Link>
                </NavigationMenuLink>
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
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium mb-2">Our Solutions</div>
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
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/career"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
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
  )
}
