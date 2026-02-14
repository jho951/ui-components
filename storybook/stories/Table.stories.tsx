import type { Meta, StoryObj } from "@storybook/react";

import { Table } from "../../packages/ui/table";

const meta = {
  title: "Data Display/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Table component playground and prop controls.",
      },
    },
  },
  args: {
    caption: "팀 구성",
    columns: [
      { key: "name", header: "Name" },
      { key: "role", header: "Role" },
      { key: "team", header: "Team" },
    ],
    data: [
      { name: "Jhon", role: "Frontend", team: "Platform" },
      { name: "Mina", role: "Designer", team: "Brand" },
      { name: "Alex", role: "Backend", team: "Core" },
    ],
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
