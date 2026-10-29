# Audit Module 11: Data Deletion Request (DSAR & Right to Erasure)

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `privacy-data-auditor`  
**Severity**: Critical

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **GDPR (Article 17 - "Right to Erasure / Right to be Forgotten")**: The data subject has the right to obtain from the controller the erasure of personal data concerning him or her without undue delay. Mandatory compliance within 30 calendar days.
  - **CCPA / CPRA (§ 1798.105 - "Right to Delete")**: Consumers have the legal right to request the deletion of personal information collected by a business. 45-day statutory SLA.
  - **Mobile Platform App Store Rules**: Both Apple App Store (Guideline 5.1.1(v)) and Google Play Store policies require that apps supporting account creation must provide an easily discoverable in-app mechanism for permanent account and data deletion.
- **Enforcement & Liability**:
  - Direct app rejection or ban from app marketplaces; administrative fines up to €20M / 4% global turnover for failing to honor statutory deletion requests.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Discoverability & Self-Service Availability**:
  - Verify that users can easily discover and initiate account and data deletion from within their account settings without being forced to send physical letters or make phone calls.
- **Permanent Purge vs. Superficial Soft-Deletion**:
  - Verify that the deletion process permanently scrubs, overwrites, or irreversibly anonymizes personal data (name, email, phone, IP logs, credentials) rather than merely flipping a boolean flag (e.g. `is_deleted = true`) while leaving all PII intact indefinitely.
- **Downstream Third-Party Cascade**:
  - Verify that account deletion triggers automated events or webhooks that cascade the deletion to third-party processors (payment processors, CRM systems, analytics databases, email marketing lists).
- **Statutory Retention Exceptions**:
  - Verify that data retained for legal or tax obligations (e.g. financial transaction records required for 7–10 years under commercial tax laws) is isolated and decoupled from marketing and operational systems.

---

## 3. Concrete Inspection Heuristics & Signals

- **Self-Service Deletion Heuristics**:
  - Check account settings views for explicit deletion triggers:
    - `"Delete Account"`, `"Erase My Data"`, `"Close Account Permanently"`
  - Verify presence of dual confirmation:
    - Re-entering account password or typing `"DELETE"` to prevent accidental triggering.
- **Backend Architecture Heuristics**:
  - Inspect deletion handlers for true scrubbing vs soft-delete:
    - Red Flag: Database query simply executing `UPDATE users SET is_deleted = true WHERE id = ?` with email and profile data untouched.
    - Compliant: Anonymizing or overwriting PII (`email = 'deleted-123@anonymized.invalid'`, scrubbing IP logs, deleting sessions).
- **Vendor Cascade Hooks**:
  - Verify downstream deletion dispatchers:
    - Customer CRM (HubSpot, Customer.io, Klaviyo)
    - Payment Customer IDs (Stripe customer deletion / detachment)
    - Analytics Profiles (Mixpanel, PostHog profile deletion)

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Requiring users to call customer support or write physical letters to delete an account created online.
- Falsely claiming data is deleted while keeping unanonymized personal information in primary operational databases.
- Failing to propagate deletion to third-party marketing and analytics platforms, leaving user data active in external vendor systems.
- Imposing arbitrary fees, penalties, or excessive multi-step retention surveys to process a statutory deletion request.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Self-service account deletion trigger located directly inside user profile or security settings.
- Backend deletion pipeline that irreversibly scrubs personal identifiers from internal databases.
- Automated propagation of deletion requests to external sub-processors and marketing vendors.
- Transparent disclosure of statutory retention exceptions (e.g. tax/financial audit records).

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Design backend account deletion routines to execute permanent data scrubbing and cryptographic anonymization.
- Implement integration hooks that notify external third-party services when an account deletion event occurs.
- Ensure authentication credentials and active sessions are immediately invalidated upon deletion initiation.
