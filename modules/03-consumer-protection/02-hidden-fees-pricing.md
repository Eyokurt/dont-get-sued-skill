# Audit Module 13: Remove Hidden Fees & Dripped Pricing

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `fair-trade-ux-auditor`  
**Severity**: Critical

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **FTC Act Section 5 (15 U.S.C. § 45 - Unfair or Deceptive Acts or Practices)**: Longstanding enforcement prohibiting "drip pricing"—the practice of advertising a headline price that is not available to consumers because mandatory fees are revealed only as the buying process proceeds.
  - **California Drip Pricing Law (SB 478 / AB 488, Cal. Civ. Code § 1770(a)(29) - Effective July 2024)**: Broadly prohibits advertising, displaying, or offering a price for a good or service that does not include all mandatory taxes, fees, and charges (excluding only government taxes and shipping). Applies across e-commerce, digital subscriptions, food delivery, and service platforms.
  - **EU Omnibus Directive & Price Indication Directive (Directive 98/6/EC)**: Prices displayed must include all taxes (VAT) and all unavoidable additional fees from the initial presentation of the offer.
  - **Restore Online Shoppers' Confidence Act (ROSCA, 15 U.S.C. §§ 8401–8405)**: Mandates clear and upfront disclosure of all material terms of recurring automatic subscription renewals before obtaining payment billing info.
  - *(Note on Scope: FTC 16 CFR Part 464 is specifically targeted at hotel/lodging resort fees and live-event ticketing; general e-commerce and SaaS platforms are governed primarily under FTC Act § 5, ROSCA, California SB 478, and state consumer protection acts).*
- **Enforcement & Liability**:
  - Civil penalties under California Consumer Legal Remedies Act (statutory damages up to $1,000 per violation, class actions); FTC civil enforcement, mandatory restitution of hidden fees, and state Attorney General investigations.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Upfront All-In Pricing**:
  - Verify that the advertised price on product and pricing pages represents the true total price inclusive of all mandatory service charges, platform fees, and unavoidable taxes before checkout starts.
- **Subscription Cadence & Commitment Clarity**:
  - Verify that when annual plans are displayed as a monthly equivalent (e.g. "$10/mo"), the actual total upfront charge (e.g. "Billed annually as one payment of $120") is presented with equal prominence and clarity.
- **Free Trial Conversion Disclosure**:
  - Verify that free trial offers clearly and conspicuously disclose the trial duration, the exact date recurring charges begin, the recurring price after conversion, and the cancellation procedure.
- **Currency & Exchange Rate Transparency**:
  - Verify that prices clearly state the applicable currency and avoid ambiguous conversions or hidden foreign transaction surcharges.

---

## 3. Concrete Inspection Heuristics & Signals

- **Checkout Calculation Heuristics**:
  - Inspect cart calculation and billing models for surprise line items injected between catalog presentation and payment execution:
    - `"Service Fee"`, `"Processing Surcharge"`, `"Platform Maintenance Fee"`
  - Verify: If a fee is mandatory, is it factored directly into the headline base price shown on the landing page?
- **Pricing Card UI Heuristics**:
  - Inspect annual billing toggles for deceptive monthly framing:
    - FAIL: Large `$10/mo` headline with no visible annual total, or annual total hidden in faint fine print.
    - PASS: Large `$10/mo` paired with equally legible `$120 billed annually`.
- **Trial Terms Heuristics**:
  - Inspect payment collection views for clear trial conversion disclosures:
    - `"14 days free, then $29/month starting on [Date]. Cancel anytime online."`

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Dripped pricing: Adding surprise mandatory "service fees", "handling surcharges", or "convenience fees" at the final step of checkout that were omitted from initial pricing displays.
- Displaying an annual subscription solely as a low monthly rate without conspicuously disclosing the total annual upfront cost.
- Automatically billing a consumer after a free trial without clear upfront disclosure of the recurring charge date and cost.
- Obscuring recurring subscription commitments inside hidden fine print or accordion menus.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Comprehensive all-in pricing displayed from the initial product/service presentation.
- Equal visual prominence given to both monthly equivalent rates and total annual subscription commitments.
- Explicit disclosures on trial offers specifying conversion dates, recurring amounts, and cancellation mechanisms.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Calculate and present total mandatory fees upfront rather than injecting additional mandatory lines at payment entry.
- Ensure subscription pricing cards clearly display both the annualized total charge and billing intervals.
- Maintain clear order summaries that itemize all charges transparently before payment execution.
