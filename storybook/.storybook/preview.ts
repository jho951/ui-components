import "../../packages/assert/style/reset.css";
import "../../packages/assert/style/theme.css";
import "../../packages/assert/style/class.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Form", "Actions", "Navigation", "Data Display", "Feedback", "Utility"],
      },
    },
    layout: "centered",
  },
};

export default preview;
