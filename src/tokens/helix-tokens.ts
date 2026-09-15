/**
 * Helix (Clarivate) design tokens.
 *
 * Extracted verbatim from the Supernova "Helix" design system (base values,
 * no theme applied). These are the source of truth for the MUI theme in
 * ../theme/helixTheme.ts. Do not hand-edit values — re-pull from Supernova.
 */

export const palette = {
  neutral: {
    0: "#FFFFFF",
    50: "#F9F9F9",
    100: "#F2F2F2",
    200: "#DFE1E2",
    400: "#BABCBE",
    600: "#5F6368",
    800: "#2A2B2D",
    1000: "#000000",
  },
  purple: { 100: "#FAF5FF", 400: "#B175E1", 600: "#5E33BF" },
  red: { 100: "#FADCDC", 500: "#C43136", 900: "#410B0D" },
  green: { 100: "#D2F7D6", 500: "#04800F", 900: "#003600" },
  blue: { 100: "#D7E8F7", 500: "#0C6AC1", 900: "#031C40" },
  yellow: { 100: "#FFEFD1", 500: "#EF9F00", 900: "#402B00" },
} as const;

/** Semantic roles (resolved from the palette above). */
export const semantic = {
  surface: {
    primary: palette.neutral[0],
    minimal: palette.neutral[100],
    contrast: palette.neutral[200],
    invert: palette.neutral[800],
    info: palette.blue[100],
    positive: palette.green[100],
    negative: palette.red[100],
    warn: palette.yellow[100],
  },
  text: {
    primary: palette.neutral[800],
    secondary: palette.neutral[600],
    invert: palette.neutral[0],
    disabled: palette.neutral[400],
    negative: palette.red[500],
    positive: palette.green[900],
    warn: palette.yellow[900],
    info: palette.blue[900],
  },
  border: {
    primary: palette.neutral[400],
    secondary: palette.neutral[200],
    contrast: palette.neutral[600],
    invert: palette.neutral[0],
  },
  icon: {
    primary: palette.neutral[800],
    secondary: palette.neutral[600],
    invert: palette.neutral[0],
    info: palette.blue[900],
    positive: palette.green[900],
    negative: palette.red[500],
    warn: palette.yellow[900],
    accent: palette.purple[600],
    brand: palette.purple[400],
    disabled: palette.neutral[400],
  },
  components: {
    primaryFilled: palette.neutral[800],
    secondaryFilled: palette.neutral[200],
    accentFilled: palette.purple[600],
    negativeFilled: palette.red[500],
    disabled: palette.neutral[200],
    disabledOutline: palette.neutral[400],
  },
} as const;

/** 8px spacing scale. `half` = 4px. */
export const spacing = {
  half: 4,
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  7: 56,
  8: 64,
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 24,
  "3xl": 32,
  "4xl": 40,
} as const;

export const lineHeight = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  "2xl": 56,
} as const;

export const radius = {
  default: 2,
} as const;

/** Elevation box-shadows (Level 0–3). */
export const elevation = {
  0: "0 0 0 1px rgba(42, 43, 45, 0.08)",
  1: "rgba(0, 0, 0, 0.12) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  2: "rgba(0, 0, 0, 0.12) 0px 0px 4px 0px, rgba(0, 0, 0, 0.12) 0px 4px 6px 0px",
  3: "rgba(0, 0, 0, 0.12) 0px 0px 8px 0px, rgba(0, 0, 0, 0.12) 0px 8px 12px 0px",
} as const;

export const fontFamily = {
  // "Clarivate Regular" is the custom brand display face (rendered at weight
  // 700 per the Helix Angular theme). It ships as a @cdx font and is not
  // bundled here yet, so it falls back to Source Sans 3.
  display: '"Clarivate Regular", "Source Sans 3", system-ui, sans-serif',
  base: '"Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
} as const;

/** Letter-spacing (tracking) values from the Helix type scale. */
export const letterSpacing = {
  displayLarge: "-0.25px",
  headlineLarge: "-0.25px",
  titleMedium: "0.15px",
  titleSmall: "0.1px",
  label: "0.1px",
} as const;

export const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;
