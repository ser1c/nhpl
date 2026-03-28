# Google Forms Specification for NHPL Evidence Review

**Purpose**: Design specifications for review forms used by PhD student reviewers. Question design is platform-independent — transfers directly to Covidence extraction forms or Google Forms.

---

## Platform Options

**Primary option**: Covidence (institutional access confirmed via University of Strathclyde and University of Edinburgh). Purpose-built for systematic review workflows with dual review, conflict detection, audit trails, and PRISMA diagram generation.

**Backup option**: Google Forms (specifications below). Zero cost, zero onboarding, familiar to all reviewers. Limited conditional logic, no versioning, no audit trail without Apps Script additions.

**Decision pending**: Final platform choice to be made before Phase 1 launch. The form specifications below serve as the review question design regardless of platform — the questions transfer directly to Covidence extraction forms if that platform is selected.

---

## Form 1: Tier 1/2 Quick Review Form

**Title**: NHPL Evidence Review — Tier 1/2 (Contextualisation Check)
**Description**: Quick review of AI-generated paper summaries from high-quality peer-reviewed sources. Estimated time: 15-20 minutes.

### Section 1: Paper Identification

| Field | Type | Required | Options/Validation |
|-------|------|----------|-------------------|
| Paper ID / Slug | Short text | Yes | e.g., "oregon-health-insurance-2012" |
| Paper Title | Short text | Yes | Pre-filled or entered by reviewer |
| Source Journal | Short text | Yes | |
| Your Name | Short text | Yes | |
| Your Institutional Affiliation | Short text | Yes | |
| Your Domain Expertise | Dropdown | Yes | Health economics, Health systems, Epidemiology, Maternal & child health, Nutrition, Mental health, Infectious disease, Environmental health, Digital health, Health workforce, Public policy, Other |
| Date of Review | Date | Yes | Auto-filled |

### Section 2: Accuracy Check

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Is the bibliographic information correct? (Title, authors, year, journal, DOI) | Multiple choice | Yes | Yes / No |
| If No — what needs correcting? | Long text | Conditional (if No above) | |
| Is the study design classification correct? | Multiple choice | Yes | Yes / No |
| If No — correct classification: | Dropdown | Conditional | RCT, Quasi-experimental (IV), Quasi-experimental (DiD), Quasi-experimental (RDD), Matching/PSM, Cohort, Cross-sectional, Case-control, Qualitative, Mixed-methods, Systematic review, Meta-analysis, Modelling, Cost-effectiveness, Descriptive, Programme evaluation |
| Does "What Was Studied" accurately represent the paper? | Multiple choice | Yes | Yes — accurate / Mostly accurate, minor issues / No — significant misrepresentation |
| If not fully accurate — suggested revision: | Long text | Conditional | |
| Does "What They Found" accurately represent the paper? | Multiple choice | Yes | Yes — accurate / Mostly accurate, minor issues / No — significant misrepresentation |
| If not fully accurate — suggested revision: | Long text | Conditional | |

### Section 3: Nepal Contextualisation

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Is "What This Means for Nepal" plausible and defensible? | Multiple choice | Yes | Yes — defensible / Partially — needs refinement / No — problematic claims |
| If not fully defensible — what is the issue? | Long text | Conditional | |
| Suggested revision to contextualisation (if any): | Long text | No | |

### Section 4: Ratings

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Is the methodological rigour rating appropriate? | Multiple choice | Yes | Yes / No — should be Higher / No — should be Lower |
| Suggested methodological rigour: | Dropdown | Conditional (if No) | High / Moderate / Low |
| Is the Nepal applicability rating appropriate? | Multiple choice | Yes | Yes / No — should be Higher / No — should be Lower |
| Suggested Nepal applicability: | Dropdown | Conditional (if No) | High / Moderate / Low |
| Is the Nepal relevance score appropriate? | Multiple choice | Yes | Yes / No |
| Suggested Nepal relevance score: | Linear scale (1-5) | Conditional (if No) | 1 (Low — heavy contextualisation needed) to 5 (Nepal-specific, directly applicable) |

### Section 5: Decision

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Your decision: | Multiple choice | Yes | ✅ Approve as verified / 🔄 Flag for revision |
| Additional comments: | Long text | No | |

---

## Form 2: Tier 3 Full Review Form

**Title**: NHPL Evidence Review — Tier 3 (Full Appraisal)
**Description**: Comprehensive review of papers from Nepal-specific sources, grey literature, or pre-prints. Includes methodological appraisal. Estimated time: 90-150 minutes (including reading the paper).

### Section 1: Paper Identification

