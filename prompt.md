# Claude Code Prompt — Nepal Health Policy Lab Website

---

## Context

You are helping build the website and working infrastructure for **Nepal Health Policy Lab** (nepalhealthpolicylab.org) — a health policy research initiative founded by two health economists with the goal of making rigorous global health evidence accessible and actionable for Nepal's policymakers, practitioners, and public.

There is a founding proposal document in this folder. Read it fully before doing anything else. It describes the organisation's mission, team, content products, and strategy.

**Important: this proposal is a living document, not a finished specification.** It represents the founding team's current thinking, but it is actively being shared with collaborators for feedback and will evolve. Decisions recorded in it may change. When you read it, treat it as the best available understanding of the organisation's direction — not as a final brief.

Because the proposal is in progress, build for flexibility. Avoid hardcoding assumptions that would be painful to undo if the team's thinking shifts. Whenever you notice a tension between something in the proposal and a decision you are about to make, flag it rather than silently resolving it. As the proposal is updated across sessions, the website and working environment should be able to evolve with it cleanly.

This is not just a website build. You are setting up the full working environment for a small, distributed research team — including the website, content infrastructure, and a session management system that keeps the team's work coherent across time and contributors.

---

## What to Build

### 1. The Website

Build a website for Nepal Health Policy Lab. Before writing a single line of code, think carefully about what this organisation is, who visits the site, and what they need to find. Read the proposal. Make design and architecture decisions that reflect the organisation's identity — rigorous, Nepal-rooted, accessible, and bilingual (English and Nepali).

The site will eventually need to support:
- A blog (bilingual, authored posts)
- A policy digest
- An evidence portal (searchable database of research papers)
- An about/team page
- A way for people to subscribe to the digest

Do not over-build on day one. Think carefully about what needs to exist now versus what can be added later. Prioritise a strong foundation.

---

### 2. CLAUDE.md — The Most Important File

Create a `CLAUDE.md` file at the root of the project. This file is the operating brain of every Claude Code session on this project.

It must define a **startup ritual** — a specific sequence of steps Claude performs at the beginning of every single session, without exception, before doing any work. The ritual should:

- Read the most recent session log to understand what was last worked on, what decisions were made, and what was left unfinished
- Read the current plans folder to understand what the team's intentions and priorities are
- Synthesise both into a clear picture of: where we are, what we committed to, and what this session should focus on
- Surface any unresolved questions or blockers that need to be addressed

The CLAUDE.md should also define an **end-of-session ritual** — steps Claude must take before closing any session:
- Write a session log entry: what was done, what decisions were made, what changed, what is incomplete, and any notes for the next session
- Update the plans folder if priorities or intentions have shifted during the session
- Never end a session without completing this

The CLAUDE.md should be written as a living document — clear enough that any version of Claude, starting fresh with no memory of previous sessions, can pick up exactly where the last session left off.

---

### 3. Folder Structure

Set up a `_sessions/` folder and a `_plans/` folder at the root of the project.

**`_sessions/`** — one log file per working session. Each log should capture enough context that it functions as institutional memory. Define a clear, consistent format for these logs so they are easy to read and easy for Claude to parse programmatically.

**`_plans/`** — living documents that capture what the team intends to build, in what order, and why. These are not rigid specifications — they are shared understanding. They should be easy to update as thinking evolves.

Think carefully about how these two folders interact. The session logs are the history; the plans are the intention. The startup ritual brings them together.

---

## How to Work

- Read the proposal document first. Then think. Then plan. Then build.
- Ask clarifying questions if anything about the organisation's needs is unclear before making significant architectural decisions.
- Document your reasoning. When you make a design or technical decision, note why in the session log.
- This project will be worked on over many sessions, by a small team, across time zones. Build for that reality.

---

## What Not to Do

- Do not make the website generic. It should feel like it belongs to this specific organisation.
- Do not over-engineer. This is an early-stage initiative with a small team.
- Do not skip the CLAUDE.md setup. It is the foundation everything else depends on.
- Do not end a session without writing the session log.