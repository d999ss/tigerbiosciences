"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface LogoItemProps {
  logo: ReactNode;
  name: string;
}

interface LogosProps {
  title?: string;
  logoItems?: LogoItemProps[];
  className?: string;
}

export function LogosEnhanced({
  title = "Trusted by leading healthcare organizations",
  logoItems = [
    {
      name: "FDA",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-2xl font-bold text-tiger-red">FDA</span>
        </div>
      ),
    },
    {
      name: "ISO",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-2xl font-bold text-tiger-red">ISO</span>
        </div>
      ),
    },
    {
      name: "AATB",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-2xl font-bold text-tiger-red">AATB</span>
        </div>
      ),
    },
    {
      name: "CE",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-2xl font-bold text-tiger-red">CE</span>
        </div>
      ),
    },
    {
      name: "Health Canada",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-lg font-bold text-tiger-red">Health Canada</span>
        </div>
      ),
    },
    {
      name: "TGA",
      logo: (
        <div className="flex items-center justify-center h-12 w-24">
          <span className="text-2xl font-bold text-tiger-red">TGA</span>
        </div>
      ),
    },
  ],
  className,
}: LogosProps) {
  return (
    <Section className={cn(className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center px-4">
        <h2 className="text-lg text-muted-foreground font-semibold">{title}</h2>
        <div className="bg-border relative grid w-full auto-rows-fr grid-cols-2 gap-[1px] text-center md:grid-cols-3 lg:grid-cols-6">
          {logoItems.map((item, index) => (
            <div
              key={index}
              className="bg-background flex aspect-2/1 items-center justify-center p-6 hover:bg-muted/50 transition-colors"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
