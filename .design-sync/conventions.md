# Helix React — how to build with it

Helix React is Clarivate's Helix design system implemented on **MUI v5**. Components are `Helix*` React components (e.g. `HelixButton`, `HelixCard`, `HelixInput`) imported from `helix-react`.

## Wrapping & setup (required)
Every Helix component must render inside **`HelixProvider`** — it installs the Helix MUI theme (colours, typography, radius, elevation), `CssBaseline`, and the date-picker localization. Without it, components fall back to default MUI styling and will NOT look like Helix.

```tsx
import { HelixProvider, HelixButton, HelixCard } from "helix-react";

<HelixProvider>
  <HelixCard title="Report">
    <HelixButton emphasis="flat" tone="primary">Run</HelixButton>
  </HelixCard>
</HelixProvider>
```

Fonts (Clarivate Regular, Source Sans 3, Material Symbols) load automatically via the design system's `styles.css`.

## Styling idiom
This is a **prop + theme** system — there are **no CSS utility classes**. Style components through their props, and do layout/one-off styling with MUI's `sx` prop referencing theme values (`sx={{ p: 2, color: "text.secondary", bgcolor: "background.paper" }}`). Don't hand-write hex colours or component CSS — use the component props and theme tokens.

Key Helix-specific props:
- **HelixButton** — `emphasis` (`flat` high / `stroked` medium / `basic` low), `tone` (`primary`/`accent`/`negative`/`invert`/`ai`), `size` (`large`/`default`/`small`/`x-small`/`xx-small`).
- **HelixChip** — `tone` (neutral/primary/accent/negative/warn/positive/info/outlined/basic), `size`.
- **HelixBadge** — count/dot indicator, `tone` primary/accent (for coloured status *labels*, use HelixChip).
- **HelixAlert** — `theme` primary/positive/warn/negative, `variant` inline/banner.
- **HelixIcon** — `name` (Material Symbols ligature or brand key ai-chat/ai-search/ai-summary/ai-compare), `color` (icon tokens), `size`.
- **HelixInput / HelixSelect** — `density` 0…−4; **HelixIconButton** `density` 0…−3; **HelixSwitch** `density` 0…−2.
- **HelixHeader / HelixFooter** — the Clarivate app shell (two-tier header, black footer).

## Where the truth lives
Each component ships a `.d.ts` (`<Name>Props`) — the exact API — and a `.prompt.md` with usage. Raw design tokens are exported as `helixTokens` (`helixTokens.palette`, `.semantic`, `.spacing`, `.fontSize`, `.radius`, `.elevation`), and the MUI theme as `helixTheme`. Prefer semantic theme keys (`primary`, `text.secondary`, `background.paper`) over raw hex.

## Identity
Primary = dark neutral `#2A2B2D`; accent = purple `#5E33BF`; 2px corners; Source Sans 3 body, Clarivate Regular display. Buttons are dark (primary), not blue.
