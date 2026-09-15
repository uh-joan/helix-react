import { HelixCheckbox } from "helix-react";

const col: React.CSSProperties = { display: "flex", flexDirection: "column" };

export const States = () => (
  <div style={col}>
    <HelixCheckbox label="Checked" defaultChecked />
    <HelixCheckbox label="Unchecked" />
    <HelixCheckbox label="Indeterminate" indeterminate />
    <HelixCheckbox label="Disabled" disabled />
  </div>
);
