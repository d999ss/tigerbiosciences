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
