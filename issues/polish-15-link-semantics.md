# Clarify external file links (type, size) and new-tab behavior

Labels: polish

Acceptance Criteria
- PDFs/external sites indicate type and open-in-new-tab.
- rel=noopener on external links.
- File size surfaced when available.

Implementation Notes
- Extend Link component with fileMeta/isExternal.
