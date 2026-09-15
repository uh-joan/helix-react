import { HelixCard, HelixButton, HelixChip } from "helix-react";

export const Basic = () => (
  <HelixCard title="Basic card" subtitle="Supporting text">
    Cards group related content and actions. This one uses Helix elevation level 1 and 2px corners.
  </HelixCard>
);

export const WithActions = () => (
  <HelixCard
    title="Quarterly report"
    subtitle="Fully featured"
    elevation={2}
    actions={
      <>
        <HelixButton emphasis="basic" tone="accent">
          Learn more
        </HelixButton>
        <HelixButton emphasis="flat">Get started</HelixButton>
      </>
    }
  >
    Combine the card with Helix buttons and chips. <HelixChip tone="positive" size="small" label="New" />
  </HelixCard>
);

export const Dismissible = () => (
  <HelixCard title="Notification settings" onClose={() => {}}>
    Cards can carry a close action in the header for dismissible surfaces.
  </HelixCard>
);
