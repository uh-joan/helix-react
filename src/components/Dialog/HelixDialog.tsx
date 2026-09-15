import { type ReactNode } from "react";
import MuiDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { HelixIcon } from "../Icon/HelixIcon";

export interface HelixDialogProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  /** Show a close (✕) button in the title. Default true. */
  showClose?: boolean;
}

/**
 * Helix Dialog — themed @mui/material Dialog (2px container, surface bg) with
 * the standard title / content / actions composition.
 */
export function HelixDialog({
  open,
  onClose,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  showClose = true,
}: HelixDialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth={fullWidth}>
      {title && (
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pr: 1 }}>
          <span>{title}</span>
          {showClose && (
            <IconButton onClick={onClose} aria-label="Close" size="small">
              <HelixIcon name="close" color="secondary" size="sm" />
            </IconButton>
          )}
        </DialogTitle>
      )}
      <DialogContent>
        {typeof children === "string" ? <DialogContentText>{children}</DialogContentText> : children}
      </DialogContent>
      {actions && <DialogActions sx={{ px: 3, pb: 2 }}>{actions}</DialogActions>}
    </MuiDialog>
  );
}
