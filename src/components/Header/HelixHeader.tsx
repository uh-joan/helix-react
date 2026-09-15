import { type ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { semantic, fontFamily } from "../../tokens/helix-tokens";
import { HelixIconButton } from "../IconButton/HelixIconButton";
import { HelixIcon } from "../Icon/HelixIcon";

export interface HelixHeaderNavItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface HelixHeaderProps {
  /** Product name shown next to the Clarivate wordmark. */
  productName?: ReactNode;
  /** Primary navigation items. */
  nav?: HelixHeaderNavItem[];
  /** Right-aligned actions (search, avatar, etc.). */
  actions?: ReactNode;
  /** Show a leading menu (hamburger) button. */
  onMenuClick?: () => void;
  /** Override the logo node (defaults to the "Clarivate" wordmark). */
  logo?: ReactNode;
}

/**
 * Helix Header — the Clarivate application header (white bar, bottom border,
 * Clarivate wordmark + product name, primary nav, right-aligned actions).
 * Mirrors the @cdx/branding <cdx-header>. The wordmark uses the Clarivate
 * display font; pass `logo` to substitute the official logo SVG.
 */
export function HelixHeader({ productName, nav, actions, onMenuClick, logo }: HelixHeaderProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: semantic.surface.primary,
        color: semantic.text.primary,
        borderBottom: `1px solid ${semantic.border.secondary}`,
      }}
    >
      <Toolbar sx={{ gap: 2, minHeight: 64 }}>
        {onMenuClick && (
          <HelixIconButton aria-label="Menu" onClick={onMenuClick} edge="start">
            <HelixIcon name="menu" />
          </HelixIconButton>
        )}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {logo ?? (
            <Typography
              component="span"
              sx={{ fontFamily: fontFamily.display, fontWeight: 700, fontSize: 22, lineHeight: 1 }}
            >
              Clarivate
            </Typography>
          )}
          {productName && (
            <>
              <Box sx={{ width: "1px", height: 24, backgroundColor: semantic.border.primary }} />
              <Typography component="span" variant="h6" sx={{ fontWeight: 400 }}>
                {productName}
              </Typography>
            </>
          )}
        </Box>

        {nav && nav.length > 0 && (
          <Box component="nav" sx={{ display: "flex", gap: 3, ml: 3 }}>
            {nav.map((item, i) => (
              <Box
                key={i}
                component="a"
                href={item.href}
                onClick={item.onClick}
                sx={{
                  cursor: "pointer",
                  color: item.active ? semantic.text.primary : semantic.text.secondary,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  py: 2,
                  borderBottom: item.active ? `4px solid ${semantic.text.primary}` : "4px solid transparent",
                  "&:hover": { color: semantic.text.primary },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        )}

        <Box sx={{ flex: 1 }} />
        {actions && <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>{actions}</Box>}
      </Toolbar>
    </AppBar>
  );
}
