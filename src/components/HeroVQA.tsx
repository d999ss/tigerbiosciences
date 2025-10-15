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
    <Section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0,0,0,0.05) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Pioneering Regenerative Medicine Since 2023
          </div>
          
          {/* Hero Title with Premium Typography */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-slate-900 dark:text-white mb-2">Regenerative Medicine</span>
            <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent">
              End‑to‑End
            </span>
          </h1>
          
          {/* Premium Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
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
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Trusted by healthcare providers worldwide</p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-slate-600 dark:text-slate-300 text-sm font-semibold">25+ FDA Approvals</div>
              <div className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
              <div className="text-slate-600 dark:text-slate-300 text-sm font-semibold">30+ Countries</div>
              <div className="w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full"></div>
              <div className="text-slate-600 dark:text-slate-300 text-sm font-semibold">13+ Portfolio Companies</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-500 dark:bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </Section>
  )
}
