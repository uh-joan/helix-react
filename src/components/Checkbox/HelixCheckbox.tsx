import { type ReactNode } from "react";
import MuiCheckbox, { type CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface HelixCheckboxProps extends CheckboxProps {
  /** Text label shown next to the checkbox. Omit for a standalone control. */
  label?: ReactNode;
}

/**
 * Helix Checkbox — a themed @mui/material Checkbox. Checked state uses the
 * Helix primary (dark neutral) colour. Provide `label` for the common
 * label + control pairing.
 */
export function HelixCheckbox({ label, ...rest }: HelixCheckboxProps) {
  if (label === undefined) return <MuiCheckbox {...rest} />;
  return <FormControlLabel control={<MuiCheckbox {...rest} />} label={label} />;
}
