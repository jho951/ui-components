import path from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const packagesRoot = path.resolve(dirname, "../../packages");

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (viteConfig) => {
    viteConfig.resolve ??= {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias ?? {}),
      "@": packagesRoot,
      "@ui": path.join(packagesRoot, "ui"),
      "@hook": path.join(packagesRoot, "hook"),
      "@lib": path.join(packagesRoot, "lib"),
      "@assert": path.join(packagesRoot, "assert"),
    };

    return viteConfig;
  },
};

export default config;
