# Audit Module 12: Remove Dark Patterns & Deceptive UX

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **FTC Policy Statement on Deceptive and Dark Pattern Techniques**: Prohibits manipulative digital interface designs that mislead, coerce, or trick consumers into making choices they would not otherwise make.
  - **EU Digital Services Act (DSA, Regulation (EU) 2022/2065, Article 25)**: Online platforms must not design, organize, or operate their digital interfaces in a manner that deceives, manipulates, or impairs consumer autonomy.
  - **GDPR Art 7(4)**: Consent obtained through coercive design patterns, trick questions, or asymmetric choices is legally invalid.
- **Enforcement & Liability**:
  - Multi-million dollar enforcement actions by the FTC and EU authorities (e.g. major settlements against gaming and subscription platforms for dark patterns).

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Confirmshaming Copy**:
  - Verify that modal dialogs, exit-intent prompts, and opt-out choices employ neutral, respectful language rather than manipulative shaming copy designed to emotionally coerce the user (e.g. *"No thanks, I hate saving money"* or *"No, I prefer paying full price"*).
- **Negative-Option & Pre-Selected Add-Ons**:
  - Verify that cart, checkout, and signup flows do not automatically add optional products, warranties, travel insurance, or recurring subscriptions without explicit, unprompted user action.
- **Cancellation & Downgrade Symmetry (Roach Motel Prevention)**:
  - Verify that downgrading, unsubscribing, or cancelling a service is frictionless and does not subject users to multi-page retention loops, hidden cancellation links, or artificial obstacles.
- **Visual Interference & Asymmetric Hierarchy**:
  - Verify that interface choices maintain fair visual hierarchy and that rejection or opt-out buttons are not disguised as unclickable body text or rendered with illegible contrast to force compliance.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Using confirmshaming language on decline buttons or dismiss triggers.
- Sneaky basket additions: Pre-selecting ancillary add-ons, warranties, or recurring charges in the shopping cart.
- Disguising promotional advertisements to look like critical system error alerts or navigation download buttons.
- Roach motel patterns: Making it easy to sign up online in one step, but requiring protracted customer support interaction to cancel.
- Employing confusing double-negatives in privacy or marketing choice dialogs.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Objective, neutral language used across all acceptance and rejection controls.
- Cart and checkout totals include only items actively selected by the user.
- Cancellation flows mirror the ease, speed, and channel of initial enrollment.
- Symmetrical visual presentation and legible contrast for both positive and negative decision options.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Audit all user-facing interface copy to replace manipulative phrasing with clear, direct alternatives (e.g. "Decline" instead of confirmshaming text).
- Ensure all optional checkout items require an active affirmative opt-in by the consumer before modifying order totals.
- Standardize button affordances to provide clear visual cues and equal accessibility for all interactive paths.
