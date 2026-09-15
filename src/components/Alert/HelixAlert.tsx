import { type ReactNode } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { palette, semantic, radius } from "../../tokens/helix-tokens";
import { HelixIcon } from "../Icon/HelixIcon";

/** Helix Notification themes (Figma: primary / positive / warn / negative). */
export type HelixAlertTheme = "primary" | "positive" | "warn" | "negative";
export type HelixAlertVariant = "inline" | "banner";

export interface HelixAlertProps {
  /** Theme. Default "primary" (neutral/informational). */
  theme?: HelixAlertTheme;
  /** inline (contained) or banner (full-width). Default "inline". */
  variant?: HelixAlertVariant;
  title?: ReactNode;
  children?: ReactNode;
  /** Trailing action button(s) — Helix notifications take 1–2. */
  actions?: ReactNode;
  onClose?: () => void;
}

const THEME = {
  primary: { bg: semantic.surface.minimal, fg: semantic.text.primary, icon: "info" }, // neutral
  positive: { bg: palette.green[100], fg: palette.green[900], icon: "check_circle" },
  warn: { bg: palette.yellow[100], fg: palette.yellow[900], icon: "warning" },
  negative: { bg: palette.red[100], fg: palette.red[900], icon: "error" },
} as const;

/**
 * Helix Alert (Notification) — inline or banner, themes primary/positive/warn/
 * negative, with an optional title, 1–2 trailing action buttons, and a close
 * button. Colours are the Helix semantic surface/text pairs per theme.
 */
export function HelixAlert({ theme = "primary", variant = "inline", title, children, actions, onClose }: HelixAlertProps) {
  const t = THEME[theme];
  return (
    <Box
      role="alert"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        p: variant === "banner" ? "12px 16px" : "12px",
        width: variant === "banner" ? "100%" : undefined,
        backgroundColor: t.bg,
        color: t.fg,
        borderRadius: variant === "banner" ? 0 : `${radius.default}px`,
      }}
    >
      <Box sx={{ display: "flex", pt: "2px" }}>
        <HelixIcon name={t.icon} size="sm" style={{ color: t.fg }} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {title && (
          <Typography variant="body1" sx={{ fontWeight: 600, color: t.fg }}>
            {title}
          </Typography>
        )}
        {children && (
          <Typography variant="body2" sx={{ color: t.fg }}>
            {children}
          </Typography>
        )}
      </Box>
      {actions && <Box sx={{ display: "flex", gap: 1, alignItems: "center", flexShrink: 0 }}>{actions}</Box>}
      {onClose && (
        <IconButton onClick={onClose} aria-label="Dismiss" size="small" sx={{ color: t.fg, m: "-4px" }}>
          <HelixIcon name="close" size="sm" style={{ color: t.fg }} />
        </IconButton>
      )}
    </Box>
  );
}
