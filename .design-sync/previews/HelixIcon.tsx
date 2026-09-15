import { HelixIcon } from "helix-react";

const row: React.CSSProperties = { display: "flex", gap: 16, alignItems: "center" };

export const Brand = () => (
  <div style={row}>
    <HelixIcon name="ai-chat" title="AI chat" />
    <HelixIcon name="ai-search" title="AI search" color="accent" />
    <HelixIcon name="ai-summary" title="AI summary" color="accent" size="lg" />
    <HelixIcon name="ai-compare" title="AI compare" color="brand" size="lg" />
  </div>
);

export const Colours = () => (
  <div style={row}>
    <HelixIcon name="search" />
    <HelixIcon name="settings" color="secondary" />
    <HelixIcon name="check_circle" color="positive" />
    <HelixIcon name="warning" color="warn" />
    <HelixIcon name="error" color="negative" />
    <HelixIcon name="star" color="accent" />
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <HelixIcon name="rocket_launch" size="sm" />
    <HelixIcon name="rocket_launch" size="md" />
    <HelixIcon name="rocket_launch" size="lg" />
    <HelixIcon name="rocket_launch" size="xl" />
  </div>
);
