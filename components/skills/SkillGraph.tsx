'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn, slugify } from '@/lib/utils'
import { type Skill, SkillCategory, skillsData } from '@/common'

/**
 * Curated tech relationships: [from, to] = "from enables / leads to / is used with to".
 * Only these pairs get a line — unrelated skills are never wired together.
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
	['Nest.js', 'NATS'],
	['Nest.js', 'MongoDB'],
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

const CAT_BORDER: Record<SkillCategory, string> = {
	[SkillCategory.Frontend]: 'border-cyber-cyan/60',
	[SkillCategory.Backend]: 'border-cyber-yellow/60',
	[SkillCategory.Infrastructure]: 'border-cyber-magenta/60',
	[SkillCategory.GrowthManagement]: 'border-cyber-green/60'
}

const VW = 1200
const VH = 820

type Pt = { x: number; y: number }

/**
 * Deterministic Fruchterman-Reingold layout. Pure (no DOM, no randomness) so it
 * produces the same result on server and client — connected skills pull into
 * clusters; unconnected skills drift apart on their own.
 */
function computeLayout(): Record<string, Pt> {
	const names = skillsData.map(s => s.name)
	const N = names.length
	const idx = new Map(names.map((n, i) => [n, i]))
	const pos: Pt[] = names.map((_, i) => {
		// sunflower seed (deterministic)
		const a = i * 2.399963
		const r = (Math.sqrt(i + 0.5) / Math.sqrt(N)) * 360
		return { x: VW / 2 + r * Math.cos(a), y: VH / 2 + r * Math.sin(a) }
	})

	const edges = EDGES.map(([a, b]) => [idx.get(a)!, idx.get(b)!] as const).filter(([a, b]) => a != null && b != null)

	const area = VW * VH
	const k = 0.85 * Math.sqrt(area / N)
	let temp = VW * 0.12
	const ITERS = 360

	for (let it = 0; it < ITERS; it++) {
		const disp: Pt[] = names.map(() => ({ x: 0, y: 0 }))

		// repulsion (all pairs)
		for (let i = 0; i < N; i++) {
			for (let j = i + 1; j < N; j++) {
				let dx = pos[i].x - pos[j].x
				let dy = pos[i].y - pos[j].y
				const d = Math.hypot(dx, dy) || 0.01
				const f = (k * k) / d
				dx /= d
				dy /= d
				disp[i].x += dx * f
				disp[i].y += dy * f
				disp[j].x -= dx * f
				disp[j].y -= dy * f
			}
		}

		// attraction (edges)
		for (const [a, b] of edges) {
			let dx = pos[a].x - pos[b].x
			let dy = pos[a].y - pos[b].y
			const d = Math.hypot(dx, dy) || 0.01
			const f = (d * d) / k
			dx = (dx / d) * f
			dy = (dy / d) * f
			disp[a].x -= dx
			disp[a].y -= dy
			disp[b].x += dx
			disp[b].y += dy
		}

		// gravity toward center (keeps disconnected clusters from fleeing)
		for (let i = 0; i < N; i++) {
			disp[i].x += (VW / 2 - pos[i].x) * 0.012
			disp[i].y += (VH / 2 - pos[i].y) * 0.012
		}

		// integrate, limited by temperature, clamped to box
		for (let i = 0; i < N; i++) {
			const d = Math.hypot(disp[i].x, disp[i].y) || 0.01
			pos[i].x += (disp[i].x / d) * Math.min(d, temp)
			pos[i].y += (disp[i].y / d) * Math.min(d, temp)
			pos[i].x = Math.max(60, Math.min(VW - 60, pos[i].x))
			pos[i].y = Math.max(40, Math.min(VH - 40, pos[i].y))
		}
		temp *= 0.96
	}

	// collision relaxation to reduce label overlap
	for (let pass = 0; pass < 60; pass++) {
		for (let i = 0; i < N; i++) {
			for (let j = i + 1; j < N; j++) {
				let dx = pos[i].x - pos[j].x
				let dy = pos[i].y - pos[j].y
				const d = Math.hypot(dx, dy) || 0.01
				const min = 96
				if (d < min) {
					const push = (min - d) / 2
					dx /= d
					dy /= d
					pos[i].x += dx * push
					pos[i].y += dy * push
					pos[j].x -= dx * push
					pos[j].y -= dy * push
				}
			}
		}
	}

	// normalize to fill the box with padding
	const xs = pos.map(p => p.x)
	const ys = pos.map(p => p.y)
	const minX = Math.min(...xs)
	const maxX = Math.max(...xs)
	const minY = Math.min(...ys)
	const maxY = Math.max(...ys)
	const pad = 70
	const sx = (VW - 2 * pad) / (maxX - minX || 1)
	const sy = (VH - 2 * pad) / (maxY - minY || 1)

	const out: Record<string, Pt> = {}
	names.forEach((n, i) => {
		out[n] = { x: pad + (pos[i].x - minX) * sx, y: pad + (pos[i].y - minY) * sy }
	})
	return out
}

