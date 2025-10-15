'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function HeroVQA() {
  return (
    <Section
      className={cn(
        "fade-bottom w-full overflow-hidden pb-0 sm:pb-0 md:pb-0 relative",
      )}
    >
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-tiger-red/20 via-background/80 to-background/90 z-10"></div>
        <Image
          src="/assets/images/01/TigerBackground.png"
          alt="Tiger BioSciences Laboratory"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-24 relative z-20">
        <div className="flex flex-col items-center gap-6 pt-16 text-center sm:gap-12">
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Regenerative medicine, end‑to‑end
          </h1>
          <p className="text-md animate-appear text-muted-foreground max-w-[840px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            We design and deliver cellular, acellular, and matrix‑like products—vertically integrated
            from donor screening to global distribution—to raise the standard of care in wound,
            reconstructive, and aesthetic medicine.
          </p>
          <div className="animate-appear relative z-10 flex flex-col items-center justify-center gap-4 self-stretch opacity-0 delay-300 sm:flex-row">
            <form className="flex w-full max-w-[420px] gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-border/10 bg-foreground/10 grow"
              />
              <Button variant="default" size="lg" asChild>
                <Link href="/our-companies">
                  Get Started
                </Link>
              </Button>
            </form>
          </div>
          <p className="animate-appear text-muted-foreground text-xs opacity-0 delay-500">
            Join healthcare providers worldwide who trust Tiger BioSciences.
          </p>
        </div>
      </div>
    </Section>
  )
}
