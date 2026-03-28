'use client'

import React, { useEffect, useState } from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { personalData } from '@/common/data/personal'
import ComicPop from '@/components/motion/ComicPop'

export default function BentoShowcase() {
	const [currentTime, setCurrentTime] = useState<string>('')

	useEffect(() => {
		const updateTime = () => {
			const time = new Date().toLocaleTimeString('en-US', {
				timeZone: 'Asia/Bangkok',
				hour12: true,
				hour: '2-digit',
				minute: '2-digit'
			})
			setCurrentTime(time)
		}
		updateTime()
		const timer = setInterval(updateTime, 60000)
		return () => clearInterval(timer)
	}, [])

	return (
		<section className='relative bg-black py-20'>
			{/* Subtle halftone bg */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20' />

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Section Label */}
				<ComicPop className='mb-12 text-center'>
					<div className='inline-block -rotate-1 border-4 border-black bg-white px-8 py-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]'>
						<h2 className='text-3xl font-black tracking-wider text-black uppercase md:text-5xl'>COMMAND CENTER</h2>
					</div>
				</ComicPop>

				{/* ——— BENTO GRID ——— */}
				<div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[auto_auto] lg:gap-6'>
					{/* ═══ BLOCK 1 (GIANT): THE NARRATIVE (Slide Deck CTA) ═══ */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className='group hover:bg-primary relative col-span-1 flex flex-col justify-between overflow-hidden border-4 border-white bg-zinc-950 p-8 shadow-[8px_8px_0px_0px_rgb(255,255,255)] transition-all hover:shadow-[12px_12px_0px_0px_hsl(355,85%,60%)] md:col-span-2 md:row-span-2'>
						{/* Background Burst */}
						<div className='comic-burst pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-40' />
						<div className='comic-web-pattern pointer-events-none absolute inset-0 opacity-10 group-hover:opacity-20' />

						<div className='relative z-10'>
							<div className='mb-4 inline-block bg-white px-3 py-1 text-[10px] font-black tracking-[0.4em] text-black uppercase group-hover:bg-black group-hover:text-white'>
								FEATURED EXPERIENCE
							</div>
							<h3 className='mb-4 text-4xl leading-none font-black text-white uppercase md:text-6xl'>
								THE FULL <br /> NARRATIVE
							</h3>
							<p className='max-w-md text-sm leading-relaxed font-bold text-zinc-500 transition-colors group-hover:text-white/80 md:text-lg'>
								Enter an interactive journey from my first line of university code to architecting microservices at
								scale.
							</p>
						</div>

						<div className='relative z-10 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center'>
							<Link
								href={'/cv/presentation' as Route}
								className='comic-button inline-flex items-center justify-center gap-3 border-4 border-white bg-white px-8 py-4 text-lg font-black tracking-widest text-black uppercase shadow-[6px_6px_0px_0px_hsl(355,85%,60%)] transition-all group-hover:bg-black group-hover:text-white group-hover:shadow-[6px_6px_0px_0px_white]'>
								<Icon icon='material-symbols:slideshow' className='h-6 w-6' />
								START SLIDE DECK
							</Link>
							<div className='text-[10px] font-black tracking-widest text-zinc-600 uppercase group-hover:text-white/60'>
								Acts I – IV • Est. 10 Min
							</div>
						</div>
					</motion.div>

					{/* ═══ BLOCK 2: LIVE PULSE / STATUS ═══ */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
						className='relative border-4 border-white bg-black p-6 shadow-[8px_8px_0px_0px_hsl(355,85%,60%)] transition-all hover:scale-[1.02]'>
						<p className='mb-6 text-[10px] font-black tracking-[0.35em] text-zinc-500 uppercase'>LIVE PULSE</p>

						<div className='mb-8 space-y-4'>
							<div className='flex items-center justify-between border-b border-white/10 pb-3'>
								<span className='text-[10px] font-black text-zinc-600 uppercase'>Location</span>
								<span className='text-[11px] font-black text-white uppercase'>Nonthaburi, TH</span>
							</div>
							<div className='flex items-center justify-between border-b border-white/10 pb-3'>
								<span className='text-[10px] font-black text-zinc-600 uppercase'>Local Time</span>
								<span className='text-primary text-sm font-black uppercase tabular-nums'>{currentTime}</span>
							</div>
							<div className='flex items-center justify-between'>
								<span className='text-[10px] font-black text-zinc-600 uppercase'>Status</span>
								<div className='flex items-center gap-2'>
									<span className='h-2 w-2 animate-pulse rounded-full bg-green-500' />
									<span className='text-[10px] font-black text-white uppercase'>Available</span>
								</div>
							</div>
						</div>

						<div className='border-2 border-dashed border-zinc-800 bg-zinc-900/50 p-4'>
							<p className='mb-1 text-[9px] font-black text-zinc-600 uppercase'>Currently Mastering</p>
							<p className='text-[11px] font-black text-zinc-300 uppercase'>Next.js 15 & Bun Ecosystem</p>
						</div>
					</motion.div>

					{/* ═══ BLOCK 3: SOCIAL COMMAND ═══ */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.2 }}
						className='relative border-4 border-white bg-black p-6 shadow-[8px_8px_0px_0px_rgb(255,255,255)] transition-all hover:scale-[1.02]'>
						<p className='mb-6 text-[10px] font-black tracking-[0.35em] text-zinc-500 uppercase'>SOCIAL SIGNAL</p>

						<div className='grid grid-cols-2 gap-3'>
							{personalData.socialLinks.map(social => (
								<a
									key={social.platform}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className='group hover:border-primary hover:bg-primary/10 flex flex-col items-center gap-2 border-2 border-zinc-800 bg-zinc-950 p-4 transition-all'>
									<social.icon className='group-hover:text-primary h-6 w-6 text-zinc-600 transition-colors' />
									<span className='text-[9px] font-black text-zinc-700 uppercase group-hover:text-white'>
										{social.platform}
									</span>
								</a>
							))}
							<Link
								href={`mailto:${personalData.contact.email}` as Route}
								className='group col-span-2 flex items-center justify-center gap-2 border-2 border-white bg-zinc-950 p-3 transition-all hover:bg-white hover:text-black'>
								<Icon icon='material-symbols:mail' className='h-4 w-4' />
								<span className='text-[10px] font-black uppercase'>Get Response</span>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
