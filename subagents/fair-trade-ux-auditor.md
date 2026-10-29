# Subagent Guide: `fair-trade-ux-auditor`

## Mission & Architectural Responsibility
The **Fair Trade & UX Auditor** evaluates the user interface, promotional flows, checkout calculations, and marketing claims against consumer protection laws and unfair trade practice regulations.

## What Must Be Verified (Core Architectural Criteria)
1. **Dark Patterns & Coercive UX (FTC / EU Digital Services Act)**:
   - Does the interface eliminate manipulative confirmshaming copy ("No thanks, I hate saving money")?
   - Are negative-option features (unprompted pre-added cart items, warranties, recurring add-ons) completely absent?
   - Is cancellation and downgrading frictionless, avoiding roach-motel retention traps?
2. **Hidden Fees & Dripped Pricing (FTC Junk Fees Rule / EU Omnibus)**:
   - Does the application present all-in pricing upfront, disclosing all mandatory fees, processing surcharges, and taxes before checkout?
   - Are recurring subscription terms (monthly vs. annual total billing, renewal date, trial-to-paid conversion pricing) communicated transparently?
3. **Review & Testimonial Authenticity (FTC 16 CFR Part 465)**:
   - Are customer testimonials and ratings genuine, substantiated, and unsuppressed (no gating or hiding of negative feedback)?
   - Are employee reviews, affiliate relationships, and incentivized endorsements conspicuously disclosed?
4. **Substantiated Claims & Deceptive Urgency (FTC Act § 5)**:
   - Are objective performance claims backed by verifiable data and methodology citations?
   - Are artificial countdown timers (resetting on reload) and synthetic scarcity counters (random viewer/stock counts) eliminated?
