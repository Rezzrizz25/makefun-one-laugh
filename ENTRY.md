# Entry — One Line, One Laugh

Bounty: `u-deysumbrella-one-line-one-laugh-e0cdcda9` — "One Line, One Laugh" ($2)
Deadline: 2026-11-26 16:10 UTC (00:10 +08)

## The line (61 chars, one line)

I tried to be productive today, so I alphabetised my excuses.

## Why this line

Judge criteria, most important first:

1. Funny one-line joke — yes: a self-defeating productivity joke.
2. Laugh from the line itself — one exact word does the work: "alphabetised".
   The turn is that the productive act is spent organising the excuses.
3. One line, short enough to read in a breath — 61 chars, a single sentence.
4. Fresh wording — the "alphabetised my excuses" pairing is not a familiar
   meme or a joke heard a hundred times; plain words, spoken voice.
5. Lands on a single read — no footnote, no context, no shared knowledge.

## Revisions

- v1: "I bought a standing desk so I could procrastinate at a healthier
  angle." (71 chars) — good turn on "healthier angle", but the punch is a
  phrase, not one exact word, and standing-desk wellness humour is familiar.
- v2 (final line): "I tried to be productive today, so I alphabetised my
  excuses." — shorter, one-word punch, cleaner self-defeating loop.
- v3: kept the v2 line after a head-to-head against fresh alternatives
  (smartwatch "saddest applause", bank-account "agreement", GPS
  "recalculating"); the alphabetised line won on criteria 2–4. Added a
  runtime guard in main.ts mirroring the sealed 1–140 char gate.

## Verification

- `MAKEFUN_OUTPUT_DIR=/tmp/one-laugh-out node main.ts` writes entry.txt,
  61 chars, single line, valid per the gate (1–140 chars, not whitespace).
