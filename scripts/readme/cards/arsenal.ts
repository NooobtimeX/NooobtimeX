/** Skill arsenal summary — category distribution bar + featured icons per category. */
import { type SkillCategory, categoryMetadata, featuredSkills, skillsData } from '@/common'
import { icon } from '../icons'
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
	svgDoc
} from '../theme'

const W = 1000
const PAD = 36
const CONTENT_W = W - PAD * 2

const CATEGORY_COLOR: Record<SkillCategory, string> = {
	'frontend': C.cyan,
	'backend': C.yellow,
	'infrastructure': C.green,
	'growth-management': C.purple
}

export function renderArsenal(): string {
	const categories = Object.keys(categoryMetadata) as SkillCategory[]
	const counts = categories.map(cat => ({ cat, total: skillsData.filter(s => s.category === cat).length }))
	const grandTotal = counts.reduce((sum, c) => sum + c.total, 0)

	const parts: string[] = []

	// title
	parts.push(monoText(`PERK_DISTRIBUTION // ${grandTotal} SKILLS`, PAD, 40, { size: 18, ls: 3, fill: C.cyan }))

	// stacked distribution bar
	const barY = 58
	const barH = 16
	let bx = PAD
	for (const { cat, total } of counts) {
		const w = px((total / grandTotal) * CONTENT_W)
		parts.push(
			`<rect x="${px(bx)}" y="${barY}" width="${w}" height="${barH}" fill="${CATEGORY_COLOR[cat]}" opacity="0.9" />`
		)
		bx += w
	}
	parts.push(
		`<rect x="${PAD}" y="${barY}" width="${CONTENT_W}" height="${barH}" fill="none" stroke="${C.border}" stroke-width="1" />`
	)

	// legend
	let lx = PAD
	const legendY = barY + barH + 24
	for (const { cat, total } of counts) {
		const label = `${categoryMetadata[cat].label.toUpperCase()} [${String(total).padStart(2, '0')}]`
		parts.push(`<rect x="${px(lx)}" y="${legendY - 10}" width="11" height="11" fill="${CATEGORY_COLOR[cat]}" />`)
		parts.push(monoText(label, lx + 17, legendY, { size: 13, fill: C.fg, opacity: 0.6 }))
		lx += 17 + monoWidth(label, 13) + 24
	}

	// category rows with featured skill icons
	const rowsY0 = legendY + 34
	const ROW_H = 58
	const ICON = 30
	categories.forEach((cat, i) => {
		const y = rowsY0 + i * ROW_H
		const meta = categoryMetadata[cat]
		const featured = featuredSkills.filter(s => s.category === cat)
		const extra = skillsData.filter(s => s.category === cat).length - featured.length

		const catIcon = icon(meta.icon, 18, { color: CATEGORY_COLOR[cat] })
		parts.push(catIcon.at(PAD, y + 6))
		parts.push(monoText(meta.label.toUpperCase(), PAD + 26, y + 20, { size: 15, fill: C.fg }))

		let ix = 320
		for (const skill of featured) {
			const em = icon(skill.icon, ICON, { whiteBg: skill.whiteBg, fallbackLabel: skill.name })
			parts.push(em.at(ix, y))
			ix += em.width + 16
		}
		if (extra > 0) {
			parts.push(
				monoText(`+${extra} MORE`, ix + (featured.length ? 2 : 0), y + 20, {
					size: 14,
					fill: CATEGORY_COLOR[cat],
					opacity: 0.8
				})
			)
		}
	})

	const H = rowsY0 + categories.length * ROW_H + 8

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
		label: `Skill arsenal: ${grandTotal} skills across ${categories.length} categories`,
		body
	})
}
