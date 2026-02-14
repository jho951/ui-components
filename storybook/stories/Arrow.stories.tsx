import type { Meta, StoryObj } from "@storybook/react";

import { Arrow } from "../../packages/ui/arrow";

const meta = {
  title: "Components/Arrow",
  component: Arrow,
  tags: ["autodocs"],
  args: {
    direction: "down",
    size: 24,
  },
} satisfies Meta<typeof Arrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
