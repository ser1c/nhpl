# NHPL Evidence Methodology — Master Validation Report

**Date**: 2026-03-17
**Scope**: Comprehensive multi-expert validation of NHPL's evidence methodology
**Process**: 27 expert critique agents across 9 domains, consolidated by 9 summarizer agents, compiled here
**Documents reviewed**: `methodology-draft.md`, `economics-appraisal-framework.md`, `reviewer-handbook.md`, `review-forms-spec.md`

---

## 1. Executive Summary

The NHPL evidence methodology is conceptually strong and addresses a genuine gap. The cross-disciplinary synthesis model — combining economics, clinical, qualitative, and grey literature evidence, contextualised for Nepal — is a real contribution that no existing organisation or systematic review process delivers. The tiered appraisal system is pragmatically sound, CAFE-HE fills a legitimate void in health economics appraisal, the "cast wide, tag precisely" inclusion philosophy is appropriate for a policy-facing portal, and the topic-first navigation reflects genuine user-centred design thinking.

However, the methodology as currently documented has a critical gap between ambition and operational readiness. The most urgent problem is that Tier 1/2 papers auto-publish to the portal before any human review, exposing the organisation to reputational risk from AI-generated errors — particularly in the Nepal contextualisation sections, where hallucination rates of 30-50% are plausible. The AI pipeline that is central to the entire workflow has zero implemented code. The volunteer PhD reviewer model, while well-conceived in theory, relies on assumptions about recruitment, retention, and time commitments that experienced research managers consider unrealistic. These three issues — auto-publish risk, absent pipeline, and fragile workforce — constitute the critical path to launch.

The methodology is not yet defensible for a policy-facing organisation in its current state, but it is close. The architecture is right. The design decisions are largely sound. What is missing is operational hardening: a human staging gate before publication, realistic time and attrition estimates, a calibration phase to validate the AI pipeline and reviewer consistency, and a correction/retraction mechanism. With approximately 8-12 weeks of focused work on the items identified in this report, the methodology would be ready for a credible Phase 1 launch.

The expert panels were broadly aligned on what needs to change. Disagreements were few and largely concerned pacing (how many topics to launch with, how fast to scale) rather than direction. This is a good sign — it means the methodology needs refinement, not redesign.

---

## 2. Cross-Cutting Themes

Issues are ranked by how many of the 9 expert groups flagged them.

### Theme 1: Auto-Publish Without Human Staging (flagged by 7/9 groups: S1, S2, S4, S5, S6, S8, S9)

The single most consistently raised concern across the entire validation. Allowing AI-processed Tier 1/2 papers to appear on the portal before any human review exposes NHPL to reputational damage from incorrect summaries, hallucinated contextualisation, and misclassified evidence strength. Every group that touched this issue recommended a mandatory human staging gate.

### Theme 2: Unrealistic Time and Resource Estimates (flagged by 6/9 groups: S1, S3, S4, S6, S8, S9)

Time estimates for reviews are systematically low: Tier 3 reviews likely require 90-150 minutes, not 30-45. Onboarding needs 4-5 hours, not 1 hour. The reviewer roster needs to account for 50% attrition within 6 months. The 16+ databases across 11 topics are not executable at current team scale. Multiple groups noted that honest resource estimation is essential to avoid early burnout and credibility loss.

### Theme 3: No Validation or Calibration Evidence (flagged by 6/9 groups: S1, S4, S5, S6, S7, S8)

CAFE-HE has no pilot data, no inter-rater reliability testing, and no Delphi validation. The evidence strength scale conflates methodological rigour with transferability. The AI pipeline has no calibration phase. Reviewers have no calibration exercise before handling live papers. The methodology documents describe an appraisal system that has never been tested against real papers by real reviewers.

### Theme 4: Nepal Contextualisation Is the Highest-Risk Task (flagged by 5/9 groups: S1, S4, S6, S7, S8)

