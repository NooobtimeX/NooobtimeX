'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import { personalData } from '@/common/data/personal'
import { AffiliationId } from '@/common/enum'
import { ActSlide } from './page/ActSlide'
import { ExperienceSlide } from './page/ExperienceSlide'
import { FoundationalJourneySlide } from './page/FoundationalJourneySlide'
// Modular Slide Components
import { IntroSlide } from './page/IntroSlide'
import { ProjectSlide } from './page/ProjectSlide'
import { SkillsSlide } from './page/SkillsSlide'
import { slideVariants, swipePower, swipeThreshold } from './page/animations'

interface PresentationViewProps {
	onExit: () => void
}

export enum SlideId {
	Intro = 'intro',
	Act1 = 'act-1',
	Act2 = 'act-2',
	Act3 = 'act-3',
	Act4 = 'act-4',
	FoundationalJourney = 'foundational-journey',
	Skills = 'skills'
}

// ─── Slide type ───────────────────────────────────────────────────────────────
interface Slide {
	id: string // Can be SlideId, AffiliationId, or IssueId
	label: string
	group?: string
	act?: string
	type: 'intro' | 'experience' | 'project' | 'skills' | 'act'
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

	const slides: Slide[] = [{ id: SlideId.Intro, label: 'Intro', type: 'intro', render: () => <IntroSlide /> }]

	slides.push({
		id: SlideId.Act1,
		label: 'Act I',
		type: 'act',
		render: () => <ActSlide act='Act I' title='The Foundations' sub='University & Early Impact' />
	})

	const tuExp = affiliationData.find(a => a.id === AffiliationId.ThammasatUniversity)
	const rsPartTime = affiliationData.find(a => a.id === AffiliationId.RuamsukPlatingSoftwareEngineerPartTime)

	if (tuExp && rsPartTime) {
		const qrProject = issuesData.find(p => p.linkedAffiliationId === tuExp.id)
		const rsProject = issuesData.find(p => p.linkedAffiliationId === rsPartTime.id)

		slides.push({
			id: SlideId.FoundationalJourney,
			label: 'First Era',
			group: 'Act I',
			act: 'I: Foundational',
			type: 'experience',
			render: () => (
				<FoundationalJourneySlide
					tu={tuExp}
					rs={rsPartTime}
					qrProject={qrProject}
					rsProject={rsProject}
					goToId={(id: string) => {
						const idx = slides.findIndex(s => s.id === id)
						if (idx !== -1) go(idx, slides.length)
					}}
				/>
			)
		})

		if (qrProject) {
			slides.push({
				id: qrProject.id,
				label: qrProject.title
					.replace(/^🚀\s*/, '')
					.split(' ')
					.slice(0, 2)
					.join(' '),
				group: 'Thammasat',
				act: 'I: Foundational',
				type: 'project',
				render: () => <ProjectSlide project={qrProject} />
			})
		}

		if (rsProject) {
			slides.push({
				id: rsProject.id,
				label: rsProject.title
					.replace(/^🚀\s*/, '')
					.split(' ')
					.slice(0, 2)
					.join(' '),
				group: 'Ruamsuk',
				act: 'I: Foundational',
				type: 'project',
				render: () => <ProjectSlide project={rsProject} />
			})
		}
	}

	slides.push({
		id: SlideId.Act2,
		label: 'Act II',
		type: 'act',
		render: () => <ActSlide act='Act II' title='Engineering Excellence' sub='Scaling & Microservices' />
	})

	const act2Exps = affiliationData.filter(a =>
		[
			AffiliationId.JasmineTechnologySolution,
			AffiliationId.FreelanceBlitzwerk,
			AffiliationId.RuamsukPlatingSoftwareEngineerFullTime
		].includes(a.id)
	)
	act2Exps.forEach(exp => {
		slides.push({
			id: exp.id,
			label: exp.affiliation.name.split(' ').slice(0, 2).join(' '),
			group: exp.affiliation.name,
			act: 'II: Excellence',
			type: 'experience',
			render: () => (
				<ExperienceSlide
					exp={exp}
					goToId={(id: string) => {
						const idx = slides.findIndex(s => s.id === id)
						if (idx !== -1) go(idx, slides.length)
					}}
				/>
			)
		})
		const projects = issuesData.filter(p => p.linkedAffiliationId === exp.id)
		projects.forEach(project => {
			slides.push({
				id: project.id,
				label: project.title
					.replace(/^🚀\s*/, '')
					.split(' ')
					.slice(0, 2)
					.join(' '),
				group: exp.affiliation.name,
				act: 'II: Excellence',
				type: 'project',
				render: () => <ProjectSlide project={project} />
			})
		})
	})

	slides.push({
		id: SlideId.Act3,
		label: 'Act III',
		type: 'act',
		render: () => <ActSlide act='Act III' title='Strategic Leadership' sub='Technical Advising & Scale' />
	})

