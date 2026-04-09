'use client'

import React from 'react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import AffiliationCard from '@/components/affiliation/AffiliationCard'
import ImageGallery from '@/components/issue/ImageGallery'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'
import { cn } from '@/lib/utils'
import { affiliationData, issuesData } from '@/common'

interface IssueDetailContentProps {
	id: string
}

const IssueDetailContent: React.FC<IssueDetailContentProps> = ({ id }) => {
	const issue = issuesData.find(p => p.id === id)

	if (!issue) {
		notFound()
	}

	const linkedAffiliation = affiliationData.find(a => a.affiliation.id === issue.linkedAffiliationId)

	const groupedAbilities = issue.abilities.reduce(
		(acc, ability) => {
			const category = ability.category || 'Other'
			if (!acc[category]) acc[category] = []
			acc[category].push(ability)
			return acc
		},
		{} as Record<string, typeof issue.abilities>
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
						<Link href={'/issue' as Route} className='hover:text-primary transition-colors'>
							ISSUE ARCHIVE
						</Link>
						<Icon icon='material-symbols:chevron-right' className='h-3 w-3' />
						<span className='text-white'>{issue.title}</span>
					</nav>
				</div>

				{/* Hero Section (Hero Hub DNA) */}
				<section className='mb-20 grid gap-12 lg:grid-cols-[1.2fr_1fr]'>
					<ComicPop initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
						<div className='silk-banner'>
							<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-4 py-2 text-xl font-black text-white'>
								ISSUE #{String(issuesData.length - issuesData.findIndex(p => p.id === issue.id)).padStart(3, '0')}
							</div>
							<div className='aspect-video overflow-hidden'>
								<Image
									src={issue.images.banner}
									alt={issue.title}
									fill
									className='object-cover transition-transform duration-700 hover:scale-105'
								/>
							</div>
							<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>
						</div>
					</ComicPop>

					<div className='flex flex-col justify-center gap-6'>
						<ComicPop delay={0.2}>
							<div className='silk-badge mb-6'>
								<h1 className='silk-badge-text text-3xl md:text-5xl'>{issue.title}</h1>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center gap-4'>
									<div className='silk-marker-vertical'></div>
									<h2 className='text-2xl font-black text-white uppercase'>INTELLIGENCE BRIEF</h2>
								</div>
								<p className='max-w-xl text-xl leading-relaxed font-medium text-zinc-400 italic'>{issue.description}</p>
							</div>

							<div className='mt-8 flex flex-wrap gap-4'>
								{issue.links.live && (
									<Link
										href={issue.links.live as Route}
										target='_blank'
										rel='noopener noreferrer'
										className='silk-button-tactical'>
										<Icon icon='material-symbols:open-in-new' className='h-5 w-5' />
										LIVE CASE STUDY
									</Link>
								)}
							</div>
						</ComicPop>
					</div>
				</section>

				{/* Detailed Grid Layout */}
				<div className='grid items-start gap-12 lg:grid-cols-3'>
					{/* Main Content Area (2/3) */}
					<div className='space-y-20 lg:col-span-2'>
						{/* Visual Evidence Archive */}
						<section className='space-y-8'>
							<div className='silk-grid-header'>
								<div className='flex items-center gap-6'>
									<h3 className='silk-grid-header-title'>VISUAL EVIDENCE</h3>
								</div>
								<div className='mx-8 hidden h-px grow bg-zinc-800 opacity-30 md:block'></div>
							</div>

							<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.3}>
								<div className='silk-panel p-2'>
									<div className='space-y-6'>
										{issue.images.photos && issue.images.photos.length > 0 && (
											<div className='space-y-4'>
												<ImageGallery images={issue.images.photos} title={issue.title} />
											</div>
										)}
									</div>
								</div>
							</ComicPop>
						</section>

						{/* Affiliation Reference */}
						{linkedAffiliation && (
							<section className='space-y-8'>
								<div className='silk-grid-header'>
									<div className='flex items-center gap-6'>
										<h3 className='silk-grid-header-title'>BIND AFFILIATION</h3>
									</div>
									<div className='mx-8 hidden h-px grow bg-zinc-800 opacity-30 md:block'></div>
								</div>

								<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.4}>
									<div className='silk-panel p-6'>
										<div className='max-w-md'>
											<AffiliationCard item={linkedAffiliation} index={0} />
										</div>
									</div>
								</ComicPop>
							</section>
						)}
					</div>

					{/* Sidebar (1/3) */}
					<aside className='sticky top-24 space-y-8'>
						<div className='silk-grid-header'>
							<h3 className='silk-grid-header-title'>TECHNICAL STACK</h3>
						</div>

						<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.5}>
							<div className='silk-panel p-6'>
								<div className='space-y-8'>
									{Object.entries(groupedAbilities).map(([category, abilities]) => (
										<div key={category} className='space-y-4'>
											<h4 className='text-primary text-xl font-black tracking-widest uppercase'>{category}</h4>
											<div className='grid grid-cols-1 gap-3'>
												{abilities.map((ability, index) => (
													<Link
														key={index}
														href={`/ability/${ability.name.toLowerCase().replace(/ /g, '-')}` as Route}
														className='hover:border-primary hover:bg-primary/10 group flex items-center gap-4 border-2 border-zinc-800 bg-black p-3 transition-colors'>
														<div
															className={cn(
																'flex items-center justify-center',
																ability.whiteBg && 'rounded-full bg-zinc-100 p-1'
															)}>
															<Icon
																icon={ability.icon}
																className={cn('h-6 w-6', ability.whiteBg ? 'text-black' : 'text-primary')}
															/>
														</div>
														<div>
															<h4 className='text-lg font-black tracking-wide text-white uppercase'>{ability.name}</h4>
														</div>
													</Link>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</ComicPop>
					</aside>
				</div>

				{/* Footer Discovery Navigation */}
				<section className='mt-32 border-t border-zinc-900 pt-20'>
					<ComicPop className='mb-12 text-center'>
						<div className='silk-section-label mb-8'>
							<h2 className='silk-section-label-text'>MEANWHILE...</h2>
						</div>
						<p className='text-muted-foreground text-xl font-black tracking-wide uppercase'>
							Check out these other issues
						</p>
					</ComicPop>

					<div className='mb-16 grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3'>
						{issuesData
							.filter(p => p.id !== issue.id)
							.slice(0, 3)
							.map((relatedIssue, index) => (
								<IssueCard
									key={relatedIssue.id}
									issue={relatedIssue}
									index={index}
									variant='grid'
									showAllAbilities={false}
								/>
							))}
					</div>

					<div className='flex justify-center'>
						<Link href={'/issue' as Route} className='silk-button-tactical'>
							<Icon icon='material-symbols:arrow-back' className='h-5 w-5' />
							BACK TO ARCHIVE
						</Link>
					</div>
				</section>
			</div>
		</div>
	)
}

export default IssueDetailContent
