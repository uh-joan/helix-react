import { HelixAlert, HelixButton } from "helix-react";

const col: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 12, maxWidth: 520 };

export const Themes = () => (
  <div style={col}>
    <HelixAlert theme="primary" title="Heads up">
      A new report is available to view.
    </HelixAlert>
    <HelixAlert theme="positive">Your changes were saved.</HelixAlert>
    <HelixAlert theme="warn">Your session expires in 5 minutes.</HelixAlert>
    <HelixAlert theme="negative" title="Error">
      Something went wrong. Try again.
    </HelixAlert>
  </div>
);

export const WithActions = () => (
  <div style={col}>
    <HelixAlert
      theme="primary"
      title="Update available"
      onClose={() => {}}
      actions={
        <HelixButton emphasis="basic" size="small">
          View
        </HelixButton>
      }
    >
      A new version of the report is ready.
    </HelixAlert>
  </div>
);

export const Banner = () => (
  <HelixAlert theme="warn" variant="banner" title="Maintenance">
    Scheduled maintenance this weekend.
  </HelixAlert>
);