const SkillGraph: React.FC = () => {
	const positions = React.useMemo(() => computeLayout(), [])
	const [hovered, setHovered] = React.useState<string | null>(null)

	const adjacency = React.useMemo(() => {
		const m = new Map<string, Set<string>>()
		for (const [a, b] of EDGES) {
			if (!m.has(a)) m.set(a, new Set())
			if (!m.has(b)) m.set(b, new Set())
			m.get(a)!.add(b)
			m.get(b)!.add(a)
		}
		return m
	}, [])

	const isDimNode = (s: Skill) => hovered != null && hovered !== s.name && !adjacency.get(hovered)?.has(s.name)

	return (
		<div className='relative w-full' style={{ aspectRatio: `${VW} / ${VH}` }}>
			<svg
				className='absolute inset-0 h-full w-full'
				viewBox={`0 0 ${VW} ${VH}`}
				fill='none'
				style={{ filter: 'drop-shadow(0 0 3px color-mix(in oklch, var(--cyber-cyan), transparent 60%))' }}>
				<defs>
					<linearGradient id='edge' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='0%' stopColor='var(--cyber-yellow)' stopOpacity='0.7' />
						<stop offset='100%' stopColor='var(--cyber-cyan)' stopOpacity='0.55' />
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
				{EDGES.map(([from, to], i) => {
					const a = positions[from]
					const b = positions[to]
					if (!a || !b) return null
					const active = hovered != null && (hovered === from || hovered === to)
					const dim = hovered != null && !active
					const mx = (a.x + b.x) / 2
					return (
						<path
							key={i}
							d={`M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`}
							stroke={active ? 'var(--cyber-yellow)' : 'url(#edge)'}
							strokeWidth={active ? 2.2 : 1.4}
							markerEnd='url(#arrow)'
							style={{ opacity: dim ? 0.06 : 1, transition: 'opacity 0.15s' }}
						/>
					)
				})}
			</svg>

			{skillsData.map(s => {
				const p = positions[s.name]
				if (!p) return null
				return (
					<Link
						key={s.name}
						href={`/skills/${slugify(s.name)}` as never}
						onMouseEnter={() => setHovered(s.name)}
						onMouseLeave={() => setHovered(null)}
						className={cn(
							'perk-node clip-notch-sm group bg-background absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 px-2.5 py-1.5',
							CAT_BORDER[s.category]
						)}
						style={{
							left: `${(p.x / VW) * 100}%`,
							top: `${(p.y / VH) * 100}%`,
							opacity: isDimNode(s) ? 0.28 : 1,
							transition: 'opacity 0.15s'
						}}>
						<span
							className={cn('flex size-4 shrink-0 items-center justify-center', s.whiteBg && 'rounded-sm bg-white/90')}>
							<Icon icon={s.icon} className='size-4' />
						</span>
						<span className='group-hover:text-cyber-yellow text-[0.7rem] font-semibold whitespace-nowrap transition-colors'>
							{s.name}
						</span>
					</Link>
				)
			})}
		</div>
	)
}

export default SkillGraph
