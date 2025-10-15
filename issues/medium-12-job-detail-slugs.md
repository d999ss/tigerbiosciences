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
