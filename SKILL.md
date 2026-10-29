---
name: dont-get-sued
description: Use when auditing a codebase, web application, SaaS platform, or mobile app for legal compliance, regulatory liability, privacy laws (GDPR, CCPA/CPRA, KVKK), consumer protection rules (FTC, EU Omnibus), accessibility standards (ADA Title III, WCAG 2.2 AA, EAA), and intellectual property licensing risks. Trigger with "dont-get-sued", "legal audit", "gdpr check", "compliance scan", "yasal denetim", "privacy audit", "accessibility lawsuit audit", "hukuki kontrol".
---

# `dont-get-sued` — Master Architectural Compliance & Risk Orchestrator

This skill provides comprehensive architectural compliance guidance across modern software systems (web apps, mobile apps, SaaS backends, e-commerce platforms, APIs). Rather than prescribing rigid file paths or narrow search queries, it defines the **fundamental legal invariants, system boundaries, and regulatory criteria** an agent must evaluate across the entire architecture.

Audit state is persisted and tracked in a root-level `DONT_GET_SUED.md` file.

---

## Core Non-Negotiable Directives

1. **Systemic Architectural Verification**:
   - Evaluate the end-to-end lifecycle of user data, commercial interactions, interface affordances, and third-party integrations across the entire codebase. Do not assume compliance based on surface-level declarations.
2. **Substantive Review (Zero Template Illusions)**:
   - The presence of legal routes or privacy disclaimers does not prove compliance. Verify that policies reflect real corporate identities, actual data flows, and active system behaviors rather than untreated placeholder text.
3. **Evidence-Based Reporting**:
   - When identifying violations or confirming compliance, cite the concrete architectural evidence (components, service logic, API endpoints, database schemas, or stylesheets) that proves the condition.

---

## Audit Lifecycle & Orchestration Flow

```
[System Architecture]
         │
         ▼
1. Initialize / Read DONT_GET_SUED.md (from assets/DONT_GET_SUED.template.md)
         │
         ▼
2. System Discovery & Boundary Mapping (Identify data ingress, egress, checkout, user settings, assets)
         │
         ▼
3. Autonomous Domain Evaluation (via Specialist Subagents or Sequential Orchestration)
         ├─ legal-policy-auditor     -> Statutory policies, corporate transparency, enforceable terms
         ├─ privacy-data-auditor     -> Consent gates, data minimization, 3rd-party egress, DSAR deletion
         ├─ fair-trade-ux-auditor    -> Fair pricing, honest claims, dark patterns, review integrity
         └─ a11y-license-auditor     -> Universal accessibility (WCAG AA), keyboard nav, IP & asset licensing
         │
         ▼
4. Consolidate Findings & Risk Score in DONT_GET_SUED.md
         │
         ▼
5. Formulate Architectural Remediation & Review with User
```

---

## Autonomous Domain Auditor Guides

Agents should consult the high-level specification guides corresponding to their domain:

### 1. `legal-policy-auditor` (Transparency & Governance)
- **Scope**: Statutory policies, contract enforceability, withdrawal rights, business identification, and marketing communication channels.
- **Reference Modules**:
  - `modules/01-legal-policies/01-privacy-policy.md` (GDPR Art 13/14, CCPA, KVKK)
  - `modules/01-legal-policies/02-terms-of-service.md` (Clickwrap doctrine, liability limits)
  - `modules/01-legal-policies/03-refund-policy.md` (Statutory withdrawal, SaaS cancellation)
  - `modules/01-legal-policies/04-cookie-policy.md` (Cookie classification & lifecycle)
  - `modules/01-legal-policies/05-business-details.md` (Impressum, trade registry, corporate identity)
  - `modules/03-consumer-protection/05-email-unsubscribe.md` (CAN-SPAM, 1-click opt-out, physical address)

### 2. `privacy-data-auditor` (Privacy Engineering & Data Protection)
- **Scope**: Prior consent architectures, opt-in integrity, database minimization, telemetry sanitization, child privacy, and right-to-erasure workflows.
- **Reference Modules**:
  - `modules/02-privacy-and-consent/01-cookie-consent-banner.md` (Prior consent, symmetrical rejection)
  - `modules/02-privacy-and-consent/02-form-consents.md` (Unbundled, active opt-in, audit log)
  - `modules/02-privacy-and-consent/03-data-minimization.md` (Schema minimization, logger redaction, TTL)
  - `modules/02-privacy-and-consent/04-third-party-sdks.md` (Telemetry leakage, DPA coverage, masking)
  - `modules/02-privacy-and-consent/05-kids-age-consent.md` (COPPA, neutral age gate, anti-bypass)
  - `modules/02-privacy-and-consent/06-data-deletion-dsar.md` (DSAR hard-purge, vendor propagation)

### 3. `fair-trade-ux-auditor` (Consumer Protection & Ethical Interfaces)
- **Scope**: Coercive UI patterns, pricing transparency, social proof validity, and marketing claim substantiation.
- **Reference Modules**:
  - `modules/03-consumer-protection/01-dark-patterns.md` (Confirmshaming, forced continuity, traps)
  - `modules/03-consumer-protection/02-hidden-fees-pricing.md` (Junk fees, dripped pricing, billing cadence)
  - `modules/03-consumer-protection/03-fake-reviews.md` (Review authenticity, incentive disclosure, gating bans)
  - `modules/03-consumer-protection/04-unsupported-claims.md` (Substantiation doctrine, artificial scarcity)

### 4. `a11y-license-auditor` (Inclusive Usability & Intellectual Property)
- **Scope**: WCAG 2.2 AA digital accessibility, assistive technology compatibility, and third-party asset licensing.
- **Reference Modules**:
  - `modules/04-accessibility-and-licensing/01-alt-text.md` (Non-text equivalents, decorative asset hiding)
  - `modules/04-accessibility-and-licensing/02-color-contrast.md` (4.5:1 text, 3:1 UI boundaries, multi-modal cues)
  - `modules/04-accessibility-and-licensing/03-keyboard-navigation.md` (Keyboard operability, focus rings, no traps)
  - `modules/04-accessibility-and-licensing/04-asset-font-licensing.md` (Webfont EULAs, commercial media, OSS copyleft)

---

## Audit Progression & Exit Gates

- **Finding Severity Tiers**:
  - **CRITICAL_BLOCKER**: Direct statutory violation (e.g. tracking before consent, missing alt text on essential interactions, roach motel cancellation, unlicensed fonts). Must be resolved before public deployment.
  - **REGULATORY_WARNING**: Ambiguous policy terms, low contrast on secondary elements, unverified marketing testimonials. Strongly recommended for remediation.
  - **INFORMATIONAL_GAP**: Best practice enhancements (e.g. adding structured skip-links, optimizing font attribution notices).
- **Exit Criteria for NO_CRITICAL_TECHNICAL_GAPS_DETECTED**:
  - Zero open CRITICAL_BLOCKER violations.
  - Zero open REGULATORY_WARNING items without documented business/legal justification.
  - Deterministic scripts (`scripts/audit-licenses.js`, `scripts/audit-contrast.js`) executed and passing.
  - Verification that remediation maintains system stability and passes build tests.
