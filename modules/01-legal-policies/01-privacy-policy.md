# Audit Module 01: Privacy Policy

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `legal-policy-auditor`  
**Severity**: Critical

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **GDPR (Articles 12, 13, 14)**: Mandates transparent, intelligible, easily accessible information regarding data controller identity, lawful processing bases, retention durations, recipient categories, international transfers, and data subject rights.
  - **CCPA / CPRA (§ 1798.100 & § 1798.130)**: Requires disclosure of categories of personal information collected, sources, commercial purposes, third-party sharing, and consumer opt-out/deletion rights.
  - **KVKK (Law No. 6698, Article 10)**: Mandatory illumination obligation (Aydınlatma Yükümlülüğü) covering controller identity, processing purposes, transfer destinations, collection methods, and legal reasons.
- **Enforcement & Liability**:
  - Administrative fines up to €20M or 4% of worldwide annual turnover under GDPR; civil statutory damages up to $7,500 per intentional violation under CCPA.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Discoverability & Availability**:
  - Verify that the Privacy Policy is permanently accessible from all public navigation surfaces, landing layouts, mobile app menus, and critical data capture interfaces (sign-up, lead generation, checkout).
- **Substantive Accuracy & Completeness**:
  - Verify that the policy accurately names the specific legal operating entity and provides a direct, monitored contact channel for data protection inquiries (e.g. DPO or dedicated privacy email).
  - Verify that all categories of personal data actively collected across the system (identifiers, device telemetry, payment records, analytics) are explicitly disclosed.
  - Verify that the stated legal bases match reality (e.g., contractual necessity for service delivery, consent for marketing, legitimate interest for fraud prevention).
  - Verify that data retention durations or specific retention criteria are stated rather than indefinite retention claims.
  - Verify that all third-party sub-processors (cloud hosts, payment gateways, analytics providers) and cross-border transfer safeguards (Standard Contractual Clauses / SCCs) are enumerated.

---

## 3. Concrete Inspection Heuristics & Signals

- **Common Navigation & Route Signals**:
  - Routes to verify: `/privacy`, `/privacy-policy`, `/legal/privacy`
  - Footer links: Looking for unambiguous anchor labels (`Privacy Policy`, `Gizlilik Politikası`).
- **Essential Policy Content Checklist**:
  - Controller Name: Full registered entity (not just a generic product brand name).
  - Dedicated Contact: Direct email (e.g. `privacy@example.com` or `dpo@example.com`).
  - Third-Party Processors: Explicit listing of cloud providers (AWS, GCP), billing gateways (Stripe), error trackers (Sentry), and marketing tools.
  - Cross-Border Safeguards: Explicit mention of Standard Contractual Clauses (SCCs) or adequacy decisions for international data transfers.
  - User Rights Section: Clear enumeration of rights (access, rectification, erasure, data portability, right to object, right to lodge a complaint with a supervisory authority).

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Missing or broken link to the Privacy Policy on public surfaces or registration views.
- Policy text consists of unedited boilerplate or generic templates containing placeholder tokens (e.g. `[Insert Company Name]`, `example.com`).
- Failure to identify the legal entity acting as Data Controller or omission of contact details.
- Failure to list data subject rights (access, rectification, erasure, portability, objection, and withdrawal of consent).
- Silent data processing: Collecting telemetry, analytics, or behavioral profiles without disclosing the processing purpose in the policy.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Conspicuous, permanent navigation links labeled "Privacy Policy" accessible across all viewports and views.
- Real, verified corporate identity, registered address, and responsive contact email disclosed within the policy.
- Clear, plain-language breakdown of collected data categories, lawful processing grounds, retention timelines, third-party disclosures, and statutory user rights.
- Explicit effective date and last-updated timestamp clearly displayed at the top of the policy.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Integrate a dedicated, permanent route or accessible view dedicated to privacy disclosures.
- Link the Privacy Policy directly adjacent to primary user registration and conversion action points so users are informed at the exact point of data ingress.
- Establish an automated or operational process to update the policy whenever new third-party services or data collection pipelines are added to the system architecture.
