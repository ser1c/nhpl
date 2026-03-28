# Nepal Health Policy Lab — Evidence Methodology Overview

**Version**: 0.1 (March 2026) — Seeking Feedback
**Contact**: nepalhealthpolicylab.org

---

## What Is NHPL?

The Nepal Health Policy Lab makes rigorous global health evidence accessible and actionable for Nepal's policymakers, practitioners, and public. We maintain a publicly accessible evidence portal where users can browse global health research curated and contextualised for Nepal.

Each paper gets a structured one-page summary:
- **What Was Studied** — research question, setting, population, design
- **What They Found** — key findings in plain language
- **What This Means for Nepal** — policy implications contextualised for Nepal's health system, demographics, and political economy

Our core value proposition is **cross-disciplinary synthesis**: we combine health economics, clinical, qualitative, and grey literature evidence — breaking the silos that traditional reviews maintain — and contextualise everything for Nepal's federal system, political economy, and health landscape.

---

## How Evidence Enters the Portal

### Two Intake Channels

**1. Systematic Discovery**
Core databases searched: PubMed, EconLit, Google Scholar, Scopus, 3ie. Monthly saved-search scans. PubMed and Google Scholar alerts for priority topics. Documented and reproducible search strings.

**2. Expert Recommendation**
Advisors, PhD supervisors, and network contacts nominate papers. Reviewers flag papers from their own research. If someone with domain expertise says "this needs to be here," it enters the pipeline. Source channel is always recorded.

Both channels feed into the same verification pipeline with identical quality standards.

### Source Coverage

We search across disciplinary boundaries:

| Domain | Sources |
|--------|---------|
| **Economics** | EconLit, NBER, RePEc, SSRN, BREAD, IZA, CEPR — covering Top 5 journals (AER, Econometrica, JPE, QJE, REStud) and top field journals (JHE, Health Economics, JDE, AEJ:Applied) |
| **Health/Medical** | PubMed/MEDLINE, Cochrane Library, Global Health (CABI) |
| **Evaluation** | J-PAL/IPA, 3ie, GiveWell/Open Philanthropy |
| **Grey Literature** | WHO IRIS, World Bank, ADB, FCDO, UNICEF, ILO |
| **Nepal-Specific** | NHRC Journal, JNMA, TU repository, BPKIHS, KUSMS, MoHP/DoHS reports, HIB reports |

---

## Topics

We cover 10 health policy topics, plus Health Equity as both a cross-cutting lens and a standalone aggregation topic:

| # | Topic | Covers |
|---|-------|--------|
| 1 | Health Financing & Insurance | NHIP, OOP spending, UHC, provider payment |
| 2 | Health Workforce | Brain drain, FCHV, task-shifting, retention |
| 3 | Primary Care & Service Delivery | PHC access, referral, BHSP, digital health |
| 4 | Maternal & Newborn Health | Maternal mortality, neonatal care, family planning |
| 5 | NCDs | CVD, diabetes, COPD, cancer, kidney disease |
| 6 | Mental Health | Suicide, treatment gap, substance use |
| 7 | Nutrition | Stunting, wasting, micronutrients |
| 8 | Infectious Disease & AMR | Dengue, TB, vaccination, pandemic preparedness |
| 9 | Air Pollution & Environmental Health | Air quality, climate-health, WASH, disasters |
| 10 | Health Governance & Federalism | Decentralisation, coordination, regulation |
| + | **Health Equity & Disparities** | Cross-cutting: caste/ethnicity, gender, geographic, wealth disparities |

**Topic activation**: A topic page only appears on the portal once it has 10+ verified papers. Topics are demand-driven for this phase, and will evolve toward a burden-informed methodology anchored to Nepal's GBD data.

---

## How Evidence Is Processed

### AI-Assisted, Human-Verified

Our philosophy is **AI does the heavy lifting, humans do the thinking**. The AI pipeline drafts structured summaries. Humans verify accuracy, assess methodology, and write or revise the Nepal contextualisation.

**Nothing is published before human verification.** This is non-negotiable.

### The Pipeline

