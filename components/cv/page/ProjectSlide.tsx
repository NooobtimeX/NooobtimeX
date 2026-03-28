import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import type { Issue } from '@/common/interface'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export function ProjectSlide({ project }: { project: Issue }) {
	const allPhotos = Array.from(new Set([project.images.banner, ...project.images.photos]))
	return (
		<div className='flex h-full flex-col md:grid md:grid-cols-2 lg:grid-cols-2 lg:gap-0'>
			{/* Left/Top: photo carousel — fills the half, aspect-video on mobile */}
			<div className='relative shrink-0 border-zinc-800 bg-zinc-900 md:h-full md:border-r'>
				<Carousel className='h-full w-full' opts={{ loop: true }}>
					<CarouselContent className='h-full'>
						{allPhotos.map((photo, i) => (
							<CarouselItem key={i} className='h-full'>
								<div className='aspect-video w-full overflow-hidden md:aspect-auto md:h-full'>
									<img src={photo} alt={`${project.title} ${i + 1}`} className='h-full w-full object-cover' />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					{allPhotos.length > 1 && (
						<>
							<CarouselPrevious className='left-3 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800' />
							<CarouselNext className='right-3 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800' />
						</>
					)}
				</Carousel>
			</div>

			{/* Right/Bottom: info panel — vertically centred, allow scroll on mobile if long */}
			<div className='flex flex-1 flex-col justify-center gap-6 overflow-y-auto px-6 py-8 md:gap-8 md:px-12 md:py-10'>
				<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
					<div className='mb-2 flex items-center gap-3'>
						<span className='h-1.5 w-6 bg-red-600 md:w-8' />
						<span className='text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase md:text-xs'>
							Case Study
						</span>
					</div>
					<h2 className='text-3xl font-black tracking-tight text-white uppercase md:text-5xl'>{project.title}</h2>
				</motion.div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
						<p className='mb-2 text-[10px] font-black tracking-widest text-red-500 uppercase'>The Challenge</p>
						<p className='text-sm leading-relaxed text-zinc-300 md:text-base'>{project.description.split('.')[0]}.</p>
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
						<p className='mb-2 text-[10px] font-black tracking-widest text-red-500 uppercase'>The Solution</p>
						<div className='flex flex-wrap gap-2'>
							{project.abilities.slice(0, 8).map(a => (
								<span
									key={a.name}
									className='flex items-center gap-1.5 border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10px] font-bold text-zinc-400 uppercase'>
									<Icon icon={a.icon} className='text-red-500' />
									{a.name}
								</span>
							))}
						</div>
					</motion.div>
				</div>

				{project.links?.live && (
					<motion.a
						href={project.links.live}
						target='_blank'
						rel='noreferrer'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.35 }}
						className='flex w-fit items-center gap-3 bg-red-600 px-6 py-3 text-xs font-black tracking-widest text-white uppercase transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]'>
						<Icon icon='material-symbols:open-in-new' className='h-4 w-4' />
						View Project Live
					</motion.a>
				)}
			</div>
		</div>
	)
}
