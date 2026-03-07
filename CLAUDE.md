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

- Teal: `#1A6B6B`
- Light Teal: `#E8F4F4`
- Dark Gray: `#1C1C1C`
- Mid Gray: `#555555`

## Tech Stack

- Astro (static site generator)
- Tailwind CSS
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

## File Structure

```
nhpl_website/
├── CLAUDE.md              # This file
├── prompt.md              # Original build prompt
├── proposal.tex           # Founding proposal (living document)
├── _sessions/             # Session logs
├── _plans/                # Living planning documents
├── src/
│   ├── layouts/           # Astro layouts (Base, Page, BlogPost)
│   ├── components/        # Reusable components
│   ├── pages/             # Route pages (en/, ne/)
│   ├── content/           # Markdown content collections (blog/, digest/)
│   ├── i18n/              # Translation strings and helpers
│   └── styles/            # Global CSS
├── public/                # Static assets
└── .github/workflows/     # GitHub Actions deploy
```
