# Handoff: CarrierGuard Investor Deck

## Overview
A 14-slide investor pitch deck for **CarrierGuard** (carrier fraud prevention for
freight operators), built on the CarrierGuard design system. This bundle contains
the working HTML/React prototype plus the full design-system token layer it draws
from.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working
prototype that shows the intended look, layout, and behaviour. They are not meant
to be shipped verbatim into a product. The task is to **recreate this deck inside
your target environment** using its established patterns (or, if you are keeping it
as a standalone artifact, the prototype already runs as-is — see "Running" below).

The deck is rendered with React 18 via inline Babel + a small web component
(`deck-stage.js`) that handles slide navigation, scaling, the thumbnail rail, and
print-to-PDF. Each slide is a React function component using **inline styles** that
reference the design-system CSS variables.

## Fidelity
**High-fidelity (hifi).** Final colours, typography, spacing, and layout. Recreate
pixel-for-pixel. All values come from the token files in `tokens/` (see Design
Tokens below).

## Running
Open `CarrierGuard Investor Deck.html` in a browser (served, not file://, because of
the JSX/asset fetches). Arrow keys / clicking the edges navigate. The deck canvas is
a fixed **1280×720** (16:9); `deck-stage.js` scales it to fit the viewport.
`CarrierGuard Investor Deck-print.html` is the same deck wired to auto-open the print
dialog (landscape, one slide per page) for PDF export.

## Brand & Voice (one line each)
- Warm, high-trust, calm. Serious enough for enterprise logistics, never
  "cyber-theatre" / alarmist.
- No emoji. No em-dashes or en-dashes in copy (numeric ranges like `70–80%` are the
  one exception, kept as written).
- Status is communicated with text + tone, never colour alone.

## Design Tokens
From `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`,
`tokens/effects.css`.

**Colour**
- `--cg-background` `#FDFCF9` (warm off-white, default canvas)
- `--cg-primary` `#1C1917` (near-black; type + dark/reversed surfaces)
- `--cg-dark` `#44403C` (secondary dark text)
- `--cg-sage` `#4D7C5F` (the one accent — eyebrows, labels, positive signals)
- `--cg-sage-light` `#D1E8D8` (soft fills, highlight cards)
- `--cg-border` `#E7E5E4` (hairline dividers + card borders)
- `--cg-muted` `#78716C` (body copy) · `--cg-very-muted` `#A8A29E` (footnotes)
- `--cg-white` `#FFFFFF`
- Caution (the only non-positive tone; deliberately a warm amber, never red):
  `--cg-caution` `oklch(0.50 0.085 68)` · `--cg-caution-light` `oklch(0.93 0.035 78)`

**Type** — DM Sans only, weights **300 / 400 / 500** (never 600/700; hierarchy comes
from size + tracking, not weight). Self-hosted in `fonts/` (`DMSans-Variable.woff2`).
- Eyebrows / section labels: 11px, 500, UPPERCASE, letter-spacing 0.1em, sage.
- Body / sublines: 12–13px, 400, `--cg-muted`, line-height 1.6.
- Headlines: 22px / 500. Slide display: up to ~34px / 500 / -0.02em.
- Big editorial figures (`.cg-fig`): 500, letter-spacing -0.03em, tabular-nums.

**Spacing** scale: 4 / 8 / 16 / 24 / 40 / 72.
**Radii**: cards 14–24px (`--radius-md`→`--radius-xl`), pills `--radius-pill` 999px.
**Shadows**: soft + warm, very low alpha (`--shadow-xs`→`--shadow-lg`); cards rest
nearly flat.

## The Logo Mark
A fixed **2×2 grid** of rounded squares: top-left + bottom-right = ink (`--cg-primary`),
top-right + bottom-left = sage. On dark surfaces the ink squares invert to the
off-white (the official reversed treatment). Wordmark is "CarrierGuard" with
"Carrier" at weight 400 and "Guard" at weight 500. See `assets/mark.svg` and the
`Mark`/`Wordmark` components in `deck/kit.jsx`.

## Slides (14, in order)
Each slide is a fixed 1280×720 canvas. Shared chrome: a top eyebrow (sage rule +
label) and a bottom footer (wordmark · section label · page number). Page numbers are
plain numbers (no "/14"); the cover shows "01" and the closing slide has none.

1. **Cover** — dark slide; wordmark, eyebrow "Investor brief", big headline "The trust
   infrastructure logistics has never had", positioning subline, faint four-square
   motif bottom-right.
