import { forwardRef } from "react";
import MuiIconButton, { type IconButtonProps } from "@mui/material/IconButton";

export interface HelixIconButtonProps extends Omit<IconButtonProps, "color"> {
  tone?: "primary" | "accent" | "negative";
}

const TONE_TO_COLOR = { primary: "default", accent: "secondary", negative: "error" } as const;

/**
 * Helix Icon button — themed @mui/material IconButton. Wrap a HelixIcon child.
 */
export const HelixIconButton = forwardRef<HTMLButtonElement, HelixIconButtonProps>(function HelixIconButton(
  { tone = "primary", ...rest },
  ref,
) {
  return <MuiIconButton ref={ref} color={TONE_TO_COLOR[tone]} {...rest} />;
});
