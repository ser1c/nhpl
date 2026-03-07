# Plan: Evidence Portal

## Goal
Build a publicly accessible, searchable database of global health policy research — curated, structured, and contextualised for Nepal. Each paper has a standardised 1-pager explaining what was studied, what they found, and what it means for Nepal.

## Architecture

### Data Layer
- **Source**: Static JSON file (`src/data/evidence.json`)
- **Schema**: Zod-validated (`src/data/evidence.schema.ts`)
- **Bilingual**: Each entry contains both en/ne translations inline (not separate files)
- **Validated on build**: If schema validation fails, the build fails

### Pages
- `/en/evidence` and `/ne/evidence` — searchable listing with filters
- `/en/evidence/[slug]` and `/ne/evidence/[slug]` — individual paper 1-pager

### Interactive Search
- Preact island (3KB, lightweight for Nepal bandwidth) with Fuse.js fuzzy search
- Filters: policy domain, study design, evidence strength, country
- Sort: relevance, date added, year, Nepal relevance score
- URL parameter sync (shareable filtered views)
- No-JS fallback: static list of all entries

---

## Data Schema

Each evidence entry has these fields:

**Identity:**
- `slug` — URL-safe unique identifier

**Bibliographic:**
- `title`, `authors` (array), `year`, `journal`, `doi` (optional), `url`, `abstract` (optional)

**Taxonomy (5 tagging dimensions from proposal):**
- `policyDomain` — array of: health-financing, maternal-health, primary-care, infectious-disease, mental-health, nutrition, health-workforce, health-information-systems, noncommunicable-diseases, health-governance, child-health, environmental-health
- `interventionType` — array of: financing-mechanism, service-delivery, demand-side, supply-side, governance-reform, information-system, workforce-training, community-based, pharmaceutical, digital-health, behavioural, other
- `studyDesign` — one of: rct, quasi-experimental, cohort, cross-sectional, case-control, qualitative, mixed-methods, systematic-review, meta-analysis, descriptive, modelling
- `evidenceStrength` — one of: high, moderate, low
- `countries` — array of country names

**Nepal contextualisation:**
- `nepalRelevanceScore` — integer 1-5
- `contextualisation` — `{ en: string, ne: string }`

**1-pager content (bilingual):**
- `onePager.whatWasStudied` — `{ en: string, ne: string }`
- `onePager.whatTheyFound` — `{ en: string, ne: string }`
- `onePager.whatItMeansForNepal` — `{ en: string, ne: string }`

**Metadata:**
- `dateAdded`, `addedBy` (optional), `tags` (array)

---

## File Structure

```
src/
  data/
    evidence.json            # The main dataset
    evidence.schema.ts       # Zod schema + TypeScript types
    evidence-loader.ts       # Load + validate JSON at build time
    taxonomy.ts              # Bilingual display labels for all enums
  components/
    EvidenceSearch.tsx        # Preact island: search + filter + results
    EvidenceCard.astro        # Card for listing page
    EvidenceBadge.astro       # Reusable badge (policy domain, study design, etc.)
    RelevanceScore.astro      # Visual 1-5 Nepal relevance indicator
  layouts/
    EvidencePaper.astro       # Layout for individual paper 1-pager
  pages/
    en/evidence/
      index.astro             # Listing page (EN)
      [...slug].astro         # Paper detail page (EN)
    ne/evidence/
      index.astro             # Listing page (NE)
      [...slug].astro         # Paper detail page (NE)
```

---

## Dependencies to Add

- `@astrojs/preact` + `preact` — lightweight island framework (3KB)
- `fuse.js` — client-side fuzzy search

Why Preact over React: 3KB vs 40KB+ bundle, critical for Nepal bandwidth. Astro has first-class support.

---

## Visual Design

**Listing page:**
- Two-column on desktop: filter sidebar (left) + results (right)
- Mobile: filters collapse into accordion above results
- Cards (not table) — mobile-friendly, matches existing BlogCard pattern
- Each card: title, authors (first 3 + "et al."), year, policy domain badges, evidence strength badge (color-coded green/amber/red), Nepal relevance dots, contextualisation snippet
- Search bar at top, active filters as dismissible chips

**Detail page (1-pager):**
- Narrow layout (max-w-3xl, matches BlogPost)
- Full bibliographic header
- Taxonomy badges bar
- Nepal Relevance Score (prominent)
- Three sections with headings: What Was Studied, What They Found, What This Means for Nepal
- "What This Means for Nepal" visually emphasized (teal-light background)
- Link to original paper, back to portal

---

## AI Data Pipeline

Lives in `scripts/` at repo root (separate from website code):

```
scripts/
  parse-paper.ts        # Claude API: PDF/URL -> structured JSON
  validate-entry.ts     # Validate against Zod schema
  add-to-database.ts    # Append to evidence.json
  translate.ts          # Claude API: generate Nepali translations
```

**Workflow:**
1. Researcher provides paper URL/PDF
2. `parse-paper.ts` calls Claude API with schema prompt, gets structured output
3. `validate-entry.ts` checks against schema
4. Human reviews output (especially Nepal contextualisation + relevance score)
5. `translate.ts` generates Nepali translations
6. `add-to-database.ts` merges into evidence.json
7. Git push triggers rebuild and deploy

---

## Implementation Steps

1. Create `src/data/evidence.schema.ts` with Zod schema
2. Create `src/data/taxonomy.ts` with bilingual enum labels
3. Create `src/data/evidence-loader.ts` (load + validate)
4. Create `src/data/evidence.json` with 3-5 seed entries
5. Install Preact + Fuse.js, update astro.config.mjs
6. Add evidence translation keys to `src/i18n/ui.ts`
7. Build static components: EvidenceBadge, RelevanceScore, EvidenceCard
8. Build `EvidencePaper.astro` layout
9. Build detail pages: `/en/evidence/[...slug].astro`, `/ne/evidence/[...slug].astro`
10. Build `EvidenceSearch.tsx` Preact island (search + filter + sort)
11. Build listing pages: `/en/evidence/index.astro`, `/ne/evidence/index.astro`
12. Add Evidence Portal to navigation in Header.astro
13. Create pipeline scripts in `scripts/`
14. Seed 10-20 real papers via pipeline
15. Test: bilingual display, search, filters, no-JS fallback, performance

---

## Scalability

| Phase | Papers | Approach |
|-------|--------|----------|
| 1 (now) | up to 500 | Full JSON, client-side Fuse.js |
| 2 | 500-2000 | Split JSON: lightweight index for listing, full content on detail pages |
| 3 | 2000+ | Serverless API (Cloudflare Workers + D1 or Supabase), server-side search |

Trigger to migrate: JSON exceeds 1MB uncompressed.

---

## Future: Report Generation

The architecture accommodates this without changes:
- Structured schema enables topic-based queries
- Future `/en/evidence/report` page accepts user query + filters
- Serverless function queries evidence DB, calls Claude API for synthesis
- Tiered model (free basic / paid commissioned) requires auth — keep separate

---

## Open Questions

- Where to source the initial 3-5 seed papers for testing?
- Should the pipeline scripts live in this repo or a separate one?
- Review needed: are the taxonomy categories comprehensive enough?
