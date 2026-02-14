import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "../../packages/ui/accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      { id: "a", title: "배송 정보", content: "평균 2-3일 내 도착" },
      { id: "b", title: "교환/환불", content: "수령 후 7일 이내 가능" },
      { id: "c", title: "비활성 섹션", content: "disabled", disabled: true },
    ],
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
