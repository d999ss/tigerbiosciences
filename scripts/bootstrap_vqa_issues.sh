#!/usr/bin/env bash
set -euo pipefail
mkdir -p issues

cat > issues/blocker-01-news-detail-404.md << 'EOF'
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
EOF

cat > issues/blocker-02-sitemap-robots.md << 'EOF'
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
EOF

cat > issues/blocker-03-markdown-artifacts.md << 'EOF'
# Strip/render markdown tokens (### etc.) in headings

Labels: blocker

Problem
Literal markdown tokens (###) appear before subheads due to passing raw markdown strings into components.

Acceptance Criteria
- No literal markdown syntax visible in UI.
- Rich text renders as semantic HTML with sanitization.
- Snapshots confirm clean headings.

Implementation Notes
- Introduce <RichText> using react-markdown + remark-gfm.
- Replace string injection with <RichText value={markdown} />.
EOF

cat > issues/blocker-04-unwired-ctas.md << 'EOF'
# Wire critical CTAs (Jobs, Investor downloads, Contact tel)

Labels: blocker

Problem
Some CTAs show but aren't actionable: job "Apply Now", investor "Download", and "Call Now".

Acceptance Criteria
- Each job card links to the correct ATS/application endpoint.
- Investor downloads link to actual files or are hidden until ready.
- Phone CTA uses tel:+18886655005.
- No axe-core violations for interactive controls.

Implementation Notes
- Audit Button/Link primitives for asChild/passHref issues.
- Use descriptive aria-labels when visible text is generic.
EOF

cat > issues/high-05-nav-affordance-a11y.md << 'EOF'
# Make top navigation menus accessible (mouse + keyboard)

Labels: high

Problem
Top-level nav items appear non-clickable; unclear dropdown affordances and keyboard interactions.

Acceptance Criteria
- Menus open/close via Click/Enter/Escape and Arrow keys.
- Focus trapped within open menus; returns to trigger on close.
- Mobile parity.
- Satisfy WCAG 2.1: 2.1.1, 2.4.3.

Implementation Notes
- Use WAI-ARIA menu button pattern or headless UI.
- Proper roles/aria-expanded/aria-controls.
EOF

cat > issues/high-06-hq-inconsistency.md << 'EOF'
# Resolve HQ vs mailing address inconsistency

Labels: high

Problem
About claims San Antonio HQ while Contact shows a Pennsylvania address.

Acceptance Criteria
- Single canonical HQ labeled clearly.
- Other addresses labeled (Operations, Manufacturing, Registered Agent).
- JSON-LD Organization markup updated.

Implementation Notes
- Update page copy + footer.
- Add/adjust schema.org JSON-LD.
EOF

cat > issues/high-07-partnership-claims.md << 'EOF'
# Reframe Partnerships to avoid implied endorsements

Labels: high

Problem
Logos under "Partners" may imply current endorsements; "FDA" shouldn't appear as a partner.

Acceptance Criteria
- Partnerships copy reframed to collaboration language.
- Only logos with current contractual usage rights shown.
- Regulatory badges moved to Quality & Compliance.

Implementation Notes
- Use new Partnerships copy; add CMS flag { allowed: boolean }.
EOF

cat > issues/high-08-domain-jumps.md << 'EOF'
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
EOF

cat > issues/high-09-cta-text-duplication.md << 'EOF'
# Make CTA labels unique and descriptive

Labels: high

Problem
"Learn More" repeats across grids; poor information scent and a11y.

Acceptance Criteria
- Each CTA has unique, destination-specific text (or aria-label).
- axe-core shows no duplicate-ambiguous link text.

Implementation Notes
- Extend Button/Link with ariaLabel prop.
- Lint rule/unit test to enforce.
EOF

cat > issues/medium-10-newsletter-subscribe.md << 'EOF'
# Add working newsletter subscribe flow or remove the UI

Labels: medium

Problem
A Subscribe affordance exists without a flow.

Acceptance Criteria
- Email input with validation + double opt-in, or UI removed.
- Clear consent copy and success/error states.
- Spam protection in backend.

Implementation Notes
- Implement /api/subscribe with provider (Mailchimp/Customer.io).
EOF

cat > issues/medium-11-metrics-footnotes.md << 'EOF'
# Add footnotes/popovers for +counts (13+, 25+, 30+)

Labels: medium

Problem
Round "+" metrics lack context, reducing credibility.

Acceptance Criteria
- Each metric has a footnote or info popover explaining basis.
- CMS supports footnote text per metric.

Implementation Notes
- Build <Metric value label footnote?> component.
EOF

cat > issues/medium-12-job-detail-slugs.md << 'EOF'
# Create canonical job detail pages with slugs

Labels: medium

Problem
Job cards lack detail pages; hurts SEO and shareability.

Acceptance Criteria
- /careers/<slug> exists per role with canonical meta.
- "Apply" routes to ATS/email with prefilled subject.
- Content sourced from CMS; HR can update without dev.

Implementation Notes
- Generate static params from CMS.
- Add JSON-LD JobPosting.
EOF

cat > issues/medium-13-timezone-labeling.md << 'EOF'
# Replace EST with ET or dynamic timezone offset

Labels: medium

Problem
"EST" is ambiguous during DST.

Acceptance Criteria
- Use "ET", or show a dynamic offset (UTC−4 / UTC−5).
- Automated test ensures label/offset match current date.

Implementation Notes
- Use date-fns-tz or Intl.DateTimeFormat.
EOF

cat > issues/polish-14-hero-message.md << 'EOF'
# Replace vague hero with clear positioning

Labels: polish

Deliverables
- New hero copy wired and performant.

Acceptance Criteria
- Headline communicates category + differentiation.
- Primary CTA -> Companies; Secondary -> Contact.
- LCP stays in threshold using next/image + font preload.
EOF

cat > issues/polish-15-link-semantics.md << 'EOF'
# Clarify external file links (type, size) and new-tab behavior

Labels: polish

Acceptance Criteria
- PDFs/external sites indicate type and open-in-new-tab.
- rel=noopener on external links.
- File size surfaced when available.

Implementation Notes
- Extend Link component with fileMeta/isExternal.
EOF

cat > issues/polish-16-consistent-model-names.md << 'EOF'
# Normalize product naming (CAMP vs CAMPS)

Labels: polish

Acceptance Criteria
- Single canonical form (CAMP) site-wide.
- Pluralization: "CAMP products".
- CI test greps prohibited variants.

Implementation Notes
- Add content linter (retext/alex) on content repo.
EOF

cat > issues/polish-17-image-alt-text.md << 'EOF'
# Ensure meaningful, non-redundant alt text for images

Labels: polish

Acceptance Criteria
- Leadership/product images get descriptive alt.
- Decorative images use empty alt.
- No axe-core image-alt violations.

Implementation Notes
- Add <SmartImage> wrapper enforcing alt or decorative flag.
EOF

cat > issues/polish-18-a11y-regression-tests.md << 'EOF'
# Add automated a11y checks (axe) and keyboard smoke tests

Labels: polish

Acceptance Criteria
- CI runs axe-core on key routes.
- Playwright test: tab through nav; open/close menus; focus order correct.
- Any regression fails the build.

Implementation Notes
- Add @axe-core/playwright to e2e and helpers for nav.
EOF

echo "Issue files bootstrapped in ./issues"
echo "Run: bash scripts/create_issues.sh"
