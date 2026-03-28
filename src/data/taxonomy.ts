import type {
  PolicyDomain,
  StudyDesign,
  RigourLevel,
  ApplicabilityLevel,
  VerificationStatus,
  SourceChannel,
  JournalTier,
  HealthEquityDimension,
} from './evidence.schema';

type BilingualLabel = { en: string; ne: string };

export const policyDomainLabels: Record<PolicyDomain, BilingualLabel> = {
  'health-financing': { en: 'Health Financing', ne: 'स्वास्थ्य वित्तपोषण' },
  'health-workforce': { en: 'Health Workforce', ne: 'स्वास्थ्य जनशक्ति' },
  'primary-care': { en: 'Primary Care', ne: 'प्राथमिक स्वास्थ्य सेवा' },
  'maternal-newborn-health': { en: 'Maternal & Newborn Health', ne: 'मातृ तथा नवजात स्वास्थ्य' },
  'noncommunicable-diseases': { en: 'Noncommunicable Diseases', ne: 'असंचारी रोग' },
  'mental-health': { en: 'Mental Health', ne: 'मानसिक स्वास्थ्य' },
  'nutrition': { en: 'Nutrition', ne: 'पोषण' },
  'infectious-disease': { en: 'Infectious Disease', ne: 'संक्रामक रोग' },
  'environmental-health': { en: 'Environmental Health', ne: 'वातावरणीय स्वास्थ्य' },
  'health-governance': { en: 'Health Governance', ne: 'स्वास्थ्य शासन' },
  'health-equity': { en: 'Health Equity & Disparities', ne: 'स्वास्थ्य समानता र असमानता' },
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
  'cost-effectiveness': { en: 'Cost-Effectiveness Analysis', ne: 'लागत-प्रभावकारिता विश्लेषण' },
  'programme-evaluation': { en: 'Programme Evaluation', ne: 'कार्यक्रम मूल्याङ्कन' },
};

export const rigourLabels: Record<RigourLevel, BilingualLabel> = {
  'high': { en: 'High', ne: 'उच्च' },
  'moderate': { en: 'Moderate', ne: 'मध्यम' },
  'low': { en: 'Low', ne: 'न्यून' },
};

export const rigourColors: Record<RigourLevel, string> = {
  'high': 'bg-green-100 text-green-800',
  'moderate': 'bg-amber-100 text-amber-800',
  'low': 'bg-red-100 text-red-800',
};

export const applicabilityLabels: Record<ApplicabilityLevel, BilingualLabel> = {
  'high': { en: 'High', ne: 'उच्च' },
  'moderate': { en: 'Moderate', ne: 'मध्यम' },
  'low': { en: 'Low', ne: 'न्यून' },
};

export const applicabilityColors: Record<ApplicabilityLevel, string> = {
  'high': 'bg-green-100 text-green-800',
  'moderate': 'bg-amber-100 text-amber-800',
  'low': 'bg-red-100 text-red-800',
};

export const verificationStatusLabels: Record<VerificationStatus, BilingualLabel> = {
  'draft': { en: 'Draft', ne: 'मस्यौदा' },
  'under-review': { en: 'Under Review', ne: 'समीक्षाधीन' },
  'verified': { en: 'Verified', ne: 'प्रमाणित' },
  'rejected': { en: 'Rejected', ne: 'अस्वीकृत' },
  'withdrawn': { en: 'Withdrawn', ne: 'वापस लिइएको' },
};

export const sourceChannelLabels: Record<SourceChannel, BilingualLabel> = {
  'systematic-discovery': { en: 'Systematic Discovery', ne: 'व्यवस्थित खोज' },
  'expert-recommendation': { en: 'Expert Recommendation', ne: 'विशेषज्ञ सिफारिस' },
  'snowball': { en: 'Snowball/Citation', ne: 'सन्दर्भ ट्र्याकिङ' },
  'seed': { en: 'Seed Collection', ne: 'आधार सङ्कलन' },
};

export const journalTierLabels: Record<JournalTier, BilingualLabel> = {
  'tier-1': { en: 'Tier 1 (High-Prestige)', ne: 'तह १ (उच्च प्रतिष्ठा)' },
  'tier-2': { en: 'Tier 2 (Good Journals)', ne: 'तह २ (राम्रो पत्रिका)' },
  'tier-3': { en: 'Tier 3 (Grey/Nepal-Specific)', ne: 'तह ३ (नेपाल-विशिष्ट)' },
};

export const healthEquityLabels: Record<HealthEquityDimension, BilingualLabel> = {
  'caste-ethnicity': { en: 'Caste/Ethnicity', ne: 'जात/जातीयता' },
  'gender': { en: 'Gender', ne: 'लैङ्गिक' },
  'geographic': { en: 'Geographic', ne: 'भौगोलिक' },
  'wealth': { en: 'Wealth', ne: 'सम्पत्ति' },
  'disability': { en: 'Disability', ne: 'अपाङ्गता' },
  'age': { en: 'Age', ne: 'उमेर' },
};
