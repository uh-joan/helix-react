import { forwardRef } from "react";
import MuiBadge, { type BadgeProps } from "@mui/material/Badge";

/** Helix Badge themes (Figma: primary / accent). */
export type HelixBadgeTone = "primary" | "accent";
export type HelixBadgeSize = "default" | "small";

export interface HelixBadgeProps extends Omit<BadgeProps, "color"> {
  /** Colour theme. Default "primary" (dark). "accent" = purple. */
  tone?: HelixBadgeTone;
  /** Size. Default "default". */
  size?: HelixBadgeSize;
}

const TONE_TO_COLOR = { primary: "primary", accent: "secondary" } as const;

/**
 * Helix Badge — a count / dot indicator (per the Helix Badge spec: primary or
 * accent, default/small). Wrap the element it decorates, e.g.
 * `<HelixBadge badgeContent={4}><HelixIcon name="notifications" /></HelixBadge>`.
 * For coloured status labels, use HelixChip instead.
 */
export const HelixBadge = forwardRef<HTMLSpanElement, HelixBadgeProps>(function HelixBadge(
  { tone = "primary", size = "default", sx, ...rest },
  ref,
) {
  const smallSx =
    size === "small"
      ? { "& .MuiBadge-badge": { minWidth: 16, height: 16, fontSize: 10, padding: "0 4px" } }
      : undefined;
  return <MuiBadge ref={ref} color={TONE_TO_COLOR[tone]} sx={{ ...smallSx, ...sx }} {...rest} />;
});
