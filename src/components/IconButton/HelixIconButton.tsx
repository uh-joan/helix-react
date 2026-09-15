import { forwardRef } from "react";
import MuiIconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { semantic } from "../../tokens/helix-tokens";

/** Helix icon-button themes (Figma: primary / accent / negative / invert). */
export type HelixIconButtonTone = "primary" | "accent" | "negative" | "invert";
/** Density 0…−3 (adjusts hit area / padding, not icon size). */
export type HelixIconButtonDensity = 0 | -1 | -2 | -3;

export interface HelixIconButtonProps extends Omit<IconButtonProps, "color"> {
  tone?: HelixIconButtonTone;
  /** Density 0…−3. Default 0 (40px target). */
  density?: HelixIconButtonDensity;
}

const TONE_TO_COLOR = { primary: "default", accent: "secondary", negative: "error" } as const;

// Density adjusts padding (hit area) in 2px steps: 0=8 (40px) … −3=2 (28px).
const densityPad = (d: HelixIconButtonDensity) => 8 + d * 2;

/**
 * Helix Icon button — themed @mui/material IconButton. Wrap a HelixIcon child.
 * `tone="invert"` is for dark surfaces; `density` 0…−3 shrinks the hit area for
 * restricted spaces (the icon size is unchanged).
 */
export const HelixIconButton = forwardRef<HTMLButtonElement, HelixIconButtonProps>(function HelixIconButton(
  { tone = "primary", density = 0, sx, ...rest },
  ref,
) {
  const densitySx = density === 0 ? undefined : { padding: `${densityPad(density)}px` };
  const mergedSx = [densitySx, ...(Array.isArray(sx) ? sx : [sx])].filter(Boolean);

  if (tone === "invert") {
    return (
      <MuiIconButton
        ref={ref}
        sx={[
          { color: semantic.text.invert, "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" } },
          ...mergedSx,
        ]}
        {...rest}
      />
    );
  }
  return <MuiIconButton ref={ref} color={TONE_TO_COLOR[tone]} sx={mergedSx} {...rest} />;
});
