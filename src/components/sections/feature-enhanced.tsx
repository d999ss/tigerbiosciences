"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface FeatureIllustrationBottomProps {
  title?: string;
  description?: string;
  visual?: ReactNode;
  className?: string;
}

export function FeatureEnhanced({
  title = "Comprehensive regenerative medicine infrastructure",
  description = "Our platform integrates seamlessly with your existing applications, providing a robust infrastructure for advancing wound care, soft tissue reconstruction, and aesthetics across a global network.",
  visual = (
    <div className="relative">
      <Image
        src="/assets/images/biotech/hero-lab.jpg"
        alt="Tiger BioSciences Infrastructure"
        width={1200}
        height={600}
        className="w-full h-auto object-cover rounded-lg shadow-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Advanced Research Facilities</h3>
        <p className="text-lg opacity-90">State-of-the-art laboratories driving regenerative medicine innovation</p>
      </div>
    </div>
  ),
  className,
}: FeatureIllustrationBottomProps) {
  return (
    <Section
      className={cn(
        "fade-bottom relative mb-12 w-full overflow-hidden pb-0 sm:mb-24 sm:pb-0 md:mb-32 md:pb-0",
        className,
      )}
    >
      <div className="relative">
        <div className="max-w-container mx-auto flex flex-col gap-8 sm:gap-24">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-12">
            <h1 className="from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block max-w-[920px] bg-linear-to-r bg-clip-text text-3xl font-semibold text-balance text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              {title}
            </h1>
            <p className="text-md text-muted-foreground relative z-10 max-w-[620px] font-medium text-balance sm:text-xl">
              {description}
            </p>
          </div>
          <div className="w-full">{visual}</div>
        </div>
      </div>
    </Section>
  );
}
