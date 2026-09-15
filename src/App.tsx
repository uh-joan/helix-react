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
  HelixRadioGroup,
  HelixTooltip,
  HelixRichTooltip,
  HelixDialog,
  HelixPaginator,
  HelixAlert,
  HelixSnackbar,
  HelixProgressBar,
  HelixSpinner,
  HelixSlider,
  HelixIconButton,
  HelixFab,
  HelixButtonToggle,
  HelixDivider,
  HelixLink,
  HelixSkeleton,
  HelixAutocomplete,
  HelixTable,
  HelixDataGrid,
  HelixDatePicker,
  HelixTree,
  HelixHeader,
  HelixFooter,
} from "./components";
import dayjs, { type Dayjs } from "dayjs";

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
  const [plan, setPlan] = useState("standard");
  const [view, setView] = useState<string | string[] | null>("grid");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [ppRows, setPpRows] = useState(10);
  const [ppPage, setPpPage] = useState(0);

  return (
    <>
      <HelixHeader
        productName="Design System"
        nav={[{ label: "Overview", active: true }, { label: "Components" }, { label: "Tokens" }]}
        onMenuClick={() => setNavOpen(true)}
        actions={
          <>
            <HelixIconButton aria-label="Search">
              <HelixIcon name="search" />
            </HelixIconButton>
            <HelixIconButton aria-label="Account">
              <HelixIcon name="account_circle" />
            </HelixIconButton>
          </>
        }
      />
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
          <Typography variant="body2" color="text.secondary">
            Count / dot indicator — primary / accent (for status labels, use Chip)
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <HelixBadge badgeContent={4} tone="primary">
              <HelixIcon name="notifications" color="secondary" />
            </HelixBadge>
            <HelixBadge badgeContent={12} tone="accent">
              <HelixIcon name="mail" color="secondary" />
            </HelixBadge>
            <HelixBadge variant="dot" tone="accent">
              <HelixIcon name="chat" color="secondary" />
            </HelixBadge>
            <HelixBadge badgeContent={3} tone="primary" size="small">
              <HelixIcon name="shopping_cart" color="secondary" />
            </HelixBadge>
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
            <HelixChip tone="basic" label="Basic" />
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
                  Combine the card with Helix buttons and chips to compose
                  richer surfaces. <HelixChip tone="positive" size="small" label="New" />
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
          <Typography variant="body2" color="text.secondary">
            Page numbers (HelixPagination)
          </Typography>
          <HelixPagination count={8} page={page} onChange={(_e, p) => setPage(p)} color="primary" />
          <Typography variant="body2" color="text.secondary">
            Paginator — rows per page · X–Y of Z · first/last (HelixPaginator)
          </Typography>
          <HelixPaginator
            count={97}
            page={ppPage}
            rowsPerPage={ppRows}
            onPageChange={(_e, p) => setPpPage(p)}
            onRowsPerPageChange={(e) => {
              setPpRows(parseInt(e.target.value, 10));
              setPpPage(0);
            }}
          />
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

        <Section title="Radio">
          <HelixRadioGroup
            label="Plan"
            value={plan}
            onChange={setPlan}
            options={[
              { value: "standard", label: "Standard" },
              { value: "pro", label: "Pro" },
              { value: "enterprise", label: "Enterprise", disabled: true },
            ]}
          />
        </Section>

        <Section title="Button toggle (segmented)">
          <HelixButtonToggle
            value={view}
            onChange={setView}
            options={[
              { value: "grid", icon: <HelixIcon name="grid_view" size="sm" />, label: "Grid" },
              { value: "list", icon: <HelixIcon name="view_list" size="sm" />, label: "List" },
              { value: "map", icon: <HelixIcon name="map" size="sm" />, label: "Map" },
            ]}
          />
          <Box sx={{ p: 2, backgroundColor: "#2A2B2D", borderRadius: "2px", width: "fit-content" }}>
            <HelixButtonToggle
              invert
              value={view}
              onChange={setView}
              options={[
                { value: "grid", label: "Grid" },
                { value: "list", label: "List" },
                { value: "map", label: "Map" },
              ]}
            />
          </Box>
        </Section>

        <Section title="Icon button & FAB">
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixIconButton aria-label="Edit">
              <HelixIcon name="edit" />
            </HelixIconButton>
            <HelixIconButton tone="accent" aria-label="Favorite">
              <HelixIcon name="favorite" />
            </HelixIconButton>
            <HelixIconButton tone="negative" aria-label="Delete">
              <HelixIcon name="delete" />
            </HelixIconButton>
            <HelixFab tone="accent" size="small" aria-label="Add">
              <HelixIcon name="add" color="invert" />
            </HelixFab>
            <HelixFab tone="accent" variant="extended">
              <HelixIcon name="add" color="invert" size="sm" />
              <span style={{ marginLeft: 8 }}>Create</span>
            </HelixFab>
            <HelixFab tone="ai" aria-label="Ask AI">
              <HelixIcon name="ai-search" color="invert" />
            </HelixFab>
          </Stack>
        </Section>

        <Section title="Slider">
          <Box sx={{ maxWidth: 360 }}>
            <HelixSlider defaultValue={40} valueLabelDisplay="auto" />
            <HelixSlider defaultValue={[20, 70]} valueLabelDisplay="auto" />
          </Box>
        </Section>

        <Section title="Progress">
          <Box sx={{ maxWidth: 360 }}>
            <HelixProgressBar variant="determinate" value={60} />
          </Box>
          <HelixProgressBar sx={{ maxWidth: 360 }} />
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixSpinner />
            <HelixSpinner variant="determinate" value={70} />
          </Stack>
        </Section>

        <Section title="Alert (notification)">
          <HelixAlert
            theme="primary"
            title="Heads up"
            onClose={() => {}}
            actions={<HelixButton emphasis="basic" size="small">View</HelixButton>}
          >
            A new report is available to view.
          </HelixAlert>
          <HelixAlert theme="positive">Your changes were saved.</HelixAlert>
          <HelixAlert theme="warn">Your session expires in 5 minutes.</HelixAlert>
          <HelixAlert theme="negative" title="Error">Something went wrong. Try again.</HelixAlert>
        </Section>

        <Section title="Tooltip · Dialog · Snackbar">
          <Stack direction="row" spacing={2} alignItems="center">
            <HelixTooltip title="More information" arrow>
              <span>
                <HelixIconButton aria-label="Info">
                  <HelixIcon name="info" color="secondary" />
                </HelixIconButton>
              </span>
            </HelixTooltip>
            <HelixRichTooltip
              title="Rich tooltip"
              content="A light-surface tooltip with a title, body text and actions."
              actions={
                <>
                  <HelixButton emphasis="basic" size="small">Dismiss</HelixButton>
                  <HelixButton emphasis="flat" size="small">Got it</HelixButton>
                </>
              }
            >
              <span>
                <HelixButton emphasis="stroked">Rich tooltip</HelixButton>
              </span>
            </HelixRichTooltip>
            <HelixButton emphasis="stroked" onClick={() => setDialogOpen(true)}>
              Open dialog
            </HelixButton>
            <HelixButton emphasis="flat" onClick={() => setSnackOpen(true)}>
              Show snackbar
            </HelixButton>
          </Stack>
          <HelixDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            title="Delete report?"
            actions={
              <>
                <HelixButton emphasis="basic" onClick={() => setDialogOpen(false)}>
                  Cancel
                </HelixButton>
                <HelixButton tone="negative" onClick={() => setDialogOpen(false)}>
                  Delete
                </HelixButton>
              </>
            }
          >
            This action can't be undone. The report and its data will be permanently removed.
          </HelixDialog>
          <HelixSnackbar
            open={snackOpen}
            onClose={() => setSnackOpen(false)}
            message="Report deleted"
            action={
              <HelixButton emphasis="basic" tone="invert" size="small" onClick={() => setSnackOpen(false)}>
                Undo
              </HelixButton>
            }
          />
        </Section>

        <Section title="Divider · Link · Skeleton">
          <Stack direction="row" spacing={3}>
            <HelixLink href="#">Primary link</HelixLink>
            <HelixLink href="#" colour="blue">Blue link</HelixLink>
            <HelixLink href="#" underline="permanent">Permanent underline</HelixLink>
          </Stack>
          <HelixDivider />
          <Stack spacing={1}>
            <HelixSkeleton variant="text" width="60%" />
            <HelixSkeleton variant="rectangular" height={48} />
            <Stack direction="row" spacing={1} alignItems="center">
              <HelixSkeleton variant="circular" width={40} height={40} />
              <HelixSkeleton variant="text" width={160} />
            </Stack>
          </Stack>
        </Section>

        <Section title="Autocomplete · Date picker">
          <Box sx={{ maxWidth: 360 }}>
            <HelixAutocomplete
              label="Country"
              options={["United States", "United Kingdom", "Spain", "Germany", "Japan"]}
            />
          </Box>
          <Box sx={{ maxWidth: 360 }}>
            <HelixDatePicker label="Report date" value={date} onChange={setDate} />
          </Box>
        </Section>

        <Section title="Table">
          <HelixTable
            columns={[
              { key: "name", header: "Name", sortable: true },
              { key: "role", header: "Role", sortable: true },
              { key: "score", header: "Score", align: "right", sortable: true },
              {
                key: "status",
                header: "Status",
                render: (r) => (
                  <HelixChip
                    size="small"
                    tone={r.status === "Active" ? "positive" : "neutral"}
                    label={r.status as string}
                  />
                ),
              },
            ]}
            rows={[
              { name: "Ada Lovelace", role: "Analyst", score: 92, status: "Active" },
              { name: "Alan Turing", role: "Researcher", score: 88, status: "Active" },
              { name: "Grace Hopper", role: "Engineer", score: 95, status: "Inactive" },
            ]}
            getRowKey={(r) => r.name as string}
          />
        </Section>

        <Section title="Data grid (AG Grid)">
          <Typography variant="body2" color="text.secondary">
            Complex grid — sortable, filterable, resizable, paginated
          </Typography>
          <HelixDataGrid
            height={320}
            pagination
            paginationPageSize={5}
            rowData={[
              { name: "Ada Lovelace", role: "Analyst", score: 92, status: "Active" },
              { name: "Alan Turing", role: "Researcher", score: 88, status: "Active" },
              { name: "Grace Hopper", role: "Engineer", score: 95, status: "Inactive" },
              { name: "Katherine Johnson", role: "Mathematician", score: 99, status: "Active" },
              { name: "Edsger Dijkstra", role: "Engineer", score: 91, status: "Inactive" },
              { name: "Barbara Liskov", role: "Researcher", score: 97, status: "Active" },
            ]}
            columnDefs={[
              { field: "name", headerName: "Name" },
              { field: "role", headerName: "Role" },
              { field: "score", headerName: "Score", type: "numericColumn", maxWidth: 120 },
              { field: "status", headerName: "Status" },
            ]}
          />
        </Section>

        <Section title="Tree">
          <HelixTree
            defaultExpandedItems={["reports"]}
            items={[
              {
                id: "reports",
                label: "Reports",
                children: [
                  { id: "q3", label: "Q3 Summary" },
                  { id: "q4", label: "Q4 Summary" },
                ],
              },
              { id: "settings", label: "Settings", children: [{ id: "profile", label: "Profile" }] },
            ]}
          />
        </Section>
      </Stack>
      </Box>
      <HelixFooter
        linkGroups={[
          { title: "Product", links: [{ label: "Overview", href: "#" }, { label: "Components", href: "#" }] },
          { title: "Resources", links: [{ label: "Docs", href: "#" }, { label: "Support", href: "#" }] },
        ]}
        legalLinks={[
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Cookie settings", href: "#" },
        ]}
      />
    </>
  );
}
