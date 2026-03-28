# NHPL Evidence Processing Pipeline v2.0
# Version: 2.0 | Updated: 2026-03-28

Process the provided paper through 5 passes (Pass 0-4). Each pass is compartmentalized — complete one fully before moving to the next. The paper can be a PDF, URL, or DOI.

**Status outputs**: All papers enter as `"draft"`. Nothing is published without human verification.

---

## PASS 0: INTAKE GATE

Before any extraction work, determine whether this paper belongs in the NHPL evidence portal.

### Step 0.1: Journal Tier Classification

Classify the paper's source into exactly one tier:

**Tier 1** (high-prestige — light methodology appraisal):
- Top 5 economics: AER, Econometrica, JPE, QJE, REStud
- Top field journals: JHE, Health Economics, JDE, AEJ:Applied, AEJ:Economic Policy, JPublE
- Top medical/global health: Lancet, BMJ, NEJM, Lancet Global Health, BMJ Global Health
- Top health policy: Health Policy and Planning, Social Science & Medicine
- Cochrane Reviews

**Tier 2** (good journals — moderate methodology appraisal):
- 2a (selective): IJHPM, Bulletin of WHO, well-established development/health journals
- 2b (broad-scope): PLOS One, BMC series, Frontiers series
- Working papers from established series: NBER Working Papers, World Bank Policy Research Working Papers

**Tier 3** (full methodology appraisal required):
- Nepal-specific journals: NHRC, JNMA, Nepal Medical College Journal
- MoHP/DoHS reports, donor evaluations
- ALL pre-prints (medRxiv, bioRxiv, SSRN drafts) regardless of author prestige
- Working papers from lesser-known institutions
- Grey literature not covered by Tier 2

Record the tier as `tier-1`, `tier-2`, or `tier-3`.

### Step 0.2: Source Channel

Record how this paper entered the pipeline. One of:
- `systematic-discovery` — found via database search or alert
- `expert-recommendation` — nominated by advisor, reviewer, or domain expert
- `snowball` — found via reference list scanning or citation tracking
- `seed` — selected for initial portal seeding

### Step 0.3: Inclusion Criteria

The paper MUST meet ALL of these to proceed:

1. **Relevance**: Addresses one or more of the 10 NHPL topics (health financing, health workforce, primary care, maternal & newborn health, NCDs, mental health, nutrition, infectious disease, environmental health, health governance) or health equity as a cross-cutting dimension
2. **Geographic scope**: Nepal-specific (auto-include), OR South Asia with transferable findings, OR other LMIC with comparable context
3. **Study type**: RCT, quasi-experimental, cohort, cross-sectional, case-control, qualitative, mixed-methods, systematic review, meta-analysis, descriptive, modelling, cost-effectiveness, programme evaluation, or grey literature (with AACODS note)
4. **Language**: English or Nepali
5. **Recency**: Post-2000, unless it is a landmark study still relevant to current policy

### Step 0.4: Exclusion Criteria

The paper is EXCLUDED if ANY of these apply:

1. Pure clinical/biomedical with no policy, systems, or population health implications (e.g., drug mechanism lab study)
2. High-income country only, unless finding is demonstrably universal
3. Editorial, commentary, or letter — unless it contains original data or a novel policy argument not available elsewhere
4. Duplicate or superseded — a newer version exists (e.g., updated systematic review replaces older)
5. Retracted
6. Unable to access full text
7. Dissertation or thesis
8. Conference abstract only (flag for follow-up when full paper publishes)

### Step 0.5: Gate Decision

- If the paper PASSES inclusion AND does NOT hit any exclusion criterion → proceed to Pass 1.
- If the paper FAILS → STOP. Report which criterion failed and why. Do not proceed.
- If borderline → state the ambiguity, recommend a decision, and ask the user before proceeding.

---

## PASS 1: EXTRACTOR

Read the paper carefully and extract ALL schema fields. Reference `src/data/evidence.schema.ts` for the exact schema.

### 1.1: Identity Fields

