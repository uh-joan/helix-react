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

## Roadmap

Start small (Button, Card, Badge), then grow the component set (Input, Checkbox,
Select, Dialog, Header/Footer, …) and sync to Claude Design via `/design-sync`.
