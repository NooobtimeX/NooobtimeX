/**
 * Card palette for the `next/og` (Satori) renderers, as literal hex — Satori supports
 * neither CSS custom properties nor `color-mix()`. Mirrors the signal colors in
 * `app/globals.css`.
 *
 * ⚠️ THIS FILE MUST HAVE ZERO IMPORTS, and `lib/og-assets.ts` must never re-export `OG`.
 *
 * That is the entire reason it exists. `app/opengraph-image.tsx` is a Next *metadata
 * convention* — it exports `alt`/`size`/`contentType`, so Next evaluates it during
 * metadata resolution for EVERY page and welds its whole import graph into the shared
 * page chunk. While it imported `OG` from `og-assets.ts`, that graph included the six
 * `@iconify-json/*` collections: 26 MB of JSON, ~73 MB RSS, loaded by all 14 page
 * route entries at boot (`preloadEntriesOnStart` is on by default in Next 16) — and
 * provably dead there, since Turbopack tree-shook the code that reads it.
 *
 * A re-export would re-weld all of it with no visible symptom. The guard is
 * `find .next/standalone/.next/server/chunks -name '*.js' -size +1M`, which must
 * print nothing.
 */
export const OG = {
	yellow: '#FCEE0A',
	cyan: '#00F0FF',
	magenta: '#FF003C',
	green: '#39FF14',
	bg: '#050507',
	panel: '#0A0C11',
	fg: '#E6FBFF',
	muted: '#7D8A99'
} as const
