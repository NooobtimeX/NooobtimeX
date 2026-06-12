/**
 * Shared design tokens + SVG primitives for the README asset generator.
 * Constraints (GitHub camo proxy): system fonts only, no external resources,
 * inline CSS animations only. Output must be byte-deterministic.
 */

export const C = {
	bg: '#050507',
	panel: '#0A0C11',
	fg: '#E6FBFF',
	border: '#1B2A33',
	yellow: '#FCEE0A',
	cyan: '#00F0FF',
	magenta: '#FF003C',
	green: '#39FF14',
	purple: '#B026FF'
} as const

export const FONT_DISPLAY =
	"'Avenir Next Condensed', 'Bahnschrift', 'Arial Narrow', Impact, 'Liberation Sans Narrow', sans-serif"
export const FONT_MONO = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"

/** Round to 2 decimals so re-runs never produce float-noise diffs. */
export const px = (n: number): number => Math.round(n * 100) / 100

export const escapeXml = (s: string): string =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

/** Drop glyphs camo-rendered system fonts may not cover (emoji etc.); keep safe punctuation. */
export const sanitizeText = (s: string): string =>
	[...s]
		.filter(ch => (ch >= ' ' && ch <= '~') || '·—–°→'.includes(ch))
		.join('')
		.replace(/\s+/g, ' ')
		.trim()

/** JetBrains Mono advance width is 0.6em. */
export const monoWidth = (text: string, fontSize: number, letterSpacing = 0): number =>
	px(text.length * 0.6 * fontSize + Math.max(0, text.length - 1) * letterSpacing)

/** Condensed display stack estimate (~0.52em); leave slack on centered text. */
export const displayWidth = (text: string, fontSize: number, letterSpacing = 0): number =>
	px(text.length * 0.52 * fontSize + Math.max(0, text.length - 1) * letterSpacing)

export const truncateMono = (text: string, maxWidth: number, fontSize: number): string => {
	const maxChars = Math.floor(maxWidth / (0.6 * fontSize))
	if (text.length <= maxChars) return text
	return text.slice(0, Math.max(0, maxChars - 3)).trimEnd() + '...'
}

/** Notched-corner polygon (top-left + bottom-right cuts, header.svg style). */
export const notchPoints = (w: number, h: number, notch = 18, inset = 1): string => {
	const i = inset
	return [
		`${px(i + notch)},${i}`,
		`${px(w - i)},${i}`,
		`${px(w - i)},${px(h - i - notch)}`,
		`${px(w - i - notch)},${px(h - i)}`,
		`${i},${px(h - i)}`,
		`${i},${px(i + notch)}`
	].join(' ')
}

export const panelSurface = (w: number, h: number, notch = 18, fill: string = C.bg): string =>
	`<polygon points="${notchPoints(w, h, notch)}" fill="${fill}" />`

export const panelBorder = (w: number, h: number, notch = 18, stroke: string = C.border, sw = 2): string =>
	`<polygon points="${notchPoints(w, h, notch)}" fill="none" stroke="${stroke}" stroke-width="${sw}" />`

export const clipDef = (id: string, w: number, h: number, notch = 18): string =>
	`<clipPath id="${id}"><polygon points="${notchPoints(w, h, notch)}" /></clipPath>`

/** Cyan HUD corner brackets (top-left + bottom-right). */
export const hudBrackets = (w: number, h: number, inset = 28, len = 20, color: string = C.cyan): string => {
	const i = inset
	return (
		`<path d="M${i} ${i + len} V${i} H${i + len}" fill="none" stroke="${color}" stroke-width="2.5" />`
		+ `<path d="M${px(w - i)} ${px(h - i - len)} V${px(h - i)} H${px(w - i - len)}" fill="none" stroke="${color}" stroke-width="2.5" />`
	)
}

export const gridDef = (): string =>
	'<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">'
	+ `<path d="M40 0H0V40" fill="none" stroke="${C.cyan}" stroke-opacity="0.06" stroke-width="1" /></pattern>`

export const scanlineDef = (): string =>
	'<pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">'
	+ '<rect width="4" height="1.5" fill="#000000" opacity="0.22" /></pattern>'

export const scanlineOverlay = (w: number, h: number, animated = false): string =>
	animated ?
		`<g class="scan"><rect x="0" y="-8" width="${w}" height="${h + 16}" fill="url(#scanlines)" /></g>`
	:	`<rect x="0" y="0" width="${w}" height="${h}" fill="url(#scanlines)" />`

export type Anim = 'blink' | 'scan' | 'pulse' | 'glitch' | 'bars'

