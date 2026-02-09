'use client'

import React from 'react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { ArrowLeftIcon, CalendarIcon, MapPinIcon } from 'lucide-react'
import AffiliationCard from '@/components/affiliation/AffiliationCard'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'
import { formatAffiliationDuration } from '@/lib/utils'
import { affiliationData } from '@/data/affiliationData'

interface AffiliationDetailContentProps {
	id: string
}

const AffiliationDetailContent: React.FC<AffiliationDetailContentProps> = ({ id }) => {
	const affiliationItem = affiliationData.find(a => a.id === id)

	if (!affiliationItem) {
		notFound()
	}

	const { affiliation, position, description, abilities, startDate, endDate, type } = affiliationItem

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
							<Link href='/affiliation' className='flex items-center gap-2'>
								<ArrowLeftIcon className='h-5 w-5' />
								BACK TO LOGS
							</Link>
						</Button>
					</ComicPop>
				</div>
			</section>

			{/* Hero Section */}
			<section className='relative mb-16'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='grid items-start gap-12 lg:grid-cols-2'>
						{/* Left Column - Entity Logo/Panel */}
						<ComicPop
							initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
							animate={{ opacity: 1, scale: 1, rotate: -1 }}
							className='group perspective-1000 relative'>
							<div className='relative flex aspect-video items-center justify-center border-4 border-white bg-white p-12 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 hover:rotate-0 hover:shadow-[8px_8px_0px_0px_rgba(255,50,50,1)]'>
								{/* Badge */}
								<div className='bg-primary absolute top-0 right-0 z-20 border-b-4 border-l-4 border-black px-4 py-2 font-[Bangers] text-xl text-white'>
									{type.toUpperCase()}
								</div>

								<div className='relative h-full w-full'>
									{affiliation.logo ?
										<Image src={affiliation.logo} alt={affiliation.name} fill className='object-contain' />
									:	<div className='flex h-full w-full items-center justify-center text-center font-[Bangers] text-5xl text-black opacity-30'>
											{affiliation.name}
										</div>
									}
								</div>
							</div>
						</ComicPop>

						{/* Right Column - Affiliation Info */}
						<ComicPop initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} delay={0.2} className='space-y-8'>
							<div className='bg-card relative space-y-6 border-4 border-white p-8 shadow-[8px_8px_0px_0px_white]'>
								<div className='bg-primary absolute -top-3 -left-3 z-20 h-6 w-6 rotate-45 transform border-2 border-black'></div>

								<div className='space-y-2'>
									<h2 className='text-primary font-[Bangers] text-2xl tracking-widest uppercase'>{affiliation.name}</h2>
									<h1 className='font-[Bangers] text-5xl leading-[0.9] tracking-wide break-words text-white uppercase md:text-6xl'>
										{position}
									</h1>
								</div>

								<div className='h-1 w-full bg-white/20'></div>

								<div className='flex flex-wrap gap-6 font-[Inter] text-zinc-400'>
									<div className='flex items-center gap-2'>
										<CalendarIcon className='text-primary h-5 w-5' />
										<span className='text-lg'>{formatAffiliationDuration(startDate, endDate)}</span>
									</div>
									{affiliation.location && (
										<div className='flex items-center gap-2'>
											<MapPinIcon className='text-primary h-5 w-5' />
											<span className='text-lg'>{affiliation.location}</span>
										</div>
									)}
								</div>

								<p className='text-muted-foreground font-[Inter] text-xl leading-relaxed'>{description}</p>

								{affiliation.url && (
									<div className='pt-4'>
										<Button
											asChild
											size='lg'
											className='comic-button bg-primary h-14 border-2 border-white px-8 text-xl text-white shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]'>
											<Link
												href={affiliation.url as Route}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-2'>
												<Icon icon='material-symbols:link' className='h-6 w-6' />
												VISIT WEBSITE
											</Link>
										</Button>
									</div>
								)}
							</div>
						</ComicPop>
					</div>
				</div>
			</section>

			{/* Abilities Section */}
			<section className='relative mb-20'>
				<div className='relative z-10 container mx-auto px-4'>
					<ComicPop
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						delay={0.3}
						className='bg-card border-4 border-white p-8 shadow-[8px_8px_0px_0px_white]'>
						<h2 className='border-primary mb-8 inline-block border-b-4 pb-2 font-[Bangers] text-4xl tracking-wide text-white uppercase'>
							MISSION ABILITIES
						</h2>

						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
							{abilities.map((ability, index) => (
								<ComicPop
									key={index}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									delay={0.4 + index * 0.05}
									className='hover:border-primary hover:bg-primary/10 group flex items-center gap-4 border-2 border-white/10 bg-black p-4 transition-colors'>
									<div className='group-hover:border-primary border-2 border-white/20 p-2 transition-colors'>
										<Icon icon={ability.icon} className='text-primary h-8 w-8' />
									</div>
									<div>
										<h4 className='font-[Bangers] text-xl tracking-wide text-white uppercase'>{ability.name}</h4>
										{ability.category && (
											<p className='text-muted-foreground font-[Inter] text-xs font-bold tracking-wider uppercase'>
												{ability.category}
											</p>
										)}
									</div>
								</ComicPop>
							))}
						</div>
					</ComicPop>
				</div>
			</section>

			{/* Related Affiliations */}
			<section className='relative pb-20'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='my-16 border-t-4 border-white opacity-50'></div>

					<ComicPop className='mb-12 text-center'>
						<div className='mb-8 inline-block rotate-1 transform border-4 border-black bg-white px-8 py-3 text-black shadow-[8px_8px_0px_0px_white]'>
							<h2 className='font-[Bangers] text-3xl tracking-wider uppercase md:text-5xl'>MEANWHILE...</h2>
						</div>
						<p className='text-muted-foreground font-[Bangers] text-xl tracking-wide uppercase'>
							Discover other branches of my journey
						</p>
					</ComicPop>

					<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						{affiliationData
							.filter(a => a.id !== affiliationItem.id)
							.slice(0, 3)
							.map((relatedItem, index) => (
								<AffiliationCard key={relatedItem.id} item={relatedItem} index={index} />
							))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default AffiliationDetailContent
