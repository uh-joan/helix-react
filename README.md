# Helix React

A **React** implementation of Clarivate's **Helix** design system, built on
[MUI v5](https://mui.com) and driven by design tokens from the Helix design
system in Supernova.

Helix's living implementation is Angular (Angular Material). This project ports
it to React: standard MUI components themed to Helix via a token-derived theme,
so the same visual language is available to React apps — and, later, to
Claude Design (claude.ai/design).

## Stack

- **@mui/material v5** — the component base (real, functional components)
- **@emotion** — styling engine
- **Vite + TypeScript** — dev/build

## Structure

```
src/
  tokens/helix-tokens.ts   Helix tokens extracted from Supernova (source of truth)
  theme/helixTheme.ts      MUI theme mapping tokens → MUI contract
  components/              Helix wrappers over MUI (Button, Card, Badge)
  App.tsx                  Live demo of the components
```

## Develop

```bash
npm install
npm run dev
```

## Design language (current)

- **Type:** Source Sans 3 (body/headings), "Clarivate" (display)
- **Primary:** `#2A2B2D` (dark neutral) · **Accent:** `#5E33BF` (purple)
- **Radius:** 2px · **Elevation:** 4 levels

## Components (37)

- **Core:** Button, Card, Badge, Input, Checkbox, Switch, Select, Chip, Icon
- **Navigation & structure:** Tabs, Menu, Breadcrumbs, List, Pagination, Accordion, Stepper, Sidenav
- **Form & feedback:** Radio, Tooltip, Dialog, Alert (notification), Snackbar, Progress bar, Spinner, Slider
- **Actions & misc:** Icon button, FAB, Button toggle (segmented), Divider, Link, Skeleton
- **Data:** Autocomplete, Table (sortable), Date picker, Tree
- **App shell:** Header, Footer

Every component is a thin, typed wrapper over the corresponding `@mui/material`
(or `@mui/x-*`) primitive, styled by `helixTheme` from Supernova tokens. See
`src/App.tsx` for live usage of each. Data/date/tree components use
`@mui/x-date-pickers` (dayjs) and `@mui/x-tree-view`.

## Roadmap

Dark mode + invert theme (`$helix-dark-theme`), then sync to Claude Design via
`/design-sync`.
