# dont-get-sued — Legal, Privacy, Accessibility & Consumer Protection Auditor

A production-grade Antigravity skill and multi-agent audit suite designed to proactively protect software projects, SaaS products, e-commerce stores, and mobile applications from regulatory fines, consumer lawsuits, and intellectual property liabilities.

Rather than micromanaging file paths or grep patterns, `dont-get-sued` operates at the system architecture level, empowering autonomous agents with comprehensive regulatory criteria, failure indicators, and compliance benchmarks across modern tech stacks.

---

## Architecture Overview

```mermaid
flowchart TD
    subgraph Target ["Target Software Architecture"]
        Client["Client Applications\n(Web / Mobile / Desktop)"]
        API["Backend Services & APIs\n(Ingress, Endpoints, Auth)"]
        DataStore["Data Persistence & Logs\n(Databases, Loggers, Caches)"]
        ThirdParty["External Integrations\n(Analytics, SDKs, Pixels)"]
        Assets["Static Bundles\n(Fonts, Images, Dependencies)"]
    end

    subgraph Orchestrator ["Orchestration Engine"]
        Lead["Lead Orchestrator\n(dont-get-sued)"]
        Tracker["DONT_GET_SUED.md\n(Compliance State Tracker)"]
    end

    subgraph Specialists ["Specialist Domain Auditors"]
        SA1["legal-policy-auditor\nCorporate Identity & Governance"]
        SA2["privacy-data-auditor\nConsent, Data Minimization & DSAR"]
        SA3["fair-trade-ux-auditor\nConsumer Protection & Pricing"]
        SA4["a11y-license-auditor\nUniversal Accessibility & Licensing"]
    end

    subgraph Pillars ["Five Compliance Pillars (20 Check Items)"]
        P1["Pillar 1: Legal Policies\n(Privacy, Terms, Refund, Cookies, Impressum)"]
        P2["Pillar 2: Privacy & Data Protection\n(Banner, Form Consent, Minimization, SDKs, Kids, Deletion)"]
        P3["Pillar 3: Consumer Protection\n(Dark Patterns, Hidden Fees, Reviews, Claims, Unsubscribe)"]
        P4["Pillar 4: Digital Accessibility\n(Alt Text, Color Contrast, Keyboard Navigation)"]
        P5["Pillar 5: Asset & IP Licensing\n(Font EULAs, Media Licenses, OSS Copyleft)"]
    end

    subgraph Output ["Audit Outcomes"]
        Report["Compliance Scorecard\n(0-100 Risk Rating)"]
        Remediation["Architectural Remediation Plan\n(Code Level Fixes)"]
    end

    Client --> Lead
    API --> Lead
    DataStore --> Lead
    ThirdParty --> Lead
    Assets --> Lead

    Lead <--> Tracker

    Lead --> SA1
    Lead --> SA2
    Lead --> SA3
    Lead --> SA4

    SA1 --> P1
    SA2 --> P2
    SA3 --> P3
    SA4 --> P4
    SA4 --> P5

    P1 --> Report
    P2 --> Report
    P3 --> Report
    P4 --> Report
    P5 --> Report

    Report --> Remediation
```

---

## The 20 Audited Liabilities

This skill enforces compliance across 20 non-negotiable legal and technical requirements:

