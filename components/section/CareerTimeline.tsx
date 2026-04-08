'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { workExperienceData } from '@/common/data/affiliation'
import ComicPop from '@/components/motion/ComicPop'
import { formatAffiliationDuration } from '@/lib/utils'

// Sort oldest → newest for a left-to-right timeline (work only)
const timelineItems = [...workExperienceData].sort(
	(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
)

export default function CareerTimeline() {
	return (
		<section className='relative overflow-hidden bg-zinc-950 py-20'>
			{/* Background accent */}
			<div className='pointer-events-none absolute inset-0'>
				<div className='absolute top-0 left-0 h-px w-full bg-white/10' />
				<div className='absolute bottom-0 left-0 h-px w-full bg-white/10' />
			</div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				<ComicPop className='mb-14 text-center'>
					<div className='silk-section-label'>
						<h2 className='silk-section-label-text'>CAREER TIMELINE</h2>
					</div>
				</ComicPop>

				{/* Horizontal scroll on mobile, grid on desktop */}
				<div className='relative'>
					{/* Connecting line */}
					<div className='absolute top-[52px] left-0 hidden h-1 w-full bg-white/20 md:block'>
						<div className='bg-primary h-full w-full animate-[pulse_3s_ease-in-out_infinite] opacity-40' />
					</div>

					<div className='flex flex-col gap-6 md:grid md:grid-cols-7 md:gap-4'>
						{timelineItems.map((item, i) => {
							const isCurrent = !item.endDate
							return (
								<motion.div
									key={item.id}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: i * 0.08 }}
									className='relative flex flex-row gap-4 md:flex-col md:gap-0'>
									{/* Dot on timeline */}
									<div className='relative md:mb-4 md:flex md:justify-center'>
										<div
											className={`relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center border-4 border-white shadow-[3px_3px_0px_0px_white] ${
												isCurrent ? 'bg-primary' : 'bg-black'
											}`}>
											{item.affiliation.logo ?
												<Image
													src={item.affiliation.logo}
													alt={item.affiliation.name}
													width={28}
													height={28}
													className='object-contain p-0.5'
												/>
											:	<Icon icon='material-symbols:work' className='h-5 w-5 text-white' />}
											{isCurrent && (
												<span className='bg-primary absolute -top-1 -right-1 h-2.5 w-2.5 animate-ping rounded-full' />
											)}
										</div>
									</div>

									{/* Card */}
									<Link
										href={`/affiliation/${item.id}`}
										className={`group hover:border-primary flex-1 border-4 p-3 transition-all hover:shadow-[4px_4px_0px_0px_hsl(355,85%,60%)] ${
											isCurrent ?
												'border-primary bg-primary/10 shadow-[4px_4px_0px_0px_hsl(355,85%,60%)]'
											:	'border-zinc-800 bg-zinc-900/60'
										}`}>
										{isCurrent && (
											<span className='text-primary mb-1 block text-[8px] font-black tracking-[0.3em] uppercase'>
												ACTIVE
											</span>
										)}
										<p className='mb-0.5 text-[10px] leading-tight font-black text-white uppercase'>{item.position}</p>
										<p className='mb-1 line-clamp-1 text-[9px] text-zinc-500 uppercase'>{item.affiliation.name}</p>
										<p className='text-[8px] font-bold text-zinc-600 uppercase'>
											{formatAffiliationDuration(item.startDate, item.endDate)}
										</p>
									</Link>
								</motion.div>
							)
						})}
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className='mt-10 flex justify-center'>
					<Link href='/affiliation' className='silk-button-tactical-outline px-10 py-4 text-sm'>
						FULL CAREER HISTORY
						<Icon icon='material-symbols:arrow-forward' className='h-4 w-4' />
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
