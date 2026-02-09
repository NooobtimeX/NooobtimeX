'use client'

import Link from 'next/link'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'

export default function NotFound() {
	return (
		<div className='relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black'>
			{/* Background Halftone */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-20'></div>

			{/* Comic Burst Background */}
			<div className='comic-burst pointer-events-none absolute inset-0 opacity-10'></div>

			<div className='z-10 px-4 text-center'>
				<ComicPop delay={0.2}>
					<div className='relative mb-8 inline-block'>
						<h1 className='text-primary relative z-10 font-[Bangers] text-[10rem] leading-none drop-shadow-[10px_10px_0px_rgba(255,255,255,1)] md:text-[15rem]'>
							404
						</h1>
						{/* Background Text Stroke Effect */}
						<h1 className='comic-text-stroke absolute inset-0 z-0 stroke-white stroke-[20px] font-[Bangers] text-[10rem] leading-none text-transparent md:text-[15rem]'>
							404
						</h1>
					</div>
				</ComicPop>

				<ComicPop delay={0.4}>
					<div className='relative mx-auto mb-10 max-w-2xl -rotate-1 transform border-4 border-black bg-white p-6 text-black shadow-[8px_8px_0px_0px_rgba(255,50,50,1)]'>
						<h2 className='mb-2 font-[Bangers] text-4xl uppercase md:text-5xl'>ISSUE NOT FOUND!</h2>
						<p className='font-[Inter] text-lg text-gray-800 md:text-xl'>
							It seems this page has been stolen by a supervillain... or maybe it never existed!
						</p>

						{/* Speech Bubble Arrow */}
						<div className='absolute -bottom-6 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 transform border-r-4 border-b-4 border-black bg-white'></div>
					</div>
				</ComicPop>

				<ComicPop delay={0.6}>
					<Button
						asChild
						className='bg-primary border-4 border-white px-12 py-8 font-[Bangers] text-2xl text-white shadow-[6px_6px_0px_0px_white] transition-all hover:bg-white hover:text-black hover:shadow-[10px_10px_0px_0px_white]'>
						<Link href='/'>RETURN TO BASE</Link>
					</Button>
				</ComicPop>
			</div>
		</div>
	)
}
