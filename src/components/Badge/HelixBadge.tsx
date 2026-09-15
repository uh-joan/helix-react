import { type ReactNode } from "react";
import { styled } from "@mui/material/styles";
import { palette } from "../../tokens/helix-tokens";

export type HelixBadgeColor =
  | "neutral"
  | "info"
  | "positive"
  | "warning"
  | "negative"
  | "accent";

export type HelixBadgeSize = "sm" | "md";

export interface HelixBadgeProps {
  color?: HelixBadgeColor;
  size?: HelixBadgeSize;
  children: ReactNode;
}

const COLOR_MAP: Record<HelixBadgeColor, { bg: string; fg: string }> = {
  neutral: { bg: palette.neutral[200], fg: palette.neutral[800] },
  info: { bg: palette.blue[100], fg: palette.blue[900] },
  positive: { bg: palette.green[100], fg: palette.green[900] },
  warning: { bg: palette.yellow[100], fg: palette.yellow[900] },
  negative: { bg: palette.red[100], fg: palette.red[900] },
  accent: { bg: palette.purple[100], fg: palette.purple[600] },
};

const Root = styled("span", {
  shouldForwardProp: (prop) => prop !== "badgeColor" && prop !== "badgeSize",
})<{ badgeColor: HelixBadgeColor; badgeSize: HelixBadgeSize }>(({ badgeColor, badgeSize }) => {
  const { bg, fg } = COLOR_MAP[badgeColor];
  const dims =
    badgeSize === "sm"
      ? { fontSize: 12, lineHeight: "16px", padding: "0 6px", height: 16 }
      : { fontSize: 13, lineHeight: "20px", padding: "0 8px", height: 20 };
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: '"Source Sans 3", system-ui, sans-serif',
    fontWeight: 600,
    borderRadius: 2,
    backgroundColor: bg,
    color: fg,
    whiteSpace: "nowrap",
    ...dims,
  };
});

/**
 * Helix Badge — a small status/count label. Colours resolve to the Helix
 * semantic surface (light) + text (900) pairs; accent uses purple.
 */
export function HelixBadge({ color = "neutral", size = "md", children }: HelixBadgeProps) {
  return (
    <Root badgeColor={color} badgeSize={size}>
      {children}
    </Root>
  );
}
