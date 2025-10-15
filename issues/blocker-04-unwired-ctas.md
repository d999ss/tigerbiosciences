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
