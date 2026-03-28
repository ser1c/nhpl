#!/usr/bin/env npx tsx
// Usage: npx tsx scripts/fetch-paper.ts <doi-or-url>
// Fetches paper metadata from CrossRef, Semantic Scholar, and Unpaywall.

import { fetchCrossRef } from './lib/crossref.js';
import { fetchSemanticScholar } from './lib/semantic-scholar.js';
import { fetchUnpaywall } from './lib/unpaywall.js';

// ── Journal tier classifier ──

const TIER_1_JOURNALS = new Set([
  // Economics
  'american economic review',
  'econometrica',
  'journal of political economy',
  'quarterly journal of economics',
  'review of economic studies',
  'journal of health economics',
  'health economics',
  'journal of development economics',
  // Medical / Global Health
  'the lancet',
  'lancet',
  'bmj',
  'the bmj',
  'new england journal of medicine',
  'the lancet global health',
  'lancet global health',
  'bmj global health',
  'health policy and planning',
  'social science & medicine',
  'social science and medicine',
  'cochrane database of systematic reviews',
]);

const TIER_2_PATTERNS = [
  /^plos\s/i,
  /^bmc\s/i,
  /^frontiers\s/i,
  /nber/i,
  /world bank/i,
];

function classifyJournalTier(journal: string): { tier: string; label: string } {
  const normalised = journal.toLowerCase().trim();

  if (TIER_1_JOURNALS.has(normalised)) {
    return { tier: 'Tier 1', label: `Tier 1 (${journal})` };
  }

  for (const pattern of TIER_2_PATTERNS) {
    if (pattern.test(normalised)) {
      return { tier: 'Tier 2', label: `Tier 2 (${journal})` };
    }
  }

  return { tier: 'Tier 3', label: `Tier 3 (${journal})` };
}

// ── DOI extraction ──

function extractDoi(input: string): string | null {
  // Direct DOI pattern: 10.xxxx/...
  const doiMatch = input.match(/(10\.\d{4,9}\/[^\s]+)/);
  if (doiMatch) return doiMatch[1].replace(/[.,;)]+$/, '');

  return null;
}

// ── Main ──

async function main() {
  const input = process.argv[2];

  if (!input) {
    console.error('Usage: npx tsx scripts/fetch-paper.ts <doi-or-url>');
    console.error('');
    console.error('Examples:');
    console.error('  npx tsx scripts/fetch-paper.ts 10.1136/bmjgh-2019-001467');
    console.error('  npx tsx scripts/fetch-paper.ts https://doi.org/10.1136/bmjgh-2019-001467');
    process.exit(1);
  }

  const doi = extractDoi(input);
  if (!doi) {
    console.error(`Could not extract DOI from: ${input}`);
    process.exit(1);
  }

  console.log(`Fetching metadata for DOI: ${doi}\n`);

  // Fetch from all three APIs in parallel
  const [crossref, semantic, unpaywall] = await Promise.all([
    fetchCrossRef(doi),
    fetchSemanticScholar(doi),
    fetchUnpaywall(doi),
  ]);

  // ── Paper Metadata ──
  console.log('═══ Paper Metadata ═══');
  if (crossref) {
    console.log(`Title: ${crossref.title}`);
    console.log(`Authors: ${crossref.authors.join(', ')}`);
    console.log(`Journal: ${crossref.journal}`);
    console.log(`Year: ${crossref.year}`);
    console.log(`DOI: ${crossref.doi}`);
    console.log(`URL: ${crossref.url}`);
    console.log(`Type: ${crossref.type}`);
  } else {
    console.log('(CrossRef data unavailable)');
  }

  // ── Abstract ──
  console.log('\n═══ Abstract ═══');
  if (semantic?.abstract) {
    console.log(semantic.abstract);
  } else {
    console.log('(No abstract available)');
  }

  // ── TLDR ──
  if (semantic?.tldr) {
    console.log('\n═══ TLDR ═══');
    console.log(semantic.tldr.text);
  }

  // ── Retraction Status ──
  console.log('\n═══ Retraction Status ═══');
  if (semantic) {
    if (semantic.isRetracted) {
      console.log('\x1b[31m✗ RETRACTED — do not use\x1b[0m');
    } else {
      console.log('\x1b[32m✓ Active (not retracted)\x1b[0m');
    }
  } else {
    console.log('(Could not verify — Semantic Scholar unavailable)');
  }

  // ── Open Access ──
  console.log('\n═══ Open Access ═══');
  if (unpaywall) {
    if (unpaywall.isOA && unpaywall.oaUrl) {
      console.log(`\x1b[32m✓ Free PDF: ${unpaywall.oaUrl}\x1b[0m`);
      if (unpaywall.license) {
        console.log(`  License: ${unpaywall.license}`);
      }
    } else if (unpaywall.isOA) {
      console.log('\x1b[33m~ Open access, but no direct PDF link found\x1b[0m');
    } else {
      console.log('\x1b[31m✗ Not open access\x1b[0m');
    }
  } else if (semantic?.isOpenAccess) {
    console.log('\x1b[33m~ Semantic Scholar reports open access (no URL)\x1b[0m');
  } else {
    console.log('(Could not determine)');
  }

  // ── Journal Tier ──
  console.log('\n═══ Journal Tier ═══');
  if (crossref) {
    const { label } = classifyJournalTier(crossref.journal);
    console.log(label);
  } else {
    console.log('(Journal unknown — CrossRef unavailable)');
  }

  // ── Citation Count ──
  console.log('\n═══ Citation Count ═══');
  if (semantic) {
    console.log(`${semantic.citationCount} citations`);
  } else {
    console.log('(Semantic Scholar unavailable)');
  }

  // ── Fields of Study ──
  if (semantic?.fieldsOfStudy?.length) {
    console.log('\n═══ Fields of Study ═══');
    console.log(semantic.fieldsOfStudy.join(', '));
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
