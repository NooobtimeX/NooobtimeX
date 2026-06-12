/** Career trace — condensed Gantt of work + education from the data layer. */
import { unslugify } from '@/lib/utils'
import { type ExperienceItem, experiencesData } from '@/common'
import {
	C,
	clipDef,
	hudBrackets,
	monoText,
	monoWidth,
	notchPoints,
	panelBorder,
	px,
	scanlineDef,
	scanlineOverlay,
	styleBlock,
	svgDoc,
	truncateMono
} from '../theme'

const W = 1000
const PAD_X = 36
const PLOT_X0 = PAD_X
const PLOT_X1 = W - PAD_X
const ROW_PITCH = 54
const BAR_H = 14

const TYPE_COLOR: Record<string, string> = {
	'full-time': C.yellow,
	'part-time': C.cyan,
	'freelance': C.magenta,
	'internship': C.green
}

interface Row {
	label: string
	start: number // ms epoch
	end: number | null // null = ongoing
	color: string
	dates: string
}

const ms = (date: string): number => Date.parse(`${date}T00:00:00Z`)
const ym = (date: string): string => date.slice(0, 7).replace('-', '.')

/** Merge consecutive stints sharing org + position (e.g. part-time → full-time). */
function buildRows(): { rows: Row[]; axisStart: number; axisEnd: number; axisYears: number[]; minYear: number } {
	const items = experiencesData.filter(e => e.category === 'work' || e.category === 'education')
	const groups = new Map<string, ExperienceItem[]>()
	for (const e of items) {
		const key = `${e.organization.id}::${e.position}`
		groups.set(key, [...(groups.get(key) ?? []), e])
	}

	const rows: Row[] = [...groups.values()].map(group => {
		const start = Math.min(...group.map(e => ms(e.startDate)))
		const ongoing = group.some(e => !e.endDate)
		const end = ongoing ? null : Math.max(...group.map(e => ms(e.endDate as string)))
		// Color by the dominant-duration stint; education overrides to purple.
		const dominant = [...group].sort(
			(a, b) =>
				(ms(b.endDate ?? b.startDate) || 0) - ms(b.startDate) - ((ms(a.endDate ?? a.startDate) || 0) - ms(a.startDate))
		)[0]
		const color = group[0].category === 'education' ? C.purple : (TYPE_COLOR[dominant.type] ?? C.fg)
		const first = group[0]
		const startStr = group.map(e => e.startDate).sort()[0]
		const endStr =
			ongoing ? null : (
				group
					.map(e => e.endDate as string)
					.sort()
					.at(-1)
			)
		return {
			label: `${first.organization.name.toUpperCase()} // ${unslugify(first.position).toUpperCase()}`,
			start,
			end,
			color,
			dates: `${ym(startStr)} → ${endStr ? ym(endStr) : 'NOW'}`
		}
	})

	rows.sort((a, b) => b.start - a.start || a.label.localeCompare(b.label))

	const allDates = items.flatMap(e => [e.startDate, e.endDate].filter(Boolean) as string[])
	const minYear = Math.min(...allDates.map(d => Number(d.slice(0, 4))))
	const maxYear = Math.max(...allDates.map(d => Number(d.slice(0, 4))))
	const axisStart = Date.UTC(minYear, 0, 1)
	const axisEnd = Date.UTC(maxYear + 1, 0, 1)
	const axisYears = Array.from({ length: maxYear + 1 - minYear + 1 }, (_, i) => minYear + i)
	return { rows, axisStart, axisEnd, axisYears, minYear }
}

export function renderCareer(): string {
	const { rows, axisStart, axisEnd, axisYears, minYear } = buildRows()
	const X = (t: number): number => px(PLOT_X0 + ((t - axisStart) / (axisEnd - axisStart)) * (PLOT_X1 - PLOT_X0))

	const titleY = 44
	const rowsY0 = 72
	const axisY = rowsY0 + rows.length * ROW_PITCH + 8
	const legendY = axisY + 38
	const H = legendY + 28

	const parts: string[] = []

	// year gridlines
	for (const y of axisYears) {
		const gx = X(Date.UTC(y, 0, 1))
		parts.push(
			`<line x1="${gx}" y1="${rowsY0 - 8}" x2="${gx}" y2="${axisY - 6}" stroke="${C.border}" stroke-width="1" />`
		)
		parts.push(monoText(String(y), gx, axisY + 14, { size: 13, fill: C.fg, opacity: 0.45, anchor: 'middle' }))
	}

	// rows
	rows.forEach((row, i) => {
		const y = rowsY0 + i * ROW_PITCH
		const label = truncateMono(row.label, W - PAD_X * 2 - monoWidth(row.dates, 15) - 24, 19)
		parts.push(monoText(label, PLOT_X0, y + 14, { size: 19, fill: C.fg }))
		parts.push(monoText(row.dates, PLOT_X1, y + 14, { size: 15, fill: row.color, anchor: 'end' }))

		const x0 = X(row.start)
		const x1 = row.end === null ? PLOT_X1 : X(row.end)
		const by = y + 22
		parts.push(
			`<rect x="${x0}" y="${by}" width="${px(Math.max(4, x1 - x0))}" height="${BAR_H}" fill="${row.color}" opacity="0.85" />`
		)
		parts.push(`<rect x="${x0}" y="${by}" width="3" height="${BAR_H}" fill="${C.fg}" opacity="0.6" />`)
		if (row.end === null) {
			parts.push(
				`<polygon points="${px(x1 + 2)},${by} ${px(x1 + 12)},${px(by + BAR_H / 2)} ${px(x1 + 2)},${by + BAR_H}" fill="${row.color}" class="blink" />`
			)
		}
	})

	// legend
	const legend: [string, string][] = [
		['FULL-TIME', C.yellow],
		['PART-TIME', C.cyan],
		['FREELANCE', C.magenta],
		['EDUCATION', C.purple]
	]
	let lx = PLOT_X0
	for (const [name, color] of legend) {
		parts.push(`<rect x="${px(lx)}" y="${legendY - 10}" width="12" height="12" fill="${color}" />`)
		parts.push(monoText(name, lx + 18, legendY, { size: 13, fill: C.fg, opacity: 0.6 }))
		lx += 18 + monoWidth(name, 13) + 28
	}

	const body = `	${styleBlock(['blink'])}
	<defs>
		${clipDef('panel-clip', W, H)}
		${scanlineDef()}
	</defs>
	<polygon points="${notchPoints(W, H)}" fill="${C.bg}" />
	<g clip-path="url(#panel-clip)">
		${monoText(`EMPLOYMENT_LOG // ${minYear} → NOW`, PAD_X, titleY - 14, { size: 18, ls: 3, fill: C.cyan })}
		${parts.join('\n\t\t')}
		${scanlineOverlay(W, H)}
	</g>
	${panelBorder(W, H)}
	${hudBrackets(W, H, 16, 14)}`

	return svgDoc({ w: W, h: H, label: 'Career trace 2021 to now: roles and education timeline', body })
}
