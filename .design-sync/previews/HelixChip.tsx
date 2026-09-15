import { HelixChip } from "helix-react";

const row: React.CSSProperties = { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" };

export const Tones = () => (
  <div style={row}>
    <HelixChip tone="neutral" label="Neutral" />
    <HelixChip tone="primary" label="Primary" />
    <HelixChip tone="accent" label="Accent" />
    <HelixChip tone="outlined" label="Outlined" />
    <HelixChip tone="basic" label="Basic" />
  </div>
);

export const Semantic = () => (
  <div style={row}>
    <HelixChip tone="positive" label="Positive" />
    <HelixChip tone="warn" label="Warning" />
    <HelixChip tone="negative" label="Negative" />
    <HelixChip tone="info" label="Info" />
  </div>
);

export const Interactive = () => (
  <div style={row}>
    <HelixChip tone="neutral" label="Deletable" onDelete={() => {}} />
    <HelixChip tone="accent" label="Clickable" clickable />
    <HelixChip tone="neutral" label="Small" size="small" />
  </div>
);
