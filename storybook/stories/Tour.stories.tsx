import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tour } from "../../packages/ui/tour";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/Tour",
  component: Tour,
  tags: ["autodocs"],
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Start Tour</Button>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            { id: "s1", title: "Welcome", description: "This is the first step." },
            { id: "s2", title: "Profile", description: "Update your profile here." },
            { id: "s3", title: "Done", description: "You are all set." },
          ]}
        />
      </>
    );
  },
} satisfies Meta<typeof Tour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
