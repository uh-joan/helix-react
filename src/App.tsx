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
  HelixTabs,
  HelixBreadcrumbs,
  HelixList,
  HelixPagination,
  HelixAccordion,
  HelixStepper,
  HelixSidenav,
  HelixMenu,
  HelixMenuItem,
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
  const [tab, setTab] = useState<string | number>("overview");
  const [page, setPage] = useState(1);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [navOpen, setNavOpen] = useState(false);

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
            Tone: primary / accent / negative / ai
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixButton tone="primary">Primary</HelixButton>
            <HelixButton tone="accent">Accent</HelixButton>
            <HelixButton tone="negative">Negative</HelixButton>
            <HelixButton tone="ai" startIcon={<HelixIcon name="ai-chat" size="sm" color="invert" />}>
              Ask AI
            </HelixButton>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Density: large / default / small / x-small / xx-small
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
            <HelixButton size="large">Large</HelixButton>
            <HelixButton size="default">Default</HelixButton>
            <HelixButton size="small">Small</HelixButton>
            <HelixButton size="x-small">X-small</HelixButton>
            <HelixButton size="xx-small">XX-small</HelixButton>
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

        <Section title="Breadcrumbs">
          <HelixBreadcrumbs
            items={[
              { label: "Home", href: "#" },
              { label: "Reports", href: "#" },
              { label: "Q4 Summary" },
            ]}
          />
        </Section>

        <Section title="Tabs">
          <HelixTabs
            value={tab}
            onChange={setTab}
            tabs={[
              { label: "Overview", value: "overview", icon: <HelixIcon name="dashboard" size="sm" /> },
              { label: "Activity", value: "activity", icon: <HelixIcon name="timeline" size="sm" /> },
              { label: "Settings", value: "settings", icon: <HelixIcon name="settings" size="sm" /> },
            ]}
          />
          <Typography variant="body1" color="text.secondary">
            Selected tab: {String(tab)}
          </Typography>
        </Section>

        <Section title="List">
          <Box sx={{ maxWidth: 360, border: "1px solid", borderColor: "divider", borderRadius: "2px" }}>
            <HelixList
              items={[
                { primary: "Inbox", secondary: "12 new", leadingIcon: <HelixIcon name="inbox" color="secondary" />, onClick: () => {} },
                { primary: "Starred", leadingIcon: <HelixIcon name="star" color="accent" />, selected: true, onClick: () => {} },
                { primary: "Drafts", leadingIcon: <HelixIcon name="drafts" color="secondary" />, onClick: () => {} },
              ]}
            />
          </Box>
        </Section>

        <Section title="Accordion">
          <HelixAccordion
            items={[
              { title: "What is Helix?", children: "Clarivate's design system, here ported to React on MUI.", defaultExpanded: true },
              { title: "How are tokens sourced?", children: "Directly from the Helix design system in Supernova." },
              { title: "Is it production-ready?", children: "It mirrors the Angular implementation's look and API intent." },
            ]}
          />
        </Section>

        <Section title="Stepper">
          <HelixStepper
            activeStep={1}
            steps={[{ label: "Details" }, { label: "Configure" }, { label: "Review", optional: <span>Optional</span> }]}
          />
        </Section>

        <Section title="Pagination">
          <HelixPagination count={8} page={page} onChange={(_e, p) => setPage(p)} color="primary" />
        </Section>

        <Section title="Menu & Sidenav">
          <Stack direction="row" spacing={2}>
            <HelixButton emphasis="stroked" onClick={(e) => setMenuAnchor(e.currentTarget)}>
              Open menu
            </HelixButton>
            <HelixButton emphasis="flat" onClick={() => setNavOpen(true)}>
              Open sidenav
            </HelixButton>
          </Stack>
          <HelixMenu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={() => setMenuAnchor(null)}>
            <HelixMenuItem onClick={() => setMenuAnchor(null)}>Profile</HelixMenuItem>
            <HelixMenuItem onClick={() => setMenuAnchor(null)}>Settings</HelixMenuItem>
            <HelixMenuItem onClick={() => setMenuAnchor(null)}>Sign out</HelixMenuItem>
          </HelixMenu>
          <HelixSidenav open={navOpen} onClose={() => setNavOpen(false)}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Navigation
              </Typography>
              <HelixList
                items={[
                  { primary: "Dashboard", leadingIcon: <HelixIcon name="dashboard" color="secondary" />, onClick: () => setNavOpen(false) },
                  { primary: "Reports", leadingIcon: <HelixIcon name="bar_chart" color="secondary" />, onClick: () => setNavOpen(false) },
                  { primary: "Settings", leadingIcon: <HelixIcon name="settings" color="secondary" />, onClick: () => setNavOpen(false) },
                ]}
              />
            </Box>
          </HelixSidenav>
        </Section>
      </Stack>
    </Box>
  );
}
