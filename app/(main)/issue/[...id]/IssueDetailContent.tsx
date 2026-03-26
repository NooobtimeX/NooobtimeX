'use client'

import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { ArrowLeftIcon, ExternalLinkIcon } from 'lucide-react'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import AffiliationCard from '@/components/affiliation/AffiliationCard'
import ImageGallery from '@/components/issue/ImageGallery'
import IssueCard from '@/components/issue/IssueCard'
import IssueThumbnail from '@/components/issue/IssueThumbnail'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface IssueDetailContentProps {
	id: string
}

const IssueDetailContent: React.FC<IssueDetailContentProps> = ({ id }) => {
	const issue = issuesData.find(p => p.id === id)

	if (!issue) {
		notFound()
	}

	const linkedAffiliation = affiliationData.find(a => a.id === issue.linkedAffiliationId)

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
			{/* Background */}
			<div className='comic-halftone pointer-events-none fixed inset-0 opacity-20'></div>

			{/* Navigation */}
			<section className='relative z-20 mb-8'>
				<div className='container mx-auto px-4'>
					<ComicPop initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
						<Button
							asChild
							className='h-12 rounded-none border-2 border-black bg-white px-6 text-xl font-black text-black uppercase shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-zinc-200 hover:shadow-[2px_2px_0px_0px_white]'>
							<Link href='/issue' className='flex items-center gap-2'>
								<ArrowLeftIcon className='h-5 w-5' />
								BACK TO ARCHIVE
							</Link>
						</Button>
					</ComicPop>
				</div>
			</section>

			{/* Hero Section */}
			<section className='relative mb-16'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='grid items-start gap-12 lg:grid-cols-2'>
						{/* Left Column - Cover Art */}
						<ComicPop
							initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
							animate={{ opacity: 1, scale: 1, rotate: -1 }}
							className='group perspective-1000 relative'>
							<div className='relative border-4 border-white bg-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:rotate-0 hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)]'>
								{/* Badge */}
								<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-4 py-2 text-xl font-black text-white'>
									ISSUE #{String(issuesData.length - issuesData.findIndex(p => p.id === issue.id)).padStart(3, '0')}
								</div>

								<div className='relative aspect-video overflow-hidden'>
									<IssueThumbnail
										src={issue.images.banner}
										alt={issue.title}
										title={issue.title}
										className='object-cover'
									/>
								</div>
							</div>
						</ComicPop>

						{/* Right Column - Issue Info */}
						<ComicPop initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} delay={0.2} className='space-y-8'>
							<div className='bg-card relative space-y-6 border-4 border-white p-8 shadow-[8px_8px_0px_0px_white]'>
								<div className='bg-primary absolute -top-3 -left-3 z-20 h-6 w-6 rotate-45 transform border-2 border-black'></div>

								<h1 className='text-5xl leading-[0.9] font-black tracking-wide wrap-break-word text-white uppercase md:text-6xl lg:text-7xl'>
									{issue.title}
								</h1>

								<div className='h-1 w-full bg-white/20'></div>

								<p className='text-muted-foreground text-xl leading-relaxed'>{issue.description}</p>

								{/* Action Buttons */}
								<div className='flex flex-col gap-4 pt-4 sm:flex-row'>
									{issue.links.live && (
										<Button
											asChild
											size='lg'
											className='comic-button bg-primary h-14 border-2 border-white px-8 text-xl text-white shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]'>
											<Link
												href={issue.links.live as Route}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2'>
												<ExternalLinkIcon className='h-5 w-5' />
												LIVE DEMO
											</Link>
										</Button>
									)}
								</div>
							</div>
						</ComicPop>
					</div>
				</div>
			</section>

			{/* Detailed Information */}
			<section className='relative mb-20'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='grid items-start gap-8 lg:grid-cols-3'>
						{/* Left Panel - Gallery & Affiliation */}
						<div className='space-y-8 lg:col-span-2'>
							{/* Issue Gallery */}
							<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.3}>
								<div className='bg-card border-4 border-white p-2 shadow-[8px_8px_0px_0px_white]'>
									<div className='mb-4 border-b-2 border-white/20 bg-black p-4'>
										<h2 className='text-3xl font-black tracking-wide text-white uppercase'>VISUAL EVIDENCE</h2>
									</div>
									<div className='space-y-6'>
										{issue.images.photos && issue.images.photos.length > 0 && (
											<div className='space-y-4'>
												<ImageGallery images={issue.images.photos} title={issue.title} />
											</div>
										)}
									</div>
								</div>
							</ComicPop>

							{/* Bind Company / Affiliation */}
							{linkedAffiliation && (
								<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.4}>
									<div className='bg-card border-4 border-white p-6 shadow-[8px_8px_0px_0px_white]'>
										<div className='mb-6 flex items-center gap-4'>
											<div className='bg-primary h-8 w-3 border-2 border-black'></div>
											<h2 className='text-3xl font-black tracking-wide text-white uppercase'>
												BIND COMPANY / AFFILIATION
											</h2>
										</div>
										<div className='max-w-md'>
											<AffiliationCard item={linkedAffiliation} index={0} />
										</div>
									</div>
								</ComicPop>
							)}
						</div>

						{/* Abilities - Right Panel */}
						<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.5} className='space-y-6'>
							<div className='bg-card sticky top-24 transform border-4 border-white p-6 shadow-[8px_8px_0px_0px_white]'>
								<h2 className='border-primary mb-8 border-b-4 pb-2 text-3xl font-black tracking-wide text-white uppercase'>
									ABILITIES
								</h2>
								<div className='space-y-8'>
									{Object.entries(groupedAbilities).map(([category, abilities], catIndex) => (
										<div key={category} className='space-y-4'>
											<h4 className='text-primary text-xl font-black tracking-widest uppercase'>{category}</h4>
											<div className='grid grid-cols-1 gap-3'>
												{abilities.map((ability, index) => (
													<ComicPop
														key={index}
														initial={{ opacity: 0, x: 20 }}
														animate={{ opacity: 1, x: 0 }}
														delay={0.6 + (catIndex * abilities.length + index) * 0.1}
														className='hover:border-primary flex items-center gap-4 border-2 border-zinc-800 bg-black p-3 transition-colors'>
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
													</ComicPop>
												))}
											</div>
										</div>
									))}
								</div>
							</div>
						</ComicPop>
					</div>
				</div>
			</section>

			{/* Related Issues */}
			<section className='relative pb-20'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='my-16 border-t-4 border-white opacity-50'></div>

					<ComicPop className='mb-12 text-center'>
						<div className='mb-8 inline-block rotate-1 transform border-4 border-black bg-white px-8 py-3 text-black shadow-[8px_8px_0px_0px_white]'>
							<h2 className='text-3xl font-black tracking-wider uppercase md:text-5xl'>MEANWHILE...</h2>
						</div>
						<p className='text-muted-foreground text-xl font-black tracking-wide uppercase'>
							Check out these other issues
						</p>
					</ComicPop>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
				</div>
			</section>
		</div>
	)
}

export default IssueDetailContent