| Field | Instructions |
|-------|-------------|
| `slug` | URL-safe identifier from title. Lowercase, hyphens, no special characters. Max ~60 chars. |
| `title` | Full paper title exactly as published. |
| `authors` | Array of author names as they appear on the paper. |
| `year` | Publication year (integer). |
| `journal` | Journal or source name. For working papers, include the series (e.g., "NBER Working Paper"). |
| `doi` | DOI string if available (optional). Format: `10.xxxx/xxxxx` |
| `url` | URL to the paper. Construct from DOI if possible: `https://doi.org/{doi}`. Must be a valid URL. |

### 1.2: Classification Fields

| Field | Instructions |
|-------|-------------|
| `policyDomain` | Array. Choose from: `health-financing`, `health-workforce`, `primary-care`, `maternal-newborn-health`, `noncommunicable-diseases`, `mental-health`, `nutrition`, `infectious-disease`, `environmental-health`, `health-governance`, `health-equity`. Papers often span multiple domains — tag all that apply. |
| `studyDesign` | Single value. Choose from: `rct`, `quasi-experimental`, `cohort`, `cross-sectional`, `case-control`, `qualitative`, `mixed-methods`, `systematic-review`, `meta-analysis`, `descriptive`, `modelling`, `cost-effectiveness`, `programme-evaluation`. |
| `countries` | Array of country names studied in the paper. |

### 1.3: Three Separate Ratings

These three ratings are INDEPENDENT dimensions. Assess each on its own merits.

**`methodologicalRigour`**: How well was the study designed and executed?
- `high` — RCTs with good implementation fidelity, strong quasi-experimental designs with credible identification, well-conducted systematic reviews with GRADE assessment, large well-powered studies
- `moderate` — Reasonable methodology with some limitations (moderate sample, some confounding), good cohort studies, well-done mixed-methods
- `low` — Significant methodological concerns (small sample, major confounding, weak design for the question asked), descriptive without analytical framework

**`nepalApplicability`**: How well do findings transfer to Nepal's context?
- `high` — Nepal-specific study, or very similar setting (similar health system, demographics, income level, federal structure)
- `moderate` — Related context but meaningful differences exist (different health system structure, different income level, different cultural context)
- `low` — Substantially different context; findings require significant adaptation and caution in transfer

**`nepalRelevanceScore`**: Geographic proximity score (integer 1-5).
- 5 = Directly about Nepal
- 4 = South Asia (India, Bangladesh, Sri Lanka, Pakistan, etc.)
- 3 = Comparable low-income country or LMIC with transferable context
- 2 = LMIC but notably different context
- 1 = Limited direct geographic relevance

**Independence check**: A Swedish RCT could be `methodologicalRigour: "high"` but `nepalApplicability: "low"` and `nepalRelevanceScore: 1`. A small Nepali cross-sectional study could be `methodologicalRigour: "low"` but `nepalApplicability: "high"` and `nepalRelevanceScore: 5`. These ratings must NOT mirror each other.

### 1.4: Nepal Contextualisation (Bilingual)

**CRITICAL**: Read `src/data/nepal-context.md` before writing any contextualisation. Ground ALL contextualisation in specific facts from that file. Do NOT rely on general LLM knowledge about Nepal.

**`contextualisation`** (object with `en` and `ne` keys):
- 2-3 sentences explaining WHY this paper matters for Nepal specifically.
- Must reference at least one specific Nepal policy, programme, institution, or statistic from the knowledge base.
- Example of BAD: "This is relevant to Nepal because Nepal is a developing country."
- Example of GOOD: "Nepal's NHIP covers only ~14% of the population despite geographic rollout to all 753 local governments. This study's findings on voluntary enrollment barriers in Rwanda's Mutuelle de Sante — which achieved >90% coverage — offer directly applicable lessons for HIB's expansion strategy."

**`onePager`** (object with three bilingual sections):

| Section | Instructions |
|---------|-------------|
| `whatWasStudied` | What the researchers investigated. Include: research question, methods, sample size, setting, time period. For systematic reviews: the review question, number of included studies, study types covered. |
| `whatTheyFound` | Key findings with SPECIFIC numbers and effect sizes. Must include at least 2 quantitative results from the paper. For every number, verify it appears in the source. Mark uncertain claims with `[VERIFY]`. |
| `whatItMeansForNepal` | Actionable implications for Nepal's health policy. MUST name specific Nepal programmes, policies, or institutions (e.g., "FCHV programme", "NHIP", "Aama programme", "federalism transition", "MoHP", "KAHS"). MUST include at least one concrete recommendation. |

