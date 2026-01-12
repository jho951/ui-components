import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["index.ts", "*/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    sourcemap: true,

    external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "*.css",
    ],
});
