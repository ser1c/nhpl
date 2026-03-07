import { z } from 'astro:content';

export const policyDomains = [
  'health-financing',
  'maternal-health',
  'primary-care',
  'infectious-disease',
  'mental-health',
  'nutrition',
  'health-workforce',
  'health-information-systems',
  'noncommunicable-diseases',
  'health-governance',
  'child-health',
  'environmental-health',
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
] as const;

export const evidenceStrengths = ['high', 'moderate', 'low'] as const;

export const verificationStatuses = [
  'auto-processed',
  'under-review',
  'verified',
  'rejected',
] as const;

const bilingualString = z.object({
  en: z.string(),
  ne: z.string(),
});

export const evidenceEntrySchema = z.object({
  slug: z.string(),
  title: z.string(),
  authors: z.array(z.string()),
  year: z.number(),
  journal: z.string(),
  doi: z.string().optional(),
  url: z.string().url(),

  policyDomain: z.array(z.enum(policyDomains)),
  studyDesign: z.enum(studyDesigns),
  evidenceStrength: z.enum(evidenceStrengths),
  countries: z.array(z.string()),

  nepalRelevanceScore: z.number().int().min(1).max(5),
  contextualisation: bilingualString,

  onePager: z.object({
    whatWasStudied: bilingualString,
    whatTheyFound: bilingualString,
    whatItMeansForNepal: bilingualString,
  }),

  status: z.enum(verificationStatuses).default('auto-processed'),
  verifiedBy: z.string().nullable().default(null),
  verifiedDate: z.string().nullable().default(null),

  dateAdded: z.string(),
  addedBy: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export type EvidenceEntry = z.infer<typeof evidenceEntrySchema>;
export type PolicyDomain = (typeof policyDomains)[number];
export type StudyDesign = (typeof studyDesigns)[number];
export type EvidenceStrength = (typeof evidenceStrengths)[number];
export type VerificationStatus = (typeof verificationStatuses)[number];

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
