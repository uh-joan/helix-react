import { forwardRef } from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { type SxProps, type Theme } from "@mui/material/styles";

/**
 * Helix button colour themes (per Helix docs): primary (default), accent
 * (sparingly), negative (destructive), invert (on dark), ai (AI-powered actions).
 */
export type HelixButtonTone = "primary" | "accent" | "negative" | "invert" | "ai";

/**
 * Helix button types, by emphasis (per Helix docs):
 * - flat    — high emphasis, filled. The main action on a page. (default)
 * - stroked — medium emphasis, outlined. Secondary actions.
 * - basic   — low emphasis, text only. Optional/less important actions.
 */
export type HelixButtonEmphasis = "flat" | "stroked" | "basic";

/** Helix density scale (Angular Material densities + large). */
export type HelixButtonSize = "large" | "default" | "small" | "x-small" | "xx-small";

export interface HelixButtonProps extends Omit<MuiButtonProps, "variant" | "color" | "size"> {
  /** Emphasis / type. Default "flat" (high-emphasis filled). */
  emphasis?: HelixButtonEmphasis;
  /** Colour theme. Default "primary". */
  tone?: HelixButtonTone;
  /** Density size. Default "default" (40px). */
  size?: HelixButtonSize;
}

const EMPHASIS_TO_VARIANT: Record<HelixButtonEmphasis, MuiButtonProps["variant"]> = {
  flat: "contained",
  stroked: "outlined",
  basic: "text",
};

const TONE_TO_COLOR: Record<Exclude<HelixButtonTone, "ai">, MuiButtonProps["color"]> = {
  primary: "primary",
  accent: "secondary",
  negative: "error",
  invert: "inherit",
};

// Density heights/paddings from Helix (M3 base 40px, −4px per density level;
// large = hlx-btn-large 18/32; small/x-small paddings from hlx-btn-* classes).
const SIZE_SX: Record<HelixButtonSize, SxProps<Theme>> = {
  large: { minHeight: 56, py: "18px", px: "32px", fontSize: 14 },
  default: { minHeight: 40, px: "16px", fontSize: 14 },
  small: { minHeight: 36, py: "6px", px: "16px", fontSize: 14 },
  "x-small": { minHeight: 32, py: "4px", px: "12px", fontSize: 12 },
  "xx-small": { minHeight: 28, py: "2px", px: "8px", fontSize: 12 },
};

// Helix AI treatment = brand "Blue Purple" gradient (Supernova token /
// $ai-assistant-title-gradient: linear-gradient(86.74deg, #3595f0, #b175e1)).
// Used here as a filled button; the accent-purple end keeps the white label legible.
const AI_GRADIENT = "linear-gradient(86.74deg, #3595F0 0%, #5E33BF 100%)";
const AI_GRADIENT_HOVER = "linear-gradient(86.74deg, #2F84DB 0%, #4F2BA0 100%)";

const AI_SX: SxProps<Theme> = {
  backgroundImage: AI_GRADIENT,
  color: "#FFFFFF",
  "&:hover": { backgroundImage: AI_GRADIENT_HOVER },
  "&.Mui-disabled": { backgroundImage: "none" },
};

/**
 * Helix Button — a themed @mui/material Button.
 *
 * Helix expresses button style as a type/emphasis (flat/stroked/basic), a colour
 * theme (primary/accent/negative/invert/ai) and a density size. The "ai" tone
 * renders the brand gradient as a filled treatment.
 */
export const HelixButton = forwardRef<HTMLButtonElement, HelixButtonProps>(function HelixButton(
  { emphasis = "flat", tone = "primary", size = "default", sx, ...rest },
  ref,
) {
  const sizeSx = SIZE_SX[size];

  if (tone === "ai") {
    return (
      <MuiButton
        ref={ref}
        variant="contained"
        color="primary"
        disableElevation
        sx={[sizeSx, AI_SX, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>}
        {...rest}
      />
    );
  }

  return (
    <MuiButton
      ref={ref}
      variant={EMPHASIS_TO_VARIANT[emphasis]}
      color={TONE_TO_COLOR[tone]}
      sx={[sizeSx, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>}
      {...rest}
    />
  );
});
