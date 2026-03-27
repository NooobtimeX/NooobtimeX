'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import { getDynamicAbilities } from '@/common/data/ability/dynamicAbilities'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import { personalData } from '@/common/data/personal'
import type { AbilityGroup, AffiliationItem, Issue } from '@/common/interface'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { formatAffiliationDuration } from '@/lib/utils'

interface PresentationViewProps {
	onExit: () => void
}

const slideVariants = {
	enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
	center: { x: 0, opacity: 1 },
	exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 })
}

// ─── Slide: Intro ─────────────────────────────────────────────────────────────
function IntroSlide() {
	return (
		<div className='flex h-full flex-col items-center justify-center gap-8 px-16 text-center'>
			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: 'spring', duration: 0.6 }}
				className='relative h-36 w-36 overflow-hidden rounded-full border-4 border-red-600 shadow-[0_0_40px_rgba(220,38,38,0.5)]'>
				<img src={personalData.avatar} alt={personalData.name} className='h-full w-full object-cover' />
			</motion.div>
			<div>
				<motion.h1
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className='text-6xl font-black tracking-tighter text-white uppercase'>
					{personalData.name}
				</motion.h1>
				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.35, duration: 0.5 }}
					className='mt-3 text-2xl font-bold tracking-widest text-red-400 uppercase'>
					{personalData.title}
				</motion.p>
			</div>
			<motion.p
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				className='max-w-2xl text-lg leading-relaxed text-zinc-400'>
				{personalData.tagline}
			</motion.p>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7 }}
				className='flex gap-6 text-sm text-zinc-500'>
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

// ─── Slide: Experience Overview ───────────────────────────────────────────────
function ExperienceSlide({ exp, goToId }: { exp: AffiliationItem; goToId: (id: string) => void }) {
	const linkedProjects = issuesData.filter(p => p.linkedAffiliationId === exp.id)
	const allAbilities = Array.from(new Map(linkedProjects.flatMap(p => p.abilities).map(a => [a.name, a])).values())
	return (
		<div className='flex h-full flex-col justify-center gap-5 px-16 py-10'>
			{/* Header */}
			<div className='flex items-start justify-between'>
				<div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className='mb-1 text-xs font-black tracking-[0.3em] text-red-500 uppercase'>
						{exp.affiliation.name}
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className='text-4xl font-black tracking-tight text-white uppercase'>
						{exp.position}
					</motion.h2>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500'>
						<span className='flex items-center gap-1.5'>
							<Icon icon='material-symbols:calendar-month' className='text-red-500' />
							{formatAffiliationDuration(exp.startDate, exp.endDate)}
						</span>
						<span className='flex items-center gap-1.5'>
							<Icon icon='material-symbols:work' className='text-red-500' />
							{exp.type}
						</span>
						{exp.affiliation.location && (
							<span className='flex items-center gap-1.5'>
								<Icon icon='material-symbols:location-on' className='text-red-500' />
								{exp.affiliation.location}
							</span>
						)}
					</motion.div>
				</div>
				{exp.affiliation.logo && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.15 }}
						className='h-16 w-32 shrink-0 overflow-hidden border border-zinc-700 bg-white p-2'>
						<img src={exp.affiliation.logo} alt={exp.affiliation.name} className='h-full w-full object-contain' />
					</motion.div>
				)}
			</div>

			{exp.description && (
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25 }}
					className='border-l-2 border-red-600 pl-4 text-sm leading-relaxed text-zinc-400'>
					{exp.description}
				</motion.p>
			)}

			{allAbilities.length > 0 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
					<p className='mb-2 text-[10px] font-black tracking-widest text-zinc-600 uppercase'>Tech Stack</p>
					<div className='flex flex-wrap gap-2'>
						{allAbilities.map((a, i) => (
							<motion.span
								key={a.name}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.3 + i * 0.03 }}
								className='flex items-center gap-1.5 border border-zinc-700 bg-zinc-900 px-2 py-1 text-[11px] font-bold text-zinc-300 uppercase'>
								<Icon icon={a.icon} className='h-3 w-3 text-red-500' />
								{a.name}
							</motion.span>
						))}
					</div>
				</motion.div>
			)}

			{linkedProjects.length > 0 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
					<p className='mb-2 text-[10px] font-black tracking-widest text-zinc-600 uppercase'>
						{linkedProjects.length} Project{linkedProjects.length > 1 ? 's' : ''} — click to view
					</p>
					<div className='flex flex-wrap gap-2'>
						{linkedProjects.map(p => (
							<button
								key={p.id}
								onClick={() => goToId(p.id)}
								className='cursor-pointer border border-red-800 bg-red-950/30 px-3 py-1 text-xs font-bold text-red-400 uppercase transition-colors hover:bg-red-600 hover:text-white'>
								{p.title}
							</button>
						))}
					</div>
				</motion.div>
			)}
		</div>
	)
}

