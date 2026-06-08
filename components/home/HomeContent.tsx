'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CyberButton from '@/components/cyber/CyberButton'
import CyberTag from '@/components/cyber/CyberTag'
import CyberTooltip from '@/components/cyber/CyberTooltip'
import GlitchText from '@/components/cyber/GlitchText'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import ProjectCard from '@/components/projects/ProjectCard'
import { cn, formatExperienceDuration } from '@/lib/utils'
import { featuredProjects, featuredSkills, personalData, workExperienceData } from '@/common'

const formatPosition = (position: string) =>
	position
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const HomeContent: React.FC = () => {
	// Current role = the one active *today* (started, not yet ended). Data is sorted
	// by startDate desc, so find() returns the latest active role and auto-advances
	// once a future role's start date arrives.
	const now = new Date()
	const current =
		workExperienceData.find(r => new Date(r.startDate) <= now && (!r.endDate || new Date(r.endDate) >= now))
		?? workExperienceData[0]
	const nowId = current?.id
	const latestRoles = workExperienceData.slice(0, 3)
	const featured = featuredProjects
	const homeSkills = featuredSkills

	return (
		<div className='mx-auto max-w-7xl px-4 md:px-6'>
			{/* HERO */}
			<section className='relative overflow-hidden py-16 md:py-24'>
				<div className='cyber-grid pointer-events-none absolute inset-0 -z-10 opacity-40' />
				<div className='from-background absolute inset-0 -z-10 bg-gradient-to-b to-transparent' />

				<div className='grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16'>
					{/* Left: identity */}
					<div>
						<p className='text-cyber-cyan font-mono text-xs tracking-[0.35em] uppercase'>// PORTFOLIO_v2.077</p>

						<h1 className='font-display mt-4 text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-8xl'>
							Wongsaphat
							<br />
							Puangsorn
						</h1>

						<div className='mt-4 flex items-center gap-3'>
							<span className='bg-cyber-yellow h-6 w-1' />
							<GlitchText
								text='Developer'
								className='neon-text-yellow font-display text-2xl font-bold tracking-widest uppercase md:text-3xl'
							/>
						</div>

						<p className='text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg'>
							{personalData.tagline}
						</p>

						<div className='mt-6 flex flex-wrap gap-2'>
							<CyberTag icon='mdi:map-marker-outline'>{personalData.contact.location}</CyberTag>
							<CyberTag icon='mdi:circle' tone='yellow'>
								Available
							</CyberTag>
							<CyberTag icon='mdi:translate' tone='magenta'>
								TH / EN
							</CyberTag>
						</div>

						<div className='mt-8 flex flex-wrap items-center gap-3'>
							<CyberButton href='/projects' size='lg'>
								<Icon icon='mdi:folder-multiple-outline' />
								View Projects
							</CyberButton>
							<CyberButton href='/cv' variant='outline' size='lg'>
								<Icon icon='mdi:file-account-outline' />
								View CV
							</CyberButton>
						</div>

						{/* Socials */}
						<div className='mt-6 flex flex-wrap items-center gap-2'>
							{personalData.socialLinks.map(s => (
								<CyberTooltip key={s.platform} label={s.platform}>
									<a
										href={s.url}
										target={s.platform === 'email' ? undefined : '_blank'}
										rel='noopener noreferrer'
										aria-label={s.platform}
										className='border-border text-muted-foreground hover:border-cyber-cyan/60 hover:text-cyber-cyan hover:bg-cyber-cyan/[0.06] flex size-11 items-center justify-center border transition-colors'>
										<Icon icon={s.icon} className='size-5' />
									</a>
								</CyberTooltip>
							))}
						</div>
					</div>

					{/* Right: portrait */}
					<div className='relative order-first mx-auto lg:order-none lg:mx-0'>
						<div className='neon-panel clip-notch relative size-56 overflow-hidden sm:size-72 lg:size-80'>
							<Image
								src={personalData.avatar}
								alt={personalData.name}
								fill
								priority
								sizes='(max-width: 1024px) 18rem, 20rem'
								className='object-cover'
							/>
							<div className='scanlines pointer-events-none absolute inset-0 opacity-30' />
							<div className='from-background/50 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent' />
							<span className='border-cyber-cyan/60 absolute top-2 left-2 size-4 border-t-2 border-l-2' />
							<span className='border-cyber-cyan/60 absolute right-2 bottom-2 size-4 border-r-2 border-b-2' />
						</div>
						<span className='bg-cyber-yellow absolute -bottom-3 left-4 px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
							ID // NooobtimeX
						</span>
					</div>
				</div>
			</section>

			{/* CAREER */}
			<section className='mt-20'>
				<SectionHeader
					code='01'
					title='Career'
					subtitle='Current role and recent history.'
					action={
						<Link
							href='/experience'
							className='text-cyber-cyan hover:text-cyber-yellow hidden font-mono text-xs tracking-widest uppercase transition-colors md:block'>
							All →
						</Link>
					}
				/>
				<div className='mt-8 space-y-3'>
					{latestRoles.map((role, i) => (
						<MotionReveal key={role.id} delay={i * 0.06}>
							<Link
								href={`/experience/${role.id}` as never}
								className='group neon-panel clip-notch-sm hover:border-cyber-yellow/60 flex items-center gap-4 p-4 transition-colors'>
								{role.organization.logo && (
									<span className='relative size-11 shrink-0 overflow-hidden rounded-sm bg-white/90'>
										<Image
											src={role.organization.logo}
											alt={role.organization.name}
											fill
											sizes='44px'
											className='object-contain p-1'
										/>
									</span>
								)}
								<div className='min-w-0 flex-1'>
									<h3 className='font-display group-hover:text-cyber-yellow text-lg font-bold tracking-wide transition-colors'>
										{formatPosition(role.position)}
										<span className='text-cyber-yellow'> @ {role.organization.name}</span>
									</h3>
									<p className='text-muted-foreground mt-0.5 font-mono text-xs tracking-wider uppercase'>
										{formatExperienceDuration(role.startDate, role.endDate)}
									</p>
								</div>
								{role.id === nowId && (
									<span className='bg-cyber-yellow now-pulse shrink-0 px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
										Now
									</span>
								)}
								<Icon
									icon='mdi:arrow-right'
									className='text-muted-foreground group-hover:text-cyber-yellow size-5 shrink-0 transition-colors'
								/>
							</Link>
						</MotionReveal>
					))}
				</div>
			</section>

			{/* FEATURED PROJECTS */}
			<section className='mt-20'>
				<SectionHeader
					code='02'
					title='Featured Projects'
					subtitle='Selected builds — full-stack systems shipped end to end.'
					action={
						<Link
							href='/projects'
							className='text-cyber-cyan hover:text-cyber-yellow hidden font-mono text-xs tracking-widest uppercase transition-colors md:block'>
							All →
						</Link>
					}
				/>
				<div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{featured.map((p, i) => (
						<MotionReveal key={p.id} delay={i * 0.08}>
							<ProjectCard project={p} index={i} />
						</MotionReveal>
					))}
				</div>
			</section>

			{/* CORE STACK */}
			<section className='mt-20'>
				<SectionHeader
					code='03'
					title='Stack'
					subtitle='Core tools in active rotation.'
					action={
						<Link
							href='/skills'
							className='text-cyber-cyan hover:text-cyber-yellow hidden font-mono text-xs tracking-widest uppercase transition-colors md:block'>
							All →
						</Link>
					}
				/>
				<div className='mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7'>
					{homeSkills.map((s, i) => (
						<MotionReveal key={s.id} delay={(i % 7) * 0.04}>
							<Link
								href={`/skills/${s.id}` as never}
								className='group neon-panel clip-notch-sm hover:border-cyber-yellow/60 flex aspect-square flex-col items-center justify-center gap-2 p-3 text-center transition-colors'>
								<span className={cn('flex size-9 items-center justify-center', s.whiteBg && 'rounded-sm bg-white/90')}>
									<Icon icon={s.icon} className='size-8' />
								</span>
								<span className='group-hover:text-cyber-yellow text-[0.7rem] leading-tight font-semibold transition-colors'>
									{s.name}
								</span>
							</Link>
						</MotionReveal>
					))}
					<Link
						href='/skills'
						className='border-cyber-cyan/30 text-muted-foreground hover:border-cyber-yellow/60 hover:text-cyber-yellow clip-notch-sm flex aspect-square flex-col items-center justify-center gap-1 border border-dashed text-center transition-colors'>
						<Icon icon='mdi:dots-horizontal' className='size-6' />
						<span className='font-mono text-[0.6rem] tracking-widest uppercase'>All</span>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default HomeContent
