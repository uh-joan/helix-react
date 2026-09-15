import { HelixRadioGroup } from "helix-react";

export const Plan = () => (
  <HelixRadioGroup
    label="Plan"
    value="standard"
    onChange={() => {}}
    options={[
      { value: "standard", label: "Standard" },
      { value: "pro", label: "Pro" },
      { value: "enterprise", label: "Enterprise", disabled: true },
    ]}
  />
);

export const Horizontal = () => (
  <HelixRadioGroup
    label="Density"
    value="comfortable"
    onChange={() => {}}
    row
    options={[
      { value: "comfortable", label: "Comfortable" },
      { value: "compact", label: "Compact" },
    ]}
  />
);
