# UX/UI Implementation Brief: Nepal Health Policy Lab

**Date**: 2026-03-08
**Based on**: Six-agent comprehensive UX/UI evaluation
**Purpose**: Prioritised, implementation-ready brief for all UX, colour, and UI changes

---

## Section 1 -- UX Changes

Ordered by impact. Each item is marked with a priority tier.

### 1.1 Fix or replace the dead Subscribe/Substack link -- IMPLEMENT IMMEDIATELY

**What**: The "Subscribe on Substack" button on `/en/subscribe` and `/ne/subscribe` has `href="#"`. The `NewsletterSignup.astro` component links to the Subscribe page, which itself is a dead end. The entire email capture funnel is non-functional.

**Why**: There is no mechanism to capture a visitor's email. Every visit is a one-time event with no path to re-engagement. Both agents agree this is the single most important fix.

**Implementation**: Choose one of:
- (a) Set up Substack and insert the real URL.
- (b) Add a simple email capture form using Formspree, Google Forms embed, or similar. Embed it directly in `NewsletterSignup.astro` and on the Subscribe page.
- (c) As an absolute minimum stopgap, replace `href="#"` with `mailto:info@nepalhealthpolicylab.org` with a subject line pre-filled.

**Constraint**: Option (b) is recommended. It works without third-party accounts and can be swapped for Substack later. Do not leave `href="#"` live.

### 1.2 Remove Blog and Digest from the main navigation -- IMPLEMENT IMMEDIATELY

**What**: Remove the `nav.blog` and `nav.digest` entries from the `navItems` array in `src/components/Header.astro`. Also remove the Blog and Digest links from the Footer's "Quick Links" section. Also remove the "What We Offer" cards linking to Blog and Digest on the home page (see 1.5 below).

**Why**: Two of six nav items lead to empty placeholder pages. For a target audience of government officials who judge credibility instantly, this makes the site look unfinished. Both agents agree this is critical. The fix is a 2-line change in `Header.astro`.

**Constraint**: Keep the pages themselves accessible via direct URL so they are ready when content launches. Only remove the navigation links.

**Implementation in `Header.astro`**: Change the `navItems` array to:
```typescript
const navItems = [
  { key: 'nav.home' as const, path: '/' },
  { key: 'nav.evidence' as const, path: '/evidence' },
  { key: 'nav.about' as const, path: '/about' },
  { key: 'nav.subscribe' as const, path: '/subscribe' },
];
```

### 1.3 Add contact information -- IMPLEMENT IMMEDIATELY

