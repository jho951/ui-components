import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["index.ts", "ui/index.ts", "lib/index.ts", "assert/index.ts","hook/index.ts"],
    format: ["esm"],
    dts: true,
    splitting: true,
    clean: true,
    external: ["react", "react-dom"],

    // IMPORTANT:
    // - If SVGs are emitted as separate files, the compiled JS may end up with plain
    //   string paths (e.g. "./arrow-XXXX.svg"), which Storybook/Vite won't automatically
    //   serve or bundle.
    // - Loading SVGs as text keeps icons self-contained and makes Icon registry work
    //   without fetch() in Storybook.
    loader: {
        ".svg": "text",
    },
});