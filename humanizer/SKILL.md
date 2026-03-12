---
name: humanizer
description: Strip AI writing patterns from text. Checks 24 patterns across 4 categories (structural, lexical, rhetorical, formatting) with academic adaptation. Preserves technical precision and formal register.
argument-hint: "[file path to .tex, .md, or .txt file]"
allowed-tools: ["Read", "Write", "Edit", "Grep", "Glob"]
---

# Humanizer Skill

Invoked with `/humanizer [file]`. Strips AI writing patterns while preserving academic quality.

## Step 1: Read the File

Read the file from `$ARGUMENTS`. Supports `.tex`, `.md`, `.txt`, `.qmd`.

If no argument provided, ask which file to process.

## Step 2: Scan for AI Patterns

Check all 24 patterns across 4 categories:

### Category 1: Structural Tics (6 patterns)

1. **Triplet lists** — "X, Y, and Z" appearing 3+ times per section. Real writing varies list length.
2. **Formulaic transitions** — "Moreover", "Furthermore", "Additionally" as sentence starters. Vary: use "But", "Yet", "Still", or restructure.
3. **Echo conclusions** — final paragraph restates every point made. Cut to 1-2 key takeaways.
4. **Uniform paragraph length** — suspiciously similar lengths throughout. Real writing mixes short punchy paragraphs with longer ones.
5. **Topic sentence + support** — every paragraph has identical structure. Vary: sometimes lead with evidence, sometimes with a question.
6. **Numbered reasoning in prose** — "First... Second... Third..." in running text. Use logical connectors instead, or restructure.

### Category 2: Lexical Tells (6 patterns)

7. **"Delve"** — almost never used by humans in academic writing. Replace with "examine", "investigate", or restructure.
8. **"Landscape"** — as metaphor ("the policy landscape"). Use "context", "setting", or be specific.
9. **"Crucial/pivotal/vital"** — overused intensifiers. Often the sentence is stronger without them.
10. **"Multifaceted"** — AI favorite. Use "complex", or better: be specific about which facets.
11. **"Underscores"** — as verb ("this underscores the importance"). Use "shows", "demonstrates", or restructure.
12. **"Navigate"** — metaphorical ("navigate the challenges"). Use "address", "handle", or be specific.

### Category 3: Rhetorical Patterns (6 patterns)

13. **Excessive hedging** — "it is worth noting", "interestingly", "arguably". Cut or make the claim directly.
14. **Performative enthusiasm** — "fascinating", "remarkable", "exciting". Let the evidence speak.
15. **False balance** — "while X, it is also true that Y" for every claim. Take a position.
16. **Hollow acknowledgment** — "this raises important questions" without answering them. Either answer or cut.
17. **Premature synthesis** — summarizing before enough evidence is presented. Present evidence first.
18. **Universal agreement** — "scholars agree", "it is widely recognized". Cite specific papers instead.

### Category 4: Formatting Tells (6 patterns)

19. **Over-signposting** — "In this section, we will discuss..." Cut; the heading already tells the reader.
20. **Excessive parallelism** — every sentence in a passage has identical structure. Vary deliberately.
21. **Definitional opening** — starting sections with dictionary-style definitions. Start with the research problem instead.
22. **Disclaimer stacking** — multiple caveats before making a point. Make the point, then caveat once.
23. **Summary before content** — "This section covers X, Y, and Z" at the start. Let the content speak.
24. **Colon-list pattern** — "There are three key factors: (1)... (2)... (3)..." Integrate into prose.

## Step 3: Apply Fixes

For each pattern found:
1. Identify the specific instance (quote the text)
2. Rewrite naturally
3. Preserve academic meaning exactly

### Academic Adaptation Rules

- **Preserve** formal structure where genuinely needed (equations, proofs, definitions)
- **Keep** technical terms — never simplify domain vocabulary
- **Maintain** citation density — don't remove citations
- **Vary** sentence structure — mix short and long
- **Allow imperfection** — real writing has slight asymmetries, occasional sentence fragments, unexpected transitions

### Context Awareness

- "Moreover" in a mathematical proof is fine — it's a logical connector there
- "Furthermore" starting every other paragraph is a tell
- "First... Second... Third..." in a numbered list is fine — in running prose it's a tell
- Triplet lists in a conclusion summarizing three findings are fine — everywhere else is suspicious

## Step 4: Report Changes

Present a structured report:

```markdown
## Humanizer Report: [filename]

**Patterns found:** N / 24
**Changes made:** N

| # | Pattern | Category | Location | Original → Replacement |
|---|---------|----------|----------|----------------------|
| 1 | [name] | [category] | [line/section] | "original text" → "replacement text" |
| 2 | ... | ... | ... | ... |
```

## Step 5: Save

Apply changes to the file. The user can review via `git diff`.

If only 2-3 patterns found, note: "Light touch — text is mostly natural."

## Core Principles

1. **Preserve meaning** — content identical, only expression changes
2. **Don't over-correct** — some formal academic patterns are normal and expected
3. **Context-aware** — same word can be fine in one context and a tell in another
4. **Reversible** — user can `git checkout` to undo all changes
5. **Light touch for good writing** — if few patterns found, the text is probably fine
6. **Never touch equations or code** — only modify prose
