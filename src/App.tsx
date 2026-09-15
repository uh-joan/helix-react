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
  HelixIcon,
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
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Disabled (flat / stroked / basic)
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixButton emphasis="flat" disabled>Flat</HelixButton>
            <HelixButton emphasis="stroked" disabled>Stroked</HelixButton>
            <HelixButton emphasis="basic" disabled>Basic</HelixButton>
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

        <Section title="Icon">
          <Typography variant="body2" color="text.secondary">
            Clarivate brand (AI) icons — from Supernova
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixIcon name="ai-chat" title="AI chat" />
            <HelixIcon name="ai-search" title="AI search" color="accent" />
            <HelixIcon name="ai-summary" title="AI summary" color="accent" size="lg" />
            <HelixIcon name="ai-compare" title="AI compare" color="brand" size="lg" />
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Material icons · colour tokens · sizes
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixIcon name="search" />
            <HelixIcon name="settings" color="secondary" />
            <HelixIcon name="check_circle" color="positive" />
            <HelixIcon name="warning" color="warn" />
            <HelixIcon name="error" color="negative" />
            <HelixIcon name="star" color="accent" />
            <HelixIcon name="favorite" color="brand" size="lg" />
            <HelixIcon name="rocket_launch" size="xl" />
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <HelixButton emphasis="flat" startIcon={<HelixIcon name="add" size="sm" color="invert" />}>
              New item
            </HelixButton>
            <HelixButton emphasis="stroked" startIcon={<HelixIcon name="download" size="sm" />}>
              Export
            </HelixButton>
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
            <HelixInput label="Filled" placeholder="Filled variant" variant="filled" />
            <HelixInput label="Disabled" defaultValue="Can't edit" disabled />
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
