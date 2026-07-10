# Nepal Health System Knowledge Base

> **Last updated: 2026-07-10.** Maintained by the NHPL team. Update as Nepal's health system evolves.
>
> **Purpose**: Authoritative reference for Nepal health-system context used by the NHPL evidence pipeline. When generating "What This Means for Nepal" contextualisation, the pipeline MUST draw facts from THIS document, not from LLM parametric memory (see Section 8 of the NHPL Evidence Methodology).
>
> **How to use (for agents)**: Start with **Section 0 (Fast Facts)** for the most-cited numbers. Then read the topic section matching the paper's policy domain. Every fact carries a `(Source, year)`. Always cite the source + year in contextualisation, and prefer Nepal-specific programmes/institutions by name.
>
> **Sourcing conventions**:
> - `(Source, year)` follows each fact.
> - **⚠ conflict** = credible sources disagree; both values are shown — do not present as settled.
> - **[verify]** = plausible but not confirmed against a primary source; use with caution or omit.
> - Figures were verified in a July 2026 research pass; a **changelog of corrections** is in the Appendix.
> - Many "current" figures are fast-moving (insurance enrolment, government, budgets) — treat as of the date shown.

---

## 0. FAST FACTS (quick reference)

| Domain | Key figure | Source (year) |
|---|---|---|
| Population | **29,164,578** | Census 2021 |
| Annual growth | 0.92% | Census 2021 |
| Urban (administrative / functional) | 66% / **~27%** genuinely urban | Census 2021; DEGURBA analysis 2023 |
| Life expectancy | ~70–71 years | WHO/UN 2021–2022 |
| **THE as % of GDP** | **5.8%** (FY2019/20) | NHA 2019/20 |
| **Out-of-pocket (OOP)** | **54.2%** of current health exp. (FY2019/20) | NHA 2019/20 |
| Government share of health exp. | 31.9% (FY2019/20) | NHA 2019/20 |
| Per-capita health exp. (total / government) | **USD ~64** total; ~USD 14–20 government | NHA 2019/20 |
| Govt health budget | Rs 95.8bn = **~4.9%** of national budget (FY2025/26) | Kathmandu Post 2026 |
| NHIP enrolment | **~16% active** (FY2022/23); >30% ever-enrolled (2024) | HIB 2022/23; Khabarhub 2024 |
| Catastrophic health spending | ~10–11% of households (⚠ source/year uncertain) | World Bank via secondary |
| Impoverishment from health costs | 1.7% of population | NHA 2019/20 |
| **MMR** | **151** /100,000 live births | NDHS 2022 |
| **Neonatal / infant / under-5 mortality** | **21 / 28 / 33** per 1,000 | NDHS 2022 |
| Total fertility rate | 2.1 | NDHS 2022 |
| Institutional delivery | **79.4%** | NDHS 2022 |
| Stunting / wasting / underweight (under-5) | **25% / 8% / 19%** | NDHS 2022 |
| NCDs as share of deaths | **66%** (WHO) / 71% (GBD 2019) ⚠ | WHO NCD 2022; NBoD 2019 |
| Hypertension / raised glucose / tobacco (adults) | 24.5% / 5.8% / 28.9% | STEPS 2019 |
| TB incidence | 229 /100,000 | WHO GTB 2025 (2023 data) |
| Mental-health treatment gap | **>90%**; psychiatrists ~0.17–0.22/100,000 | community surveys; WHO 2021 |
| Physician density (registered / practising) | ~0.9–1.9 /1,000 registered, but ~⅓ practise in Nepal | WHO 2024; Kathmandu Post 2025 |
| FCHVs | **~50,400** | DoHS AHR 2080/81 |
| Air pollution | Kathmandu PM2.5 ~42–45 µg/m³ (~9× WHO); **#1 mortality risk factor** | IQAir 2024; World Bank 2025 |
| Basic water / basic sanitation | 98% / 73%; ODF nation since 2019 | NDHS 2022 |
| Provinces / local governments | 7 / **753** | Constitution 2015 |

---

## 1. Political & Governance Context

### Current government (as of July 2026)
- **Prime Minister: Balendra "Balen" Shah** (Rastriya Swatantra Party, RSP), sworn in **27 March 2026** — Nepal's youngest-ever PM (age 36) (Al Jazeera, Time, Wikipedia, 2026).
- RSP won a **single-party majority — 182 of 275 House seats** (125 FPTP + 57 PR; ~47.8% PR vote) in the **snap general election of 5 March 2026**, the first single-party majority since 1999 (Wikipedia "2026 Nepalese general election"; Carnegie, 2026).
- **Minister of Health: Nisha Mehta** (RSP, a nurse, AIIMS-Delhi trained), sworn in 27 March 2026; one of five women in a 15-member cabinet (Khabarhub; Himalayan Times; Wikipedia, 2026).
- **Ministry renamed** on 13 May 2026 → **"Ministry of Health and Food Hygiene"** (also rendered "Food Safety" in some English usage — ⚠ English name not fully settled), absorbing food-safety functions; still commonly referenced as **MoHP** (Wikipedia; Kathmandu Post, 2026). *For contextualisation, "MoHP"/"Ministry of Health" remains acceptable.*

