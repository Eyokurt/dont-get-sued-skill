# Audit Module 07: Form Consents (Unbundled & No Pre-ticked Boxes)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **GDPR (Article 4(11) & Article 7)**: Consent must be freely given, specific, informed, and unambiguous. It must be demonstrated by an affirmative action. Pre-ticked boxes do not constitute valid legal consent.
  - **GDPR Art 7(4) (Bundled Consent Prohibition)**: Performance of a contract or service delivery cannot be made conditional on consent to the processing of personal data that is not necessary for that performance.
  - **EDPB Guidelines on Consent (05/2020)**: Tying general terms of service acceptance to marketing communications consent is unlawful.
- **Enforcement & Liability**:
  - Administrative fines under GDPR Art 83(5) up to €20M or 4% of worldwide turnover for unlawful processing based on invalid consent; orders to delete marketing distribution lists collected without valid consent.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Consent Unbundling**:
  - Verify that acknowledgment of legal terms (Terms of Service / Privacy Policy) is completely separated from optional marketing, newsletter, or third-party sharing opt-ins.
- **Unchecked by Default**:
  - Verify that all optional consent checkboxes start completely blank and unselected across all form interfaces (registration, lead capture, checkout, gated downloads).
- **Freely Given Standard**:
  - Verify that marketing consent is never marked as a mandatory (`required`) field to create an account or complete a purchase.
- **Consent Audit Trail & Telemetry**:
  - Verify that when a user grants consent, the backend architecture persists an immutable audit record containing the user identifier, exact consent category, timestamp, IP hash, and the specific version of the policy agreed to.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Checkboxes for marketing communications, partner offers, or newsletters that are pre-selected by default.
- Bundled consent wording: *"I agree to the Terms of Service AND consent to receive marketing newsletters and partner promotions"*.
- Making marketing opt-in a mandatory prerequisite to access basic non-marketing software features.
- Failure to store an audit trail of consent, making it impossible to prove valid consent during a regulatory inquiry.
- Obscuring consent language inside lengthy fine print without distinct checkbox interaction.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Explicit legal terms acknowledgment cleanly separated from optional marketing communications.
- Zero pre-checked boxes across all registration and intake workflows.
- Backend persistence of a verifiable consent audit trail capturing timestamp, user identifier, and policy version.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Decouple form submission state so that accepting terms and granting marketing consent are handled by distinct, independent state properties.
- Ensure all marketing checkboxes render in an unselected state on component initialization.
- Design backend database models to record individual consent transactions with immutable metadata.
