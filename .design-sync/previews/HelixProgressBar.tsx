import { HelixProgressBar } from "helix-react";

export const Determinate = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixProgressBar variant="determinate" value={60} />
  </div>
);

export const Indeterminate = () => (
  <div style={{ maxWidth: 360 }}>
    <HelixProgressBar />
  </div>
);
