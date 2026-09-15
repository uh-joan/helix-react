import { forwardRef } from "react";
import MuiMenu, { type MenuProps } from "@mui/material/Menu";
import MuiMenuItem, { type MenuItemProps } from "@mui/material/MenuItem";

export type HelixMenuProps = MenuProps;
export type HelixMenuItemProps = MenuItemProps;

/**
 * Helix Menu — themed @mui/material Menu (surface background, 2px corners,
 * Helix hover/selected state layers on items). Controlled with `anchorEl` /
 * `open` / `onClose`, as with MUI Menu.
 */
export const HelixMenu = forwardRef<HTMLDivElement, HelixMenuProps>(function HelixMenu(props, ref) {
  return <MuiMenu ref={ref} {...props} />;
});

/** Helix MenuItem — themed @mui/material MenuItem. */
export const HelixMenuItem = forwardRef<HTMLLIElement, HelixMenuItemProps>(function HelixMenuItem(props, ref) {
  return <MuiMenuItem ref={ref} {...props} />;
});
