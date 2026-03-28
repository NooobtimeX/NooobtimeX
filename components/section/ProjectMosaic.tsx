'use client'

import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { issuesData } from '@/common/data/issue'
import ComicPop from '@/components/motion/ComicPop'

// Top 3 most recent + "View All" card
const featured = issuesData.slice(0, 3)

export default function ProjectMosaic() {
	return (
		<section className='relative bg-black py-20'>
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-15' />

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				<ComicPop className='mb-12 text-center'>
					<div className='inline-block rotate-1 border-4 border-black bg-white px-8 py-3 shadow-[6px_6px_0px_0px_hsl(355,85%,60%)]'>
						<h2 className='text-3xl font-black tracking-wider text-black uppercase md:text-5xl'>FEATURED ISSUES</h2>
					</div>
				</ComicPop>

				{/* 3-column mosaic + view-all */}
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
					{featured.map((project, i) => {
						const isStar = i === 0
						return (
							<motion.div
								key={project.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.1 }}
								className={`group relative overflow-hidden border-4 border-white bg-zinc-950 shadow-[6px_6px_0px_0px_white] transition-all hover:shadow-[8px_8px_0px_0px_hsl(355,85%,60%)] ${
									isStar ? 'lg:col-span-2 lg:flex lg:flex-row' : ''
								}`}>
								{/* Banner */}
								<div
									className={`relative overflow-hidden border-b-4 border-white lg:border-b-0 ${
										isStar ? 'aspect-video lg:aspect-auto lg:w-1/2 lg:border-r-4' : 'aspect-video'
									}`}>
									<Image
										src={project.images.banner}
										alt={project.title}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-105'
									/>
									{/* Issue number badge */}
									<div className='bg-primary absolute top-3 left-3 px-2 py-0.5 text-[10px] font-black tracking-widest text-white uppercase'>
										{isStar ? 'STAR ISSUE' : `ISSUE #${String(i + 1).padStart(2, '0')}`}
									</div>
								</div>

								{/* Content */}
								<div className={`flex flex-col justify-center p-5 ${isStar ? 'lg:w-1/2 lg:p-8' : ''}`}>
									<h3
										className={`mb-2 line-clamp-1 font-black text-white uppercase ${
											isStar ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'
										}`}>
										{project.title}
									</h3>
									<p
										className={`mb-4 line-clamp-3 leading-relaxed text-zinc-500 ${
											isStar ? 'text-sm md:text-base' : 'text-xs'
										}`}>
										{project.description}
									</p>

									{/* Ability chips */}
									<div className='mb-6 flex flex-wrap gap-1'>
										{project.abilities.slice(0, isStar ? 8 : 4).map(a => (
											<span
												key={a.name}
												className='flex items-center gap-0.5 border border-zinc-800 px-1.5 py-0.5 text-[9px] font-bold text-zinc-500 uppercase'>
												<Icon icon={a.icon} className='text-primary h-2.5 w-2.5' />
												{a.name}
											</span>
										))}
										{project.abilities.length > (isStar ? 8 : 4) && (
											<span className='border border-zinc-800 px-1.5 py-0.5 text-[9px] font-bold text-zinc-600 uppercase'>
												+{project.abilities.length - (isStar ? 8 : 4)}
											</span>
										)}
									</div>

									<Link
										href={`/issue/${project.id}` as Route}
										className={`comic-button inline-flex items-center gap-2 self-start border-2 border-white bg-transparent font-black tracking-widest text-white uppercase transition-all hover:bg-white hover:text-black ${
											isStar ? 'px-6 py-2.5 text-xs shadow-[4px_4px_0px_0px_white]' : 'px-3 py-1.5 text-[10px]'
										}`}>
										READ CASE STUDY
										<Icon icon='material-symbols:arrow-forward' className='h-3.5 w-3.5' />
									</Link>
								</div>
							</motion.div>
						)
					})}
				</div>

				{/* View All CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.35 }}
					className='mt-8 flex justify-center'>
					<Link
						href='/issue'
						className='comic-button inline-flex items-center gap-2 border-4 border-white bg-transparent px-10 py-4 text-sm font-black tracking-widest text-white uppercase shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-black hover:shadow-[2px_2px_0px_0px_white]'>
						VIEW ALL {issuesData.length} ISSUES
						<Icon icon='material-symbols:arrow-forward' className='h-4 w-4' />
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
