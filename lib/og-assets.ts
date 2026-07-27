/**
 * Server-only asset helpers for the `next/og` (Satori) card renderers.
 *
 * Satori is not a browser: it cannot fetch, it cannot run JS, and it only accepts
 * images as `<img src="data:…">`. So both of the things our cards need — the tech
 * stack icons and the project cover — have to be resolved to data URIs up front.
 *
 * Two constraints drive everything here:
 *   1. `@iconify/react` resolves icons over the network at RUNTIME. That is useless
 *      to Satori, so icons are read straight out of the `@iconify-json/*` packages
 *      instead — the same trick `scripts/readme/icons.ts` uses for the profile README.
 *   2. Satori cannot decode WebP, and every image in `public/` is WebP. They are
 *      transcoded to PNG with sharp.
 */
import { icons as carbon } from '@iconify-json/carbon'
import { icons as logos } from '@iconify-json/logos'
import { icons as materialSymbols } from '@iconify-json/material-symbols'
import { icons as mdi } from '@iconify-json/mdi'
import { icons as simpleIcons } from '@iconify-json/simple-icons'
import { icons as skillIcons } from '@iconify-json/skill-icons'
import type { IconifyJSON } from '@iconify/types'
import { getIconData, iconToSVG } from '@iconify/utils'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

/**
 * Card palette. Mirrors the signal colors in `app/globals.css`, as literal hex —
 * Satori supports neither CSS custom properties nor `color-mix()`.
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

/** Icon collections bundled at build time. Keys match the `collection:id` prefix used in `common/data`. */
const COLLECTIONS: Record<string, IconifyJSON> = {
	'carbon': carbon,
	'logos': logos,
	'material-symbols': materialSymbols,
	'mdi': mdi,
	'simple-icons': simpleIcons,
	// Badge-style, full-colour marks. Carried for brands with no entry in `logos`
	// (currently Elysia) — prefer `logos` when a bare mark exists there.
	'skill-icons': skillIcons
}

/**
 * Collections whose icons are drawn in `currentColor` and therefore need an explicit tint.
 * `skill-icons` is deliberately absent — its icons ship real brand colours, and tinting one
 * would flatten it to a silhouette.
 */
const MONOCHROME = new Set(['carbon', 'material-symbols', 'mdi', 'simple-icons'])

export interface EmbeddedIcon {
	src: string
	width: number
	height: number
}

/**
 * Resolve an Iconify name to a self-contained SVG data URI at the given height.
 *
 * Returns the real (aspect-preserved) width alongside it because Satori will not
 * infer an `<img>`'s intrinsic size — `logos:react` is 72×64, not 64×64, and
 * forcing it square visibly squashes the logo.
 *
 * Returns null for an unknown icon so callers can skip the slot rather than render
 * a broken image. That is a silent gap by design; the build log is the warning.
 */
export function iconDataUri(name: string, opts: { size?: number; color?: string } = {}): EmbeddedIcon | null {
	const size = opts.size ?? 48
	const [collection, id] = name.split(':')
	const data = COLLECTIONS[collection] ? getIconData(COLLECTIONS[collection], id) : null

	if (!data) {
		console.warn(`[og-assets] unknown icon "${name}" — omitted from card`)
		return null
	}

	const rendered = iconToSVG(data, { height: size })
	const width = Math.round(parseFloat(String(rendered.attributes.width)) || size)

	// `currentColor` has nothing to inherit from in a standalone document, so bake
	// the tint in rather than relying on a `color` style surviving rasterization.
	const body =
		MONOCHROME.has(collection) ? rendered.body.replaceAll('currentColor', opts.color ?? OG.fg) : rendered.body

	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${size}" `
		+ `viewBox="${rendered.attributes.viewBox}">${body}</svg>`

	return {
		src: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`,
		width,
		height: size
	}
}

/**
 * Read an image out of `public/` and return it as a PNG data URI, downscaled to
 * `width` so the base64 payload stays sane (a full 1600×900 cover is ~1.5 MB inline).
 *
 * `publicPath` is a site-root path as stored in `common/data/assets.ts`, e.g.
 * `/issue/rs-trophy/cover.webp`.
 *
 * Resolves to null if the file is missing or undecodable — the cards fall back to
 * their HUD-only layout rather than failing the build over a bad asset path.
 */
export async function pngDataUri(publicPath: string, width: number): Promise<string | null> {
	try {
		const file = path.join(process.cwd(), 'public', publicPath.replace(/^\//, ''))
		const png = await sharp(await readFile(file))
			.resize({ width, withoutEnlargement: true })
			.png()
			.toBuffer()
		return `data:image/png;base64,${png.toString('base64')}`
	} catch (error) {
		console.warn(`[og-assets] could not embed "${publicPath}":`, (error as Error).message)
		return null
	}
}
