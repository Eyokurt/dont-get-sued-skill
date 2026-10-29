# Audit Module 16: Unsubscribe Link & Address in Emails (Email Marketing)

**Last Reviewed**: Q4 2026  
**Auditor Domain**: `legal-policy-auditor`  
**Severity**: High

---

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **CAN-SPAM Act (15 U.S.C. §§ 7701–7713)**: Commercial marketing messages must:
    1. Include a clear and conspicuous explanation of how the recipient can opt out of receiving future commercial emails.
    2. Honor opt-out requests within 10 business days.
    3. Include the sender's valid physical postal address.
    4. Not use deceptive header information or deceptive subject lines.
  - **GDPR / ePrivacy Directive**: Consent for electronic direct marketing must be revocable at any time without friction or cost. Unsubscribe requests must be honored immediately.
  - **RFC 8058 & Email Deliverability Standards (Gmail & Yahoo Sender Requirements)**: Mandates 1-click unsubscribe headers (`List-Unsubscribe` and `List-Unsubscribe-Post`) for commercial bulk senders.
  - **CASL (Canada's Anti-Spam Legislation)**: Mandates readily performable unsubscribe mechanisms operational for at least 60 days following message transmission.
- **Enforcement & Liability**:
  - Civil penalties under CAN-SPAM statutorily adjusted for inflation annually under the Federal Civil Penalties Inflation Adjustment Act (exceeding $50,000+ per non-compliant email); global sender domain blacklisting and spam filtering.

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

## 3. Concrete Inspection Heuristics & Signals

- **Email Template Footer Heuristics**:
  - Check for presence of physical address placeholder or dynamic address block:
    - Street address, Suite/Floor, City, State/Province, Postal Code, Country.
  - Check for clear opt-out links:
    - `"Unsubscribe"`, `"Manage Preferences"`, `"Opt out"`
- **RFC 8058 Outbound Header Heuristics**:
  - Verify that email dispatch configs (Nodemailer, SendGrid, Resend, AWS SES) include:
    ```
    List-Unsubscribe: <https://example.com/api/unsubscribe?token=...>, <mailto:unsubscribe@example.com?subject=unsubscribe>
    List-Unsubscribe-Post: List-Unsubscribe=One-Click
    ```
- **Friction-Free Unsubscribe Heuristics**:
  - Verify that the unsubscribe landing endpoint does not render an authentication wall (`Login required to manage subscriptions`).

---

## 4. Violation Red Flags (İhlal Kriterleri)

- Sending promotional, newsletter, or marketing emails with no unsubscribe link.
- Requiring recipients to remember credentials or log in to opt out of marketing communications.
- Omitting the sender's physical postal address from marketing email footers.
- Using deceptive "From" names or deceptive subject lines designed to mislead recipients into believing the email is a private transactional message.
- Failing to honor opt-out requests promptly.

---

## 5. Compliance Benchmarks (Uyum Standardı)

- Conspicuous 1-click unsubscribe link present in every commercial email template.
- Valid physical corporate address rendered in the footer of all marketing emails.
- Implementation of RFC 8058 headers enabling 1-click unsubscribe directly from email client headers.
- Immediate honoring and persistence of opt-out preferences across all mailing systems.

---

## 6. Remediation Principles (Çözüm İlkeleri)

- Standardize email layout components to include compliant footer blocks containing physical addresses and dynamic unsubscribe URLs.
- Configure outbound mail transport layers to automatically inject RFC 8058 headers into marketing streams.
- Ensure email preference handlers process opt-outs without authentication friction.
