import { type ReactNode } from "react";
import MuiDrawer, { type DrawerProps } from "@mui/material/Drawer";

export interface HelixSidenavProps extends Omit<DrawerProps, "variant"> {
  /** temporary = overlay (mobile), persistent/permanent = inline. Default "temporary". */
  variant?: "temporary" | "persistent" | "permanent";
  /** Drawer width in px. Default 280. */
  width?: number;
  children?: ReactNode;
}

/**
 * Helix Sidenav — themed @mui/material Drawer. Use `variant="permanent"` for a
 * fixed side navigation, or "temporary" for an overlay drawer.
 */
export function HelixSidenav({ variant = "temporary", width = 280, anchor = "left", children, ...rest }: HelixSidenavProps) {
  return (
    <MuiDrawer
      variant={variant}
      anchor={anchor}
      PaperProps={{ sx: { width, boxSizing: "border-box" } }}
      {...rest}
    >
      {children}
    </MuiDrawer>
  );
}
