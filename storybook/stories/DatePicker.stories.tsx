import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker, DateRangePicker } from "../../packages/ui/date-picker";

const meta = {
  title: "Form/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "DatePicker and DateRangePicker playground." } },
  },
  args: {
    label: "Select date",
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Range: Story = {
  render: () => <DateRangePicker label="Range" />,
};
