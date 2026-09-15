import { type ReactNode } from "react";
import MuiSwitch, { type SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface HelixSwitchProps extends SwitchProps {
  /** Text label shown next to the switch. Omit for a standalone control. */
  label?: ReactNode;
}

/**
 * Helix Switch (slide toggle) — a themed @mui/material Switch. Provide `label`
 * for the common label + control pairing.
 */
export function HelixSwitch({ label, ...rest }: HelixSwitchProps) {
  if (label === undefined) return <MuiSwitch {...rest} />;
  return <FormControlLabel control={<MuiSwitch {...rest} />} label={label} />;
}
