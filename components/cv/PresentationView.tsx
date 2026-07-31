'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import GlitchText from '@/components/cyber/GlitchText'
import { formatExperienceDuration } from '@/lib/utils'
import {
	SkillCategory,
	categoryMetadata,
	entitiesData,
	experiencesData,
	featuredProjects,
	featuredSkills,
	latestRole,
	personalData,
	workExperienceData
} from '@/common'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

// Client = explicit client org if set (e.g. MONOMax), else the delivering role's organization.
const clientName = (p: (typeof featuredProjects)[number]) => {
	if (p.clientOrganizationId) return entitiesData.find(e => e.id === p.clientOrganizationId)?.name ?? null
	const roleId = p.linkedExperienceIds?.[0]
	return roleId ? (experiencesData.find(e => e.id === roleId)?.organization.name ?? null) : null
}

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
						text={humanize(latestRole.position)}
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
										{item.credential ?? humanize(item.position)}
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
							const items = featuredSkills.filter(a => a.category === cat)
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
		...featuredProjects.map((p, idx) => {
			const client = clientName(p)
			const via = p.viaOrganizationId ? (entitiesData.find(e => e.id === p.viaOrganizationId)?.name ?? null) : null
			return {
				code: String(4 + idx).padStart(2, '0'),
				title: p.title,
				render: () => (
					<div className='mx-auto grid max-h-[80vh] w-full max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr]'>
						{/* Left: banner + meta + grouped tech */}
						<div className='flex min-h-0 flex-col gap-4 overflow-y-auto pr-1'>
							<div className='neon-panel clip-notch relative aspect-[16/9] w-full shrink-0 overflow-hidden'>
								<img src={p.images.cover} alt={p.title} className='h-full w-full object-cover' />
								<div className='from-background/90 absolute inset-0 bg-gradient-to-t to-transparent' />
							</div>

							<div className='grid grid-cols-2 gap-3 font-mono text-xs'>
								<div>
									<p className='text-cyber-cyan tracking-widest uppercase'>Client</p>
									<p className='mt-1'>{client ?? 'Independent'}</p>
								</div>
								{via && (
									<div>
										<p className='text-cyber-cyan tracking-widest uppercase'>Seconded To</p>
										<p className='mt-1'>{via}</p>
									</div>
								)}
								<div>
									<p className='text-cyber-cyan tracking-widest uppercase'>Timeline</p>
									<p className='mt-1'>{formatExperienceDuration(p.startDate, p.endDate)}</p>
								</div>
								{p.links.live && (
									<div>
										<p className='text-cyber-cyan tracking-widest uppercase'>Live</p>
										<p className='mt-1'>{p.links.live.replace(/^https?:\/\//, '').replace(/\/+$/, '')}</p>
									</div>
								)}
							</div>

							<div>
								<p className='text-cyber-yellow mb-2 font-mono text-xs tracking-widest uppercase'>Tech Stack</p>
								<div className='flex flex-wrap gap-1.5'>
									{p.activeSkills.map(s => (
										<span
											key={s.name}
											className='border-border inline-flex items-center gap-1 border px-2 py-0.5 text-xs'>
											<Icon icon={s.icon} className='size-3.5' />
											{s.name}
										</span>
									))}
									{p.retiredSkills.map(s => (
										<span
											key={s.name}
											className='border-border/40 text-muted-foreground inline-flex items-center gap-1 border px-2 py-0.5 text-xs opacity-60'>
											<Icon icon={s.icon} className='size-3.5' />
											<span className='line-through'>{s.name}</span>
										</span>
									))}
								</div>
							</div>
						</div>

						{/* Right: title + scrollable description */}
						<div className='flex min-h-0 flex-col'>
							<h2 className='font-display neon-text-cyan text-2xl font-bold tracking-wide uppercase md:text-4xl'>
								{p.title}
							</h2>
							<p className='text-muted-foreground mt-4 min-h-0 overflow-y-auto pr-2 text-sm leading-relaxed md:text-base'>
								{p.description}
							</p>
						</div>
					</div>
				)
			}
		}),
		{
			code: '07',
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
							<Icon icon='mdi:web' className='text-cyber-cyan size-5' />{' '}
							{personalData.socialLinks.find(s => s.platform === 'website')?.username ?? 'nooobtimex.me'}
						</span>
						<span className='inline-flex items-center gap-2'>
							<Icon icon='mdi:translate' className='text-cyber-cyan size-5' />
							{personalData.languages.map(l => `${l.name} (${l.level})`).join(' · ')}
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
