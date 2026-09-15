import { forwardRef } from "react";
import { HelixInput, type HelixInputProps } from "../Input/HelixInput";

export type HelixTextAreaProps = HelixInputProps & {
  /** Visible rows. Default 4. */
  rows?: number;
  /** Grow with content instead of a fixed row count. */
  autoResize?: boolean;
};

/**
 * Helix Text Area — a multiline text field. Same outlined/filled Helix styling
 * and states as HelixInput, defaulting to multiline. Use `autoResize` to grow
 * with content, or `rows`/`minRows`/`maxRows` for fixed sizing.
 */
export const HelixTextArea = forwardRef<HTMLDivElement, HelixTextAreaProps>(function HelixTextArea(
  { rows = 4, autoResize, ...rest },
  ref,
) {
  return <HelixInput ref={ref} multiline {...(autoResize ? { minRows: rows } : { rows })} {...rest} />;
});
