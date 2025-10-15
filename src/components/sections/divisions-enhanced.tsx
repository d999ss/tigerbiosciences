"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const divisions = [
  {
    title: "Tiger BioSciences – RegenTX Division",
    subtitle: "Tissue Science Redefined",
    description: "RegenTX leads in tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency. Scientifically driven methods and deep domain expertise set new benchmarks in the field.",
    logo: "/assets/images/06/tiger_regentx.png",
    companies: [
      { name: "RegenTX", logo: "/assets/images/08/regenTX_box_left.png", href: "/our-companies/regentx/", description: "Advanced tissue processing" },
      { name: "RegenTX Labs", logo: "/assets/images/08/regenTX_Labs_box_right.png", href: "/our-companies/regentx-labs/", description: "Research & development" },
      { name: "Birth Tissue Recovery", logo: "/assets/images/08/btr_logo_boxed_left.png", href: "/our-companies/biocare/", description: "Tissue donation focus" },
      { name: "BioCare", logo: "/assets/images/08/bioCare_box_right.png", href: "/our-companies/biocare/", description: "Holistic solutions" },
    ],
    stats: { fdaApprovals: "8+", countries: "15+", products: "12+" }
  },
  {
    title: "Tiger Wound Care",
    subtitle: "Advanced CAMP Solutions for Complex Wounds",
    description: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds. Innovative research and development drive technologies suitable for all care settings with clinically validated outcomes.",
    logo: "/assets/images/06/tiger_wound_care_logo.png",
    companies: [
      { name: "Tiger Wound Care", logo: "/assets/images/08/tiger_wound_care_box_left.png", href: "https://tigerwoundcare.com/", description: "FDA-approved solutions", external: true },
      { name: "Extremity Care", logo: "/assets/images/08/extremitycare_box_right.png", href: "https://extremitycare.com", description: "Specialized extremity care", external: true },
      { name: "Encore Surgical Supplies", logo: "/assets/images/09/encore_boxed_left.png", href: "/our-companies/encore-surgical-dressings/", description: "Premium dressings" },
    ],
    stats: { fdaApprovals: "12+", countries: "25+", products: "18+" }
  },
  {
    title: "Tiger Aesthetics",
    subtitle: "Shaping the Future of Aesthetics",
    description: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Each product is designed to meet personalized needs and maximize clinical results with advanced CAMP technologies.",
    logo: "/assets/images/06/TigerAestheticsCircleColor.jpg",
    companies: [
      { name: "Sientra", logo: "/assets/images/08/sientra_box_left.png", href: "/our-companies/sientra/", description: "Breast implants & expanders" },
      { name: "BioCreations Medical", logo: "/assets/images/08/biocreations_boxed_right.png", href: "/our-companies/biocreations/", description: "Innovative technologies" },
      { name: "Revelle Aesthetics Inc", logo: "/assets/images/08/revelle_boxed_left.png", href: "/our-companies/revelle-aesthetics/", description: "Advanced treatments" },
      { name: "Suneva", logo: "/assets/images/08/suneva_box_right.png", href: "/our-companies/suneva/", description: "Facial aesthetics" },
    ],
    stats: { fdaApprovals: "15+", countries: "20+", products: "25+" }
  },
  {
    title: "Tiger BioSciences International",
    subtitle: "Global Access to Advanced Cell & Tissue Technologies",
    description: "Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue products. Based in Germany, with a focus on regulatory excellence and international partnerships across borders and care systems.",
    logo: "/assets/images/06/tiger_international_logo.png",
    companies: [
      { name: "Lizard Health", logo: "/assets/images/08/lizard_box_left.png", href: "/our-companies/lizard-health-technology/", description: "Quality management" },
      { name: "Airway Medix S.A.", logo: "/assets/images/08/airway_medix_boxed_right.png", href: "/our-companies/airway-medix/", description: "International distribution" },
    ],
    stats: { fdaApprovals: "5+", countries: "30+", products: "8+" }
  },
  {
    title: "Tiger Production & Services",
    subtitle: "Medical Device Engineering for Tiger Innovation",
    description: "Tiger Production & Services handles engineering projects for medical devices. In-house expertise covers concept, prototyping, validation, and manufacturing with precision, quality, and regulatory compliance in device development.",
    logo: "/assets/images/06/tiger_production_services.jpg",
    companies: [],
    stats: { fdaApprovals: "3+", countries: "10+", products: "5+" }
  }
];

export function DivisionsEnhanced() {
  return (
    <Section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-tiger text-headline text-tiger-red mb-6">
            Our Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive portfolio of specialized companies working together to advance 
            medical technology and deliver exceptional outcomes across multiple domains.
          </p>
        </div>

        <div className="space-y-20">
          {divisions.map((division, index) => (
            <div key={division.title} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={division.logo}
                        alt={division.title}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                      <div>
                        <CardTitle className="font-tiger text-tiger-red text-title">
                          {division.title}
                        </CardTitle>
                        <p className="text-subtitle text-muted-foreground">
                          {division.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-tiger-red">{division.stats.fdaApprovals}</div>
                        <div className="text-xs text-muted-foreground">FDA Approvals</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-tiger-red">{division.stats.countries}</div>
                        <div className="text-xs text-muted-foreground">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-tiger-red">{division.stats.products}</div>
                        <div className="text-xs text-muted-foreground">Products</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-muted-foreground mb-6">
                      {division.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/our-companies">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-center">
                  <Image
                    src={division.logo}
                    alt={division.title}
                    width={200}
                    height={200}
                    className="mx-auto mb-8"
                  />
                  
                  {/* Company Grid */}
                  {division.companies.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {division.companies.map((company) => (
                        <Card key={company.name} className="group hover:shadow-lg transition-shadow p-4">
                          <CardContent className="p-0 text-center">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={80}
                              height={60}
                              className="mx-auto mb-3 group-hover:scale-105 transition-transform"
                            />
                            <h4 className="text-sm font-semibold text-foreground mb-1">
                              {company.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-3">
                              {company.description}
                            </p>
                            <Button asChild variant="ghost" size="sm" className="h-8">
                              <Link 
                                href={company.href}
                                {...(company.external && { target: "_blank", rel: "noopener noreferrer" })}
                              >
                                {company.external ? <ExternalLink className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
