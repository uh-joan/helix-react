import { forwardRef } from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";

/** Helix input density. */
export type HelixInputSize = "default" | "small" | "x-small";

export type HelixInputProps = Omit<TextFieldProps, "size"> & {
  /** Density size. Default "default". */
  size?: HelixInputSize;
};

/**
 * Helix Input (text field) — a themed @mui/material TextField.
 *
 * Defaults to the outlined appearance with Helix border colours (enabled
 * neutral/400, hover neutral/600, focused neutral/800, error red/500). Pass
 * `variant="filled"` for the filled appearance, `size` for Helix densities, plus
 * any MUI TextField prop (label, helperText, error, multiline, select, …).
 */
export const HelixInput = forwardRef<HTMLDivElement, HelixInputProps>(function HelixInput(
  { variant = "outlined", fullWidth = true, size = "default", sx, ...rest },
  ref,
) {
  const muiSize = size === "default" ? "medium" : "small";
  // x-small trims the field below MUI's smallest built-in density.
  const xSmallSx =
    size === "x-small"
      ? { "& .MuiInputBase-input": { paddingTop: "6px", paddingBottom: "6px", fontSize: 13 } }
      : undefined;

  return (
    <MuiTextField
      ref={ref}
      variant={variant}
      fullWidth={fullWidth}
      size={muiSize}
      sx={[xSmallSx, ...(Array.isArray(sx) ? sx : [sx])].filter(Boolean) as TextFieldProps["sx"]}
      {...rest}
    />
  );
});