Contextualisation — "What This Means for Nepal" — is NHPL's core value proposition and simultaneously the task most vulnerable to AI error and reviewer inconsistency. AI hallucination rates for contextualisation are estimated at 30-50% (vs. 5-15% for structured extraction). Yet the current workflow gives contextualisation the least protection: no Nepal specialist review, no worked examples of good vs. poor contextualisation, and no consistency monitoring.

### Theme 5: Scope-to-Capacity Mismatch (flagged by 5/9 groups: S1, S2, S3, S6, S9)

11 topics with 10 seed papers creates a credibility problem. 16+ databases with no search strings and no search management tools is aspirational, not executable. The Tier 3 review form is too long for volunteer reviewers. The methodology describes a comprehensive system but the team cannot deliver it comprehensively at current scale. Multiple groups recommended reducing scope to match capacity rather than expanding capacity to match scope.

### Theme 6: Missing Operational Infrastructure (flagged by 5/9 groups: S1, S3, S4, S6, S9)

No search management tools (Rayyan, Zotero). No versioning or audit trail for reviews. No correction/retraction policy. No "Report an Error" mechanism. No inter-rater reliability monitoring. These are standard elements of evidence synthesis infrastructure that are absent from the current design.

### Theme 7: Evidence Strength Scale Conflation (flagged by 4/9 groups: S5, S6, S7, S8)

The current evidence strength rating (High/Moderate/Low) conflates two distinct dimensions: methodological rigour (internal validity) and Nepal applicability (external validity/transferability). A well-designed RCT from Sweden might be "High" on rigour but "Low" on Nepal applicability. The schema should separate these into two fields.

### Theme 8: Missing Methods in CAFE-HE (flagged by 3/9 groups: S4, S5, S7)

CAFE-HE covers IV, DiD, RDD, matching, structural models, and cost-effectiveness but omits synthetic control, event studies, bunching/shift-share designs, and other methods increasingly used in health economics. The framework is incomplete for its stated purpose.

---

## 3. Critical Issues Requiring Immediate Action

Ranked by urgency (how soon it could cause harm) and consequence (how much damage it would cause).

### 1. Kill Auto-Publish — Implement Mandatory Human Staging Gate
**Urgency**: Before any paper goes live
**Consequence**: Reputational destruction if AI-hallucinated contextualisation reaches policymakers
**Action**: No paper appears on the portal until at least one human has reviewed it. For Tier 1/2, this can be a lightweight 5-minute check. For Tier 3, dual review as designed. Add a `staged` status between `auto-processed` and publication. Update the processing flow diagram, status definitions, and schema.

### 2. Ship the AI Pipeline Before Adding More Documents
**Urgency**: Before Phase 1 launch
**Consequence**: The entire workflow depends on a pipeline that has zero implemented code
**Action**: Build the 4-pass pipeline in `scripts/`. Even a minimal version (PDF extraction, structured summary generation, evidence strength draft) unblocks everything else. Include hallucination mitigation: grounding to source text, confidence scoring, explicit "cannot determine" outputs.

### 3. Mandatory Calibration Phase — First 50 Papers 100% Human Verified
**Urgency**: Before scaling beyond initial seed
**Consequence**: Without calibration, AI error rates and reviewer consistency are unknown
**Action**: Process first 50 papers through the full pipeline with 100% human verification. Measure AI accuracy rates by field (extraction vs. classification vs. contextualisation). Measure inter-rater reliability. Use findings to tune the pipeline and reviewer training. Only after calibration should any papers publish with lighter-touch review.

### 4. Revise All Time Estimates Honestly
**Urgency**: Before recruiting reviewers
**Consequence**: Recruiting with false time estimates causes rapid attrition and resentment
**Action**: Tier 3 review: 90-150 minutes (not 30-45). Tier 1/2 review: 10-20 minutes (not 5-10). Onboarding: 4-5 hours with calibration exercise (not 1 hour). Update the handbook, forms spec, and email templates. Handbook reading time: 60-90 minutes (not 45-60).

