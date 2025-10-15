import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tigerbiosciences.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const routes = ['', '/about', '/our-companies', '/leadership', '/news', '/career', '/contact', '/quality', '/regulatory', '/certifications', '/safety', '/technology', '/partnerships', '/investors', '/docs', '/legal-disclaimer', '/terms-conditions', '/privacy-policy', '/wound-care-applications', '/aesthetic-procedures', '/tissue-processing', '/research-development', '/healthcare-providers', '/research-institutions', '/medical-device-companies']
  return routes.map((p) => ({
    url: new URL(p, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }))
}