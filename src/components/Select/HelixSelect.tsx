import { forwardRef } from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { type HelixDensity, densityPadding } from "../Input/HelixInput";

export interface HelixSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export type HelixSelectProps = Omit<TextFieldProps, "select" | "size"> & {
  /** Options to render. Alternatively, pass MenuItem children. */
  options?: HelixSelectOption[];
  /** Density 0…−4. Default 0. */
  density?: HelixDensity;
};

/**
 * Helix Select — a themed @mui/material Select (via TextField `select`).
 * Pass `options` for the common case, or MenuItem children for custom content.
 * `density` 0…−4 for compact layouts (matches HelixInput).
 */
export const HelixSelect = forwardRef<HTMLDivElement, HelixSelectProps>(function HelixSelect(
  { options, children, variant = "outlined", fullWidth = true, density = 0, sx, ...rest },
  ref,
) {
  const muiSize = density === 0 ? "medium" : "small";
  const densitySx =
    density === 0
      ? undefined
      : {
          "& .MuiInputBase-input": {
            paddingTop: `${densityPadding(density)}px`,
            paddingBottom: `${densityPadding(density)}px`,
          },
        };
  return (
    <MuiTextField
      ref={ref}
      select
      variant={variant}
      fullWidth={fullWidth}
      size={muiSize}
      sx={[densitySx, ...(Array.isArray(sx) ? sx : [sx])].filter(Boolean) as TextFieldProps["sx"]}
      {...rest}
    >
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
