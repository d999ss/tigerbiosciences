import {
  Shield,
  Globe,
  Zap,
  Users,
  Microscope,
  Heart,
  Sparkles,
  Award,
  ArrowRight,
  Lock,
  Network,
  Settings,
  Database,
  Cloud,
  Webhook,
} from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/launch-ui-pro/sections/hero/illustration";
import Stats from "@/launch-ui-pro/sections/stats/grid-boxed";
import Logos from "@/launch-ui-pro/sections/logos/grid-6";
import BentoGrid from "@/launch-ui-pro/sections/bento-grid/3-rows-top";
import FeatureIllustrationBottom from "@/launch-ui-pro/sections/feature/illustration-bottom";
import Items from "@/launch-ui-pro/sections/items/default-brand";
import TestimonialsGrid from "@/launch-ui-pro/sections/testimonials/grid";
import CTA from "@/launch-ui-pro/sections/cta/box";
import RisingSmallIllustration from "@/launch-ui-pro/illustrations/rising-small";
import RisingLargeIllustration from "@/launch-ui-pro/illustrations/rising-large";
import MockupBrowserIllustration from "@/launch-ui-pro/illustrations/mockup-browser";
import ChatIllustration from "@/launch-ui-pro/illustrations/chat";
import CodeEditorIllustration from "@/launch-ui-pro/illustrations/code-editor";
import MockupMobileIllustration from "@/launch-ui-pro/illustrations/mockup-mobile";
import { Button } from "@/launch-ui-pro/ui/button";
import { Input } from "@/launch-ui-pro/ui/input";

