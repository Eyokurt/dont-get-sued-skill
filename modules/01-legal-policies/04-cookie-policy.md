# Audit Module 04: Cookie Policy

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **EU ePrivacy Directive (Directive 2002/58/EC as amended, Article 5(3))**: Requires clear and comprehensive information about the storage of and access to information stored in a user's terminal equipment (cookies, local storage, indexedDB, canvas fingerprinting).
  - **GDPR (Recital 30)**: Treats cookie identifiers and device telemetry as personal data subject to privacy principles.
  - **EDPB Guidelines on Consent & Transparency**: Mandates granular explanations of cookie categories, providers, purposes, and retention periods.
- **Enforcement & Liability**:
  - Millions in administrative fines from European data protection authorities (CNIL, AEPD, Garante); orders to purge unlawfully collected telemetry datasets.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Policy Independence & Granularity**:
  - Verify that a dedicated Cookie Policy (or distinct, structured section within the Privacy Center) exists and does not merely gloss over cookies with vague generalities.
- **Cookie & Storage Inventory Accuracy**:
  - Verify that every cookie, local storage key, session storage item, or tracking pixel deployed across the platform is accurately cataloged.
  - Verify that cookies are categorized correctly into standard tiers: Strictly Necessary, Functional/Preferences, Performance/Analytics, and Marketing/Targeting.
- **Detailed Tracking Attributes**:
  - Verify that each categorized tracker discloses:
    1. Exact cookie / key identifier name.
    2. Provider domain (First-party vs. Third-party).
    3. Concrete operational purpose (e.g. session persistence vs. cross-site advertising).
    4. Exact retention period / expiration lifespan.
- **Interactive Management & Consent Withdrawal**:
  - Verify that the Cookie Policy provides an interactive trigger or instructions allowing users to reopen the Cookie Preference Manager and modify or revoke consent at any time.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Setting non-essential tracking cookies without providing a dedicated, detailed Cookie Policy.
- Generic statements like *"We use cookies to improve your experience"* without disclosing specific cookies, providers, or purposes.
- Misclassifying marketing or third-party behavioral tracking cookies as "Strictly Necessary" to bypass consent requirements.
- Omitting cookie retention lifespans or claiming cookies are temporary when they persist for years.
- Providing no mechanism or instructions for users to withdraw consent or alter cookie settings after initial selection.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Conspicuously linked Cookie Policy accessible across all views.
- Up-to-date, structured inventory detailing cookie names, providers, purposes, categories, and retention lifespans.
- Permanent, functioning interactive link or control embedded within the policy to reopen user consent preferences.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Audit all client-side and server-side tracking mechanisms to build a comprehensive, automated inventory of cookies and storage keys.
- Decouple "Strictly Necessary" session management tokens from optional analytics and advertising scripts.
- Provide users with an ongoing, easily reachable preference center to change their choices whenever they desire.
