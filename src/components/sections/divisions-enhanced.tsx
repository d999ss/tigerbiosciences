"use client";

import { Section } from "@/components/ui/section";
import { Microscope, Heart, Sparkles, Globe, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const divisions = [
  {
    title: "RegenTX Division",
    subtitle: "Tissue Science Redefined",
    description: "RegenTX leads in tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency.",
    icon: <Microscope className="w-5 h-5" />,
    stats: {
      fdaApprovals: "8+",
      countries: "15+",
      products: "12+"
    }
  },
  {
    title: "Tiger Wound Care",
    subtitle: "Advanced CAMP Solutions",
    description: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds with clinically validated outcomes.",
    icon: <Heart className="w-5 h-5" />,
    stats: {
      fdaApprovals: "12+",
      countries: "25+",
      products: "18+"
    }
  },
  {
    title: "Tiger Aesthetics",
    subtitle: "Shaping the Future of Aesthetics",
    description: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains with advanced CAMP technologies.",
    icon: <Sparkles className="w-5 h-5" />,
    stats: {
      fdaApprovals: "15+",
      countries: "20+",
      products: "25+"
    }
  },
  {
    title: "Tiger International",
    subtitle: "Global Access to Advanced Technologies",
    description: "Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue products with regulatory excellence.",
    icon: <Globe className="w-5 h-5" />,
    stats: {
      fdaApprovals: "5+",
      countries: "30+",
      products: "8+"
    }
  },
  {
    title: "Tiger Production & Services",
    subtitle: "Medical Device Engineering",
    description: "Tiger Production & Services handles engineering projects for medical devices with in-house expertise from concept to manufacturing.",
    icon: <Wrench className="w-5 h-5" />,
    stats: {
      fdaApprovals: "3+",
      countries: "10+",
      products: "5+"
    }
  }
];

export function DivisionsEnhanced() {
  return (
    <Section className="py-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
            Our Divisions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive portfolio of specialized companies working together to advance 
            medical technology and deliver exceptional outcomes across multiple domains.
          </p>
        </div>
        
        <div className="space-y-6">
          {divisions.map((division, index) => (
            <div key={division.title} className="border-b border-slate-200 dark:border-slate-700 pb-6 last:border-b-0">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 dark:text-red-400">
                      {division.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {division.title}
                      </h3>
                      <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                        {division.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {division.description}
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{division.stats.fdaApprovals}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">FDA Approvals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{division.stats.countries}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{division.stats.products}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">Products</div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}