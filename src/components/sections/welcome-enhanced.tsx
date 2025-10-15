"use client";

import { ReactNode } from "react";
import {
  Globe,
  Shield,
  Zap,
  Users,
  Microscope,
  Heart,
  Sparkles,
  Award,
} from "lucide-react";

import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export function WelcomeEnhanced({
  title = "Everything you need. Nothing you don't.",
  items = [
    {
      title: "Global reach",
      description: "Serving healthcare providers in 30+ countries with our comprehensive portfolio of regenerative medicine solutions",
      icon: <Globe className="text-brand size-5 stroke-1" />,
    },
    {
      title: "FDA approved",
      description: "Over 25 FDA approvals and regulatory clearances across our portfolio companies, ensuring the highest quality standards",
      icon: <Shield className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Innovation first",
      description: "Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications",
      icon: <Zap className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Expert leadership",
      description: "150+ years of combined executive experience driving innovation in medical technology and tissue processing",
      icon: <Users className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Tissue science",
      description: "Advanced tissue processing and CAMP-based innovation with rigorous protocols and scientific methods",
      icon: <Microscope className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Patient care",
      description: "Comprehensive solutions for wound care, soft tissue reconstruction, and aesthetic medicine",
      icon: <Heart className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Quality assurance",
      description: "Fully integrated approach from donor screening to global distribution ensuring unparalleled quality",
      icon: <Award className="text-brand size-5 stroke-1" />,
    },
    {
      title: "Future ready",
      description: "Cutting-edge technologies and methodologies that position us at the forefront of regenerative medicine",
      icon: <Sparkles className="text-brand size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

