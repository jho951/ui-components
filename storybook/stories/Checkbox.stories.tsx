import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../packages/ui/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "약관에 동의합니다",
    checked: true,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
