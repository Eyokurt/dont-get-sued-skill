# Audit Module 06: Cookie Consent Banner (Prior Consent & GPC Signal)

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `privacy-data-auditor`  
**Severity**: Critical

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **CJEU Planet49 Ruling (Case C-673/17)**: Storing and accessing cookies requires active, informed consent. Pre-ticked checkboxes or implied consent through browsing are strictly unlawful.
  - **EDPB Guidelines on Dark Patterns in Cookie Banners (Guidelines 03/2022)**: Requiring more clicks or effort to reject cookies than to accept them (asymmetric choice) violates GDPR Art 7. "Reject All" must be equally prominent on the first layer.
  - **ePrivacy Directive (Directive 2002/58/EC) & GDPR Art 7**: Prior consent mandate. No non-essential cookies, trackers, or pixels may execute before affirmative opt-in is granted.
  - **Global Privacy Control (GPC) & California Consumer Privacy Act (CPRA § 1798.135)**: Mandates that businesses honor user-enabled opt-out preference signals (such as GPC transmitted via browser header `Sec-GPC` or JavaScript `navigator.globalPrivacyControl`) as a valid request to opt out of the sale or sharing of personal data.
- **Enforcement & Liability**:
  - Hundreds of millions in cumulative regulatory fines across France (CNIL), Ireland (DPC), and Spain (AEPD); California AG enforcement actions specifically penalizing businesses for ignoring GPC signals (e.g. Sephora $1.2M settlement).

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Prior Consent Gating (Zero Premature Execution)**:
  - Verify that the application architecture guarantees that non-essential scripts (analytics, marketing pixels, session replay, ad telemetry) are strictly blocked from loading or executing until affirmative consent is confirmed.
- **Global Privacy Control (GPC) Signal Recognition**:
  - Verify that client-side and server-side consent managers detect and respect `navigator.globalPrivacyControl === true` or the HTTP `Sec-GPC: 1` header, automatically suppressing non-essential third-party advertising tracking.
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

## 3. Concrete Inspection Heuristics & Signals

- **Common Third-Party Tracking Domains to Check for Unconditional Loading**:
  - Google Analytics / Tag Manager: `googletagmanager.com`, `google-analytics.com`
  - Meta Pixel: `connect.facebook.net`, `fbevents.js`
  - Microsoft Clarity: `www.clarity.ms`
  - TikTok Pixel: `analytics.tiktok.com`
  - Session Replay / Heatmaps: `static.hotjar.com`, `cdn.logrocket.io`, `fullstory.com`
- **Standard Cookies to Check for Premature Writing**:
  - `_ga`, `_gid`, `_fbp`, `_clck`, `_hjSession`, `_tt_enable_cookie`
- **GPC Detection Code Patterns**:
  - Verify presence of GPC listener logic:
    ```js
    if (typeof navigator !== "undefined" && navigator.globalPrivacyControl === true) {
      // Automatically disable behavioral tracking and third-party data sharing
    }
    ```
- **Banner Layout Heuristics**:
  - Check button label symmetry:
    - PASS: Both `"Accept All"` and `"Reject All"` appear on Layer 1.
    - FAIL: Layer 1 contains only `"Accept All"` and `"Manage Settings"` / `"Customize"`.

---

## 4. Violation Red Flags (İhlal Kriterleri)

- **Premature Leakage**: Setting analytics or advertising cookies immediately upon page load before user interaction.
- **Ignoring GPC Signals**: Continuing to execute cross-site tracking pixels when `navigator.globalPrivacyControl === true`.
- **Asymmetric Dark Patterns**: Offering a large, prominent "Accept All" button paired with a faint, tiny "Settings" or "Learn More" link to hide the reject option.
- **Pre-Selected Toggles**: Providing a preferences dialog where analytics or marketing categories are pre-toggled to "ON".
- **Deceptive Visual Hierarchy**: Styling "Accept" in high-contrast vibrant colors while rendering "Reject" as an almost invisible ghost button or low-contrast link.
- **Inability to Revoke**: Dismissing the banner permanently with no way for the user to reopen preferences and withdraw consent later.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Strict prior consent gating: zero non-essential telemetry executed before affirmative user action.
- Automatic honoring of Global Privacy Control (GPC) opt-out signals.
- First-layer interface displaying symmetrical "Accept All" and "Reject All" buttons with equal visual contrast and accessibility.
- Granular category toggles with all non-essential categories defaulted to the "OFF" position.
- Persistent, accessible trigger enabling continuous consent modification across all sessions.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Implement a central consent state manager that orchestrates the execution of third-party tags based on registered user choices and GPC headers.
- Ensure all tracking initializers are wrapped in conditional guards that check consent storage before injecting external scripts.
- Refactor the consent dialog UI to ensure equal visual weighting and frictionless 1-click rejection.
