import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { OtpInput } from "../../packages/ui/otp-input";

const meta = {
  title: "Form/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  args: {
    length: 6,
    onChange: fn(),
  },
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