### Political instability & policy discontinuity
- **~13 health ministers in ~8 years (2018–2026)** — average tenure ~7 months (Wikipedia ministerial succession table, 2026). This chronic turnover is a documented driver of stalled health reforms and repeated donor-project delays (Kathmandu Post, "Arbitrary transfers stir unease in the health system," 15 May 2026).
- Nepal's bureaucracy is described in governance analysis as among the most politicised in South Asia, with loyalty-based transfers weakening policy continuity (Spotlight Nepal, 2026). **Useful framing for any paper on implementation, scale-up, or institutional capacity.**

### Federal structure & health devolution
- **Constitution of Nepal promulgated 20 September 2015**; replaced the 2007 Interim Constitution. **Article 35 (Right to health)**: every citizen has the right to **free basic health services** and no one may be denied **emergency services**; equal access; right to information about one's treatment; right to clean water and sanitation (Constitution 2015, Art. 35).
- **Three tiers** and who owns what (Constitution Schedules):
  - **Federal** (Schedule 5): health policy, standards, quality, regulation, national/specialised hospitals, communicable-disease control. → **MoHP, DoHS**.
  - **Provincial** (Schedule 6): "health services"; provincial hospitals; coordination. → **Provincial Ministries of Social Development / Health Directorates** (new post-2017).
  - **Local** (Schedule 8): **"basic health and sanitation"** — PHCCs, health posts, community units, FCHVs, local procurement.
  - **Concurrent** (Schedule 9): "health" is explicitly shared across all three tiers — **overlap is by constitutional design**, a named cause of coordination failure (Wasti et al., Health Research Policy & Systems, 2023).
- **Coordination problems (well documented)**: unclear provincial/local division of roles; local governments hire health workers but face shortages; fragmented supply chains; DHIS2 still largely federally managed; local revenue for health depends on federal transfers; provincial directorates still building capacity. Nepal still lacks a federalism-aligned Health Service Act (the operative one dates to 1997) (Kathmandu Post, 2026; Wasti et al. 2023).
- **Fiscal note**: subnational health spending's internally-funded share rose from ~0% (FY2017/18) to ~64% (FY2021/22) but with stark per-capita disparities across provinces (World Bank Fiscal Federalism Update, 2024).

### Provinces (Census 2021)
| Province | Capital | Population | Health-relevant notes |
|---|---|---|---|
| Koshi | Biratnagar | 4,961,412 | BPKIHS (Dharan); Terai malaria risk |
| Madhesh | Janakpur | 6,114,600 | Densest; highest fertility; lowest facility density; high diabetes/CVD |
| Bagmati | Hetauda* | 6,116,866 | Kathmandu Valley referral hospitals; urban NCD/air-pollution burden (*Kathmandu is federal capital) |
| Gandaki | Pokhara | 2,466,427 | Hills/mountains; remote Manang/Mustang access gaps |
| Lumbini | Deukhuri | 5,122,078 | Terai+Hill; cross-border care to India |
| Karnali | Birendranagar | 1,688,412 | Most remote; lowest HDI; **0% of sanctioned physician & consultant posts filled (2021)**; KAHS in Jumla |
| Sudurpashchim | Godawari** | 2,694,783 | Remote west; high poverty; cross-border care (**operates from Dhangadhi; capital plan stalled) |

- **753 local governments**: 6 metropolitan + 11 sub-metropolitan + 276 municipalities + 460 rural municipalities (Constitution 2015; confirmed 2017 & 2022 local elections).

### Maoist conflict legacy
- The Maoist "People's War" (**1996–2006**) killed >13,000, destroyed **>1,000 health posts**, and drove rural health-worker flight (Oxford, International Health; Conflict and Health). Ended by the **Comprehensive Peace Accord, 21 November 2006**. Useful context for conflict-affected service delivery and post-conflict recovery papers.

