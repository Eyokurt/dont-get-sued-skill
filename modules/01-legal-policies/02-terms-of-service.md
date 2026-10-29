# Audit Module 02: Terms of Service (ToS)

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `legal-policy-auditor`  
**Severity**: High

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **Contract Formation & Assent Doctrine**: Clickwrap vs. Browsewrap legal doctrines. Passive browsewrap notices ("By browsing this site you agree to our terms") are routinely struck down in court (*Nguyen v. Barnes & Noble Inc.*, *Berman v. Freedom Financial Network*). Affirmative manifestation of assent is mandatory.
  - **General Contract Law & Restatement (Second) of Contracts § 211**: Standardized agreements must ensure terms are conspicuous, reasonably communicated, and not unconscionable. (Note: UCC Article 2 applies exclusively to transactions in tangible goods, not SaaS, digital services, or software licenses).
  - **Consumer Protection Directives**: EU Unfair Contract Terms Directive (Directive 93/13/EEC), UK Consumer Rights Act 2015. Clauses creating significant, unilateral imbalances in parties' rights are legally null and void.
- **Enforcement & Liability**:
  - Unenforceability of mandatory arbitration clauses and class-action waivers; unlimited civil exposure for service outages, data loss, or consequential business damages.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Assent Architecture (Clickwrap vs. Browsewrap)**:
  - Verify that the application requires an explicit, affirmative manifestation of assent (e.g. clicking "Create Account", "Subscribe", or checking an agreement box) directly adjacent to unambiguous terms disclosure text before account creation or financial transactions occur.
- **Limitation of Liability & Warranty Disclaimers**:
  - Verify that the terms contain explicit disclaimers of implied warranties ("AS IS", "AS AVAILABLE") and establish a clear cap on direct damages (e.g. capped at the total amount paid by the customer over the prior 12 months, or nominal statutory cap).
- **Acceptable Use & Platform Rules**:
  - Verify that user conduct prohibitions (anti-scraping, anti-reverse-engineering, abuse, denial-of-service attacks, unauthorized credential sharing) are defined.
- **Intellectual Property & Licensing**:
  - Verify that the platform explicitly protects proprietary software and content while securing necessary non-exclusive licenses to host and process User-Generated Content (UGC).
- **Dispute Resolution & Governing Law**:
  - Verify that governing jurisdiction, dispute resolution protocols, and arbitration/class-action waiver provisions (where legally enforceable) are established.

---

## 3. Concrete Inspection Heuristics & Signals

- **Assent Mechanisms**: Inspect all user onboarding, checkout, and upgrade flows for explicit clickwrap phrases:
  - `"By creating an account, you agree to our Terms of Service"`
  - `"By completing this purchase, you agree to the Terms of Service"`
- **Essential Clauses to Verify**:
  - Disclaimer of Warranties: `"AS IS"`, `"AS AVAILABLE"`, disclaimer of merchantability and fitness for a particular purpose.
  - Limitation of Liability: Monetary liability cap, waiver of consequential, indirect, and punitive damages.
  - Prohibited Conduct: Prohibiting automated scraping, rate-limit circumvention, reverse compilation.
  - Governing Law & Forum: Explicit identification of state/country court jurisdiction.
- **Red Flag Patterns in Code**:
  - Placing legal links in faint, low-contrast text below the viewport fold without any agreement text above the submit button.
  - Pre-selecting agreement checkboxes (`checked={true}`).

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Relying on passive browsewrap (a solitary footer link without affirmative agreement during signup or checkout).
- Burying agreement notices in low-contrast, microscopic fonts distant from the primary action button.
- Unilateral modification clauses stating the company can change terms at any time without notification or right to cancel.
- Complete absence of limitation of liability provisions, exposing the business to uncapped consequential damages.
- Unbalanced clauses that attempt to eliminate statutory consumer rights guaranteed by local laws (e.g., attempting to waive liability for gross negligence or willful misconduct).

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Conspicuous clickwrap agreement integrated at every point of contract formation (account registration, checkout, plan upgrades).
- Terms disclosure positioned directly adjacent to the primary conversion button, formatted in clear, readable text with functioning hyperlinks to the full terms.
- Robust clauses covering user obligations, intellectual property ownership, warranty disclaimers, liability caps, termination rights, and governing law.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Upgrade passive browsewrap notices into unambiguous clickwrap agreements where completing registration represents explicit legal assent.
- Ensure the user interface layout places the terms notice and link immediately above or adjacent to the submission trigger.
- Maintain an audit log or version tracking system to record when terms are updated and when active users accepted specific versions.
