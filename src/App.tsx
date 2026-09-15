import { useState } from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import {
  HelixButton,
  HelixCard,
  HelixBadge,
  HelixInput,
  HelixCheckbox,
  HelixSwitch,
  HelixSelect,
  HelixChip,
} from "./components";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">{title}</Typography>
      {children}
      <Divider />
    </Stack>
  );
}

export function App() {
  const [fruit, setFruit] = useState("apple");

  return (
    <Box sx={{ maxWidth: 880, mx: "auto", p: 4 }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h1">Helix React</Typography>
        <Typography variant="body1" color="text.secondary">
          Clarivate Helix design system — React on MUI, driven by Supernova tokens.
        </Typography>
      </Stack>

      <Stack spacing={4}>
        <Section title="Button">
          <Typography variant="body2" color="text.secondary">
            Type / emphasis: flat (high) / stroked (medium) / basic (low)
          </Typography>
          <Stack direction="row" spacing={2}>
            <HelixButton emphasis="flat">Flat</HelixButton>
            <HelixButton emphasis="stroked">Stroked</HelixButton>
            <HelixButton emphasis="basic">Basic</HelixButton>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Tone: primary / accent / negative
          </Typography>
          <Stack direction="row" spacing={2}>
            <HelixButton tone="primary">Primary</HelixButton>
            <HelixButton tone="accent">Accent</HelixButton>
            <HelixButton tone="negative">Negative</HelixButton>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixButton size="small">Small</HelixButton>
            <HelixButton size="medium">Medium</HelixButton>
            <HelixButton size="large">Large</HelixButton>
            <HelixButton disabled>Disabled</HelixButton>
          </Stack>
        </Section>

        <Section title="Badge">
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <HelixBadge color="neutral">Neutral</HelixBadge>
            <HelixBadge color="info">Info</HelixBadge>
            <HelixBadge color="positive">Positive</HelixBadge>
            <HelixBadge color="warning">Warning</HelixBadge>
            <HelixBadge color="negative">Negative</HelixBadge>
            <HelixBadge color="accent">Accent</HelixBadge>
          </Stack>
        </Section>

        <Section title="Chip">
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
            <HelixChip tone="neutral" label="Neutral" />
            <HelixChip tone="primary" label="Primary" />
            <HelixChip tone="accent" label="Accent" />
            <HelixChip tone="positive" label="Positive" />
            <HelixChip tone="warn" label="Warning" />
            <HelixChip tone="negative" label="Negative" />
            <HelixChip tone="info" label="Info" />
            <HelixChip tone="outlined" label="Outlined" />
          </Stack>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <HelixChip tone="neutral" label="Deletable" onDelete={() => {}} />
            <HelixChip tone="accent" label="Clickable" clickable />
          </Stack>
        </Section>

        <Section title="Form controls">
          <Stack spacing={2} sx={{ maxWidth: 360 }}>
            <HelixInput label="Full name" placeholder="Jane Doe" />
            <HelixInput label="Email" placeholder="jane@clarivate.com" helperText="We'll never share it." />
            <HelixInput label="Error" defaultValue="nope" error helperText="Something's wrong" />
            <HelixSelect
              label="Fruit"
              value={fruit}
              onChange={(e) => setFruit(e.target.value)}
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "cherry", label: "Cherry" },
              ]}
            />
          </Stack>
          <Stack spacing={1}>
            <HelixCheckbox label="I agree to the terms" defaultChecked />
            <HelixCheckbox label="Subscribe to updates" />
            <HelixSwitch label="Enable notifications" defaultChecked />
          </Stack>
        </Section>

        <Section title="Card">
          <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
            <Box sx={{ width: 320 }}>
              <HelixCard title="Basic card" subtitle="Supporting text">
                <Typography variant="body1">
                  Cards group related content and actions. This one uses Helix
                  elevation level 1 and 2px corners.
                </Typography>
              </HelixCard>
            </Box>
            <Box sx={{ width: 320 }}>
              <HelixCard
                title="With actions"
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
                <Typography variant="body1">
                  Combine the card with Helix buttons and badges to compose
                  richer surfaces. <HelixBadge color="positive">New</HelixBadge>
                </Typography>
              </HelixCard>
            </Box>
          </Stack>
        </Section>
      </Stack>
    </Box>
  );
}
