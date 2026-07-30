# NooobtimeX

Wongsaphat Puangsorn's personal portfolio — a content-driven marketing site with a
**Cyberpunk 2077** visual theme. Deployed on **Railway** via `railway.toml` and the root
`Dockerfile` (Vercel is no longer a deploy target).

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui on Base UI** (`@base-ui/react`)
- Package manager: **bun** (`bun.lock`) — `bun install`; run scripts with `bun run <script>`.
- Fonts: Rajdhani (display), JetBrains Mono (mono), Noto Thai.

```
app/
  (main)/          # the site — shares NavBar + footer via (main)/layout.tsx
    page.tsx       # home · projects/ · skills/ · experience/ · github/ (+ [...id] detail routes)
  cv/ · cv/presentation/   # standalone, OUTSIDE the (main) layout
  layout.tsx       # root (fonts, metadata, global overlays)
common/            # the data layer — single source of truth for all content
components/cyber/   # the design system · plus feature folders + ui/ (shadcn)
lib/utils.ts       # cn() + slugify/unslugify/formatExperienceDuration · lib/github.ts (token-free ISR)
```

## Commands

| Task  | Command         | Notes                                   |
| ----- | --------------- | --------------------------------------- |
| Dev   | `bun run dev`   | serves on **port 1000**                 |
| Build | `bun run build` | ~99 routes; this is the type-check gate |
| Lint  | `bun run lint`  | `eslint . --fix && prettier . --write`  |

**Definition of done for any code change: `bun run lint` then `bun run build`, both
green.** Run them before declaring work complete.

## Deployment

**Railway is the only deploy target.** It uses `railway.toml` (config-as-code, overrides
the dashboard) + the root `Dockerfile`, mirroring `rs-trophy.com`:

- **bun builds, node serves.** Stages 1–2 run install and build on `oven/bun:1-slim`;
  stage 3 serves on `node:24-slim`. Serving on Bun is deliberately avoided — the Next
  standalone server leaks RSS under Bun's Node-compat HTTP layer (oven-sh/bun#27514),
  which on a long-lived container reads as a slow OOM.
- `output: 'standalone'` in `next.config.ts` is what makes stage 3 install-free. It also
  traces **sharp**, which `/_next/image` needs — image optimization runs in our own
  container now, so sharp must survive into the runtime stage.
- **Never let `.env` into the image.** `.dockerignore` excludes it because Next copies
  `.env` into `.next/standalone/`, and a committed `PORT` there would shadow Railway's
  injected `$PORT` and hang the healthcheck. Runtime config (e.g. optional
  `GITHUB_TOKEN`) belongs in Railway service variables, not build args.
- Railway service **Root Directory stays `/`** — the Dockerfile expects the repo root as
  its build context. `watchPatterns` is an allowlist so the `readme-assets` workflow
  committing regenerated `.github/assets/*.svg` doesn't trigger a site rebuild.

Verify a Railway change locally the way Railway runs it — injected port, no `.env`:

```bash
docker build -t nooobtimex . && docker run --rm -e PORT=7788 -p 7788:7788 nooobtimex
```

## Global conventions

- Use **`bun run build`**, not `bun build` — `build` is Bun's own bundler builtin,
  so the package script must be run with explicit `bun run`.
- **Indentation is tabs** (Prettier `useTabs`). Match the surrounding style.
- **Commit messages** end with:
  `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`
  Only commit/push when asked; branch first if on `main` and unsure.

## Conventions live in skills

Detailed, domain-scoped rules live in the skills below — they auto-load on demand
and encode the type-safety invariants the build relies on. **Read the relevant
reference before adding or changing code in that area.**

- The `common/` data layer (content, enums, the `skill()`/`SkillId` invariant, the
  `assets` map, projects/experiences/entities/personal) →
  [`/common-conventions`](.claude/skills/common-conventions/SKILL.md).
- The `app/` App Router (route groups & layouts, typed routes, page composition,
  `[...id]` routes, token-free + ISR GitHub data) →
  [`/app-conventions`](.claude/skills/app-conventions/SKILL.md).
- Adding/editing content — the "add my new project / skill / role" task recipes →
  [`/portfolio-content`](.claude/skills/portfolio-content/SKILL.md).
- UI / design — the Cyberpunk design system (`components/cyber/`, signal colors,
  notch/HUD utilities, React Compiler, Iconify) →
  [`.claude/rules/design-system.md`](.claude/rules/design-system.md) — a
  **path-scoped rule** that auto-loads when you edit `.tsx` / `.css` files.

More skills live under [`.claude/skills/`](.claude/skills/).

> **This file is the single source of truth.** `AGENTS.md` is a **symlink** to it,
> so any agent that reads `AGENTS.md` gets the same content — edit only `CLAUDE.md`.
