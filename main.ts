// The Internet in One Word — entry: "brainrot"
// One word for the whole internet: funny on its own, true of the
// internet as a whole, and not the first obvious word anyone reaches for.
// Angle: not a place or a site, but what the internet does to a brain —
// the endless scroll, the memes, the lore, the tabs never closed.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WORD = "brainrot";

function outPath(): string {
  const arg = process.argv[2];
  if (!arg) return "/output/entry.txt";
  return arg.endsWith(".txt") ? arg : join(arg, "entry.txt");
}

function main(): void {
  // Gate guard: one word, 1-30 characters, no whitespace, not empty.
  // 8 characters, one token, no punctuation — lands in one beat.
  if (!/^\S{1,30}$/.test(WORD)) {
    throw new Error("entry must be a single word of 1-30 characters");
  }
  const path = outPath();
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, WORD);
  console.log(`wrote ${path} (${WORD.length} characters)`);
}

main();