| Field | Type | Required | Options/Validation |
|-------|------|----------|-------------------|
| Paper ID / Slug | Short text | Yes | |
| Paper Title | Short text | Yes | |
| Source | Short text | Yes | Journal name, working paper series, or institution |
| Your Name | Short text | Yes | |
| Your Institutional Affiliation | Short text | Yes | |
| Your Domain Expertise | Dropdown | Yes | Health economics, Health systems, Epidemiology, Maternal & child health, Nutrition, Mental health, Infectious disease, Environmental health, Digital health, Health workforce, Public policy, Other |
| Are you the 1st or 2nd reviewer? | Multiple choice | Yes | 1st reviewer / 2nd reviewer |
| Date of Review | Date | Yes | |

### Section 2: Study Classification

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Study design (your assessment): | Dropdown | Yes | RCT, Quasi-experimental (IV), Quasi-experimental (DiD), Quasi-experimental (RDD), Matching/PSM, Cohort, Cross-sectional, Case-control, Qualitative, Mixed-methods, Systematic review, Meta-analysis, Modelling, Cost-effectiveness, Descriptive, Programme evaluation, Grey literature (institutional report), Grey literature (donor evaluation), Other |
| Does the AI's classification match yours? | Multiple choice | Yes | Yes / No |
| Geographic tier: | Multiple choice | Yes | Tier 1 (Nepal-specific) / Tier 2 (South Asia) / Tier 3 (Other LMIC) |
| If pre-print: has a peer-reviewed version been published since? | Multiple choice | No | Yes / No / Not a pre-print / Unknown |

### Section 3: Methodological Appraisal

**Conditional section — questions shown based on study design selected in Section 2.**

#### 3A. If Systematic Review / Meta-Analysis:

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Was the search comprehensive? | Scale | Yes | 1 (Inadequate) — 5 (Fully adequate) |
| Were inclusion/exclusion criteria clear? | Scale | Yes | 1-5 |
| Was risk of bias assessed for included studies? | Scale | Yes | 1-5 |
| Was heterogeneity explored? | Scale | Yes | 1-5 |
| Were results robust to sensitivity analyses? | Scale | Yes | 1-5 |
| Quality assessment (GRADE or equivalent) applied? | Multiple choice | Yes | Yes / Partially / No |
| Any important studies missing that you know of? | Long text | No | |

#### 3B. If RCT:

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Randomisation adequate? | Scale | Yes | 1-5 |
| Blinding appropriate? | Scale | Yes | 1-5 |
| Attrition rate and differential attrition? | Short text | Yes | |
| ITT analysis used? | Multiple choice | Yes | Yes / No / Unclear |
| Sample size adequately powered? | Multiple choice | Yes | Yes / No / Unclear / Not reported |
| External validity for Nepal: | Scale | Yes | 1 (Very different setting) — 5 (Very similar) |
| Implementation fidelity discussed? | Multiple choice | Yes | Yes / Partially / No |

#### 3C. If Economics Paper (IV, DiD, RDD, Matching):

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Which identification strategy? | Multiple choice | Yes | IV / DiD / RDD / Matching-PSM / Structural model / Cost-effectiveness / Other |
| Have you completed the CAFE-HE checklist for this paper? | Multiple choice | Yes | Yes / No (explain why) |
| Identification strategy credibility: | Scale | Yes | 1 (Not credible) — 5 (Highly credible) |
| Key concern about identification (if any): | Long text | No | |
| For IV: Who are the compliers? Are they policy-relevant for Nepal? | Long text | Conditional | |
| For DiD: Are parallel trends credible? | Long text | Conditional | |
| For RDD: Is the local estimate policy-relevant? | Long text | Conditional | |
| For Matching: Is selection-on-observables plausible? | Long text | Conditional | |
| Are robustness checks adequate? | Scale | Yes | 1-5 |
| Are effect sizes policy-meaningful (not just significant)? | Multiple choice | Yes | Yes / Unclear / No |

#### 3D. If Observational (Non-Econometric):

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Sampling strategy appropriate? | Scale | Yes | 1-5 |
| Key confounders adjusted for? | Scale | Yes | 1-5 |
| Measurement instruments validated? | Multiple choice | Yes | Yes / Partially / No / N/A |
| Sample size adequate? | Multiple choice | Yes | Yes / No / Unclear |
| Causal claims appropriately caveated? | Multiple choice | Yes | Yes / Overclaims causation / N/A |

#### 3E. If Qualitative:

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Research question appropriate for qualitative methods? | Multiple choice | Yes | Yes / Partially / No |
| Sampling strategy clear? | Scale | Yes | 1-5 |
| Data saturation discussed? | Multiple choice | Yes | Yes / No |
| Researcher reflexivity acknowledged? | Multiple choice | Yes | Yes / Partially / No |
| Analysis approach rigorous? | Scale | Yes | 1-5 |
| Findings grounded in data? (Quotes/examples) | Multiple choice | Yes | Yes / Partially / No |
| Transferable to Nepal's context? | Scale | Yes | 1 (Low) — 5 (High) |

