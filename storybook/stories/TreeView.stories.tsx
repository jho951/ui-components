import type { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "../../packages/ui/tree-view";

const meta = {
  title: "Navigation/TreeView",
  component: TreeView,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "TreeView component playground.\n\nKeyboard:\n- ArrowUp / ArrowDown: move between visible nodes\n- ArrowRight: expand collapsed node\n- ArrowLeft: collapse expanded node\n- Home / End: jump to first/last visible node",
      },
    },
  },
  args: {
    defaultExpandedIds: ["1"],
    data: [
      {
        id: "1",
        label: "src",
        children: [
          { id: "1-1", label: "components" },
          { id: "1-2", label: "pages" },
        ],
      },
      { id: "2", label: "package.json" },
    ],
  },
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
