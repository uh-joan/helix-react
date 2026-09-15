import { forwardRef } from "react";
import MuiSlider, { type SliderProps } from "@mui/material/Slider";

export type HelixSliderProps = SliderProps;

/**
 * Helix Slider — themed @mui/material Slider (surface/contrast rail, primary
 * track/thumb, Helix focus/active state layers). Supports single value or range.
 */
export const HelixSlider = forwardRef<HTMLSpanElement, HelixSliderProps>(function HelixSlider(
  { color = "primary", ...rest },
  ref,
) {
  return <MuiSlider ref={ref} color={color} {...rest} />;
});
