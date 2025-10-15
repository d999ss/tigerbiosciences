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