### 1.5: Intake & Source Metadata

| Field | Instructions |
|-------|-------------|
| `sourceChannel` | From Pass 0 gate. One of: `systematic-discovery`, `expert-recommendation`, `snowball`, `seed`. |
| `journalTier` | From Pass 0 gate. One of: `tier-1`, `tier-2`, `tier-3`. |
| `sourceStatus` | One of: `published`, `preprint`, `grey-literature`, `working-paper`. |
| `language` | One of: `english`, `nepali`, `both`. |

### 1.6: Health Equity Dimensions

Tag ALL applicable dimensions from: `caste-ethnicity`, `gender`, `geographic`, `wealth`, `disability`, `age`.

Guidelines for tagging:
- Paper studies rural vs urban health access → tag `geographic`
- Paper examines maternal health outcomes → consider `gender`
- Paper looks at insurance enrollment by income group → tag `wealth`
- Paper examines Dalit or Janajati health disparities → tag `caste-ethnicity`
- Paper focuses on elderly or adolescent populations → tag `age`
- Paper addresses disability-inclusive health services → tag `disability`
- If the paper has NO equity dimension, leave as empty array `[]`

### 1.7: Verification & Retraction Fields

Set these defaults for all new entries:

```json
{
  "status": "draft",
  "reviewers": [],
  "verifiedBy": null,
  "verifiedDate": null,
  "retractionStatus": "active",
  "correctionHistory": [],
  "lastStatusCheck": null,
  "withdrawnDate": null,
  "withdrawnReason": null
}
```

### 1.8: Metadata

| Field | Instructions |
|-------|-------------|
| `dateAdded` | Today's date in `YYYY-MM-DD` format. |
| `addedBy` | `"claude-process"` |
| `tags` | Array of 3-5 keyword tags. Use lowercase, specific terms. Prefer terms that aid search and filtering. |

### 1.9: Hallucination Guard

For every number, statistic, or effect size in `whatTheyFound`:
1. Verify it appears in the source paper text.
2. If you cannot verify a specific claim, mark it with `[VERIFY]`.
3. Quote the exact sentence from the paper that justifies key claims (in your working notes, not in the final JSON).

### 1.10: Systematic Review Special Handling

If `studyDesign` is `systematic-review` or `meta-analysis`, note its NHPL role:
- **Scoping tool**: Maps the evidence landscape on a topic
- **Coverage check**: Cross-reference against NHPL's primary study collection
- **Cited reference**: Supporting/divergent evidence for policy briefs

Adjust the one-pager accordingly:
- `whatWasStudied`: The review question, number of included studies, study types
- `whatTheyFound`: Pooled findings, heterogeneity, GRADE quality assessment
- `whatItMeansForNepal`: Where Nepal-specific evidence fits within the overall picture, what the review does not cover, what questions remain open

---

## PASS 2: ADVERSARY

Your job is to DESTROY the draft from Pass 1. Be ruthless and specific. Check every item below.

### A. Factual Accuracy (5 checks)

1. **Numbers**: Cross-reference every statistic in `whatTheyFound` against the source paper. Flag any number that cannot be verified.
2. **Author names**: Verify spelling matches the paper exactly.
3. **Year**: Confirm publication year is correct (not submission year, not online-first year unless that is the only year available).
4. **DOI format**: If DOI is present, verify it follows `10.xxxx/xxxxx` format. Test the URL `https://doi.org/{doi}` if possible.
5. **Countries**: Verify the countries array matches what the paper actually studied (not just mentioned).

### B. Classification (4 checks)

