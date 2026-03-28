#!/usr/bin/env npx tsx
// Usage: npx tsx scripts/validate-entry.ts [slug]
// No args: validate ALL entries in src/data/evidence.json
// With slug: validate just that entry

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evidenceEntrySchema } from './lib/schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_PATH = resolve(__dirname, '../src/data/evidence.json');

// ── ANSI colors ──
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';
const RESET = '\x1b[0m';

const PASS = `${GREEN}✓${RESET}`;
const FAIL = `${RED}✗${RESET}`;
const WARN = `${YELLOW}⚠${RESET}`;

// ── Nepal-specific terms for contextualisation check ──
const NEPAL_TERMS = [
  'nepal', 'mohp', 'nhip', 'fchv', 'aama', 'federalism',
  'provincial', 'local government', 'nhsp', 'hib',
];

// ── Action words for whatItMeansForNepal check ──
const ACTION_WORDS = [
  'should', 'could', 'recommend', 'consider', 'adopt', 'adapt',
  'pilot', 'scale', 'invest', 'prioritise', 'prioritize',
  'strengthen', 'reform', 'expand',
];

// ── Devanagari range ──
const DEVANAGARI_RE = /[\u0900-\u097F]/;

// ── Number detection ──
const NUMBER_RE = /\d+/g;

interface ValidationResult {
  slug: string;
  schemaErrors: string[];
  briefErrors: string[];
  briefPasses: string[];
  translationWarnings: string[];
  translationPasses: string[];
}

function validateEntry(entry: unknown, allEntries: unknown[]): ValidationResult {
  const raw = entry as Record<string, unknown>;
  const slug = (raw.slug as string) ?? '(unknown)';

  const result: ValidationResult = {
    slug,
    schemaErrors: [],
    briefErrors: [],
    briefPasses: [],
    translationWarnings: [],
    translationPasses: [],
  };

  // ── Tier 1: Schema Compliance ──
  const parsed = evidenceEntrySchema.safeParse(entry);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      result.schemaErrors.push(`${issue.path.join('.')}: ${issue.message}`);
    }
    // If schema fails, we can still try brief/translation checks on raw data
  }

  const data = parsed.success ? parsed.data : (raw as any);

  // ── Tier 2: Brief Compliance ──

  // Nepal specificity
  const contextEn = (data.contextualisation?.en ?? '').toLowerCase();
  const foundNepalTerms = NEPAL_TERMS.filter((term) => contextEn.includes(term.toLowerCase()));
  if (foundNepalTerms.length > 0) {
    result.briefPasses.push(`Nepal specificity: references "${foundNepalTerms.join('", "')}"`);
  } else {
    result.briefErrors.push(
      'Nepal specificity: contextualisation.en must contain at least one Nepal-specific term'
    );
  }

  // Actionability
  const meansForNepalEn = (data.onePager?.whatItMeansForNepal?.en ?? '').toLowerCase();
  const foundActionWords = ACTION_WORDS.filter((word) => meansForNepalEn.includes(word));
  if (foundActionWords.length > 0) {
    result.briefPasses.push(`Actionability: contains "${foundActionWords.join('", "')}"`);
  } else {
    result.briefErrors.push(
      'Actionability: whatItMeansForNepal.en must contain action words (should, could, recommend, etc.)'
    );
  }

  // Quantitative evidence
  const foundEn = (data.onePager?.whatTheyFound?.en ?? '');
  const numbers = foundEn.match(NUMBER_RE) ?? [];
  if (numbers.length >= 2) {
    result.briefPasses.push(`Quantitative evidence: ${numbers.length} numbers found`);
  } else {
    result.briefErrors.push(
      `Quantitative evidence: whatTheyFound.en has ${numbers.length} number(s), need at least 2`
    );
  }

  // Deduplication
  const allTyped = allEntries as Record<string, unknown>[];
  const dupeByDoi = data.doi
    ? allTyped.filter((e) => (e as any).doi === data.doi)
    : [];
  const dupeBySlug = allTyped.filter((e) => (e as any).slug === slug);

  if (dupeByDoi.length <= 1) {
    result.briefPasses.push('DOI uniqueness: OK');
  } else {
    result.briefErrors.push(`DOI uniqueness: DOI "${data.doi}" appears ${dupeByDoi.length} times`);
  }

  if (dupeBySlug.length <= 1) {
    result.briefPasses.push('Slug uniqueness: OK');
  } else {
    result.briefErrors.push(`Slug uniqueness: slug "${slug}" appears ${dupeBySlug.length} times`);
  }

  // ── Tier 3: Translation Quality ──

  // Check bilingual fields
  const bilingualFields = [
    { name: 'contextualisation', en: data.contextualisation?.en, ne: data.contextualisation?.ne },
    { name: 'whatWasStudied', en: data.onePager?.whatWasStudied?.en, ne: data.onePager?.whatWasStudied?.ne },
    { name: 'whatTheyFound', en: data.onePager?.whatTheyFound?.en, ne: data.onePager?.whatTheyFound?.ne },
    { name: 'whatItMeansForNepal', en: data.onePager?.whatItMeansForNepal?.en, ne: data.onePager?.whatItMeansForNepal?.ne },
  ];

  for (const field of bilingualFields) {
    if (!field.ne) continue;

    // Devanagari presence
    if (DEVANAGARI_RE.test(field.ne)) {
      result.translationPasses.push(`${field.name}: Devanagari present`);
    } else {
      result.translationWarnings.push(`${field.name}: no Devanagari characters found in ne field`);
    }

    // Length ratio
    if (field.en && field.ne) {
      const ratio = Math.round((field.ne.length / field.en.length) * 100);
      if (ratio >= 50 && ratio <= 100) {
        result.translationPasses.push(`${field.name}: length ratio ${ratio}% (OK)`);
      } else {
        result.translationWarnings.push(
          `${field.name}: length ratio ${ratio}% (expected 50-100%)`
        );
      }
    }
  }

  return result;
}

