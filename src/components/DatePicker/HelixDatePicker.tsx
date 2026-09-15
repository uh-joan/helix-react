import { DatePicker, type DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { type Dayjs } from "dayjs";

export type HelixDatePickerProps = DatePickerProps<Dayjs> & {
  fullWidth?: boolean;
};

/**
 * Helix Date picker — themed @mui/x-date-pickers DatePicker. The field uses the
 * outlined Helix input styling, and the calendar popover inherits Helix's 2px
 * surface. Requires a LocalizationProvider (AdapterDayjs) above it — wired in
 * main.tsx. Controlled via `value` (Dayjs) / `onChange`.
 */
export function HelixDatePicker({ fullWidth = true, slotProps, ...rest }: HelixDatePickerProps) {
  return (
    <DatePicker
      slotProps={{ textField: { fullWidth, ...(slotProps?.textField as object) }, ...slotProps }}
      {...rest}
    />
  );
}
