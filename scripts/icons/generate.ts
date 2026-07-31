/**
 * Emits `lib/og-icons.generated.json` — the curated icon subset every server-side
 * renderer reads. Run: `bun run icons:generate`. Commit the result.
 *
 * Regenerate whenever you add or change an `icon:` in `common/data`. Forgetting is
 * caught by `bun run icons:check`, which gates `bun run build`.
 *
 * NOTE: this is the one script that needs `@iconify-json/*`, which live in
 * devDependencies. If the Dockerfile installer stage ever gains `--production`, this
 * breaks — `icons:check` and the site build keep working, since they only read the
 * committed artifact.
 */
import type { IconifyIcon } from '@iconify/types'
import { getIconData } from '@iconify/utils'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { COLLECTIONS } from './collections'
import { requiredIcons } from './required'

const OUT = join(process.cwd(), 'lib', 'og-icons.generated.json')

function main(): void {
	const names = requiredIcons()
	const subset: Record<string, IconifyIcon> = {}
	const unresolved: string[] = []

	for (const name of names) {
		const [prefix, id] = name.split(':')
		const collection = COLLECTIONS[prefix]

		if (!collection) {
			unresolved.push(`${name} — no collection "${prefix}" in scripts/icons/collections.ts`)
			continue
		}

		// `getIconData`, never `collection.icons[id]`: it resolves aliases, applies the
		// collection's default width/height, and merges transforms. Storing the raw entry
		// silently drops those defaults and renders e.g. `logos:react` (256×228) squashed.
		const data = getIconData(collection, id)
		if (!data) {
			unresolved.push(`${name} — "${id}" not found in ${prefix}`)
			continue
		}

		// Keyed on the full `prefix:id`. `MONOCHROME` tinting in lib/icon-data.ts splits on
		// ':' to decide whether to bake in a colour — a bare id would break it, and the
		// symptom is an invisible icon rather than a crash.
		subset[name] = data
	}

	if (unresolved.length > 0) {
		throw new Error(`${unresolved.length} icon(s) could not be resolved:\n  ${unresolved.join('\n  ')}`)
	}

	writeFileSync(OUT, `${JSON.stringify(subset, null, '\t')}\n`, 'utf8')

	const bytes = Buffer.byteLength(JSON.stringify(subset))
	const shipped = Object.values(COLLECTIONS).reduce((n, c) => n + Object.keys(c.icons).length, 0)
	console.log(`written lib/og-icons.generated.json — ${names.length} icons, ${(bytes / 1024).toFixed(1)} KB`)
	console.log(`(subset of ${shipped.toLocaleString()} icons across ${Object.keys(COLLECTIONS).length} collections)`)
}

main()
