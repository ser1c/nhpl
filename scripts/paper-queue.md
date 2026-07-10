# NHPL Paper Processing Queue

## Pending
| DOI/URL | Source Channel | Added By | Date | Notes |
|---------|---------------|----------|------|-------|

## Processing
| DOI/URL | Source Channel | Added By | Date | Status |
|---------|---------------|----------|------|--------|

## Processed 2026-07-10 — promoted to `status: verified` **provisionally** (team review on live site)

30 papers processed through the v2.0 5-pass pipeline (per-paper Sonnet subagents), grounded in the expanded `src/data/nepal-context.md`. 3 papers per topic × 10 topics (breadth-first).

**Status decision (2026-07-10):** per a team call, all 30 were promoted from `draft` → `status: 'verified'` so they render on the *live* site and the team reviews each paper **from the website**. They are **NOT human-verified**: each keeps `verifiedBy: null`, `verifiedDate: null`, `reviewers: []`, and carries a `team-review-pending` tag (backend-only — not rendered publicly). The honest backend signal is therefore: `status === 'verified' && verifiedBy === null` ⇒ published-for-review, not yet reviewed. As a reviewer signs off on a paper, set its `verifiedBy` / `verifiedDate` / `reviewers` and remove the `team-review-pending` tag. Only the MICS paper below (`verifiedBy: "sabin-subedi"`) is genuinely human-verified.

Ratings shown as methodologicalRigour / nepalApplicability / nepalRelevanceScore.

| Code | Slug | First author, year | Tier | Design | Rig/Appl/Rel | DOI |
|------|------|--------------------|------|--------|--------------|-----|
| FIN-1 | `catastrophic-health-expenditure-nepal-provincial-estimates` | Thapa 2020 | tier-3 | cross-sectional | moderate/high/5 | 10.33314/jnhrc.v18i4.2392 |
| FIN-2 | `social-health-insurance-dropout-pokhara-nepal` | Sharma 2022 | tier-2 | cross-sectional | moderate/high/5 | 10.34172/ijhpm.2021.171 |
| FIN-3 | `rsby-india-impact-evaluation-out-of-pocket-spending` | Karan 2017 | tier-1 | quasi-experimental | high/moderate/4 | 10.1016/j.socscimed.2017.03.053 |
| WF-2 | `obgyn-district-hospital-job-preferences-nepal-dce` | Gautam 2019 | tier-2 | cross-sectional (DCE) | moderate/high/5 | 10.1186/s12960-019-0427-8 |
| WF-3 | `human-resources-health-outcomes-cross-country-study` | Anand 2004 | tier-1 | cross-sectional | moderate/moderate/3 | 10.1016/S0140-6736(04)17313-3 |
| WF-4 | `fchv-motivation-primary-healthcare-rural-nepal` | Panday 2024 | tier-2 | qualitative | moderate/high/5 | 10.1371/journal.pgph.0003428 |
| PC-2 | `telemedicine-diabetes-care-low-middle-income-countries` | Correia 2021 | tier-2 | meta-analysis | moderate/moderate/3 | 10.2471/BLT.19.250068 |
| PC-3 | `dhis2-health-professionals-experience-gandaki-nepal` | Bhatt 2024 | tier-2 | qualitative | moderate/high/5 | 10.1371/journal.pgph.0002890 |
| PC-4 | `ncd-service-readiness-health-facilities-nepal-nhfs-2021` | Adhikari 2023 | tier-2 | cross-sectional | moderate/high/5 | 10.1136/bmjopen-2023-072673 |
| MN-1 | `mira-makwanpur-womens-groups-birth-outcomes-nepal` | Manandhar 2004 | tier-1 | rct | high/high/5 | 10.1016/S0140-6736(04)17021-9 |
| MN-3 | `financial-incentives-maternal-health-nepal-sdip` | Powell-Jackson 2012 | tier-1 | quasi-experimental | high/high/5 | 10.1016/j.jhealeco.2011.10.010 |
| MN-4 | `scaled-up-neonatal-resuscitation-qi-package-nepal` | KC 2019 | tier-1 | rct (stepped-wedge) | high/high/5 | 10.1371/journal.pmed.1002900 |
| NCD-1 | `ncd-risk-factors-steps-survey-2019-nepal` | Bista 2021 | tier-2 | cross-sectional | moderate/high/5 | 10.1371/journal.pone.0253605 |
| NCD-2 | `cobin-5-year-followup-blood-pressure-nepal` | Thapa 2023 | tier-1 | rct | high/high/5 | 10.1016/S2214-109X(23)00214-0 |
| NCD-4 | `cost-effectiveness-cvd-diabetes-south-asia-review` | Singh 2018 | tier-2 | systematic-review | high/moderate/4 | 10.1136/bmjopen-2017-017809 |
| MH-1 | `group-problem-management-plus-nepal-crct` | Jordans 2021 | tier-1 | rct | high/high/5 | 10.1371/journal.pmed.1003621 |
| MH-2 | `prime-district-mental-healthcare-plan-chitwan-nepal` | Jordans 2019 | tier-1 | programme-evaluation | moderate/high/5 | 10.1371/journal.pmed.1002748 |
| MH-4 | `suicide-deliberate-self-harm-women-nepal-scoping-review` | Kasaju 2021 | tier-2 | systematic-review (scoping) | moderate/high/5 | 10.1186/s12905-021-01547-3 |
| NUT-1 | `micronutrient-supplementation-low-birth-weight-nepal` | Christian 2003 | tier-1 | rct | high/high/5 | 10.1136/bmj.326.7389.571 |
| NUT-3 | `rapid-reduction-undernutrition-nepal-2001-2011` | Headey 2015 | tier-2 | cross-sectional | moderate/high/5 | 10.1371/journal.pone.0145738 |
| NUT-4 | `suaahara-integrated-nutrition-programme-nepal` | Frongillo 2026 | tier-2 | programme-evaluation | moderate/high/5 | 10.1111/mcn.13630 |
| ID-1 | `typhoid-conjugate-vaccine-efficacy-nepal-phase3-trial` | Shakya 2021 | tier-1 | rct | high/high/5 | 10.1016/S2214-109X(21)00346-6 |
| ID-2 | `active-case-finding-tuberculosis-catastrophic-costs-nepal` | Gurung 2019 | tier-2 | cross-sectional | moderate/high/5 | 10.1186/s40249-019-0603-z |
| ID-3 | `dengue-spatial-clustering-nepal-2022-2023-outbreaks` | Bhandari 2025 | tier-3 | descriptive | moderate/high/5 | 10.4269/ajtmh.24-0747 |
| ENV-1 | `biomass-lpg-stoves-birth-outcomes-rural-nepal-rcts` | Katz 2020 | tier-2 | rct | moderate/high/5 | 10.9745/GHSP-D-20-00011 |
| ENV-2 | `wash-nutrition-diarrhoea-child-growth-bangladesh-rct` | Luby 2018 | tier-1 | rct | high/moderate/4 | 10.1016/S2214-109X(17)30490-4 |
| ENV-4 | `impact-2015-earthquakes-local-hospital-nepal-dhulikhel` | Giri 2018 | tier-2 | descriptive | moderate/high/5 | 10.1371/journal.pone.0192076 |
| GOV-1 | `essential-medicines-quality-public-health-facilities-nepal` | Dhakal 2023 | tier-2 | descriptive | moderate/high/5 | 10.1371/journal.pgph.0001841 |
| GOV-2 | `essential-medicine-procurement-shortages-bagmati-nepal` | Adhikari 2024 | tier-2 | qualitative | moderate/high/5 | 10.1371/journal.pgph.0003128 |
| GOV-3 | `nepal-federalisation-health-system-building-blocks` | Wasti 2023 | tier-2 | qualitative | moderate/high/5 | 10.1186/s12961-023-01033-2 |

