import { type ReactNode } from "react";
import { styled } from "@mui/material/styles";
import ToggleButtonGroup, { type ToggleButtonGroupProps } from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { palette, semantic, radius } from "../../tokens/helix-tokens";
import { HelixIcon } from "../Icon/HelixIcon";

export interface HelixToggleOption {
  value: string;
  label?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface HelixButtonToggleProps
  extends Omit<ToggleButtonGroupProps, "onChange" | "value" | "children"> {
  options: HelixToggleOption[];
  value: string | string[] | null;
  onChange: (value: string | string[] | null) => void;
  /** Equal-width buttons (Helix "equal button widths"). */
  equalWidths?: boolean;
  /** Dark theme for dark surfaces (Helix .hlx-button-toggle-invert). */
  invert?: boolean;
}

// Matches Helix .hlx-button-toggle-container (1px #BABCBE border, 2px radius,
// 4px padding, surface/minimal background, 30px toggle height).
const Group = styled(ToggleButtonGroup, {
  shouldForwardProp: (p) => p !== "invert" && p !== "equalWidths",
})<{ invert?: boolean; equalWidths?: boolean }>(({ invert, equalWidths }) => ({
  width: "fit-content",
  padding: 4,
  border: `1px solid ${invert ? "transparent" : palette.neutral[400]}`,
  borderRadius: radius.default,
  backgroundColor: invert ? semantic.surface.invert : semantic.surface.minimal,
  gap: 4,
  "& .MuiToggleButton-root": {
    height: 30,
    border: "none",
    borderRadius: radius.default,
    textTransform: "none",
    fontWeight: 600,
    flex: equalWidths ? 1 : undefined,
    color: invert ? semantic.text.invert : semantic.text.secondary,
    padding: "0 12px",
    "&.Mui-selected": {
      backgroundColor: invert ? semantic.text.invert : semantic.surface.primary,
      color: semantic.text.primary,
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      "&:hover": { backgroundColor: invert ? semantic.text.invert : semantic.surface.primary },
    },
    "&:hover": { backgroundColor: invert ? "rgba(255, 255, 255, 0.08)" : "rgba(42, 43, 45, 0.08)" },
  },
}));

/**
 * Helix Button toggle (segmented button) — themed ToggleButtonGroup with the
 * Helix pill container. `exclusive` (default) for single-select.
 */
export function HelixButtonToggle({
  options,
  value,
  onChange,
  exclusive = true,
  equalWidths,
  invert,
  ...rest
}: HelixButtonToggleProps) {
  return (
    <Group
      value={value}
      exclusive={exclusive}
      invert={invert}
      equalWidths={equalWidths}
      onChange={(_e, v) => onChange(v)}
      {...rest}
    >
      {options.map((o) => {
        const selected = Array.isArray(value) ? value.includes(o.value) : value === o.value;
        // Helix: a selected icon+label segment shows a checkmark in place of its icon.
        const icon = selected && o.icon && o.label ? <HelixIcon name="check" size="sm" /> : o.icon;
        return (
          <ToggleButton key={o.value} value={o.value} disabled={o.disabled}>
            {icon}
            {icon && o.label ? <span style={{ marginLeft: 6 }}>{o.label}</span> : o.label}
          </ToggleButton>
        );
      })}
    </Group>
  );
}