6. **Study design**: Is the classification correct? Common errors: calling a pre-post study "quasi-experimental" without a comparison group; calling a descriptive survey "cross-sectional" when it has no analytical component; confusing programme evaluation with RCT.
7. **Methodological rigour**: Apply the hierarchy strictly. High requires strong design AND good execution. Moderate is the default for reasonable studies with some limitations. Low means significant concerns. Check: is the rating justified by the actual study quality, not by journal prestige?
8. **Nepal relevance score**: 5 = Nepal study. 4 = South Asia. 3 = comparable LIC. 2 = LMIC but different context. 1 = limited relevance. Is the score correctly calibrated?
9. **Policy domain completeness**: Are all relevant domains tagged? Papers about health insurance for maternal care should have both `health-financing` and `maternal-newborn-health`.

### C. Content Quality (4 checks)

10. **Nepal specificity**: Does `contextualisation` and `whatItMeansForNepal` name at least one specific Nepal policy, programme, institution, or statistic from `src/data/nepal-context.md`? Generic statements like "Nepal is a developing country" are insufficient.
11. **Quantitative evidence**: Does `whatTheyFound` contain at least 2 specific numbers or effect sizes from the paper?
12. **Actionability**: Does `whatItMeansForNepal` contain at least one concrete, actionable recommendation? "More research is needed" alone is not actionable.
13. **Nepali translation quality**: Check all `ne` fields. No Hindi words. No romanised transliteration — must be Devanagari script. Use Devanagari numerals (०, १, २, ३, etc.) for numbers. Natural Nepali phrasing, not word-for-word English translation.

### D. Consistency (3 checks)

14. **Slug format**: Lowercase, hyphens only, no special characters, reasonable length (~30-60 chars), descriptive of the paper.
15. **Tag quality**: 3-5 tags, all lowercase, specific and useful for search. No redundancy with `policyDomain`.
16. **Cross-calibration**: Compare ratings against existing entries in `src/data/evidence.json`. A similar paper should not have wildly different ratings.

### E. Tier-Specific Depth

**Tier 1 papers**: Light methodology check. Heavy contextualisation review. Do not redo the referee's job on identification strategy or internal validity. Focus your critique on: Is the Nepal contextualisation well-grounded? Is transferability assessed honestly? Are policy implications defensible?

**Tier 2 papers**: Moderate methodology check. Note identification strategy for econometric papers, discuss compliers if IV, check parallel trends if DiD, consider external validity. Full contextualisation review.

**Tier 3 papers**: FULL methodological appraisal.
- For quantitative: sample size adequacy, sampling strategy, measurement validity, statistical methods, confounding, bias risk
- For econometric: Apply CAFE-HE checks — identification strategy credibility, complier characterisation (for IV), parallel trends (for DiD), external validity for policy translation
- For qualitative: sampling, saturation, reflexivity, transferability
- For grey literature: AACODS assessment (Authority, Accuracy, Coverage, Objectivity, Date, Significance)
- For cost-effectiveness: Whose costs? Transferable to Nepal's price levels and health system structure?

### F. Independence Check

17. Are `methodologicalRigour` and `nepalApplicability` assessed independently? Flag if they appear to mirror each other. A well-done study from Sweden should be high rigour / low applicability. A weak study from Nepal should be low rigour / high applicability.

### G. Health Equity Check

18. Should equity dimensions be tagged that were not? Common misses:
- Maternal health in rural areas → should have `geographic` (and possibly `gender`)
- Insurance enrollment barriers for informal workers → should have `wealth`
- Studies comparing outcomes by caste or ethnic group → should have `caste-ethnicity`
- Studies on elderly or adolescent populations → should have `age`

### Output Format for Pass 2

Categorize every finding:

- **ERRORS** (must fix before proceeding): Factual inaccuracies, wrong classifications, missing required fields, schema violations
- **WEAKNESSES** (should fix): Weak contextualisation, missing equity tags, suboptimal translation, imprecise ratings
- **SUGGESTIONS** (nice to have): Improved phrasing, additional tags, minor translation polish

**Overall grade**: `PASS` (minor suggestions only) / `REVISE` (errors or weaknesses found) / `REJECT` (fundamental problems — paper may not belong in portal)

---

## PASS 3: REVISER

Address every ERRORS and WEAKNESSES item from Pass 2. SUGGESTIONS are optional but encouraged.

For each item addressed, state:
1. What the issue was
2. What changed
3. Why the change is correct

