import { ReactNode } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Cta = {
  href: string
  label: string
}

type UseCasePageProps = {
  title: string
  description?: string
  badge?: string
  heroVariant?: "centered" | "split"
  heroImageSrc?: string
  heroImageAlt?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  children?: ReactNode
}

export function UseCasePage({
  title,
  description,
  badge,
  heroVariant = "centered",
  heroImageSrc,
  heroImageAlt,
  primaryCta,
  secondaryCta,
  children,
}: UseCasePageProps) {
  return (
    <main className="min-h-screen">
      <Header />

      {heroVariant === "centered" ? (
        <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
          <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
            <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
              {badge ? (
                <Badge variant="outline" className="animate-appear">
                  <span className="text-muted-foreground">{badge}</span>
                </Badge>
              ) : null}
              <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
                {title}
              </h1>
              {description ? (
                <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
                  {description}
                </p>
              ) : null}
              {(primaryCta || secondaryCta) ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {primaryCta ? (
                    <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark text-white">
                      <Link href={primaryCta.href}>
                        {primaryCta.label}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                  {secondaryCta ? (
                    <Button asChild variant="outline" size="lg">
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </Section>
      ) : (
        <Section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                {badge ? (
                  <Badge className="mb-4 bg-tiger-red/10 text-tiger-red border-tiger-red/20">
                    {badge}
                  </Badge>
                ) : null}
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-tiger-red">{title}</span>
                </h1>
                {description ? (
                  <p className="text-xl text-muted-foreground mb-8">{description}</p>
                ) : null}
                {(primaryCta || secondaryCta) ? (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {primaryCta ? (
                      <Button asChild size="lg" className="bg-tiger-red hover:bg-tiger-red-dark">
                        <Link href={primaryCta.href}>
                          {primaryCta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ) : null}
                    {secondaryCta ? (
                      <Button asChild variant="outline" size="lg">
                        <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                      </Button>
                    ) : null}
                  </div>
                ) : null}
              </div>
              {heroImageSrc ? (
                <div className="text-center">
                  <Image
                    src={heroImageSrc}
                    alt={heroImageAlt ?? title}
                    width={300}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </Section>
      )}

      {children}

      <Footer />
    </main>
  )
}