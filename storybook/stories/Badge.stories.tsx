import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../../packages/ui/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "NEW",
    variant: "primary",
    size: "m",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
