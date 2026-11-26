// SPDX-License-Identifier: MIT
// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// Writes a single funny line (1-140 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I tried to be productive today, so I alphabetised my excuses.";

// Mirror the sealed gate: entry.txt must be UTF-8 text of 1-140 chars,
// not only white space. Fail loudly instead of shipping an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error(`Entry line fails the 1-140 char gate (${[...LINE].length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
