import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CommandPalette } from "../../packages/ui/command-palette";
import { Button } from "../../packages/ui/button";

const meta = {
  title: "Feedback/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
  parameters: {
    docs: { description: { component: "CommandPalette component playground and prop controls." } },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          items={[
            { id: "new", label: "Create New", description: "Create a new document" },
            { id: "search", label: "Search", description: "Search across workspace" },
            { id: "settings", label: "Open Settings", description: "Go to preferences" },
          ]}
        />
      </>
    );
  },
} satisfies Meta<typeof CommandPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
