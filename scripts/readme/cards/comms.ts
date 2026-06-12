/** Social chips — one linkable SVG per platform, from personalData.socialLinks. */
import { personalData } from '@/common'
import { icon } from '../icons'
import { C, monoText, monoWidth, notchPoints, px, svgDoc } from '../theme'

const H = 50
const PAD = 18
const ICON = 22
const SIZE = 15

const PLATFORM_COLOR: Record<string, string> = {
	github: C.yellow,
	linkedin: C.cyan,
	youtube: C.magenta,
	instagram: C.purple,
	email: C.green,
	website: C.cyan
}

export interface CommsChip {
	file: string
	platform: string
	url: string
	svg: string
}

export function renderComms(): CommsChip[] {
	return personalData.socialLinks.map(link => {
		const color = PLATFORM_COLOR[link.platform] ?? C.cyan
		const label = link.platform.toUpperCase()
		const em = icon(link.icon, ICON, { color, fallbackLabel: link.platform })
		const W = px(PAD + em.width + 12 + monoWidth(label, SIZE, 1) + PAD)

		const body = `	<polygon points="${notchPoints(W, H, 9)}" fill="${C.bg}" stroke="${C.border}" stroke-width="1.5" />
	${em.at(PAD, (H - ICON) / 2)}
	${monoText(label, PAD + em.width + 12, H / 2 + SIZE * 0.36, { size: SIZE, ls: 1, fill: color, weight: 700 })}`

		return {
			file: `comms-${link.platform}.svg`,
			platform: link.platform,
			url: link.url,
			svg: svgDoc({ w: W, h: H, label, body })
		}
	})
}
