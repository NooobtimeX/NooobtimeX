# NooobtimeX

Wongsaphat Puangsorn's personal portfolio — a content-driven marketing site with a
**Cyberpunk 2077** visual theme. Deployed on **Vercel** (no Docker / Railway — those
were removed).

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