// ─── Slide: Project Deep Dive ─────────────────────────────────────────────────
function ProjectSlide({ project }: { project: Issue }) {
	const allPhotos = Array.from(new Set([project.images.banner, ...project.images.photos]))
	return (
		<div className='grid h-full grid-cols-2 gap-0'>
			{/* Left: photo carousel — fills the full height, no scroll */}
			<div className='relative flex h-full items-center justify-center border-r border-zinc-800 bg-zinc-900'>
				<Carousel className='h-full w-full' opts={{ loop: true }}>
					<CarouselContent className='h-full'>
						{allPhotos.map((photo, i) => (
							<CarouselItem key={i} className='h-full'>
								<div className='h-full w-full overflow-hidden'>
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

			{/* Right: info panel — vertically centred, no scroll */}
			<div className='flex h-full flex-col justify-center gap-5 px-12 py-10'>
				<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
					<h2 className='text-3xl font-black tracking-tight text-white uppercase'>{project.title}</h2>
					{project.startDate && (
						<p className='mt-1 text-xs font-bold text-zinc-500 uppercase'>
							<Icon icon='material-symbols:calendar-month' className='mr-1 inline text-red-500' />
							{formatAffiliationDuration(project.startDate, project.endDate)}
						</p>
					)}
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.15 }}
					className='border-l-2 border-red-600 pl-4 text-sm leading-relaxed text-zinc-400'>
					{project.description}
				</motion.p>

				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
					<p className='mb-2 text-[10px] font-black tracking-widest text-zinc-600 uppercase'>Tech Stack</p>
					<div className='flex flex-wrap gap-2'>
						{project.abilities.map((a, i) => (
							<motion.span
								key={a.name}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.25 + i * 0.04 }}
								className='flex items-center gap-1.5 border border-zinc-700 bg-zinc-900 px-2 py-1 text-[11px] font-bold text-zinc-300 uppercase'>
								<Icon icon={a.icon} className='h-3 w-3 text-red-500' />
								{a.name}
							</motion.span>
						))}
					</div>
				</motion.div>

				{project.links?.live && (
					<motion.a
						href={project.links.live}
						target='_blank'
						rel='noreferrer'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.35 }}
						className='flex w-fit items-center gap-2 border border-red-600 px-4 py-2 text-xs font-black tracking-widest text-red-500 uppercase transition-colors hover:bg-red-600 hover:text-white'>
						<Icon icon='material-symbols:open-in-new' className='h-3.5 w-3.5' />
						{project.links.live}
					</motion.a>
				)}
			</div>
		</div>
	)
}

