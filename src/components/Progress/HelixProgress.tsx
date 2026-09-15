import { forwardRef } from "react";
import MuiLinearProgress, { type LinearProgressProps } from "@mui/material/LinearProgress";
import MuiCircularProgress, { type CircularProgressProps } from "@mui/material/CircularProgress";

export type HelixProgressBarProps = LinearProgressProps;
export type HelixSpinnerProps = CircularProgressProps;

/**
 * Helix Progress bar — themed @mui/material LinearProgress (surface/contrast
 * track, primary bar, 2px corners). Determinate or indeterminate.
 */
export const HelixProgressBar = forwardRef<HTMLSpanElement, HelixProgressBarProps>(function HelixProgressBar(
  { color = "primary", ...rest },
  ref,
) {
  return <MuiLinearProgress ref={ref} color={color} {...rest} />;
});

/** Helix Progress spinner — themed @mui/material CircularProgress. */
export const HelixSpinner = forwardRef<HTMLSpanElement, HelixSpinnerProps>(function HelixSpinner(
  { color = "primary", ...rest },
  ref,
) {
  return <MuiCircularProgress ref={ref} color={color} {...rest} />;
});