### Recent shock — 2025 Gen Z protests
- September 2025: a social-media ban triggered mass youth protests over corruption/nepotism; **76 deaths, 2,660+ injured**; PM Oli resigned (9 Sep 2025); ex-Chief Justice **Sushila Karki** became interim PM (Nepal's first woman head of government) before the March 2026 snap election (Wikipedia; Kathmandu Post, 2025). The **Ministry of Health building was damaged** and operated from a temporary WHO prefab into 2026 (Kathmandu Post, 28 Mar 2026).

### Political economy of health
- Donor share of health spending **fell 21.5% (2000) → ~11.7% (2016)**, but off-budget (donor-managed) aid rose (World Bank health-financing analysis). Patronage in appointments at health academies/hospitals is a documented governance weakness (Kathmandu Post, 2026).

---

## 2. Demographics & Population

### Census 2021 headline
- Population **29,164,578** (48.9% male / 51.1% female); growth **0.92%/yr**; density 198/km²; **6,666,937 households**; average household size **4.37** (Census 2021).
- **Urban 66.2% administratively**, but only **~27% genuinely urban** by UN density/built-up (DEGURBA) criteria — the 66% reflects a 2015–17 reclassification, not organic urbanisation (ScienceDirect, 2023). *Important when transferring "urban" findings.*
- Median age ~24–26 (⚠ primary NSO table unretrieved; UN model ~25.7) (WPP-derived, 2021).
- TFR 1.85 (census, self-reported) vs **2.1** (NDHS 2022 survey) — use NDHS 2.1.

### Caste / ethnicity (Census 2021, 142 groups)
- **Khas-Arya (upper Hill castes) ~30.1%** (Chhetri 16.5%, Hill-Brahmin 11.3%, Thakuri, Sanyasi); **Janajati (Indigenous) ~35%** (incl. Newar 4.6%, Magar 6.9%, Tharu 6.2%, Tamang 5.6%); **Madhesi ~20.8%** (castes 16.1% + Madhesi Dalit 4.8%); **Dalit total ~13.4%** (Hill 8.6% + Madhesi 4.8%); **Muslim 4.9%** (Census 2021).
- **Health disparities by group**: Dalits have the worst outcomes on most indicators (lowest immunisation, highest child mortality); caste-based discrimination affects care-seeking. Madhesi and Muslim groups have lower maternal-service utilisation. Under-5 mortality in the poorest quintile is 2–3× the richest; stunting ~2–3× (NDHS 2022; equity analyses).

### Religion & language
- Hindu 81.2%, Buddhist 8.2%, Muslim 5.1%, Kirat 3.2%, Christian 1.8% (Census 2021).
- Mother tongues: Nepali 44.9%, Maithili 11.1%, Bhojpuri 6.2%, Tharu 5.9%, Tamang 4.9%, Bajjika 3.9% (Census 2021). *Bilingual note: health literacy is well below general literacy — implications for materials and consent.*

### Ecological zones (Census 2021)
| Zone | Population | Land area | Health notes |
|---|---|---|---|
| Terai (plains) | 53.6% | ~23% | Densest; malaria/kala-azar/dengue; highest diabetes/CVD; cross-border care |
| Hill | 40.3% | ~42% | Includes Kathmandu Valley; most infrastructure |
| Mountain | 6.1% | ~35% | Remote; foot/air access; worst indicators; highest poverty |

### Literacy & migration
- Literacy **76.2%** overall (male 83.6%, female 69.4%) (Census 2021).
- **~3.0 million** Nepalis abroad for work (incl. ~1.09m in India) (Labour Migration Report 2024); Census self-report ~2.1m (undercount). GCC + Malaysia = 81% of new labour permits.
- **Remittances ~28.2% of GDP (FY2024/25) and rising** — among the highest ratios globally (NRB, 2025). Health implications: remittances finance OOP spending (masking system gaps); "left-behind" elderly/children; migrant occupational-health and mental-health burdens; open India border complicates disease surveillance.

---

## 3. Health Financing

### Aggregate (National Health Accounts — latest is FY2019/20)
- **THE 5.3% of GDP (FY2018/19) → 5.8% (FY2019/20)**; total health exp. Rs 223bn / USD 1.9bn (FY2019/20) (NHA 2018/19–2019/20). *(Corrects the old "4.5%".)*
- **Out-of-pocket 57.9% (FY2018/19) → 54.2% (FY2019/20)** of current health expenditure — among the highest in South Asia (NHA). *(Corrects old "51%".)*
- **Government share 26.5% → 31.9%** of CHE; external/donor 11.9% → 10.5% (NHA).
- **Per-capita total health exp. USD 54.7 (FY2018/19) → 63.6 (FY2019/20)**; government per-capita is the smaller ~USD 14–20 slice (NHA; World Bank GHED corroborates ~USD 58 in 2020). *Distinguish total vs government per-capita.*
- **Impoverishment**: 1.7% of population pushed below the $1.90 PPP line by OOP health costs (NHA 2019/20). **Catastrophic health spending ~10–11% of households** (⚠ attributed to World Bank via secondary sources; district studies range 3–17.8% by method) (Rising Nepal citing World Bank; PMC studies).
- ⚠ NHA data are ~6 years old (no NHA published after FY2019/20 as of 2026).

### Government health budget
- **FY2025/26: Rs 95.8bn = ~4.9% of the national budget** (peaked 7.5% in COVID FY2021/22; well below the Abuja 15% target). Split: federal 57.8%, provincial 6.3%, local 35.9% (Kathmandu Post, 14 Apr 2026). NHIP subsidy allocation Rs 10bn.

### National Health Insurance Programme (NHIP)
- **Institutional history**: designed/piloted by the **Social Health Security Development Committee (SHSDC)** (est. Feb 2015); the **Health Insurance Act 2074 (10 Oct 2017)** made it the autonomous, purchaser-side **Health Insurance Board (HIB)** — the permanent institution post-dated the pilot, and rollout ran through the 2015 earthquake, new constitution, federalism, and six PMs (2015–22) (Subedi 2025; Nepal Law Commission).
- **Rollout**: pilot began **April 2016** in Kailali (Terai), Baglung (western hills) and Ilam (eastern hills) — selected for ecological-zone balance, not health/economic criteria; reached **all 77 districts by FY2021/22**. Enrolment is legally mandatory but **de facto voluntary** (weak enforcement), household-level, renewed annually within **4 fixed quarterly windows** (Subedi 2025; Ayer et al. 2024).
- **Supply-side bottleneck (the binding constraint)**: only **343 of 753 local governments host ≥1 empanelled provider**; empanelled facilities ~451 (end-2022) → **501** (~85% public); HIB's ~**20-person claims-review team faced 25,000–30,000 claims/day vs ~6,000 manual-review capacity**; empanelment needs an online portal poorer/remote facilities often lack. Enrolment is very uneven — **Madhesh ~8% vs Koshi ~42%** (low awareness a leading cause) (Ayer et al. 2024; Subedi 2025).
- **Premium / benefits**: **Rs 3,500/yr for a household of up to 5** (+Rs 700 per extra member; raised from Rs 2,500); **cashless ceiling Rs 100,000/household/yr** (+Rs 20,000/extra member; raised from Rs 50,000). Covers preventive/curative/inpatient/emergency/surgical/diagnostic/rehab + medicines; excludes most dental, plastic surgery, high-cost aids. Per-person price falls with household size (Rs 3,500 single → Rs 700 at five) (HIB 2024; Subedi 2026).
- **Enrolment trajectory** (cumulative individuals): <14,000 (FY2015/16, 3 pilot districts) → ~1.1m (2017/18) → ~4.6m (2020/21) → ~6.0m (2021/22) → **7.2m / 24.6% of population (FY2022/23)**; ~**33% of *households*** have ≥1 member enrolled; >30% ever-enrolled / ~9.2m by Nov 2024 (DoHS 2024; Khabarhub 2024). Survey-based enrolment (NDHS 2022, ~10%) runs below HIB administrative figures; active (currently-paying) enrolment is lower than cumulative.
- **Renewal/dropout**: one-period annual renewal ~81% (FY2021/22); cumulative-ever renewal ~57% (end-2022); early district dropout ranged 15–96%. Adverse selection (sicker households enrol/renew) is a documented — and now causally evidenced — threat (Ayer et al. 2024; Subedi 2026).
- **Subsidised/free premiums**: fully exempt — ultra-poor households, citizens **aged 70+** (free since **April 2019**, receiving an *individual* Rs 100,000 entitlement separate from the household), and people with disability, HIV, drug-resistant TB, leprosy, or selected terminal illness; **FCHVs pay half** the premium (HIB 2024; Subedi 2026).
- **2019 FPOC reassignment reform**: reassigned each enrollee to their nearest empanelled first-point-of-contact facility within an unchanged network — used as a natural experiment on access/distance (Subedi 2025).
- **2026 solvency crisis (critical current context)**: arrears **>Rs 16bn** owed to providers; annual claims **Rs 25–26bn** vs revenue ~Rs 14bn (Rs 10bn government subsidy + ~Rs 4bn premiums). HIB issued a **Benefit Package (Third Amendment) 2083** cutting reimbursement rates (~30 May 2026), triggering provider backlash (onlinekhabar; nepalihealth, 2026). *Directly relevant to any insurance-sustainability paper.*

> **⚠ INTERNAL — NHPL-affiliated forthcoming research (do NOT quote verbatim in public paper summaries until published/author-cleared).** Two working papers by NHPL co-founder **Sabin Subedi** give the first causal evidence on NHIP — they should frame the lab's own analysis and any *policy brief*, but are unpublished / not-for-circulation:
> - **Subedi (2025) — utilisation & equity** (staggered DiD, 2016–22 rollout): NHIP eligibility raised total facility visits **~14%** (similar across OPD/emergency/diagnostics), but gains **concentrate in low-poverty districts** (~20% in the richest quartile, ~0 in high-poverty) — NHIP **widens** the poverty–utilisation gap. Mechanism is **supply-side**: too few empanelled facilities in poor districts (the 2019 FPOC reform confirms it — where distance falls, claims rise; where it can't, they don't). Lever: **expand empanelled public facilities in poor districts**, not enrollee-reshuffling rules.
> - **Subedi (2026) — adverse selection at the age-70 waiver** (RD at 70): coverage jumps **22%→49%** yet claims *fall* (any-claim −7.6pp), because the zero price draws in an observably **cheaper** pool (adverse selection into the *paid* pool below 70). Waiver **MVPF ≈ 0.65 (<1)**; most of its budget is a transfer to already-enrolled households, not a correction of under-insurance.

### Aama Programme (safe-motherhood demand-side financing)
- **Maternity Incentive Scheme 2005 → Safe Delivery Incentive Programme (SDIP) 2006 → rebranded "Aama" Jan 2009**, when institutional births became free nationwide (Health Policy & Planning 2017; Exemplars).
- Transport incentive on facility delivery: **Rs 3,000 (mountain) / 2,000 (hill) / 1,000 (terai)**; **Rs 800** for completing 4 ANC + delivery + PNC; Rs 300 to the provider (publichealthupdate; ⚠ some amounts revised, exact years unconfirmed).
- **Institutional delivery rose from 9% (2001) to 79.4% (NDHS 2022)** — widely credited to Aama + supply-side expansion (PMC; NDHS 2022).

### Free care & essential drugs
- **Free Essential Health Care**: free basic services at Health Posts/Sub-Health Posts nationwide since **2008** (built on the 2007 Interim Constitution right). Undermined in practice by chronic underfunding and informal payments.
- **Free Drug List**: launched 2009 with 40 drugs → 70 (2014) → **~98 essential medicines** free at public facilities today, tiered by facility level (Kathmandu Post 2023–24; PMC 2017). Separate from the **National List of Essential Medicines (NLEM), 6th revision 2021**.

---

## 4. Health Workforce

### Density (read the caveat)
- The oft-quoted **"0.17 physicians / 0.67 combined per 1,000" figures are from the 2012/13 HRH Assessment** and are outdated. In that source, **0.67 was the *combined* doctor+nurse figure** (doctors 0.17 + nurses 0.50) — NOT the nurse density. *(Corrects the old file, which mislabeled 0.67 as nurses and 0.84 as combined.)*
- **Current registration-based density**: combined doctors+nurses+midwives **5.1/1,000 (2023)**, now above the WHO SDG threshold of 4.45/1,000 (WHO SEARO Nepal HRH Profile, 2024); doctors ~0.9/1,000 (World Bank 2021) to ~1.9/1,000 (Economic Survey 2026).
- **Critical caveat**: these are *registration* counts. Of **~45,500 doctors registered with NMC, fewer than ~15,000 actively practise in Nepal** (Kathmandu Post, 2025) — true *practising* density is far lower. Nurses registered ~116,000–122,000 (NNC, 2024).

### Female Community Health Volunteers (FCHV)
- **~50,396 FCHVs** (DoHS AHR 2080/81), programme since **1988**; unpaid volunteers receiving only allowances (Rs 10,000 dress + Rs 12,000 transport/yr; 50% insurance subsidy; Rs 20,000 farewell at 60+). FY2026/27 budget raised transport stipend 50% — still not salaried (Nepalnews, 2026).
- Roles: family-planning distribution, newborn home visits (skin-to-skin, chlorhexidine cord care, PNC), MUAC malnutrition screening, vitamin A / iron distribution, health education, mothers' groups. **Documented concern: an ageing cadre reluctant to retire, plus inconsistent compensation risking dropout** (DoHS AHR 2080/81; Frontiers in Public Health, 2025). *Backbone of community delivery — name it in relevant contextualisation.*

### Production & training
- **~2,635 MBBS seats (2025/26)**; ~25–27 medical colleges (8 government); Medical Education Commission (from the 2018 Medical Education Act) runs a common entrance exam and enforces bonded rural service for scholarship students (MEC; DoHS 2025). Key schools: IOM/TU, BPKIHS, KUSMS/Dhulikhel, PAHS/Patan, NAMS/Bir, KAHS/Jumla.

### Brain drain
- **~2,000–2,400 doctors/year now obtain NMC "Good Standing Certificates" to work abroad** (2,318–2,582 in 2023; 2,390 in 2025) — >70% reportedly leave permanently; >11,000 since 2020. *(Corrects the old "400–500/year" — now 4–5× higher.)* In 2025, certificates-to-leave (2,390) exceeded new licences (2,122) (Kathmandu Post; Himalaya Times, 2025–26).
- Top destinations: USA, UK, Maldives, Australia. Push factors: junior-doctor salary ~USD 3,500/yr vs ~USD 60,000 US residency; >83% job dissatisfaction. Nurses: >⅓ of registered nurses have sought papers to work abroad; UK–Nepal recruitment MoU (WHO HRH Profile 2024; Context News).

### Distribution (equity)
- **Kathmandu Valley ~1 doctor:850 people vs ~1:150,000 in remote districts** (DoHS 2080/81; Ghimire 2026).
- Sanctioned-post fill rates (NHFS 2021): all providers 73.4%; **physicians/GPs only 37.9%** (down from 56.5% in 2015); nurses 74.3%. **Karnali: 0% of consultant AND physician/GP posts filled** — a stark equity fact. Urban Health Centres (18.7%) and Community Health Units (7.8%) are the least-staffed facility types (DoHS AHR 2080/81).

---

## 5. Health Status & Disease Burden

### Mortality & fertility (NDHS 2022)
- **MMR 151** /100,000; **neonatal 21, infant 28, under-5 33** per 1,000; **TFR 2.1**; life expectancy ~71 (NDHS 2022). *(Corrects old NMR 16 / IMR 25 / U5MR 29.)*
- Neonatal deaths have **stagnated since 2016** and now dominate under-5 mortality. Large caste/wealth/geographic disparities; male adult mortality highest in Karnali (NDHS 2022; equity analyses).

### Nutrition (NDHS 2022)
- Under-5 **stunting 25%** (from 57% in 2001), **wasting 8%**, **underweight 19%**; women's anaemia **34%**; low birth weight ~15%. Worst stunting in Madhesh/Lumbini; western provinces worst for LBW (NDHS 2022). *(Corrects wasting 7→8, anaemia 36→34.)*

### Causes of death (Nepal Burden of Disease 2019 / GBD)
- **NCDs 71.1% of deaths (GBD 2019) — WHO frames it as 66% (2022)** ⚠ (cite which). CMNN 21.1%, injuries 7.8%. Leading causes: **CVD 24%**, cancer 11%, diabetes+kidney 4.4%, TB/respiratory 3.9%. Largest single risk factor: **tobacco (17.7% of deaths)** (NBoD 2019).

### NCDs (STEPS 2019, adults 15–69)
- Hypertension **24.5%**; raised blood glucose **5.8%** (population diabetes studies ~8.5% ⚠ different method); current tobacco **28.9%** (men 48%, women 12%); harmful alcohol 6.8%; overweight/obese 24.3%; raised cholesterol 11% (STEPS 2019).
- COPD is a top-2–3 cause of death (biomass smoke + tobacco); community prevalence ~11.7% (Karnali 25% vs Gandaki 6%). Cervical cancer incidence 16.4/100,000 (~4× WHO elimination target); screening only ~8% of women 30–49 (GBD; GLOBOCAN 2022). **NCD services concentrate in urban tertiary hospitals; WHO PEN is expanding primary-care NCD care.**

### Infectious disease
- **TB incidence 229/100,000 (2023)** (~68,000 active cases); roughly half of estimated cases notified; the 2018/19 prevalence survey found true burden 1.6× the prior estimate (WHO GTB 2025). HIV 0.12% (concentrated in key populations; ART ~77%). **Malaria elimination target moved 2026→2030** (mostly imported from India). **Dengue**: record **54,784 cases / 88 deaths in 2022**; ~51,000 in 2023; vector now found up to 2,438m (Jumla) — climate-driven ascent (EDCD; Nepali Times 2025).
- **Typhoid / enteric fever** (Kathmandu = "enteric fever capital of the world"): SEAP incidence **330/100,000 in Kathmandu** (2016–19); Lalitpur child incidence 428/100,000 person-yrs. AMR: **fluoroquinolone non-susceptibility ~86%**, but **MDR and XDR each only ~1%** (contrary to the assumption that MDR typhoid is a major Nepal problem); azithromycin resistance emerging but <1%. **TCV**: Nepal was the 4th country to introduce it nationally — catch-up campaign **Apr 2022 (>7m children, >90% coverage)**, now routine at 15 months; post-introduction, S. Typhi positivity in vaccine-eligible children fell ~75%; Phase-3 efficacy 79–85% (SEAP; medRxiv; WHO/Gavi, 2020–24). *Grounds the Shakya TCV paper.*

### Immunisation (NDHS 2022, 12–23 months)
- Pentavalent-3 **89%**, measles-1 **89%**, fully immunised **80%** (non-monotonic since a 2011 peak). EPI is one of Nepal's strongest programmes.

### Mental health
- **Treatment gap >90%** (depression-specific ~92%; only ~8% treated). **Psychiatrists ~0.17–0.22/100,000** (⚠ corrects old 0.36) — ~150–200 nationally, 8.5× concentrated around Kathmandu. **Suicide**: WHO age-standardised rate **9.8/100,000 (2019)**; the widely-cited "16" is the **% of reproductive-age *female deaths* from suicide, not a population rate** ⚠. Nepal has no national suicide surveillance. Policy: 1996 Mental Health Policy + 2020 Strategy; **no Mental Health Act has ever been enacted** (drafts stalled). mhGAP piloting in some districts (WHO 2021–22; PMC). *Grounds the mental-health papers.*

---

## 6. Environmental Health

### Air pollution (Nepal's #1 mortality risk factor — World Bank 2025)
- Kathmandu annual PM2.5 **~42–45 µg/m³ (~9× the WHO 5 µg/m³ guideline)**; Nepal the **7th-most-polluted country (IQAir 2024)**; Terai worse in winter. Air pollution cuts average life expectancy **~3.4 years** and costs **>6% of GDP**; ~26,000–35,000+ attributable deaths/yr ⚠ (framings differ) (World Bank *Towards Clean Air in Nepal* 2025; Lancet Countdown 2024; IQAir 2024).
- **Household air pollution**: **~54% of households still cook with solid biomass** (LPG ~44%); electric cooking <1%. Attributable to COPD, pneumonia, low birth weight. Disease-attributable fractions (total air pollution): COPD 75%, stroke 46%, IHD 44%, LRI 41%, neonatal disorders 30% (World Bank 2025). **Note for the Katz cookstove paper**: Nepal's own improved-biomass/LPG stove RCTs did *not* significantly reduce adverse birth outcomes, because post-intervention PM2.5 stayed above WHO limits (NEJM 2022; GHSP 2020).

### WASH
- **Basic drinking water 98%, basic sanitation 73%** (from 40% in 2011), **open defecation 7%** (NDHS 2022). **Nepal declared an Open-Defecation-Free (ODF) nation on 1 Oct 2019** — first in South Asia — though NDHS 2022 still found 7% OD ⚠. Handwashing-with-soap ~66%. Under-5 diarrhoea prevalence 10% (48% get ORS; 28% no treatment). *Grounds the Luby WASH-B paper.*

### 2015 Gorkha earthquake
- **~8,800 deaths, ~22,000 injured, >785,000 homes destroyed** (25 Apr 2015; M7.8). **446 public health facilities destroyed + 765 damaged** (~1,211 total); PTSD 19–23% among survivors; ~58% of health facilities reconstructed by the 5-year mark (PDNA 2015; NRA 2020; BMC Psychiatry 2023). *Grounds the Giri earthquake paper; Nepal is highly seismic — surge-capacity and disaster preparedness are live concerns.*

### Climate & health
- HKH warming ~0.28°C/decade; dengue/vectors climbing into hill/mountain districts (up to 2,438m, 2025); heat exposure cost >3.4bn labour hours/yr (2014–23), ~USD 2.8bn income (agriculture 91.5%); accelerating glacial-lake-outburst-flood (GLOF) risk (ICIMOD 2025; Lancet Countdown 2024). *Grounds climate-health and dengue contextualisation.*

---

## 7. Policies, Laws & Institutions

### Legal / policy timeline (year — instrument — key point)
- **1978 Drugs Act 2035** — drug regulation; created the **Department of Drug Administration (DDA)**.
- **1991 NHRC Act** — created the Nepal Health Research Council (research ethics; publishes JNHRC).
- **1991 / 2014 / 2019 National Health Policies** — 2019 (2076) reorients the system for federalism, UHC, insurance, digital health, NCDs & mental health.
- **2002 abortion legalisation** — on request ≤12 weeks; expanded by later law.
- **2011 Tobacco Products Control Act** — public-place smoking ban, advertising ban, large pictorial warnings.
- **2017 Health Insurance Act 2074** — created HIB; mandates NHIP enrolment.
- **2018 Public Health Service Act 2075** — operationalises Article 35's free basic + emergency care.
- **2018 Right to Safe Motherhood & Reproductive Health Act** — free abortion/maternity care duties across tiers; abortion ≤12 weeks on request, ≤28 weeks on specified grounds (⚠ conflicts with the 2017 Penal Code's 18-week limit — unresolved).
- **2018 Medical Education Act** — created the Medical Education Commission.
- **NHSS 2016–2021 (extended to 2023) → Nepal Health Sector Strategic Plan (NHSSP) 2023–2030** — the current, first post-federal sector strategy (5 objectives, aligned to UHC/SDGs). *(Corrects old "successor delayed".)*
- **Mental health**: 1996 Policy + **2020 Strategy & Action Plan**; **no Mental Health Act enacted** (only stalled drafts). *(Corrects old "Mental Health Act 2006".)*

### Institutions
- **MoHP / Ministry of Health (& Food Hygiene, from 2026)** — policy, standards, tertiary hospitals. **DoHS** — implementation; publishes the Annual Health Report; divisions incl. **EDCD** (disease control/surveillance), **Family Welfare Division** (immunisation, safe motherhood, nutrition). **HIB** — insurance purchaser. **NHRC** — research ethics. **DDA** — drug regulation. **NMC / NNC** — professional registration & licensing. **Provincial Health Directorates** (under provincial Social Development ministries).

### Infrastructure (DoHS, ~FY2022/23–2023/24; ⚠ latest FY2024/25 tables not extracted)
- **~215–234 public hospitals; 187 PHCCs; ~3,778 health posts; ~7,600 basic-health-service centres; ~14,000 total registered facilities** (DoHS Health Facts 2023 / AHR 2080/81). Private sector delivers a large share of services (~400 private hospitals, ~25,000 private beds — ⚠ trade-association estimate).

---

## 8. Comparator Countries

For contextualising non-Nepal evidence (Tier 2/3 transferability):
- **India** — shared open border & Terai culture; Ayushman Bharat (PMJAY) vs NHIP; ASHAs vs FCHVs; but vastly larger scale.
- **Bangladesh** — similar income, better maternal/family-planning outcomes ("Bangladesh paradox"); strong NGO (BRAC) sector; flatter geography (relevant to the Luby WASH-B and Karan RSBY papers).
- **Sri Lanka** — strong outcomes (MMR ~29) at low income; free universal system, strong primary care.
- **Thailand** — achieved UHC at Nepal-comparable GDP; capitation, village health volunteers, HTA (HITAP).
- **Rwanda** — CBHI (Mutuelle) >90% coverage; 45,000 CHWs; performance-based financing; but centralised, high state capacity.
- **Ethiopia** — Health Extension Programme (salaried HEWs) vs Nepal's volunteer FCHVs — relevant to FCHV professionalisation debates.

---

## 9. Current Reform Priorities (2026)
- **NHIP solvency & reform** — arrears crisis; moving beyond a voluntary model; provider-payment fixes.
- **Federalism implementation** — clarifying tier roles; provincial capacity; getting health funds to local governments.
- **NCD service expansion** — WHO PEN at primary care; essential NCD meds in the BHSP; cervical/breast screening.
- **Mental-health integration** — mhGAP scale-up; psychosocial counsellors; still no Mental Health Act.
- **Health-workforce retention** — reversing accelerating doctor/nurse brain drain; rural incentives; KAHS/PAHS rural-training models; FCHV sustainability.
- **Air pollution** — now recognised as the #1 mortality risk; "35 by 35" PM2.5 target; clean-cooking transition.
- **Digital health** — DHIS2 data quality; telemedicine for remote access; EMR pilots; national digital-health strategy.

---

## Appendix A: Key data sources
NDHS 2022 (population health — gold standard); Census 2021 (NSO); DoHS Annual Health Report (facility/programme data); National Health Accounts 2018/19–2019/20 (financing); Nepal STEPS Survey 2019 (NCD risk factors); Nepal Burden of Disease 2019 / GBD; WHO Country Profile & HRH Profile; HIB Annual Reports; World Bank *Towards Clean Air in Nepal* 2025; Lancet Countdown; WHO/UNICEF JMP (WASH); Nepal Law Commission (Acts).

## Appendix B: Changelog — corrections from the 2026-07 verification pass
Key figures corrected against primary sources (old → new):
- Child mortality **NMR 16→21, IMR 25→28, U5MR 29→33** (NDHS 2022).
- THE **4.5%→5.8% of GDP**; OOP **51%→54.2%**; per-capita total health exp. clarified as **USD ~64** (government per-capita ~USD 14–20) (NHA 2019/20).
- Nurse density **de-mislabeled** (0.67 was combined, not nurses); doctor brain drain **~400–500→~2,000–2,400/yr**.
- Psychiatrists **0.36→0.17–0.22/100,000**; suicide "16/100k" reinterpreted as **% of reproductive-age female deaths**, not a rate.
- Hypertension →24.5%, tobacco →28.9%, TB →229/100k, wasting →8%, anaemia →34%.
- **"Mental Health Act 2006" removed** (never enacted); successor strategy is **NHSSP 2023–2030** (exists).
- Added: **typhoid/enteric-fever section**, **environmental-health section** (air pollution, WASH, earthquake, climate), **NHIP 2026 solvency crisis**, and the **2026 political transition** (PM Balen Shah/RSP; Health Minister Nisha Mehta; ministry renamed).
- 2026-07-10 (2nd pass): refined NHIP institutional detail (SHSDC→HIB, empanelment/claims bottleneck, age-70 waiver, FPOC reform) and added the first **causal evidence on NHIP** — Subedi (2025) utilisation/equity DiD and Subedi (2026) age-70 adverse-selection RD — flagged **internal/forthcoming, not-for-public-circulation**.
