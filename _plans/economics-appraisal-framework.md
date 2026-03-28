# Critical Appraisal Framework for Health Economics Evidence in LMIC Policy Translation (CAFE-HE)

**Version**: 0.1 (Draft)
**Authors**: Nepal Health Policy Lab
**Purpose**: A structured tool for appraising health economics studies for policy translation in low- and middle-income country contexts. Designed to complement existing clinical appraisal tools (Cochrane RoB 2, CASP, Newcastle-Ottawa) by addressing the methodological features specific to economics research — identification strategies, welfare analysis, and external validity for policy.

---

## Background

Established critical appraisal tools serve clinical and epidemiological research well. However, health economics research — increasingly central to health policy decisions in LMICs — uses methods (instrumental variables, difference-in-differences, regression discontinuity, structural modelling) for which no standardised appraisal framework exists. Policy translators in LMIC settings must assess both the internal validity of causal estimates and their external validity for a specific policy context. CAFE-HE addresses this gap.

---

## How to Use This Framework

1. Complete **Domain 1** (Research Question & Design) for all papers
2. Complete the relevant **Domain 2** subsection based on the identification strategy used
3. Complete **Domains 3-5** for all papers
4. Complete **Domain 6** (Overall Assessment) to synthesise your judgments

Rate each item: **Adequate** / **Partially adequate** / **Inadequate** / **Not applicable** / **Cannot determine**

Provide brief justification for each rating.

---

## Target User & Validation Status

**Target user**: PhD-level reviewer with at least MSc-level training in econometrics or health economics. This framework is NOT designed for policy analysts without quantitative methods training — they should work with the Nepal contextualisation sections while a methods-trained reviewer handles the identification strategy assessment.

**Current status**: Version 0.1 (internal working prototype). Being validated through operational use — the first 10-15 economics papers reviewed using CAFE-HE will serve as the pilot validation dataset. Multiple reviewers will independently appraise the same papers to generate inter-rater reliability data.

**Validation pathway**:
1. Pilot: Apply to 10-15 papers with 3-5 independent reviewers (in progress)
2. Share with NHPL members and advisory network for feedback
3. Modified Delphi process with 8-12 health economists
4. Formal inter-rater reliability study (target kappa > 0.6)
5. Publication in methods journal (BMC Medical Research Methodology, Research Synthesis Methods, or Value in Health)

**Future development**: In later versions, CAFE-HE will be split into Part A (Internal Validity Assessment — for methods reviewers) and Part B (Policy Translation Assessment — for country/Nepal specialists). Currently maintained as a single integrated tool.

---

## Domain 1: Research Question & Design

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 1.1 | Is the research question clearly stated and policy-relevant? | | |
| 1.2 | Is there an explicit or implicit theoretical framework motivating the analysis? | | |
| 1.3 | Is the study design appropriate for the research question? | | |
| 1.4 | Are the treatment/intervention and comparison conditions clearly defined? | | |
| 1.5 | Is the outcome of interest well-defined and policy-meaningful? | | |
| 1.6 | Is the parameter of interest clearly stated? (ATE, ATT, LATE, marginal effect, etc.) | | |

**Guidance**: A study estimating the effect of health insurance on utilisation should specify whether it estimates the effect on everyone (ATE), on those who actually enrolled (ATT), or on those induced to enroll by a specific policy change (LATE). These are different numbers with different policy implications.

---

## Domain 2: Identification Strategy

Complete ONLY the subsection relevant to the paper's methodology.

### 2A. Instrumental Variables (IV / 2SLS / Wald Estimator)

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2A.1 | Is the instrument clearly described? | | |
| 2A.2 | **Relevance**: Is the first-stage relationship strong? (F-statistic > 10 reported? Partial F if multiple endogenous variables?) | | |
| 2A.3 | **Exclusion restriction**: Is the argument that the instrument affects the outcome ONLY through the endogenous variable plausible? What are the most credible threats? | | |
| 2A.4 | **Monotonicity**: Is it reasonable that the instrument affects treatment in only one direction for all individuals? Are there likely defiers? | | |
| 2A.5 | **Complier characterisation**: Who are the compliers (those whose treatment status is changed by the instrument)? Are they described or characterisable? | | |
| 2A.6 | **Policy relevance of compliers**: Are the compliers similar to the population a policymaker in [target country] would want to affect? Or are they a select subgroup? | | |
| 2A.7 | If multiple instruments: are over-identification tests reported and passed? | | |
| 2A.8 | Are reduced-form results reported? (Direct effect of instrument on outcome — a useful robustness check) | | |
| 2A.9 | Is there discussion of potential violations and their likely direction of bias? | | |

