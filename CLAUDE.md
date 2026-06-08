# CLAUDE.md

Guidance for Claude when working in this repo.

## What this is

**NooobtimeX** — Wongsaphat Puangsorn's personal portfolio. A content-driven
marketing site with a **Cyberpunk 2077** visual theme. Deployed on **Vercel**
(no Docker / Railway — those were removed).

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui on Base UI** (`@base-ui/react`)
- Package manager: **bun** (`bun.lock`). Install with `bun install`; run scripts with `bun run <script>`.
- Fonts: Rajdhani (display), JetBrains Mono (mono), Noto Thai.

## Commands

| Task  | Command         | Notes                                   |
| ----- | --------------- | --------------------------------------- |
| Dev   | `bun run dev`   | serves on **port 1000**                 |
| Build | `bun run build` | ~79 routes; this is the type-check gate |
| Lint  | `bun run lint`  | `eslint . --fix && prettier . --write`  |

**Definition of done for any code change: `bun run lint` then `bun run build`,
both green.** Run them before declaring work complete.

## Architecture

```
app/
  (main)/          # the site — shares NavBar + footer via (main)/layout.tsx
    page.tsx       # home (hero + numbered sections)
    projects/  · projects/[...id]
    skills/    · skills/[...id]
    experience/· experience/[...id]
    github/        # dedicated GitHub stats page (ISR, token-free)
  cv/ · cv/presentation/   # standalone, OUTSIDE the (main) layout
  layout.tsx       # root (fonts, metadata, global overlays)
common/            # the data layer — single source of truth (see below)
components/        # by feature: cyber/ home/ projects/ skills/ experience/
                   #   github/ navigation/ search/ cv/ ui/ (shadcn)
lib/utils.ts       # cn() + slugify/unslugify/formatExperienceDuration/…
hooks/  public/
```

Routes are **typed** (`next` typedRoutes). Internal `<Link href>` to a dynamic
path needs a `Route` type or a cast (see existing usages).

## The `common/` data layer — read this before editing content

Everything is barrel-exported; **import from `@/common`**, never deep paths.

- `enums.ts` — small fixed sets as **string-literal unions**, NOT TS enums
  (`SkillCategory`, `Position`, `EmploymentType`, `EntityId`, `SocialPlatform`…).
- `interfaces.ts` — domain models: `Skill`, `Project`, `ExperienceItem`,
  `Organization`, `SocialLink`, `PersonalData`.
- `data/`
  - `assets.ts` — **central asset/path map** (`assets.site|personal|logos|projects`).
    The "goldmine": every image path lives here. Images are **`.webp`** (except
    favicon / apple-touch / og-image). Reference assets via `assets.*`, never inline paths.
  - `skills.ts` — `skill()` identity helper preserves the literal `id` so
    `SkillId` is derived from the `allSkills` tuple. Exports `skillsData`,
    `skillById`, `featuredSkills`, `categoryMetadata`.
  - `projects.ts` — author each as a `ProjectDef` (skills listed as `SkillId[]`);
    `projectsData` resolves them to full `Project`s via `skillById`.
    `featuredProjects` is a static id pick.
  - `experiences.ts` — `ExperienceItem` consts → `experiencesData` (sorted desc),
    plus `workExperienceData` / `educationData` / `personalProjectsData`.
  - `entities.ts` — `Organization` consts → `entitiesData`; projects link to one
    via `linkedOrganizationId` (`EntityId`).
  - `personal.ts` — `personalData` (name, title, tagline, avatar, `socialLinks`).

## Design system (`components/cyber/`)

Build UI from these, not raw markup. Signal colors are Tailwind utilities:
`bg-cyber-yellow` (#FCEE0A, primary), `text-cyber-cyan` (#00F0FF),
`cyber-magenta` (#FF003C, danger/glitch), `cyber-green`, `cyber-purple`.

- **`Container`** — the one page-width wrapper (`mx-auto max-w-7xl px-4 md:px-6`).
  Wrap **every** page/section in it; change width in one place. `as` + `className` props.
- **`NeonPanel`** — panel surface. **`SectionHeader`** — `code` + `title` + `subtitle` + `action`.
- **`CyberButton`** — `solid|outline|danger|ghost`; renders `<button>` / internal `<Link>` / external `<a>` via `href`+`external`.
- `CyberTag`, `CyberTooltip`, `GlitchText`, `HudFrame`, `ScanlineOverlay`,
  **`MotionReveal`** (scroll-in reveal).
- Utility classes: `clip-notch` / `clip-notch-sm` (notched corners), `neon-text-yellow`, `perk-node`.

## Conventions

- **Indentation is tabs** (Prettier `useTabs`). Match surrounding style.
- **React Compiler is on** — avoid patterns it rejects (e.g. hand-rolled
  `useCallback`/`useMemo` it flags as "Compilation Skipped").
- Icons via `@iconify/react` (`<Icon icon="logos:react" />`); store icon names as strings in data.
- GitHub data is **token-free** and **ISR** (`{ next: { revalidate: 86400 } }`),
  every fetch wrapped in try/catch returning `null` so a failed fetch never breaks the build.
- **Commit messages** end with:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`
  Only commit/push when asked; branch first if on `main` and unsure.

## Gotchas

- Use `bun run build`, not `bun build` — `build` is Bun's own bundler builtin,
  so the package script must be run with explicit `bun run`.
- Renaming a route? Stale `.next` types bite — `rm -rf .next` then rebuild.
- The `skill()` helper needs the `<const T>` literal to keep `SkillId` precise;
  don't widen it.
- New project images go in `assets.ts` (as `.webp`) first, then referenced by the `ProjectDef`.
