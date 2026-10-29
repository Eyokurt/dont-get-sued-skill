# Audit Module 08: Data Minimization (No Unnecessary Data)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **GDPR (Article 5(1)(c) - Data Minimisation)**: Personal data must be adequate, relevant, and limited to what is strictly necessary in relation to the purposes for which they are processed.
  - **KVKK (Law No. 6698, Article 4(2)(ç))**: The fundamental principle of being relevant, limited, and proportionate to the purpose of processing.
  - **CCPA / CPRA (§ 1798.100(c))**: Collection, use, retention, and sharing of personal data must be reasonably necessary and proportionate to achieve the operational purposes for which it was collected.
- **Enforcement & Liability**:
  - Direct regulatory sanctions for disproportionate data harvesting even without a security breach. In breach scenarios, retaining excessive, unminimized data drastically compounds statutory damages and civil penalties.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Ingress Schema Minimization**:
  - Verify that user intake forms, signup payloads, and API validation models require only the minimum necessary data fields required to provide the core service (e.g. avoiding mandatory collection of telephone numbers, physical addresses, gender, or birthdates for pure digital SaaS services).
- **Telemetry & Logging Hygiene**:
  - Verify that application loggers, error reporters, and diagnostic streams actively sanitize and redact sensitive credentials and personal data (passwords, tokens, credit card numbers, national identification numbers, full request bodies).
- **Data Lifecycle & Retention TTLs**:
  - Verify that automated lifecycle policies, database TTLs, or cleanup jobs are in place to purge expired sessions, unverified accounts, abandoned carts, and temporary tokens.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Requiring intrusive, unnecessary personal data (national identity numbers, tax IDs, physical addresses) for simple newsletter subscriptions, free software trials, or content access.
- Mandatory collection of phone numbers or gender where no functional or legal justification exists.
- Indiscriminate logging: Streaming raw HTTP request bodies containing plaintext passwords, tokens, or personal identifiers into application logs or third-party observability platforms.
- Indefinite data retention: Persisting customer telemetry, IP logs, or inactive user records forever without scheduled purging.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Intake schemas restrict required input fields strictly to the minimal attributes necessary for service functionality.
- Logging middleware strictly sanitizes and redacts all sensitive fields and personal identifiers before dispatch.
- Defined, automated data retention schedules that systematically purge or anonymize stale records.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Audit all database schemas and API request contracts to eliminate fields that lack clear operational necessity.
- Configure logging frameworks with redaction filters to intercept and scrub sensitive keys before output.
- Implement automated database lifecycle rules or scheduled tasks to enforce data retention limits.
