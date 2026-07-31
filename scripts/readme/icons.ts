/**
 * Embeds iconify icon data as inline SVG at generation time — no external
 * fetches in the rendered assets (GitHub camo CSP). Icon names follow the
 * `collection:id` strings already used across common/data.
 *
 * Icons come from the curated subset in `lib/icon-data.ts`, shared with the Satori
 * cards. Adding a skill means `bun run icons:generate`; until you do, that icon
 * renders as a letter tile here.
 */
import { iconToSVG } from '@iconify/utils'
import { MONOCHROME, resolveIcon } from '@/lib/icon-data'
import { C, FONT_MONO, px } from './theme'

export interface EmbeddedIcon {
	width: number
	at: (x: number, y: number) => string
}

/**
 * Resolve an icon at a given square size (height). Returns its real width
 * (aspect-preserved) and a placement function. Falls back to a letter tile.
 */
export function icon(
	name: string,
	size: number,
	opts: { color?: string; whiteBg?: boolean; fallbackLabel?: string } = {}
): EmbeddedIcon {
	const [collection, id] = name.split(':')
	const data = resolveIcon(name)

	// Unlike `iconDataUri` in lib/og-assets.ts, this degrades instead of throwing:
	// `readme:assets` runs on a weekly schedule, and one unknown icon should not fail
	// the whole workflow. `bun run icons:check` is the gate that catches real drift.
	if (!data) {
		console.warn(`[icons] missing icon "${name}" — using letter fallback`)
		const letter = (opts.fallbackLabel ?? id ?? '?').charAt(0).toUpperCase()
		return {
			width: size,
			at: (x, y) =>
				`<g><rect x="${px(x)}" y="${px(y)}" width="${size}" height="${size}" fill="none" stroke="${C.border}" stroke-width="1" />`
				+ `<text x="${px(x + size / 2)}" y="${px(y + size * 0.72)}" font-family="${FONT_MONO}" font-size="${px(size * 0.6)}" fill="${opts.color ?? C.cyan}" text-anchor="middle">${letter}</text></g>`
		}
	}

	const rendered = iconToSVG(data, { height: size })
	const w = px(parseFloat(String(rendered.attributes.width)) || size)
	const tint = MONOCHROME.has(collection) ? (opts.color ?? C.fg) : undefined

	return {
		width: w,
		at: (x, y) => {
			const pad = 3
			const chip =
				opts.whiteBg ?
					`<rect x="${px(x - pad)}" y="${px(y - pad)}" width="${px(w + pad * 2)}" height="${px(size + pad * 2)}" rx="3" fill="#FFFFFF" />`
				:	''
			const style = tint ? ` style="color:${tint}" fill="${tint}"` : ''
			return `${chip}<svg x="${px(x)}" y="${px(y)}" width="${w}" height="${size}" viewBox="${rendered.attributes.viewBox}"${style}>${rendered.body}</svg>`
		}
	}
}
