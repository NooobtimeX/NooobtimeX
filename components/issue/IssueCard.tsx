'use client'

import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { ArrowRightIcon } from 'lucide-react'
import { issuesData } from '@/common/data/issue'
import { Issue } from '@/common/interface'
import IssueThumbnail from '@/components/issue/IssueThumbnail'
import ComicPop from '@/components/motion/ComicPop'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface IssueCardProps {
	issue: Issue
	index: number
	variant?: 'featured' | 'grid'
	showAllAbilities?: boolean
}

const IssueCard: React.FC<IssueCardProps> = ({ issue, index, variant = 'grid', showAllAbilities = false }) => {
	const abilitiesToShow = showAllAbilities ? issue.abilities : issue.abilities.slice(0, 3)

	// Comic Issue Number calculated from its global rank (oldest is #001)
	const globalIndex = issuesData.findIndex(p => p.id === issue.id)
	const issueNumber = `#${String(issuesData.length - globalIndex).padStart(3, '0')}`

	if (variant === 'featured') {
		const isEven = index % 2 === 0

		return (
			<ComicPop delay={index * 0.1} className='group relative'>
				{/* Comic Panel Container - Double Page Spread Style */}
				<div className='relative overflow-hidden border-4 border-white bg-black shadow-[12px_12px_0px_0px_white] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)]'>
					{/* Corner Tag */}
					<div
						className={`bg-primary absolute top-0 z-20 border-b-4 border-black px-4 py-2 font-[Bangers] text-xl text-white ${
							isEven ? 'left-0 border-r-4' : 'right-0 border-l-4'
						}`}>
						FEATURED ISSUE {issueNumber}
					</div>

					<div className='grid gap-0 md:grid-cols-2'>
						{/* Image Panel */}
						<div
							className={`relative h-64 overflow-hidden border-b-4 border-white md:h-auto md:border-b-0 ${
								isEven ? 'md:order-1 md:border-r-4' : 'md:order-2 md:border-l-4'
							}`}>
							<div className='bg-primary/20 absolute inset-0 z-10 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100'></div>
							<IssueThumbnail
								src={issue.images.banner}
								alt={issue.title}
								title={issue.title}
								className='transform object-cover transition-transform duration-700 group-hover:scale-110'
							/>
							{/* Halftone Overlay */}
							<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>
						</div>

						{/* Content Panel */}
						<div
							className={`bg-card relative flex flex-col justify-between p-8 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
							{/* Dialogue Box Tail */}
							<div
								className={`bg-card absolute top-[20%] z-20 hidden h-6 w-6 transform border-b-4 border-white md:block ${
									isEven ? '-left-[14px] rotate-45 border-l-4' : '-right-[14px] -rotate-45 border-r-4'
								}`}></div>

							<div>
								<h3 className='mb-4 font-[Bangers] text-4xl leading-none tracking-wide text-white uppercase md:text-5xl'>
									{issue.title}
								</h3>
								<p className='border-primary mb-6 line-clamp-3 border-l-4 pl-4 font-[Inter] text-lg text-gray-300'>
									{issue.description}
								</p>

								<div className='mb-8 flex flex-wrap gap-2'>
									{abilitiesToShow.map((ability, idx) => (
										<Badge
											key={idx}
											variant='outline'
											className='flex items-center gap-1 rounded-none border-white/30 px-2 py-1 text-xs font-bold text-white/80 uppercase'>
											<Icon icon={ability.icon} className='h-3 w-3' />
											{ability.name}
										</Badge>
									))}
									{!showAllAbilities && issue.abilities.length > 3 && (
										<Badge
											variant='outline'
											className='rounded-none border-white/30 px-2 py-1 text-xs font-bold text-white/80 uppercase'>
											+{issue.abilities.length - 3} MORE
										</Badge>
									)}
								</div>
							</div>

							<div className='mt-auto flex gap-4'>
								<Button
									asChild
									className='h-12 flex-1 border-2 border-black bg-white font-[Bangers] text-xl tracking-wider text-black uppercase shadow-[4px_4px_0px_0px_rgba(255,50,50,1)] transition-transform hover:scale-105'>
									<Link href={`/issue/${issue.id}` as Route}>
										READ ISSUE
										<ArrowRightIcon className='ml-2 h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</ComicPop>
		)
	}

	return (
		<ComicPop delay={index * 0.1} className='h-full'>
			<div className='comic-panel bg-card group flex h-full flex-col border-4 border-white shadow-[8px_8px_0px_0px_white] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(255,50,50,1)]'>
				{/* Image Section */}
				<div className='relative aspect-video overflow-hidden border-b-4 border-white'>
					<div className='absolute top-2 right-2 z-20 rotate-2 transform border border-white bg-black px-2 font-[Bangers] text-sm text-white'>
						VOL. {new Date().getFullYear()}
					</div>

					<IssueThumbnail
						src={issue.images.banner}
						alt={issue.title}
						title={issue.title}
						className='object-cover transition-transform duration-500 group-hover:scale-110'
					/>
					<div className='bg-primary/20 absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100'></div>
				</div>

				{/* Content Section */}
				<div className='relative flex grow flex-col p-6'>
					{/* Decorative Dots */}
					<div className='absolute top-2 left-2 flex h-4 w-16 gap-1 opacity-50'>
						<div className='h-1 w-1 rounded-full bg-white'></div>
						<div className='h-1 w-1 rounded-full bg-white'></div>
						<div className='h-1 w-1 rounded-full bg-white'></div>
					</div>

					<h3 className='group-hover:text-primary mt-2 mb-3 line-clamp-1 font-[Bangers] text-3xl tracking-wide text-white uppercase transition-colors'>
						{issue.title}
					</h3>

					<p className='mb-6 line-clamp-2 grow font-[Inter] text-sm text-gray-400'>{issue.description}</p>

					<div className='mt-auto space-y-4'>
						<div className='flex flex-wrap gap-2'>
							{abilitiesToShow.slice(0, 3).map((ability, idx) => (
								<span
									key={idx}
									className='flex items-center gap-1 border border-white/10 bg-white/5 px-2 py-1 font-[Inter] text-[10px] font-bold text-white/60 uppercase'>
									<Icon icon={ability.icon} className='h-3 w-3' />
									{ability.name}
								</span>
							))}
						</div>

						<Button
							asChild
							className='w-full border-2 border-black bg-white font-[Bangers] text-lg tracking-wider text-black uppercase shadow-[4px_4px_0px_0px_rgba(255,50,50,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,50,50,1)]'>
							<Link href={`/issue/${issue.id}` as Route}>VIEW ISSUE</Link>
						</Button>
					</div>
				</div>
			</div>
		</ComicPop>
	)
}

export default IssueCard
