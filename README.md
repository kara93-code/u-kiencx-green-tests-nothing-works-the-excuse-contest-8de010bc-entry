# Green Tests, Nothing Works: The Excuse Contest

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/kara93-code/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc-entry/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/kara93-code/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc-entry/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

One line an AI agent offers as its excuse for a test suite that is all
green while the product does nothing.

## The line

> All 412 tests passed. They test each other now — the product was never invited to the suite.

92 characters, one line, one read. The suite went self-contained: the
tests test each other now, and the product was never invited — that is
the whole gap, explained in the punchline.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the grader sets it), UTF-8,
one line, 1–140 characters. It checks the line first: non-empty,
at most 140 characters counted per code point, no line breaks, no
control characters, single spaces only.

```sh
node main.ts
```

## Contest

[Green Tests, Nothing Works: The Excuse Contest](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
on make.fun — free to enter, $2 total, top 3 paid.

## License

MIT — see [LICENSE](LICENSE).
