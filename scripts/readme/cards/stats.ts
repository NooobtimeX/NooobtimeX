/** System diagnostics — GitHub counters + top-3 languages in ONE panel. */
import type { RepoSummary } from '@/lib/github'
import {
	C,
	clipDef,
	displayText,
	hudBrackets,
	monoText,
	notchPoints,
	panelBorder,
	px,
	scanlineDef,
	scanlineOverlay,
	styleBlock,
	svgDoc
} from '../theme'

const W = 1000
const H = 250
const PAD = 36

const fmt = (n: number): string => n.toLocaleString('en-US')

export interface StatsData {
	stars: number
	repos: number
	followers: number
	contributions: number
	languages: RepoSummary['languages']
}

export function renderStats(data: StatsData): string {
	const parts: string[] = []

	// title row
	parts.push(monoText('SYS.DIAGNOSTICS // NOOOBTIMEX', PAD, 46, { size: 18, ls: 3, fill: C.cyan }))
	parts.push(`<circle cx="${W - PAD - 74}" cy="41" r="4" fill="${C.green}" class="blink" />`)
	parts.push(monoText('ONLINE', W - PAD, 46, { size: 14, ls: 2, fill: C.green, anchor: 'end', cls: 'blink' }))

	// counters 2x2, left half
	const counters = [
		{ label: 'STARS_EARNED', value: fmt(data.stars) },
		{ label: 'PUBLIC_REPOS', value: fmt(data.repos) },
		{ label: 'FOLLOWERS', value: fmt(data.followers) },
		{ label: 'CONTRIBUTIONS_365D', value: fmt(data.contributions) }
	]
	counters.forEach((c, i) => {
		const cx = PAD + (i % 2) * 230
		const cy = 110 + Math.floor(i / 2) * 76
		parts.push(displayText(c.value, cx, cy, { size: 44, fill: C.yellow }))
		parts.push(monoText(c.label, cx, cy + 22, { size: 13, fill: C.fg, opacity: 0.5 }))
	})

	// divider
	parts.push(`<line x1="520" y1="76" x2="520" y2="${H - 28}" stroke="${C.border}" stroke-width="2" />`)

	// top-3 languages, right half
	const langs = data.languages.slice(0, 3)
	const totalBytes = langs.reduce((sum, l) => sum + l.bytes, 0) || 1
	const rank = [C.yellow, C.cyan, C.magenta]
	const trackX = 552
	const trackW = W - PAD - trackX
	parts.push(monoText('TOP_LANGUAGES', trackX, 92, { size: 13, ls: 2, fill: C.fg, opacity: 0.5 }))
	langs.forEach((lang, i) => {
		const y = 118 + i * 44
		const share = lang.bytes / totalBytes
		parts.push(monoText(lang.name.toUpperCase(), trackX, y, { size: 16, fill: C.fg }))
		parts.push(
			monoText(`${(share * 100).toFixed(1)}%`, W - PAD, y, { size: 16, fill: rank[i], anchor: 'end', weight: 700 })
		)
		parts.push(
			`<rect x="${trackX}" y="${y + 8}" width="${trackW}" height="9" fill="${C.panel}" stroke="${C.border}" stroke-width="1" />`
		)
		parts.push(
			`<rect x="${trackX}" y="${y + 8}" width="${px(Math.max(3, share * trackW))}" height="9" fill="${rank[i]}" />`
		)
	})

	const body = `	${styleBlock(['blink'])}
	<defs>
		${clipDef('panel-clip', W, H)}
		${scanlineDef()}
	</defs>
	<polygon points="${notchPoints(W, H)}" fill="${C.bg}" />
	<g clip-path="url(#panel-clip)">
		${parts.join('\n\t\t')}
		${scanlineOverlay(W, H)}
	</g>
	${panelBorder(W, H)}
	${hudBrackets(W, H, 16, 14)}`

	return svgDoc({
		w: W,
		h: H,
		label: `GitHub stats: ${fmt(data.stars)} stars, ${fmt(data.repos)} repos, ${fmt(data.followers)} followers, ${fmt(data.contributions)} contributions in the last year`,
		body
	})
}
