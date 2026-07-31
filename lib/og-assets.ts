/**
 * Server-only asset helpers for the `next/og` (Satori) card renderers.
 *
 * Satori is not a browser: it cannot fetch, it cannot run JS, and it only accepts
 * images as `<img src="data:…">`. So both of the things our cards need — the tech
 * stack icons and the project cover — have to be resolved to data URIs up front.
 *
 * Two constraints drive everything here:
 *   1. `@iconify/react` resolves icons over the network at RUNTIME. That is useless
 *      to Satori, so icons are read from the curated local subset in
 *      `lib/icon-data.ts` instead — the same source `scripts/readme/icons.ts` uses
 *      for the profile README.
 *   2. Satori cannot decode WebP, and every image in `public/` is WebP. They are
 *      transcoded to PNG with sharp.
 */
import { iconToSVG } from '@iconify/utils'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { MONOCHROME, resolveIcon } from '@/lib/icon-data'
import { OG } from '@/lib/og-palette'

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
 * Throws on an unknown icon rather than skipping the slot. `bun run icons:check`
 * gates the build and guarantees every name in `common/data` is in the subset, so a
 * miss here can only be a hard-coded literal that was never generated — and the
 * alternative is a silent gap on a social card nobody notices until it is shared.
 */
export function iconDataUri(name: string, opts: { size?: number; color?: string } = {}): EmbeddedIcon | null {
	const size = opts.size ?? 48
	const [collection] = name.split(':')
	const data = resolveIcon(name)

	if (!data) {
		throw new Error(
			`[og-assets] unknown icon "${name}" — not in lib/og-icons.generated.json. `
				+ `If it comes from common/data, run \`bun run icons:generate\`; `
				+ `otherwise add it to EXTRA_ICONS in scripts/icons/required.ts.`
		)
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
		// Imported lazily, NOT at module scope. Every card route is `force-static`, so this
		// only ever runs at build time — but Next 16 preloads all route entries at server
		// start, and a top-level `import sharp` would therefore drag libvips into the
		// production container for nothing: ~23 MB RSS on require, plus a 50 MB native
		// cache and a worker thread per host core.
		const { default: sharp } = await import('sharp')
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
