# Replace EST with ET or dynamic timezone offset

Labels: medium

Problem
"EST" is ambiguous during DST.

Acceptance Criteria
- Use "ET", or show a dynamic offset (UTC−4 / UTC−5).
- Automated test ensures label/offset match current date.

Implementation Notes
- Use date-fns-tz or Intl.DateTimeFormat.
