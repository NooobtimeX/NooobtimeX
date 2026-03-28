'use client'

import React from 'react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { issuesData } from '@/common/data/issue'
import { AffiliationItem } from '@/common/interface'
import ComicPop from '@/components/motion/ComicPop'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatAffiliationDuration, isCurrentPosition } from '@/lib/utils'

interface AffiliationCardProps {
	item: AffiliationItem
	index: number
}

const AffiliationCard: React.FC<AffiliationCardProps> = ({ item, index }) => {
	const isCurrent = isCurrentPosition(item.endDate)

	const projectAbilities = issuesData
		.filter(issue => issue.linkedAffiliationId === item.id)
		.flatMap(issue => issue.abilities)
	const uniqueAbilities = Array.from(new Map(projectAbilities.map(a => [a.name, a])).values())

	return (
		<ComicPop delay={index * 0.1} className='h-full'>
			<div className='silk-card-interactive group relative flex h-full flex-col'>
				{/* Image Section / Logo Section */}
				<div className='relative flex aspect-video items-center justify-center overflow-hidden border-b-4 border-white bg-white p-8'>
					{item.affiliation.logo ?
						<div className='relative h-full w-full'>
							<Image
								src={item.affiliation.logo}
								alt={item.affiliation.name}
								fill
								className='object-contain transition-transform duration-500 group-hover:scale-110'
							/>
						</div>
					:	<div className='text-center text-4xl font-black text-black opacity-20'>{item.affiliation.name}</div>}
					<div className='bg-primary/5 absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100'></div>

					{/* Corner Tag */}
					<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-3 py-1 text-sm font-black text-white'>
						{item.type.toUpperCase()}
					</div>
				</div>

				{/* Content Section */}
				<div className='relative flex grow flex-col bg-black p-6'>
					{/* Active Mission Indicator */}
					{isCurrent && (
						<div className='bg-primary absolute -top-4 left-6 z-30 animate-pulse border-2 border-white px-4 py-1 font-black text-white shadow-[4px_4px_0px_0px_black]'>
							ACTIVE MISSION
						</div>
					)}

					<div className='mb-4'>
						<h3 className='group-hover:text-primary mb-1 line-clamp-2 text-2xl leading-tight font-black tracking-tight text-white uppercase transition-colors'>
							{item.position}
						</h3>
						<div className='text-primary text-xs font-bold tracking-widest uppercase'>{item.affiliation.name}</div>
					</div>

					<div className='mb-4 flex items-center gap-2 text-xs text-zinc-400'>
						<Icon icon='material-symbols:calendar-month' className='h-4 w-4' />
						<span>{formatAffiliationDuration(item.startDate, item.endDate)}</span>
						{item.affiliation.location && (
							<>
								<span className='text-zinc-600'>|</span>
								<span>{item.affiliation.location}</span>
							</>
						)}
					</div>

					{item.description && (
						<p className='mb-6 line-clamp-3 border-l-2 border-white/10 pl-3 text-sm text-gray-400'>
							{item.description}
						</p>
					)}

					<div className='mt-auto space-y-4'>
						<div className='flex flex-wrap gap-1.5'>
							{uniqueAbilities.slice(0, 5).map((ability, idx) => (
								<Badge
									key={idx}
									variant='outline'
									className='flex items-center gap-1 rounded-none border-white/20 px-1.5 py-0 text-[10px] font-bold text-white/60 uppercase'>
									<Icon icon={ability.icon} className='h-3 w-3' />
									{ability.name}
								</Badge>
							))}
							{uniqueAbilities.length > 5 && (
								<span className='text-[10px] font-bold text-zinc-500'>+{uniqueAbilities.length - 5}</span>
							)}
						</div>

						<div className='pt-2'>
							<Link href={`/affiliation/${item.id}` as Route} className='block w-full'>
								<Button className='silk-button-tactical-white w-full text-lg font-black tracking-tight'>
									MISSION BRIEF
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</ComicPop>
	)
}

export default AffiliationCard