```
Paper enters (either channel)
        ↓
Semantic Scholar API
(auto-fills bibliographic info, checks retraction status)
        ↓
Custom AI Extraction Pipeline
(study design, sample size, key findings)
        ↓
Nepal Contextualisation Layer
(grounded in a curated Nepal health system knowledge base,
not the AI's general memory)
        ↓
Output: draft summary → enters human review queue
        ↓
Human Review (paper is NOT published until verified)
        ↓
Published on portal as "Verified"
```

### Nepal Knowledge Base (RAG)

The AI does not contextualise from its general training data. Instead, it draws from a curated, maintained knowledge base of Nepal health system facts — NHIP coverage statistics, physician density (0.17/1,000), federal structure (7 provinces, 753 local governments), key policies (BHSP, Aama programme), and demographic data. This dramatically reduces the risk of the AI generating plausible-sounding but incorrect claims about Nepal.

---

## The Three-Tier Appraisal System

Papers receive different levels of scrutiny depending on their source:

### Tier 1: High-Prestige Journals
**Examples**: AER, QJE, Lancet, NEJM, BMJ Global Health, Cochrane Reviews, JHE, Health Economics

- Already through rigorous peer review
- Human reviewer focuses on: Is the summary accurate? Is the Nepal contextualisation defensible?
- Single reviewer, ~15-20 minutes
- We do not re-do the referee's job on methodology

### Tier 2: Good Journals & Established Working Papers
**Examples**: PLOS One, BMC series, NBER Working Papers, World Bank Policy Research

- Moderate methodology check alongside contextualisation review
- Single reviewer, ~15-20 minutes

### Tier 3: Nepal-Specific, Grey Literature, Pre-Prints
**Examples**: NHRC Journal, JNMA, MoHP reports, donor evaluations, all pre-prints

- Full methodological appraisal using study-type-specific checklists
- Deep review of Nepal contextualisation
- **Dual review required** — two independent reviewers (one methods expert, one domain expert)
- ~90-150 minutes per reviewer (including reading the paper)

---

## Rating System

Every paper receives two independent ratings:

### Methodological Rigour (How well was the study done?)

| Rating | Meaning |
|--------|---------|
| **High** | Well-designed, credible methodology, adequate sample, robust findings |
| **Moderate** | Reasonable methodology with some limitations, but findings are informative |
| **Low** | Significant methodological limitations — included with prominent caveats |

### Nepal Applicability (How well do findings transfer to Nepal?)

| Rating | Meaning |
|--------|---------|
| **High** | Setting closely matches Nepal's context; directly applicable |
| **Moderate** | Some similarities, important differences; requires careful contextualisation |
| **Low** | Setting substantially different; included for conceptual insight, not direct applicability |

Plus a **Nepal Relevance Score (1-5)** capturing geographic proximity — from 5 (Nepal-specific study) to 1 (US/European study with conceptual relevance only).

We deliberately separate these dimensions. A well-designed RCT from Sweden might be High on rigour but Low on applicability. A weaker Nepal-specific observational study might be the opposite. Policymakers need to see both.

---

## CAFE-HE: Our Economics Appraisal Framework

We developed CAFE-HE (Critical Appraisal Framework for Health Economics Evidence in LMIC Policy Translation) because no existing appraisal tool adequately handles the methods central to health economics — instrumental variables, difference-in-differences, regression discontinuity, matching, structural models, and cost-effectiveness analysis.

