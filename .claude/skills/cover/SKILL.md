---
name: cover
description: >-
  Generate on-brand Cyberpunk project cover images (the 16:9 `cover.webp` hero
  used on project cards + detail pages) for the NooobtimeX portfolio, without a
  screenshot. Renders a parameterized HTML template with headless Chrome and
  converts to webp. Use when adding a new project that has no cover, when a
  project's thumbnail is weak (a logo/placeholder), or when the user asks to
  "make a cover / banner / thumbnail like the flood-project one". Also documents
  moving a real screenshot into the project's gallery so it isn't lost.
---

# Cover generator

Produces the stylized 1600×900 covers used as each project's `images.cover`
(the card thumbnail + detail-page hero). Matches the site's Cyberpunk 2077 theme:
dark base, neon signal colors, HUD frame, scanlines, a faint per-project motif,
big glitch-glow title, and a mono stack strip. See the flood-project / rs-trophy
covers for the look.

## Files (in `assets/`)

- **`cover-template.html`** — the parameterized template. Reads its content from
  URL query params (so one file renders every cover). Self-contained: system
  fonts only, inline SVG motifs, no network.
- **`render.sh`** — render one cover: `render.sh <out.webp> "<url-encoded query>"`.

## Pipeline

Headless Chrome renders the template at 2× → PNG → `cwebp` resizes to 1600×900.
Requires Google Chrome + `cwebp` (both present on this machine; no Pillow / magick /
rsvg). One-liner per banner:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --virtual-time-budget=2500 --window-size=1600,900 --default-background-color=ff06070d \
  --screenshot=/tmp/b.png "file://<ABS_PATH>/cover-template.html?<QUERY>"
cwebp -quiet -resize 1600 900 -q 88 /tmp/b.png -o public/issue/<id>/cover.webp
```

To batch many, loop in a Node/bun script building the query with
`encodeURIComponent` per value (see the git history of this skill for a
`gen-all.mjs` example). Prefer `render.sh` for one-offs.

## Query params (the "prompt")

All optional; URL-encode values.

| param      | meaning                                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accent`   | hex signal color, e.g. `#00F0FF` (cyan), `#FCEE0A` (yellow), `#FF003C` (red), `#B14FFF` (purple), `#39FF14` (green). Drives glow, tags, grid, motif tint.                                                      |
| `kicker`   | mono eyebrow, e.g. `// DEV TOOL`, `// MARKETPLACE`.                                                                                                                                                            |
| `title`    | big title. Use `\|` for a line break: `Online\|Poker`. Long single-word lines auto-shrink.                                                                                                                     |
| `subtitle` | one-line descriptor under the title.                                                                                                                                                                           |
| `tags`     | comma-separated stack, rendered as `STACK // a · b · c`.                                                                                                                                                       |
| `motif`    | background graphic: `waves` (chart/water) · `bars` · `dots` (default) · `rings` (target/medal) · `hex` (mesh) · `qr` (matrix, seeded by title) · `cards` (♠♥♦♣) · `braces` (`{ }` code) · `trophy` · `shield`. |
| `badgeLvl` | top-right line, e.g. `● Live`, `● Archived`, `● SaaS`.                                                                                                                                                         |
| `badgeSub` | small line under the badge, e.g. `Realtime`.                                                                                                                                                                   |
| `meta`     | bottom-right, e.g. `FREELANCE // 2025`.                                                                                                                                                                        |

Keep `accent`/`motif` distinct per project so the set reads as a cohesive family,
not clones. Match `badgeLvl` to `links.live` (`● Live` vs `● Archived`).

## Wiring it into the data (`common/data/`)

Naming convention: the generated hero is always `cover.webp`; real screenshots are
`photo-1.webp`, `photo-2.webp`, … (primary screenshot first). Everything is `.webp`.

1. Save the generated file as `public/issue/<id>/cover.webp`. If a real screenshot
   currently sits at `banner.webp`, rename it into the `photo-N.webp` sequence
   (`git mv`, primary first) so no file is named `banner.webp`.
2. In `assets.ts` set the project's `cover` to the new file and **keep the
   screenshot(s) in `gallery`** so nothing is lost:
   `foo: { cover: '/issue/foo/cover.webp', gallery: ['/issue/foo/photo-1.webp'] }`.
3. In `projects.ts` show the real screenshot(s) in the detail gallery:
   `images: { cover: assets.projects.foo.cover, photos: [...assets.projects.foo.gallery] }`
   (use `photos: []` for a cover-only project with no screenshot).
4. `bun run lint && bun run build`, then eyeball `/projects` + `/projects/<id>`.

## Notes

- `next.config.ts` allows only image `qualities: [100]` — don't hand-test optimizer
  URLs with `q=75` (they 400); the raw `/issue/.../cover.webp` is the source of truth.
- Cards use `next/image` `object-cover` on a 16:9 box, so 1600×900 is the target.
- The template's fonts fall back to macOS system fonts (Avenir Next Condensed /
  Menlo) since Rajdhani/JetBrains-Mono aren't installed — that's expected and looks
  right in raster.

## Per-project config used for the current set (reuse / tweak these)

```
monomax-epl-portal  accent #B14FFF  motif qr      title MONOMax|EPL Portal  kicker // LICENSING SAAS   badge ● SaaS
rs-trophy           accent #FCEE0A  motif trophy  title RS|Trophy           kicker // E-COMMERCE PLATFORM  badge ● Live
looklook-pet        accent #FF3CAC  motif hex     title LOOKLOOK|Pet        kicker // MARKETPLACE      badge ● Live
online-poker-game   accent #FF003C  motif cards   title Online|Poker        kicker // REALTIME GAME    badge ● Archived
flood-project       accent #00F0FF  motif waves   title Flood|Project       kicker // WATER-LEVEL MONITORING
prettier-config     accent #00F0FF  motif braces  title Prettier|Config     kicker // DEV TOOL         badge ● Live
rs-medal            accent #8AD8FF  motif rings    title RS|Medal            kicker // E-COMMERCE       badge ● Live
rs-award            accent #FFB020  motif shield   title RS|Award            kicker // E-COMMERCE       badge ● Live
portfolio           accent #FCEE0A  motif hex      title Portfolio|v2.077    kicker // PERSONAL SITE    badge ● Live
qr-food             accent #39FF14  motif qr       title QR|Food             kicker // SENIOR THESIS    badge ● Thesis
```
