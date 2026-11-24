import { copyFileSync, mkdirSync } from "node:fs";
// Copy the one-line entry to the output dir; stdout stays silent.
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
