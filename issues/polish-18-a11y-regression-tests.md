# Add automated a11y checks (axe) and keyboard smoke tests

Labels: polish

Acceptance Criteria
- CI runs axe-core on key routes.
- Playwright test: tab through nav; open/close menus; focus order correct.
- Any regression fails the build.

Implementation Notes
- Add @axe-core/playwright to e2e and helpers for nav.
