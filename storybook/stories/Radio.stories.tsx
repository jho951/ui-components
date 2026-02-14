import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../../packages/ui/radio";

const meta = {
  title: "Form/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "RadioGroup component playground and prop controls." } },
  },
  render: () => {
    const [value, setValue] = useState("basic");
    return (
      <RadioGroup
        name="plan"
        value={value}
        onChange={setValue}
        options={[
          { label: "Basic", value: "basic" },
          { label: "Pro", value: "pro" },
          { label: "Enterprise", value: "enterprise" },
        ]}
      />
    );
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
