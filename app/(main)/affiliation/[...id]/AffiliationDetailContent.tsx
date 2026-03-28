'use client'

import React from 'react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import AffiliationCard from '@/components/affiliation/AffiliationCard'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'
import { formatAffiliationDuration } from '@/lib/utils'

interface AffiliationDetailContentProps {
	id: string
}

const AffiliationDetailContent: React.FC<AffiliationDetailContentProps> = ({ id }) => {
	const affiliationItem = affiliationData.find(a => a.id === id)

	if (!affiliationItem) {
		notFound()
	}

	const { affiliation, position, description, startDate, endDate, type } = affiliationItem

	const relatedIssues = issuesData.filter(issue => issue.linkedAffiliationId === affiliationItem.id)

	const projectAbilities = relatedIssues.flatMap(issue => issue.abilities)
	const uniqueAbilities = Array.from(new Map(projectAbilities.map(a => [a.name, a])).values())

	const groupedAbilities = uniqueAbilities.reduce(
		(acc, ability) => {
			const category = ability.category || 'Other'
			if (!acc[category]) acc[category] = []
			acc[category].push(ability)
			return acc
		},
		{} as Record<string, typeof uniqueAbilities>
	)

	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-24 pb-20'>
			{/* Global Background Elements */}
			<div className='pointer-events-none fixed inset-0 z-0 opacity-20'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-size-[24px_24px]'></div>
				{/* Top Right Web */}
				<div className='comic-web-pattern absolute top-0 right-0 h-[500px] w-[500px] rotate-12 transform opacity-30'></div>
				{/* Bottom Left Web */}
				<div className='comic-web-pattern absolute bottom-0 left-0 h-[500px] w-[500px] scale-x-[-1] -rotate-12 transform opacity-30'></div>
			</div>

			<div className='pointer-events-none fixed top-0 left-0 z-0 h-full w-full opacity-10'>
				<div className='bg-primary absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]'></div>
				<div className='absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white blur-[100px]'></div>
			</div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Breadcrumb Navigation */}
				<div className='relative z-20 mb-12'>
					<nav className='flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-500 uppercase'>
						<Link href={'/' as Route} className='hover:text-primary transition-colors'>
							COMMAND CENTER
						</Link>
						<Icon icon='material-symbols:chevron-right' className='h-3 w-3' />
						<Link href={'/affiliation' as Route} className='hover:text-primary transition-colors'>
							AFFILIATIONS
						</Link>
						<Icon icon='material-symbols:chevron-right' className='h-3 w-3' />
						<span className='text-white'>{affiliation.name}</span>
					</nav>
				</div>

				{/* Hero Section (Hero Hub DNA) */}
				<section className='mb-20 grid gap-12 lg:grid-cols-[1.2fr_1fr]'>
					<ComicPop initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
						<div className='silk-banner'>
							<div className='flex aspect-video items-center justify-center overflow-hidden bg-white p-12'>
								<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-4 py-2 text-xl font-black text-white'>
									{type.toUpperCase()}
								</div>
								<div className='relative h-full w-full'>
									{affiliation.logo ?
										<Image
											src={affiliation.logo}
											alt={affiliation.name}
											fill
											className='object-contain transition-transform duration-700 hover:scale-110'
										/>
									:	<div className='flex h-full w-full items-center justify-center text-center text-5xl font-black text-black opacity-30'>
											{affiliation.name}
										</div>
									}
								</div>
							</div>
							<div className='comic-halftone pointer-events-none absolute inset-0 opacity-10'></div>
						</div>
					</ComicPop>

					<div className='flex flex-col justify-center gap-6'>
						<ComicPop delay={0.2}>
							<div className='silk-badge mb-6'>
								<h1 className='silk-badge-text text-3xl md:text-5xl'>{position}</h1>
							</div>
							<div className='text-primary mb-4 text-xl font-black tracking-widest uppercase'>{affiliation.name}</div>

							<div className='mb-6 flex flex-col gap-3 text-zinc-400'>
								<div className='flex items-center gap-3 font-bold'>
									<Icon icon='material-symbols:calendar-today' className='text-primary h-5 w-5' />
									<span>{formatAffiliationDuration(startDate, endDate)}</span>
								</div>
								{affiliation.location && (
									<div className='flex items-center gap-3 font-bold'>
										<Icon icon='material-symbols:location-on' className='text-primary h-5 w-5' />
										<span>{affiliation.location}</span>
									</div>
								)}
							</div>

							<div className='space-y-4'>
								<div className='flex items-center gap-4'>
									<div className='silk-marker-vertical'></div>
									<h2 className='text-2xl font-black text-white uppercase'>INTELLIGENCE BRIEF</h2>
								</div>
								<p className='max-w-xl text-lg leading-relaxed font-medium text-zinc-500 italic'>{description}</p>
							</div>

							{affiliation.url && (
								<div className='mt-8'>
									<Link
										href={affiliation.url as Route}
										target='_blank'
										rel='noopener noreferrer'
										className='silk-button-tactical'>
										<Icon icon='material-symbols:link' className='h-5 w-5' />
										MISSION HQ / WEBSITE
									</Link>
								</div>
							)}
						</ComicPop>
					</div>
				</section>

				{/* Operational Relational Data */}
				<div className='space-y-24'>
					{/* Projects Section */}
					{relatedIssues.length > 0 && (
						<section className='space-y-12'>
							<div className='silk-grid-header'>
								<div className='flex items-center gap-6'>
									<h3 className='silk-grid-header-title'>OPERATIONAL PROJECTS</h3>
								</div>
								<div className='mx-8 hidden h-px grow bg-zinc-800 opacity-30 md:block'></div>
								<span className='silk-grid-header-stats'>{relatedIssues.length} ACTIVE RECORDS</span>
							</div>

							<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
								{relatedIssues.map((issue, index) => (
									<IssueCard key={issue.id} issue={issue} index={index} variant='grid' />
								))}
							</div>
						</section>
					)}

					{/* Abilities Section */}
					<section className='space-y-12'>
						<div className='silk-grid-header'>
							<div className='flex items-center gap-6'>
								<h3 className='silk-grid-header-title'>MISSION ABILITIES</h3>
							</div>
							<div className='mx-8 hidden h-px grow bg-zinc-800 opacity-30 md:block'></div>
							<span className='silk-grid-header-stats'>{uniqueAbilities.length} SKILLS DEPLOYED</span>
						</div>

						<div className='silk-panel p-8'>
							<div className='space-y-12'>
								{Object.entries(groupedAbilities).map(([category, abilities]) => (
									<div key={category} className='space-y-6'>
										<div className='flex items-center gap-3'>
											<div className='h-px flex-1 bg-white/20'></div>
											<h3 className='text-primary text-xl font-black tracking-widest uppercase'>{category}</h3>
											<div className='h-px flex-1 bg-white/20'></div>
										</div>

										<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
											{abilities.map((ability, index) => (
												<Link
													key={index}
													href={`/ability/${ability.name.toLowerCase().replace(/ /g, '-')}` as Route}
													className='hover:border-primary hover:bg-primary/10 group flex items-center gap-4 border-2 border-white/10 bg-black p-4 transition-colors'>
													<div className='group-hover:border-primary border-2 border-white/20 p-2 transition-colors'>
														<Icon icon={ability.icon} className='text-primary h-8 w-8' />
													</div>
													<div>
														<h4 className='text-xl font-black tracking-wide text-white uppercase'>{ability.name}</h4>
													</div>
												</Link>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>

				{/* Footer Navigation (Discovery Mode) */}
				<section className='mt-32 border-t border-zinc-900 pt-20'>
					<ComicPop className='mb-12 text-center'>
						<div className='silk-section-label mb-8'>
							<h2 className='silk-section-label-text'>MEANWHILE...</h2>
						</div>
						<p className='text-muted-foreground text-xl font-black tracking-wide uppercase'>
							Discover other branches of my journey
						</p>
					</ComicPop>

					<div className='mb-16 grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3'>
						{affiliationData
							.filter(a => a.id !== affiliationItem.id)
							.slice(0, 3)
							.map((relatedItem, index) => (
								<AffiliationCard key={relatedItem.id} item={relatedItem} index={index} />
							))}
					</div>

					<div className='flex justify-center'>
						<Link href={'/affiliation' as Route} className='silk-button-tactical'>
							<Icon icon='material-symbols:arrow-back' className='h-5 w-5' />
							BACK TO AFFILIATIONS
						</Link>
					</div>
				</section>
			</div>
		</div>
	)
}

export default AffiliationDetailContent
