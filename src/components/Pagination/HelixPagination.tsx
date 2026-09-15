import { forwardRef } from "react";
import MuiPagination, { type PaginationProps } from "@mui/material/Pagination";

export type HelixPaginationProps = PaginationProps;

/**
 * Helix Pagination — themed @mui/material Pagination (2px items, primary
 * selected). Defaults to the "rounded" shape to match Helix's 2px corners.
 */
export const HelixPagination = forwardRef<HTMLElement, HelixPaginationProps>(function HelixPagination(
  { shape = "rounded", ...rest },
  ref,
) {
  return <MuiPagination ref={ref} shape={shape} {...rest} />;
});
