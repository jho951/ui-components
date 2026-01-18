import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["index.ts", "ui/index.ts", "lib/index.ts", "assert/index.ts","hook/index.ts"],
    format: ["esm"],
    dts: true,
    splitting: true,
    clean: true,
    external: ["react", "react-dom"],
});