**Guidance for policy translation**: The LATE is the effect on compliers — people whose behaviour changes because of the instrument. Ask: "If Nepal implemented a similar policy, would the affected population resemble these compliers?" For example, an IV using distance to a health facility identifies compliers as people whose utilisation is affected by distance — typically rural, lower-income populations. If Nepal's policy targets the same group, the LATE is relevant. If the policy targets urban populations, it may not be.

### 2B. Difference-in-Differences (DiD)

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2B.1 | Are treatment and control groups clearly defined? | | |
| 2B.2 | **Parallel trends**: Is the parallel trends assumption tested? Visual evidence provided? Statistical test? | | |
| 2B.3 | **Pre-treatment dynamics**: Are pre-treatment outcomes shown for multiple periods? Do they look parallel? | | |
| 2B.4 | **Anticipation effects**: Could units have adjusted behaviour before the treatment took effect? Is this addressed? | | |
| 2B.5 | **Composition stability**: Are the same units observed pre and post? Is there selection in or out of the sample? | | |
| 2B.6 | If **staggered treatment timing**: Is an appropriate estimator used? (Callaway & Sant'Anna, Sun & Abraham, de Chaisemartin & D'Haultfoeuille, or similar — standard TWFE can be biased with heterogeneous treatment effects and staggered adoption) | | |
| 2B.7 | **Treatment effect heterogeneity**: Is heterogeneity across groups or time explored? | | |
| 2B.8 | **Standard errors**: Clustered at the appropriate level? (Typically at the level of treatment assignment) | | |
| 2B.9 | **Placebo tests**: Falsification tests using pre-treatment periods or unaffected outcomes? | | |

**Guidance for policy translation**: DiD estimates the effect of a policy change by comparing changes in outcomes between treated and untreated groups. The key assumption — that both groups would have followed the same trend absent treatment — is untestable but can be assessed with pre-treatment data. For Nepal: consider whether the treatment/control comparison is informative. If the study compares districts that adopted a policy early vs. late, ask whether Nepal's districts face similar selection pressures (e.g., politically connected districts adopting first).

### 2C. Regression Discontinuity Design (RDD)

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2C.1 | Is the running variable clearly defined and precisely measured? | | |
| 2C.2 | Is the cutoff rule institutional/exogenous, not discretionary? | | |
| 2C.3 | **Manipulation testing**: McCrary density test or equivalent reported? Evidence of bunching at the cutoff? | | |
| 2C.4 | **Covariate continuity**: Are predetermined covariates continuous at the cutoff? | | |
| 2C.5 | **Bandwidth selection**: Method described? (Imbens-Kalyanaraman, Calonico-Cattaneo-Titiunik?) Results robust to alternative bandwidths? | | |
| 2C.6 | **Polynomial sensitivity**: Results robust to different polynomial orders? | | |
| 2C.7 | **Donut hole**: Results robust to excluding observations very close to the cutoff? | | |
| 2C.8 | If **fuzzy RDD**: Is the first-stage relationship strong? Is the LATE interpretation acknowledged? | | |
| 2C.9 | **Local nature acknowledged**: RDD estimates are local to the cutoff. Is the policy relevance of this local estimate discussed? | | |

**Guidance for policy translation**: RDD identifies a causal effect AT the cutoff — for people just above vs. just below a threshold. This is a very local estimate. Ask: "Is the policy question about people near this threshold, or about the whole population?" For example, an RDD using an income cutoff for insurance eligibility tells you about people near the cutoff — not about the very poor or the affluent. If Nepal's policy question is about universal coverage, the RDD estimate may not generalise.

### 2D. Matching / Propensity Score Methods

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2D.1 | Is the selection-on-observables assumption discussed and justified? | | |
| 2D.2 | Are the matching variables / propensity score covariates appropriate? Are key confounders included? | | |
| 2D.3 | **Common support**: Is overlap between treated and control adequate? Are observations off-support excluded? | | |
| 2D.4 | **Balance**: Is covariate balance after matching reported? Standardised differences? | | |
| 2D.5 | **Multiple methods**: Are results robust to alternative matching methods (nearest-neighbour, kernel, caliper, inverse probability weighting)? | | |
| 2D.6 | **Hidden bias sensitivity**: Rosenbaum bounds or similar sensitivity analysis for unobserved confounders? | | |
| 2D.7 | Is the unconfoundedness assumption credible given the context? What unobserved variables could bias results? | | |

**Guidance for policy translation**: Matching assumes that after conditioning on observed variables, treatment assignment is as good as random. This is a strong assumption. Ask: "What unobserved factors might make treated and control groups different even after matching?" In health policy contexts, motivation, health literacy, and access to information are often unobserved and correlated with both treatment uptake and outcomes.

