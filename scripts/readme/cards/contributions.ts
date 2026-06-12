/** Neural activity — contribution heatmap + weekly sparkline, last 365 days. */
import type { ContributionDay } from '@/lib/github'
import {
	C,
	clipDef,
	hudBrackets,
	monoText,
	notchPoints,
	panelBorder,
	px,
	scanlineDef,
	scanlineOverlay,
	svgDoc
} from '../theme'

const W = 1000
const PAD = 36

// Same ramp as the site's ContributionHeatmap (level 0–4).
const SCALE = [
	'rgba(0, 240, 255, 0.10)',
	'rgba(252, 238, 10, 0.28)',
	'rgba(252, 238, 10, 0.5)',
	'rgba(252, 238, 10, 0.72)',
	'#FCEE0A'
]

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export function renderContributions(total: number, days: ContributionDay[]): string {
	// Pad so the first column starts on Sunday.
	const firstWeekday = new Date(days[0].date + 'T00:00:00Z').getUTCDay()
	const cells: (ContributionDay | null)[] = [...Array(firstWeekday).fill(null), ...days]
	const weeks: (ContributionDay | null)[][] = []
	for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

	const labelGutter = 40
	const gridX = PAD + labelGutter
	const gridW = W - PAD - gridX
	const step = px(gridW / weeks.length)
	const cell = px(step * 0.78)

	const titleY = 46
	const monthY = titleY + 26
	const gridY = monthY + 12
	const gridH = 7 * step
	const sparkY = gridY + gridH + 26
	const sparkH = 44
	const legendY = sparkY + sparkH + 30
	const H = legendY + 24

	const parts: string[] = []

	// title
	parts.push(monoText('NEURAL_ACTIVITY // LAST_365D', PAD, titleY, { size: 18, ls: 3, fill: C.cyan }))
	parts.push(
		monoText(`${total.toLocaleString('en-US')} CONTRIBUTIONS`, W - PAD, titleY, {
			size: 16,
			ls: 1,
			fill: C.yellow,
			anchor: 'end',
			weight: 700
		})
	)

	// month labels (where the month changes between columns)
	let lastMonth = -1
	weeks.forEach((week, wi) => {
		const firstDay = week.find(Boolean)
		if (!firstDay) return
		const m = Number(firstDay.date.slice(5, 7)) - 1
		if (m !== lastMonth) {
			parts.push(monoText(MONTHS[m], gridX + wi * step, monthY, { size: 11, fill: C.fg, opacity: 0.45 }))
			lastMonth = m
		}
	})

	// weekday labels
	const dayLabels: [number, string][] = [
		[1, 'MON'],
		[3, 'WED'],
		[5, 'FRI']
	]
	for (const [row, label] of dayLabels) {
		parts.push(monoText(label, PAD, gridY + row * step + cell * 0.85, { size: 10, fill: C.fg, opacity: 0.45 }))
	}

	// cells
	weeks.forEach((week, wi) => {
		week.forEach((day, di) => {
			if (!day) return
			const level = Math.min(4, Math.max(0, day.level))
			const x = px(gridX + wi * step)
			const y = px(gridY + di * step)
			const stroke = level === 0 ? ` stroke="${C.border}" stroke-width="0.5"` : ''
			parts.push(`<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${SCALE[level]}"${stroke} />`)
		})
	})

	// weekly sparkline
	const weekTotals = weeks.map(week => week.reduce((sum, d) => sum + (d?.count ?? 0), 0))
	const maxWeek = Math.max(...weekTotals, 1)
	const pts = weekTotals.map((count, i) => {
		const x = px(gridX + i * step + cell / 2)
		const y = px(sparkY + sparkH - (count / maxWeek) * sparkH)
		return { x, y, count }
	})
	const polyline = pts.map(p => `${p.x},${p.y}`).join(' ')
	const area = `${gridX},${px(sparkY + sparkH)} ${polyline} ${pts[pts.length - 1].x},${px(sparkY + sparkH)}`
	parts.push(monoText('WEEKLY_PULSE', PAD, sparkY + 4, { size: 10, fill: C.fg, opacity: 0.45 }))
	parts.push(`<polygon points="${area}" fill="${C.cyan}" opacity="0.12" />`)
	parts.push(`<polyline points="${polyline}" fill="none" stroke="${C.cyan}" stroke-width="2" />`)
	const peak = pts.reduce((a, b) => (b.count > a.count ? b : a), pts[0])
	parts.push(`<circle cx="${peak.x}" cy="${peak.y}" r="4" fill="${C.yellow}" />`)
	parts.push(
		monoText(`${peak.count}`, Math.min(peak.x + 8, W - PAD - 20), peak.y - 6, { size: 12, fill: C.yellow, weight: 700 })
	)

	// legend
	parts.push(monoText('LESS', W - PAD - 5 * 18 - 96, legendY, { size: 11, fill: C.fg, opacity: 0.45 }))
	SCALE.forEach((color, i) => {
		parts.push(
			`<rect x="${px(W - PAD - 5 * 18 - 56 + i * 18)}" y="${legendY - 10}" width="12" height="12" fill="${color}" />`
		)
	})
	parts.push(monoText('MORE', W - PAD, legendY, { size: 11, fill: C.fg, opacity: 0.45, anchor: 'end' }))

	const body = `	<defs>
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
		label: `Contribution heatmap, last 365 days: ${total.toLocaleString('en-US')} contributions`,
		body
	})
}
