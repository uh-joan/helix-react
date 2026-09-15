import { forwardRef } from "react";
import MuiFab, { type FabProps } from "@mui/material/Fab";
import { semantic } from "../../tokens/helix-tokens";

/** Helix FAB themes (Figma: primary / accent / invert / AI). */
export type HelixFabTone = "primary" | "accent" | "invert" | "ai";

export interface HelixFabProps extends Omit<FabProps, "color"> {
  tone?: HelixFabTone;
}

const TONE_TO_COLOR = { primary: "primary", accent: "secondary" } as const;

// Helix AI treatment (matches the AI button gradient).
const AI_SX = {
  backgroundImage: "linear-gradient(86.74deg, #3595F0 0%, #5E33BF 100%)",
  color: "#FFFFFF",
  "&:hover": { backgroundImage: "linear-gradient(86.74deg, #2F84DB 0%, #4F2BA0 100%)" },
} as const;

const INVERT_SX = {
  backgroundColor: semantic.surface.primary,
  color: semantic.icon.primary,
  "&:hover": { backgroundColor: semantic.surface.minimal },
} as const;

/**
 * Helix FAB (floating action button) — themed @mui/material Fab. Wrap a
 * HelixIcon child; `variant="extended"` for a labelled FAB, `size="small"` for
 * mini. Tones: primary, accent, invert (light on dark), ai (brand gradient).
 */
export const HelixFab = forwardRef<HTMLButtonElement, HelixFabProps>(function HelixFab(
  { tone = "accent", sx, ...rest },
  ref,
) {
  if (tone === "ai") return <MuiFab ref={ref} sx={{ ...AI_SX, ...sx }} {...rest} />;
  if (tone === "invert") return <MuiFab ref={ref} sx={{ ...INVERT_SX, ...sx }} {...rest} />;
  return <MuiFab ref={ref} color={TONE_TO_COLOR[tone]} sx={sx} {...rest} />;
});
