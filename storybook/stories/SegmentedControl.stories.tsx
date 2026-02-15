import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedControl } from "../../packages/ui/segmented-control";

const meta = {
  title: "Form/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  render: () => {
    const [value, setValue] = useState("day");
    return (
      <SegmentedControl
        value={value}
        onChange={setValue}
        options={[
          { label: "Day", value: "day" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" },
        ]}
      />
    );
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
