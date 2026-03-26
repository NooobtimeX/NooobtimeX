'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { personalData } from '@/common/data/personal'
import ComicSeparator from '@/components/ComicSeparator'
import ComicPop from '@/components/motion/ComicPop'
import AbilityPreview from '@/components/section/AbilityPreview'
import AffiliationPreview from '@/components/section/AffiliationPreview'
import IssuePreview from '@/components/section/IssuePreview'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const HomeContent: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start start', 'end start']
	})

	const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
	const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	return (
		<div ref={containerRef} className='relative min-h-screen w-full overflow-hidden bg-black'>
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

			{/* HERO SECTION - SPLASH PAGE */}
			<section className='relative z-10 flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-4 py-20'>
				{/* Comic Burst Background specifically for Hero */}
				<div className='comic-burst absolute inset-0 z-[-1] opacity-30'></div>

				<div className='relative container mx-auto max-w-7xl'>
					<motion.div
						style={{ y: heroY, opacity: heroOpacity }}
						className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
						{/* LEFT: IMPACT TEXT */}
						<div className='relative z-20 order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left'>
							{/* Speech Bubble / Intro */}
							<ComicPop delay={0.2} className='relative mb-6 hidden self-start lg:block'>
								<div className='rounded-[50%_20%_60%_30%] border-4 border-black bg-white px-6 py-3 text-xl font-black text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
									THE NEW HERO IN TECH!
								</div>
								<div className='absolute -bottom-2 left-6 h-4 w-4 rotate-45 transform border-r-4 border-b-4 border-black bg-white'></div>
							</ComicPop>

							{/* Main Title Stack */}
							<div className='mb-10 lg:pl-4'>
								<ComicPop
									initial={{ x: -100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									triggerOnce={true}
									className='mb-2 stroke-black text-4xl font-black tracking-wider text-white md:text-5xl'
									style={{ textShadow: '4px 4px 0px #000' }}>
									HELLO, I&apos;M
								</ComicPop>
								<div className='relative mb-4'>
									<ComicPop
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										delay={0.1}
										className='text-primary text-6xl leading-none font-black tracking-tighter drop-shadow-[5px_5px_0px_rgba(255,255,255,1)] md:text-[7rem]'>
										{personalData.name.split(' ')[0]}
									</ComicPop>
								</div>
								<ComicPop
									initial={{ x: 100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									delay={0.2}
									className='relative inline-block rotate-1 transform bg-white'>
									<div className='relative'>
										<span className='block border-4 border-black px-6 py-2 text-3xl font-black text-black md:text-5xl'>
											{personalData.title}
										</span>
										{/* Est. Tag */}
										<div className='bg-primary absolute -top-4 -right-4 -rotate-3 border-2 border-black px-3 py-1 text-xs font-black tracking-widest text-white shadow-[2px_2px_0px_0px_white]'>
											EST. 2003
										</div>
									</div>
								</ComicPop>
							</div>

							<ComicPop
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								delay={0.4}
								className='border-primary mb-10 max-w-xl border-l-4 bg-black/60 p-6 text-lg leading-relaxed text-gray-200 backdrop-blur-md md:text-xl'>
								{personalData.tagline}
							</ComicPop>

							{/* Action Buttons */}
							<ComicPop delay={0.6} className='flex w-full flex-col gap-6 sm:w-auto sm:flex-row'>
								<Button
									asChild
									size='lg'
									className='comic-button bg-primary h-16 border-2 border-white px-10 text-xl text-white shadow-[6px_6px_0px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_white]'>
									<Link href='/issue'>EXPLORE ISSUES</Link>
								</Button>
								<Button
									asChild
									size='lg'
									className='comic-button h-16 border-2 border-white bg-white px-10 text-xl text-black shadow-[6px_6px_0px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_white]'>
									<Link href='/cv'>DOWNLOAD CV</Link>
								</Button>
								<Button
									asChild
									size='lg'
									className='comic-button h-16 border-2 border-white bg-transparent px-10 text-xl text-white shadow-[6px_6px_0px_0px_white] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-white hover:text-black hover:shadow-[3px_3px_0px_0px_white]'>
									<Link href='https://github.com/NooobtimeX'>GITHUB BASE</Link>
								</Button>
							</ComicPop>
						</div>

						{/* RIGHT: HERO AVATAR */}
						<ComicPop
							initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
							animate={{ scale: 1, opacity: 1, rotate: 0 }}
							className='relative order-1 flex justify-center lg:order-2 lg:justify-end xl:pr-10'>
							<div className='relative h-80 w-80 md:h-[500px] md:w-[500px]'>
								{/* Back panels */}
								<div className='absolute inset-0 z-0 rotate-3 transform rounded-sm border-4 border-black bg-white shadow-[15px_15px_0px_0px_rgba(255,50,50,0.6)]'></div>
								<div className='absolute inset-0 z-10 -rotate-2 transform overflow-hidden rounded-sm border-4 border-white bg-black'>
									<div className='comic-halftone absolute inset-0 opacity-40'></div>
									<Avatar className='h-full w-full rounded-none'>
										<AvatarImage
											src={personalData.avatar}
											alt={personalData.name}
											className='scale-110 object-cover transition-transform duration-700 hover:scale-100'
										/>
										<AvatarFallback className='bg-card text-primary text-9xl font-black'>
											{personalData.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</div>

								{/* Level Badge (Age) - Repositioned to Portrait */}
								<div className='bg-primary absolute -top-10 -right-10 z-30 flex h-24 w-24 -rotate-12 items-center justify-center rounded-full border-4 border-black text-white shadow-[4px_4px_0px_0px_white] md:-top-16 md:-right-16 md:h-32 md:w-32'>
									<div className='text-center'>
										<div className='text-xs font-black uppercase md:text-sm'>LEVEL</div>
										<div className='text-3xl font-black md:text-5xl'>
											{Math.floor(
												(new Date().getTime() - new Date(personalData.birthDate).getTime())
													/ (1000 * 60 * 60 * 24 * 365.25)
											)}
										</div>
									</div>
								</div>

								{/* Corner Badge */}
								<div className='bg-primary absolute -bottom-6 -left-6 z-20 -rotate-6 transform border-4 border-black px-6 py-2 text-3xl font-black text-white shadow-[4px_4px_0px_0px_white]'>
									Kwan
								</div>
							</div>
						</ComicPop>
					</motion.div>
				</div>
			</section>

			<ComicSeparator />
			<AbilityPreview />
			<ComicSeparator />
			<IssuePreview />
			<ComicSeparator />
			<AffiliationPreview />
		</div>
	)
}

export default HomeContent
