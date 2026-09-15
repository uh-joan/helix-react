import { type ReactNode } from "react";
import MuiSwitch, { type SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

/** Slide toggle density 0…−2. */
export type HelixSwitchDensity = 0 | -1 | -2;

export interface HelixSwitchProps extends Omit<SwitchProps, "size"> {
  /** Text label shown next to the switch. Omit for a standalone control. */
  label?: ReactNode;
  /** Density 0…−2. Default 0. */
  density?: HelixSwitchDensity;
}

/**
 * Helix Switch (slide toggle) — a themed @mui/material Switch. Provide `label`
 * for the common label + control pairing; `density` 0…−2 for compact layouts.
 */
export function HelixSwitch({ label, density = 0, sx, ...rest }: HelixSwitchProps) {
  const muiSize = density === 0 ? "medium" : "small";
  const densitySx = density === -2 ? { transform: "scale(0.85)", transformOrigin: "left center" } : undefined;
  const control = (
    <MuiSwitch size={muiSize} sx={[densitySx, ...(Array.isArray(sx) ? sx : [sx])].filter(Boolean)} {...rest} />
  );
  if (label === undefined) return control;
  return <FormControlLabel control={control} label={label} />;
}
