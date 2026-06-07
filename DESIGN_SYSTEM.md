# CarrierGuard Design System

A light, warm, high-trust identity for **CarrierGuard** — carrier fraud
prevention for freight operators. This system powers premium investor decks,
product surfaces and brand materials. It is built to feel confident, clean and
warm: serious enough for enterprise logistics, but never dark, alarmist or
"cyber-theatre."

> **Positioning:** CarrierGuard helps teams verify new carriers quickly before a
> load is assigned, turning fragmented public signals into a clear, traceable
> risk view.

## Sources

- `uploads/Context - Brand Guidelines.pdf` — CarrierGuard Brand Guidelines v1.0 (May 2026). The canonical reference for palette, type, logo system, voice and product language.

> **Naming note / open question.** The uploaded brand PDF writes the wordmark
> lowercase ("carrierGuard") and specifies a sans such as Inter/Aptos/Helvetica.
> The design-system brief that commissioned this build specifies **"CarrierGuard"**
> (capital C, capital G) and **DM Sans** (weights 300/400/500 only). This system
> follows the brief. If the lowercase wordmark + Inter is correct, flag it and we
> will swap the wordmark casing in `Logo.jsx` and the font in `fonts/`.

---

## The system at a glance

- **Palette.** Warm off-white `#FDFCF9` base, near-black `#1C1917` type, sage
  `#4D7C5F` as a controlled accent (never a full-page wash), light sage
  `#D1E8D8` for soft fills.
- **Type.** DM Sans, weights 300 / 400 / 500 only. Never 600 or 700.
- **Logo.** Fixed 2x2 grid mark (dark / sage / sage / dark) + mixed-case
  "CarrierGuard" wordmark.
- **Spacing.** Disciplined 4 / 8 / 16 / 24 / 40 / 72 scale.
- **Cards.** Rounded 14–24px, light fill, warm border, soft warm shadow.
- **No em-dashes or dashes anywhere.** Restructure sentences instead.

---

## CONTENT FUNDAMENTALS

How CarrierGuard writes. The verbal identity matches the visual one: calm,
exact, operational and evidence-led.

- **Clear over clever.** Say what the product checks and why it matters. Avoid
  vague security language. Instead of "This carrier looks suspicious," say "We
  found a mismatch between the carrier domain and the registered company
  details."
- **Calm over alarmist.** Fraud risk is serious, but never use panic, fear or
  exaggerated cyber language. Instead of "Risk detected!" say "One signal needs
  review before assigning the load."
- **Evidence-led.** Use traceable claims: source, signal, mismatch, document,
  registration, history. Every flag should point to a source or a reason.
- **Operator-first.** Write for dispatchers and freight teams who need an answer
  fast, not for a branding award jury. Instead of "AI-powered fraud
  intelligence platform," say "Fast carrier verification using public signals
  and traceable checks."

**Casing.** Headlines and body use normal sentence case. Eyebrows, section
labels and small captions are UPPERCASE with wide tracking (0.1em). The wordmark
is always written "CarrierGuard" in running text (per this brief).

**Person.** Product-facing copy is operator-first and direct ("Run new check,"
"View evidence report"). Marketing copy speaks about what teams can do, leaning
on "you" sparingly and favouring plain operational statements.

**Emoji.** None. The brand never uses emoji. Status is communicated with text +
tone, never colour or emoji alone.

**Dashes.** No em-dashes or en-dashes anywhere. Restructure the sentence.

**Vibe.** Quiet proof. Present, confident, never noisy. The copy should read
like a calm expert giving you exactly the fact you need.

---

## VISUAL FOUNDATIONS

**Colour.** Warm off-white `#FDFCF9` is the default canvas; near-black `#1C1917`
carries type and dark "reversed" surfaces used for covers and hero moments. Sage
`#4D7C5F` is a deliberate accent reserved for eyebrows, section labels, focus
states, positive signals and the second logo square — never scattered. Light
sage `#D1E8D8` is for subtle backgrounds and soft highlights. Warm greys
(`#78716C` body, `#A8A29E` footnotes) and a single warm border `#E7E5E4` round
out the set. Use warmth and contrast first; sage is the controlled highlight.

**Type.** DM Sans throughout, only weights 300/400/500 — heavy weights are
banned because they make the interface feel loud. Hierarchy is built from size
and tracking, not weight. Eyebrows and section labels: 11px / 500 / uppercase /
0.1em / sage. Headlines: 22px / 500 / primary. Display/hero on slides: up to
32px / 500 / -0.02em / line-height 1.15. Sublines and body: 12–13px / 400 /
muted, line-height 1.6.

