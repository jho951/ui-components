import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "../../packages/ui/label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Email",
    required: true,
    variant: "default",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
