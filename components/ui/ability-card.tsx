'use client'

import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { categoryMetadata } from '@/common/data/ability/categoryMetadata'
import { AbilityCategory, AbilityLevel } from '@/common/enum'
import ComicPop from '@/components/motion/ComicPop'
import { cn, slugify } from '@/lib/utils'

interface AbilityCardProps {
	name: string
	icon: string
	level: AbilityLevel
	category: string
	index?: number
	whiteBg?: boolean
}

const levelConfig: Record<AbilityLevel, { bars: number; color: string; label: string }> = {
	[AbilityLevel.Beginner]: { bars: 1, color: 'bg-blue-400', label: 'Beginner' },
	[AbilityLevel.Intermediate]: { bars: 2, color: 'bg-yellow-400', label: 'Intermediate' },
	[AbilityLevel.Advanced]: { bars: 3, color: 'bg-orange-400', label: 'Advanced' },
	[AbilityLevel.Expert]: { bars: 4, color: 'bg-primary', label: 'Expert' }
}

export function AbilityCard({ name, icon, level, category, index = 0, whiteBg }: AbilityCardProps) {
	const metadata = categoryMetadata[category as AbilityCategory]
	const accentColor = metadata?.color || '#ef4444'
	const shadowColor = metadata?.shadow || 'rgba(255, 255, 255, 0.2)'

	// Deterministic rotation based on name to prevent hydration mismatch
	const randomRotation = React.useMemo(() => {
		const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
		return (seed % 5) - 2.5 // Range: -2.5 to 2.5 deg
	}, [name])

	const { bars, color, label } = levelConfig[level]

	return (
		<Link href={`/ability/${slugify(name)}` as Route} className='block h-full'>
			<ComicPop
				delay={index * 0.05}
				whileHover={{
					scale: 1.05,
					rotate: 0,
					transition: { type: 'spring', stiffness: 400, damping: 10 }
				}}
				className='group perspective-500 relative h-full'>
				<div
					className={cn(
						'relative flex min-h-[140px] flex-col items-center justify-center p-4',
						'bg-card border-4 border-white/90',
						'shadow-[6px_6px_0px_0px_var(--shadow-color)]',
						'group-hover:shadow-[8px_8px_0px_0px_(--accent-color)]',
						'group-hover:border-(--accent-color) group-hover:bg-zinc-900',
						'transform transition-all duration-300'
					)}
					style={
						{
							'transform': `rotate(${randomRotation}deg)`,
							'--accent-color': accentColor,
							'--shadow-color': shadowColor
						} as React.CSSProperties
					}>
					{/* Corner accents */}
					<div
						style={{ borderColor: `${accentColor}4D` }}
						className='absolute top-1 left-1 h-3 w-3 border-t-2 border-l-2 group-hover:border-(--accent-color)'></div>
					<div
						style={{ borderColor: `${accentColor}4D` }}
						className='absolute right-1 bottom-1 h-3 w-3 border-r-2 border-b-2 group-hover:border-(--accent-color)'></div>

					{/* Category Label */}
					<div className='absolute top-2 right-2'>
						<span
							style={{ color: `${accentColor}B3` }}
							className='bg-white/10 px-1.5 py-0.5 font-sans text-[10px] tracking-wide uppercase transition-colors group-hover:text-white'>
							{category}
						</span>
					</div>

					{/* Icon Container with Glow */}
					<div className='group-hover:animate-bounce-subtle relative mb-3'>
						<div
							style={{ backgroundColor: `${accentColor}33` }}
							className='absolute inset-0 scale-0 rounded-full blur-xl transition-transform duration-500 group-hover:scale-150'></div>
						<div
							className={cn('relative z-10 flex items-center justify-center', whiteBg && 'rounded-full bg-white p-2')}>
							<Icon
								icon={icon}
								style={{ color: whiteBg ? undefined : 'rgba(255,255,255,0.8)' }}
								className={cn(
									'h-10 w-10 transition-colors duration-300',
									whiteBg ? 'text-black' : 'group-hover:text-(--accent-color)'
								)}
							/>
						</div>
					</div>

					{/* Text */}
					<span className='text-center text-lg font-black tracking-tight text-white/90 uppercase transition-all group-hover:scale-105 group-hover:text-white'>
						{name}
					</span>

					{/* Level Bars */}
					<div className='mt-2 flex items-center gap-1' title={label}>
						{[1, 2, 3, 4].map(i => (
							<div
								key={i}
								className={cn(
									'h-3 w-1.5 -skew-x-12 transition-all duration-300',
									i <= bars ? color : 'bg-white/15',
									i <= bars && 'group-hover:scale-y-110'
								)}
							/>
						))}
					</div>
				</div>
			</ComicPop>
		</Link>
	)
}
