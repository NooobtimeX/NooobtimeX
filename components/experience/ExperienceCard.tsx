import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn, formatExperienceDuration, isCurrentPosition } from '@/lib/utils'
import type { ExperienceItem } from '@/common'

interface ExperienceCardProps {
	item: ExperienceItem
}

const formatPosition = (position: string) =>
	position
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const ExperienceCard: React.FC<ExperienceCardProps> = ({ item }) => {
	const current = isCurrentPosition(item.endDate)

	return (
		<Link
			href={`/experience/${item.id}` as never}
			className='group neon-panel clip-notch hover:border-cyber-yellow/60 flex h-full flex-col gap-3 p-4 transition-colors'>
			<div className='flex items-start gap-3'>
				{item.organization.logo && (
					<span className='relative size-11 shrink-0 overflow-hidden rounded-sm bg-white/90'>
						<Image
							src={item.organization.logo}
							alt={item.organization.name}
							fill
							sizes='44px'
							className='object-contain p-1'
						/>
					</span>
				)}
				<div className='min-w-0 flex-1'>
					<h3 className='group-hover:text-cyber-yellow text-base leading-tight font-bold tracking-wide transition-colors'>
						{formatPosition(item.position)}
					</h3>
					<p className='text-cyber-cyan truncate text-sm'>{item.organization.name}</p>
				</div>
				{current && (
					<span className='bg-cyber-yellow shrink-0 px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
						Active
					</span>
				)}
			</div>

			<p className='text-muted-foreground line-clamp-2 text-sm leading-relaxed'>{item.description}</p>

			<div className='mt-auto flex items-center justify-between pt-2 font-mono text-[0.65rem] tracking-wider uppercase'>
				<span className={cn('text-muted-foreground')}>{formatExperienceDuration(item.startDate, item.endDate)}</span>
				<Icon
					icon='mdi:arrow-top-right'
					className='text-muted-foreground group-hover:text-cyber-yellow size-4 transition-colors'
				/>
			</div>
		</Link>
	)
}

export default ExperienceCard
