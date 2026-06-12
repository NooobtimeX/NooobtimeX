/** Numbered section headers — replace markdown ## headings, mirror the site nav. */
import { C, displayText, monoText, monoWidth, px, styleBlock, svgDoc } from '../theme'

const W = 1000
const H = 64

export interface SectionSpec {
	file: string
	code: string
	title: string
}

export const SECTIONS: SectionSpec[] = [
	{ file: 'section-00-identity.svg', code: '00', title: 'IDENTITY' },
	{ file: 'section-01-career-trace.svg', code: '01', title: 'CAREER_TRACE' },
	{ file: 'section-02-gigs.svg', code: '02', title: 'GIGS' },
	{ file: 'section-03-arsenal.svg', code: '03', title: 'ARSENAL' },
	{ file: 'section-04-github-feed.svg', code: '04', title: 'GITHUB_FEED' },
	{ file: 'section-05-comms.svg', code: '05', title: 'COMMS' }
]

export function renderSection(spec: SectionSpec): string {
	const code = `${spec.code} //`
	const codeW = monoWidth(code, 22, 4)
	const titleX = px(codeW + 18)
	// Estimated title width to place the blinking cursor — use a generous 0.64em
	// factor so wide glyphs (M, W) never collide with the cursor block.
	const titleW = px(spec.title.length * 0.64 * 36 + spec.title.length * 2)

	const body = `	${styleBlock(['blink'])}
	${monoText(code, 0, 38, { size: 22, ls: 4, fill: C.cyan })}
	${displayText(spec.title, titleX, 40, { size: 36, ls: 2, fill: C.yellow })}
	<rect x="${px(titleX + titleW + 12)}" y="24" width="14" height="18" fill="${C.yellow}" class="blink" />
	<line x1="0" y1="58" x2="${W}" y2="58" stroke="${C.border}" stroke-width="2" />
	<line x1="0" y1="58" x2="160" y2="58" stroke="${C.yellow}" stroke-width="2" />`

	return svgDoc({ w: W, h: H, label: `${spec.code} // ${spec.title.replace(/_/g, ' ')}`, body })
}
