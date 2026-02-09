'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import ComicPop from '@/components/motion/ComicPop'
import { cn } from '@/lib/utils'

interface AbilityCardProps {
	name: string
	icon: string
	index?: number
}

export function AbilityCard({ name, icon, index = 0 }: AbilityCardProps) {
	// Deterministic rotation based on name to prevent hydration mismatch
	const randomRotation = React.useMemo(() => {
		const seed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
		return (seed % 5) - 2.5 // Range: -2.5 to 2.5 deg
	}, [name])

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
					'relative flex min-h-[120px] flex-col items-center justify-center p-4',
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

				{/* Icon Container with Glow */}
				<div className='group-hover:animate-bounce-subtle relative mb-3'>
					<div className='bg-primary/20 absolute inset-0 scale-0 rounded-full blur-xl transition-transform duration-500 group-hover:scale-150'></div>
					<Icon
						icon={icon}
						className='group-hover:text-primary relative z-10 h-10 w-10 text-white/80 transition-colors duration-300'
					/>
				</div>

				{/* Text */}
				<span className='text-center font-[Bangers] text-lg tracking-wider text-white/90 uppercase transition-all group-hover:scale-105 group-hover:text-white'>
					{name}
				</span>

				{/* Tech Level Lines (Decorative) */}
				<div className='mt-2 flex gap-1 opacity-30 transition-opacity group-hover:opacity-100'>
					{[1, 2, 3].map(i => (
						<div key={i} className={cn('h-3 w-1 -skew-x-12', i === 3 ? 'bg-primary' : 'bg-white')} />
					))}
				</div>
			</div>
		</ComicPop>
	)
}
