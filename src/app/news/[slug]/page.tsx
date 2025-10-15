import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import React from 'react'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

type NewsItem = { slug: string; title: string; date: string; excerpt?: string; body: string }

const NEWS: NewsItem[] = [
  {
    slug: 'legal-action-mimedx',
    title: 'Legal Action Update',
    date: '2025-01-12',
    excerpt: 'Update regarding ongoing legal matters.',
    body: 'Placeholder article body. Replace with CMS content.',
  },
  {
    slug: 'lizard-health-acquisition',
    title: 'Lizard Health Acquisition',
    date: '2025-02-18',
    excerpt: 'Announcement of the Lizard Health acquisition.',
    body: 'Placeholder article body. Replace with CMS content.',
  },
]

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = NEWS.find((n) => n.slug === params.slug)
  if (!article) return { title: 'News | Tiger BioSciences' }
  const desc = article.excerpt || article.body.slice(0, 140)
  return {
    title: `${article.title} | News`,
    description: desc,
    openGraph: {
      type: 'article',
      title: article.title,
      description: desc,
      publishedTime: article.date,
      url: `/news/${article.slug}`,
    },
  }
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const article = NEWS.find((n) => n.slug === params.slug)
  if (!article) notFound()
  
  return (
    <main className="min-h-screen">
      <Header />
      <article className="prose mx-auto px-4 py-12 max-w-4xl">
        <h1>{article.title}</h1>
        <p><time dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time></p>
        <div>{article.body}</div>
        <p style={{ marginTop: 32 }}>
          <a href="/news" aria-label="Back to news">← Back to news</a>
        </p>
      </article>
      <Footer />
    </main>
  )
}
