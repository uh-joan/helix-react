# Helix React — Fidelity Audit

How faithfully each component reproduces Clarivate Helix, and where the gaps are.

## Sources of truth
- **Supernova** Helix design system — tokens (color, type, spacing, radius, elevation), component records, docs, brand assets.
- **`@cdx/theme-angular-material`** (SCSS) — the live Helix Material 3 theme + per-component overrides (`tokens.scss`, `primitives.scss`, `overrides.scss`, `typography.scss`).
- **`@cdx/theme-ag-grid`**, **`@cdx/branding`** — grid theme and the Clarivate logo/header/footer.

## Method & the hard ceiling
Every value is cross-checked against the sources above. What we **cannot** do is a pixel diff against a live Helix render: the Storybook (`cdx-stories.prod.sp.aws.clarivate.net`) is 403 even on VPN, and the `@cdx` SCSS only specifies a subset of per-component styling. And MUI (Material-2 DOM) vs Angular Material (Material-3 / MDC DOM) can never be byte-identical. Target: **visually indistinguishable**, not identical markup.

## Foundations — verified exact
| Aspect | Status |
|---|---|
| Color palette + semantic roles | ✅ verbatim from Supernova (`helix-tokens.ts`) |
| Typography (families, sizes, weights, line-heights, **letter-spacing**) | ✅ matches `--sys-*` scale in `typography.scss` |
| Primary/accent tonal ramps (hover/active/disabled) | ✅ from Helix Angular palettes |
| Spacing (8px), radius (2px), elevation (L0–L3) | ✅ token-exact; ramp now maps cards→L1, menus/popovers→L3, dialogs→L3 |
| Brand font (Clarivate Regular) | ✅ self-hosted from Helix CDN |
| Brand icons (AI set) + logo | ✅ real assets from Supernova / `@cdx/branding` |

## Per-component

**Tier 1 — deeply audited (matches every documented `@cdx` detail):**
Button (emphasis flat/stroked/basic, tones incl. AI gradient, density 5-step, exact hover composites `#000`/`#4f2ba0`/`#bc2f34`, disabled `#DFE1E2`/`#BABCBE`, 40px), Chip (16px pill, 8 semantic tones exact), Badge, Icon (Color/icon tokens), Input (outlined + filled border tokens), Select, Checkbox/Radio/Switch (primary dark + switch ✕ off-icon), Card (2px, L1). Ripple (`#2A2B2D` 12%) and 3px focus ring applied via `MuiButtonBase` to all.

**Tier 2 — faithful by construction (right tokens + documented overrides; not pixel-verified):**
Tabs (4px indicator, label-large), Menu, Breadcrumbs, List, Pagination (2px, dark selected), Accordion (2px, flat), Stepper, Sidenav, Tooltip (`#5F6368`), Dialog (2px, L3), Alert (semantic surface/text pairs), Snackbar (dark invert), Progress (track `#DFE1E2`), Slider (rail `#DFE1E2`, state layers), IconButton, FAB, ButtonToggle (segmented container), Divider, Link, Skeleton, Autocomplete. These inherit the shared theme and the specific values Helix documents, but exact per-component behaviours Helix doesn't publish (e.g. Stepper connector, Slider ticks, Radio hit-area) are assumed, not confirmed.

**Tier 3 — reasonable, with named caveats:**
- **DataGrid (AG Grid)** — Helix theme via Theming API reproduces `@cdx/theme-ag-grid` params; verified font/weight/color/radius, not a full visual diff.
- **Header/Footer** — real Clarivate logo + tokens; composition mirrors `<cdx-header>`/`<cdx-footer>` intent, not a pixel match.
- **Table** — simple MUI table for basic cases (complex grids use DataGrid).

