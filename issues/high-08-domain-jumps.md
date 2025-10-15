# Normalize domain routing between staging and prod

Labels: high

Problem
Footer links jump between vercel staging and production domains.

Acceptance Criteria
- In staging, internal links stay on staging; in prod, all internal links are canonical to prod domain.
- External links use target=_blank and rel=noopener.

Implementation Notes
- Centralize linkHref(base, path) using NEXT_PUBLIC_SITE_URL.
- Add ESLint/test to catch cross-domain internal links.