function printResult(r: ValidationResult): { passed: boolean; warnings: number } {
  const hasSchemaErrors = r.schemaErrors.length > 0;
  const hasBriefErrors = r.briefErrors.length > 0;
  const warningCount = r.translationWarnings.length;

  console.log(`\n${BOLD}Validating: ${r.slug}${RESET}\n`);

  // Schema Compliance
  console.log(`${DIM}Schema Compliance:${RESET}`);
  if (hasSchemaErrors) {
    for (const err of r.schemaErrors) {
      console.log(`  ${FAIL} ${err}`);
    }
  } else {
    console.log(`  ${PASS} All required fields present`);
    console.log(`  ${PASS} Enum values valid`);
  }

  // Brief Compliance
  console.log(`${DIM}Brief Compliance:${RESET}`);
  for (const msg of r.briefPasses) {
    console.log(`  ${PASS} ${msg}`);
  }
  for (const err of r.briefErrors) {
    console.log(`  ${FAIL} ${err}`);
  }

  // Translation Quality
  console.log(`${DIM}Translation Quality:${RESET}`);
  for (const msg of r.translationPasses) {
    console.log(`  ${PASS} ${msg}`);
  }
  for (const w of r.translationWarnings) {
    console.log(`  ${WARN} ${w}`);
  }

  // Result
  const passed = !hasSchemaErrors && !hasBriefErrors;
  if (passed && warningCount === 0) {
    console.log(`\n${GREEN}Result: APPROVED${RESET}`);
  } else if (passed) {
    console.log(`\n${YELLOW}Result: APPROVED (${warningCount} warning${warningCount > 1 ? 's' : ''})${RESET}`);
  } else {
    const errorCount = r.schemaErrors.length + r.briefErrors.length;
    console.log(`\n${RED}Result: REJECTED (${errorCount} error${errorCount > 1 ? 's' : ''}, ${warningCount} warning${warningCount > 1 ? 's' : ''})${RESET}`);
  }

  return { passed, warnings: warningCount };
}

// ── Main ──

function main() {
  const slug = process.argv[2];

  let entries: unknown[];
  try {
    const raw = readFileSync(EVIDENCE_PATH, 'utf-8');
    entries = JSON.parse(raw);
  } catch (err) {
    console.error(`${FAIL} Could not read ${EVIDENCE_PATH}:`, err instanceof Error ? err.message : err);
    process.exit(1);
  }

  if (!Array.isArray(entries)) {
    console.error(`${FAIL} evidence.json must be a JSON array`);
    process.exit(1);
  }

  // Filter to slug if provided
  const toValidate = slug
    ? entries.filter((e) => (e as any).slug === slug)
    : entries;

  if (slug && toValidate.length === 0) {
    console.error(`${FAIL} No entry found with slug: ${slug}`);
    process.exit(1);
  }

  console.log(`${BOLD}NHPL Evidence Validator${RESET}`);
  console.log(`Checking ${toValidate.length} entr${toValidate.length === 1 ? 'y' : 'ies'}...\n`);

  let totalPassed = 0;
  let totalFailed = 0;
  let totalWarnings = 0;

  for (const entry of toValidate) {
    const result = validateEntry(entry, entries);
    const { passed, warnings } = printResult(result);
    if (passed) totalPassed++;
    else totalFailed++;
    totalWarnings += warnings;
  }

  // Summary
  console.log(`\n${'─'.repeat(50)}`);
  console.log(`${BOLD}Summary:${RESET} ${totalPassed} passed, ${totalFailed} failed, ${totalWarnings} warnings`);

  if (totalFailed > 0) process.exit(1);
}

main();
