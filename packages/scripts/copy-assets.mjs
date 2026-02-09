import fs from "node:fs";
import path from "node:path";

/**
 * Copy non-code assets (CSS/fonts/etc.) into /dist after tsup.
 *
 * Why this exists:
 * - We publish dist/** only.
 * - tsup (bundle:false) does not reliably copy arbitrary asset files.
 * - Consumers expect `import "@jho951/ui-components/tokens.css"` to work.
 */
const root = process.cwd();
const outDir = path.join(root, "dist");

function copyDir(from, to, shouldCopyFile = () => true) {
    if (!fs.existsSync(from)) return;
    fs.mkdirSync(to, { recursive: true });

    for (const name of fs.readdirSync(from)) {
        const src = path.join(from, name);
        const dst = path.join(to, name);
        const st = fs.statSync(src);

        if (st.isDirectory()) {
            copyDir(src, dst, shouldCopyFile);
        } else {
            if (!shouldCopyFile(src)) continue;
            fs.mkdirSync(path.dirname(dst), { recursive: true });
            fs.copyFileSync(src, dst);
        }
    }
}

copyDir(path.join(root, "assert", "style"), path.join(outDir, "assert", "style"));
copyDir(path.join(root, "assert", "font"), path.join(outDir, "assert", "font"));
copyDir(path.join(root, "ui"), path.join(outDir, "ui"), (fp) => fp.endsWith(".css") || fp.endsWith(".woff2") || fp.endsWith(".svg") || fp.endsWith(".png") || fp.endsWith(".jpg") || fp.endsWith(".webp"));
