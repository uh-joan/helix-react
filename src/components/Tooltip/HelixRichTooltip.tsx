import { type ReactElement, type ReactNode } from "react";
import MuiTooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { semantic, radius, elevation } from "../../tokens/helix-tokens";

export interface HelixRichTooltipProps {
  /** Optional bold title line. */
  title?: ReactNode;
  /** Body content. */
  content: ReactNode;
  /** Up to two trailing action buttons (Helix rich tooltip takes 1–2). */
  actions?: ReactNode;
  /** The element the tooltip is anchored to. */
  children: ReactElement;
}

/**
 * Helix Rich Tooltip — an interactive tooltip on a light surface with an
 * optional title, body text and 1–2 action buttons (per the Helix Rich Tooltip
 * spec). Distinct from the plain HelixTooltip (dark, text-only).
 */
export function HelixRichTooltip({ title, content, actions, children }: HelixRichTooltipProps) {
  return (
    <MuiTooltip
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: semantic.surface.primary,
            color: semantic.text.primary,
            border: `1px solid ${semantic.border.secondary}`,
            borderRadius: `${radius.default}px`,
            boxShadow: elevation[3],
            padding: 0,
            maxWidth: 320,
          },
        },
      }}
      title={
        <Box sx={{ p: 2 }}>
          {title && (
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: semantic.text.primary }}>
              {title}
            </Typography>
          )}
          <Typography variant="body2" sx={{ color: semantic.text.secondary }}>
            {content}
          </Typography>
          {actions && <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end", mt: 1.5 }}>{actions}</Box>}
        </Box>
      }
    >
      {children}
    </MuiTooltip>
  );
}
