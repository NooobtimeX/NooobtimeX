'use client'

import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { jasmineTechnologySolutionAffiliation } from '@/common/data/affiliation/developer-jasmine-technology-solution-work'
import { ruamsukPlatingSoftwareEngineerFullTime } from '@/common/data/affiliation/software-engineer-ruamsuk-plating-full-time'
import { ruamsukPlatingSoftwareEngineerPartTime } from '@/common/data/affiliation/software-engineer-ruamsuk-plating-part-time'
import { issuesData } from '@/common/data/issue'
import { AffiliationEntityType } from '@/common/enum'
import type { AffiliationItem } from '@/common/interface'
import ComicPop from '@/components/motion/ComicPop'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatAffiliationDuration, isCurrentPosition } from '@/lib/utils'

export default function AffiliationPreview() {
	const displayedAffiliations: AffiliationItem[] = [
		ruamsukPlatingSoftwareEngineerPartTime,
		ruamsukPlatingSoftwareEngineerFullTime,
		jasmineTechnologySolutionAffiliation
	].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

	return (
		<section id='affiliation' className='relative overflow-hidden bg-black py-20'>
			{/* Background elements */}
			<div className='bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] pointer-events-none absolute inset-0 opacity-20'></div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Header */}
				<ComicPop className='mb-20 text-center'>
					<div className='relative inline-block'>
						<div className='-rotate-1 transform border-4 border-black bg-white px-10 py-4 text-black shadow-[8px_8px_0px_0px_white]'>
							<h2 className='font-[Bangers] text-4xl tracking-wider uppercase md:text-6xl'>CURRENT MISSION</h2>
						</div>
					</div>
				</ComicPop>

				{/* Affiliations */}
				<div className='mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2'>
					{displayedAffiliations.map((affiliation, index) => (
						<ComicPop key={affiliation.id} delay={index * 0.2} className='relative flex flex-col'>
							{/* Company/Affiliation Info Panel */}
							<div className='z-20 mb-6 self-start'>
								<div className='inline-block border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(255,50,50,1)] transition-transform hover:scale-105'>
									<div className='flex items-center gap-4'>
										{affiliation.affiliation.logo && (
											<Image
												src={affiliation.affiliation.logo}
												alt={`${affiliation.affiliation.name} logo`}
												width={60}
												height={60}
												className='rounded-none border-2 border-black'
											/>
										)}
										<div>
											<h3 className='font-[Bangers] text-2xl tracking-wide text-black uppercase'>
												{affiliation.affiliation.name}
											</h3>
											{affiliation.affiliation.type === AffiliationEntityType.Company && (
												<Badge
													variant='outline'
													className='gap-1 rounded-none border-black px-2 font-[Inter] text-xs text-black'>
													<Icon icon='material-symbols:location-on' />
													{affiliation.affiliation.location}
												</Badge>
											)}
										</div>
									</div>
								</div>
							</div>

							{/* Role Details Panel */}
							<div className='relative flex-grow'>
								<div className='bg-card relative h-full border-4 border-white p-6 shadow-[8px_8px_0px_0px_white]'>
									<div className='absolute -top-3 -right-3 z-20 h-6 w-6 rotate-45 transform border-2 border-black bg-white'></div>
									<div className='bg-primary absolute -bottom-3 -left-3 z-20 h-6 w-6 rotate-45 transform border-2 border-black'></div>

									<div className='mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 border-white/20 pb-4'>
										<h4 className='font-[Bangers] text-xl tracking-wide text-white uppercase md:text-2xl'>
											{affiliation.position}
										</h4>

										{isCurrentPosition(affiliation.endDate) && (
											<Badge className='bg-primary animate-pulse rounded-none border-2 border-white font-[Bangers] tracking-widest text-white'>
												ACTIVE MISSION
											</Badge>
										)}
									</div>

									<div className='mb-4 flex items-center gap-2 font-[Inter] text-sm text-gray-300'>
										<Icon icon='material-symbols:calendar-month' className='text-primary h-4 w-4' />
										<span className='font-bold'>
											{formatAffiliationDuration(affiliation.startDate, affiliation.endDate)}
										</span>
										<span className='text-zinc-500'>|</span>
										<span className='text-xs font-bold tracking-wider uppercase'>{affiliation.type}</span>
									</div>

									<p className='mb-6 line-clamp-2 font-[Inter] text-sm text-gray-400'>{affiliation.description}</p>

									{/* Ability Stack */}
									<div className='mb-6 flex flex-wrap gap-2'>
										{(() => {
											const projectAbilities = issuesData
												.filter(issue => issue.linkedAffiliationId === affiliation.id)
												.flatMap(issue => issue.abilities)

											const uniqueAbilities = Array.from(new Map(projectAbilities.map(a => [a.name, a])).values())

											return uniqueAbilities.map((ability, abilityIndex) => (
												<Badge
													key={abilityIndex}
													variant='outline'
													className='flex items-center gap-1 rounded-none border-white/40 text-[10px] font-bold text-white/80 uppercase transition-colors hover:bg-white hover:text-black'>
													<Icon icon={ability.icon} className='h-3 w-3' />
													{ability.name}
												</Badge>
											))
										})()}
									</div>

									<div className='mt-auto'>
										<Button
											asChild
											size='sm'
											className='comic-button-sm bg-primary w-full border-2 border-white font-[Bangers] tracking-wider text-white transition-all hover:bg-white hover:text-black md:w-auto'>
											<Link href={`/affiliation/${affiliation.id}` as Route}>MISSION BRIEF</Link>
										</Button>
									</div>
								</div>
							</div>
						</ComicPop>
					))}
				</div>

				{/* Footer Button for Preview */}
				<div className='mt-12 flex justify-center'>
					<Button
						asChild
						className='border-4 border-white bg-transparent px-10 py-6 font-[Bangers] text-xl text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:bg-white hover:text-black'>
						<Link href='/affiliation'>VIEW CAREER HISTORY</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
