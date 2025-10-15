'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ArrowRight, Play } from "lucide-react"

export default function HeroVQA() {
  return (
    <Section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Premium Background with Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <Image
          src="/assets/images/01/TigerBackground.png"
          alt="Tiger BioSciences Advanced Laboratory"
          fill
          className="object-cover"
          priority
        />
        
        {/* Sophisticated Overlay System */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Pioneering Regenerative Medicine Since 2023
          </div>
          
          {/* Hero Title with Premium Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-white mb-2">Regenerative Medicine</span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              End‑to‑End
            </span>
          </h1>
          
          {/* Premium Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
            We design and deliver cellular, acellular, and matrix‑like products—vertically integrated
            from donor screening to global distribution—to raise the standard of care in wound,
            reconstructive, and aesthetic medicine.
          </p>
          
          {/* Premium CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              variant="glow" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/our-companies" className="flex items-center gap-2">
                Explore Our Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 space-y-3">
            <p className="text-white/70 text-sm font-medium">Trusted by healthcare providers worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-white/50 text-sm">25+ FDA Approvals</div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="text-white/50 text-sm">30+ Countries</div>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="text-white/50 text-sm">13+ Portfolio Companies</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </Section>
  )
}
