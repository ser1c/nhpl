Process uploaded PDF(s) into structured evidence entries for the Nepal Health Policy Lab evidence portal.

## Instructions

The user has uploaded or will reference PDF research papers. Process each paper through a 4-pass system, then add the result to `src/data/evidence.json`.

### Pass 1: Extract

Read the PDF carefully. Extract all fields matching the schema in `src/data/evidence.schema.ts`:

- **slug**: URL-safe identifier derived from the title (lowercase, hyphens)
- **title**: Full paper title
- **authors**: Array of author names (as they appear on the paper)
- **year**: Publication year
- **journal**: Journal name
- **doi**: DOI if available (optional)
- **url**: URL to the paper (construct from DOI if possible: `https://doi.org/...`)
- **policyDomain**: Array from: health-financing, maternal-health, primary-care, infectious-disease, mental-health, nutrition, health-workforce, health-information-systems, noncommunicable-diseases, health-governance, child-health, environmental-health
- **studyDesign**: One of: rct, quasi-experimental, cohort, cross-sectional, case-control, qualitative, mixed-methods, systematic-review, meta-analysis, descriptive, modelling
- **evidenceStrength**: One of: high (RCTs, meta-analyses, strong systematic reviews), moderate (quasi-experimental, good cohort studies, mixed-methods), low (descriptive, case studies, weak methodology)
- **countries**: Array of country names studied
- **nepalRelevanceScore**: Integer 1-5. Score based on: (5) directly about Nepal, (4) very similar context (South Asia LIC, similar health system), (3) relevant LIC/LMIC with transferable lessons, (2) somewhat relevant but different context, (1) limited direct applicability
- **contextualisation**: `{ en, ne }` -- 2-3 sentences explaining WHY this paper matters for Nepal specifically
- **onePager**:
  - **whatWasStudied**: `{ en, ne }` -- What the researchers investigated, methods used
  - **whatTheyFound**: `{ en, ne }` -- Key findings with specific numbers/effect sizes where available
  - **whatItMeansForNepal**: `{ en, ne }` -- Actionable implications for Nepal's health policy. Be specific about which Nepal programmes/policies this relates to
- **status**: Always set to `"auto-processed"`
- **verifiedBy**: `null`
- **verifiedDate**: `null`
- **dateAdded**: Today's date (YYYY-MM-DD format)
- **addedBy**: `"claude-process"`
- **tags**: Array of 3-5 relevant keyword tags

### Pass 2: Critical Review

Review your own extraction critically:

1. Is the **studyDesign** classification correct? (e.g., don't confuse descriptive with quasi-experimental)
2. Is the **evidenceStrength** justified? Consider sample size, methodology rigour, potential biases
3. Is the **nepalRelevanceScore** well-calibrated? Compare against existing papers in evidence.json
4. Are the **policyDomain** tags complete? Papers often span multiple domains
5. Does the **contextualisation** actually explain Nepal-specific relevance, not just summarise the paper?
6. Does **whatItMeansForNepal** name specific Nepal policies, programmes, or institutions? (e.g., "FCHV programme", "Social Health Insurance", "Aama programme", "federalism transition")
7. Are the Nepali translations accurate and natural-sounding?
8. Are there any factual errors or hallucinated details?

Write down all issues found.

### Pass 3: Revise

Fix every issue identified in Pass 2. Show what changed.

### Pass 4: Final Validation

1. Verify the JSON is valid and matches the Zod schema exactly
2. Check that the slug doesn't conflict with existing entries in evidence.json
3. Verify all bilingual fields have both `en` and `ne`
4. Confirm no fields are missing

### Output

After all 4 passes, add the entry to `src/data/evidence.json`. Also check if a new topic is needed in `src/data/topics.json` (only add one if the paper's policy domains aren't covered by existing topics).

Print a summary:
- Paper title
- Policy domains assigned
- Evidence strength
- Nepal relevance score
- Status: auto-processed (needs human verification)

$ARGUMENTS
