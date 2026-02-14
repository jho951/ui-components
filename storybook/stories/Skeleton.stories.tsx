import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "../../packages/ui/skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
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
