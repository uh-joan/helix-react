import { HelixInput } from "helix-react";

const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 };

export const Basic = () => (
  <div style={col}>
    <HelixInput label="Full name" placeholder="Jane Doe" />
    <HelixInput label="Email" placeholder="jane@clarivate.com" helperText="We'll never share it." />
  </div>
);

export const States = () => (
  <div style={col}>
    <HelixInput label="Error" defaultValue="nope" error helperText="Something's wrong" />
    <HelixInput label="Disabled" defaultValue="Can't edit" disabled />
    <HelixInput label="Filled" placeholder="Filled variant" variant="filled" />
  </div>
);

export const Density = () => (
  <div style={col}>
    <HelixInput label="Density 0" density={0} />
    <HelixInput label="Density -2" density={-2} />
    <HelixInput label="Density -4" density={-4} />
  </div>
);
