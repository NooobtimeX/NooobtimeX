'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import GlitchText from '@/components/cyber/GlitchText'
import { formatExperienceDuration } from '@/lib/utils'
import { SkillCategory, categoryMetadata, personalData, projectsData, skillsData, workExperienceData } from '@/common'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

interface PresentationViewProps {
	onExit: () => void
}

const PresentationView: React.FC<PresentationViewProps> = ({ onExit }) => {
	const slides: { code: string; title: string; render: () => React.ReactNode }[] = [
		{
			code: '00',
			title: 'Intro',
			render: () => (
				<div className='text-center'>
					<p className='text-cyber-cyan font-mono text-sm tracking-[0.4em] uppercase'>// Portfolio_v2.077</p>
					<h1 className='font-display mt-4 text-5xl font-bold tracking-tight uppercase md:text-8xl'>
						{personalData.name}
					</h1>
					<GlitchText
						text='Product Lead'
						className='neon-text-yellow font-display mt-4 inline-block text-2xl font-bold tracking-[0.3em] uppercase md:text-4xl'
					/>
					<p className='text-muted-foreground mx-auto mt-6 max-w-2xl text-base md:text-lg'>{personalData.tagline}</p>
				</div>
			)
		},
		{
			code: '01',
			title: 'Profile',
			render: () => (
				<div className='mx-auto max-w-3xl'>
					<h2 className='font-display neon-text-cyan text-3xl font-bold tracking-wide uppercase md:text-5xl'>
						Profile
					</h2>
					<p className='text-muted-foreground mt-6 text-lg leading-relaxed'>{personalData.about.bio}</p>
					<ul className='mt-6 grid gap-3 sm:grid-cols-2'>
						{personalData.about.highlights.map((h, i) => (
							<li key={i} className='flex gap-2'>
								<span className='bg-cyber-yellow mt-2 size-1.5 shrink-0' />
								<span className='text-sm'>{h}</span>
							</li>
						))}
					</ul>
				</div>
			)
		},
		{
			code: '02',
			title: 'Experience',
			render: () => (
				<div className='mx-auto max-w-3xl'>
					<h2 className='font-display neon-text-cyan text-3xl font-bold tracking-wide uppercase md:text-5xl'>
						Experience
					</h2>
					<div className='mt-6 space-y-4'>
						{workExperienceData.slice(0, 4).map(item => (
							<div key={item.id} className='neon-panel clip-notch-sm p-4'>
								<div className='flex flex-wrap items-baseline justify-between gap-2'>
									<h3 className='font-display text-lg font-bold tracking-wide uppercase'>
										{humanize(item.position)}
										<span className='text-cyber-yellow'> @ {item.organization.name}</span>
									</h3>
									<span className='text-muted-foreground font-mono text-[0.7rem] uppercase'>
										{formatExperienceDuration(item.startDate, item.endDate)}
									</span>
								</div>
								<p className='text-muted-foreground mt-2 line-clamp-2 text-sm'>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			)
		},
		{
			code: '03',
			title: 'Stack',
			render: () => (
				<div className='mx-auto max-w-4xl'>
					<h2 className='font-display neon-text-cyan text-3xl font-bold tracking-wide uppercase md:text-5xl'>
						Core Stack
					</h2>
					<div className='mt-6 grid gap-5 sm:grid-cols-2'>
						{(['frontend', 'backend', 'infrastructure', 'growth-management'] as SkillCategory[]).map(cat => {
							const items = skillsData.filter(a => a.category === cat && a.important)
							if (!items.length) return null
							return (
								<div key={cat} className='neon-panel clip-notch-sm p-4'>
									<h3 className='text-cyber-yellow mb-3 font-mono text-xs tracking-widest uppercase'>
										{categoryMetadata[cat].label}
									</h3>
									<div className='flex flex-wrap gap-2'>
										{items.map(a => (
											<span key={a.name} className='inline-flex items-center gap-1.5 text-sm'>
												<Icon icon={a.icon} className='size-4' />
												{a.name}
											</span>
										))}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			)
		},
		{
			code: '04',
			title: 'Projects',
			render: () => (
				<div className='mx-auto max-w-4xl'>
					<h2 className='font-display neon-text-cyan text-3xl font-bold tracking-wide uppercase md:text-5xl'>
						Selected Projects
					</h2>
					<div className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{projectsData.slice(0, 6).map(p => (
							<div key={p.id} className='neon-panel clip-notch-sm p-4'>
								<h3 className='font-display font-bold tracking-wide uppercase'>{p.title}</h3>
								<p className='text-muted-foreground mt-1 line-clamp-3 text-xs'>{p.description}</p>
							</div>
						))}
					</div>
				</div>
			)
		},
		{
			code: '05',
			title: 'Contact',
			render: () => (
				<div className='text-center'>
					<h2 className='font-display neon-text-yellow text-4xl font-bold tracking-wide uppercase md:text-6xl'>
						Let&apos;s build
					</h2>
					<div className='mt-8 flex flex-col items-center gap-3 font-mono text-sm'>
						<span className='inline-flex items-center gap-2'>
							<Icon icon='mdi:email-outline' className='text-cyber-cyan size-5' />
							{personalData.contact.email}
						</span>
						<span className='inline-flex items-center gap-2'>
							<Icon icon='mdi:web' className='text-cyber-cyan size-5' /> nooobtimex.me
						</span>
					</div>
				</div>
			)
		}
	]

	const [index, setIndex] = React.useState(0)
	const next = React.useCallback(() => setIndex(i => Math.min(i + 1, slides.length - 1)), [slides.length])
	const prev = React.useCallback(() => setIndex(i => Math.max(i - 1, 0)), [])

	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === ' ') next()
			else if (e.key === 'ArrowLeft') prev()
			else if (e.key === 'Escape') onExit()
		}
		window.addEventListener('keydown', onKey)
		return () => window.removeEventListener('keydown', onKey)
	}, [next, prev, onExit])

	const slide = slides[index]

	return (
		<div className='bg-background fixed inset-0 z-[200] flex flex-col'>
			<div className='cyber-grid pointer-events-none absolute inset-0 opacity-20' />

			{/* Top bar */}
			<div className='relative z-10 flex items-center justify-between px-6 py-4'>
				<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>
					{slide.code} // {slide.title}
				</span>
				<button
					onClick={onExit}
					className='text-muted-foreground hover:text-cyber-magenta inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
					Exit <Icon icon='mdi:close' className='size-4' />
				</button>
			</div>

			{/* Slide */}
			<div className='relative z-10 flex flex-1 items-center justify-center px-6 pb-20'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -24 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
						className='w-full'>
						{slide.render()}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Controls */}
			<div className='absolute right-0 bottom-0 left-0 z-10 flex items-center justify-between px-6 py-5'>
				<button
					onClick={prev}
					disabled={index === 0}
					className='border-border text-muted-foreground hover:text-cyber-cyan flex size-10 items-center justify-center border transition-colors disabled:opacity-30'>
					<Icon icon='mdi:chevron-left' className='size-6' />
				</button>

				<div className='flex gap-2'>
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => setIndex(i)}
							aria-label={`Slide ${i + 1}`}
							className={i === index ? 'bg-cyber-yellow h-1.5 w-6' : 'bg-border hover:bg-cyber-cyan/50 h-1.5 w-6'}
						/>
					))}
				</div>

				<button
					onClick={next}
					disabled={index === slides.length - 1}
					className='border-border text-muted-foreground hover:text-cyber-cyan flex size-10 items-center justify-center border transition-colors disabled:opacity-30'>
					<Icon icon='mdi:chevron-right' className='size-6' />
				</button>
			</div>
		</div>
	)
}

export default PresentationView
