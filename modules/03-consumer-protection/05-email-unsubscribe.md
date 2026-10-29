# Audit Module 16: Unsubscribe Link & Address in Emails (Email Marketing)

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **CAN-SPAM Act (15 U.S.C. §§ 7701–7713)**: Commercial marketing messages must:
    1. Include a clear and conspicuous explanation of how the recipient can opt out of receiving future commercial emails.
    2. Honor opt-out requests within 10 business days.
    3. Include the sender's valid physical postal address.
    4. Not use deceptive header information or deceptive subject lines.
  - **GDPR / ePrivacy Directive**: Consent for electronic direct marketing must be revocable at any time without friction or cost. Unsubscribe requests must be honored immediately.
  - **RFC 8058 & Email Deliverability Standards (Gmail & Yahoo 2024 Sender Requirements)**: Mandates 1-click unsubscribe headers (`List-Unsubscribe` and `List-Unsubscribe-Post`) for bulk email senders.
- **Enforcement & Liability**:
  - FTC penalties up to $51,744 per each individual non-compliant email; global domain blacklisting and spam filtering.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Unsubscribe Link Prominence & Ease**:
  - Verify that all outbound marketing and promotional email templates contain a conspicuous, functioning 1-click or direct unsubscribe link in the footer.
  - Verify that clicking unsubscribe does not require the recipient to log into an account, provide a password, or complete a multi-step survey.
- **Physical Sender Address**:
  - Verify that the footer of all commercial emails includes a valid physical postal address (registered corporate office or valid postal mailbox).
- **Header Standards & One-Click Protocol**:
  - Verify that email delivery infrastructure includes standard `List-Unsubscribe` and `List-Unsubscribe-Post: List-Unsubscribe=One-Click` headers for high deliverability and compliance.
- **Suppression Synchronization**:
  - Verify that when a user opts out, the unsubscribe status is immediately propagated to the suppression list to halt future commercial emails.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Sending promotional, newsletter, or marketing emails with no unsubscribe link.
- Requiring recipients to remember credentials or log in to opt out of marketing communications.
- Omitting the sender's physical postal address from marketing email footers.
- Using deceptive "From" names or deceptive subject lines designed to mislead recipients into believing the email is a private transactional message.
- Failing to honor opt-out requests promptly.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Conspicuous 1-click unsubscribe link present in every commercial email template.
- Valid physical corporate address rendered in the footer of all marketing emails.
- Implementation of RFC 8058 headers enabling 1-click unsubscribe directly from email client headers.
- Immediate honoring and persistence of opt-out preferences across all mailing systems.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Standardize email layout components to include compliant footer blocks containing physical addresses and dynamic unsubscribe URLs.
- Configure outbound mail transport layers to automatically inject RFC 8058 headers into marketing streams.
- Ensure email preference handlers process opt-outs without authentication friction.
