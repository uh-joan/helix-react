import { HelixBadge, HelixIcon } from "helix-react";

const row: React.CSSProperties = { display: "flex", gap: 32, alignItems: "center" };

export const Counts = () => (
  <div style={row}>
    <HelixBadge badgeContent={4} tone="primary">
      <HelixIcon name="notifications" color="secondary" />
    </HelixBadge>
    <HelixBadge badgeContent={12} tone="accent">
      <HelixIcon name="mail" color="secondary" />
    </HelixBadge>
    <HelixBadge badgeContent={3} tone="primary" size="small">
      <HelixIcon name="shopping_cart" color="secondary" />
    </HelixBadge>
  </div>
);

export const Dot = () => (
  <div style={row}>
    <HelixBadge variant="dot" tone="accent">
      <HelixIcon name="chat" color="secondary" />
    </HelixBadge>
    <HelixBadge variant="dot" tone="primary">
      <HelixIcon name="account_circle" color="secondary" />
    </HelixBadge>
  </div>
);
