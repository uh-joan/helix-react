import { forwardRef } from "react";
import MuiLink, { type LinkProps } from "@mui/material/Link";

export type HelixLinkProps = LinkProps;

/**
 * Helix Hyperlink — themed @mui/material Link. Defaults to the Helix link
 * behaviour: accent colour, underline on hover.
 */
export const HelixLink = forwardRef<HTMLAnchorElement, HelixLinkProps>(function HelixLink(
  { underline = "hover", color = "secondary", ...rest },
  ref,
) {
  return <MuiLink ref={ref} underline={underline} color={color} {...rest} />;
});