// ─── Slide: Skills ────────────────────────────────────────────────────────────
function SkillsSlide() {
	const groups = getDynamicAbilities().filter((g: AbilityGroup) =>
		['Frontend', 'Backend', 'Infrastructure'].includes(g.category)
	)
	return (
		<div className='flex h-full flex-col justify-center px-16'>
			<motion.h2
				initial={{ x: -40, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				className='mb-10 text-sm font-black tracking-[0.3em] text-red-500 uppercase'>
				Core Competencies
			</motion.h2>
			<div className='grid grid-cols-3 gap-8'>
				{groups.map((group, gi) => {
					const core = group.abilities.filter(a => a.important)
					return (
						<div key={group.category}>
							<motion.h3
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: gi * 0.1 }}
								className='mb-4 text-xs font-black tracking-widest text-zinc-500 uppercase'>
								{group.category}
							</motion.h3>
							<div className='flex flex-wrap gap-2'>
								{core.map((a, ai) => (
									<motion.span
										key={a.name}
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: gi * 0.1 + ai * 0.04 }}
										className='flex items-center gap-1.5 border border-zinc-700 bg-zinc-900 px-2 py-1 text-[11px] font-bold text-zinc-300 uppercase'>
										<Icon icon={a.icon} className='h-3 w-3 text-red-500' />
										{a.name}
									</motion.span>
								))}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

// ─── Slide type ───────────────────────────────────────────────────────────────
interface Slide {
	id: string
	label: string
	group?: string
	type: 'intro' | 'experience' | 'project' | 'skills'
	render: () => React.ReactNode
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function PresentationView({ onExit }: PresentationViewProps) {
	const [current, setCurrent] = useState(0)
	const [direction, setDirection] = useState(1)
	const containerRef = useRef<HTMLDivElement>(null)

	const go = useCallback(
		(next: number, totalSlides: number) => {
			if (next < 0 || next >= totalSlides) return
			setDirection(next > current ? 1 : -1)
			setCurrent(next)
		},
		[current]
	)

	// Build slides: Intro → per-exp (overview + each linked project) → Skills
	const slides: Slide[] = [{ id: 'intro', label: 'Intro', type: 'intro', render: () => <IntroSlide /> }]

	affiliationData
		.slice()
		.reverse()
		.forEach(exp => {
			const linkedProjects = issuesData.filter(p => p.linkedAffiliationId === exp.id)
			slides.push({
				id: exp.id,
				label: exp.affiliation.name.split(' ').slice(0, 2).join(' '),
				group: exp.affiliation.name,
				type: 'experience',
				render: () => (
					<ExperienceSlide
						exp={exp}
						goToId={id => {
							const idx = slides.findIndex(s => s.id === id)
							if (idx !== -1) go(idx, slides.length)
						}}
					/>
				)
			})
			linkedProjects.forEach(project => {
				slides.push({
					id: project.id,
					label: project.title
						.replace(/^🚀\s*/, '')
						.split(' ')
						.slice(0, 2)
						.join(' '),
					group: exp.affiliation.name,
					type: 'project',
					render: () => <ProjectSlide project={project} />
				})
			})
		})

	slides.push({ id: 'skills', label: 'Skills', type: 'skills', render: () => <SkillsSlide /> })

	const goByIndex = useCallback((next: number) => go(next, slides.length), [go, slides.length])

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key === ' ') goByIndex(current + 1)
			if (e.key === 'ArrowLeft') goByIndex(current - 1)
			if (e.key === 'Escape') onExit()
		}
		window.addEventListener('keydown', handler)
		return () => window.removeEventListener('keydown', handler)
	}, [current, goByIndex, onExit])

	useEffect(() => {
		containerRef.current?.requestFullscreen?.().catch(() => {})
		return () => {
			if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
		}
	}, [])

	const currentSlide = slides[current]

	return (
		<div
			ref={containerRef}
			className='relative flex h-screen w-screen flex-col overflow-hidden bg-zinc-950 font-sans text-white'>
			{/* Top bar */}
			<div className='relative z-10 flex shrink-0 items-center justify-between border-b border-zinc-800 px-8 py-3'>
				<div className='flex shrink-0 items-center gap-3'>
					<span className='h-2.5 w-2.5 bg-red-600' />
					<span className='text-xs font-black tracking-widest text-zinc-400 uppercase'>{personalData.name}</span>
				</div>

				{/* Breadcrumb */}
				{currentSlide.group && (
					<div className='flex items-center gap-2 text-xs text-zinc-500'>
						<span className='text-zinc-700'>›</span>
						<span className='font-bold text-zinc-400'>{currentSlide.group}</span>
						{currentSlide.type === 'project' && (
							<>
								<span className='text-zinc-700'>›</span>
								<span className='font-bold text-red-400'>{currentSlide.label}</span>
							</>
						)}
					</div>
				)}

				<button
					onClick={onExit}
					className='flex shrink-0 items-center gap-2 text-xs font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-red-500'>
					<Icon icon='material-symbols:close' className='h-4 w-4' />
					Exit
				</button>
			</div>

			{/* Slide content — fills remaining height, overflow hidden on container */}
			<div className='relative min-h-0 flex-1 overflow-hidden'>
				<AnimatePresence mode='wait' custom={direction}>
					<motion.div
						key={current}
						custom={direction}
						variants={slideVariants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className='absolute inset-0 overflow-hidden'>
						{currentSlide.render()}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Bottom nav */}
			<div className='relative z-10 flex shrink-0 items-center justify-between border-t border-zinc-800 px-8 py-4'>
				<button
					onClick={() => goByIndex(current - 1)}
					disabled={current === 0}
					className='flex items-center gap-2 text-xs font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-white disabled:opacity-20'>
					<Icon icon='material-symbols:arrow-back' className='h-4 w-4' />
					Prev
				</button>

				<div className='flex items-center gap-3'>
					<span className='text-xs text-zinc-600'>
						{current + 1} / {slides.length}
					</span>
					<div className='flex gap-1'>
						{slides.map((s, i) => (
							<button
								key={i}
								onClick={() => goByIndex(i)}
								title={s.label}
								className={`h-1.5 transition-all ${
									i === current ? 'w-6 bg-red-600'
									: s.type === 'experience' ? 'w-2 bg-zinc-600'
									: s.type === 'project' ? 'w-1.5 bg-zinc-700'
									: 'w-2 bg-zinc-600'
								}`}
							/>
						))}
					</div>
				</div>

				<button
					onClick={() => goByIndex(current + 1)}
					disabled={current === slides.length - 1}
					className='flex items-center gap-2 text-xs font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-white disabled:opacity-20'>
					Next
					<Icon icon='material-symbols:arrow-forward' className='h-4 w-4' />
				</button>
			</div>
		</div>
	)
}
