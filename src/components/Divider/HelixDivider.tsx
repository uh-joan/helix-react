import { forwardRef } from "react";
import MuiDivider, { type DividerProps } from "@mui/material/Divider";

export type HelixDividerProps = DividerProps;

/** Helix Divider — themed @mui/material Divider (surface/contrast colour). */
export const HelixDivider = forwardRef<HTMLHRElement, HelixDividerProps>(function HelixDivider(props, ref) {
  return <MuiDivider ref={ref} {...props} />;
});
