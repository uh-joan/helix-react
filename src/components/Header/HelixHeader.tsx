import { type ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { semantic, fontFamily } from "../../tokens/helix-tokens";
import { HelixIconButton } from "../IconButton/HelixIconButton";
import { HelixIcon } from "../Icon/HelixIcon";
import { HelixLogo } from "../Logo/HelixLogo";

export interface HelixHeaderNavItem {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface HelixHeaderProps {
  /** Product name shown in the product bar. */
  productName?: ReactNode;
  /** Primary navigation items (product bar). */
  nav?: HelixHeaderNavItem[];
  /** Global actions on the right of the black global bar (search, user profile…). */
  actions?: ReactNode;
  /** Actions on the right of the white product bar. */
  productActions?: ReactNode;
  /** Leading menu (hamburger) button in the product bar. */
  onMenuClick?: () => void;
  /** Called when the Clarivate logo is clicked. */
  onLogoClick?: () => void;
  /** Override the logo node. */
  logo?: ReactNode;
  /** Condensed: single (product) bar, no black global bar. */
  condensed?: boolean;
  /** Hide the Clarivate logo (use when the logo is in the footer). */
  hideLogo?: boolean;
  /** Optional tabs row rendered below the product bar. */
  tabs?: ReactNode;
}

// Product-bar elevation, from the cdx-header component styles.
const PRODUCT_BAR_SHADOW =
  "0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12)";

/**
 * Helix Header — the Clarivate application header, mirroring <cdx-header>:
 * a black global bar (Clarivate logo + global actions) above a white product
 * bar (product name, nav, actions) with an elevation shadow.
 */
export function HelixHeader({
  productName,
  nav,
  actions,
  productActions,
  onMenuClick,
  onLogoClick,
  logo,
  condensed,
  hideLogo,
  tabs,
}: HelixHeaderProps) {
  const logoNode = logo ?? <HelixLogo height={20} />;
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "transparent" }}>
      {/* Global bar — black, Clarivate logo left + global actions right. */}
      {!condensed && (
        <Box
          sx={{
            display: "flex",
            height: 40,
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          {!hideLogo ? (
            <Box
              role={onLogoClick ? "button" : undefined}
              onClick={onLogoClick}
              sx={{ display: "flex", alignItems: "center", cursor: onLogoClick ? "pointer" : "default" }}
              aria-label="Clarivate"
            >
              {logoNode}
            </Box>
          ) : (
            <span />
          )}
          {actions && <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>{actions}</Box>}
        </Box>
      )}

      {/* Product bar — white, product identification + nav + actions, elevated. */}
      <Box
        sx={{
          display: "flex",
          minHeight: 40,
          maxHeight: 80,
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          columnGap: 4,
          backgroundColor: semantic.surface.primary,
          color: semantic.text.primary,
          boxShadow: PRODUCT_BAR_SHADOW,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
          {onMenuClick && (
            <HelixIconButton aria-label="Menu" onClick={onMenuClick} edge="start">
              <HelixIcon name="menu" />
            </HelixIconButton>
          )}
          {/* In condensed mode (no global bar) the logo lives here, in dark. */}
          {condensed && !hideLogo && <Box sx={{ display: "flex", alignItems: "center" }}>{logoNode}</Box>}
          {productName && (
            <Typography
              component="span"
              sx={{ fontFamily: fontFamily.display, fontWeight: 700, fontSize: 20, lineHeight: 1 }}
            >
              {productName}
            </Typography>
          )}
          {nav && nav.length > 0 && (
            <Box component="nav" sx={{ display: "flex", gap: 3, ml: 1, alignSelf: "stretch" }}>
              {nav.map((item, i) => (
                <Box
                  key={i}
                  component="a"
                  href={item.href}
                  onClick={item.onClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: item.active ? semantic.text.primary : semantic.text.secondary,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    borderBottom: item.active ? `4px solid ${semantic.text.primary}` : "4px solid transparent",
                    "&:hover": { color: semantic.text.primary },
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Box>
          )}
        </Box>
        {productActions && <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>{productActions}</Box>}
      </Box>

      {tabs && <Box sx={{ px: 2, backgroundColor: semantic.surface.primary }}>{tabs}</Box>}
    </AppBar>
  );
}