### 5. Recruit for 50% Attrition — Build Roster of 60-80 Reviewers
**Urgency**: Before Phase 1 launch
**Consequence**: PhD student volunteers have unpredictable availability; small roster collapses quickly
**Action**: Design the recruitment plan assuming 50% attrition within 6 months. Recruit 60-80 reviewers to maintain 30-40 active at any time. Compensate the first 5-10 reviewers (even modestly) to establish commitment. Add recognition beyond CV lines: co-authorship on methodology papers, conference presentations, small stipends if funding allows.

### 6. Nepal Contextualisation Review by Nepal Specialist Before Publication
**Urgency**: Before any contextualisation goes live
**Consequence**: Incorrect policy claims reaching MoHP or WHO Nepal
**Action**: Every "What This Means for Nepal" section must be reviewed by someone with substantive Nepal health system knowledge before publication. This is a distinct role from methodological review. Identify 3-5 Nepal specialists (could overlap with reviewer roster) whose explicit job is contextualisation sign-off.

### 7. Publish Correction/Retraction Policy with "Report an Error" Button
**Urgency**: Before portal goes live
**Consequence**: No mechanism to fix errors after publication destroys trust when errors are found
**Action**: Write a public correction policy. Add a visible "Report an Error" button on every paper page. Define the workflow: error report received, reviewed within 48 hours, correction published with changelog, notification to users who cited the paper. Add correction history to the schema.

### 8. Collapse to 4-5 Launch Topics with Minimum Paper Threshold
**Urgency**: Before Phase 1 launch
**Consequence**: 11 topics with 1-2 papers each looks empty and undermines credibility
**Action**: Set minimum viable topic threshold at 5-15 papers before a topic is activated on the portal. Launch with 4-5 topics (Health Financing, Primary Care & Service Delivery, Maternal & Newborn Health, Health Governance & Federalism — the strongest candidates). Reclassify Digital Health as a cross-cutting tag, not a topic. Publish a phasing roadmap for remaining topics.

### 9. Write Executable Search Strings for 3 Priority Topics
**Urgency**: Before systematic searching begins
**Consequence**: Without search strings, the search strategy is aspirational, not replicable
**Action**: Write search strings (PubMed/MEDLINE syntax + EconLit syntax) for Health Financing, Primary Care, and Maternal & Newborn Health. Adopt Rayyan for screening management and Zotero for reference management immediately. Decide honestly whether Phase 1 is "purposive expert curation" or "systematic search" and label it accordingly — both are legitimate, but conflating them is not.

### 10. Separate Evidence Strength from Transferability at Schema Level
**Urgency**: Before schema is finalised
**Consequence**: Conflating internal and external validity produces misleading ratings
**Action**: Split the current single `evidenceStrength` field into two fields in `evidence.schema.ts`: `methodologicalRigour` (High/Moderate/Low — how well the study was done) and `nepalApplicability` (High/Moderate/Low — how well findings transfer to Nepal). Update all documents, forms, and the reviewer handbook to reflect this separation. The existing Nepal Relevance Score (1-5) captures geographic proximity but not transferability quality.

---

## 4. Recommended Revisions Per Document

### 4A. methodology-draft.md

