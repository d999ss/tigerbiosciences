'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"

export default function HeroVQA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Regenerative medicine, end‑to‑end
          </h1>
          <p className="mt-4 text-lg opacity-80">
            We design and deliver cellular, acellular, and matrix‑like products—vertically integrated
            from donor screening to global distribution—to raise the standard of care in wound,
            reconstructive, and aesthetic medicine.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
              <Link href="/our-companies" aria-label="Explore our companies">
                Explore our companies
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" aria-label="Talk to our team">
                Talk to our team
              </Link>
            </Button>
          </div>
        </header>
      </div>
    </section>
  )
}
