# Plan: Evidence Portal

## Goal
Build a publicly accessible, topic-first evidence portal where policymakers can browse global health research curated and contextualised for Nepal.

## Architecture: Topic-First Design

Inspired by Exemplars in Global Health — users navigate by topic, not by paper.

### URL Structure
```
/en/evidence/                              → Topic grid (all topics)
/en/evidence/browse                        → Flat searchable list (power users)
/en/evidence/[topic]/                      → Topic page (overview + papers in topic)
/en/evidence/[topic]/[slug]                → Individual paper 1-pager
```
Same structure under `/ne/`.

### Two Layers

**Layer 1: Evidence Library** (MVP — build now)
- Searchable, filterable database of individual papers
- Each paper has a structured 1-pager (what was studied, findings, Nepal implications)
- Topic pages group papers with a manually written topic overview
- Works without AI at runtime — pure static site

**Layer 2: Evidence Briefs** (done — no AI needed)
- Interactive "Build a Brief" tool at `/[lang]/evidence/brief`
- User selects topic + countries → assembled evidence report from existing paper data
- PDF export via browser print with branded header/footer
- No runtime AI costs — all data is pre-computed and static

---

## Data Layer

### Source Files
- `src/data/evidence.json` — the paper dataset
- `src/data/topics.json` — topic definitions with overviews
- `src/data/evidence.schema.ts` — Zod schemas + TypeScript types
- `src/data/taxonomy.ts` — bilingual display labels for all enums
- `src/data/evidence-loader.ts` — load + validate at build time

### Paper Schema

Each evidence entry:

**Identity:**
- `slug` — URL-safe unique identifier

**Bibliographic:**
- `title`, `authors` (array), `year`, `journal`, `doi` (optional), `url`

**Taxonomy:**
- `policyDomain` — array from defined set (health-financing, maternal-health, etc.)
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

**Verification:**
- `status` — `auto-processed | under-review | verified | rejected`
- `verifiedBy` — string or null
- `verifiedDate` — string or null

**Metadata:**
- `dateAdded`, `addedBy` (optional), `tags` (array)

### Topic Schema

Each topic:
- `slug` — URL-safe identifier (matches policyDomain values)
- `title` — `{ en: string, ne: string }`
- `description` — `{ en: string, ne: string }` (short, for topic grid card)
- `overview` — `{ en: string, ne: string }` (longer, for topic page)
- `keyQuestions` — `{ en: string[], ne: string[] }` (what policymakers ask)
- `policyDomains` — array linking to paper tags
- `icon` — emoji or icon identifier

---

## Interactive Search

- Preact island (3KB) with Fuse.js fuzzy search
- Filters: policy domain, study design, evidence strength, country
- Sort: relevance, date added, year, Nepal relevance score
- URL parameter sync (shareable filtered views)
- No-JS fallback: static list of all entries

---

## Visual Design

**Topic grid (`/evidence/`):**
- Cards for each topic with icon, title, paper count, description
- Clean grid layout, mobile-friendly

**Topic page (`/evidence/[topic]/`):**
- Topic overview at top
- Key questions sidebar or section
- Paper list (filterable within topic)
- Each paper card: title, authors, year, evidence strength badge, Nepal relevance dots

**Browse page (`/evidence/browse`):**
- Full search bar + filter sidebar
- All papers, all topics — power user view

**Paper 1-pager (`/evidence/[topic]/[slug]`):**
- Bibliographic header
- Taxonomy badges
- Nepal Relevance Score (prominent)
- Three sections: What Was Studied, What They Found, What This Means for Nepal
- "What This Means for Nepal" visually emphasized (teal-light background)
- Verification status badge
- Link to original paper, back to topic

---

## File Structure

```
src/
  data/
    evidence.json            # Paper dataset (10 seed papers)
    topics.json              # Topic definitions (5 topics)
    evidence.schema.ts       # Zod schemas + types
    taxonomy.ts              # Bilingual display labels
    evidence-loader.ts       # Load + validate
  components/
    EvidenceSearch.tsx        # Preact island: search + filter + results
    EvidenceBriefBuilder.tsx  # Preact island: build-a-brief tool
    EvidenceCard.astro        # Card for listing page
    EvidenceBadge.astro       # Reusable badge component
    RelevanceScore.astro      # Visual 1-5 Nepal relevance indicator
    TopicCard.astro           # Card for topic grid
  layouts/
    EvidencePaper.astro       # Layout for paper 1-pager (with print styles)
  pages/
    en/evidence/
      index.astro             # Topic grid + Build a Brief CTA
      browse.astro            # Flat searchable list
      brief.astro             # Build a Brief tool
      [topic]/index.astro     # Topic detail page
      [topic]/[slug].astro    # Paper via topic route
      browse/[slug].astro     # Paper via browse route
    ne/evidence/              # Mirrors en/
      ...
```

---

## Multi-Agent Pipeline (runs locally)

Lives in `scripts/` — you run it manually with your API key:

```
scripts/
  parse-paper.ts        # Agent 1: Extract structured data from paper
  review-paper.ts       # Agent 2: Critical review + verify classifications
  revise-paper.ts       # Agent 3: Apply Agent 2's feedback
  qa-paper.ts           # Agent 4: Final QA + schema validation
  translate.ts          # Generate Nepali translations
  add-to-database.ts    # Append to evidence.json
```

**Workflow:**
1. You provide paper URL/DOI
2. Agent 1 extracts → Agent 2 reviews → Agent 3 revises → Agent 4 validates
3. Output: structured JSON with `status: "auto-processed"`
4. You review, edit if needed, set `status: "verified"`
5. Commit to evidence.json, push triggers rebuild

No PDFs stored in repo — only structured data + DOI/URL references.

---

## Scalability

| Phase | Papers | Approach |
|-------|--------|----------|
| 1 (now) | up to 500 | Full JSON, client-side Fuse.js |
| 2 | 500-2000 | Split JSON: lightweight index for listing, full content on detail pages |
| 3 | 2000+ | Serverless API + database, server-side search |

---

## Implementation Steps

1. Create evidence.schema.ts with Zod schemas (paper + topic) -- done
2. Create taxonomy.ts with bilingual enum labels -- done
3. Create evidence-loader.ts (load + validate) -- done
4. Create topics.json with initial topic definitions (5 topics) -- done
5. Create evidence.json with 10 seed papers -- done
6. Install Preact + Fuse.js, update astro.config.mjs -- done
7. Add evidence translation keys to i18n/ui.ts -- done
8. Build static components: EvidenceBadge, RelevanceScore, EvidenceCard, TopicCard -- done
9. Build EvidencePaper.astro layout with print styles -- done
10. Build topic grid page, topic detail page, browse page, paper detail page -- done
11. Build EvidenceSearch.tsx Preact island -- done
12. Add Evidence Portal to navigation -- done
13. Build EvidenceBriefBuilder.tsx (Build a Brief tool) -- done
14. Build brief pages (/en/evidence/brief, /ne/evidence/brief) -- done
15. Add Build a Brief CTA to evidence portal index pages -- done
16. Add print styles for brief PDF export -- done
17. Test everything -- done (77 pages build successfully)
18. Create pipeline scripts (later session) -- not started
