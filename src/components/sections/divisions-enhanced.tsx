"use client";

import { Section } from "@/components/ui/section";
import { Tile, TileVisual, TileTitle, TileDescription, TileContent, TileLink } from "@/components/ui/tile";
import { Microscope, Heart, Sparkles, Globe, Wrench } from "lucide-react";
import Image from "next/image";

const divisions = [
  {
    title: "RegenTX Division",
    subtitle: "Tissue Science Redefined",
    description: "RegenTX leads in tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency.",
    logo: "/assets/images/06/tiger_regentx.png",
    icon: <Microscope className="text-muted-foreground size-6 stroke-1" />,
    stats: { fdaApprovals: "8+", countries: "15+", products: "12+" },
    size: "col-span-12 md:col-span-6 lg:col-span-5"
  },
  {
    title: "Tiger Wound Care",
    subtitle: "Advanced CAMP Solutions",
    description: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds with clinically validated outcomes.",
    logo: "/assets/images/06/tiger_wound_care_logo.png",
    icon: <Heart className="text-muted-foreground size-6 stroke-1" />,
    stats: { fdaApprovals: "12+", countries: "25+", products: "18+" },
    size: "col-span-12 md:col-span-6 lg:col-span-7"
  },
  {
    title: "Tiger Aesthetics",
    subtitle: "Shaping the Future of Aesthetics",
    description: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains with advanced CAMP technologies.",
    logo: "/assets/images/06/TigerAestheticsCircleColor.jpg",
    icon: <Sparkles className="text-muted-foreground size-6 stroke-1" />,
    stats: { fdaApprovals: "15+", countries: "20+", products: "25+" },
    size: "col-span-12 md:col-span-6 lg:col-span-7"
  },
  {
    title: "Tiger International",
    subtitle: "Global Access to Advanced Technologies",
    description: "Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue products with regulatory excellence.",
    logo: "/assets/images/06/tiger_international_logo.png",
    icon: <Globe className="text-muted-foreground size-6 stroke-1" />,
    stats: { fdaApprovals: "5+", countries: "30+", products: "8+" },
    size: "col-span-12 md:col-span-6 lg:col-span-5"
  },
  {
    title: "Tiger Production & Services",
    subtitle: "Medical Device Engineering",
    description: "Tiger Production & Services handles engineering projects for medical devices with in-house expertise from concept to manufacturing.",
    logo: "/assets/images/06/tiger_production_services.jpg",
    icon: <Wrench className="text-muted-foreground size-6 stroke-1" />,
    stats: { fdaApprovals: "3+", countries: "10+", products: "5+" },
    size: "col-span-12 md:col-span-6 lg:col-span-5"
  }
];

export function DivisionsEnhanced() {
  return (
    <Section className="py-16">
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
          Our Divisions
        </h2>
        <p className="text-md text-muted-foreground max-w-[840px] text-center font-medium text-balance sm:text-xl">
          A comprehensive portfolio of specialized companies working together to advance 
          medical technology and deliver exceptional outcomes across multiple domains.
        </p>
        
        <div className="grid grid-cols-12 gap-4">
          {divisions.map((division) => (
            <Tile key={division.title} className={division.size}>
              <TileLink />
              <TileContent>
                {division.icon}
                <TileTitle>{division.title}</TileTitle>
                <TileDescription>
                  <p className="text-sm text-muted-foreground mb-4">
                    {division.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {division.description}
                  </p>
                  <div className="flex gap-4 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{division.stats.fdaApprovals}</div>
                      <div className="text-muted-foreground">FDA Approvals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{division.stats.countries}</div>
                      <div className="text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-tiger-red">{division.stats.products}</div>
                      <div className="text-muted-foreground">Products</div>
                    </div>
                  </div>
                </TileDescription>
              </TileContent>
              <TileVisual>
                <div className="min-h-[200px] w-full flex items-center justify-center">
                  <Image
                    src={division.logo}
                    alt={division.title}
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                </div>
              </TileVisual>
            </Tile>
          ))}
        </div>
      </div>
    </Section>
  );
}
