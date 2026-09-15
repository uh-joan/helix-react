import { forwardRef } from "react";
import MuiIconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { semantic } from "../../tokens/helix-tokens";

/** Helix icon-button themes (Figma: primary / accent / negative / invert). */
export type HelixIconButtonTone = "primary" | "accent" | "negative" | "invert";

export interface HelixIconButtonProps extends Omit<IconButtonProps, "color"> {
  tone?: HelixIconButtonTone;
}

const TONE_TO_COLOR = { primary: "default", accent: "secondary", negative: "error" } as const;

/**
 * Helix Icon button — themed @mui/material IconButton. Wrap a HelixIcon child.
 * `tone="invert"` is for dark surfaces (white icon).
 */
export const HelixIconButton = forwardRef<HTMLButtonElement, HelixIconButtonProps>(function HelixIconButton(
  { tone = "primary", sx, ...rest },
  ref,
) {
  if (tone === "invert") {
    return (
      <MuiIconButton
        ref={ref}
        sx={{ color: semantic.text.invert, "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" }, ...sx }}
        {...rest}
      />
    );
  }
  return <MuiIconButton ref={ref} color={TONE_TO_COLOR[tone]} sx={sx} {...rest} />;
});
