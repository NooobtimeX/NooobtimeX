'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { getDynamicAbilities } from '@/common/data/ability/dynamicAbilities'
import ComicPop from '@/components/motion/ComicPop'
import { AbilityCard } from '@/components/ui/ability-card'
import { cn } from '@/lib/utils'

const AbilityContent: React.FC = () => {
	const abilitiesData = getDynamicAbilities()

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
				{/* Hero Section */}
				<ComicPop
					initial={{ opacity: 0, scale: 0.8, y: -50 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					className='relative mb-24 text-center'>
					<div className='silk-hero-badge'>
						<h1 className='silk-hero-badge-text'>ABILITIES</h1>
					</div>

					<p className='mx-auto mt-8 max-w-3xl text-2xl font-black tracking-wide text-white uppercase text-shadow-sm'>
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
								className='relative z-10 w-full shrink-0 md:w-1/3'>
								<div className='silk-panel p-8'>
									{/* Floating Badge */}
									<div className='silk-diamond-container'>
										<Icon icon={abilityGroup.icon} className='h-8 w-8 -rotate-45 text-white' />
									</div>

									<div className='mt-8 space-y-4 text-center'>
										<h2 className='text-4xl leading-none font-black tracking-wide text-white uppercase md:text-5xl'>
											{abilityGroup.category}
										</h2>

										{/* Separation Line */}
										<div className='via-primary my-4 h-1 w-full bg-linear-to-r from-transparent to-transparent'></div>

										<p className='font-sans text-sm leading-relaxed text-gray-300 md:text-base'>
											{abilityGroup.description}
										</p>
									</div>
								</div>
							</ComicPop>

							{/* Abilities Grid - "Masonry" feel */}
							<div className='w-full md:w-2/3'>
								<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6'>
									{abilityGroup.abilities.map((ability, idx) => (
										<AbilityCard
											key={ability.name}
											index={idx}
											name={ability.name}
											icon={ability.icon}
											level={ability.level}
											category={ability.category}
											whiteBg={ability.whiteBg}
										/>
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
						<div className='silk-button-tactical-primary'>
							<span className='text-2xl font-black tracking-widest'>
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
