import { type ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { semantic, palette } from "../../tokens/helix-tokens";
import { HelixLogo } from "../Logo/HelixLogo";

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
  /** Optional columns of links (e.g. application or resource links). */
  linkGroups?: HelixFooterLinkGroup[];
  /** Legal links shown in the bottom bar. */
  legalLinks?: HelixFooterLink[];
  /** Copyright line. Defaults to "© <year> Clarivate". */
  copyright?: ReactNode;
}

function FooterLink({ link }: { link: HelixFooterLink }) {
  return (
    <Box
      component="a"
      href={link.href}
      onClick={link.onClick}
      sx={{
        color: semantic.text.invert,
        opacity: 0.85,
        textDecoration: "none",
        fontSize: 13,
        cursor: "pointer",
        "&:hover": { textDecoration: "underline", opacity: 1 },
      }}
    >
      {link.label}
    </Box>
  );
}

/**
 * Helix Footer — the Clarivate application footer (dark surface/invert, Clarivate
 * wordmark, optional link-group columns, and a bottom bar with legal links and
 * copyright). Mirrors the @cdx/branding <cdx-footer>.
 */
export function HelixFooter({ linkGroups, legalLinks, copyright }: HelixFooterProps) {
  const year = new Date().getFullYear();
  return (
    <Box component="footer" sx={{ backgroundColor: semantic.surface.invert, color: semantic.text.invert, px: 4, py: 4 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "flex-start" }}>
        <HelixLogo height={24} />
        <Box sx={{ flex: 1 }} />
        {linkGroups?.map((g, i) => (
          <Box key={i} sx={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 140 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 0.5 }}>{g.title}</Typography>
            {g.links.map((l, j) => (
              <FooterLink key={j} link={l} />
            ))}
          </Box>
        ))}
      </Box>

      <Box sx={{ height: "1px", backgroundColor: "rgba(255,255,255,0.16)", my: 3 }} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 13, color: palette.neutral[400] }}>
          {copyright ?? `© ${year} Clarivate`}
        </Typography>
        {legalLinks && legalLinks.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {legalLinks.map((l, i) => (
              <FooterLink key={i} link={l} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
