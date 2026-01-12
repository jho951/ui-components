import fs from "node:fs";
import path from "node:path";

const pkgRoot = process.cwd();
const packagesRoot = path.resolve(pkgRoot, "..");
const distDir = path.join(pkgRoot, "dist");

const TARGET_PACKAGES = ["ui", "assert", "internal"];
const skip = new Set(["node_modules", "dist", ".storybook", ".turbo", ".git", "scripts"]);

function walk(dir, currentPkgName) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const e of entries) {
        if (skip.has(e.name)) continue;

        const abs = path.join(dir, e.name);

        if (e.isDirectory()) {
            walk(abs, currentPkgName);
            continue;
        }

        if (e.isFile() && e.name.endsWith(".css")) {
            const rel = path.relative(packagesRoot, abs);
            const out = path.join(distDir, rel);

            fs.mkdirSync(path.dirname(out), { recursive: true });
            fs.copyFileSync(abs, out);
        }
    }
}

TARGET_PACKAGES.forEach(pkg => {
    const targetDir = path.join(packagesRoot, pkg);
    if (fs.existsSync(targetDir)) {
        console.log(`[copy-css] Scanning ${pkg}...`);
        walk(targetDir, pkg);
    }
});