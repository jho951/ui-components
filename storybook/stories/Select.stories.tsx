import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../../packages/ui/select";

const meta = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Select component playground and prop controls.",
      },
    },
  },
  args: {
    label: "Role",
    placeholder: "Choose role",
    options: [
      { label: "Frontend", value: "fe" },
      { label: "Backend", value: "be" },
      { label: "Designer", value: "design" },
    ],
    fullWidth: true,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
