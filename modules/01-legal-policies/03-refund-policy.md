# Audit Module 03: Refund & Cancellation Policy

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **EU Consumer Rights Directive (Directive 2011/83/EU, Articles 9–16)**: Consumers purchasing online possess a statutory right of withdrawal ("cooling-off period") of at least 14 calendar days without giving any reason.
  - **Digital Content Exception (Article 16(m))**: For digital goods, software, or streaming, the 14-day withdrawal right can only be waived if the consumer provides express prior consent and explicitly acknowledges the loss of the right upon immediate performance/download.
  - **FTC "Click-to-Cancel" Rule (Negative Option Rule, 2024)**: Sellers must provide a simple cancellation mechanism that is at least as easy to use as the mechanism used to sign up (same medium, online self-service cancellation mandatory if signed up online).
  - **UK Consumer Rights Act 2015**: Statutory remedies for non-conforming digital content and clear cancellation terms.
- **Enforcement & Liability**:
  - FTC civil penalties up to $51,744 per violation; payment processor account suspension, increased chargeback ratios, and automatic refund orders from regulatory tribunals.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Policy Discoverability & Transparency**:
  - Verify that a clear, comprehensive Refund & Cancellation Policy is publicly accessible prior to payment and directly linked at checkout surfaces.
- **Digital Content Withdrawal Waiver**:
  - For digital downloads, SaaS provisioning, or instant streaming, verify whether the checkout flow captures express prior consent acknowledging immediate waiver of the 14-day statutory right of withdrawal.
- **Cancellation Ergonomics (Click-to-Cancel Compliance)**:
  - Verify that recurring subscription cancellation is available through an online, self-service mechanism inside the user account settings.
  - Verify that cancelling does not require phone calls, physical mail, live chat waiting queues, or convoluted retention surveys if the user enrolled online.
- **Renewal Notices & Trial Transitions**:
  - Verify that automatic renewal terms, trial expiration timelines, and billing frequencies are communicated before recurring charges execute.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Complete absence of a documented refund or cancellation policy on a platform collecting commercial payments.
- Blanket statements like *"All sales are strictly final under all circumstances"* without accounting for statutory consumer rights.
- Roach motel cancellation flows: Requiring customers who subscribed online to call a customer support phone number during limited business hours to cancel.
- Immediate fulfillment of digital goods without capturing statutory withdrawal waiver consent.
- Silent auto-renewals of annual plans without prior notice or transparent cancellation avenues.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Conspicuously displayed refund criteria, return windows, processing timelines, and exceptions linked at payment initiation.
- Digital fulfillment flows require explicit customer acknowledgment before immediate access is granted if waiving statutory cooling-off rights.
- Self-service cancellation enabled within the user dashboard, executable in an equal or lesser number of steps than the initial subscription.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Integrate direct self-service subscription cancellation triggers into user billing and profile interfaces.
- Add an explicit acknowledgment checkbox or clear disclosure in digital checkouts ensuring consumers are informed about digital delivery waiver rules.
- Maintain clear refund processing schedules and dispute resolution instructions to prevent chargeback escalations.
