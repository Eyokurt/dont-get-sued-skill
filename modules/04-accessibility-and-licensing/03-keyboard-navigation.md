# Audit Module 19: Keyboard Navigation & Focus Indicators

## 1. Legal Framework & Regulatory Exposure

- **Statutory Frameworks**:
  - **ADA Title III & European Accessibility Act (EAA)**: Requires complete digital accessibility parity for individuals with motor disabilities, tremors, blindness, or visual impairments who navigate without a mouse.
  - **WCAG 2.2 Success Criterion 2.1.1 (Keyboard - Level A)**: All functionality of the interface must be operable through a keyboard interface without requiring specific timings for individual keystrokes.
  - **WCAG 2.2 Success Criterion 2.1.2 (No Keyboard Trap - Level A)**: Keyboard focus must not become trapped inside any sub-component or dialog.
  - **WCAG 2.2 Success Criterion 2.4.7 (Focus Visible - Level AA)**: Any keyboard operable user interface must provide a discernible, visible focus indicator when focused.
- **Enforcement & Liability**:
  - Primary driver in ADA Title III website accessibility lawsuits; courts routinely find liability when navigation or checkout flows cannot be completed using a keyboard.

---

## 2. Architectural Verification Scope (Neyi Kontrol Etmeli)

- **Universal Keyboard Operability**:
  - Verify that every interactive element (navigation links, buttons, form controls, dropdowns, tabs, sliders) can be navigated to via the keyboard and triggered using standard keys (Tab, Shift+Tab, Enter, Space, Escape, Arrow keys).
- **Visible, High-Contrast Focus Indicators**:
  - Verify that interactive components display clear, high-contrast focus rings when navigated via keyboard, and that global stylesheet resets do not indiscriminately strip focus outlines without replacement.
- **Dialog & Modal Focus Management**:
  - Verify that when a modal, drawer, or dialog opens:
    1. Focus automatically moves to the modal or its first interactive child.
    2. Focus is trapped strictly within the active dialog while open.
    3. Pressing the `Escape` key immediately dismisses the dialog.
    4. Upon closing, focus returns to the original trigger element.
- **Semantic HTML & Logical Tab Order**:
  - Verify that clickable elements use native interactive elements (buttons, links) rather than unadorned non-interactive elements, ensuring natural keyboard focus and accessibility tree exposure.
  - Verify that a "Skip to main content" link is available to bypass repeated navigation headers.

---

## 3. Violation Red Flags (İhlal Kriterleri)

- Global CSS rules that strip focus outlines without providing an alternative focus ring.
- Keyboard traps: Dialogs or dropdowns where pressing `Tab` causes focus to become stuck or jump to hidden background elements.
- Custom interactive controls constructed from non-interactive tags without keyboard event handlers or focus attributes.
- Visual layout orders that jump erratically out of sync with physical DOM tab order.
- Missing skip links on content-heavy pages with extensive header navigations.

---

## 4. Compliance Benchmarks (Uyum Standardı)

- Complete keyboard operability across all public and authenticated flows.
- Discernible, high-contrast focus rings active on keyboard navigation across all interactive components.
- Robust focus trapping, Escape dismissal, and focus restoration implemented across all modal dialogs.
- Skip-to-content links available for rapid navigation past repetitive headers.

---

## 5. Remediation Principles (Çözüm İlkeleri)

- Remove blanket focus-suppression styles and ensure keyboard navigation displays a distinct, high-contrast focus outline.
- Implement proper focus trapping and keyboard listeners on all modal and overlay components.
- Replace non-interactive elements that have click listeners with native interactive elements.
