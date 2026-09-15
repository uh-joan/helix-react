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
    // Tonal ramps taken from the Helix Angular palettes (primary neutral ramp,
    // accent purple ramp) so hover/active/disabled states match Helix exactly
    // instead of being derived by MUI.
    primary: {
      light: "#6a6b6c", // primary/300
      main: semantic.components.primaryFilled, // #2A2B2D (500)
      dark: "#1f2022", // primary/700
      contrastText: semantic.text.invert,
    },
    secondary: {
      light: "#8e70d2", // accent/300
      main: semantic.components.accentFilled, // #5E33BF accent (500)
      dark: "#4b27b1", // accent/700
      contrastText: semantic.text.invert,
    },
    error: { main: palette.red[500], light: palette.red[100], dark: palette.red[900], contrastText: semantic.text.invert },
    success: { main: palette.green[500], light: palette.green[100], dark: palette.green[900], contrastText: semantic.text.invert },
    warning: { main: palette.yellow[500], light: palette.yellow[100], dark: palette.yellow[900] },
    info: { main: palette.blue[500], light: palette.blue[100], dark: palette.blue[900], contrastText: semantic.text.invert },
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
    body1: { fontSize: fontSize.md, lineHeight: `${lineHeight.md}px` }, // body-large 14/24
    body2: { fontSize: fontSize.sm, lineHeight: `${lineHeight.sm}px`, letterSpacing: "0.4px" }, // body-small 13/16
    // Label / button → label-large (14/20, semibold, +0.1px)
    button: { fontWeight: fontWeight.semibold, fontSize: fontSize.md, lineHeight: "20px", letterSpacing: letterSpacing.label, textTransform: "none" },
    caption: { fontSize: fontSize.xs, lineHeight: "20px", fontWeight: fontWeight.semibold, letterSpacing: "0.5px" }, // label-small 12/20 semibold
  },

  components: {
    // Helix strong focus indicator (focus colour = primary/40 = #2A2B2D).
    // MuiButtonBase is the base for Button, IconButton, Chip, Checkbox, Radio,
    // Switch and MenuItem, so this gives them all a consistent keyboard-focus ring.
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Helix strong focus indicator = 3px solid, offset.
          "&.Mui-focusVisible": {
            outline: `3px solid ${semantic.text.primary}`,
            outlineOffset: 2,
          },
          // Helix ripple = components/ripple-pressed_focused rgb(42 43 45 / 12%).
          "& .MuiTouchRipple-child": { backgroundColor: "rgba(42, 43, 45, 0.12)" },
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        // Helix (M3, density 0): 40px container height, 2px corners, 16px inline padding.
        root: { borderRadius: radius.default, paddingInline: 16, minHeight: 40 },
        // Helix disabled: components/disabled #DFE1E2 fill, text/icon #BABCBE.
        contained: { "&.Mui-disabled": { backgroundColor: semantic.components.disabled, color: palette.neutral[400] } },
        text: { "&.Mui-disabled": { color: palette.neutral[400] } },
        // Exact filled hover composites (state layer over container):
        // primary → #000 (opacity 1), accent → purple+16% black, negative → red+4% black.
        containedPrimary: { "&:hover": { backgroundColor: "#000000" } },
        containedSecondary: { "&:hover": { backgroundColor: "#4f2ba0" } },
        containedError: { "&:hover": { backgroundColor: "#bc2f34" } },
        // Helix `.hlx-btn-small`: 6px/16px padding, 14px label.
        sizeSmall: { minHeight: 32, paddingBlock: 6, paddingInline: 16, fontSize: fontSize.md },
        // Helix `.hlx-btn-large`: 18px/32px padding (~56px tall).
        sizeLarge: { minHeight: 56, paddingBlock: 18, paddingInline: 32 },
        outlined: {
          borderColor: semantic.border.primary,
          // Helix disabled outline = components/disabled-outline #BABCBE.
          "&.Mui-disabled": { borderColor: semantic.components.disabledOutline, color: palette.neutral[400] },
        },
        // Per-tone hover "state layers", from Helix components/*-outlined_basic-hover.
        textPrimary: { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } },
        outlinedPrimary: { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" } },
        textSecondary: { "&:hover": { backgroundColor: palette.purple[100] } }, // accent → purple/100
        outlinedSecondary: { "&:hover": { backgroundColor: palette.purple[100] } },
        textError: { "&:hover": { backgroundColor: palette.red[100] } }, // negative → red/100
        outlinedError: { "&:hover": { backgroundColor: palette.red[100] } },
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
    // Filled text inputs — Helix "components/text input/filled" tokens.
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: `${radius.default}px ${radius.default}px 0 0`,
          backgroundColor: palette.neutral[100], // filled/fill
          "&:hover": { backgroundColor: palette.neutral[200] }, // filled/hover-fill
          "&.Mui-focused": { backgroundColor: palette.neutral[100] },
          "&:before": { borderBottomColor: palette.neutral[600] }, // filled/enabled-border
          "&:hover:not(.Mui-disabled, .Mui-error):before": { borderBottomColor: palette.neutral[800] },
          "&:after": { borderBottomColor: palette.neutral[800] }, // filled/focused-border
          "&.Mui-error:after": { borderBottomColor: palette.red[500] },
        },
      },
    },
    // Menus / dropdowns (incl. Select panels): Helix surface + 2px corners.
    MuiMenu: {
      styleOverrides: {
        paper: { backgroundColor: semantic.surface.primary, borderRadius: radius.default },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: { borderRadius: radius.default },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "rgba(42, 43, 45, 0.08)" }, // components/ripple-hover
          "&.Mui-selected": { backgroundColor: "rgba(42, 43, 45, 0.12)" }, // ripple-pressed_focused
        },
      },
    },
    // Tabs — Helix active indicator = 4px; label-large, no uppercase.
    MuiTabs: {
      styleOverrides: {
        indicator: { height: 4, backgroundColor: semantic.text.primary },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: fontWeight.semibold,
          fontSize: fontSize.md,
          letterSpacing: letterSpacing.label,
          color: semantic.text.secondary,
          "&.Mui-selected": { color: semantic.text.primary },
        },
      },
    },
    // Accordion (expansion panel) — 2px shape, surface background, flat.
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: semantic.surface.primary,
          border: `1px solid ${semantic.border.secondary}`,
          borderRadius: radius.default,
          "&:before": { display: "none" },
          "&.Mui-expanded": { margin: 0 },
          "& + &": { borderTop: "none" },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: radius.default,
          "&.Mui-selected": { backgroundColor: semantic.components.primaryFilled, color: semantic.text.invert },
          "&.Mui-selected:hover": { backgroundColor: "#000000" },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "rgba(42, 43, 45, 0.08)" },
          "&.Mui-selected": { backgroundColor: "rgba(42, 43, 45, 0.12)", "&:hover": { backgroundColor: "rgba(42, 43, 45, 0.12)" } },
        },
      },
    },
    // Tooltip — Helix --mat-tooltip-container-color = neutral/600.
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: palette.neutral[600],
          color: semantic.text.invert,
          fontSize: fontSize.sm,
          lineHeight: "16px",
          borderRadius: radius.default,
          padding: "6px 8px",
        },
        arrow: { color: palette.neutral[600] },
      },
    },
    // Progress bar — track = surface/contrast, 6px, 2px corners.
    MuiLinearProgress: {
      styleOverrides: {
        root: { backgroundColor: semantic.surface.contrast, borderRadius: radius.default, height: 6 },
        bar: { borderRadius: radius.default },
      },
    },
    // Slider — rail = surface/contrast; track/thumb inherit primary.
    MuiSlider: {
      styleOverrides: {
        rail: { backgroundColor: semantic.surface.contrast, opacity: 1 },
        track: { border: "none" },
        thumb: {
          "&:hover, &.Mui-focusVisible": { boxShadow: "0 0 0 8px rgba(42, 43, 45, 0.08)" },
          "&.Mui-active": { boxShadow: "0 0 0 12px rgba(42, 43, 45, 0.12)" },
        },
      },
    },
    // Autocomplete — match Menu/list state layers on options.
    MuiAutocomplete: {
      styleOverrides: {
        paper: { borderRadius: radius.default, backgroundColor: semantic.surface.primary },
        option: {
          '&[aria-selected="true"]': { backgroundColor: "rgba(42, 43, 45, 0.12)" },
          "&.Mui-focused, &:hover": { backgroundColor: "rgba(42, 43, 45, 0.08)" },
        },
      },
    },
    // Snackbar (toast) — Helix surface/invert dark container.
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: semantic.surface.invert,
          color: semantic.text.invert,
          borderRadius: radius.default,
        },
      },
    },
    // Selection controls default to the primary (dark neutral) Helix colour.
    MuiCheckbox: { defaultProps: { color: "primary" } },
    MuiRadio: { defaultProps: { color: "primary" } },
    MuiSwitch: {
      defaultProps: { color: "primary" },
      // Helix shows an "✕" mark on the thumb in the OFF state.
      styleOverrides: {
        switchBase: {
          "&:not(.Mui-checked):not(.Mui-disabled) .MuiSwitch-thumb": {
            backgroundColor: palette.neutral[600],
            backgroundImage:
              "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='%23F2F2F2' d='M7.335 6.8L12 11.465L16.665 6.8L17.2 7.335L12.535 12L17.2 16.665L16.665 17.2L12 12.535L7.335 17.2L6.8 16.665L11.465 12L6.8 7.335Z'/></svg>\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "13px 13px",
          },
        },
      },
    },
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
