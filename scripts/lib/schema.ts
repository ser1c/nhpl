// Standalone mirror of src/data/evidence.schema.ts — keep in sync
// This file uses plain 'zod' instead of 'astro:content' so scripts
// can run outside Astro's build pipeline.

import { z } from 'zod';

// ── Policy Domains (aligned with 10 methodology topics + health equity) ──
export const policyDomains = [
  'health-financing',
  'health-workforce',
  'primary-care',
  'maternal-newborn-health',
  'noncommunicable-diseases',
  'mental-health',
  'nutrition',
  'infectious-disease',
  'environmental-health',
  'health-governance',
  'health-equity',
] as const;

export const studyDesigns = [
  'rct',
  'quasi-experimental',
  'cohort',
  'cross-sectional',
  'case-control',
  'qualitative',
  'mixed-methods',
  'systematic-review',
  'meta-analysis',
  'descriptive',
  'modelling',
  'cost-effectiveness',
  'programme-evaluation',
] as const;

// ── Ratings: methodology-draft.md requires 3 separate dimensions ──
export const rigourLevels = ['high', 'moderate', 'low'] as const;
export const applicabilityLevels = ['high', 'moderate', 'low'] as const;

export const verificationStatuses = [
  'draft',
  'under-review',
  'verified',
  'rejected',
  'withdrawn',
] as const;

export const sourceChannels = [
  'systematic-discovery',
  'expert-recommendation',
  'snowball',
  'seed',
] as const;

export const journalTiers = ['tier-1', 'tier-2', 'tier-3'] as const;

export const sourceStatuses = [
  'published',
  'preprint',
  'grey-literature',
  'working-paper',
] as const;

export const retractionStatuses = [
  'active',
  'retracted',
  'expression-of-concern',
  'erratum',
] as const;

export const healthEquityDimensionValues = [
  'caste-ethnicity',
  'gender',
  'geographic',
  'wealth',
  'disability',
  'age',
] as const;

const bilingualString = z.object({
  en: z.string(),
  ne: z.string(),
});

const correctionEntry = z.object({
  date: z.string(),
  field: z.string(),
  description: z.string(),
  correctedBy: z.string(),
});

const reviewerEntry = z.object({
  name: z.string(),
  date: z.string(),
  role: z.enum(['methods', 'domain', 'contextualisation', 'single']),
});

export const evidenceEntrySchema = z.object({
  // ── Identity ──
  slug: z.string(),
  title: z.string(),
  authors: z.array(z.string()),
  year: z.number(),
  journal: z.string(),
  doi: z.string().optional(),
  url: z.string().url(),

  // ── Classification ──
  policyDomain: z.array(z.enum(policyDomains)),
  studyDesign: z.enum(studyDesigns),
  countries: z.array(z.string()),

  // ── Three separate ratings (methodology-draft.md Section 10) ──
  methodologicalRigour: z.enum(rigourLevels),
  nepalApplicability: z.enum(applicabilityLevels).default('moderate'),
  nepalRelevanceScore: z.number().int().min(1).max(5),

  // ── Nepal contextualisation ──
  contextualisation: bilingualString,
  onePager: z.object({
    whatWasStudied: bilingualString,
    whatTheyFound: bilingualString,
    whatItMeansForNepal: bilingualString,
  }),

  // ── Intake & source metadata ──
  sourceChannel: z.enum(sourceChannels).default('seed'),
  journalTier: z.enum(journalTiers).default('tier-2'),
  sourceStatus: z.enum(sourceStatuses).default('published'),
  language: z.enum(['english', 'nepali', 'both']).default('english'),

  // ── Health equity (cross-cutting dimension) ──
  healthEquityDimensions: z.array(z.enum(healthEquityDimensionValues)).default([]),

  // ── Verification workflow ──
  status: z.enum(verificationStatuses).default('draft'),
  reviewers: z.array(reviewerEntry).default([]),
  verifiedBy: z.string().nullable().default(null),
  verifiedDate: z.string().nullable().default(null),

  // ── Retraction & correction monitoring ──
  retractionStatus: z.enum(retractionStatuses).default('active'),
  correctionHistory: z.array(correctionEntry).default([]),
  lastStatusCheck: z.string().nullable().default(null),
  withdrawnDate: z.string().nullable().default(null),
  withdrawnReason: z.string().nullable().default(null),

  // ── Metadata ──
  dateAdded: z.string(),
  addedBy: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export type EvidenceEntry = z.infer<typeof evidenceEntrySchema>;
export type PolicyDomain = (typeof policyDomains)[number];
export type StudyDesign = (typeof studyDesigns)[number];
export type RigourLevel = (typeof rigourLevels)[number];
export type ApplicabilityLevel = (typeof applicabilityLevels)[number];
export type VerificationStatus = (typeof verificationStatuses)[number];
export type SourceChannel = (typeof sourceChannels)[number];
export type JournalTier = (typeof journalTiers)[number];
export type HealthEquityDimension = (typeof healthEquityDimensionValues)[number];

export const topicSchema = z.object({
  slug: z.string(),
  title: bilingualString,
  description: bilingualString,
  overview: bilingualString,
  keyQuestions: z.object({
    en: z.array(z.string()),
    ne: z.array(z.string()),
  }),
  policyDomains: z.array(z.enum(policyDomains)),
  icon: z.string(),
});

export type Topic = z.infer<typeof topicSchema>;
