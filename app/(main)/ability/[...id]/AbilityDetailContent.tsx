'use client'

import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'
import type { Ability } from '@/common'
import { issuesData } from '@/common'

interface AbilityDetailContentProps {
	ability: Ability
}

export default function AbilityDetailContent({ ability }: AbilityDetailContentProps) {
	// Filter projects that use this specific ability
	const relatedProjects = issuesData.filter(issue => issue.abilities.some(a => a.name === ability.name))

	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-28 pb-24'>
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
						<Link href={'/ability' as Route} className='hover:text-primary transition-colors'>
							ABILITIES
						</Link>
						<Icon icon='material-symbols:chevron-right' className='h-3 w-3' />
						<span className='text-white'>{ability.name}</span>
					</nav>
				</div>

				{/* Hero Section (Hero Hub DNA) */}
				<section className='mb-20 grid gap-12 lg:grid-cols-[1.2fr_1fr]'>
					<ComicPop initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
						<div className='silk-banner'>
							<div className='flex aspect-video items-center justify-center overflow-hidden bg-zinc-900'>
								<Icon icon={ability.icon} className='absolute h-48 w-48 text-white/10' />
								<div className='relative z-10 flex h-32 w-32 rotate-3 items-center justify-center border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'>
									<Icon icon={ability.icon} className='h-20 w-20 text-black' />
								</div>
							</div>
							<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>
						</div>
					</ComicPop>

					<div className='flex flex-col justify-center gap-6'>
						<ComicPop delay={0.2}>
							<div className='silk-badge mb-6'>
								<h1 className='silk-badge-text text-3xl md:text-5xl'>{ability.name}</h1>
							</div>

							<div className='mb-8 flex flex-wrap gap-3'>
								<div className='silk-tag-primary font-black uppercase'>{ability.category}</div>
								<div className='silk-tag-white'>LEVEL: {ability.level}</div>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center gap-4'>
									<div className='silk-marker-vertical'></div>
									<h2 className='text-2xl font-black text-white uppercase'>INTELLIGENCE BRIEF</h2>
								</div>
								<p className='max-w-xl text-xl leading-relaxed font-medium text-zinc-400 italic'>
									&quot;{ability.name} is a core component of my technical arsenal. Deployed across{' '}
									{relatedProjects.length} key projects to achieve high-performance results.&quot;
								</p>
							</div>
						</ComicPop>
					</div>
				</section>

				{/* Relational Data (Field Deployments) */}
				<section className='space-y-12'>
					<div className='silk-grid-header'>
						<div className='flex items-center gap-6'>
							<h3 className='silk-grid-header-title'>FIELD DEPLOYMENTS</h3>
						</div>
						<div className='mx-8 hidden h-px grow bg-zinc-800 opacity-30 md:block'></div>
						<span className='silk-grid-header-stats'>{relatedProjects.length} ACTIVE RECORDS</span>
					</div>

					{relatedProjects.length > 0 ?
						<div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
							{relatedProjects.map((project, idx) => (
								<IssueCard key={project.id} issue={project} index={idx} variant='grid' showAllAbilities={false} />
							))}
						</div>
					:	<div className='border-4 border-dashed border-zinc-800 p-20 text-center'>
							<Icon icon='material-symbols:search-off' className='mx-auto mb-4 h-16 w-16 text-zinc-700' />
							<p className='text-xl font-black text-zinc-600 uppercase'>NO DIRECT DEPLOYMENTS LOGGED</p>
						</div>
					}
				</section>

				{/* Footer Control */}
				<div className='mt-32 flex justify-center border-t border-zinc-900 pt-12'>
					<Link href={'/ability' as Route} className='silk-button-tactical'>
						<Icon icon='material-symbols:arrow-back' className='h-5 w-5' />
						BACK TO ARSENAL
					</Link>
				</div>
			</div>
		</div>
	)
}
