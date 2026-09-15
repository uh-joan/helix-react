import { forwardRef } from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";

/**
 * Helix input density (Material 3 component scaling, −4px per level).
 * 0 = default (~56px) … −4 = 40px (aligns with the default button height).
 */
export type HelixDensity = 0 | -1 | -2 | -3 | -4;

export type HelixInputProps = Omit<TextFieldProps, "size"> & {
  /** Density 0…−4. Default 0. */
  density?: HelixDensity;
};

/** Vertical input padding (px) per density level; density 0 uses MUI's default. */
export function densityPadding(density: HelixDensity): number {
  // small baseline ≈ 8.5px (→40px at −4); +2px per level up to −1.
  return 8.5 + (density + 4) * 2;
}

/**
 * Helix Input (text field) — a themed @mui/material TextField.
 *
 * Outlined by default with Helix border colours (enabled neutral/400, hover
 * neutral/600, focused neutral/800, error red/500). `variant="filled"` for the
 * filled style; `density` 0…−4 for compact layouts (−4 = 40px). Plus any MUI
 * TextField prop (label, helperText, error, multiline, select, …).
 */
export const HelixInput = forwardRef<HTMLDivElement, HelixInputProps>(function HelixInput(
  { variant = "outlined", fullWidth = true, density = 0, sx, ...rest },
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
      variant={variant}
      fullWidth={fullWidth}
      size={muiSize}
      sx={[densitySx, ...(Array.isArray(sx) ? sx : [sx])].filter(Boolean) as TextFieldProps["sx"]}
      {...rest}
    />
  );
});
