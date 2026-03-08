# CLAUDE.md -- Nepal Health Policy Lab

This file governs every Claude Code session on this project. Read it fully before doing anything.

## Project Identity

- **Name**: Nepal Health Policy Lab
- **Domain**: nepalhealthpolicylab.org
- **Repo**: https://github.com/ser1c/nhpl.git
- **Mission**: Making rigorous global health evidence accessible and actionable for Nepal's policymakers, practitioners, and public
- **Languages**: English (en) and Nepali (ne) -- all content is bilingual
- **Proposal**: `proposal.tex` is the founding document. It is a living document and will evolve. Treat it as best-available direction, not final spec.

## Brand

- Teal: `#0F5B5B`, Light Teal: `#E6F0F0`, Dark Teal: `#0A4040`
- Amber: `#A37B1C`, Light Amber: `#FAF6EB`, Dark Amber: `#7D5E15`
- Surface: `#FAFAF8`, Surface Alt: `#F5F3F0`
- Border: `#E5E3DF`
- Dark Gray: `#1C1C1C`, Mid Gray: `#4A4A4A`, Tertiary: `#7D7D7D`, Light Gray: `#CCCCCC`
- Fonts: Inter (Latin), Noto Sans Devanagari (Nepali) via Google Fonts

## Tech Stack

- Astro (static site generator)
- Tailwind CSS v4
- Preact (lightweight islands for interactive components)
- Fuse.js (client-side fuzzy search)
- GitHub Pages (hosting)
- Markdown content collections with Zod validation
- TypeScript

## Startup Ritual (MANDATORY -- do this before ANY work)

1. Read the most recent file in `_sessions/` (sort by filename to find latest)
2. Read all files in `_plans/`
3. Synthesise both into a clear statement of:
   - Where we are (what was last done)
   - What we committed to (current plans and priorities)
   - What this session should focus on
4. Surface any unresolved questions, blockers, or decisions needed
5. If no session logs exist, state that this is the first session and proceed with the plans

## End-of-Session Ritual (MANDATORY -- do this before closing)

1. Write a session log to `_sessions/YYYY-MM-DD-NNN.md` using the format below
2. Review `_plans/` -- update any plan files if priorities or intentions shifted during the session
3. Never end a session without completing this ritual

## Session Log Format

Filename: `YYYY-MM-DD-NNN.md` (NNN = zero-padded sequence number for multiple sessions on same day)

```markdown
# Session Log: YYYY-MM-DD-NNN

## Session Info
- **Date**: YYYY-MM-DD
- **Focus**: [1-line summary of what the session aimed to accomplish]
- **Outcome**: [completed | partial | blocked]

## What Was Done
- [Concrete list of what was accomplished]

## Decisions Made
- [Any technical, design, or strategic decisions, with brief reasoning]

## What Changed
- [Files created, modified, or deleted]

## Open Questions
- [Anything unresolved that needs human or future-session input]

## Next Session Should
- [Specific actionable items for the next session to pick up]
```

## Key Conventions

- Blog posts have named authors -- this is deliberate (contributors build a public profile)
- Content lives on our own domain; Substack is distribution only
- The org name is stored in this file and in astro config -- if it changes, update both
- When the proposal and an implementation decision conflict, flag it rather than silently resolving
- Do not over-engineer. This is an early-stage initiative with a small team.
- Prefer editing existing files over creating new ones

## Evidence Portal

The evidence portal is the flagship feature. Architecture details in `_plans/evidence-portal.md`.

- **Topic-first navigation**: policymakers browse by topic (Health Financing, Maternal & Child Health, etc.), not by paper
- **Data layer**: Static JSON (`src/data/evidence.json`, `src/data/topics.json`) validated by Zod schemas (`src/data/evidence.schema.ts`)
- **Interactive search**: Preact island with Fuse.js fuzzy search, filters (policy domain, study design, evidence strength), sorting
- **Paper 1-pagers**: Structured summaries with "What Was Studied", "What They Found", "What This Means for Nepal"
- **Build a Brief**: Interactive tool where users select topic + countries to generate a custom evidence report with PDF export
- **PDF export**: Browser print with custom print styles (branded header/footer, forced colors)
- **No runtime AI costs**: Everything is static, pre-computed at build time
- **Verification workflow**: Papers marked as `auto-processed` or `verified` by humans
- **Multi-agent pipeline**: 4-pass local pipeline (in `scripts/`, not yet built) for processing new papers

## File Structure

```
nhpl_website/
├── CLAUDE.md              # This file
├── prompt.md              # Original build prompt
├── proposal.tex           # Founding proposal (living document)
├── _sessions/             # Session logs
├── _plans/                # Living planning documents
├── src/
│   ├── layouts/           # Astro layouts (Base, Page, BlogPost, EvidencePaper)
│   ├── components/        # Reusable components
│   │   ├── EvidenceSearch.tsx        # Preact island: search + filter
│   │   ├── EvidenceBriefBuilder.tsx   # Preact island: build-a-brief tool
│   │   ├── EvidenceCard.astro        # Paper card for listings
│   │   ├── EvidenceBadge.astro       # Reusable badge component
│   │   ├── RelevanceScore.astro      # 1-5 dot Nepal relevance indicator
│   │   └── TopicCard.astro           # Topic grid card
│   ├── pages/             # Route pages (en/, ne/)
│   │   └── [lang]/evidence/
│   │       ├── index.astro           # Topic grid + Build a Brief CTA
│   │       ├── browse.astro          # Flat searchable list
│   │       ├── brief.astro           # Build a Brief tool
│   │       ├── [topic]/index.astro   # Topic detail page
│   │       ├── [topic]/[slug].astro  # Paper via topic route
│   │       └── browse/[slug].astro   # Paper via browse route
│   ├── data/              # Evidence portal data layer
│   │   ├── evidence.json             # Paper dataset (10 seed papers)
│   │   ├── topics.json               # 5 topic definitions
│   │   ├── evidence.schema.ts        # Zod schemas + TypeScript types
│   │   ├── taxonomy.ts               # Bilingual display labels
│   │   └── evidence-loader.ts        # Load + validate at build time
│   ├── content/           # Markdown content collections (blog/, digest/)
│   ├── i18n/              # Translation strings and helpers
│   └── styles/            # Global CSS (includes print styles)
├── public/                # Static assets
│   └── team/              # Team photos (sabin.jpg, mukesh.jpg, suresh.jpg)
└── .github/workflows/     # GitHub Actions deploy
```
