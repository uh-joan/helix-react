import { createTheme } from "@mui/material/styles";
import {
  palette,
  semantic,
  radius,
  elevation,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
} from "../tokens/helix-tokens";

/**
 * Helix MUI theme.
 *
 * Maps the Helix Supernova tokens onto MUI's theme contract so that standard
 * @mui/material components render with Clarivate's look. Helix's primary action
 * colour is the dark neutral (#2A2B2D), with purple (#5E33BF) as the accent.
 */
export const helixTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: semantic.components.primaryFilled, // #2A2B2D
      contrastText: semantic.text.invert,
    },
    secondary: {
      main: semantic.components.accentFilled, // #5E33BF accent (purple)
      contrastText: semantic.text.invert,
    },
    error: { main: palette.red[500], light: palette.red[100], dark: palette.red[900] },
    success: { main: palette.green[500], light: palette.green[100], dark: palette.green[900] },
    warning: { main: palette.yellow[500], light: palette.yellow[100], dark: palette.yellow[900] },
    info: { main: palette.blue[500], light: palette.blue[100], dark: palette.blue[900] },
    grey: {
      50: palette.neutral[50],
      100: palette.neutral[100],
      200: palette.neutral[200],
      400: palette.neutral[400],
      600: palette.neutral[600],
      800: palette.neutral[800],
    },
    text: {
      primary: semantic.text.primary,
      secondary: semantic.text.secondary,
      disabled: semantic.text.disabled,
    },
    background: {
      default: semantic.surface.primary,
      paper: semantic.surface.primary,
    },
    divider: semantic.border.secondary,
  },

  shape: { borderRadius: radius.default },

  typography: {
    fontFamily: fontFamily.base,
    fontWeightRegular: fontWeight.regular,
    fontWeightMedium: fontWeight.semibold,
    fontWeightBold: fontWeight.bold,
    // Display → Clarivate Regular @700
    h1: { fontFamily: fontFamily.display, fontWeight: fontWeight.bold, fontSize: fontSize["4xl"], lineHeight: `${lineHeight["2xl"]}px`, letterSpacing: letterSpacing.displayLarge },
    h2: { fontFamily: fontFamily.display, fontWeight: fontWeight.bold, fontSize: fontSize["2xl"], lineHeight: `${lineHeight.lg}px` },
    // Headline → Source Sans 3 (large 700, medium/small 600)
    h3: { fontWeight: fontWeight.bold, fontSize: fontSize["3xl"], lineHeight: `${lineHeight.xl}px`, letterSpacing: letterSpacing.headlineLarge },
    h4: { fontWeight: fontWeight.semibold, fontSize: fontSize["2xl"], lineHeight: `${lineHeight.lg}px` },
    h5: { fontWeight: fontWeight.semibold, fontSize: fontSize.xl, lineHeight: `${lineHeight.md}px` },
    // Title → Source Sans 3 Regular
    h6: { fontWeight: fontWeight.regular, fontSize: fontSize.lg, lineHeight: `${lineHeight.md}px`, letterSpacing: letterSpacing.titleSmall },
    subtitle1: { fontWeight: fontWeight.regular, fontSize: fontSize.xl, lineHeight: `${lineHeight.md}px`, letterSpacing: letterSpacing.titleMedium },
    // Body
    body1: { fontSize: fontSize.md, lineHeight: `${lineHeight.md}px` },
    body2: { fontSize: fontSize.sm, lineHeight: `${lineHeight.sm}px` },
    // Label / button → label-large (14/20, semibold, +0.1px)
    button: { fontWeight: fontWeight.semibold, fontSize: fontSize.md, lineHeight: "20px", letterSpacing: letterSpacing.label, textTransform: "none" },
    caption: { fontSize: fontSize.xs, lineHeight: "20px" },
  },

  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: radius.default, paddingInline: 16, minHeight: 36 },
        sizeSmall: { minHeight: 32, paddingInline: 12 },
        // Helix `.hlx-btn-large` = 56px tall, 18px/32px padding.
        sizeLarge: { minHeight: 56, paddingBlock: 18, paddingInline: 32 },
        outlined: { borderColor: semantic.border.primary },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: radius.default },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 1 },
      styleOverrides: {
        root: { borderRadius: radius.default },
      },
    },
    // Text inputs — border colours from Helix "components/text input/outlined".
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: radius.default,
          "& .MuiOutlinedInput-notchedOutline": { borderColor: palette.neutral[400] },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: palette.neutral[600] },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.neutral[800],
            borderWidth: 1,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": { borderColor: palette.red[500] },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": { borderColor: palette.neutral[200] },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { color: semantic.text.secondary, "&.Mui-focused": { color: semantic.text.primary } },
      },
    },
    // Selection controls default to the primary (dark neutral) Helix colour.
    MuiCheckbox: { defaultProps: { color: "primary" } },
    MuiRadio: { defaultProps: { color: "primary" } },
    MuiSwitch: { defaultProps: { color: "primary" } },
    MuiChip: {
      // Helix chips are pill-shaped (--mat-chip-container-shape-radius: 16px).
      styleOverrides: {
        root: { borderRadius: 16, fontWeight: fontWeight.semibold },
      },
    },
  },
});

// Overlay Helix elevation shadows onto the MUI shadow ramp (indices we use).
helixTheme.shadows[0] = "none";
helixTheme.shadows[1] = elevation[1];
helixTheme.shadows[2] = elevation[2];
helixTheme.shadows[3] = elevation[2];
helixTheme.shadows[4] = elevation[3];
helixTheme.shadows[8] = elevation[3];
