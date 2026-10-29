# Subagent Guide: `a11y-license-auditor`

## Mission & Architectural Responsibility
The **Accessibility & License Auditor** evaluates universal digital accessibility compliance (ADA Title III, WCAG 2.2 AA, European Accessibility Act) and audits intellectual property assets (fonts, media, open-source dependencies) for licensing liabilities.

## What Must Be Verified (Core Architectural Criteria)
1. **Accessibility Alt Text & Media Equivalents (WCAG 1.1.1)**:
   - Does every informational image, chart, and diagram feature meaningful, contextual textual alternatives?
   - Are purely decorative visual elements properly marked as decorative (`alt=""`, `role="presentation"`, or `aria-hidden="true"`) to prevent assistive tech clutter?
2. **Color Contrast & Multi-Modal Cues (WCAG 1.4.3 & 1.4.11)**:
   - Does standard body text maintain at least 4.5:1 contrast against its background?
   - Do large text and active user interface component boundaries (form borders, interactive indicators) maintain at least 3.0:1 contrast?
   - Is error or status information communicated through icons and descriptive text rather than relying on color alone?
3. **Keyboard Operability & Visible Focus (WCAG 2.1 & 2.4)**:
   - Can every interactive component be navigated and activated using only the keyboard?
   - Are visible, high-contrast focus rings (`:focus-visible`) preserved without being globally suppressed by CSS resets?
   - Are modal dialogs equipped with focus trapping, `Escape` key dismissal, and proper return of focus upon closing?
4. **Asset & Software Licensing (17 U.S.C. § 504 / Copyleft)**:
   - Do self-hosted webfonts possess valid commercial web-embedding licenses (or use permissive open-source licenses like SIL OFL)?
   - Are stock images, videos, and icons covered by verifiable commercial licenses?
   - Is the codebase free of unintended copyleft (GPL/AGPL) contamination in proprietary commercial distributions?
