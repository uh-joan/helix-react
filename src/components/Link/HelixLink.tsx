import { forwardRef } from "react";
import MuiLink, { type LinkProps } from "@mui/material/Link";
import { semantic, palette, fontSize } from "../../tokens/helix-tokens";

/** Helix link colours (Figma: primary / blue / visited). */
export type HelixLinkColour = "primary" | "blue" | "visited";
/** Helix link sizes. */
export type HelixLinkSize = "small" | "medium" | "large";

export interface HelixLinkProps extends Omit<LinkProps, "underline" | "color"> {
  /** Colour. Default "primary" (dark text). Use "blue" for in-paragraph links. */
  colour?: HelixLinkColour;
  /** Underline: on hover (default) or permanent. */
  underline?: "hover" | "permanent";
  /** Size. Default "medium". */
  size?: HelixLinkSize;
  /** Semibold weight — recommended for inline links (with underline="permanent"). */
  bold?: boolean;
}

const COLOUR: Record<HelixLinkColour, string> = {
  primary: semantic.text.primary, // #2A2B2D — Helix default link colour
  blue: palette.blue[500], // #0C6AC1 — in-paragraph links
  visited: palette.purple[600], // #5E33BF
};

const SIZE_PX: Record<HelixLinkSize, number> = {
  small: fontSize.sm, // 13
  medium: fontSize.md, // 14
  large: fontSize.lg, // 16
};

/**
 * Helix Hyperlink — themed @mui/material Link. Per Helix, the default is
 * primary (dark) text with underline on hover; use `colour="blue"` for links
 * inside paragraphs, and `underline="permanent"` to always underline.
 */
export const HelixLink = forwardRef<HTMLAnchorElement, HelixLinkProps>(function HelixLink(
  { colour = "primary", underline = "hover", size = "medium", bold = false, sx, ...rest },
  ref,
) {
  return (
    <MuiLink
      ref={ref}
      underline={underline === "permanent" ? "always" : "hover"}
      sx={{ color: COLOUR[colour], fontSize: SIZE_PX[size], fontWeight: bold ? 600 : undefined, ...sx }}
      {...rest}
    />
  );
});
