# Plan: Website

## Goal
Build the Nepal Health Policy Lab website -- bilingual, rigorous, accessible.

## Current Status
In progress -- initial build session.

## Priorities (ordered)

1. Home page (en + ne) -- in progress
2. About page with team members (en + ne) -- not started
3. Blog infrastructure (content collection, listing, post template) -- not started
4. Subscribe page (Substack embed) -- not started
5. Digest archive page -- not started
6. Evidence portal -- planned, not started (see architecture below)

## Evidence Portal Architecture

The evidence portal is deferred but architecturally planned:

- **Data**: Static JSON dataset (`src/data/evidence.json`) of parsed papers
- **Fields per entry**: title, authors, year, journal, policy domain, intervention type, study design, evidence strength, country, Nepal relevance score, contextualisation note, URL
- **Search**: Client-side via Astro island (React/Svelte) with Fuse.js
- **Filters**: policy domain, study design, evidence strength, country
- **Routes**: `/en/evidence`, `/ne/evidence`
- **Future**: Migrate to API/database if dataset outgrows client-side
- **Data pipeline**: AI-assisted parsing (Claude API) is a separate project -- feeds data into this portal

## Decisions & Reasoning

- Astro chosen for built-in i18n, content collections, islands architecture
- Directory-based i18n (`/en/`, `/ne/`) for clean URLs and SEO
- Content as Markdown in repo (no CMS yet -- add later if non-technical contributors need it)
- Blog posts linked across languages via `translationSlug` in frontmatter

## Open Questions

- Substack account URL for newsletter embed?
- Any specific design references or visual inspirations?
- Nepali translations for initial UI strings?