| # | Check Item | Statutory Authority | Primary Enforcement Body |
|:---:|:---|:---|:---|
| **01** | **Privacy Policy** | GDPR Art 13/14, CCPA/CPRA, KVKK | EU DPAs, California AG |
| **02** | **Terms of Service (ToS)** | Contract Enforceability, UCC | Civil Courts, Arbitration Tribunals |
| **03** | **Refund & Cancellation Policy** | EU Consumer Rights Directive, FTC Click-to-Cancel | FTC, EU Consumer Authorities |
| **04** | **Cookie Policy** | ePrivacy Directive 2002/58/EC | National Telecom Authorities |
| **05** | **Business Details (Impressum)** | EU eCommerce Directive Art 5, DDG Section 5 | German/EU Courts (Abmahnung) |
| **06** | **Cookie Consent Banner** | Planet49 (C-673/17), EDPB Guidelines 03/2022 | CNIL, AEPD, DPC |
| **07** | **Check Form Consents** | GDPR Art 7 (Unbundled & Unchecked) | Data Protection Authorities |
| **08** | **No Unnecessary Data (Minimization)** | GDPR Art 5(1)(c), CCPA Section 1798.100 | Regulatory Auditors |
| **09** | **Audit Third-Party SDKs** | GDPR Art 28 (DPA), CCPA Sale/Share | FTC (BetterHelp/GoodRx decrees) |
| **10** | **Age Consent for Kids' Data** | COPPA (15 U.S.C. Sections 6501-6506), GDPR-K | FTC (COPPA settlements) |
| **11** | **Data Deletion Request (DSAR)** | GDPR Art 17, CCPA Section 1798.105 | App Store, Play Store, DPAs |
| **12** | **Remove Dark Patterns** | FTC Act Section 5, EU Digital Services Act Art 25 | FTC, European Commission |
| **13** | **Remove Hidden Fees (Dripped Pricing)** | FTC Junk Fees Rule (16 CFR Part 464) | FTC, State Attorneys General |
| **14** | **Remove Fake Reviews** | FTC 16 CFR Part 465, EU Omnibus Directive | FTC, Competition Bureaus |
| **15** | **Remove Unsupported Claims** | FTC Substantiation Doctrine, EU UCPD | FTC, Advertising Standards |
| **16** | **Email Unsubscribe Link & Address** | CAN-SPAM Act, GDPR, CASL | FTC ($51k/email penalty), ESPs |
| **17** | **Accessibility Alt Text** | ADA Title III, EAA, WCAG 2.2 AA (1.1.1) | US Federal Courts, EU Regulators |
| **18** | **Fix Color Contrast** | WCAG 2.2 AA (1.4.3 & 1.4.11) | Automated ADA Web Crawlers |
| **19** | **Keyboard Navigation & Focus** | WCAG 2.2 AA (2.1.1, 2.1.2, 2.4.7) | ADA Lawsuit Plaintiffs |
| **20** | **License Fonts, Images & OSS** | 17 U.S.C. Section 504 ($150k/work), GPL/AGPL Copyleft | Copyright Owners, Font Foundries |

---

## Autonomous Multi-Agent Architecture

The audit suite deploys a Lead Orchestrator paired with 4 specialist domain auditors:

1. **legal-policy-auditor**: Inspects corporate identity, terms enforceability, statutory cancellation rights, and mandatory disclosures (Items 01, 02, 03, 04, 05, 16).
2. **privacy-data-auditor**: Evaluates prior consent gating, form opt-in mechanics, data minimization, telemetry sanitization, COPPA compliance, and DSAR erasure workflows (Items 06, 07, 08, 09, 10, 11).
3. **fair-trade-ux-auditor**: Analyzes user interface affordances, dark pattern prevention, fee transparency, social proof validity, and marketing claim substantiation (Items 12, 13, 14, 15).
4. **a11y-license-auditor**: Audits WCAG 2.2 Level AA accessibility (alt text, contrast, keyboard operability) and intellectual property licenses (fonts, media, open-source packages) (Items 17, 18, 19, 20).

---

## How to Run

### In Antigravity / Agent Chat:
Run the slash command or prompt directly:
```
/dont-get-sued
```
Or ask in natural language:
> "Audit this project for legal liabilities and GDPR compliance using dont-get-sued."  
> "Bu projeyi dont-get-sued kurallarina gore hukuki ve erisilebilirlik acisindan denetle."

### Audit Execution Sequence:
1. The skill initializes `DONT_GET_SUED.md` in the project root.
2. The specialist auditors evaluate system boundaries, data lifecycles, and interface affordances.
3. Every violation is cataloged with concrete evidence and statutory grounds.
4. An actionable architectural remediation plan is generated with ready-to-merge code fixes.

---

## Repository Structure

```
dont-get-sued/
├── SKILL.md                          # Master orchestration skill
├── README.md                         # Documentation and statutory guide
├── assets/
│   └── DONT_GET_SUED.template.md     # Project compliance matrix template
├── subagents/
│   ├── legal-policy-auditor.md       # Legal policy & transparency specialist
│   ├── privacy-data-auditor.md       # Privacy engineering & data protection specialist
│   ├── fair-trade-ux-auditor.md      # Consumer protection & ethical UX specialist
│   └── a11y-license-auditor.md       # Accessibility & intellectual property specialist
└── modules/
    ├── 01-legal-policies/            # Modules 01 to 05
    ├── 02-privacy-and-consent/       # Modules 06 to 11
    ├── 03-consumer-protection/       # Modules 12 to 16
    └── 04-accessibility-and-licensing/ # Modules 17 to 20
```

---

## Disclaimer

dont-get-sued is an automated technical compliance auditor designed by software engineers to catch high-risk technical violations. It does not constitute formal legal advice. For binding legal opinions or jurisdiction-specific contract drafting, consult a qualified attorney.
