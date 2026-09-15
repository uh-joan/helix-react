import { type ReactNode } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { palette, radius } from "../../tokens/helix-tokens";
import { HelixIcon } from "../Icon/HelixIcon";

/** Helix Notification severities. */
export type HelixAlertSeverity = "info" | "success" | "warning" | "error";
export type HelixAlertVariant = "inline" | "banner";

export interface HelixAlertProps {
  severity?: HelixAlertSeverity;
  variant?: HelixAlertVariant;
  title?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
}

const SEVERITY = {
  info: { bg: palette.blue[100], fg: palette.blue[900], icon: "info" },
  success: { bg: palette.green[100], fg: palette.green[900], icon: "check_circle" },
  warning: { bg: palette.yellow[100], fg: palette.yellow[900], icon: "warning" },
  error: { bg: palette.red[100], fg: palette.red[900], icon: "error" },
} as const;

/**
 * Helix Alert (Notification) — inline or banner. Colours are the Helix
 * surface/text semantic pairs per severity, with a leading status icon and an
 * optional close button.
 */
export function HelixAlert({ severity = "info", variant = "inline", title, children, onClose }: HelixAlertProps) {
  const s = SEVERITY[severity];
  return (
    <Box
      role="alert"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1,
        p: variant === "banner" ? "12px 16px" : "12px",
        width: variant === "banner" ? "100%" : undefined,
        backgroundColor: s.bg,
        color: s.fg,
        borderRadius: variant === "banner" ? 0 : `${radius.default}px`,
      }}
    >
      <Box sx={{ color: s.fg, display: "flex", pt: "2px" }}>
        <HelixIcon name={s.icon} size="sm" color="primary" style={{ color: s.fg }} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {title && (
          <Typography variant="body1" sx={{ fontWeight: 600, color: s.fg }}>
            {title}
          </Typography>
        )}
        {children && (
          <Typography variant="body2" sx={{ color: s.fg }}>
            {children}
          </Typography>
        )}
      </Box>
      {onClose && (
        <IconButton onClick={onClose} aria-label="Dismiss" size="small" sx={{ color: s.fg, m: "-4px" }}>
          <HelixIcon name="close" size="sm" style={{ color: s.fg }} />
        </IconButton>
      )}
    </Box>
  );
}
