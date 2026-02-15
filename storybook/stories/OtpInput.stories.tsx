import type { Meta, StoryObj } from "@storybook/react";

import { OtpInput } from "../../packages/ui/otp-input";

const meta = {
  title: "Form/OtpInput",
  component: OtpInput,
  tags: ["autodocs"],
  args: {
    length: 6,
  },
} satisfies Meta<typeof OtpInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
