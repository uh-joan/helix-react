import MuiAutocomplete, { type AutocompleteProps } from "@mui/material/Autocomplete";
import { HelixInput } from "../Input/HelixInput";

export type HelixAutocompleteProps<T> = Omit<
  AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
  "renderInput"
> & {
  label?: string;
  placeholder?: string;
};

/**
 * Helix Autocomplete — themed @mui/material Autocomplete rendered with a
 * HelixInput field (outlined, Helix borders). Pass `options` and the usual MUI
 * Autocomplete props (multiple, freeSolo, groupBy, …).
 */
export function HelixAutocomplete<T>({ label, placeholder, ...rest }: HelixAutocompleteProps<T>) {
  return (
    <MuiAutocomplete
      {...rest}
      renderInput={(params) => <HelixInput {...params} label={label} placeholder={placeholder} />}
    />
  );
}