| Section | Revision | Priority |
|---------|----------|----------|
| Section 2 (Topics) | Reduce launch topics to 4-5. Add minimum paper threshold (5-15) for topic activation. Reclassify Digital Health as cross-cutting tag. Add phasing roadmap. | High |
| Section 5 (Sources) | Be explicit about Phase 1 being purposive curation, not systematic search. Add Embase, Global Index Medicus, NepJOL, CINAHL to database list. Build database-topic priority matrix. Remove or defer databases that current team cannot cover. | High |
| Section 7 (Tiers) | Add transferability distance dimension. Update IV F>10 threshold to modern standards (effective F-statistic, Stock-Yogo, Lee et al. 2022). Explicitly state that tier classification is based on publication venue, not study quality. | Medium |
| Section 8 (Pipeline) | Replace auto-publish with mandatory staging gate. Add `staged` status. Add hallucination mitigation requirements (grounding, confidence scoring, source-text anchoring). Define QA sampling protocol (10% random audit of verified papers). | High |
| Section 9 (Human Review) | Revise all time estimates. Replace "1-hour training" with "4-5 hour onboarding with calibration exercise." Add retention planning (recruit for 50% attrition). Remove single-point-of-failure adjudication (Sabin alone) — add at least one additional senior reviewer. | High |
| Section 10 (Checklist) | Separate methodological rigour from Nepal applicability in verification checklist. | Medium |
| Section 13 (Inclusion) | Operationalize "comparable context" with a mandatory transferability checklist (3-5 explicit criteria). Include dissertations conditionally (country-specific, not blanket exclusion). Add evaluator independence field. Specify post-2000 criterion more precisely. | Medium |
| Section 14 (Exclusion) | Move dissertations from "excluded edge cases" to "included conditionally." Add explicit guidance on when conference abstracts warrant follow-up. | Low |
| New section | Add correction/retraction policy. Define error reporting workflow, correction timeline, changelog format. | High |
| New section | Add inter-rater reliability monitoring plan: kappa >0.6 target, quarterly measurement, calibration sessions when kappa drops. | Medium |

### 4B. economics-appraisal-framework.md (CAFE-HE)

| Section | Revision | Priority |
|---------|----------|----------|
| How to Use | Define target user precisely (PhD-level reviewer with methods training? MoHP policy analyst? Both?). Add 2-3 worked examples before deployment (good/mediocre/weak papers). | High |
| Domain 2 | Add subsections for synthetic control, event studies, bunching/shift-share designs. Update IV section: replace F>10 with effective F-statistic and modern weak-instrument diagnostics. Expand complier characterisation guidance. | High |
| Rating scale | Implement signalling questions with explicit judgment rules (following RoB 2 model). Currently, "Adequate / Partially adequate / Inadequate" is underspecified — two reviewers could rate the same item differently with equal justification. | High |
| Domain 6 | Add aggregation guidance — how do domain-level profiles inform overall confidence judgments? Currently there is no algorithm, even heuristic. | Medium |
| Validation | Plan and execute: (1) Pilot with 5-10 papers by 3-5 reviewers, (2) Delphi process with health economics methodologists, (3) Inter-rater reliability measurement. State timeline. | High |
| Appendix | Complete the worked example section. Apply CAFE-HE to at least 2 papers: one well-identified study and one with methodological concerns. Show domain-by-domain completion. | High |
| Limitations | Acknowledge missing methods explicitly (not just "economics bias"). Add note on version roadmap. | Low |

### 4C. reviewer-handbook.md

| Section | Revision | Priority |
|---------|----------|----------|
| Section 2 (Time) | Revise: Tier 1/2 = 10-20 min, Tier 3 = 90-150 min. State the handbook takes 60-90 min to read. | High |
| Section 3 (Tiers) | Add minimum viable paper threshold context. Explain why some topics may not be active yet. | Low |
| Section 6 (Contextualisation) | Add 3 worked examples: one good contextualisation, one mediocre, one poor — with annotations explaining why. This is the most valuable addition the handbook can receive. | High |
| Section 7 (Rating) | Separate evidence strength into methodological rigour and Nepal applicability. Provide anchored examples for each level. | High |
| New section | Add mandatory calibration exercise: every new reviewer completes 2 practice reviews (1 Tier 1/2, 1 Tier 3) with model answers before handling live papers. Include feedback loop. | High |
| New section | Create standalone Quick Start one-pager — a printable reference card with the 5 key questions a reviewer must answer, rating scales, and common pitfalls. | Medium |
| Section 8 (Disagreement) | Add fallback adjudicator (not just Sabin). Define escalation path. | Medium |
| New section | Add correction/retraction section — what happens when a verified paper is later found to have errors? Reviewer's role, notification process. | Medium |

