import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { personalData } from '@/common/data/personal'

export function IntroSlide() {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-6 px-6 text-center md:gap-8 md:px-16'>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'spring', duration: 0.6 }}
				className='relative h-28 w-28 overflow-hidden rounded-full border-4 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.4)] md:h-36 md:w-36 md:shadow-[0_0_40px_rgba(220,38,38,0.5)]'>
				<img src={personalData.avatar} alt={personalData.name} className='h-full w-full object-cover' />
			</motion.div>
			<div>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-5xl font-black tracking-tighter text-white uppercase md:text-7xl'>
					{personalData.name}
				</motion.h1>
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.35, duration: 0.5 }}
					className='mt-2 text-xl font-bold tracking-[0.2em] text-red-500 uppercase md:mt-3 md:text-2xl'>
					Portfolio Journey
				</motion.p>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7 }}
				className='mt-4 flex flex-wrap justify-center gap-6 text-[10px] text-zinc-500 md:text-sm'>
				<span className='flex items-center gap-2'>
					<Icon icon='material-symbols:location-on' className='text-red-500' />
					{personalData.contact.location}
				</span>
				<span className='flex items-center gap-2'>
					<Icon icon='simple-icons:github' />
					github.com/NooobtimeX
				</span>
			</motion.div>
		</div>
	)
}
