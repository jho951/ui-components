import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../../packages/ui/alert";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Alert component playground and prop controls.",
      },
    },
  },
  args: {
    title: "Feedback/Alert",
    children: "변경사항이 저장되었습니다.",
    variant: "info",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Feedback/Alert",
    children: "요청 처리에 실패했습니다.",
  },
};
