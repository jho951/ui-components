import type { Meta, StoryObj } from "@storybook/react";

import { ColorPicker } from "../../packages/ui/color-picker";

const meta = {
  title: "Form/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
