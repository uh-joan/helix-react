import { type ReactNode } from "react";
import MuiRadio, { type RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface HelixRadioProps extends RadioProps {
  label?: ReactNode;
}

/** Helix Radio — themed @mui/material Radio (checked = Helix primary). */
export function HelixRadio({ label, ...rest }: HelixRadioProps) {
  if (label === undefined) return <MuiRadio {...rest} />;
  return <FormControlLabel control={<MuiRadio {...rest} />} label={label} />;
}

export interface HelixRadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface HelixRadioGroupProps {
  label?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: HelixRadioOption[];
  row?: boolean;
  name?: string;
}

/** Helix RadioGroup — labelled group of radios. */
export function HelixRadioGroup({ label, value, onChange, options, row, name }: HelixRadioGroupProps) {
  return (
    <FormControl>
      {label && <FormLabel sx={{ mb: 0.5 }}>{label}</FormLabel>}
      <RadioGroup row={row} value={value} name={name} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <FormControlLabel key={o.value} value={o.value} control={<MuiRadio />} label={o.label} disabled={o.disabled} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
