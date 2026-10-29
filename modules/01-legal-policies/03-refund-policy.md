# Audit Module 03: Refund & Cancellation Policy

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `legal-policy-auditor`  
**Severity**: High

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **EU Consumer Rights Directive (Directive 2011/83/EU, Articles 9–16)**: Consumers purchasing online possess a statutory right of withdrawal ("cooling-off period") of at least 14 calendar days without giving any reason.
  - **Digital Content Exception (Article 16(m))**: For digital downloads, software, or streaming, the 14-day withdrawal right can only be waived if the consumer provides express prior consent and explicitly acknowledges the loss of the right upon immediate performance/download.
  - **Restore Online Shoppers' Confidence Act (ROSCA, 15 U.S.C. §§ 8401–8405)**: Mandates simple mechanisms for a consumer to stop recurring charges from being placed on their account.
  - **State Automatic Renewal Laws (ARLs)**:
    - **California ARL (Cal. Bus. & Prof. Code § 17600 et seq., as amended by AB 390 & SB 313)**: Strict statutory mandate that consumers who accepted an automatic renewal or continuous service offer online must be permitted to terminate the automatic renewal exclusively online without obstruction or complex retention mazes.
    - **New York, Colorado, Delaware, and Illinois ARLs**: Mandate conspicuous affirmative consent for recurring billing and advance renewal notice reminders.
  - **UK Consumer Rights Act 2015**: Statutory remedies for non-conforming digital content and transparent cancellation terms.
- **Enforcement & Liability**:
  - Regulatory penalties from state Attorneys General (multi-million dollar settlements under California ARL); payment processor dispute penalties, increased chargeback ratios, and automatic refund orders from regulatory tribunals.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Policy Discoverability & Transparency**:
  - Verify that a clear, comprehensive Refund & Cancellation Policy is publicly accessible prior to payment and directly linked at checkout surfaces.
- **Digital Content Withdrawal Waiver**:
  - For digital downloads, SaaS provisioning, or instant streaming, verify whether the checkout flow captures express prior consent acknowledging immediate waiver of the 14-day statutory right of withdrawal.
- **Online Self-Service Cancellation (ARL / ROSCA Compliance)**:
  - Verify that recurring subscription cancellation is available through an online, self-service mechanism inside user account settings.
  - Verify that cancelling does not require phone calls, physical mail, live chat waiting queues, or convoluted retention surveys if the user enrolled online.
- **Renewal Notices & Trial Transitions**:
  - Verify that automatic renewal terms, trial expiration timelines, and billing frequencies are communicated before recurring charges execute.

---

## 3. Concrete Inspection Heuristics & Signals

- **Self-Service Cancellation Heuristics**:
  - Inspect user account/profile settings for direct subscription management:
    - `"Cancel Subscription"`, `"Manage Billing"`, `"Downgrade Plan"`
  - Verify that clicking cancel triggers a straightforward confirmation dialog, not a prompt directing the user to call a customer support phone line during specific office hours.
- **Digital Waiver Heuristics**:
  - Inspect instant download / streaming checkout flows for express waiver text:
    - `"I consent to immediate performance and acknowledge that I lose my statutory right of withdrawal once download or streaming begins."`
- **Notice & Reminder Workflows**:
  - Verify background worker jobs or transactional email workflows sending renewal reminder notices (15 to 30 days prior to annual subscription renewals).

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Complete absence of a documented refund or cancellation policy on a platform collecting commercial payments.
- Blanket statements like *"All sales are strictly final under all circumstances"* without accounting for statutory consumer rights.
- Roach motel cancellation flows: Requiring customers who subscribed online to call a customer support phone number during limited business hours to cancel.
- Immediate fulfillment of digital goods without capturing statutory withdrawal waiver consent.
- Silent auto-renewals of annual plans without prior notice or transparent cancellation avenues.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Conspicuously displayed refund criteria, return windows, processing timelines, and exceptions linked at payment initiation.
- Digital fulfillment flows require explicit customer acknowledgment before immediate access is granted if waiving statutory cooling-off rights.
- Self-service cancellation enabled within the user dashboard, executable in an equal or lesser number of steps than the initial subscription.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Integrate direct self-service subscription cancellation triggers into user billing and profile interfaces.
- Add an explicit acknowledgment checkbox or clear disclosure in digital checkouts ensuring consumers are informed about digital delivery waiver rules.
- Maintain clear refund processing schedules and dispute resolution instructions to prevent chargeback escalations.
