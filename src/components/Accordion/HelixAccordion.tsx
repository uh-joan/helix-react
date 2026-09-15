import { type ReactNode } from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { HelixIcon } from "../Icon/HelixIcon";

export interface HelixAccordionItem {
  key?: string | number;
  title: ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
}

export interface HelixAccordionProps {
  items: HelixAccordionItem[];
}

/**
 * Helix Accordion (expansion panel) — themed @mui/material Accordion
 * (2px corners, surface background, flat borders, chevron indicator).
 */
export function HelixAccordion({ items }: HelixAccordionProps) {
  return (
    <div>
      {items.map((item, i) => (
        <MuiAccordion key={item.key ?? i} defaultExpanded={item.defaultExpanded} disabled={item.disabled} disableGutters>
          <AccordionSummary expandIcon={<HelixIcon name="expand_more" color="secondary" />}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {typeof item.children === "string" ? <Typography variant="body1">{item.children}</Typography> : item.children}
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}
