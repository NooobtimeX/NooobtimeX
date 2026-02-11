'use client'

import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react'
import ImageGallery from '@/components/issue/ImageGallery'
import IssueCard from '@/components/issue/IssueCard'
import IssueThumbnail from '@/components/issue/IssueThumbnail'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { issuesData } from '@/data/issues'

interface IssueDetailContentProps {
	id: string
}

const IssueDetailContent: React.FC<IssueDetailContentProps> = ({ id }) => {
	const issue = issuesData.find(p => p.id === id)

	if (!issue) {
		notFound()
	}

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
							className='h-12 rounded-none border-2 border-black bg-white px-6 font-[Bangers] text-xl text-black uppercase shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-zinc-200 hover:shadow-[2px_2px_0px_0px_white]'>
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
								<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-4 py-2 font-[Bangers] text-xl text-white'>
									ISSUE #{id?.toUpperCase().slice(0, 3)}
								</div>

								<div className='relative aspect-[16/9] overflow-hidden'>
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

								<h1 className='font-[Bangers] text-5xl leading-[0.9] tracking-wide break-words text-white uppercase md:text-6xl lg:text-7xl'>
									{issue.title}
								</h1>

								<div className='h-1 w-full bg-white/20'></div>

								<p className='text-muted-foreground font-[Inter] text-xl leading-relaxed'>{issue.description}</p>

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
									{issue.links.github && (
										<Button
											variant='outline'
											asChild
											size='lg'
											className='comic-button h-14 border-2 border-white bg-black px-8 text-xl text-white shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-zinc-900 hover:shadow-[2px_2px_0px_0px_white]'>
											<Link
												href={issue.links.github as Route}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2'>
												<GithubIcon className='h-5 w-5' />
												SOURCE CODE
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
						{/* Issue Gallery - Left Panel */}
						<ComicPop
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							delay={0.3}
							className='lg:col-span-2'>
							<div className='bg-card border-4 border-white p-2 shadow-[8px_8px_0px_0px_white]'>
								<div className='mb-4 border-b-2 border-white/20 bg-black p-4'>
									<h2 className='font-[Bangers] text-3xl tracking-wide text-white uppercase'>VISUAL EVIDENCE</h2>
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

						{/* Abilities - Right Panel */}
						<ComicPop initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} delay={0.4} className='space-y-6'>
							<div className='bg-card sticky top-24 rotate-1 transform border-4 border-white p-6 shadow-[8px_8px_0px_0px_white]'>
								<h2 className='border-primary mb-6 border-b-4 pb-2 font-[Bangers] text-3xl tracking-wide text-white uppercase'>
									ABILITY
								</h2>
								<div className='space-y-4'>
									{issue.abilities.map((ability, index) => (
										<ComicPop
											key={index}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											delay={0.5 + index * 0.1}
											className='hover:border-primary flex items-center gap-4 border-2 border-zinc-200 bg-white p-3 transition-colors'>
											<div
												className={cn(
													'flex items-center justify-center',
													ability.whiteBg && 'rounded-full bg-zinc-100 p-1'
												)}>
												<Icon
													icon={ability.icon}
													className={cn('h-8 w-8', ability.whiteBg ? 'text-black' : 'text-primary')}
												/>
											</div>
											<div>
												<h4 className='font-[Bangers] text-xl tracking-wide text-black uppercase'>{ability.name}</h4>
												{ability.category && (
													<p className='font-[Inter] text-xs font-bold tracking-wider text-zinc-500 uppercase'>
														{ability.category}
													</p>
												)}
											</div>
										</ComicPop>
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
							<h2 className='font-[Bangers] text-3xl tracking-wider uppercase md:text-5xl'>MEANWHILE...</h2>
						</div>
						<p className='text-muted-foreground font-[Bangers] text-xl tracking-wide uppercase'>
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
