import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "../../packages/ui/tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Active",
    color: "primary",
    active: true,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
