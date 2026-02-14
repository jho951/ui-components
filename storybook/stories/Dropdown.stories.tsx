import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../../packages/ui/dropdown";

const meta = {
  title: "Actions/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Dropdown component playground and prop controls.",
      },
    },
  },
  args: {
    label: "카테고리",
    placeholder: "선택",
    items: [
      { label: "Design", value: "design" },
      { label: "Engineering", value: "engineering" },
      { label: "Marketing", value: "marketing" },
    ],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
