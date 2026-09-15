import { type ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { helixTheme } from "./theme/helixTheme";

export interface HelixProviderProps {
  children?: ReactNode;
}

/**
 * HelixProvider — wraps an app (or a single component) in the Helix theme.
 *
 * Every Helix component must render inside this provider to pick up the
 * Clarivate look: it installs the `helixTheme` (colours, typography, radius,
 * elevation), applies `CssBaseline`, and provides the date-picker localization.
 * Fonts (Clarivate Regular, Source Sans 3, Material Symbols) are loaded by the
 * host page.
 */
export function HelixProvider({ children }: HelixProviderProps) {
  return (
    <ThemeProvider theme={helixTheme}>
      <CssBaseline enableColorScheme />
      <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
    </ThemeProvider>
  );
}
