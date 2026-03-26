'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getDynamicAbilities } from '@/common/data/ability/dynamicAbilities'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'

export default function AbilityPreview() {
	// Show top 12 abilities by frequency across all projects
	const allSortedAbilities = getDynamicAbilities().flatMap(group => group.abilities)
	const highlightedAbilities = allSortedAbilities.slice(0, 12)

	return (
		<section id='ability' className='relative bg-black py-20'>
			{/* Background Halftone Pattern */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>

			<div className='relative z-10 container mx-auto px-4'>
				{/* Header Section with Tape Effect */}
				<ComicPop className='relative mb-16 text-center'>
					<div className='inline-block -rotate-2 transform border-4 border-black bg-white px-8 py-4 text-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]'>
						<h2 className='text-4xl font-black tracking-wider uppercase md:text-6xl'>TOP ABILITIES</h2>
					</div>
					<div className='bg-primary/80 absolute -top-4 -left-4 z-[-1] h-12 w-12 rounded-full'></div>
				</ComicPop>

				{/* Abilities Grid */}
				<div className='mx-auto mb-12 grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
					{highlightedAbilities.map((ability, index) => (
						<ComicPop
							key={ability.name}
							delay={index * 0.1}
							whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
							className='bg-card group flex flex-col items-center gap-4 border-4 border-white p-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]'>
							<div className='bg-primary flex h-16 w-16 items-center justify-center rounded-full border-2 border-black text-white shadow-[2px_2px_0px_0px_black] transition-transform duration-300 group-hover:rotate-12'>
								<Icon icon={ability.icon} className='h-8 w-8' />
							</div>
							<div className='text-center'>
								<h3 className='mb-1 text-xl font-black tracking-wide text-white uppercase'>{ability.name}</h3>
								<div className='bg-primary mx-auto h-1 w-12'></div>
							</div>
						</ComicPop>
					))}
				</div>

				<div className='flex justify-center'>
					<Button
						asChild
						className='border-4 border-white bg-transparent px-10 py-6 text-xl font-black text-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:bg-white hover:text-black'>
						<Link href='/ability'>VIEW FULL ARSENAL</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}