**Backgrounds.** Flat warm off-white or flat near-black. No gradients, no
photographic backgrounds, no busy textures, no patterns behind content. The logo
and key marks always sit on clean, uncluttered backgrounds. The four-square grid
can be used as a quiet, large-scale graphic motif (low contrast) on hero/cover
moments, but never as noisy wallpaper.

**Imagery.** The brand leans on its modular four-square "data language" (checks,
sources, layers, evidence blocks) rather than stock photography. When imagery is
needed it should be calm and warm in tone, never cold blue cyber imagery. Do not
place the logo over photos.

**Animation.** Minimal and calm. Short, soft fades and small position shifts
(8–16px). Gentle easing (ease-out, ~200–320ms). No bounces, no infinite
decorative loops, no spring overshoot. Motion should feel precise, not playful.

**Hover states.** Subtle. Solid buttons darken slightly; ghost/secondary
elements pick up a faint sage-light or warm-grey fill; links shift toward sage.
No large scale-ups.

**Press states.** A small, quiet acknowledgement: a 1px downward nudge or a
2–3% darken. Never a dramatic shrink.

**Borders.** A single warm hairline `#E7E5E4` at 1px for dividers and resting
card borders. Highlighted / selected elements use a 1–1.5px sage border. Borders
are crisp, never doubled or heavy.

**Shadows.** Soft and warm, built on the warm-black at very low alpha (4–8%).
Cards rest with almost no shadow (`--shadow-xs`/`sm`); only floating surfaces
(dialogs, menus) get `--shadow-md`/`lg`. No harsh black drop shadows.

**Radii.** Cards 14–24px (`--radius-md` to `--radius-xl`). Inputs and small
controls ~10px. Tags and pills fully rounded (`--radius-pill`). The logo squares
themselves carry a tiny 4px softening.

**Cards.** Light fill (white or off-white) on a warm 1px border, generous 16–24px
padding, 14–24px radius, near-flat resting shadow. Highlighted cards swap the
border to sage and may add a light-sage tint.

**Transparency / blur.** Used sparingly — only for overlay scrims behind dialogs
and the occasional frosted top bar. Content backgrounds stay opaque.

**Layout rules.** Disciplined spacing scale. Generous white space is part of the
premium feel. Strong contrast and clear hierarchy so operators decide fast. On
slides marked "creative," break the column grid for editorial, dramatic layouts;
elsewhere keep things calm and aligned.

---

## ICONOGRAPHY

CarrierGuard has no proprietary icon font in the source material. Its primary
"icon language" is the **four-square grid mark** and modular evidence/status
blocks rather than a dense pictographic set.

- **Icon set.** Where line icons are needed (status rows, nav, buttons), use
  **Lucide** (`https://unpkg.com/lucide`) — a calm, even-weight (1.5–2px stroke),
  rounded-join outline set that matches the brand's precise-but-warm feel. This
  is a **substitution**: the brand guidelines do not specify an icon library, so
  Lucide is the closest-fit default. Flag if a different set is preferred.
- **Style.** Outline only, ~1.75px stroke, currentColor so icons inherit text or
  sage. Sizes 16 / 20 / 24. Icons never carry their own colour fills.
- **Status.** Never communicate status with an icon or colour alone — always pair
  with text ("Checked," "Review," "Clear").
- **Emoji.** Never used.
- **Unicode glyphs.** Avoided as icons. Use Lucide or the four-square mark.
- **Assets.** `assets/mark.svg` — the standalone four-square mark.

---

## INDEX

Root manifest:

- `styles.css` — global entry point (import list only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `fonts/` — `fonts.css` + self-hosted `DMSans-Variable.woff2`.
- `assets/` — `mark.svg` (four-square logo mark).
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand).
- `components/` — reusable React primitives (see below).
- `ui_kits/` — full-screen product recreations.
- `slides/` — investor-deck slide templates.
- `SKILL.md` — Agent-Skill wrapper for download/Claude Code use.

**Components** (`window.CarrierGuardDesignSystem_5be1ad`):

- `brand/Logo` — four-square mark + wordmark, three themes.
- `core/` — Button, Tag, Badge, Card, Input, Eyebrow, SectionLabel, EvidenceRow.

**UI kits:**

- `ui_kits/carrier-check/` — the CarrierGuard product (carrier verification view).

**Slides:**

- `slides/` — investor-deck templates (title, statement, market, comparison, traction).
