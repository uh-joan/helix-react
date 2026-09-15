import { type ReactNode } from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface HelixCrumb {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface HelixBreadcrumbsProps {
  items: HelixCrumb[];
  /** Separator between crumbs. Default "/". */
  separator?: ReactNode;
}

/**
 * Helix Breadcrumbs — themed @mui/material Breadcrumbs. The last item renders
 * as plain (current) text; earlier items are links (inherit colour, underline
 * on hover, per the Helix link style).
 */
export function HelixBreadcrumbs({ items, separator = "/" }: HelixBreadcrumbsProps) {
  return (
    <MuiBreadcrumbs separator={separator} aria-label="breadcrumb">
      {items.map((c, i) => {
        const isLast = i === items.length - 1;
        if (isLast) {
          return (
            <Typography key={i} variant="body1" color="text.primary" aria-current="page">
              {c.label}
            </Typography>
          );
        }
        return (
          <Link
            key={i}
            href={c.href}
            onClick={c.onClick}
            underline="hover"
            color="text.secondary"
            sx={{ cursor: "pointer" }}
          >
            {c.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
