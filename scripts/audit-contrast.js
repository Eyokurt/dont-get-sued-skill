#!/usr/bin/env node
/**
 * audit-contrast.js
 * Deterministic WCAG 2.2 Color Contrast Ratio Calculator.
 * Calculates relative luminance and contrast ratio between foreground and background.
 *
 * Formula:
 * (L1 + 0.05) / (L2 + 0.05)
 * where L1 is the relative luminance of the lighter of the colors,
 * and L2 is the relative luminance of the darker of the colors.
 */

function parseHex(hex) {
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    clean = clean.split("").map((c) => c + c).join("");
  }
  if (clean.length !== 6) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  return [r, g, b];
}

function getLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1, hex2) {
  const l1 = getLuminance(parseHex(hex1));
  const l2 = getLuminance(parseHex(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function evaluateContrast(fgHex, bgHex) {
  const ratio = getContrastRatio(fgHex, bgHex);
  const rounded = Math.round(ratio * 100) / 100;

  console.log(`\nEvaluating Contrast: Foreground (${fgHex}) on Background (${bgHex})`);
  console.log(`Calculated Contrast Ratio: ${rounded}:1`);

  const passNormalAA = rounded >= 4.5;
  const passLargeAA = rounded >= 3.0;
  const passUIBoundaryAA = rounded >= 3.0;

  console.log(`- WCAG 2.2 Level AA Normal Text (>= 4.5:1): ${passNormalAA ? "PASS" : "FAIL"}`);
  console.log(`- WCAG 2.2 Level AA Large Text (>= 3.0:1):  ${passLargeAA ? "PASS" : "FAIL"}`);
  console.log(`- WCAG 2.2 Level AA UI Component Border (>= 3.0:1): ${passUIBoundaryAA ? "PASS" : "FAIL"}`);

  return { ratio: rounded, passNormalAA, passLargeAA };
}

const fg = process.argv[2] || "#9CA3AF"; // default text-gray-400
const bg = process.argv[3] || "#FFFFFF"; // default white
evaluateContrast(fg, bg);
