import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../packages/ui/input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This will be shown publicly",
    size: "m",
    fullWidth: true,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