### 2E. Structural / Model-Based Estimation

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2E.1 | Are model assumptions clearly stated and justified? | | |
| 2E.2 | Which parameters are estimated from data vs. calibrated from external sources? | | |
| 2E.3 | **Model fit**: Does the model match key data moments? Goodness-of-fit statistics? | | |
| 2E.4 | **Identification**: Are the sources of identification for key parameters clear? | | |
| 2E.5 | **Counterfactual simulations**: Are simulated policy counterfactuals presented? | | |
| 2E.6 | **Sensitivity**: Are results robust to alternative parameter values and model assumptions? | | |
| 2E.7 | **Welfare analysis**: If welfare conclusions are drawn — whose welfare? Using what metric? Are distributional implications discussed? | | |

**Guidance for policy translation**: Structural models can simulate policies that haven't been implemented — a major advantage for policy planning. But they depend heavily on assumptions. Ask: "Would these assumptions hold in Nepal?" For example, a structural model of health insurance demand calibrated to US data assumes particular risk preferences, income distributions, and health system features that may not apply in Nepal.

### 2F. Cost-Effectiveness / Economic Evaluation

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 2F.1 | Is the perspective clearly stated? (Societal, health system, patient?) | | |
| 2F.2 | Is the comparator appropriate? (Standard of care in the study setting? What is standard of care in Nepal?) | | |
| 2F.3 | **Costs**: Are all relevant costs included? Are they transferable to Nepal's price levels? | | |
| 2F.4 | **Outcomes**: Are outcomes measured appropriately? (QALYs, DALYs, natural units?) | | |
| 2F.5 | **Time horizon**: Is it long enough to capture all relevant costs and benefits? | | |
| 2F.6 | **Discounting**: Applied and at appropriate rate? | | |
| 2F.7 | **Sensitivity analysis**: One-way, multi-way, and/or probabilistic sensitivity analysis? | | |
| 2F.8 | **Threshold**: Is the ICER compared to an appropriate willingness-to-pay threshold? (Nepal's threshold may differ substantially from the study country's) | | |
| 2F.9 | **Budget impact**: Is affordability within Nepal's health budget considered, not just cost-effectiveness? | | |

**Guidance for policy translation**: A cost-effective intervention is not necessarily affordable. An intervention costing $50 per DALY averted may be cost-effective by WHO thresholds but unaffordable at Nepal's per capita health spending (~$50/year total). Always consider budget impact alongside cost-effectiveness. Also: cost-effectiveness ratios estimated in one country rarely transfer directly — input costs, disease burden, health system efficiency, and opportunity costs all differ.

---

## Domain 3: Data Quality

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 3.1 | Is the data source clearly described? (Survey, administrative, clinical, linked?) | | |
| 3.2 | Is the sample representative of the target population? If not, how does selection affect results? | | |
| 3.3 | Is the sample size adequate for the study design? (Power analysis reported or calculable?) | | |
| 3.4 | Are key variables measured using validated instruments? Are measurement concerns discussed? | | |
| 3.5 | Is missing data reported and handled appropriately? | | |
| 3.6 | Is the time period covered appropriate for the research question? | | |
| 3.7 | If using secondary data: are the limitations of using data collected for another purpose acknowledged? | | |

---

## Domain 4: Results & Robustness

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 4.1 | Are main results clearly presented with effect sizes (not just significance)? | | |
| 4.2 | Are confidence intervals or standard errors reported? | | |
| 4.3 | Are robustness checks conducted? (Alternative specifications, subsamples, placebo tests, different bandwidths/windows) | | |
| 4.4 | Are results robust or fragile? (Do they change substantially with alternative specifications?) | | |
| 4.5 | Is multiple testing addressed if multiple outcomes are examined? | | |
| 4.6 | Are heterogeneous treatment effects explored? (By gender, income, geography, etc.) | | |
| 4.7 | Are effect sizes policy-meaningful, not just statistically significant? (A statistically significant 0.5% increase in utilisation may not justify a national programme) | | |

---

## Domain 5: External Validity & Policy Translation

This domain is specific to LMIC policy translation and is CAFE-HE's distinctive contribution.

| # | Item | Rating | Notes |
|---|------|--------|-------|
| 5.1 | Is the study setting described in sufficient detail to assess transferability? | | |
| 5.2 | **Population match**: How similar is the study population to [target country]'s population? (Demographics, income, health status, health-seeking behaviour) | | |
| 5.3 | **Health system match**: How similar is the study's health system context? (Public/private mix, financing mechanism, provider payment, governance structure) | | |
| 5.4 | **Implementation context**: Does [target country] have the institutional capacity, workforce, and infrastructure to implement the studied intervention? | | |
| 5.5 | **Scale considerations**: Was this a small pilot or a national policy? Would scaling up change the effect? (General equilibrium effects, supply-side constraints, political economy of expansion) | | |
| 5.6 | **Cost transferability**: Are the intervention costs transferable to [target country]'s price levels and health budget? | | |
| 5.7 | **Cultural and political context**: Are there cultural, social, or political factors in [target country] that would affect how the intervention works? (Gender norms, caste dynamics, trust in government, community structures) | | |
| 5.8 | **Time context**: When was the study conducted? Have conditions changed since then — in the study setting or in [target country]? | | |
| 5.9 | **Prior experience**: Has anything similar been tried in [target country]? What happened? | | |
| 5.10 | **Policy parameter relevance**: Is the estimated parameter (ATE, LATE, ITT) the right one for the policy question in [target country]? | | |

