# Add sitemap and robots using Next metadata routes

Labels: blocker

Problem
No sitemap/robots are exposed; footer target 404s.

Acceptance Criteria
- /sitemap.xml lists canonical routes.
- /robots.txt exists and references sitemap URL.
- Included in build output and covered by e2e.

Implementation Notes
- app/sitemap.ts + app/robots.ts (MetadataRoute).
- Use NEXT_PUBLIC_SITE_URL for absolute URLs.
