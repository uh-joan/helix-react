import { HelixSlider } from "helix-react";

export const Basic = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixSlider defaultValue={40} valueLabelDisplay="auto" />
  </div>
);

export const Range = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixSlider defaultValue={[20, 70]} valueLabelDisplay="auto" />
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixSlider defaultValue={50} disabled />
  </div>
);
