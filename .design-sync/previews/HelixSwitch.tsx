import { HelixSwitch } from "helix-react";

const col: React.CSSProperties = { display: "flex", flexDirection: "column" };

export const States = () => (
  <div style={col}>
    <HelixSwitch label="Enable notifications" defaultChecked />
    <HelixSwitch label="Off by default" />
    <HelixSwitch label="Disabled" disabled />
  </div>
);

export const Density = () => (
  <div style={col}>
    <HelixSwitch label="Density 0" density={0} defaultChecked />
    <HelixSwitch label="Density -1" density={-1} defaultChecked />
    <HelixSwitch label="Density -2" density={-2} defaultChecked />
  </div>
);