CAFE-HE has 6 domains:
1. **Research Question & Design** — including parameter of interest (ATE, ATT, LATE)
2. **Identification Strategy** — method-specific checklists (IV exclusion restrictions, DiD parallel trends, RDD manipulation tests, etc.)
3. **Data Quality** — sample representativeness, measurement, missing data
4. **Results & Robustness** — effect sizes, sensitivity, heterogeneity
5. **External Validity & Policy Translation** — population match, health system match, implementation feasibility, cultural context, political economy, cost transferability *(this is CAFE-HE's distinctive contribution)*
6. **Overall Assessment** — two summary judgments: confidence in causal estimate + confidence in policy relevance

CAFE-HE is currently v0.1 (internal working prototype). We are validating it through use — the first 10-15 economics papers will serve as a pilot — and plan to publish it as a standalone methods paper after formal validation (Delphi process + inter-rater reliability testing).

---

## Human Review: PhD Student Reviewers

### The Model

Volunteer PhD students from diverse health-related domains verify AI-generated summaries and add the human judgment that AI cannot provide — especially the Nepal contextualisation. The role is "verification, not generation" — reviewers check and improve AI output rather than producing reviews from scratch.

### Training

Reviewers complete a structured 3-session training programme (~8 hours total):
- **Session 1**: Foundations — the pipeline, tier system, rating scales
- **Session 2**: Hands-on practice — complete reviews together, common AI errors, contextualisation examples
- **Session 3**: Calibration & assessment — compare results across reviewers, final test, certification

New reviewers handle only Tier 1/2 papers for their first 3 months before graduating to Tier 3. Quarterly calibration exercises ensure consistency.

### Quality Assurance

- Named credit on every paper ("Verified by [name]")
- Dual review with structured disagreement resolution for Tier 3
- Inter-rater reliability monitoring (target: kappa > 0.6)
- Mandatory calibration exercises before going live and quarterly thereafter

---

## Inclusion & Exclusion

### Included
- Any study addressing one of the 10 NHPL topics
- Three geographic tiers: Nepal-specific, South Asia, other LMICs with comparable context
- All study types: systematic reviews, RCTs, quasi-experimental, observational, qualitative, mixed-methods, modelling, cost-effectiveness, grey literature
- English or Nepali language

### Excluded
- Pure biomedical/clinical studies with no policy relevance
- Editorials/commentaries (unless containing original data)
- Retracted papers
- Dissertations/theses (for now — may revisit)

### How Systematic Reviews Are Used

Existing systematic reviews serve three roles for NHPL — they are NOT treated the same as primary studies:
1. **Scoping tool** — map the landscape before searching for primary studies
2. **Coverage check** — cross-reference our primary study collection against existing reviews
3. **Cited reference** — cite in policy briefs as supporting/divergent evidence

Our policy briefs synthesise across primary studies. Systematic reviews verify and supplement, not replace, our own synthesis.

---

## Correction & Retraction Policy

### Automated Status Monitoring
An automated agent runs weekly, checking every DOI against CrossRef and Retraction Watch. Auto-flags retractions, errata, and pre-print-to-publication upgrades.

### User Error Reporting
A "Report an Error" button on every paper page routes issues to the review queue for action within 48 hours.

### Correction Categories
- **Minor** (typo): corrected silently
- **Material** (misrepresented finding): corrected with visible note and date
- **Withdrawal** (source retracted): page remains with prominent withdrawal banner

---

## Phasing

| Phase | Target | Approach |
|-------|--------|----------|
| **1a** (launch) | 30 verified papers | Expert-led curation from known literature |
| **1b** (expansion) | 30-100 papers | Targeted systematic searches on 3 priority topics |
| **2** (depth) | 100-200 papers | Broader searches, more topics activated |
| **3** (comprehensive) | 200+ papers | All topics active, regular updates |

---

## What Makes NHPL Different

1. **Cross-disciplinary** — We synthesise economics, clinical, qualitative, and grey literature together. No existing review or portal does this for Nepal.
2. **Nepal-contextualised** — Every paper gets a "What This Means for Nepal" section grounded in Nepal's actual health system, not generic LMIC framing.
3. **AI-assisted, human-verified** — AI extracts and drafts. Humans verify and contextualise. Nothing is published without human sign-off.
4. **Demand-driven topics** — Derived from what MoHP, donors, and politicians actually ask about, not what researchers think is important.
5. **CAFE-HE** — A novel appraisal framework for health economics evidence in LMIC policy translation, addressing a genuine gap in the methods literature.

---

## We Want Your Feedback

We are seeking feedback on this methodology before Phase 1 launch. Specifically:

1. **Topics**: Are the 10 topics the right ones? What's missing? What's unnecessary at this stage?
2. **Appraisal approach**: Does the three-tier system make sense? Is the methodological rigour / Nepal applicability split useful?
3. **CAFE-HE**: If you work in health economics — would you use this framework? What's missing?
4. **Contextualisation**: What would make the "What This Means for Nepal" sections most useful to you?
5. **Evidence gaps**: What health policy questions do you most need evidence on?
6. **General**: What would make you trust — or distrust — this portal?

Please send feedback to: [contact email]

---

*Nepal Health Policy Lab — Making rigorous global health evidence accessible and actionable for Nepal*
