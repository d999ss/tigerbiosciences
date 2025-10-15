"use client";

import { Section } from "@/components/ui/section";
import { Globe, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: <Globe className="h-8 w-8 text-tiger-red" />,
    title: "Global Reach",
    description: "Serving healthcare providers in 30+ countries with our comprehensive portfolio of regenerative medicine solutions."
  },
  {
    icon: <Shield className="h-8 w-8 text-tiger-red" />,
    title: "FDA Approved",
    description: "Over 25 FDA approvals and regulatory clearances across our portfolio companies, ensuring the highest quality standards."
  },
  {
    icon: <Zap className="h-8 w-8 text-tiger-red" />,
    title: "Innovation First",
    description: "Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications."
  },
  {
    icon: <Users className="h-8 w-8 text-tiger-red" />,
    title: "Expert Leadership",
    description: "150+ years of combined executive experience driving innovation in medical technology and tissue processing."
  }
];

export function WelcomeEnhanced() {
  return (
    <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-tiger text-headline text-tiger-red mb-6">
            Welcome to Tiger BioSciences
          </h2>
          <div className="space-y-8">
            <p className="text-body-large text-muted-foreground">
              Tiger BioSciences is a pioneering leader in regenerative medicine, established in 2023 and headquartered in San Antonio, Texas. 
              We specialize in cellular, acellular, and matrix-like products (CAMPS), advancing wound care, soft tissue reconstruction, and aesthetics.
            </p>
            <p className="text-body-large text-muted-foreground">
              Our distinct advantage lies in our fully integrated approach—we oversee every stage of our products, from donor screening and 
              tissue collection to research and development, manufacturing, and distribution. This comprehensive model ensures unparalleled 
              quality, accountability, and confidence for both clinicians and patients.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

