'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import ComicPop from '@/components/motion/ComicPop'
import { AbilityCard } from '@/components/ui/ability-card'
import { ComicPanel } from '@/components/ui/comic-panel'
import { cn } from '@/lib/utils'
import { abilitiesData } from '@/data/abilitiesData'

const AbilityContent: React.FC = () => {
	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-28 pb-24'>
			{/* Background Elements */}
			<div className='comic-halftone pointer-events-none fixed inset-0 z-0 opacity-15'></div>
			<div className='pointer-events-none fixed top-0 left-0 z-0 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black'></div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Hero Section */}
				<ComicPop
					initial={{ opacity: 0, scale: 0.8, y: -50 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					className='relative mb-24 text-center'>
					<div className='relative z-10 inline-block'>
						<div className='bg-primary absolute inset-0 translate-x-2 translate-y-2 skew-x-12'></div>
						<div className='relative skew-x-12 border-4 border-black bg-white px-10 py-6'>
							<h1 className='-skew-x-12 transform font-[Bangers] text-6xl tracking-wider text-black uppercase md:text-8xl'>
								ABILITIES
							</h1>
						</div>
					</div>

					<p className='mx-auto mt-8 max-w-3xl font-[Bangers] text-2xl tracking-wide text-white uppercase text-shadow-sm'>
						&quot;My comprehensive arsenal of technical skills and superpowers&quot;
					</p>
				</ComicPop>

				{/* Staggered Grid Layout */}
				<div className='flex flex-col gap-24'>
					{abilitiesData.map((abilityGroup, groupIndex) => (
						<div
							key={abilityGroup.category}
							className={cn(
								'flex flex-col items-start gap-8 md:flex-row md:gap-12',
								groupIndex % 2 !== 0 ? 'md:flex-row-reverse' : ''
							)}>
							{/* Category Info Panel */}
							<ComicPop
								initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -100 : 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								className='relative z-10 w-full flex-shrink-0 md:w-1/3'>
								<ComicPanel rotate={groupIndex % 2 === 0 ? -2 : 2} className='border-white bg-zinc-900 p-8'>
									{/* Floating Badge */}
									<div className='bg-primary absolute -top-6 left-1/2 flex h-16 w-16 -translate-x-1/2 rotate-45 items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
										<Icon icon={abilityGroup.icon} className='h-8 w-8 -rotate-45 text-white' />
									</div>

									<div className='mt-8 space-y-4 text-center'>
										<h2 className='font-[Bangers] text-4xl leading-none tracking-wide text-white uppercase md:text-5xl'>
											{abilityGroup.category}
										</h2>

										{/* Separation Line */}
										<div className='via-primary my-4 h-1 w-full bg-gradient-to-r from-transparent to-transparent'></div>

										<p className='font-sans text-sm leading-relaxed text-gray-300 md:text-base'>
											{abilityGroup.description}
										</p>
									</div>
								</ComicPanel>
							</ComicPop>

							{/* Abilities Grid - "Masonry" feel */}
							<div className='w-full md:w-2/3'>
								<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6'>
									{abilityGroup.abilities.map((ability, idx) => (
										<AbilityCard key={ability.name} index={idx} name={ability.name} icon={ability.icon} />
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Final CTA / Footer */}
				<div className='mt-32 mb-12 text-center'>
					<ComicPop
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						className='inline-block'>
						<div className='bg-primary rotate-1 border-4 border-white px-8 py-3 text-white transition-transform hover:-rotate-1'>
							<span className='font-[Bangers] text-2xl tracking-widest'>
								LVL {new Date().getFullYear() - 2020} || READY FOR ACTION
							</span>
						</div>
					</ComicPop>
				</div>
			</div>
		</div>
	)
}

export default AbilityContent
