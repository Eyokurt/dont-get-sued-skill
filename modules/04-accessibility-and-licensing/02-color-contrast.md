# Audit Module 18: Color Contrast (Text & UI Elements)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **ADA Title III & European Accessibility Act (EAA)**: Courts and enforcement agencies assess web accessibility against WCAG standards.
  - **WCAG 2.2 Success Criterion 1.4.3 (Contrast Minimum - Level AA)**:
    - Normal text (< 18pt or < 14pt bold): Minimum contrast ratio of **4.5:1** against the background.
    - Large text (≥ 18pt or ≥ 14pt bold): Minimum contrast ratio of **3.0:1** against the background.
  - **WCAG 2.2 Success Criterion 1.4.11 (Non-text Contrast - Level AA)**:
    - Visual information required to identify active user interface components (input borders, button outlines, checkboxes, toggles) and graphical objects: Minimum contrast ratio of **3.0:1** against adjacent background colors.
  - **WCAG 2.2 Success Criterion 1.4.1 (Use of Color)**: Color must not be used as the sole visual means of conveying information, indicating an action, or prompting a response.
- **Enforcement & Liability**:
  - Automated scanning crawlers operated by plaintiff accessibility law firms identify low-contrast text as prime evidence for federal ADA lawsuits.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Body Copy & Subtitle Contrast**:
  - Verify that all standard body text, table data, subheadings, and secondary descriptions exceed the **4.5:1** contrast threshold against their respective background surfaces.
- **Large Headlines & Hero Metrics**:
  - Verify that large headlines and display numbers exceed the **3.0:1** contrast threshold.
- **Interactive Component Boundaries**:
  - Verify that form input borders, selectable options, toggle tracks, and focus rings maintain at least a **3.0:1** contrast ratio against adjacent surfaces so visually impaired users can identify input areas.
- **Multi-Modal Error & Status Indicators**:
  - Verify that error states, warnings, and success indications do not rely solely on color (e.g. turning a border red), but also include explicit textual messages or descriptive icons.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Light gray text rendered against white backgrounds that falls below 4.5:1 contrast.
- Low-contrast pastels or muted neon text on bright or dark backgrounds.
- Invisible form input borders that blend into the surrounding surface without meeting the 3.0:1 boundary contrast standard.
- Communicating system errors or required fields solely through color changes without text or iconography.
- Placeholder text in form inputs styled with unreadable contrast or used as a substitute for permanent field labels.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- 100% of standard body copy and microcopy meets or exceeds 4.5:1 contrast.
- Form field boundaries and active interactive elements meet or exceed 3.0:1 non-text contrast.
- Visual validation feedback combines color changes with descriptive icons and clear text.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Calibrate global theme palettes and text color tokens to ensure all combinations satisfy WCAG AA contrast thresholds.
- Enhance form boundary styling to provide distinct, discernible edges against container backgrounds.
- Ensure all status changes and validation alerts combine color cues with explanatory text and icons.