	const act3Exps = affiliationData.filter(a => [AffiliationId.RuamsukPlatingTechnicalAdvisor].includes(a.id))
	act3Exps.forEach(exp => {
		slides.push({
			id: exp.id,
			label: exp.affiliation.name.split(' ').slice(0, 2).join(' '),
			group: exp.affiliation.name,
			act: 'III: Strategy',
			type: 'experience',
			render: () => (
				<ExperienceSlide
					exp={exp}
					goToId={(id: string) => {
						const idx = slides.findIndex(s => s.id === id)
						if (idx !== -1) go(idx, slides.length)
					}}
				/>
			)
		})
		const projects = issuesData.filter(p => p.linkedAffiliationId === exp.id)
		projects.forEach(project => {
			slides.push({
				id: project.id,
				label: project.title
					.replace(/^🚀\s*/, '')
					.split(' ')
					.slice(0, 2)
					.join(' '),
				group: exp.affiliation.name,
				act: 'III: Strategy',
				type: 'project',
				render: () => <ProjectSlide project={project} />
			})
		})
	})

	// ─── ACT IV: TECHNICAL INNOVATION ────────────────────────────────────────
	slides.push({
		id: SlideId.Act4,
		label: 'Act IV',
		type: 'act',
		render: () => <ActSlide act='Act IV' title='Technical Innovation' sub='Labs & Open Source Ecosystem' />
	})

	const personalExp = affiliationData.find(a => a.id === AffiliationId.PersonalProjects)
	if (personalExp) {
		const projects = issuesData.filter(p => p.linkedAffiliationId === personalExp.id)
		projects.forEach(project => {
			slides.push({
				id: project.id,
				label: project.title
					.replace(/^🚀\s*/, '')
					.split(' ')
					.slice(0, 2)
					.join(' '),
				group: 'Innovation',
				act: 'IV: ecosystem',
				type: 'project',
				render: () => <ProjectSlide project={project} />
			})
		})
	}

	// ─── THE END ─────────────────────────────────────────────────────────────
	slides.push({ id: SlideId.Skills, label: 'Ecosystem', type: 'skills', render: () => <SkillsSlide /> })

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
			className='relative flex h-screen w-screen flex-col overflow-hidden bg-zinc-950 font-sans text-white md:h-screen lg:h-screen'
			style={{ height: '100dvh' }}>
			{/* Top bar */}
			<div className='relative z-10 flex shrink-0 items-center justify-between border-b border-zinc-800 px-4 py-2 md:px-8 md:py-3'>
				<div className='flex shrink-0 items-center gap-2 md:gap-3'>
					<span className='h-2 w-2 bg-red-600 md:h-2.5 md:w-2.5' />
					<span className='text-[10px] font-black tracking-widest text-zinc-400 uppercase md:text-xs'>
						{personalData.name}
					</span>
				</div>

				{/* Breadcrumb / Act Indicator */}
				<div className='flex items-center gap-1.5 text-[9px] text-zinc-500 md:gap-3 md:text-sm'>
					{currentSlide.act && (
						<>
							<span className='font-black text-red-500 underline decoration-red-600/50 underline-offset-4'>
								{currentSlide.act}
							</span>
							<span className='text-zinc-700'>›</span>
						</>
					)}
					<span className='max-w-[100px] truncate font-bold text-zinc-400 md:max-w-none'>
						{currentSlide.group || currentSlide.label}
					</span>
					{currentSlide.type === 'project' && (
						<>
							<span className='text-zinc-700 md:hidden'>›</span>
							<span className='hidden text-zinc-700 md:inline'>/</span>
							<span className='max-w-[100px] truncate font-medium text-white md:max-w-none'>{currentSlide.label}</span>
						</>
					)}
				</div>

				<button
					onClick={onExit}
					className='flex shrink-0 items-center gap-1 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-red-500 md:gap-2 md:text-xs'>
					<Icon icon='material-symbols:close' className='h-3.5 w-3.5 md:h-4 md:w-4' />
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
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.2}
						onDragEnd={(_, info) => {
							const swipe = swipePower(info.offset.x, info.velocity.x)
							if (swipe < -swipeThreshold) goByIndex(current + 1)
							if (swipe > swipeThreshold) goByIndex(current - 1)
						}}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
						className='absolute inset-0 overflow-hidden'>
						{currentSlide.render()}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Bottom nav */}
			<div className='relative z-10 flex shrink-0 items-center justify-between border-t border-zinc-800 px-4 py-2 md:px-8 md:py-4'>
				<button
					onClick={() => goByIndex(current - 1)}
					disabled={current === 0}
					className='flex items-center gap-1 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-white disabled:opacity-20 md:gap-2 md:text-xs'>
					<Icon icon='material-symbols:arrow-back' className='h-3.5 w-3.5 md:h-4 md:w-4' />
					Prev
				</button>

				<div className='flex items-center gap-2 md:gap-3'>
					<span className='text-[10px] text-zinc-600 md:text-xs'>
						{current + 1} / {slides.length}
					</span>
					<div className='hidden gap-1 md:flex'>
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
					className='flex items-center gap-1 text-[10px] font-black tracking-widest text-zinc-500 uppercase transition-colors hover:text-white disabled:opacity-20 md:gap-2 md:text-xs'>
					Next
					<Icon icon='material-symbols:arrow-forward' className='h-4 w-4 md:h-4 md:w-4' />
				</button>
			</div>
		</div>
	)
}