## Human-verified (`verifiedBy` set — genuinely reviewed)
| Slug | DOI | Verified by | Date |
|------|-----|-------------|------|
| health-insurance-enrolment-inequality-nepal-mics-2019 | 10.1136/bmjopen-2021-050922 | sabin-subedi | 2026-04-07 |

> The 30 papers above are also `status: verified` (so they render) but are **provisional** — `verifiedBy: null`, tagged `team-review-pending` — pending team review on the live site. This table lists only entries with a real human `verifiedBy`.

> Note: the original 10 "seed" papers from the 2026-03 seeding were superseded — only the MICS insurance paper survived as the first verified entry (commit 81b5231). The 30 above replace them.

## Rejected
| DOI/URL | Reason | Date |
|---------|--------|------|

## Reviewer notes / flags to resolve during verification
- **PLoS Medicine tier**: not explicitly enumerated in the process-paper Tier-1 list; MH-1, MH-2, MN-4 were classified tier-1 by judgment. Add PLoS Medicine to the spec's Tier-1 list to make this deterministic.
- **NUT-3 Headey**: reclassified from the slate's provisional "quasi-experimental" to `cross-sectional` — the authors explicitly disclaim causal identification (Blinder–Oaxaca decomposition of repeated cross-sections). Confirm.
- **Year fields**: FIN-1 Thapa = 2020 (journal issue), FIN-2 Sharma = 2022 (IJHPM volume), NUT-4 Frongillo = 2026 (article self-citation) — all differ from the `author-year` filename; entries use the journal's own year.
- **Tier judgment calls**: ID-3 (AJTMH) → tier-3; ID-2 (Infectious Diseases of Poverty) → tier-2. Confirm.
- **Subedi NHIP findings**: the two working-paper findings are in `nepal-context.md`; author (Sabin Subedi) cleared them for the public repo (a working paper is forthcoming, ~weeks). They are **not** quoted in any public paper 1-pager (kept out of rendered summaries until the working paper is out). Revisit adding them as verified evidence entries once published.
