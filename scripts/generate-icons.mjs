import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pkgRoot = path.resolve(__dirname, '..');

const svgTs = path.join(pkgRoot, 'ui', 'icon', 'svg.ts');

if (!fs.existsSync(svgTs)) {
  console.error('[generate:icons] src/components/icon/svg.ts not found.');
  process.exit(1);
}

// Intentionally no codegen: keep the user's curated icon set in svg.ts as the single source of truth.
console.log('[generate:icons] Using static icon definitions in src/components/icon/svg.ts (no generation needed).');
