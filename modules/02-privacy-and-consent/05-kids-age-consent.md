# Audit Module 10: Age Consent & Children's Data Protection

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **COPPA (Children's Online Privacy Protection Act, 15 U.S.C. §§ 6501–6506)**: Applies to commercial online services directed to children under 13, or general audience platforms with actual knowledge of collecting personal information from children under 13.
  - **Verifiable Parental Consent (VPC)**: Mandatory requirement to obtain verifiable consent from a parent or legal guardian before collecting, using, or disclosing personal data from a child.
  - **GDPR Article 8 (GDPR-K)**: For information society services offered directly to children, processing is lawful only if the child is at least 16 years old (or lower if set by member state law, but never below 13). Below that age, parental authorization is legally mandatory.
  - **UK Age Appropriate Design Code (AADC)**: 15 standards enforcing high-privacy defaults, geolocation disabling, and a ban on behavioral profiling and nudge techniques for children.
- **Enforcement & Liability**:
  - FTC penalties up to $50,120 per violation per child (e.g., Epic Games / Fortnite settled for $520M; YouTube settled for $170M).

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Neutral Age-Gating Mechanisms**:
  - For services with mixed audiences or child-accessible features, verify whether an age-verification interface is present that collects date of birth in a neutral manner without signaling the minimum age threshold in advance.
- **Session-Based Anti-Bypass Protection**:
  - Verify that when a user enters an age below the legal threshold (e.g. < 13), the system persists a lockout state in session storage or HTTP-only cookies to prevent the user from simply hitting "Back" or refreshing to re-enter an adult age.
- **Default Privacy Safeguards for Minors**:
  - Verify that if minor accounts are supported, behavioral ad targeting, precise geolocation tracking, and public profile indexing are strictly disabled by default.
- **Verifiable Parental Consent (VPC) Integration**:
  - For child-directed platforms, verify whether an approved parental verification mechanism (micro-payment verification, signed consent, or government ID check) is integrated prior to data collection.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Operating child-appealing or youth-directed features with zero age verification or parental consent workflows.
- Biased age gates that state *"You must be 13 to register"* and permit immediate resubmission upon entering an underage birthdate.
- Running behavioral advertising pixels (Meta, TikTok) or cross-site tracking on services known to be used by children.
- Defaulting minor profiles to public visibility or enabling precise device geolocation without parental authorization.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Neutral age-collection interface without prompting or hinting at the minimum age requirement.
- Persistent session lockout preventing immediate bypass attempts by underage users.
- Maximum privacy defaults (private profiles, no targeted tracking, no location harvesting) applied to minor accounts.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Implement a neutral date-of-birth input flow that calculates age server-side or in secure application state.
- Ensure underage verification results persist across the session to block immediate back-and-retry circumvention.
- Establish architectural boundaries ensuring no marketing telemetry or profiling algorithms touch accounts flagged as minors.
