# Audit Module 20: Font, Image, Audio & Open Source Licensing

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **U.S. Copyright Act (17 U.S.C. §§ 501–505)**: Direct statutory liability for unauthorized reproduction or display of copyrighted works (fonts, images, media, code).
    - Statutory damages up to **$150,000 per infringed work** for willful infringement.
    - Full plaintiff attorney's fees recoverable by prevailing copyright holders.
  - **Font Software Licensing (EULA)**: Desktop font licenses (OTF/TTF for local document creation) do not grant legal rights to self-host or embed fonts in web applications or mobile apps. Webfont licenses are typically licensed based on monthly pageview tiers.
  - **Open Source Licensing (Copyleft vs. Permissive)**:
    - Permissive licenses (MIT, Apache 2.0, BSD) require preservation of copyright notices and disclaimers.
    - Strong copyleft licenses (GPL v2/v3, AGPL v3) in proprietary commercial software can legally compel the public disclosure of proprietary source code.
- **Enforcement & Liability**:
  - Automated copyright enforcement crawlers and law firms pursuing statutory settlement demands ($5,000–$50,000+ per unlicensed image or font binary); corporate copyright audits.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Typography & Webfont EULA Compliance**:
  - Verify that custom self-hosted font binaries in the project repository are covered by valid commercial web-embedding licenses, or utilize verified open-source fonts (e.g. SIL Open Font License, Apache 2.0).
- **Stock Photography & Media Licensing**:
  - Verify that stock photos, illustrations, background videos, and sound effects possess verifiable commercial licenses and are not sourced from uncredited web scraping.
  - Verify that free stock media (Unsplash, Pexels) adheres to commercial term limitations (e.g. not featuring recognizable trademarked logos or private properties without releases).
- **Open-Source Software (OSS) License Hygiene**:
  - Verify that third-party software libraries and dependencies in proprietary commercial projects comply with permissive licensing models.
  - Verify that proprietary closed-source systems avoid unintended contamination from restrictive copyleft licenses (GPL/AGPL) unless deliberately chosen.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Embedding proprietary commercial desktop font files into public web font declarations without a valid webfont license.
- Using stock imagery, graphics, or audio without documented commercial license rights or purchase receipts.
- Uncontrolled inclusion of AGPLv3 or GPL packages in proprietary commercial software without legal review.
- Stripping or deleting mandatory open-source copyright attribution notices and licenses from client production bundles.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Complete licensing documentation for all self-hosted font families and typography assets.
- Commercial license certificates on file for all third-party media and visual assets.
- Dependency trees adhere to approved open-source license policies with automated attribution.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Migrate proprietary fonts without web licenses to open-source alternatives (such as Google Fonts / SIL Open Font License).
- Audit all static media assets to ensure proof of commercial licensing exists for every image and video.
- Enforce automated dependency license screening in CI/CD pipelines to prevent copyleft package contamination.
