# Audit Module 15: Remove Unsupported Claims & Deceptive Urgency

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **FTC Act Section 5 (Unfair or Deceptive Practices, 15 U.S.C. § 45)**: Requires that objective marketing claims about product efficacy, performance, or health be substantiated by competent and reliable scientific or empirical evidence before claims are made.
  - **FTC Substantiation Doctrine**: Advertisers must possess a reasonable basis for objective product claims before publishing them.
  - **EU Unfair Commercial Practices Directive (Directive 2005/29/EC, Annex I)**: Blacklists deceptive commercial practices, including falsely stating that a product will only be available for a very limited time to force an immediate purchasing decision.
  - **EU Green Claims Directive**: Prohibits unsubstantiated environmental, eco-friendly, or carbon-neutral claims without certified verification.
- **Enforcement & Liability**:
  - Regulatory enforcement, corrective advertising orders, disgorgement of profits, and mandatory restitution.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Authenticity of Urgency & Countdown Timers**:
  - Verify that countdown timers or promotional deadlines connect to genuine server-side campaign schedules rather than synthetic client-side loops that reset every time the page refreshes.
- **Scarcity & Inventory Integrity**:
  - Verify that stock alerts (e.g. *"Only 2 items left!"*) or social proof indicators (e.g. *"5 people viewing right now"*) reflect actual live database inventory queries rather than randomized or static hardcoded values.
- **Objective Claim Substantiation**:
  - Verify that performance claims (e.g. *"10x faster"*, *"#1 rated"*, *"Guaranteed 50% ROI"*) link to verifiable benchmarks, testing methodologies, or external studies.
- **Environmental & Health Claims**:
  - Verify that health-related or green marketing claims are accompanied by required statutory disclaimers and third-party certifications.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Fake countdown timers that reset on every browser reload or create artificial panic deadlines.
- Fabricating stock counters using client-side random number generation.
- Unsubstantiated superlative claims ("World's #1 Platform", "Guaranteed Profits") without competent empirical evidence or disclaimers.
- Uncertified greenwashing claims (e.g. "100% Eco-Friendly" without certification credentials).

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Promotional deadlines reflect genuine calendar schedules backed by server-side logic.
- Stock counters and availability metrics reflect authentic inventory data.
- Objective performance assertions are backed by cited benchmark methodologies and appropriate disclaimers.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Replace artificial countdown scripts with real, date-backed promotional banners managed by backend campaign state.
- Connect scarcity indicators to real inventory APIs, or remove them entirely if real-time stock tracking is unavailable.
- Review and refine marketing copy to state substantiated, verifiable facts rather than unsubstantiated absolutes.
