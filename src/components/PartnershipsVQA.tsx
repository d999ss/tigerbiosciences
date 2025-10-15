'use client'

import React from 'react'

export default function PartnershipsVQA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Partnerships</h2>
        <p className="mt-3 opacity-80">
          We partner with healthcare providers, research groups, and technology teams to validate,
          manufacture, and scale CAMP products worldwide.
        </p>
        <p className="mt-3 text-sm opacity-70">
          Note: Only organizations with current, contractual usage rights are displayed. Regulatory
          registrations and certifications appear on our Quality &amp; Compliance page.
        </p>
      </header>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <div className="h-14 bg-neutral-100 rounded" aria-hidden="true"></div>
        <div className="h-14 bg-neutral-100 rounded" aria-hidden="true"></div>
        <div className="h-14 bg-neutral-100 rounded" aria-hidden="true"></div>
        <div className="h-14 bg-neutral-100 rounded" aria-hidden="true"></div>
      </div>
    </section>
  )
}
