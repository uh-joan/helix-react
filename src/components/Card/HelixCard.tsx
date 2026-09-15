import { type ReactNode } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { HelixIcon } from "../Icon/HelixIcon";

export interface HelixCardProps {
  /** Card title (rendered as a Headline). */
  title?: ReactNode;
  /** Secondary line under the title. */
  subtitle?: ReactNode;
  /** Main body content. */
  children?: ReactNode;
  /** Footer action area (e.g. Helix buttons). */
  actions?: ReactNode;
  /** Show a close (✕) button in the header. */
  onClose?: () => void;
  /** Elevation level 0–3. Default 1. */
  elevation?: 0 | 1 | 2 | 3;
}

/**
 * Helix Card — a themed @mui/material Card with the standard Helix
 * header / content / actions composition.
 */
export function HelixCard({ title, subtitle, children, actions, onClose, elevation = 1 }: HelixCardProps) {
  return (
    <MuiCard elevation={elevation}>
      {(title || subtitle || onClose) && (
        <CardHeader
          title={
            title ? (
              <Typography variant="h5" component="div">
                {title}
              </Typography>
            ) : undefined
          }
          subheader={
            subtitle ? (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            ) : undefined
          }
          action={
            onClose ? (
              <IconButton onClick={onClose} aria-label="Close" size="small">
                <HelixIcon name="close" color="secondary" size="sm" />
              </IconButton>
            ) : undefined
          }
        />
      )}
      {children && <CardContent>{children}</CardContent>}
      {actions && <CardActions sx={{ px: 2, pb: 2 }}>{actions}</CardActions>}
    </MuiCard>
  );
}
