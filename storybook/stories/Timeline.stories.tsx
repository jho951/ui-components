import type { Meta, StoryObj } from "@storybook/react";

import { Timeline } from "../../packages/ui/timeline";

const meta = {
  title: "Data Display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "t1", title: "Order placed", time: "09:10" },
      { id: "t2", title: "Packed", time: "11:20" },
      { id: "t3", title: "Shipped", time: "13:45" },
    ],
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
