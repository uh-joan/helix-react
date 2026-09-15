import { type ReactNode } from "react";
import MuiList from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export interface HelixListItem {
  key?: string | number;
  primary: ReactNode;
  secondary?: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface HelixListProps {
  items: HelixListItem[];
  /** Compact vertical padding. */
  dense?: boolean;
}

/**
 * Helix List — themed @mui/material List. Interactive when `onClick` is set
 * (renders a ListItemButton with Helix hover/selected state layers); otherwise
 * a static ListItem. Supports leading/trailing icons and secondary text.
 */
export function HelixList({ items, dense }: HelixListProps) {
  return (
    <MuiList dense={dense} disablePadding>
      {items.map((item, i) => {
        const content = (
          <>
            {item.leadingIcon && <ListItemIcon sx={{ minWidth: 40 }}>{item.leadingIcon}</ListItemIcon>}
            <ListItemText primary={item.primary} secondary={item.secondary} />
            {item.trailingIcon}
          </>
        );
        return (
          <ListItem key={item.key ?? i} disablePadding={!!item.onClick} secondaryAction={undefined} disabled={item.disabled}>
            {item.onClick ? (
              <ListItemButton onClick={item.onClick} selected={item.selected} disabled={item.disabled}>
                {content}
              </ListItemButton>
            ) : (
              content
            )}
          </ListItem>
        );
      })}
    </MuiList>
  );
}
