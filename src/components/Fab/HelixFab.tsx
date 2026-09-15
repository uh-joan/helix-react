import { forwardRef } from "react";
import MuiFab, { type FabProps } from "@mui/material/Fab";

export interface HelixFabProps extends Omit<FabProps, "color"> {
  tone?: "primary" | "accent";
}

const TONE_TO_COLOR = { primary: "primary", accent: "secondary" } as const;

/**
 * Helix FAB (floating action button) — themed @mui/material Fab. Wrap a
 * HelixIcon child; use `variant="extended"` for a labelled FAB.
 */
export const HelixFab = forwardRef<HTMLButtonElement, HelixFabProps>(function HelixFab(
  { tone = "accent", ...rest },
  ref,
) {
  return <MuiFab ref={ref} color={TONE_TO_COLOR[tone]} {...rest} />;
});
