import { HelixTable, HelixChip } from "helix-react";

const rows = [
  { name: "Ada Lovelace", role: "Analyst", score: 92, status: "Active" },
  { name: "Alan Turing", role: "Researcher", score: 88, status: "Active" },
  { name: "Grace Hopper", role: "Engineer", score: 95, status: "Inactive" },
];

export const Sortable = () => (
  <HelixTable
    columns={[
      { key: "name", header: "Name", sortable: true },
      { key: "role", header: "Role", sortable: true },
      { key: "score", header: "Score", align: "right", sortable: true },
      {
        key: "status",
        header: "Status",
        render: (r: (typeof rows)[number]) => (
          <HelixChip size="small" tone={r.status === "Active" ? "positive" : "neutral"} label={r.status} />
        ),
      },
    ]}
    rows={rows}
    getRowKey={(r: (typeof rows)[number]) => r.name}
  />
);
