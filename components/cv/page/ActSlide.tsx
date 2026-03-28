import { motion } from 'framer-motion'
import { actVariants } from './animations'

export function ActSlide({ act, title, sub }: { act: string; title: string; sub: string }) {
	return (
		<div className='flex h-full flex-col items-center justify-center bg-zinc-950 px-6 text-center'>
			<motion.div variants={actVariants} initial='enter' animate='center' exit='exit' className='space-y-4'>
				<span className='inline-block border border-red-600 px-4 py-1 text-xs font-black tracking-[0.4em] text-red-500 uppercase'>
					{act}
				</span>
				<h1 className='text-4xl font-black tracking-tighter text-white uppercase md:text-8xl'>{title}</h1>
				<p className='text-sm font-bold tracking-widest text-zinc-500 uppercase md:text-xl'>{sub}</p>
			</motion.div>
		</div>
	)
}
