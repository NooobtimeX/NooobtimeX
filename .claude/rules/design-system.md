---
paths:
  - '**/*.tsx'
  - '**/*.css'
  - 'components/cyber/**'
---

# NooobtimeX — Design System Reference

> Persistent design memory. **Path-scoped rule** — auto-loads when you edit UI
> files (`.tsx` / `.css` / `components/cyber`); it is not loaded on pure-data
> sessions. Build UI from these primitives, not raw markup. Treat them as hard
> constraints. Cross-references: root [`CLAUDE.md`](../../CLAUDE.md),
> [`/app-conventions`](../skills/app-conventions/SKILL.md).

## 1. Identity

A personal portfolio with a **Cyberpunk 2077** visual theme — neon signal colors
on dark surfaces, notched/HUD framing, glitch and scanline accents. The feeling is
high-contrast and "in-world", not generic SaaS.

## 2. Signal colors — Tailwind utilities, not raw hex

Use the named signal utilities; don't hand-write the hex.

| Utility                         | Hex       | Role                       |
| ------------------------------- | --------- | -------------------------- |
| `bg-cyber-yellow` (and `text-`) | `#FCEE0A` | **Primary** — CTAs, accent |
| `text-cyber-cyan`               | `#00F0FF` | Links, info, highlights    |
| `cyber-magenta`                 | `#FF003C` | Danger / glitch            |
| `cyber-green`                   | —         | Success / positive         |
| `cyber-purple`                  | —         | Secondary accent           |

## 3. Build from `components/cyber/`, not raw markup

These are the design-system primitives — reach for them before writing a `<div>`:

- **`Container`** — the **one** page-width wrapper (`mx-auto max-w-7xl px-4 md:px-6`).
  Wrap every page/section in it; change site width in one place. Has `as` + `className`.
- **`NeonPanel`** — the panel surface.
- **`SectionHeader`** — `code` + `title` + `subtitle` + `action`.
- **`CyberButton`** — variants `solid | outline | danger | ghost`; renders a
  `<button>`, an internal `<Link>`, or an external `<a>` based on `href` + `external`
  (and casts internal hrefs to `Route` for you).
- **`CyberTag`**, **`CyberTooltip`**, **`GlitchText`**, **`HudFrame`**,
  **`ScanlineOverlay`**, **`MotionReveal`** (scroll-in reveal).

## 4. Utility classes

`clip-notch` / `clip-notch-sm` (notched corners), `neon-text-yellow`, `perk-node`.

## 5. React Compiler is on

Avoid patterns it rejects — notably hand-rolled `useCallback` / `useMemo` it flags
as "Compilation Skipped". Write plain components and let the compiler memoize.

## 6. Icons

Icons come from `@iconify/react` (`<Icon icon="logos:react" />`). Store icon names
as **strings in the data layer** (e.g. a skill's `icon`), not as imported components.
