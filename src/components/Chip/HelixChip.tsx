import { forwardRef } from "react";
import MuiChip, { type ChipProps } from "@mui/material/Chip";
import { palette, semantic } from "../../tokens/helix-tokens";

/**
 * Helix chip tones, matching `theme-helix-chips` in @cdx/theme-angular-material.
 * Each is an exact fill + label-colour pair from the Helix tokens.
 */
export type HelixChipTone =
  | "neutral"
  | "primary"
  | "accent"
  | "negative"
  | "warn"
  | "positive"
  | "info"
  | "outlined";

/** Helix chip density. */
export type HelixChipSize = "default" | "small" | "x-small";

export interface HelixChipProps extends Omit<ChipProps, "color" | "size"> {
  /** Helix semantic tone. Default "neutral". */
  tone?: HelixChipTone;
  /** Density size. Default "default". */
  size?: HelixChipSize;
}

const TONE_STYLES: Record<HelixChipTone, { bg: string; fg: string; border?: string }> = {
  neutral: { bg: semantic.components.secondaryFilled, fg: semantic.text.primary }, // #DFE1E2 / #2A2B2D
  primary: { bg: semantic.components.primaryFilled, fg: semantic.text.invert }, // #2A2B2D / #FFF
  accent: { bg: semantic.components.accentFilled, fg: semantic.text.invert }, // #5E33BF / #FFF
  negative: { bg: palette.red[100], fg: palette.red[900] }, // #FADCDC / #410B0D
  warn: { bg: palette.yellow[100], fg: semantic.text.warn }, // #FFEFD1 / #402B00
  positive: { bg: palette.green[100], fg: semantic.text.positive }, // #D2F7D6 / #003600
  info: { bg: palette.blue[100], fg: semantic.text.info }, // #D7E8F7 / #031C40
  outlined: { bg: "transparent", fg: semantic.text.primary, border: semantic.border.primary },
};

/**
 * Helix Chip — a themed @mui/material Chip. `tone` sets the Helix semantic
 * fill/label colours (pill-shaped, 16px). All other MUI Chip props (onDelete,
 * icon, avatar, clickable, size) pass through.
 */
export const HelixChip = forwardRef<HTMLDivElement, HelixChipProps>(function HelixChip(
  { tone = "neutral", size = "default", sx, ...rest },
  ref,
) {
  const { bg, fg, border } = TONE_STYLES[tone];
  const muiSize = size === "default" ? "medium" : "small";
  // x-small trims below MUI's small chip density.
  const xSmallSx = size === "x-small" ? { height: 20, fontSize: 11 } : undefined;
  return (
    <MuiChip
      ref={ref}
      size={muiSize}
      variant={tone === "outlined" ? "outlined" : "filled"}
      sx={{
        backgroundColor: bg,
        color: fg,
        ...(border ? { borderColor: border } : {}),
        ...(xSmallSx ?? {}),
        "& .MuiChip-deleteIcon": { color: fg, opacity: 0.7, "&:hover": { color: fg, opacity: 1 } },
        "& .MuiChip-icon": { color: fg },
        ...sx,
      }}
      {...rest}
    />
  );
});
