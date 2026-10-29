# Audit Module 13: Remove Hidden Fees & Dripped Pricing

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **FTC Rule on Unfair or Deceptive Fees (16 CFR Part 464 - "Junk Fees Rule")**: Prohibits businesses from misrepresenting the total price by omitting mandatory fees from upfront advertised prices ("dripped pricing").
  - **EU Omnibus Directive & Price Indication Directive (Directive 98/6/EC)**: Prices displayed must include all taxes (VAT) and all unavoidable additional fees from the initial presentation of the offer.
  - **Restore Online Shoppers' Confidence Act (ROSCA, 15 U.S.C. §§ 8401–8405)**: Mandates clear and upfront disclosure of all material terms of recurring automatic subscription renewals before obtaining payment billing info.
- **Enforcement & Liability**:
  - FTC civil penalties up to $51,744 per violation; mandatory restitution of hidden fees, regulatory scrutiny across US states and EU member authorities.

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

## 3. Violation Red Flags (İhlal Kriterleri)

- Dripped pricing: Adding surprise mandatory "service fees", "handling surcharges", or "convenience fees" at the final step of checkout that were omitted from initial pricing displays.
- Displaying an annual subscription solely as a low monthly rate without conspicuously disclosing the total annual upfront cost.
- Automatically billing a consumer after a free trial without clear upfront disclosure of the recurring charge date and cost.
- Obscuring recurring subscription commitments inside hidden fine print or accordion menus.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Comprehensive all-in pricing displayed from the initial product/service presentation.
- Equal visual prominence given to both monthly equivalent rates and total annual subscription commitments.
- Explicit disclosures on trial offers specifying conversion dates, recurring amounts, and cancellation mechanisms.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Calculate and present total mandatory fees upfront rather than injecting additional mandatory lines at payment entry.
- Ensure subscription pricing cards clearly display both the annualized total charge and billing intervals.
- Maintain clear order summaries that itemize all charges transparently before payment execution.
