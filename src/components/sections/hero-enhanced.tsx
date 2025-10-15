"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import Image from "next/image";
import Link from "next/link";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroEnhancedProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttons?: HeroButtonProps[] | false;
  backgroundImage?: string;
  showGlow?: boolean;
  className?: string;
}

export function HeroEnhanced({
  title = "The first of its kind.",
  subtitle = "Tiger BioSciences",
  description = "Pioneering regenerative medicine through innovative cellular, acellular, and matrix-like products (CAMPs). We are the first of its kind in comprehensive tissue processing and medical device innovation.",
  buttons = [
    {
      href: "/our-companies",
      text: "Explore Our Portfolio",
      variant: "default",
    },
    {
      href: "/contact",
      text: "Get in Touch",
      variant: "outline",
    },
  ],
  backgroundImage = "/assets/images/news/research-collaboration.jpg",
  showGlow = true,
  className,
}: HeroEnhancedProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Tiger BioSciences hero background"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover object-center"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />
      
      {/* Content */}
      <Section className="relative z-10 w-full overflow-hidden">
        <div className="max-w-container relative mx-auto flex flex-col gap-12 sm:gap-24">
          <div className="relative z-10 flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
            <div className="mb-8">
              <h4 className="font-tiger text-tiger-red text-subtitle mb-6 animate-appear opacity-0 delay-100">
                {subtitle}
              </h4>
            </div>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground inline-block bg-gradient-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight opacity-0 delay-200">
              {title}
            </h1>
            <p className="text-md animate-appear max-w-[740px] font-medium opacity-0 delay-300 sm:text-xl text-white">
              {description}
            </p>
            {buttons !== false && buttons.length > 0 && (
              <div className="animate-appear relative z-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 delay-500">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                    className={button.variant === "default" ? "bg-tiger-red hover:bg-tiger-red-dark text-white" : "bg-white/10 hover:bg-white/20 text-white border-white/20"}
                  >
                    <Link href={button.href}>
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Section>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/assets/images/08/hero_wave_v6.svg"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto hidden md:block"
          sizes="(min-width: 768px) 100vw, 0"
        />
        <Image
          src="/assets/images/08/mobile_logo_wave_v6.svg"
          alt=""
          width={768}
          height={100}
          className="w-full h-auto block md:hidden"
          sizes="(max-width: 767px) 100vw, 0"
        />
      </div>
      
      {showGlow && (
        <div className="absolute inset-0 overflow-hidden">
          <Glow
            variant="above"
            className="animate-appear-zoom opacity-0 delay-1000"
          />
        </div>
      )}
    </section>
  );
}

