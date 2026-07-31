/**
 * The ONLY module in this repo that imports `@iconify-json/*`.
 *
 * Those six packages are 26.7 MB of JSON / 32,844 icons, and the site server-renders
 * 175 of them. Importing them anywhere reachable from `app/` puts the whole payload in
 * a server chunk — which cost ~150 MB of resident RSS in production until this file
 * quarantined them. See `lib/og-palette.ts` for the full post-mortem.
 *
 * Nothing under `app/`, `components/`, or `lib/` may import this file. It is
 * generate-time only: `scripts/icons/generate.ts` reads it to emit
 * `lib/og-icons.generated.json`, and everything else reads that artifact instead.
 * The packages live in devDependencies to keep that boundary honest.
 */
import { icons as carbon } from '@iconify-json/carbon'
import { icons as logos } from '@iconify-json/logos'
import { icons as materialSymbols } from '@iconify-json/material-symbols'
import { icons as mdi } from '@iconify-json/mdi'
import { icons as simpleIcons } from '@iconify-json/simple-icons'
import { icons as skillIcons } from '@iconify-json/skill-icons'
import type { IconifyJSON } from '@iconify/types'

/** Keys match the `collection:id` prefix used throughout `common/data`. */
export const COLLECTIONS: Record<string, IconifyJSON> = {
	'carbon': carbon,
	'logos': logos,
	'material-symbols': materialSymbols,
	'mdi': mdi,
	'simple-icons': simpleIcons,
	// Badge-style, full-colour marks. Carried for brands with no entry in `logos`
	// (currently Elysia) — prefer `logos` when a bare mark exists there.
	'skill-icons': skillIcons
}