## Fixed — audit round 1 (theme vs `@cdx`)
- Progress bar height 6px → **4px** (Material default; `@cdx` doesn't override it — the 6px was an unfounded value).
- Elevation ramp extended so **dialogs and all floating surfaces use Helix Level 3**, not MUI's default shadows.

## Fixed — audit round 2 (vs Supernova Figma component specs)
Cross-checked components against `sn_get_figma_component_detail` (variants + properties) and thumbnails. Corrections:
- **Hyperlink** — default colour is **primary (dark)**, not accent purple. Added `colour` (primary/blue/visited), `size` (small/medium/large), `underline` (hover/permanent).
- **Notification (Alert)** — Helix themes are **primary/positive/warn/negative** (no "info"; primary is neutral). Renamed `severity`→`theme`; added 1–2 action buttons.
- **Badge** — **breaking, corrective**: Helix Badge is a **count/dot indicator** (themes primary/accent, sizes small/default), not a coloured status label. Re-implemented over MUI Badge. Coloured status labels are **Chip** (which has all 9 Helix themes).
- **Chip** — added the missing **`basic`** theme (text-only). Full set now: primary/accent/neutral/outlined/negative/positive/warn/info/basic (matches Figma).
- **ButtonToggle** — added the **`invert`** (dark) theme and `equalWidths`, per the Figma type/theme props.
- **Card** — added the optional **close** button (Figma `close` property).

## Fixed — audit round 3 (Figma specs, cont.)
- **Paginator** — added **HelixPaginator** (mat-paginator pattern: rows-per-page, X–Y of Z, first/last) via MUI TablePagination. `HelixPagination` (page numbers) kept as a separate pattern.
- **Rich Tooltip** — added **HelixRichTooltip** (light surface, title + body + 1–2 buttons); distinct from the plain dark Tooltip.
- **Tree** — checkbox selection **on by default** (Helix tree items have checkboxes).
- **IconButton** — added `invert` theme. **FAB** — added `invert` + `ai` (gradient) themes.
- **Header** — added `condensed`, `hideLogo`, and a `tabs` slot (Helix types condensed/default/no-logo + tabs).
- **Footer** — added `layout` (row/column).
- **Text Area** — added dedicated **HelixTextArea** (multiline, outlined/filled).

## Verified, no change needed (specs matched implementation)
Tab, Radio, List Item, Dialog, Breadcrumbs, Date-picker (month/year/range via MUI), Menu, Checkbox (incl. indeterminate via MUI), Table Header/Cell (sort/align/density via HelixTable + AG Grid DataGrid), Progress Bar (determinate/indeterminate), Divider, Slide Toggle, Select / Text Input (state×density×style covered by the outlined/filled input theming).

## Fixed — audit round 5 (Supernova documentation pages)
- **Icon** — 🔴 real bug: was using **Material Icons (filled)**; Helix's Iconography guideline specifies **Material Symbols, Outline style, weight 400, GRAD 0**. Switched `HelixIcon` to the Material Symbols Outlined font with `font-variation-settings` (FILL 0 / wght 400 / GRAD 0 / opsz = size). Icons now render outlined, matching Helix.
- Confirmed via the Badge doc ("a small circle, typically containing a number… in proximity to another object") that the round-2 Badge re-scope was correct.

## Known-minor (MUI's two-density limit)
The Density guideline defines deeper density support than MUI exposes: Input/Select to **−4**, Icon Button to **−3**, Slide toggle to **−2**. Implemented where it matters (Button 0…−3, Chip 0…−2); Input/Select/Chip expose default/small/x-small, and Icon Button/Switch inherit MUI sizing. Full −4 granularity is a MUI limitation, not a token gap.

## Fixed — audit round 6 (all component documentation pages)
Read every component Overview page. No new bugs found; the pages confirmed every component matches its documented spec and validated earlier fixes (Icon Button `invert`, FAB `ai`/`invert`, ButtonToggle dark, Hyperlink primary/blue/visited, Header condensed/no-logo, Chip's 9 themes incl. `basic`, Tree checkboxes, Badge count/circle, mat-style Paginator, Rich Tooltip, two-table split). Two consistency wins added:
- **HelixSelect** — added the `size` density prop (parity with HelixInput).
- **HelixFooter** — added the `logo-row` layout (Helix's third footer layout).

## Known-minor — RESOLVED (round 7)
- **Density depth** — full Helix ranges implemented via a shared `HelixDensity`: **Input/Select `density` 0…−4** (−4 = 40px), **Icon Button `density` 0…−3** (hit-area only, icon size unchanged), **Switch `density` 0…−2**. Button (`size` 0…−3 + large) and Chip (0…−2) were already at full range. Verified: input heights step cleanly 0→−4 with correct label positioning.
- **Segmented button** — a selected icon+label segment now swaps its icon for a **checkmark** (verified "✓ Grid").
- **Inline hyperlink** — added `bold` (semibold) so inline links can be styled semibold + `underline="permanent"` per the guideline.

## Audit status — COMPLETE
Reconciled against all three Supernova sources: **Figma component specs** (~50), the **`@cdx` theme SCSS**, and **every documentation page** (foundations + per-component). Plus a correctness pass (fixed an invalid DOM nesting). Remaining ceiling: cross-framework DOM (MUI vs Angular MDC), pixel values Helix doesn't publish, and dark mode (deferred). Remaining fidelity ceiling is now only: cross-framework DOM (MUI vs Angular MDC), and pixel-exact values Helix doesn't publish. **Dark mode** remains deferred.

## Known gaps / not done
- **Dark mode + invert theme** (`$helix-dark-theme`) — deferred.
- Tier-2 → Tier-1 requires a **Helix reference render** (Storybook export or screenshots) for a true visual diff.
- Header/Footer are not a pixel match to the `@cdx/branding` web components.
