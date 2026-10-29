# Audit Module 06: Cookie Consent Banner (Prior Consent & Reject All)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **CJEU Planet49 Ruling (Case C-673/17)**: Storing and accessing cookies requires active, informed consent. Pre-ticked checkboxes or implied consent through browsing are strictly unlawful.
  - **EDPB Guidelines on Dark Patterns in Cookie Banners (Guidelines 03/2022)**: Requiring more clicks or effort to reject cookies than to accept them (asymmetric choice) violates GDPR Art 7. "Reject All" must be equally prominent on the first layer.
  - **ePrivacy Directive (Directive 2002/58/EC) & GDPR Art 7**: Prior consent mandate. No non-essential cookies, trackers, or pixels may execute before affirmative opt-in is granted.
- **Enforcement & Liability**:
  - Hundreds of millions in cumulative regulatory fines across France (CNIL), Ireland (DPC), and Spain (AEPD) for deceptive cookie consent banners and missing "Reject All" buttons.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Prior Consent Gating (Zero Premature Execution)**:
  - Verify that the application architecture guarantees that non-essential scripts (analytics, marketing pixels, session replay, ad telemetry) are strictly blocked from loading or executing until affirmative consent is confirmed.
- **First-Layer Symmetry (Equal Prominence for Rejection)**:
  - Verify that the first screen of the consent interface presents both "Accept All" and "Reject All" options with equal visual weight, sizing, and contrast.
  - Verify that users are not forced into submenus, secondary tabs, or configuration modals merely to reject tracking.
- **Granular Category Controls & Default States**:
  - Verify that preference controls allow granular selection across functional, analytics, and marketing categories.
  - Verify that all non-essential categories are toggled **OFF** (unchecked) by default.
- **No Cookie Walls**:
  - Verify that access to public services and content is not conditioned on consenting to tracking cookies unless technically necessary for core delivery.
- **Persistent Consent Revocation / Modification**:
  - Verify that users can easily reopen their cookie settings and change or withdraw consent at any time via a persistent control or footer link.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- **Premature Leakage**: Setting analytics or advertising cookies (`_ga`, `_fbp`, `_hjSession`, etc.) immediately upon page load before user interaction.
- **Asymmetric Dark Patterns**: Offering a large, prominent "Accept All" button paired with a faint, tiny "Settings" or "Learn More" link to hide the reject option.
- **Pre-Selected Toggles**: Providing a preferences dialog where analytics or marketing categories are pre-toggled to "ON".
- **Deceptive Visual Hierarchy**: Styling "Accept" in high-contrast vibrant colors while rendering "Reject" as an almost invisible ghost button or low-contrast link.
- **Inability to Revoke**: Dismissing the banner permanently with no way for the user to reopen preferences and withdraw consent later.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Strict prior consent gating: zero non-essential telemetry executed before affirmative user action.
- First-layer interface displaying symmetrical "Accept All" and "Reject All" buttons with equal visual contrast and accessibility.
- Granular category toggles with all non-essential categories defaulted to the "OFF" position.
- Persistent, accessible trigger enabling continuous consent modification across all sessions.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Implement a central consent state manager that orchestrates the execution of third-party tags based on registered user choices.
- Ensure all tracking initializers are wrapped in conditional guards that check consent storage before injecting external scripts.
- Refactor the consent dialog UI to ensure equal visual weighting and frictionless 1-click rejection.
