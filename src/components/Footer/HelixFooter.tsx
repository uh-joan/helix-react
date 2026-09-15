import { type ReactNode } from "react";
import Box from "@mui/material/Box";
import { fontFamily } from "../../tokens/helix-tokens";

export interface HelixFooterLink {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface HelixFooterLinkGroup {
  title: ReactNode;
  links: HelixFooterLink[];
}

export interface HelixFooterProps {
  /** Columns of grouped links (rendered in a responsive grid). */
  linkGroups?: HelixFooterLinkGroup[];
  /** Flat links, shown when no `linkGroups` are given (defaults to Clarivate legal links). */
  links?: HelixFooterLink[];
  /** Copyright line. Defaults to "© <year> Clarivate". */
  copyright?: ReactNode;
  /** Slim padding variant (cdx-footer--slim). */
  slim?: boolean;
}

const DEFAULT_LINKS: HelixFooterLink[] = [
  { label: "Legal center", href: "https://clarivate.com/legal-center/" },
  { label: "Privacy notice", href: "https://clarivate.com/privacy-center/notices-policies/privacy-policy/" },
  { label: "Cookie policy", href: "https://clarivate.com/privacy-center/notices-policies/cookie-policy/" },
];

// Responsive column width used by cdx-footer (clamp 7.5rem…12rem).
const COL = "clamp(7.5rem, 7.5rem + 4.5 * (100vw - 48rem) / 37, 12rem)";

function FooterLink({ link }: { link: HelixFooterLink }) {
  return (
    <Box
      component="a"
      href={link.href}
      onClick={link.onClick}
      sx={{
        color: "inherit",
        textDecoration: "none",
        paddingTop: "3px",
        paddingBottom: "3px",
        cursor: "pointer",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      {link.label}
    </Box>
  );
}

/**
 * Helix Footer — mirrors <cdx-footer>: a black surface with the copyright on the
 * left (Clarivate Bold) followed by a responsive grid of link groups (or flat
 * links). Links inherit the footer colour and underline on hover.
 */
export function HelixFooter({ linkGroups, links, copyright, slim }: HelixFooterProps) {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        p: slim ? 1 : 4,
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: fontFamily.base,
        fontSize: 14,
      }}
    >
      <Box sx={{ width: COL, fontFamily: fontFamily.display, fontWeight: 700, fontSize: 16 }}>
        {copyright ?? `© ${year} Clarivate`}
      </Box>

      <Box
        sx={{
          display: "grid",
          flex: 1,
          gap: "inherit",
          gridTemplateColumns: `repeat(auto-fit, ${COL})`,
          alignItems: "start",
        }}
      >
        {linkGroups
          ? linkGroups.map((g, i) => (
              <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ fontFamily: fontFamily.display, fontWeight: 700, fontSize: 16 }}>{g.title}</Box>
                {g.links.map((l, j) => (
                  <FooterLink key={j} link={l} />
                ))}
              </Box>
            ))
          : (links ?? DEFAULT_LINKS).map((l, i) => <FooterLink key={i} link={l} />)}
      </Box>
    </Box>
  );
}
