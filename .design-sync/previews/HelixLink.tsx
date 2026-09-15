import { HelixLink } from "helix-react";

const row: React.CSSProperties = { display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" };

export const Colours = () => (
  <div style={row}>
    <HelixLink href="#">Primary link</HelixLink>
    <HelixLink href="#" colour="blue">
      Blue link
    </HelixLink>
    <HelixLink href="#" colour="visited">
      Visited link
    </HelixLink>
  </div>
);

export const Inline = () => (
  <div style={{ maxWidth: 420 }}>
    Read the <HelixLink href="#" colour="blue" underline="permanent" bold>
      full report
    </HelixLink>{" "}
    for details on methodology and sources.
  </div>
);
