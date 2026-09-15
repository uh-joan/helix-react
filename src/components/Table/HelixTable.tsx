import { useMemo, useState, type ReactNode } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { semantic } from "../../tokens/helix-tokens";

export interface HelixColumn<T> {
  key: string;
  header: ReactNode;
  align?: "left" | "right" | "center";
  sortable?: boolean;
  /** Custom cell renderer. Defaults to row[key]. */
  render?: (row: T) => ReactNode;
  /** Custom sort value. Defaults to row[key]. */
  sortValue?: (row: T) => string | number;
}

export interface HelixTableProps<T> {
  columns: HelixColumn<T>[];
  rows: T[];
  getRowKey?: (row: T, index: number) => string | number;
  dense?: boolean;
}

type Order = "asc" | "desc";

/**
 * Helix Table — themed @mui/material Table with client-side column sorting.
 * Header uses surface/minimal; rows use body-small. Set `sortable` per column.
 */
export function HelixTable<T extends Record<string, unknown>>({
  columns,
  rows,
  getRowKey,
  dense,
}: HelixTableProps<T>) {
  const [orderBy, setOrderBy] = useState<string | null>(null);
  const [order, setOrder] = useState<Order>("asc");

  const sorted = useMemo(() => {
    if (!orderBy) return rows;
    const col = columns.find((c) => c.key === orderBy);
    if (!col) return rows;
    const val = (row: T) => (col.sortValue ? col.sortValue(row) : (row[orderBy] as string | number));
    return [...rows].sort((a, b) => {
      const av = val(a);
      const bv = val(b);
      if (av < bv) return order === "asc" ? -1 : 1;
      if (av > bv) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, columns, orderBy, order]);

  const handleSort = (key: string) => {
    if (orderBy === key) {
      setOrder((o) => (o === "asc" ? "desc" : "asc"));
    } else {
      setOrderBy(key);
      setOrder("asc");
    }
  };

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${semantic.border.secondary}` }}>
      <Table size={dense ? "small" : "medium"}>
        <TableHead>
          <TableRow sx={{ "& th": { backgroundColor: semantic.surface.minimal, fontWeight: 600 } }}>
            {columns.map((c) => (
              <TableCell key={c.key} align={c.align} sortDirection={orderBy === c.key ? order : false}>
                {c.sortable ? (
                  <TableSortLabel
                    active={orderBy === c.key}
                    direction={orderBy === c.key ? order : "asc"}
                    onClick={() => handleSort(c.key)}
                  >
                    {c.header}
                  </TableSortLabel>
                ) : (
                  c.header
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map((row, i) => (
            <TableRow key={getRowKey ? getRowKey(row, i) : i} hover>
              {columns.map((c) => (
                <TableCell key={c.key} align={c.align}>
                  {c.render ? c.render(row) : (row[c.key] as ReactNode)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
