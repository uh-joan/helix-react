import { forwardRef } from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

export interface HelixSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export type HelixSelectProps = Omit<TextFieldProps, "select"> & {
  /** Options to render. Alternatively, pass MenuItem children. */
  options?: HelixSelectOption[];
};

/**
 * Helix Select — a themed @mui/material Select (via TextField `select`).
 * Pass `options` for the common case, or MenuItem children for custom content.
 */
export const HelixSelect = forwardRef<HTMLDivElement, HelixSelectProps>(function HelixSelect(
  { options, children, variant = "outlined", fullWidth = true, ...rest },
  ref,
) {
  return (
    <MuiTextField ref={ref} select variant={variant} fullWidth={fullWidth} {...rest}>
      {options
        ? options.map((o) => (
            <MenuItem key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </MenuItem>
          ))
        : children}
    </MuiTextField>
  );
});
