import type { PolicyDomain, StudyDesign, EvidenceStrength, VerificationStatus } from './evidence.schema';

type BilingualLabel = { en: string; ne: string };

export const policyDomainLabels: Record<PolicyDomain, BilingualLabel> = {
  'health-financing': { en: 'Health Financing', ne: 'स्वास्थ्य वित्तपोषण' },
  'maternal-health': { en: 'Maternal Health', ne: 'मातृ स्वास्थ्य' },
  'primary-care': { en: 'Primary Care', ne: 'प्राथमिक स्वास्थ्य सेवा' },
  'infectious-disease': { en: 'Infectious Disease', ne: 'संक्रामक रोग' },
  'mental-health': { en: 'Mental Health', ne: 'मानसिक स्वास्थ्य' },
  'nutrition': { en: 'Nutrition', ne: 'पोषण' },
  'health-workforce': { en: 'Health Workforce', ne: 'स्वास्थ्य जनशक्ति' },
  'health-information-systems': { en: 'Health Information Systems', ne: 'स्वास्थ्य सूचना प्रणाली' },
  'noncommunicable-diseases': { en: 'Noncommunicable Diseases', ne: 'असंचारी रोग' },
  'health-governance': { en: 'Health Governance', ne: 'स्वास्थ्य शासन' },
  'child-health': { en: 'Child Health', ne: 'बाल स्वास्थ्य' },
  'environmental-health': { en: 'Environmental Health', ne: 'वातावरणीय स्वास्थ्य' },
};

export const studyDesignLabels: Record<StudyDesign, BilingualLabel> = {
  'rct': { en: 'Randomised Controlled Trial', ne: 'अनियमित नियन्त्रित परीक्षण' },
  'quasi-experimental': { en: 'Quasi-Experimental', ne: 'अर्ध-प्रयोगात्मक' },
  'cohort': { en: 'Cohort Study', ne: 'कोहोर्ट अध्ययन' },
  'cross-sectional': { en: 'Cross-Sectional', ne: 'क्रस-सेक्शनल' },
  'case-control': { en: 'Case-Control', ne: 'केस-कन्ट्रोल' },
  'qualitative': { en: 'Qualitative', ne: 'गुणात्मक' },
  'mixed-methods': { en: 'Mixed Methods', ne: 'मिश्रित विधि' },
  'systematic-review': { en: 'Systematic Review', ne: 'व्यवस्थित समीक्षा' },
  'meta-analysis': { en: 'Meta-Analysis', ne: 'मेटा-विश्लेषण' },
  'descriptive': { en: 'Descriptive', ne: 'वर्णनात्मक' },
  'modelling': { en: 'Modelling', ne: 'मोडेलिङ' },
};

export const evidenceStrengthLabels: Record<EvidenceStrength, BilingualLabel> = {
  'high': { en: 'High', ne: 'उच्च' },
  'moderate': { en: 'Moderate', ne: 'मध्यम' },
  'low': { en: 'Low', ne: 'न्यून' },
};

export const evidenceStrengthColors: Record<EvidenceStrength, string> = {
  'high': 'bg-green-100 text-green-800',
  'moderate': 'bg-amber-100 text-amber-800',
  'low': 'bg-red-100 text-red-800',
};

export const verificationStatusLabels: Record<VerificationStatus, BilingualLabel> = {
  'auto-processed': { en: 'AI-Processed', ne: 'एआई-प्रशोधित' },
  'under-review': { en: 'Under Review', ne: 'समीक्षाधीन' },
  'verified': { en: 'Verified', ne: 'प्रमाणित' },
  'rejected': { en: 'Rejected', ne: 'अस्वीकृत' },
};
