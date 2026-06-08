'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn, slugify } from '@/lib/utils'
import { SkillCategory, categoryMetadata, skillsData } from '@/common'

const ORDER: SkillCategory[] = [
	SkillCategory.Frontend,
	SkillCategory.Backend,
	SkillCategory.Infrastructure,
	SkillCategory.GrowthManagement
]

/**
 * Desktop skill-tree graph: a CORE root branches to 4 category hubs; each hub wires
 * down through its skill nodes. Edges are SVG curves measured from real node centers
 * (recomputed on resize), so the graph stays aligned at any width.
 */
const SkillGraph: React.FC = () => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const nodes = React.useRef<Map<string, HTMLElement | null>>(new Map())
	const [paths, setPaths] = React.useState<string[]>([])
	const [size, setSize] = React.useState({ w: 0, h: 0 })

	const setNode = (id: string) => (el: HTMLElement | null) => {
		nodes.current.set(id, el)
	}

	React.useLayoutEffect(() => {
		const measure = () => {
			const container = containerRef.current
			if (!container) return
			const c = container.getBoundingClientRect()
			if (c.width === 0) return

			const topMid = (id: string) => {
				const el = nodes.current.get(id)
				if (!el) return null
				const r = el.getBoundingClientRect()
				return { x: r.left + r.width / 2 - c.left, y: r.top - c.top }
			}
			const botMid = (id: string) => {
				const el = nodes.current.get(id)
				if (!el) return null
				const r = el.getBoundingClientRect()
				return { x: r.left + r.width / 2 - c.left, y: r.bottom - c.top }
			}

			const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
				const k = Math.max(18, Math.abs(b.y - a.y) * 0.45)
				return `M ${a.x} ${a.y} C ${a.x} ${a.y + k}, ${b.x} ${b.y - k}, ${b.x} ${b.y}`
			}

			const next: string[] = []
			const rootBot = botMid('root')

			for (const cat of ORDER) {
				const items = skillsData.filter(s => s.category === cat)
				const hubTop = topMid(`hub-${cat}`)
				if (rootBot && hubTop) next.push(curve(rootBot, hubTop))

				// chain: hub -> first skill -> next -> ...
				let parentId = `hub-${cat}`
				for (const s of items) {
					const a = botMid(parentId)
					const b = topMid(`skill-${s.name}`)
					if (a && b) next.push(curve(a, b))
					parentId = `skill-${s.name}`
				}
			}

			setPaths(next)
			setSize({ w: c.width, h: c.height })
		}

		measure()
		const container = containerRef.current
		const ro = new ResizeObserver(() => measure())
		if (container) ro.observe(container)
		window.addEventListener('resize', measure)
		// remeasure once fonts settle (Rajdhani changes node sizes)
		const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts
		fonts?.ready.then(() => measure())
		return () => {
			ro.disconnect()
			window.removeEventListener('resize', measure)
		}
	}, [])

	return (
		<div ref={containerRef} className='relative'>
			{/* edges */}
			<svg
				className='pointer-events-none absolute inset-0 z-0'
				width={size.w}
				height={size.h}
				viewBox={`0 0 ${size.w} ${size.h}`}
				fill='none'
				style={{ filter: 'drop-shadow(0 0 4px color-mix(in oklch, var(--cyber-cyan), transparent 55%))' }}>
				<defs>
					<linearGradient id='edge' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='var(--cyber-yellow)' stopOpacity='0.7' />
						<stop offset='100%' stopColor='var(--cyber-cyan)' stopOpacity='0.55' />
					</linearGradient>
				</defs>
				{paths.map((d, i) => (
					<path key={i} d={d} stroke='url(#edge)' strokeWidth={1.5} />
				))}
			</svg>

			{/* nodes */}
			<div className='relative z-10 flex flex-col items-center'>
				{/* root */}
				<div
					ref={setNode('root')}
					className='perk-node-core clip-notch bg-background flex flex-col items-center gap-0.5 px-6 py-3 text-center'>
					<span className='font-display neon-text-yellow text-lg font-bold tracking-widest uppercase'>Core</span>
					<span className='text-muted-foreground font-mono text-[0.55rem] tracking-widest uppercase'>
						{skillsData.length} perks
					</span>
				</div>

				<div className='mt-14 grid w-full grid-cols-4 gap-x-6'>
					{ORDER.map((cat, idx) => {
						const meta = categoryMetadata[cat]
						const items = skillsData.filter(s => s.category === cat)
						return (
							<div key={cat} className='flex flex-col items-center gap-9'>
								{/* hub */}
								<div
									ref={setNode(`hub-${cat}`)}
									className='perk-node-core clip-notch-sm bg-background flex flex-col items-center gap-1 px-3 py-3 text-center'>
									<Icon icon={meta.icon} className='text-cyber-yellow size-6' />
									<span className='font-display text-xs font-bold tracking-widest uppercase'>{meta.label}</span>
									<span className='text-muted-foreground font-mono text-[0.55rem] tracking-widest uppercase'>
										{String(idx + 1).padStart(2, '0')} · {items.length}
									</span>
								</div>

								{/* skill nodes */}
								{items.map(s => (
									<Link
										key={s.name}
										ref={setNode(`skill-${s.name}`)}
										href={`/skills/${slugify(s.name)}` as never}
										className={cn(
											'perk-node clip-notch-sm group bg-background flex items-center gap-2 px-3 py-2',
											s.important && 'perk-node-core'
										)}>
										<span
											className={cn(
												'flex size-5 shrink-0 items-center justify-center',
												s.whiteBg && 'rounded-sm bg-white/90'
											)}>
											<Icon icon={s.icon} className='size-5' />
										</span>
										<span className='group-hover:text-cyber-yellow text-xs font-semibold whitespace-nowrap transition-colors'>
											{s.name}
										</span>
										{s.important && (
											<span className='text-cyber-yellow ml-0.5 font-mono text-[0.5rem] tracking-widest'>★</span>
										)}
									</Link>
								))}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SkillGraph