2. **Market structure** — left-to-right flow: Manufacturer → Freight forwarder (sage)
   → Carrier (caution amber, "Theft risk" badge + warning triangles) → Destination;
   note line; full-width caution callout punchline.
3. **Problem** — three stat cards (€2.5M*, €8.3B, ~10%), two columns (How fraud
   happens / Why it keeps working), a sage-rule blockquote, and a footnote.
4. **Solution** — the "shared blacklist flywheel" (two cards with bidirectional
   captioned arrows) above a three-phase timeline (Seed → Monetise → Expand).
5. **Product** — a recreated verification-result card (carrier, 100/100 risk score,
   amber "Stop · Escalate" verdict, four "Worth knowing" signal rows with severity
   tags) plus three dark annotation callouts.
6. **Why now** — three equal full-height force rows (index, title+body, big metric):
   438%, Jul 2027, In seconds.
7. **Market size** — nested concentric squares (TAM ⊃ SAM ⊃ SOM, all values one size)
   beside a legend with big ARR figures.
8. **Business model** — dark "hook" bar (value protected vs charged → ROI), two stream
   cards (Shared blacklist access / Carrier verification) with matching layout, and a
   row of five "Further expansion streams".
9. **Go to market** — numbered free→paid timeline (Seed/Monetise/Scale/Expand) above
   four stage cards; stage 4 is the sage "Payoff".
10. **Competition** — three cards (Proof of demand / Key EU competitor / Substitutes)
    and a dark "The opening" bar with three takeaways.
11. **Traction** — sage enterprise-traction hero card (with watermark icon + chips),
    single-column problem-evidence list, and a five-step milestone roadmap.
12. **Team** — three person cards: circular photo slot, name, role, balanced tag line,
    divider, bullets. (Photo slots are drag-and-drop `<image-slot>` placeholders.)
13. **Use of funds** — 5 cards in a 3-col / 2-row grid; the primary "Blacklist network
    seeding" card spans two columns.
14. **Closing** — dark; large mark + wordmark, tagline, contact details.

## Interactions & Behavior
- **Navigation**: ← / → / Space / PageUp-Down / number keys / Home-End; tap left or
  right half on touch. Provided by `deck-stage.js`.
- **Entrance animation**: on each slide change, that slide's `.cg-anim` elements fade
  + rise 12px (460ms, `cubic-bezier(0.22,1,0.36,1)`, staggered ~70ms by the
  `cg-anim-1…7` class). Calm, on-brand; respects `prefers-reduced-motion`. Driven from
  JS (WAAPI) in the deck HTML, because CSS animations on slotted content under the web
  component never get a start time. Base state is always visible (print-safe).
- **Print**: `deck-stage.js` lays out one slide per page at design size under
  `@media print`; the `-print.html` adds colour-exact + animation-freeze rules and
  auto-calls `window.print()`.

## State Management
None beyond slide index, which `deck-stage.js` keeps in the URL hash. Slides are pure
presentational components.

## Assets
- `assets/mark.svg` — the standalone four-square mark.
- `fonts/DMSans-Variable.woff2` — self-hosted DM Sans (weights 300–500).
- Icons are inline Lucide-style SVG paths defined in `deck/kit.jsx` (`CGIc`), 1.75px
  stroke, `currentColor`.
- Team photos and the Product screenshot are **placeholders** the user fills in (team
  uses `<image-slot>`; product is a faithful UI recreation, not a screenshot).

## Files
- `CarrierGuard Investor Deck.html` — the deck (viewer).
- `CarrierGuard Investor Deck-print.html` — print/PDF variant.
- `deck/kit.jsx` — shared primitives: Mark, Wordmark, Eyebrow, Foot, Tag, Icon set.
- `deck/slides-title.jsx` — slide 1 (cover).
- `deck/slides-a.jsx` — slides 2–5 (Market structure, Problem, Solution, Product).
- `deck/slides-b.jsx` — slides 6–10 (Why now, Market size, Business model, GTM,
  Competition).
- `deck/slides-c.jsx` — slides 11–14 (Traction, Team, Use of funds, Closing).
- `deck-slides.css` — slide shell, eyebrow/footer chrome, four-square motif, animation.
- `styles.css` — design-system entry point (imports fonts + tokens).
- `tokens/` — colors, typography, spacing, effects, base.
- `fonts/` — DM Sans webfont + `@font-face`.
- `deck-stage.js` — slide-deck web component (nav, scaling, print).
- `image-slot.js` — drag-and-drop image placeholder web component (team photos).
- `DESIGN_SYSTEM.md` — the full CarrierGuard design-system reference (voice, visual
  foundations, component notes).
