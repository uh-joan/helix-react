import { forwardRef } from "react";
import MuiChip, { type ChipProps } from "@mui/material/Chip";

export type HelixChipProps = ChipProps;

/**
 * Helix Chip — a themed @mui/material Chip (2px corners, semibold label).
 * Supports MUI's `variant` (filled/outlined), `onDelete`, `icon`, `avatar`,
 * `clickable`, and `color`.
 */
export const HelixChip = forwardRef<HTMLDivElement, HelixChipProps>(function HelixChip(props, ref) {
  return <MuiChip ref={ref} {...props} />;
});
