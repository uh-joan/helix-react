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

## Fixed in this audit
- Progress bar height 6px → **4px** (Material default; `@cdx` doesn't override it — the 6px was an unfounded value).
- Elevation ramp extended so **dialogs and all floating surfaces use Helix Level 3**, not MUI's default shadows.

## Known gaps / not done
- **Dark mode + invert theme** (`$helix-dark-theme`) — deferred.
- Tier-2 → Tier-1 requires a **Helix reference render** (Storybook export or screenshots) for a true visual diff.
- Header/Footer are not a pixel match to the `@cdx/branding` web components.
