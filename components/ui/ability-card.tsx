'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { AbilityLevel } from '@/common/enum'
import ComicPop from '@/components/motion/ComicPop'
import { cn } from '@/lib/utils'

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
	// Deterministic rotation based on name to prevent hydration mismatch
	const randomRotation = React.useMemo(() => {
		const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
		return (seed % 5) - 2.5 // Range: -2.5 to 2.5 deg
	}, [name])

	const { bars, color, label } = levelConfig[level]

	return (
		<ComicPop
			delay={index * 0.05}
			whileHover={{
				scale: 1.1,
				rotate: 0,
				transition: { type: 'spring', stiffness: 400, damping: 10 }
			}}
			className='group perspective-500 relative'>
			<div
				className={cn(
					'relative flex min-h-[140px] flex-col items-center justify-center p-4',
					'bg-card border-2 border-white/90',
					'shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]',
					'group-hover:shadow-[6px_6px_0px_0px_#ef4444]', // Silk Red shadow
					'group-hover:border-primary group-hover:bg-zinc-900',
					'transform transition-all duration-300'
				)}
				style={{ transform: `rotate(${randomRotation}deg)` }}>
				{/* Corner accents */}
				<div className='group-hover:border-primary absolute top-1 left-1 h-2 w-2 border-t-2 border-l-2 border-white/30'></div>
				<div className='group-hover:border-primary absolute right-1 bottom-1 h-2 w-2 border-r-2 border-b-2 border-white/30'></div>

				{/* Category Label */}
				<div className='absolute top-2 right-2'>
					<span className='bg-white/10 px-1.5 py-0.5 font-sans text-[10px] tracking-wide text-white/50 uppercase transition-colors group-hover:text-white/70'>
						{category}
					</span>
				</div>

				{/* Icon Container with Glow */}
				<div className='group-hover:animate-bounce-subtle relative mb-3'>
					<div className='bg-primary/20 absolute inset-0 scale-0 rounded-full blur-xl transition-transform duration-500 group-hover:scale-150'></div>
					<div className={cn('relative z-10 flex items-center justify-center', whiteBg && 'rounded-full bg-white p-2')}>
						<Icon
							icon={icon}
							className={cn(
								'h-10 w-10 transition-colors duration-300',
								whiteBg ? 'text-black' : 'group-hover:text-primary text-white/80'
							)}
						/>
					</div>
				</div>

				{/* Text */}
				<span className='text-center font-[Bangers] text-lg tracking-wider text-white/90 uppercase transition-all group-hover:scale-105 group-hover:text-white'>
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
	)
}