**What**: Add a contact email address (`info@nepalhealthpolicylab.org` or a founder's institutional email) to: (a) the About page, near the team bios, and (b) the Footer, in the "Connect" column. Optionally add individual email links for the founders on the About page.

**Why**: The adversarial reviewer upgraded this from Significant to Critical. A government official in Kathmandu who wants to use this resource in a policy process needs to be able to reach a human. Currently the only external link in the footer is GitHub, which is meaningless to policymakers. No email, no contact form, no social media link.

**Constraint**: Use an email address that actually works and is monitored. A `mailto:` link is sufficient; a contact form is not necessary.

### 1.4 Reframe the stats block on the home page -- IMPLEMENT SOON

**What**: In `src/pages/en/index.astro` (and the Nepali equivalent), change the stats section. Instead of displaying "10" in `text-4xl font-bold` as a credibility signal, either:
- (a) Reframe: change labels to "10 papers curated so far", "Covering 5 policy areas", "Evidence from N countries" -- use language that positions the numbers as early-stage progress rather than scale claims.
- (b) Reduce visual weight: change from `text-4xl font-bold` to `text-2xl font-semibold` so the numbers do not dominate.

**Why**: Displaying "10" as a hero stat in large bold type draws attention to the small scale of the database. Both agents agree this backfires as a credibility signal.

**Constraint**: Do not remove the stats entirely -- they provide useful context. Reframing is better than removal.

### 1.5 Clean up the "What We Offer" section on the home page -- IMPLEMENT SOON

**What**: The "What We Offer" section contains three cards linking to Evidence Portal, Digest, and Blog. Since Digest and Blog are empty, two of three cards link to empty pages. Either:
- (a) Remove the section entirely. The topic grid in "Explore by Topic" already links to the Evidence Portal.
- (b) Replace it with a single "Featured Evidence" spotlight that shows one compelling paper summary, demonstrating the product's value.

**Why**: Two of three cards in this section are dead links. Combined with the topic grid above it, the section creates redundancy while linking to empty content.

### 1.6 Add a "Share on WhatsApp" button to evidence paper pages -- IMPLEMENT SOON

**What**: On `EvidencePaper.astro`, add a WhatsApp share button next to the existing "Save as PDF" button. Use a pre-formatted share link: `https://wa.me/?text={encodedTitle}%20{encodedURL}`.

**Why**: The adversarial UX reviewer identified this as a high-impact addition specific to the target audience. WhatsApp is the dominant professional communication channel in Nepal's policy ecosystem. Evidence travels via WhatsApp group forwards, not email newsletters. This is trivial to implement (a single `<a>` tag) and directly serves the mission.

### 1.7 Rename "Save as PDF" to "Print / Save as PDF" -- IMPLEMENT SOON

**What**: In `EvidencePaper.astro` and `EvidenceBriefBuilder.tsx`, change the button label from "Save as PDF" to "Print / Save as PDF" (and the Nepali equivalent).

**Why**: The current label implies a file download; the actual behaviour is `window.print()`. The renamed label sets correct expectations. One-minute change.

### 1.8 Fix browse route back-link -- IMPLEMENT SOON

**What**: When viewing a paper via the browse route (`/evidence/browse/[slug]`), the "Back" link currently goes to `/evidence` (the topic grid). It should go to `/evidence/browse` (the search/browse list the user came from).

**Why**: Dropping users at the topic grid when they navigated from the browse list breaks the expected back-navigation flow.

### 1.9 Add a canonical tag to the root page -- CONSIDER FOR LATER

**What**: Add `<link rel="canonical" href="https://nepalhealthpolicylab.org/en/" />` to the `<head>` of `src/pages/index.astro` (the root page), since it duplicates `/en/index.astro`.

**Why**: Prevents Google from indexing two copies of the home page. Minor SEO hygiene.

### 1.10 Add Open Graph / social sharing metadata -- CONSIDER FOR LATER

**What**: Ensure `og:title`, `og:description`, and `og:image` meta tags are present on all pages, especially evidence paper pages. When a policymaker shares a link in WhatsApp or on Twitter/X, a rich preview card should appear.

**Why**: The adversarial UX reviewer flagged this as missing. For content that is meant to be shared among policymakers, social preview cards matter.

### 1.11 Improve the language switcher -- CONSIDER FOR LATER

**What**: Change the language switcher from showing just the other language name ("Nepali" / "English") to a toggle format: `EN | NE` with the current language visually highlighted (bold, different colour, or underlined).

**Why**: The current pattern is ambiguous -- a new visitor may not understand whether "Nepali" means "switch to Nepali" or "currently viewing Nepali". The toggle pattern removes ambiguity.

---

## Section 2 -- Colour System

### Definitive Palette Recommendation

After synthesising both colour reports: keep teal as the primary, darken it for accessibility and authority, and address the amber accent problem. The colour specialist proposed three directions; the adversarial reviewer validated Direction A (Deep Institutional Teal) as the correct foundation but criticised the proposed muted gold accent (#8B7432) as "a dead colour" -- functionally olive-brown, not warm enough for CTAs, not gold enough for cultural resonance.

The recommendation below takes Direction A's teal adjustments and accessibility fixes, but replaces the muted gold with a warmer, more saturated gold that functions as a real accent colour. The alternative -- dropping the accent entirely and running a single-colour teal + grayscale system -- is noted as an open question for the team (see Section 4).

### The Palette

| Role | Hex | Current Hex | Rationale |
|------|-----|-------------|-----------|
| **Primary** | `#0F5B5B` | `#1A6B6B` | Darkened teal. 6.4:1 contrast on white (up from 5.2:1). More authoritative, passes AA comfortably. |
| **Primary Light** | `#E6F0F0` | `#E8F4F4` | Adjusted so that Primary on Primary Light = 5.4:1 (passes AA). Current combo fails at 4.4:1. |
| **Primary Dark** | `#0A4040` | `#115454` | Hover states, footer accents. 10.6:1 on white. |
| **Accent** | `#A37B1C` | `#C4841D` | Warm gold. Darker than current amber so white text passes AA (4.5:1). Avoids orange political proximity. Culturally resonant with gold/knowledge associations. |
| **Accent Light** | `#FAF6EB` | `#FFF8ED` | Warm section backgrounds (newsletter CTA). |
| **Accent Dark** | `#7D5E15` | `#9A6815` | Hover state. 6.3:1 on white. |
| **Background** | `#FAFAF8` | `#FAFAF8` | No change. Works well. |
| **Background Alt** | `#F5F3F0` | `#F5F3F0` | No change. |
| **Border** | `#E5E3DF` | `#E5E3DF` | No change. |
| **Text Primary** | `#1C1C1C` | `#1C1C1C` | No change. 16.6:1 on white. |
| **Text Body** | `#4A4A4A` | `#555555` | Slightly darker. 8.6:1 on white. Improves Devanagari readability. |
| **Text Secondary** | `#6B6B6B` | `#888888` | Replaces tertiary gray. 5.0:1 on white -- passes AA. Current #888888 fails at 3.5:1. |
| **Text Tertiary** | `#7D7D7D` | (new) | For captions and truly incidental text only. 4.6:1 on white -- passes AA. |
| **Link** | `#0F5B5B` | `#1A6B6B` | Same as Primary. |
| **Error** | `#B91C1C` | (from Tailwind) | Status only. Not used as accent. |
| **Error Light** | `#FEE2E2` | (from Tailwind) | Error backgrounds. |
| **Success** | `#166534` | (from Tailwind) | Status only. |
| **Success Light** | `#DCFCE7` | (from Tailwind) | Success backgrounds. |
| **Warning** | `#92400E` | (from Tailwind) | Status only. Explicitly distinct from accent colour. This resolves the current problem where amber serves as both CTA accent and warning colour. |
| **Warning Light** | `#FEF3C7` | (from Tailwind) | Warning backgrounds. |

### Implementation in `global.css`

Replace the current `@theme` block with:

```css
@theme {
  /* Primary */
  --color-teal: #0F5B5B;
  --color-teal-light: #E6F0F0;
  --color-teal-dark: #0A4040;

  /* Accent */
  --color-amber: #A37B1C;
  --color-amber-light: #FAF6EB;
  --color-amber-dark: #7D5E15;

  /* Surfaces */
  --color-surface: #FAFAF8;
  --color-surface-alt: #F5F3F0;
  --color-border: #E5E3DF;

  /* Text */
  --color-gray-dark: #1C1C1C;
  --color-gray-mid: #4A4A4A;
  --color-gray-light: #CCCCCC;
  --color-gray-tertiary: #7D7D7D;

  /* Status colors (distinct from accent) */
  --color-green-50: #DCFCE7;
  --color-green-800: #166534;
  --color-amber-50: #FEF3C7;
  --color-amber-800: #92400E;
  --color-red-50: #FEE2E2;
  --color-red-800: #991B1B;

  --font-sans: "Inter", "Noto Sans Devanagari", system-ui, sans-serif;
}
```

### Colour Usage Discipline

Both agents agree that the biggest colour hierarchy problem is teal overload -- teal is applied to too many elements, diluting its ability to direct attention. When updating colours:

- **Use teal for**: brand name, primary CTA buttons (filled), active navigation state, text links, and the evidence paper left-border accent. That is all.
- **Use accent (gold) for**: secondary CTAs ("Build a Brief" outline button), newsletter signup section background, and the newsletter CTA button.
- **Use grayscale for**: stat numbers, step-number circles, topic card paper counts, section labels, and all other decorative elements currently in teal. This single change restores teal's ability to signal "click here."
- **Use status colours (green/amber/red) for**: evidence strength badges and verification status only. Never use the accent colour for warnings.

### Print Styles

Update all hardcoded colour values in the print styles section of `global.css` to use the new hex values. Current print styles reference `#1A6B6B`, `#555`, and `#E8F4F4` directly. Change these to match the new palette: `#0F5B5B`, `#4A4A4A`, and `#E6F0F0`.

---

## Section 3 -- UI Changes

Ordered by effort-to-impact ratio (lowest effort, highest impact first).

### 3.1 Reset letter-spacing for Nepali (Devanagari) -- IMPLEMENT IMMEDIATELY

**What**: Add CSS rules to `global.css` to disable negative letter-spacing and wide tracking for Nepali text.

**Where**: `src/styles/global.css`, after the existing `.prose` rules.

**Add this CSS**:
```css
/* Devanagari script spacing adjustments */
html[lang="ne"] h1,
html[lang="ne"] h2,
html[lang="ne"] h3,
html[lang="ne"] .tracking-tight {
  letter-spacing: normal;
}

html[lang="ne"] .tracking-widest {
  letter-spacing: 0.05em;
}
```

**Why**: `letter-spacing: -0.025em` (`tracking-tight`) can cause Devanagari conjunct characters to visually merge. `tracking-widest` (0.1em) adds excessive spacing between Devanagari characters (which have no uppercase). Both agents validate this as a real readability bug with a trivial fix.

**Effort**: 5 minutes.

### 3.2 Standardise metadata separators -- IMPLEMENT IMMEDIATELY

**What**: In `src/components/EvidenceCard.astro`, change the `|` separator between author, year, and journal to `&middot;` (middle dot). The Preact `EvidenceSearch.tsx` already uses `&middot;`.

**Where**: `src/components/EvidenceCard.astro` -- find `{authorDisplay} | {paper.year} | {paper.journal}` and replace `|` with `&middot;`.

**Effort**: 2 minutes.

### 3.3 Standardise gap in brief builder topic grid -- IMPLEMENT IMMEDIATELY

**What**: In `src/components/EvidenceBriefBuilder.tsx`, change `gap-3` to `gap-4` in the Step 1 topic card grid to match the site-wide standard.

**Effort**: 1 minute.

### 3.4 Add Escape key handler to mobile menu -- IMPLEMENT IMMEDIATELY

**What**: In `src/components/Header.astro`, add a `keydown` listener so pressing Escape closes the mobile menu.

**Where**: In the `<script>` block at the bottom of `Header.astro`, after the existing click handler, add:

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
  }
});
```

**Effort**: 3 minutes.

### 3.5 Responsive card padding -- IMPLEMENT IMMEDIATELY

**What**: Change card padding from `p-6` to `p-4 md:p-6` on `BlogCard.astro` and `EvidenceCard.astro`. On a 320px screen with `px-4` page padding and `p-6` card padding, content width is only 240px.

**Effort**: 5 minutes (two files, one class change each).

### 3.6 Scroll to top on brief builder step change -- IMPLEMENT IMMEDIATELY

**What**: In `src/components/EvidenceBriefBuilder.tsx`, add `window.scrollTo(0, 0)` at the beginning of each step-change handler (when moving from Step 1 to Step 2, Step 2 to Step 3, and when starting over). Without this, users who scroll down in one step land mid-page in the next step.

**Effort**: 5 minutes (add one line in each step transition).

### 3.7 Add `aria-pressed` to toggle buttons -- IMPLEMENT IMMEDIATELY

**What**: In `EvidenceSearch.tsx`, add `aria-pressed={selectedDomains.includes(d)}` to policy domain filter buttons and `aria-pressed={selectedStrength === key}` to evidence strength buttons. In `EvidenceBriefBuilder.tsx`, add `aria-pressed` to country selection buttons.

**Why**: Selected state is currently communicated only through visual styling. Screen reader users get no indication of which filters are active.

**Effort**: 15 minutes.

### 3.8 Replace default Tailwind colours in Preact components with theme tokens -- IMPLEMENT IMMEDIATELY

**What**: In `EvidenceSearch.tsx` and `EvidenceBriefBuilder.tsx`, replace all default Tailwind colour classes with the custom theme tokens defined in `global.css`. Both agents identify this as the most pervasive visual inconsistency on the site.

**Mapping**:
| Default Tailwind class | Replace with |
|------------------------|-------------|
| `text-gray-800` | `text-gray-dark` |
| `text-gray-600` | `text-gray-mid` |
| `text-gray-500` | `text-gray-tertiary` |
| `text-gray-400` | `text-gray-tertiary` |
| `border-gray-200` | `border-border` |
| `border-gray-300` | `border-border` |
| `bg-gray-50` | `bg-surface-alt` |
| `bg-gray-100` | `bg-surface-alt` |
| `bg-green-100` | `bg-green-50` |
| `bg-amber-100` | `bg-amber-50` |
| `bg-red-100` | `bg-red-50` |
| `text-green-800` | `text-green-800` (already a theme token) |
| `text-amber-800` | `text-amber-800` (already a theme token) |
| `text-red-800` | `text-red-800` (already a theme token) |
| `text-red-600` | `text-red-800` |

**Effort**: 30-45 minutes (systematic find-and-replace + visual verification).

### 3.9 Unify Preact and Astro evidence card styling -- IMPLEMENT IMMEDIATELY

**What**: The search result cards in `EvidenceSearch.tsx` (lines 228-266) use different styling from `EvidenceCard.astro`. Make them match:

| Property | Current (Preact) | Change to (match Astro) |
|----------|-----------------|------------------------|
| Wrapper | `rounded-lg p-5 border-gray-200` | `rounded-xl p-4 md:p-6 border-border border-l-4 border-l-teal` |
| Title | `font-bold text-sm text-gray-800` | `font-semibold text-base text-gray-dark` |

**Why**: Users navigating between the topic detail page (Astro cards) and the browse/search page (Preact cards) see two different card designs for the same content. Both agents identify this as the most user-visible inconsistency.

**Effort**: 20 minutes.

### 3.10 Promote key body text from `text-sm` to `text-base` -- IMPLEMENT SOON

**What**: Selectively change `text-sm` (14px) to `text-base` (16px) on content that functions as body text, not metadata. Specifically:
- "How It Works" step descriptions in `en/index.astro` and `ne/index.astro`
- "What We Offer" card descriptions (if section is retained)
- Team member bios on the About page

**Do NOT change**: card descriptions (which have `line-clamp-2` and serve as previews), metadata (dates, author names, paper counts), or search result metadata.

**Why**: 14px is too small for body-equivalent content on the potentially low-quality screens used in government offices. The adversarial reviewer agrees this is valid but cautions against promoting everything -- only promote content that users are expected to read, not scan.

**Effort**: 30 minutes.

### 3.11 Standardise border-radius -- IMPLEMENT SOON

**What**: Apply a consistent border-radius system:
- Cards (blog, evidence, topic): `rounded-xl`
- Buttons and inputs: `rounded-lg`
- Badges and tags: `rounded-md`
- Pills, avatars, step numbers: `rounded-full`

The main fix is in `EvidenceSearch.tsx` where result cards use `rounded-lg` instead of `rounded-xl`. This is bundled with item 3.9.

### 3.12 Add X icon to mobile hamburger when open -- CONSIDER FOR LATER

**What**: In `Header.astro`, toggle the hamburger icon path between the three-bar icon and an X icon when the menu is open. Change the `<path>` element's `d` attribute in the click handler:
- Closed: `M4 6h16M4 12h16M4 18h16`
- Open: `M6 18L18 6M6 6l12 12`

**Effort**: 10 minutes.

### 3.13 Add filter panel animation to EvidenceSearch -- CONSIDER FOR LATER

**What**: Add a CSS transition when the filter panel appears/disappears. The adversarial reviewer downgraded this from High, noting that instant show/hide is standard behaviour (Amazon, Google Scholar, PubMed all do it). If implemented, use a simple `max-height` transition with `overflow-hidden`.

### 3.14 Add sticky controls or back-to-top on long generated briefs -- CONSIDER FOR LATER

**What**: In the EvidenceBriefBuilder Step 3 output, add a floating "Back to top" button that appears when the user scrolls down. The "Start Over" and "Save as PDF" buttons are currently at the top only.

**Why**: Defer until the dataset grows and briefs can contain more than a handful of papers.

---

## Section 4 -- Open Questions

These are unresolved tensions between agents that the founding team needs to decide.

### 4.1 Single-colour system vs. two-colour system

The colour adversarial reviewer suggests the team consider dropping the accent colour entirely and running teal + grayscale only: "A single-colour system would be more distinctive than any two-colour combination, would print cleanly, and would eliminate the hierarchy confusion." The specialist recommends keeping a warm accent for CTAs and the newsletter section. Both positions have merit.

**Decision needed**: Should the site use deep teal + warm gold (as specified in Section 2), or deep teal + grayscale only? The single-colour approach is simpler and more distinctive but may make CTAs less visually prominent.

### 4.2 Search bar on the Evidence Portal index page

Agent 1 recommends adding a search bar above the topic grid on `/evidence/index.astro`. Agent 2 rejects this, arguing it undermines the topic-first navigation that both agents praise: "If topic-first is the right mental model, then adding search to the topic grid page undermines that model." Agent 2 suggests revisiting when the database reaches 50+ papers.

**Decision needed**: Add search to the evidence index now, or wait until the dataset grows?

### 4.3 Breadcrumbs on evidence pages

Agent 1 recommends breadcrumbs on all evidence pages below the index. Agent 2 rejects this as premature: with 5 topics and 2-4 papers each, "a user is never going to get lost." The existing "Back to [Topic]" links provide sufficient context.

**Decision needed**: Add breadcrumbs now, or defer until the evidence database grows significantly?

### 4.4 Nepali line-height adjustments

Agent 5 recommends adding `html[lang="ne"] { line-height: 1.8; }` globally. Agent 6 warns this will cascade into every component and break card heights, badge spacing, navigation items, and the header: "a full-day QA exercise minimum." Agent 6 notes that Noto Sans Devanagari was specifically designed to harmonise at standard line-heights.

**Decision needed**: Add Nepali-specific line-height overrides now (with the QA cost), or wait for feedback from Nepali-speaking users?

### 4.5 "AI-Processed" label framing

Agent 1 suggests softening "AI-Processed -- awaiting human review" to "Summary pending expert review." Agent 2 disagrees: the current label builds trust through transparency, and softening it removes useful information. Both have valid points.

**Decision needed**: Keep the current transparent label, or soften it? A middle ground: keep the label but add a brief tooltip or explanation: "This summary was generated by AI and is awaiting review by our research team."

### 4.6 Stats section -- reframe vs. remove

Both agents agree the stats at current scale (10 papers, 5 topics) draw attention to smallness. Agent 1 suggests reframing the language; Agent 2 suggests the numbers themselves could be replaced with qualitative framing. Nobody recommends full removal.

**Decision needed**: What framing feels right? Options: "10 papers curated so far" / "Covering 5 policy areas" / "Evidence from N countries" / or reduce the visual weight (smaller font size, no bold).

### 4.7 Home page structure -- merge or keep "Explore by Topic" and "What We Offer"

Agent 1 flags these sections as partially redundant (both link to the Evidence Portal). Agent 2 argues they serve different functions (direct action vs. product overview) and removing "What We Offer" would make the page feel thin. However, if Blog and Digest links are removed, "What We Offer" loses two of its three cards.

**Decision needed**: If Blog and Digest are removed from nav, should "What We Offer" be reduced to a single Evidence Portal card, replaced with a featured paper spotlight, or removed entirely?

---

## Section 5 -- What Not to Touch

These elements are working well. Multiple agents explicitly praise them. Do not change them.

### 5.1 Topic-first information architecture
The Evidence Portal's hierarchy (Topics > Topic Detail > Paper 1-Pager) matches how policymakers think. Both agents praise this. Do not dilute it with competing navigation patterns.

### 5.2 The evidence 1-pager structure
The three-section format ("What Was Studied" / "What They Found" / "What This Means for Nepal") with its visual hierarchy (plain > left-bordered > highlighted background) is well-conceived and serves busy readers. The Nepal contextualisation section with its teal-light background is the most actionable content and is appropriately the most visually prominent.

### 5.3 The Build a Brief tool
This is a genuine differentiator that no comparable initiative offers. The 3-step wizard pattern is appropriate. The preview count in Step 2 is excellent feedback. The print styling is thoughtful.

### 5.4 Font choices
Inter + Noto Sans Devanagari is the correct combination. Both render well at all sizes. The Google Fonts loading with `display=swap` is correct.

### 5.5 The reading experience for long-form content
Blog posts at `max-w-3xl` with `line-height: 1.75` and evidence papers at the same width provide comfortable reading. Line length is well within the optimal 65-85 character range.

### 5.6 The two-tier max-width system
`max-w-6xl` (1152px) for page containers and `max-w-3xl` (768px) for reading content is a sound approach. Do not change the container widths.

### 5.7 Bilingual implementation
The i18n system is thorough: mirrored routes, translated UI strings, correct `<html lang>` attributes, and a visible language switcher. The Nepali home page is fully translated. Accepting English bibliographic data is the correct decision (standard in academic contexts globally).

### 5.8 The hero CTA pairing
"Explore Evidence" (primary/filled) and "Build a Brief" (secondary/outline) correctly represent the two most valuable actions. The visual weight hierarchy is right.

### 5.9 Mobile responsiveness
The responsive layout is well-implemented: single-column on mobile, appropriate grid breakpoints, adequate mobile menu touch targets (`py-3`), and correct grid stacking patterns.

### 5.10 Accessibility foundations
Skip-to-content link, proper ARIA attributes on the mobile menu, `aria-hidden` with `sr-only` text on decorative elements, and focus-visible styles are all well-implemented.
