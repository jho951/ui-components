import type { Meta, StoryObj } from "@storybook/react";

import { DataGrid } from "../../packages/ui/data-grid";

const meta = {
  title: "Data Display/DataGrid",
  component: DataGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "DataGrid component playground.\n\nKeyboard and a11y:\n- Use Tab to move into search and sort buttons\n- Enter/Space on sort buttons toggles sorting\n- Screen readers announce current sort direction via aria-sort",
      },
    },
  },
  args: {
    searchable: true,
    columns: [
      { key: "name", header: "Name", sortable: true },
      { key: "role", header: "Role", sortable: true },
      { key: "team", header: "Team" },
    ],
    rows: [
      { name: "Jhon", role: "Frontend", team: "Platform" },
      { name: "Mina", role: "Designer", team: "Brand" },
      { name: "Alex", role: "Backend", team: "Core" },
    ],
  },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
