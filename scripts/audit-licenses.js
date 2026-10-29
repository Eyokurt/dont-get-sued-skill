#!/usr/bin/env node
/**
 * audit-licenses.js
 * Deterministic Open-Source Software (OSS) License Scanner.
 * Evaluates package dependencies against permissive vs. copyleft licensing policies.
 */

const fs = require("fs");
const path = require("path");

const PERMISSIVE_LICENSES = new Set([
  "MIT",
  "Apache-2.0",
  "BSD-2-Clause",
  "BSD-3-Clause",
  "ISC",
  "CC0-1.0",
  "Unlicense",
  "0BSD",
]);

const COPYLEFT_LICENSES = new Set([
  "GPL-2.0",
  "GPL-2.0-only",
  "GPL-3.0",
  "GPL-3.0-only",
  "AGPL-3.0",
  "AGPL-3.0-only",
  "LGPL-2.1",
  "LGPL-3.0",
  "SSPL",
]);

function scanPackageJson(pkgPath) {
  if (!fs.existsSync(pkgPath)) {
    console.error(`File not found: ${pkgPath}`);
    process.exit(1);
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  console.log(`Auditing dependencies for: ${pkg.name || "Unnamed Project"} (${pkgPath})`);

  const dependencies = {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
  };

  const results = {
    total: Object.keys(dependencies).length,
    copyleftFlagged: [],
    unknown: [],
  };

  const nodeModulesPath = path.join(path.dirname(pkgPath), "node_modules");

  for (const dep of Object.keys(dependencies)) {
    const depPkgPath = path.join(nodeModulesPath, dep, "package.json");
    if (fs.existsSync(depPkgPath)) {
      try {
        const depPkg = JSON.parse(fs.readFileSync(depPkgPath, "utf-8"));
        const license = depPkg.license || (depPkg.licenses && depPkg.licenses[0]?.type) || "UNKNOWN";
        
        if (COPYLEFT_LICENSES.has(license) || /GPL|AGPL/i.test(license)) {
          results.copyleftFlagged.push({ package: dep, license });
        } else if (!PERMISSIVE_LICENSES.has(license)) {
          results.unknown.push({ package: dep, license });
        }
      } catch (err) {
        results.unknown.push({ package: dep, license: "PARSE_ERROR" });
      }
    } else {
      results.unknown.push({ package: dep, license: "NOT_INSTALLED" });
    }
  }

  console.log("\n--- OSS License Audit Results ---");
  console.log(`Total Dependencies Scanned: ${results.total}`);
  console.log(`Copyleft Risk Flags: ${results.copyleftFlagged.length}`);

  if (results.copyleftFlagged.length > 0) {
    console.warn("\nWARNING: Restrictive copyleft licenses detected:");
    results.copyleftFlagged.forEach((item) => {
      console.warn(`  - ${item.package}: ${item.license}`);
    });
  } else {
    console.log("PASS: Zero restrictive copyleft licenses identified.");
  }

  return results;
}

const targetPath = process.argv[2] || "./package.json";
scanPackageJson(targetPath);
