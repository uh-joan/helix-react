import { forwardRef } from "react";
import MuiTablePagination, { type TablePaginationProps } from "@mui/material/TablePagination";

export type HelixPaginatorProps = TablePaginationProps;

/**
 * Helix Paginator — the Helix "paginator" pattern (items-per-page selector,
 * "X–Y of Z" total, first/last + prev/next buttons), matching the Angular
 * mat-paginator. Built on MUI TablePagination.
 *
 * For simple page-number pagination, use HelixPagination instead.
 */
export const HelixPaginator = forwardRef<HTMLDivElement, HelixPaginatorProps>(function HelixPaginator(
  { showFirstButton = true, showLastButton = true, rowsPerPageOptions = [5, 10, 25, 50], component = "div", ...rest },
  ref,
) {
  return (
    <MuiTablePagination
      ref={ref}
      component={component}
      showFirstButton={showFirstButton}
      showLastButton={showLastButton}
      rowsPerPageOptions={rowsPerPageOptions}
      {...rest}
    />
  );
});