const KEYFRAMES: Record<Anim, string> = {
	blink: `.blink { animation: blink 1.4s infinite steps(1, end); }
@keyframes blink { 0%, 70% { opacity: 1; } 71%, 100% { opacity: 0.2; } }`,
	scan: `.scan { animation: scan-drift 0.6s linear infinite; }
@keyframes scan-drift { from { transform: translateY(0); } to { transform: translateY(4px); } }`,
	pulse: `.pulse { animation: pulse-dot 1.6s ease-in-out infinite; }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }`,
	glitch: `.glitch-m, .glitch-c { opacity: 0; }
.glitch-m { animation: glitch-m 3.7s infinite steps(1, end); }
.glitch-c { animation: glitch-c 3.7s infinite steps(1, end); }
.glitch-base { animation: glitch-base 3.7s infinite steps(1, end); }
@keyframes glitch-m { 0%, 86%, 100% { opacity: 0; transform: translate(0, 0); } 87% { opacity: 0.85; transform: translate(-6px, 2px); } 89% { opacity: 0.6; transform: translate(5px, -2px); } 91% { opacity: 0.75; transform: translate(-3px, 1px); } 93% { opacity: 0; } }
@keyframes glitch-c { 0%, 87%, 100% { opacity: 0; transform: translate(0, 0); } 88% { opacity: 0.85; transform: translate(6px, -2px); } 90% { opacity: 0.6; transform: translate(-5px, 2px); } 92% { opacity: 0.75; transform: translate(3px, -1px); } 94% { opacity: 0; } }
@keyframes glitch-base { 0%, 86%, 100% { transform: translate(0, 0); } 88% { transform: translate(3px, -1px); } 90% { transform: translate(-3px, 1px); } 92% { transform: translate(0, 0); } }`,
	bars: `.bars { animation: bars-pulse 2.8s ease-in-out infinite; }
@keyframes bars-pulse { 0%, 100% { opacity: 0.9; } 50% { opacity: 0.35; } }`
}

export const styleBlock = (anims: Anim[] = []): string => {
	const base = `.display { font-family: ${FONT_DISPLAY}; font-weight: 700; }
.mono { font-family: ${FONT_MONO}; }`
	const frames = anims.map(a => KEYFRAMES[a]).join('\n')
	return `<style>\n${base}${frames ? '\n' + frames : ''}\n</style>`
}

export const svgDoc = (opts: { w: number; h: number; label: string; body: string }): string =>
	`<svg viewBox="0 0 ${opts.w} ${opts.h}" width="${opts.w}" height="${opts.h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeXml(opts.label)}">\n${opts.body}\n</svg>\n`

/** Mono <text> helper. */
export const monoText = (
	text: string,
	x: number,
	y: number,
	opts: {
		size: number
		fill?: string
		ls?: number
		anchor?: 'start' | 'middle' | 'end'
		opacity?: number
		cls?: string
		weight?: number
	}
): string => {
	const attrs = [
		`class="${opts.cls ? `mono ${opts.cls}` : 'mono'}"`,
		`x="${px(x)}"`,
		`y="${px(y)}"`,
		`font-size="${opts.size}"`,
		opts.ls ? `letter-spacing="${opts.ls}"` : '',
		`fill="${opts.fill ?? C.fg}"`,
		opts.anchor ? `text-anchor="${opts.anchor}"` : '',
		opts.opacity !== undefined ? `opacity="${opts.opacity}"` : '',
		opts.weight ? `font-weight="${opts.weight}"` : ''
	]
		.filter(Boolean)
		.join(' ')
	return `<text ${attrs}>${escapeXml(text)}</text>`
}

/** Display-font <text> helper. */
export const displayText = (
	text: string,
	x: number,
	y: number,
	opts: {
		size: number
		fill?: string
		ls?: number
		anchor?: 'start' | 'middle' | 'end'
		opacity?: number
		cls?: string
	}
): string => {
	const attrs = [
		`class="${opts.cls ? `display ${opts.cls}` : 'display'}"`,
		`x="${px(x)}"`,
		`y="${px(y)}"`,
		`font-size="${opts.size}"`,
		opts.ls !== undefined ? `letter-spacing="${opts.ls}"` : '',
		`fill="${opts.fill ?? C.fg}"`,
		opts.anchor ? `text-anchor="${opts.anchor}"` : '',
		opts.opacity !== undefined ? `opacity="${opts.opacity}"` : ''
	]
		.filter(Boolean)
		.join(' ')
	return `<text ${attrs}>${escapeXml(text)}</text>`
}