### 4D. review-forms-spec.md

| Section | Revision | Priority |
|---------|----------|----------|
| Tier 3 Form | Split into two sequential forms: Form 2A (methodological appraisal) and Form 2B (summary review + ratings + decision). Current 50+ field form risks 50-65% completion rates. | High |
| Both forms | Add review metadata section: time spent on review, reviewer confidence level (1-5), conflict of interest declaration, source channel (how the paper was identified). | High |
| Paper ID fields | Pre-fill paper fields via URL parameters to reduce friction. Generate pre-filled links when assigning papers. | Medium |
| Versioning | Implement versioning via new-submission-per-round with Apps Script audit log. Current design has no version history or audit trail. | High |
| Implementation notes | Evaluate platform alternatives before Phase 2: Covidence, Airtable, or custom solution. Google Forms conditional logic is limited and will break down at scale. | Medium |
| Data management | Add Tab 6 to Google Sheet: correction log (paper ID, error description, correction date, correcting reviewer). | Low |

---

## 5. What Is Already Strong and Should NOT Be Changed

These design decisions received consensus praise across multiple expert groups and represent genuine strengths of the methodology.

### 5.1 Cross-Disciplinary Synthesis Model
The decision to synthesise across economics, clinical, qualitative, and grey literature — breaking disciplinary silos that Cochrane and economics journals maintain — is NHPL's core intellectual contribution. No other organisation does this for Nepal. Preserve this.

### 5.2 "Cast Wide, Tag Precisely" Inclusion Philosophy
Broad inclusion with rigorous labelling (rather than narrow inclusion gates) is the right approach for an evidence portal serving diverse users. Policymakers can filter by rigour level. This should not change.

### 5.3 Topic-First Navigation
Letting users browse by policy domain rather than by paper is correct for the target audience. Policymakers think in terms of problems (health financing, maternal health), not papers.

### 5.4 Three-Tier Geographic Relevance
The Nepal-specific / South Asia / other LMIC tiering with graduated contextualisation requirements is innovative and practical. The Nepal Relevance Score (1-5) is superior to a binary relevant/not-relevant classification.

### 5.5 CAFE-HE's Domain 5 (Policy Translation)
The external validity and policy translation domain is genuinely distinctive. No existing appraisal framework addresses LMIC policy translation with this specificity. This is potentially publishable as a standalone contribution.

### 5.6 "No Single Score" Decision in CAFE-HE
The decision to produce domain-level profiles and narrative assessments rather than a single numeric score is methodologically correct. Numeric scores create false precision and lose the nuance that policymakers need.

### 5.7 "Verification Not Generation" Reviewer Role
Framing reviewers as verifiers of AI output (rather than generators of de novo appraisals) is pragmatically sound. It reduces cognitive load, standardises output, and makes the 2-4 papers/month commitment realistic.

### 5.8 Tiered Workload for Reviewers
Matching review effort to source credibility (light touch for Lancet, deep dive for NHRC Journal) is efficient and appropriate. The three-tier structure is well-conceived.

### 5.9 Auto-Processed / Verified Status Distinction
The honesty of marking AI-processed papers as `auto-processed` rather than implying human review is commendable. This transparency should be preserved even as the staging gate is added.

### 5.10 Contextualisation Guide in Reviewer Handbook
Section 6 of the handbook — with its 8 specific questions about health system match, financing, demographics, implementation feasibility, cultural context, and political economy — is genuinely useful and distinctive. The writing guidance ("write for a Joint Secretary at MoHP") sets the right tone.

---

## 6. Strategic Risks

### Risk 1: Credibility Collapse from AI Errors (Likelihood: High if auto-publish retained)
A single AI-hallucinated policy recommendation reaching a policymaker and being cited would permanently damage NHPL's reputation. The Nepal health policy community is small — word travels fast. **Mitigation**: Staging gate (Critical Issue #1), calibration phase (Critical Issue #3), correction policy (Critical Issue #7).

