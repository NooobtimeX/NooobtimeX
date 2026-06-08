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
 * Curated tech relationships: [from -> to] meaning "from enables / leads to / is
 * used with to". Drawn as directed edges (arrow at the target). Names must match
 * skillsData names exactly.
 */
const EDGES: [string, string][] = [
	// Frontend
	['CSS', 'Tailwind CSS'],
	['Tailwind CSS', 'Shadcn/ui'],
	['Radix UI', 'Shadcn/ui'],
	['TypeScript', 'React'],
	['TypeScript', 'Nuxt.js'],
	['React', 'Next.js'],
	['React', 'Shadcn/ui'],
	['React', 'Framer Motion'],
	['React', 'Embla Carousel'],
	['React', 'Recharts'],
	['React', 'Lucide Icons'],
	['React', 'Heroicons'],
	['React', 'React Icons'],
	['React', 'date-fns'],
	// Backend
	['TypeScript', 'Node.js'],
	['TypeScript', 'Bun.js'],
	['Node.js', 'Nest.js'],
	['Node.js', 'NATS'],
	['Node.js', 'Redis'],
	['Bun.js', 'Elysia.js'],
	['Elysia.js', 'SSE'],
	['Elysia.js', 'Prisma'],
	['Nest.js', 'Prisma'],
	['Prisma', 'PostgreSQL'],
	['Prisma', 'MongoDB'],
	['PostgreSQL', 'Supabase'],
	// Cross → Infrastructure
	['Next.js', 'Vercel'],
	['Git/GitHub', 'Vercel'],
	['Git/GitHub', 'Railway'],
	['Docker', 'Railway'],
	['Docker', 'Render'],
	['Elysia.js', 'MinIO'],
	['Node.js', 'Resend'],
	// Growth & Management
	['SEO', 'AEO'],
	['SEO', 'GEO'],
	['SEO', 'JSON-LD'],
	['JSON-LD', 'AEO'],
	['SEO', 'Google Analytics'],
	['Google Tag Manager', 'Google Analytics'],
	['Google Analytics', 'Google Ads'],
	['WordPress', 'WooCommerce'],
	['WordPress', 'SEO']
]

/** Vertical ordering within a column (lower rank = closer to the top / foundation). */
const RANK: Record<string, number> = {
	'TypeScript': 0,
	'CSS': 0,
	'Git/GitHub': 0,
	'Python': 0,
	'SEO': 0,
	'WordPress': 0,
	'React': 1,
	'Node.js': 1,
	'Bun.js': 1,
	'Tailwind CSS': 1,
	'Radix UI': 1,
	'Docker': 1,
	'JSON-LD': 1,
	'AEO': 1,
	'GEO': 1,
	'Google Tag Manager': 1,
	'WooCommerce': 1,
	'Next.js': 2,
	'Nuxt.js': 2,
	'Nest.js': 2,
	'Elysia.js': 2,
	'Shadcn/ui': 2,
	'Prisma': 2,
	'Framer Motion': 2,
	'Embla Carousel': 2,
	'NATS': 2,
	'SSE': 2,
	'date-fns': 2,
	'Google Analytics': 2,
	'PostgreSQL': 3,
	'MongoDB': 3,
	'Redis': 3,
	'Lucide Icons': 3,
	'Heroicons': 3,
	'React Icons': 3,
	'Recharts': 3,
	'Vercel': 3,
	'MinIO': 3,
	'Resend': 3,
	'Google Ads': 3,
	'Supabase': 4,
	'Railway': 4,
	'Render': 4
}

const rankOf = (name: string) => RANK[name] ?? 5

/**
 * Desktop skill graph: skills grouped in 4 category columns (ordered foundation →
 * advanced), wired together by curated tech-dependency edges with direction arrows.
 * Edges are SVG curves measured from real node centers (recomputed on resize).
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

			const anchor = (id: string, edge: 'top' | 'bottom') => {
				const el = nodes.current.get(id)
				if (!el) return null
				const r = el.getBoundingClientRect()
				return { x: r.left + r.width / 2 - c.left, y: (edge === 'top' ? r.top : r.bottom) - c.top }
			}

			const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
				const k = Math.max(20, Math.abs(b.y - a.y) * 0.4)
				return `M ${a.x} ${a.y} C ${a.x} ${a.y + k}, ${b.x} ${b.y - k}, ${b.x} ${b.y}`
			}

			const next: string[] = []
			for (const [from, to] of EDGES) {
				const a = anchor(from, 'bottom')
				const b = anchor(to, 'top')
				if (a && b) next.push(curve(a, b))
			}

			setPaths(next)
			setSize({ w: c.width, h: c.height })
		}

		measure()
		const container = containerRef.current
		const ro = new ResizeObserver(() => measure())
		if (container) ro.observe(container)
		window.addEventListener('resize', measure)
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
				style={{ filter: 'drop-shadow(0 0 3px color-mix(in oklch, var(--cyber-cyan), transparent 60%))' }}>
				<defs>
					<linearGradient id='edge' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='var(--cyber-yellow)' stopOpacity='0.65' />
						<stop offset='100%' stopColor='var(--cyber-cyan)' stopOpacity='0.5' />
					</linearGradient>
					<marker
						id='arrow'
						viewBox='0 0 8 8'
						refX='6'
						refY='4'
						markerWidth='5'
						markerHeight='5'
						orient='auto-start-reverse'>
						<path d='M0 0 L8 4 L0 8 z' fill='var(--cyber-cyan)' />
					</marker>
				</defs>
				{paths.map((d, i) => (
					<path key={i} d={d} stroke='url(#edge)' strokeWidth={1.5} markerEnd='url(#arrow)' />
				))}
			</svg>

			{/* nodes */}
			<div className='relative z-10 grid grid-cols-4 gap-x-6'>
				{ORDER.map((cat, idx) => {
					const meta = categoryMetadata[cat]
					const items = skillsData
						.filter(s => s.category === cat)
						.slice()
						.sort((a, b) => rankOf(a.name) - rankOf(b.name))
					return (
						<div key={cat} className='flex flex-col items-center gap-7'>
							{/* hub header */}
							<div className='perk-node-core clip-notch-sm bg-background flex flex-col items-center gap-1 px-3 py-3 text-center'>
								<Icon icon={meta.icon} className='text-cyber-yellow size-6' />
								<span className='font-display text-xs font-bold tracking-widest uppercase'>{meta.label}</span>
								<span className='text-muted-foreground font-mono text-[0.55rem] tracking-widest uppercase'>
									{String(idx + 1).padStart(2, '0')} · {items.length}
								</span>
							</div>

							{items.map(s => (
								<Link
									key={s.name}
									ref={setNode(s.name)}
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
	)
}

export default SkillGraph