#### 3F. If Grey Literature:

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Authority: Institutional credibility in this domain? | Scale | Yes | 1-5 |
| Accuracy: Methodology transparent? Data cited? | Scale | Yes | 1-5 |
| Coverage: Limitations acknowledged? | Scale | Yes | 1-5 |
| Objectivity: Institutional bias present? | Multiple choice | Yes | Low risk / Some risk / High risk |
| If bias risk: describe | Long text | Conditional | |
| Date: Current enough? | Multiple choice | Yes | Yes / Borderline / No |
| Significance: Unique contribution? | Scale | Yes | 1-5 |

### Section 4: AI Summary Review

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Does "What Was Studied" accurately represent the paper? | Multiple choice | Yes | Yes — accurate / Mostly accurate, minor issues / No — significant misrepresentation |
| If issues — describe or suggest revision: | Long text | Conditional | |
| Does "What They Found" accurately represent the paper? | Multiple choice | Yes | Yes — accurate / Mostly accurate, minor issues / No — significant misrepresentation |
| If issues — describe or suggest revision: | Long text | Conditional | |
| Does "What This Means for Nepal" meet NHPL standards? | Multiple choice | Yes | Yes — defensible / Partially — needs refinement / No — problematic claims |
| Issues with contextualisation: | Long text | Conditional | |
| Suggested revision to contextualisation: | Long text | No | |

### Section 5: Ratings

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Methodological rigour: | Multiple choice | Yes | High / Moderate / Low |
| Justification for methodological rigour rating: | Long text | Yes | |
| Nepal applicability: | Multiple choice | Yes | High / Moderate / Low |
| Justification for Nepal applicability rating: | Long text | Yes | |
| Nepal relevance score: | Linear scale (1-5) | Yes | 1 (Low) to 5 (Nepal-specific) |
| Justification for relevance score: | Long text | Yes | |

### Section 6: Overall Assessment

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Key strengths of this paper (2-3 bullet points): | Long text | Yes | |
| Key limitations (2-3 bullet points): | Long text | Yes | |
| Overall methodological quality: | Multiple choice | Yes | Adequate / Partially adequate / Inadequate |
| Your decision: | Multiple choice | Yes | ✅ Verified / 🔄 Needs revision / ❌ Rejected |
| If Needs Revision — what must be changed? | Long text | Conditional | |
| If Rejected — reason: | Long text | Conditional | |
| Additional comments for the NHPL team: | Long text | No | |

---

## Implementation Notes

### Google Forms Settings

- **Both forms**: Collect email addresses (for follow-up), limit to 1 response per reviewer per paper (can be edited after submission)
- **Tier 3 form**: Use Google Forms' section-based conditional logic to show the relevant methodological checklist (3A-3F) based on study design selection
- **Response destination**: Link both forms to a shared Google Sheet for easy tracking and analysis

### Data Management

The Google Sheet should have:
- **Tab 1**: Tier 1/2 reviews
- **Tab 2**: Tier 3 reviews (1st reviewer)
- **Tab 3**: Tier 3 reviews (2nd reviewer)
- **Tab 4**: Disagreement log (manually maintained)
- **Tab 5**: Reviewer roster (name, affiliation, expertise, active/inactive, papers reviewed)

### Workflow Integration

1. Sabin assigns paper to reviewer(s) via email
2. Email includes: paper PDF/link, AI one-pager, form link, tier classification, deadline suggestion
3. Reviewer submits form
4. Response appears in Google Sheet
5. For Tier 3: compare two reviewers' submissions
6. Sabin makes final decision, updates evidence.json status field
7. Paper goes live (or revision cycle begins)

### Email Template for Assigning Reviews

**Subject**: NHPL Review Request: [Paper Title] (Tier [X])

Hi [Reviewer Name],

We'd like you to review the following paper for NHPL's evidence portal:

**Paper**: [Title]
**Authors**: [Authors]
**Source**: [Journal/Series]
**Tier**: [1/2/3]
**Estimated time**: [15-20 min for Tier 1/2 / 90-150 min for Tier 3]

**Resources**:
- [Link to paper / attached PDF]
- [Link to AI-generated one-pager]
- [Link to Google Form]

**For Tier 3**: You are the [1st/2nd] reviewer. [Other reviewer name] is also reviewing this paper independently.

Please submit by [date — typically 2 weeks from assignment]. If you need more time, just let us know.

Refer to the Reviewer Handbook if you need guidance on the appraisal process.

Thanks,
Sabin

---

## Form Links (to be filled after creation)

- Tier 1/2 Form: [URL]
- Tier 3 Form: [URL]
- Response Sheet: [URL]
- Reviewer Handbook: [URL]
