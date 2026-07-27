/**
 * Embeds iconify icon data as inline SVG at generation time — no external
 * fetches in the rendered assets (GitHub camo CSP). Icon names follow the
 * `collection:id` strings already used across common/data.
 */
import { icons as carbon } from '@iconify-json/carbon'
import { icons as logos } from '@iconify-json/logos'
import { icons as materialSymbols } from '@iconify-json/material-symbols'
import { icons as mdi } from '@iconify-json/mdi'
import { icons as simpleIcons } from '@iconify-json/simple-icons'
import { icons as skillIcons } from '@iconify-json/skill-icons'
import type { IconifyJSON } from '@iconify/types'
import { getIconData, iconToSVG } from '@iconify/utils'
import { C, FONT_MONO, px } from './theme'

// Must stay in step with COLLECTIONS in lib/og-assets.ts — a collection missing here
// silently degrades that icon to a letter tile in the README.
const COLLECTIONS: Record<string, IconifyJSON> = {
	'logos': logos,
	'simple-icons': simpleIcons,
	'material-symbols': materialSymbols,
	'mdi': mdi,
	'carbon': carbon,
	// Full-colour badge marks, for brands `logos` doesn't carry (currently Elysia).
	'skill-icons': skillIcons
}

/** Collections whose icons are monochrome `currentColor` and can be tinted. */
const MONOCHROME = new Set(['simple-icons', 'material-symbols', 'mdi', 'carbon'])

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
	const data = COLLECTIONS[collection] ? getIconData(COLLECTIONS[collection], id) : null

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
