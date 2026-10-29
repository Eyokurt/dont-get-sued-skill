# Audit Module 02: Terms of Service (ToS)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **Contract Formation & Enforceability**: Clickwrap vs. Browsewrap legal doctrines. Passive browsewrap notices ("By browsing this site you agree to our terms") are routinely ruled unenforceable in court (*Nguyen v. Barnes & Noble Inc.*, *Berman v. Freedom Financial Network*). Affirmative manifestation of assent is mandatory.
  - **Consumer Protection Directives**: EU Unfair Contract Terms Directive (Directive 93/13/EEC), UK Consumer Rights Act 2015. Clauses creating significant imbalances in parties' rights are legally null and void.
  - **UCC & Commercial Codes**: Warranty disclaimers (§ 2-316) and limitation of consequential damages must be conspicuous.
- **Enforcement & Liability**:
  - Unenforceability of arbitration provisions and class-action waivers; unlimited civil exposure for system outages, data loss, or service interruption.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Assent Architecture (Clickwrap vs. Browsewrap)**:
  - Verify that the application requires an explicit, affirmative manifestation of assent (e.g. clicking "Create Account", "Subscribe", or checking an agreement box) directly adjacent to unambiguous terms disclosure text before account creation or financial transactions occur.
- **Limitation of Liability & Warranty Disclaimers**:
  - Verify that the terms contain explicit disclaimers of implied warranties ("AS IS", "AS AVAILABLE") and establish a clear cap on direct damages (e.g. capped at the total amount paid by the customer over the prior 12 months).
- **Acceptable Use & Platform Rules**:
  - Verify that user conduct prohibitions (anti-scraping, anti-reverse-engineering, abuse, denial-of-service attacks, unauthorized credential sharing) are defined.
- **Intellectual Property & Licensing**:
  - Verify that the platform explicitly protects proprietary software and content while securing necessary non-exclusive licenses to host and process User-Generated Content (UGC).
- **Dispute Resolution & Governing Law**:
  - Verify that governing jurisdiction, dispute resolution protocols, and arbitration/class-action waiver provisions (where legally enforceable) are established.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Relying on passive browsewrap (a solitary footer link without affirmative agreement during signup or checkout).
- Burying agreement notices in low-contrast, microscopic fonts distant from the primary action button.
- Unilateral modification clauses stating the company can change terms at any time without notification or right to cancel.
- Complete absence of limitation of liability provisions, exposing the business to uncapped consequential damages.
- Unbalanced clauses that attempt to eliminate statutory consumer rights guaranteed by local laws (e.g., attempting to waive liability for gross negligence or willful misconduct).

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Conspicuous clickwrap agreement integrated at every point of contract formation (account registration, checkout, plan upgrades).
- Terms disclosure positioned directly adjacent to the primary conversion button, formatted in clear, readable text with functioning hyperlinks to the full terms.
- Robust clauses covering user obligations, intellectual property ownership, warranty disclaimers, liability caps, termination rights, and governing law.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Upgrade passive browsewrap notices into unambiguous clickwrap agreements where completing registration represents explicit legal assent.
- Ensure the user interface layout places the terms notice and link immediately above or adjacent to the submission trigger.
- Maintain an audit log or version tracking system to record when terms are updated and when active users accepted specific versions.
