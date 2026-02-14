import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "../../packages/ui/divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
