import { HelixButton, HelixIcon } from "helix-react";

const row: React.CSSProperties = { display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" };

export const Emphasis = () => (
  <div style={row}>
    <HelixButton emphasis="flat">Flat</HelixButton>
    <HelixButton emphasis="stroked">Stroked</HelixButton>
    <HelixButton emphasis="basic">Basic</HelixButton>
  </div>
);

export const Tones = () => (
  <div style={row}>
    <HelixButton tone="primary">Primary</HelixButton>
    <HelixButton tone="accent">Accent</HelixButton>
    <HelixButton tone="negative">Negative</HelixButton>
    <HelixButton tone="ai" startIcon={<HelixIcon name="ai-chat" size="sm" color="invert" />}>
      Ask AI
    </HelixButton>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <HelixButton size="large">Large</HelixButton>
    <HelixButton size="default">Default</HelixButton>
    <HelixButton size="small">Small</HelixButton>
    <HelixButton size="x-small">X-small</HelixButton>
  </div>
);

export const WithIcons = () => (
  <div style={row}>
    <HelixButton startIcon={<HelixIcon name="add" size="sm" color="invert" />}>New item</HelixButton>
    <HelixButton emphasis="stroked" endIcon={<HelixIcon name="chevron_right" size="sm" />}>
      Next
    </HelixButton>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <HelixButton emphasis="flat" disabled>
      Flat
    </HelixButton>
    <HelixButton emphasis="stroked" disabled>
      Stroked
    </HelixButton>
    <HelixButton emphasis="basic" disabled>
      Basic
    </HelixButton>
  </div>
);
