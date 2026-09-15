/**
 * Helix React — public library entry.
 * Every component must be used inside <HelixProvider> (or a MUI ThemeProvider
 * with `helixTheme`) to render with the Clarivate look.
 */
export * from "./components";
export { HelixProvider } from "./HelixProvider";
export type { HelixProviderProps } from "./HelixProvider";
export { helixTheme } from "./theme/helixTheme";
export * as helixTokens from "./tokens/helix-tokens";
