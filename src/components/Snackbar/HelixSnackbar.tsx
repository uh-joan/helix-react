import { type ReactNode } from "react";
import MuiSnackbar, { type SnackbarProps } from "@mui/material/Snackbar";

export interface HelixSnackbarProps extends Omit<SnackbarProps, "message" | "action"> {
  message: ReactNode;
  action?: ReactNode;
}

/**
 * Helix Snackbar (toast) — themed @mui/material Snackbar (dark surface/invert
 * container, white text/action). Controlled via `open` / `onClose`.
 */
export function HelixSnackbar({ message, action, autoHideDuration = 4000, ...rest }: HelixSnackbarProps) {
  return <MuiSnackbar message={message} action={action} autoHideDuration={autoHideDuration} {...rest} />;
}
