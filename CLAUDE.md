# CLAUDE.md -- Nepal Health Policy Lab

This file governs every Claude Code session on this project. Read it fully before doing anything.

## Project Identity

- **Name**: Nepal Health Policy Lab (NHPL)
- **Parent Organisation**: Policy Evidence and Research Lab (PERL) — NHPL is an initiative under PERL
- **Domain**: nepalhealthpolicylab.org
- **Repo**: https://github.com/ser1c/nhpl.git
- **Mission**: Making rigorous global health evidence accessible and actionable for Nepal's policymakers, practitioners, and public
- **Languages**: English (en) and Nepali (ne) -- all content is bilingual
- **Proposal**: `proposal.tex` is the founding document. It is a living document and will evolve. Treat it as best-available direction, not final spec.

## Team (as of 2026-04-07)

| Name | Role | Background |
|------|------|------------|
| Sabin Subedi | Co-founder | PhD candidate, Economics, University of Strathclyde |
| Mukesh Adhikari | Co-founder | PhD (Health Policy & Management, UNC Gillings), MPH, MPA |
| Sadiksha Sharma | Field Coordinator & Policy Translation Lead | Masters in Economics student, Tribhuvan University |
| Prashant Bhandari | Research Fellow | PhD candidate, Economics, University of Pittsburgh |
| Ayushi Bista | GEDSI Lead & Head of Communications | Masters in Applied Gender Studies (Research Methods) |
| Suresh Tinkari | Advisor | IT Manager, Health Insurance Board of Nepal |

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
5. If `_sessions/` is empty or missing, do NOT assume it is the first session — `_sessions/` (and `_plans/`, `_papers/`, etc.) are **gitignored / local-only** and do not sync between machines (see "Working Across Machines"). It may just be that the logs live on another machine. State the ambiguity ("no session logs on *this* machine — either the first session, or logs are local to another machine") and proceed with whatever plans/tracked files are present.

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
- **RAG grounding**: `src/data/nepal-context.md` — a verified, sourced Nepal health-system knowledge base. The pipeline grounds ALL Nepal contextualisation in it, not in LLM parametric memory. (Contains an INTERNAL/not-for-circulation section — never surface it in public paper summaries.)
- **Interactive search**: Preact island with Fuse.js fuzzy search, filters (policy domain, study design, evidence strength), sorting
- **Paper 1-pagers**: Structured summaries with "What Was Studied", "What They Found", "What This Means for Nepal"
- **Build a Brief**: Interactive tool where users select topic + countries to generate a custom evidence report with PDF export
- **PDF export**: Browser print with custom print styles (branded header/footer, forced colors)
- **No runtime AI costs**: Everything is static, pre-computed at build time
- **Verification workflow**: Two fields track verification. `status` gates *rendering* — **only `status: 'verified'` entries render** (the loader filters `status === 'verified'`). `verifiedBy` (+ `verifiedDate`, `reviewers`) records the *human reviewer* — a genuinely reviewed entry has a **non-null `verifiedBy`**; provisional entries keep it `null`. **Current state (2026-07-10):** the 30 pipeline papers were promoted to `status: 'verified'` (with a `team-review-pending` tag, `verifiedBy: null`) so the team can review them on the *live* site — published-for-review, **not yet human-verified**. Only the MICS paper (`verifiedBy: "sabin-subedi"`) is truly verified. As reviewers sign off, set `verifiedBy`/`verifiedDate`/`reviewers` and drop the tag.
- **Multi-agent pipeline** (BUILT — v2.0): 5-pass pipeline (Pass 0–4) run per-paper by subagents via the `process-paper` skill (`.claude/commands/process-paper.md`); metadata helpers in `scripts/` (fetch-paper.ts, validate-entry.ts, lib/ for CrossRef / Semantic Scholar / Unpaywall). Local PDFs live in `_papers/` (gitignored).

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
│   │   ├── evidence.json             # Paper dataset (31 verified-status: 1 human-verified + 30 provisional/team-review-pending)
│   │   ├── topics.json               # 10 topic definitions
│   │   ├── nepal-context.md          # RAG knowledge base (verified Nepal health-system facts)
│   │   ├── evidence.schema.ts        # Zod schemas + TypeScript types
│   │   ├── taxonomy.ts               # Bilingual display labels
│   │   └── evidence-loader.ts        # Load + validate at build time (filters to verified)
│   ├── content/           # Markdown content collections (blog/, digest/)
│   ├── i18n/              # Translation strings and helpers
│   └── styles/            # Global CSS (includes print styles)
├── public/                # Static assets
│   └── team/              # Team photos (sabin.jpg, mukesh.jpg, suresh.jpg)
└── .github/workflows/     # GitHub Actions deploy
```

## Working Across Machines (sync map — READ if a file seems missing)

This repo is edited from more than one machine. **Only Git-tracked files sync via GitHub.** Everything in `.gitignore` lives **only on the machine where it was created**. So if a file/folder below is absent, it is almost certainly **local to another machine — not lost, not broken, not "never existed."** Say that to the user instead of recreating it from scratch.

**Tracked in Git (present on every clone):**
- `src/**` — site source (layouts, components, pages, i18n, styles)
- `src/data/**` — `evidence.json`, `topics.json`, **`nepal-context.md` (the RAG — now tracked & synced)**, `evidence.schema.ts`, `evidence-loader.ts`, `taxonomy.ts`
- `scripts/**` — pipeline helpers + `paper-queue.md`
- `.claude/commands/**` (e.g. `process-paper.md`), `CLAUDE.md`, `public/**`, `.github/workflows/**`, config files
- `_plans/methodology-draft.md` — tracked (added before the `_plans/` ignore rule)

**Local-only (gitignored — do NOT sync; expect ABSENT on another machine):**
- `_papers/` — downloaded source PDFs (`author-year.pdf`). Large/copyright; never committed. A paper missing here lives on the machine that downloaded it.
- `_sessions/` — session logs. The Startup Ritual reads these, so **on a machine that didn't write them `_sessions/` is empty** — expected (see Ritual step 5).
- `_plans/` — planning docs **except** `methodology-draft.md` (which is tracked).
- `proposal.tex`, `prompt.md`, `NHPL_Meeting_Agenda*`, `methodology-overview-for-feedback.pdf`, `_drafts/` — founding/internal docs.
- `.claude/worktrees/` — Claude Code scratch worktrees.
- `node_modules/`, `dist/`, `.astro/`, `.DS_Store` — regenerable (`npm install`, `npm run build`).

**To move a local-only file to another machine:** copy it manually (it won't come via `git pull`), or — once the repo is private (GitHub Pro) — un-ignore and commit it. Until then, treat gitignored paths as machine-specific.
