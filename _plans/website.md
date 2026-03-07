# Plan: Website

## Goal
Build the Nepal Health Policy Lab website -- bilingual, rigorous, accessible.

## Current Status
Core site live at https://nepalhealthpolicylab.org. All base pages built and deployed.

## Priorities (ordered)

1. Home page (en + ne) -- done
2. About page with team members (en + ne) -- done
3. Blog infrastructure (content collection, listing, post template) -- done
4. Subscribe page (Substack embed) -- done (placeholder, needs Substack URL)
5. Digest archive page -- done (empty, ready for content)
6. Evidence portal -- next priority (see architecture below)
7. Visual polish (typography, favicon, responsive refinement) -- not started

## Evidence Portal Architecture

The evidence portal is the next major build:

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
- Root `/` serves English home page directly (no redirect)
- `redirectToDefaultLocale: false` in astro config
- Content as Markdown in repo (no CMS yet -- add later if non-technical contributors need it)
- Blog posts linked across languages via `translationSlug` in frontmatter

## Open Questions

- Substack account URL for newsletter embed?
- Any specific design references or visual inspirations?
- Nepali translations review needed
