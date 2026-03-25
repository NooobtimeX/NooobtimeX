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
				<div className='bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_1px,transparent_1px)] absolute inset-0 bg-[length:24px_24px]'></div>
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
								<div className='rounded-[50%_20%_60%_30%] border-4 border-black bg-white px-6 py-3 font-[Bangers] text-xl text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'>
									THE NEW HERO IN TECH!
								</div>
								<div className='absolute -bottom-2 left-6 h-4 w-4 rotate-45 transform border-r-4 border-b-4 border-black bg-white'></div>
							</ComicPop>

							{/* Main Title Stack */}
							<div className='relativ mb-8 -rotate-2 transform space-y-2'>
								<ComicPop
									initial={{ x: -100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									triggerOnce={true}
									className='stroke-black font-[Bangers] text-4xl tracking-wider text-white md:text-6xl'
									style={{ textShadow: '4px 4px 0px #000' }}>
									HELLO, I&apos;M
								</ComicPop>
								<ComicPop
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									delay={0.1}
									className='text-primary font-[Bangers] text-7xl leading-[0.85] tracking-tight drop-shadow-[5px_5px_0px_rgba(255,255,255,1)] md:text-9xl'>
									{personalData.name.split(' ')[0]}
								</ComicPop>
								<ComicPop
									initial={{ x: 100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									delay={0.2}
									className='mt-2 inline-block rotate-2 transform bg-white'>
									<span className='block border-4 border-black px-4 py-1 font-[Bangers] text-3xl text-black md:text-5xl'>
										{personalData.title}
									</span>
								</ComicPop>
							</div>

							<ComicPop
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								delay={0.4}
								className='border-primary mb-8 max-w-xl border-l-4 bg-black/50 p-4 font-[Inter] text-lg leading-relaxed text-gray-300 backdrop-blur-sm md:text-xl'>
								{personalData.tagline}
							</ComicPop>

							{/* Action Buttons */}
							<ComicPop delay={0.6} className='flex w-full flex-col gap-4 sm:w-auto sm:flex-row'>
								<Button
									asChild
									size='lg'
									className='comic-button bg-primary h-14 border-2 border-white px-8 text-xl text-white shadow-[6px_6px_0px_0px_white] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_white]'>
									<Link href='/issue'>EXPLORE ISSUES</Link>
								</Button>
								<Button
									asChild
									variant='outline'
									size='lg'
									className='comic-button h-14 border-2 border-white bg-white px-8 text-xl text-black hover:bg-black hover:text-white'>
									<Link href='/cv'>DOWNLOAD CV</Link>
								</Button>
								<Button
									variant='outline'
									size='lg'
									className='comic-button h-14 border-2 border-white bg-transparent px-8 text-xl text-white hover:bg-white hover:text-black'>
									<Link href='https://github.com/NooobtimeX'>GITHUB BASE</Link>
								</Button>
							</ComicPop>
						</div>

						{/* RIGHT: HERO AVATAR */}
						<ComicPop
							initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
							animate={{ scale: 1, opacity: 1, rotate: 0 }}
							className='relative order-1 flex justify-center lg:order-2'>
							<div className='relative h-80 w-80 md:h-[450px] md:w-[450px]'>
								{/* Back panels */}
								<div className='absolute inset-0 z-0 rotate-6 transform rounded-sm border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(255,50,50,0.5)]'></div>
								<div className='absolute inset-0 z-10 -rotate-3 transform overflow-hidden rounded-sm border-4 border-white bg-black'>
									<div className='comic-halftone absolute inset-0 opacity-40'></div>
									<Avatar className='h-full w-full rounded-none'>
										<AvatarImage
											src={personalData.avatar}
											alt={personalData.name}
											className='scale-110 object-cover transition-transform duration-700 hover:scale-100'
										/>
										<AvatarFallback className='bg-card text-primary font-[Bangers] text-9xl'>
											{personalData.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</div>

								{/* Corner Badge */}
								<div className='bg-primary absolute -bottom-6 -left-6 z-20 -rotate-6 transform border-4 border-black px-4 py-2 font-[Bangers] text-2xl text-white shadow-[4px_4px_0px_0px_white]'>
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
