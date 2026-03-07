# Plan: Website

## Goal
Build the Nepal Health Policy Lab website -- bilingual, rigorous, accessible.

## Current Status
Core site live at https://nepalhealthpolicylab.org. All base pages and evidence portal built.

## Priorities (ordered)

1. Home page (en + ne) -- done
2. About page with team members (en + ne) -- done
3. Blog infrastructure (content collection, listing, post template) -- done
4. Subscribe page (Substack embed) -- done (placeholder, needs Substack URL)
5. Digest archive page -- done (empty, ready for content)
6. Evidence portal -- done (see `_plans/evidence-portal.md`)
7. Build a Brief tool -- done (interactive topic + country selection, PDF export)
8. Visual polish (typography, favicon, responsive refinement) -- not started
9. Multi-agent paper processing pipeline (`scripts/`) -- not started

## Decisions & Reasoning

- Astro chosen for built-in i18n, content collections, islands architecture
- Directory-based i18n (`/en/`, `/ne/`) for clean URLs and SEO
- Root `/` serves English home page directly (no redirect)
- `redirectToDefaultLocale: false` in astro config
- Content as Markdown in repo (no CMS yet -- add later if non-technical contributors need it)
- Blog posts linked across languages via `translationSlug` in frontmatter
- Preact (3KB) chosen over React for interactive islands -- better for Nepal bandwidth
- PDF export via browser print dialog with custom print CSS (no server needed)

## Open Questions

- Substack account URL for newsletter embed?
- Nepali translations review needed
- When to build the multi-agent pipeline scripts?
