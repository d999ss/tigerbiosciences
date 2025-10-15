"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  badgeText?: string;
  title?: string;
  description?: string;
  buttons?: CTAButtonProps[] | false;
  className?: string;
}

export function CTAEnhanced({
  badgeText = "Get started",
  title = "Ready to advance regenerative medicine?",
  description = "Join healthcare providers worldwide who trust Tiger BioSciences for their regenerative medicine needs. Contact us today to learn more about our comprehensive solutions.",
  buttons = [
    {
      href: "/contact",
      text: "Contact Us",
      variant: "glow",
      iconRight: <ArrowRight className="ml-2 h-4 w-4" />,
    },
    {
      href: "/our-companies",
      text: "Explore Solutions",
      variant: "outline",
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("w-full overflow-hidden pt-0 md:pt-0", className)}>
      <div className="max-w-container relative mx-auto flex flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        <Badge variant="outline" className="border-tiger-red text-tiger-red">
          <span className="text-tiger-red">{badgeText}</span>
        </Badge>
        <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
        {description && <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>}
        {buttons !== false && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
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
        <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-[0_-16px_128px_0_rgba(0,0,0,0.05)_inset,0_-16px_32px_0_rgba(0,0,0,0.02)_inset]"></div>
      </div>
    </Section>
  );
}
