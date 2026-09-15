import { forwardRef } from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";

/**
 * Helix button colour themes (per Helix docs): primary (default), accent
 * (sparingly), negative (destructive), invert (on dark surfaces).
 */
export type HelixButtonTone = "primary" | "accent" | "negative" | "invert";

/**
 * Helix button types, by emphasis (per Helix docs):
 * - flat    — high emphasis, filled. The main action on a page. (default)
 * - stroked — medium emphasis, outlined. Secondary actions.
 * - basic   — low emphasis, text only. Optional/less important actions.
 */
export type HelixButtonEmphasis = "flat" | "stroked" | "basic";

export interface HelixButtonProps extends Omit<MuiButtonProps, "variant" | "color"> {
  /** Emphasis / type. Default "flat" (high-emphasis filled). */
  emphasis?: HelixButtonEmphasis;
  /** Colour theme. Default "primary". */
  tone?: HelixButtonTone;
}

const EMPHASIS_TO_VARIANT: Record<HelixButtonEmphasis, MuiButtonProps["variant"]> = {
  flat: "contained",
  stroked: "outlined",
  basic: "text",
};

const TONE_TO_COLOR: Record<HelixButtonTone, MuiButtonProps["color"]> = {
  primary: "primary",
  accent: "secondary",
  negative: "error",
  invert: "inherit",
};

/**
 * Helix Button — a themed @mui/material Button.
 *
 * Helix expresses button style as a type/emphasis (flat/stroked/basic) and a
 * colour theme (primary/accent/negative/invert). Sizes, icons, disabled and
 * fullWidth come straight from MUI Button.
 */
export const HelixButton = forwardRef<HTMLButtonElement, HelixButtonProps>(function HelixButton(
  { emphasis = "flat", tone = "primary", ...rest },
  ref,
) {
  return (
    <MuiButton
      ref={ref}
      variant={EMPHASIS_TO_VARIANT[emphasis]}
      color={TONE_TO_COLOR[tone]}
      {...rest}
    />
  );
});