**Guidance**: External validity assessment is inherently judgmental. There is no formula. The reviewer must use their knowledge of the target country to assess whether the study's findings are likely to hold, partially hold, or not hold in the new context. Document your reasoning — future readers (including policymakers) need to understand WHY you rated transferability as you did.

---

## Domain 6: Overall Assessment

| Item | Response |
|------|----------|
| **Key strengths of the study** | |
| **Key limitations** | |
| **Confidence in the causal estimate** (High / Moderate / Low) | |
| **Justification for confidence rating** | |
| **Confidence in policy relevance for [target country]** (High / Moderate / Low) | |
| **Justification for relevance rating** | |
| **Key caveats for policy translation** | |
| **What additional evidence would strengthen the case for/against this intervention in [target country]?** | |

---

## Scoring Summary

CAFE-HE does not produce a single numeric score. Evidence quality and policy relevance are multi-dimensional and a single number obscures more than it reveals. Instead, the framework produces:

1. **A domain-level profile**: Adequate/Partially adequate/Inadequate for each domain
2. **Two summary judgments**: Confidence in causal estimate (High/Moderate/Low) and confidence in policy relevance (High/Moderate/Low)
3. **A narrative assessment**: Key strengths, limitations, and caveats for policy translation

This approach avoids the false precision of numeric scores while providing structured, comparable assessments across papers.

---

## Relationship to Existing Tools

| Existing Tool | What It Covers | What CAFE-HE Adds |
|---------------|---------------|-------------------|
| Cochrane RoB 2 | Risk of bias in RCTs | Economics-specific identification strategies; external validity for LMIC policy |
| ROBINS-I | Risk of bias in non-randomised studies | Specific guidance for IV, DiD, RDD, structural models |
| Newcastle-Ottawa | Quality of observational studies | Economics causal inference methods; policy translation assessment |
| CHEERS 2022 | Reporting quality of economic evaluations | Appraisal (not just reporting) of cost-effectiveness; LMIC transferability |
| GRADE | Overall quality of a body of evidence | Single-study appraisal; economics methods; context-specific external validity |
| CASP | Qualitative research appraisal | Not applicable — CAFE-HE covers quantitative economics only |
| AACODS | Grey literature appraisal | Not applicable — CAFE-HE covers peer-reviewed/working paper economics research |

CAFE-HE is designed to be used **alongside** these tools, not to replace them. For a mixed-methods study, use CAFE-HE for the economics component and CASP for the qualitative component.

---

## Limitations of This Framework

1. **Subjectivity**: Many items require expert judgment. Two reviewers may rate the same item differently. This is inherent to appraisal — the framework structures the judgment but cannot eliminate it. Dual review and disagreement resolution protocols mitigate this.

2. **Economics bias**: The framework is designed by and for economists. It privileges causal inference and may undervalue descriptive or exploratory economics research that generates hypotheses rather than testing them.

3. **External validity assessment is necessarily speculative**: No framework can definitively answer "will this work in country X?" The assessment depends on the reviewer's knowledge of the target country, which varies.

4. **Not validated**: This is version 0.1. Formal validation (inter-rater reliability testing, Delphi process with expert panel) is planned.

5. **Missing methods**: Version 0.1 covers IV, DiD, RDD, matching, structural models, and cost-effectiveness. Methods not yet covered include: synthetic control, event studies, bunching estimators, shift-share/Bartik instruments, panel fixed effects, and RCTs with imperfect compliance. These will be added in future versions as the evidence base encountered in NHPL's work requires them.

---

## Citation

Nepal Health Policy Lab. (2026). CAFE-HE: Critical Appraisal Framework for Health Economics Evidence in LMIC Policy Translation. Version 0.1 (Internal Working Prototype — Not Yet Validated). Kathmandu/Glasgow: NHPL. Available at: nepalhealthpolicylab.org/methodology

---

## Appendix: Worked Example

*[To be added: A worked example applying CAFE-HE to a well-known health economics paper, demonstrating how each domain is completed and how the overall assessment is formed. Candidate papers: Thornton (2008) on HIV testing incentives; Finkelstein et al. (2012) Oregon Health Insurance Experiment; Dupas (2011) on health product pricing.]*
