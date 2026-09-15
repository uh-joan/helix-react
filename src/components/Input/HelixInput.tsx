import { forwardRef } from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";

export type HelixInputProps = TextFieldProps;

/**
 * Helix Input (text field) — a themed @mui/material TextField.
 *
 * Defaults to the outlined appearance with Helix border colours (enabled
 * neutral/400, hover neutral/600, focused neutral/800, error red/500). Pass
 * `variant="filled"` for the filled appearance, plus any MUI TextField prop
 * (label, helperText, error, multiline, select, size, …).
 */
export const HelixInput = forwardRef<HTMLDivElement, HelixInputProps>(function HelixInput(
  { variant = "outlined", fullWidth = true, ...rest },
  ref,
) {
  return <MuiTextField ref={ref} variant={variant} fullWidth={fullWidth} {...rest} />;
});
