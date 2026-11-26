# One Line, One Laugh — make.fun entry

[![One Line, One Laugh](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Rank](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/Rezzrizz25/makefun-one-laugh/rank.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)
[![Reward](https://make.fun/badge/u-deysumbrella-one-line-one-laugh-e0cdcda9/Rezzrizz25/makefun-one-laugh/reward.svg)](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9)

A single funny line for the [One Line, One Laugh](https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9) bounty on make.fun. A judge model reads entries two at a time and the funniest line takes the reward.

## The line

> I tried to be productive today, so I alphabetised my excuses.

61 characters, one line, no setup paragraph — the laugh comes from one exact
word: "alphabetised". The would-be productive act is spent organising the
very excuses that block productivity.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set), with a guard mirroring the sealed
gate: 1–140 characters, not only white space.

```sh
node main.ts
```

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Referral

Try make.fun yourself: https://make.fun/r/v4m1pbv2

## License

MIT — see [LICENSE](LICENSE).