export default function Home() {
  return (
    <div
      className="flex flex-col"
      style={
        {
          "--brand-foreground": "var(--brand-titanium-foreground)",
          "--brand": "var(--brand-titanium)",
          "--primary": "light-dark(var(--brand-titanium), oklch(0.985 0 0))",
          "--background": "var(--background-titanium)",
          "--muted": "var(--background-titanium)",
          "--radius": "var(--radius-default)",
        } as React.CSSProperties
      }
    >
      <Header />
      <main className="flex-1">
        <Hero
          title="Regenerative medicine, end‑to‑end"
          description="We design and deliver cellular, acellular, and matrix‑like products—vertically integrated from donor screening to global distribution—to raise the standard of care in wound, reconstructive, and aesthetic medicine."
          illustration={<RisingSmallIllustration />}
          form={
            <>
              <form className="flex w-full max-w-[420px] gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="border-border/10 bg-foreground/10 grow"
                />
                <Button variant="default" size="lg" asChild>
                  <a href="/our-companies">Get Started</a>
                </Button>
              </form>
              <p className="text-muted-foreground text-xs">
                Join healthcare providers worldwide who trust Tiger BioSciences.
              </p>
            </>
          }
        />
        <Stats
          title="Industry-leading regenerative medicine"
          description="Our comprehensive portfolio delivers exceptional outcomes across wound care, soft tissue reconstruction, and aesthetic medicine."
          items={[
            {
              value: "25+",
              label: "FDA Approvals",
              description: "Regulatory clearances across our portfolio companies",
            },
            {
              value: "30+",
              label: "Countries",
              description: "Global reach serving healthcare providers worldwide",
            },
            {
              value: "13+",
              label: "Portfolio Companies",
              description: "Specialized companies working together",
            },
            {
              value: "150+",
              label: "Years Experience",
              description: "Combined executive expertise in medical technology",
            },
          ]}
        />
        <Logos
          title="Trusted by leading regulatory bodies and industry standards"
          logoItems={[
            { logo: <div className="text-2xl font-bold text-tiger-red">FDA</div> },
            { logo: <div className="text-2xl font-bold text-tiger-red">ISO</div> },
            { logo: <div className="text-2xl font-bold text-tiger-red">AATB</div> },
            { logo: <div className="text-2xl font-bold text-tiger-red">CE</div> },
            { logo: <div className="text-lg font-bold text-tiger-red">Health Canada</div> },
            { logo: <div className="text-2xl font-bold text-tiger-red">TGA</div> },
          ]}
        />
        <BentoGrid
          title="Advanced regenerative medicine solutions"
          description="Our platform provides comprehensive tools for tissue processing, quality assurance, and global distribution of regenerative medicine products."
          tiles={[
            {
              title: "Tissue Processing Excellence",
              description: (
                <>
                  <p className="max-w-[320px] lg:max-w-[460px]">
                    Advanced tissue processing with rigorous protocols and cutting-edge 
                    biotech ensuring exceptional tissue quality and consistency across all products.
                  </p>
                </>
              ),
              visual: (
                <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
                  <MockupBrowserIllustration />
                </div>
              ),
              icon: (
                <Microscope className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:flex-row",
            },
            {
              title: "Global Distribution",
              description: (
                <p className="max-w-[460px]">
                  Worldwide distribution network ensuring consistent quality and 
                  regulatory compliance across all markets with state-of-the-art facilities.
                </p>
              ),
              visual: (
                <div className="min-h-[160px] grow items-center self-center">
                  <ChatIllustration />
                </div>
              ),
              icon: <Globe className="text-muted-foreground size-6 stroke-1" />,
              size: "col-span-12 md:col-span-6 lg:col-span-5",
            },
            {
              title: "Quality Assurance",
              description: (
                <p className="max-w-[460px]">
                  Fully integrated approach from donor screening to global distribution 
                  ensuring unparalleled quality and patient safety in every product.
                </p>
              ),
              visual: (
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <CodeEditorIllustration />
                </div>
              ),
              icon: (
                <Shield className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:col-span-6 lg:col-span-7",
            },
            {
              title: "Clinical Innovation",
              description:
                "Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications that set new industry standards.",
              visual: (
                <div className="min-h-[240px] grow basis-0 sm:p-4 md:min-h-[320px] md:py-12 lg:min-h-[360px]">
                  <MockupBrowserIllustration />
                </div>
              ),
              icon: <Sparkles className="text-muted-foreground size-6 stroke-1" />,
              size: "col-span-12 md:col-span-6 lg:col-span-6",
            },
            {
              title: "Patient Outcomes",
              description: (
                <p className="max-w-[460px]">
                  Comprehensive solutions for wound care, soft tissue reconstruction, 
                  and aesthetic medicine delivering exceptional patient outcomes.
                </p>
              ),
              visual: (
                <div className="min-h-[240px] w-full grow items-center self-center px-4 lg:px-12">
                  <MockupMobileIllustration />
                </div>
              ),
              icon: (
                <Heart className="text-muted-foreground size-6 stroke-1" />
              ),
              size: "col-span-12 md:col-span-6 lg:col-span-6",
            },
          ]}
        />
        <FeatureIllustrationBottom
          title="Comprehensive regenerative medicine infrastructure"
          description="Our platform integrates seamlessly with healthcare systems, providing a robust infrastructure for advancing wound care, soft tissue reconstruction, and aesthetics across a global network."
          visual={<RisingLargeIllustration />}
        />
        <Items
          title="Regenerative medicine capabilities"
          items={[
            {
              title: "FDA Compliance",
              description:
                "Full regulatory compliance with FDA standards and international regulations ensuring the highest quality and safety standards.",
              icon: <Lock className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Global Reach",
              description:
                "Serving healthcare providers in 30+ countries with comprehensive portfolio of regenerative medicine solutions.",
              icon: <Globe className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Tissue Engineering",
              description:
                "Advanced cellular, acellular, and matrix-like products (CAMPs) with cutting-edge tissue engineering technologies.",
              icon: (
                <Network className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Quality Systems",
              description:
                "Comprehensive quality management systems ensuring consistency and reliability across all products.",
              icon: <Cloud className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Research & Development",
              description:
                "Continuous innovation through dedicated R&D programs advancing the future of regenerative medicine.",
              icon: (
                <Settings className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Clinical Data",
              description:
                "Extensive clinical data and research supporting the efficacy and safety of our regenerative medicine solutions.",
              icon: (
                <Database className="text-muted-foreground size-6 stroke-1" />
              ),
            },
            {
              title: "Expert Leadership",
              description:
                "150+ years of combined executive experience driving innovation in medical technology and tissue processing.",
              icon: <Users className="text-muted-foreground size-6 stroke-1" />,
            },
            {
              title: "Integrated Solutions",
              description:
                "End-to-end solutions from donor screening to global distribution for seamless healthcare provider experience.",
              icon: (
                <Webhook className="text-muted-foreground size-6 stroke-1" />
              ),
            },
          ]}
        />
        <TestimonialsGrid
          items={[
            {
              name: "Dr. Sarah Chen",
              role: "Chief Medical Officer, MedTech Innovations",
              text: "Tiger BioSciences has revolutionized our approach to regenerative medicine. Their comprehensive CAMP solutions have significantly improved patient outcomes in our wound care programs.",
              image: "/assets/images/01/tiger_logo-v2.png",
            },
            {
              name: "Dr. Michael Rodriguez",
              role: "Director of Research, Advanced Tissue Center",
              text: "The quality and consistency of Tiger BioSciences' tissue processing is unmatched. Their integrated approach from donor screening to distribution ensures the highest standards.",
              image: "/assets/images/01/tiger_logo-v2.png",
            },
          ]}
        />
        <CTA
          title="Ready to advance regenerative medicine?"
          description="Join healthcare providers worldwide who trust Tiger BioSciences for their regenerative medicine needs. Contact us today to learn more about our comprehensive solutions."
          buttons={[
            {
              text: "Contact Us",
              href: "/contact",
              variant: "default",
            },
            {
              text: "Explore Solutions",
              href: "/our-companies",
              variant: "outline",
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}