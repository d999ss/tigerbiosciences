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
