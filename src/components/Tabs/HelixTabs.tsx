import { type ReactNode, type SyntheticEvent } from "react";
import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";

export interface HelixTabItem {
  label: ReactNode;
  value: string | number;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface HelixTabsProps {
  tabs: HelixTabItem[];
  value: string | number;
  onChange: (value: string | number) => void;
  orientation?: "horizontal" | "vertical";
  variant?: "standard" | "fullWidth" | "scrollable";
}

/**
 * Helix Tabs — themed @mui/material Tabs (4px active indicator, label-large,
 * no uppercase). Controlled via `value` / `onChange`.
 */
export function HelixTabs({ tabs, value, onChange, orientation = "horizontal", variant = "standard" }: HelixTabsProps) {
  const handleChange = (_e: SyntheticEvent, v: string | number) => onChange(v);
  return (
    <MuiTabs value={value} onChange={handleChange} orientation={orientation} variant={variant}>
      {tabs.map((t) => (
        <MuiTab
          key={t.value}
          value={t.value}
          label={t.label}
          icon={t.icon as never}
          iconPosition="start"
          disabled={t.disabled}
        />
      ))}
    </MuiTabs>
  );
}
