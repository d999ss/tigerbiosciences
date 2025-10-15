# Fix News detail 404s and wire featured links

Labels: blocker

Problem
The "Read More" links on featured news items route to /news/<slug> but the route returns 404.

Acceptance Criteria
- /news/[slug] renders a news detail page for all existing slugs.
- Featured cards link to canonical slugs and do not 404.
- Nonexistent slugs return a proper 404 with a helpful back link.
- Typecheck passes in CI.

Implementation Notes
- Add app/news/[slug]/page.tsx.
- Provide generateStaticParams (if SSG) or dynamic fallback.
- Pull content by slug from CMS/local source.
- Add Open Graph metadata per article.
