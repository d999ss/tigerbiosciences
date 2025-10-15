"use client";

import { ReactNode } from "react";
import Image from "next/image";
import {
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  stats?: string;
}

interface FeaturesProps {
  title?: string;
  subtitle?: string;
  features?: FeatureProps[];
  className?: string;
}

export function WelcomeEnhanced({
  title = "Comprehensive Solutions for Modern Healthcare",
  subtitle = "From research to clinical application, we provide end-to-end regenerative medicine solutions that transform patient outcomes.",
  features = [
    {
      title: "Global Reach",
      description: "Serving healthcare providers in 30+ countries with our comprehensive portfolio of regenerative medicine solutions, backed by extensive clinical data and regulatory approvals.",
      icon: <Globe className="w-6 h-6" />,
      image: "/assets/images/biotech/team-collaboration.jpg",
      stats: "30+ Countries"
    },
    {
      title: "FDA Approved Excellence",
      description: "Over 25 FDA approvals and regulatory clearances across our portfolio companies, ensuring the highest quality standards and patient safety in every product we deliver.",
      icon: <Shield className="w-6 h-6" />,
      image: "/assets/images/biotech/research-lab.jpg",
      stats: "25+ FDA Approvals"
    },
    {
      title: "Innovation Leadership",
      description: "Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications that set new industry standards.",
      icon: <Zap className="w-6 h-6" />,
      image: "/assets/images/biotech/hero-lab.jpg",
      stats: "13+ Portfolio Companies"
    },
    {
      title: "Expert Leadership",
      description: "150+ years of combined executive experience driving innovation in medical technology and tissue processing, with deep expertise across all aspects of regenerative medicine.",
      icon: <Users className="w-6 h-6" />,
      image: "/assets/images/biotech/clinical-lab.jpg",
      stats: "150+ Years Experience"
    },
  ],
  className,
}: FeaturesProps) {
  return (
    <Section className={`py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-full text-red-700 dark:text-red-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            Our Capabilities
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            {title}
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/30">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Stats Badge */}
                {feature.stats && (
                  <div className="absolute top-6 right-6">
                    <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/30">
                      {feature.stats}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button 
            variant="glow" 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold"
          >
            Explore All Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </Section>
  );
}