### Risk 2: Reviewer Workforce Fragility (Likelihood: High)
The volunteer PhD model depends on goodwill and has no financial incentive. PhD students face thesis deadlines, funding pressures, and career anxieties that will always take priority over NHPL reviews. A roster of 30 reviewers could shrink to 10 active reviewers within 6 months. **Mitigation**: Over-recruit (Critical Issue #5), seek funding for modest stipends, build community and recognition aggressively, make the review process as friction-free as possible.

### Risk 3: Single Point of Failure (Sabin) (Likelihood: High)
Sabin is currently the sole person who: assigns papers, adjudicates disagreements, makes final publication decisions, updates the schema, manages the pipeline, and recruits reviewers. If Sabin is unavailable for any extended period, the system stops. **Mitigation**: Designate at least one deputy with full access and authority. Document all workflows so they are person-independent.

### Risk 4: Economics Bias Alienating Public Health Establishment (Likelihood: Medium)
The methodology is heavily oriented toward economics methods (CAFE-HE, Top 5 journals, identification strategy language). Public health professionals, who are the majority of Nepal's health policy workforce, may perceive NHPL as an economics project rather than a health evidence platform. **Mitigation**: Ensure topic coverage and reviewer recruitment include clinical and public health perspectives. Frame CAFE-HE as a complement to existing tools, not a replacement.

### Risk 5: Scope Overstretch Leading to Thin Coverage (Likelihood: High)
11 topics with 10 papers, 16+ databases with no search strings, and a team of 3-4 people is a recipe for thin, unconvincing coverage across all topics rather than credible depth in any. **Mitigation**: Ruthless prioritisation (Critical Issue #8). Launch with 4-5 topics done well rather than 11 topics done poorly.

### Risk 6: Demand Assumption Failure (Likelihood: Medium)
The methodology assumes that Nepali policymakers want and will use this kind of evidence synthesis. This has not been validated. If the actual demand is for something different (shorter briefs, Nepali-language summaries, WhatsApp-friendly formats), the entire methodology may need reorientation. **Mitigation**: Validate demand with 5-10 actual policymakers before investing heavily in methodology refinement. This should happen in parallel with technical work.

### Risk 7: No Sustainability Model (Likelihood: High over 2+ years)
Volunteer labour, free tools (Google Forms, GitHub Pages), and no funding is viable for a launch phase but not for sustained operation. If the evidence portal gains traction, the demands on the team will increase but the resources will not. **Mitigation**: Build the funding case using early traction data. Apply to Wellcome, BMGF, or FCDO evidence synthesis funding streams. The methodology documentation itself strengthens funding applications.

---

## 7. Final Verdict

This methodology is architecturally sound, intellectually honest, and addresses a genuine gap in Nepal's health evidence ecosystem. It is **not yet defensible for a policy-facing organisation** in its current documented state, primarily because of the auto-publish risk, absent AI pipeline, unvalidated appraisal framework, and unrealistic resource assumptions. However, these are fixable problems — they require operational hardening, not fundamental redesign. The core design decisions (cross-disciplinary synthesis, tiered appraisal, "cast wide, tag precisely," topic-first navigation, CAFE-HE's policy translation domain) are correct and should be preserved. If the 10 critical actions identified in this report are addressed — with particular urgency on the staging gate, calibration phase, and honest resource planning — the methodology would be ready for a credible, defensible Phase 1 launch with 4-5 topics and 50+ papers within 8-12 weeks. The recommendation is: proceed with confidence in the architecture, but do not publish any evidence to policymakers until the staging gate, calibration phase, and correction policy are in place.

---

*Report compiled 2026-03-17. Based on findings from 27 expert critique agents and 9 summarizer agents across pipeline design, topic architecture, source strategy, tier classification, inclusion criteria, human review protocol, CAFE-HE framework, reviewer handbook, and review form design.*