**Regression guard**: After making changes, re-check that no new errors were introduced. Specifically:
- Did fixing one field break consistency with another?
- Did updating a number in `whatTheyFound` invalidate the `contextualisation`?
- Did changing the Nepali text maintain consistency with the English version?

If Pass 2 graded `REJECT`, explain why the paper should still be processed or confirm the rejection and STOP.

---

## PASS 4: VALIDATOR

This is a binary gate. The entry either passes ALL checks or is BLOCKED.

### Schema Checks

- [ ] All required fields are present (slug, title, authors, year, journal, url, policyDomain, studyDesign, countries, methodologicalRigour, nepalRelevanceScore, contextualisation, onePager, dateAdded)
- [ ] `policyDomain` values are all valid enum members
- [ ] `studyDesign` is a valid enum member
- [ ] `methodologicalRigour` is one of: high, moderate, low
- [ ] `nepalApplicability` is one of: high, moderate, low
- [ ] `nepalRelevanceScore` is an integer 1-5
- [ ] `url` is a valid URL format
- [ ] `doi` (if present) follows `10.xxxx/xxxxx` pattern
- [ ] `sourceChannel` is a valid enum member
- [ ] `journalTier` is a valid enum member
- [ ] `sourceStatus` is a valid enum member
- [ ] `healthEquityDimensions` values are all valid enum members
- [ ] `status` is `"draft"`
- [ ] `retractionStatus` is `"active"` (unless paper is known to be retracted)
- [ ] All bilingual fields (`contextualisation`, `onePager.whatWasStudied`, `onePager.whatTheyFound`, `onePager.whatItMeansForNepal`) have both `en` and `ne` keys with non-empty strings

### Content Checks

- [ ] No `[VERIFY]` markers remain in any field (all claims verified or removed)
- [ ] No AI artifacts (e.g., "As an AI language model...", "I don't have access to...", placeholder text)
- [ ] `whatTheyFound` contains at least 2 specific numbers from the paper
- [ ] `contextualisation` references Nepal specifically (not generic developing country language)
- [ ] `whatItMeansForNepal` contains at least one actionable recommendation naming a specific Nepal programme, policy, or institution
- [ ] `slug` is unique — does not conflict with any existing entry in `src/data/evidence.json`

### Translation Checks

- [ ] All `ne` fields contain Devanagari script (not romanised transliteration)
- [ ] Nepali text length is 50-100% of English text length (Nepali is typically more compact; significantly shorter or longer suggests poor translation)
- [ ] Devanagari numerals used where numbers appear (०, १, २, ३, ४, ५, ६, ७, ८, ९)
- [ ] No Hindi-specific vocabulary (use Nepali equivalents)

### Gate Decision

- **APPROVED**: All checks pass. Proceed to OUTPUT.
- **BLOCKED**: List every failing check. Return to Pass 3 to fix, then re-run Pass 4.

---

## OUTPUT

After the entry passes Pass 4 validation:

### Step 1: Write to evidence.json

Read `src/data/evidence.json`, append the new entry to the array, and write the file. Ensure valid JSON formatting (consistent indentation, no trailing commas).

### Step 2: Check topic coverage

Read `src/data/topics.json`. Check if the paper's `policyDomain` values are covered by existing topics. If a domain is not represented by any topic, note it but do NOT create a new topic (topics require 10+ verified papers to activate).

### Step 3: Print summary

```
PAPER PROCESSED
──────────────────────────────────────
Title:              [paper title]
Authors:            [first author] et al. ([year])
Journal:            [journal] (Tier [1/2/3])
Policy Domains:     [list]
Study Design:       [design]
Methodological Rigour: [high/moderate/low]
Nepal Applicability:   [high/moderate/low]
Nepal Relevance Score: [1-5]
Health Equity:      [dimensions or "none"]
Source Channel:     [channel]
Status:             draft
──────────────────────────────────────
```

### Step 4: Reminder

Print: **"This paper is in DRAFT status. It requires human review before it will appear on the portal. Assign a reviewer via the verification workflow."**

For Tier 3 papers, additionally print: **"Tier 3 paper: requires DUAL review (methods reviewer + domain expert) per NHPL methodology."**

$ARGUMENTS
