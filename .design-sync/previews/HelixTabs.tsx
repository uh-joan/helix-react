import { HelixTabs, HelixIcon } from "helix-react";

export const Basic = () => (
  <HelixTabs
    value="overview"
    onChange={() => {}}
    tabs={[
      { label: "Overview", value: "overview" },
      { label: "Activity", value: "activity" },
      { label: "Settings", value: "settings" },
    ]}
  />
);

export const WithIcons = () => (
  <HelixTabs
    value="dashboard"
    onChange={() => {}}
    tabs={[
      { label: "Dashboard", value: "dashboard", icon: <HelixIcon name="dashboard" size="sm" /> },
      { label: "Reports", value: "reports", icon: <HelixIcon name="bar_chart" size="sm" /> },
      { label: "Settings", value: "settings", icon: <HelixIcon name="settings" size="sm" /> },
    ]}
  />
);
