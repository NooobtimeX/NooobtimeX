/**
 * Shared bits for the 1080×1080 Satori cards.
 *
 * ⚠️ NOTHING IN `components/og/` IS A REACT DOM COMPONENT. These trees are rendered
 * by Satori inside `ImageResponse`, not by React, so the design-system rules do not
 * apply. Specifically:
 *   - no Tailwind classes — inline `style` only
 *   - every element needs an explicit `display: 'flex'`
 *   - no `clip-path` (so no `.clip-notch`) and no `color-mix()` — use rgba()
 *   - images must be data URIs; see `lib/og-assets.ts`
 *
 * The CP2077 notch cannot be clipped here, so the framing leans on HUD corner
 * brackets instead — the same look as the `.hud-corners` utility.
 */
import React from 'react'
import { OG } from '@/lib/og-palette'

export const CARD_SIZE = 1080
/** Horizontal gutter; also the corner-bracket inset. */
export const PAD = 56

/**
 * `#RRGGBB` → `rgba(r,g,b,a)`. Satori supports neither `color-mix()` nor 8-digit
 * hex, so every tinted border and wash on these cards is built through this.
 */
export const alpha = (hex: string, a: number): string => {
	const h = hex.replace('#', '')
	const n = parseInt(
		h.length === 3 ?
			h
				.split('')
				.map(c => c + c)
				.join('')
		:	h,
		16
	)
	return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

/** The perspective grid, matching the `.cyber-grid` utility, tinted to the accent. */
export const gridBackground = (accent: string = OG.cyan) =>
	({
		backgroundColor: OG.bg,
		backgroundImage:
			`linear-gradient(${alpha(accent, 0.06)} 1px, transparent 1px), `
			+ `linear-gradient(90deg, ${alpha(accent, 0.06)} 1px, transparent 1px)`,
		backgroundSize: '54px 54px'
	}) as const

/**
 * L-shaped HUD brackets inset from the card edge.
 *
 * The arms live inside ONE absolutely-positioned overlay rather than being returned
 * as a fragment. Satori flattens a fragment's children into the parent's flex flow,
 * so four loose `position:absolute` divs get distributed by the parent's
 * `justify-content` instead of pinned to the corners.
 *
 * `only='bottom'` drops the top pair — the generated project covers already carry
 * their own brackets, so a full set would double up along the top edge.
 */
export const CornerBrackets: React.FC<{
	color?: string
	inset?: number
	size?: number
	only?: 'all' | 'bottom'
}> = ({ color = OG.cyan, inset = 28, size = 46, only = 'all' }) => {
	const arm = { position: 'absolute' as const, display: 'flex' as const, width: size, height: size }
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: CARD_SIZE,
				height: CARD_SIZE,
				display: 'flex'
			}}>
			{only === 'all' && (
				<div
					style={{ ...arm, top: inset, left: inset, borderTop: `3px solid ${color}`, borderLeft: `3px solid ${color}` }}
				/>
			)}
			{only === 'all' && (
				<div
					style={{
						...arm,
						top: inset,
						right: inset,
						borderTop: `3px solid ${color}`,
						borderRight: `3px solid ${color}`
					}}
				/>
			)}
			<div
				style={{
					...arm,
					bottom: inset,
					left: inset,
					borderBottom: `3px solid ${color}`,
					borderLeft: `3px solid ${color}`
				}}
			/>
			<div
				style={{
					...arm,
					bottom: inset,
					right: inset,
					borderBottom: `3px solid ${color}`,
					borderRight: `3px solid ${color}`
				}}
			/>
		</div>
	)
}

/** A monospace `// LABEL` kicker. */
export const Kicker: React.FC<{ children: string; color?: string; size?: number }> = ({
	children,
	color = OG.cyan,
	size = 26
}) => (
	<div
		style={{ display: 'flex', color, fontSize: size, fontWeight: 700, letterSpacing: 7, textTransform: 'uppercase' }}>
		{children}
	</div>
)

/** A label/value pair with the left accent rule used by `MetaCell` on the site. */
export const MetaCell: React.FC<{ label: string; value: React.ReactNode; color?: string; accent?: string }> = ({
	label,
	value,
	color = OG.fg,
	accent = OG.cyan
}) => (
	<div
		style={{
			display: 'flex',
			flexDirection: 'column',
			borderLeft: `3px solid ${alpha(accent, 0.55)}`,
			paddingLeft: 16,
			flexGrow: 1,
			flexBasis: 0
		}}>
		<div style={{ display: 'flex', color: OG.muted, fontSize: 19, letterSpacing: 3, textTransform: 'uppercase' }}>
			{label}
		</div>
		{/* Step down for long values so they stay on one line in a quarter-width cell.
		    Uppercase org names ("RUAMSUK PLATING…") are the wide case and wrapped at 22px,
		    which unbalances the card against its siblings. */}
		<div
			style={{
				display: 'flex',
				color,
				fontSize: typeof value === 'string' && value.length > 12 ? 19 : 22,
				fontWeight: 700,
				marginTop: 6
			}}>
			{value}
		</div>
	</div>
)

export interface StackIcon {
	src: string
	width: number
	height: number
	whiteBg?: boolean
}

/**
 * The wrapped grid of tech-stack chips. Sized so ten chips fit a 968px content
 * width; anything past `slots` collapses into a `+N` chip so a 29-skill project
 * still lays out.
 */
export const StackGrid: React.FC<{ icons: StackIcon[]; overflow: number; chip?: number; accent?: string }> = ({
	icons,
	overflow,
	chip = 84,
	accent = OG.cyan
}) => (
	<div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
		{icons.map((ic, i) => (
			<div
				key={i}
				style={{
					display: 'flex',
					width: chip,
					height: chip,
					alignItems: 'center',
					justifyContent: 'center',
					border: `1px solid ${alpha(accent, 0.3)}`,
					backgroundColor: ic.whiteBg ? '#FFFFFF' : alpha(accent, 0.05)
				}}>
				<img src={ic.src} width={ic.width} height={ic.height} alt='' />
			</div>
		))}
		{overflow > 0 && (
			<div
				style={{
					display: 'flex',
					width: chip,
					height: chip,
					alignItems: 'center',
					justifyContent: 'center',
					border: '1px solid rgba(252,238,10,0.4)',
					color: OG.yellow,
					fontSize: 26,
					fontWeight: 700
				}}>
				{`+${overflow}`}
			</div>
		)}
	</div>
)

/**
 * The shared bottom rule: site URL on the left, free-form slot on the right.
 * `marginTop: auto` pins it to the bottom of a column card whatever the content above.
 */
export const CardFooter: React.FC<{ right?: React.ReactNode; accent?: string }> = ({ right, accent = OG.cyan }) => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: 'auto',
			borderTop: `1px solid ${alpha(accent, 0.28)}`,
			paddingTop: 18
		}}>
		<div style={{ display: 'flex', color: OG.muted, fontSize: 24, letterSpacing: 3 }}>nooobtimex.me</div>
		{right}
	</div>
)

/**
 * Satori has no emoji font and would fetch one over the network, so pictographs
 * are dropped. Only one title carries them today (the portfolio entry).
 */
export const stripEmoji = (text: string): string =>
	text
		.replace(/[\p{Extended_Pictographic}\p{Emoji_Presentation}]/gu, '')
		.replace(/\s+/g, ' ')
		.trim()

/** Keep meta values inside their cell. */
export const truncate = (text: string, max: number): string =>
	text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text
