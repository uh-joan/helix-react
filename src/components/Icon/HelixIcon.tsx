import { type CSSProperties } from "react";
import { semantic } from "../../tokens/helix-tokens";
import { BRAND_ICON_PATHS, type HelixBrandIconName } from "./brandIcons";

/** Helix icon colour roles (Color/icon tokens). */
export type HelixIconColor =
  | "primary"
  | "secondary"
  | "invert"
  | "info"
  | "positive"
  | "negative"
  | "warn"
  | "accent"
  | "brand"
  | "disabled";

/** Named sizes; a raw pixel number is also accepted. */
export type HelixIconSize = "sm" | "md" | "lg" | "xl";

const SIZE_PX: Record<HelixIconSize, number> = { sm: 16, md: 24, lg: 32, xl: 40 };

export interface HelixIconProps {
  /**
   * Icon to render. Either a Clarivate brand icon key (ai-chat, ai-search,
   * ai-summary, ai-compare) or a Material Icons ligature name (e.g. "search",
   * "chevron_right", "more_vert") — Helix's icon set is Material Icons.
   */
  name: HelixBrandIconName | (string & {});
  /** Colour role. Default "primary". */
  color?: HelixIconColor;
  /** Size — named token or raw px. Default "md" (24px). */
  size?: HelixIconSize | number;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  title?: string;
  className?: string;
  style?: CSSProperties;
}

function isBrand(name: string): name is HelixBrandIconName {
  return name in BRAND_ICON_PATHS;
}

/**
 * Helix Icon — renders the Clarivate brand SVG icons, or any Material Icons
 * ligature (the Material Icons font is loaded in index.html). Colour resolves
 * to the Helix Color/icon tokens.
 */
export function HelixIcon({ name, color = "primary", size = "md", title, className, style }: HelixIconProps) {
  const px = typeof size === "number" ? size : SIZE_PX[size];
  const fill = semantic.icon[color];
  const decorative = !title;

  if (isBrand(name)) {
    return (
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill={fill}
        className={className}
        style={style}
        role={decorative ? undefined : "img"}
        aria-hidden={decorative || undefined}
        aria-label={title}
      >
        {title ? <title>{title}</title> : null}
        {BRAND_ICON_PATHS[name]}
      </svg>
    );
  }

  return (
    <span
      className={`material-icons${className ? ` ${className}` : ""}`}
      style={{ fontSize: px, color: fill, lineHeight: 1, userSelect: "none", ...style }}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={title}
      translate="no"
    >
      {name}
    </span>
  );
}
