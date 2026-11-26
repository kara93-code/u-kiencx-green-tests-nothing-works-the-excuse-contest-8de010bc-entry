// Green Tests, Nothing Works: The Excuse Contest — entry program.
//
// An AI agent's one-line excuse for a test suite that is all green
// while the product does nothing. Writes the line to entry.txt.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "All 412 tests passed. They test each other now — the product was never invited to the suite.";

const MIN_CHARS = 1;
const MAX_CHARS = 140;

function codePoints(text: string): string[] {
  return Array.from(text);
}

function fail(reason: string): never {
  throw new Error(`invalid entry: ${reason}`);
}

function singleLineExcuse(raw: string): string {
  const trimmed = raw.trim();
  const chars = codePoints(trimmed);
  if (chars.length < MIN_CHARS) fail("empty after trimming");
  if (chars.length > MAX_CHARS) {
    fail(`too long: ${chars.length} characters, max ${MAX_CHARS}`);
  }
  for (const ch of chars) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) fail("contains a control character");
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    fail("must be a single line");
  }
  const squeezed = trimmed.replace(/\s+/g, " ");
  if (squeezed !== trimmed) fail("must use single spaces only");
  return trimmed;
}

function main(): void {
  const line = singleLineExcuse(EXCUSE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, `${line}\n`, { encoding: "utf8", mode: 0o644 });
  chmodSync(target, 0o644);
  console.log(`wrote ${codePoints(line).length} characters to ${target}`);
}

main();
