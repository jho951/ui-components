import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../../packages/ui/tag";

const meta = {
  title: "Data Display/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tag component playground and prop controls.",
      },
    },
  },
  args: {
    children: "Active",
    color: "primary",
    active: true,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
