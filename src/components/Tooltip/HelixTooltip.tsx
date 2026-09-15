import { forwardRef } from "react";
import MuiTooltip, { type TooltipProps } from "@mui/material/Tooltip";

export type HelixTooltipProps = TooltipProps;

/**
 * Helix Tooltip — themed @mui/material Tooltip (neutral/600 container, 2px
 * corners, body-small text). Wrap a single focusable child.
 */
export const HelixTooltip = forwardRef<unknown, HelixTooltipProps>(function HelixTooltip(props, ref) {
  return <MuiTooltip ref={ref as never} {...props} />;
});
