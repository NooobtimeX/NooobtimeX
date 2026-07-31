/**
 * Icon lookup for SERVER-SIDE renderers — the Satori cards in `components/og/` and the
 * README SVGs in `scripts/readme/`. Neither can fetch, so their icons have to be
 * resolved from local data.
 *
 * Reads the curated subset in `lib/og-icons.generated.json` (175 icons, ~150 KB) rather
 * than the `@iconify-json/*` packages (32,844 icons, 26.7 MB). Importing those anywhere
 * reachable from `app/` cost ~150 MB of resident RSS in production; see
 * `lib/og-palette.ts` for the post-mortem and `scripts/icons/collections.ts` for where
 * they now live.
 *
 * CLIENT components are unaffected — they use `@iconify/react`, which fetches from the
 * Iconify API in the browser and can reach any icon in any collection.
 */
import type { IconifyIcon } from '@iconify/types'
import generated from '@/lib/og-icons.generated.json'

const ICONS = generated as Record<string, IconifyIcon>

/**
 * Collections whose icons are drawn in `currentColor` and therefore need an explicit
 * tint. `skill-icons` is deliberately absent — its icons ship real brand colours, and
 * tinting one would flatten it to a silhouette.
 */
export const MONOCHROME = new Set(['carbon', 'material-symbols', 'mdi', 'simple-icons'])

/**
 * Resolve a `collection:id` name to its icon data, or null if the subset lacks it.
 *
 * Entries are pre-resolved through `getIconData` at generation time, so aliases,
 * collection-level width/height defaults, and transforms are already baked in — the
 * returned object is what `iconToSVG` expects.
 */
export function resolveIcon(name: string): IconifyIcon | null {
	return ICONS[name] ?? null
}
