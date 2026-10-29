# Audit Module 17: Accessibility Alt Text (Images & Media)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **ADA Title III (Americans with Disabilities Act, 42 U.S.C. §§ 12181–12189)**: Places of public accommodation include websites and digital platforms (*Robles v. Domino's Pizza*). Digital compliance is consistently evaluated against WCAG standards.
  - **European Accessibility Act (EAA - Directive (EU) 2019/882)**: Enforces mandatory accessibility compliance for digital services, e-commerce, and mobile platforms across the EU.
  - **WCAG 2.2 Success Criterion 1.1.1 (Non-text Content - Level A)**: All non-text content presented to the user must have a text alternative that serves an equivalent purpose.
- **Enforcement & Liability**:
  - Widespread predatory ADA Title III web accessibility lawsuits in US federal and state courts; substantial financial settlements and court-ordered remediation mandates.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Text Alternatives on Informational Content**:
  - Verify that every informational image, product picture, diagram, chart, and illustration possesses a concise, context-appropriate textual alternative conveying its meaning.
- **Decorative Media Hiding**:
  - Verify that purely decorative images, background textures, visual dividers, and decorative icons are explicitly hidden from assistive technologies (e.g. empty alt attribute or accessibility-hidden attributes) so screen readers do not announce meaningless decorative noise.
- **Complex Visuals & Infographics**:
  - Verify that complex charts, dashboards, and graphs provide extended textual descriptions, accessible data tables, or structured summaries.
- **Icon Buttons & Interactive Elements**:
  - Verify that interactive visual icons (e.g. search magnifying glasses, cart icons, delete buttons) include explicit accessible labels so screen readers can announce their function.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Informational images lacking text alternatives entirely (causing screen readers to announce raw, unreadable image URLs or filenames).
- Meaningless, generic placeholder alt text such as `alt="image"`, `alt="graphic"`, `alt="picture"`, or `alt="screenshot"`.
- Complex financial, statistical, or health graphs presented without accessible textual data equivalents.
- Interactive icon buttons with no textual or accessible label.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Complete coverage of meaningful, context-specific text alternatives across all informational media.
- Purely decorative visual assets properly marked as decorative to streamline assistive navigation.
- Accessible text alternatives or data tables accompanying all complex graphics and charts.
- Unambiguous accessibility labels on all interactive visual buttons.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Audit all media components to ensure informational visual assets convey contextual descriptions to screen readers.
- Mark purely decorative elements with empty alt attributes or appropriate accessibility hiding semantics.
- Provide data tables or structured text equivalents for visual charts and diagrams.
