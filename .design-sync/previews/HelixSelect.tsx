import { HelixSelect } from "helix-react";

const opts = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

export const Basic = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixSelect label="Fruit" value="apple" onChange={() => {}} options={opts} />
  </div>
);

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 360 }}>
    <HelixSelect label="Filled" variant="filled" value="banana" onChange={() => {}} options={opts} />
    <HelixSelect label="Disabled" value="apple" onChange={() => {}} options={opts} disabled />
  </div>
);
