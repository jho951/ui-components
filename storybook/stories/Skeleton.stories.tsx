import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../../packages/ui/skeleton";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Skeleton component playground and prop controls.",
      },
    },
  },
  args: {
    width: 220,
    height: 16,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Line: Story = {};

export const Circle: Story = {
  args: {
    circle: true,
    width: 48,
    height: 48,
  },
};
