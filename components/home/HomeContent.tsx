'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CyberButton from '@/components/cyber/CyberButton'
import CyberTag from '@/components/cyber/CyberTag'
import GlitchText from '@/components/cyber/GlitchText'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import SectionHeader from '@/components/cyber/SectionHeader'
import ProjectCard from '@/components/projects/ProjectCard'
import { formatAffiliationDuration, slugify } from '@/lib/utils'
import { abilitiesData, issuesData, personalData, workExperienceData } from '@/common'

const formatPosition = (position: string) =>
	position
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const HomeContent: React.FC = () => {
	const current = workExperienceData[0]
	const featured = issuesData.slice(0, 3)
	const coreSkills = abilitiesData.filter(a => a.important).slice(0, 12)

	return (
		<div className='mx-auto max-w-7xl px-4 md:px-6'>
			{/* HERO */}
			<section className='relative overflow-hidden py-16 md:py-24'>
				<div className='cyber-grid pointer-events-none absolute inset-0 -z-10 opacity-40' />
				<div className='from-background absolute inset-0 -z-10 bg-gradient-to-b to-transparent' />

				<p className='text-cyber-cyan font-mono text-xs tracking-[0.35em] uppercase'>// PORTFOLIO_v2.077</p>

				<h1 className='font-display mt-4 text-5xl leading-[0.9] font-bold tracking-tight uppercase md:text-8xl'>
					Wongsaphat
					<br />
					Puangsorn
				</h1>

				<div className='mt-4 flex items-center gap-3'>
					<span className='bg-cyber-yellow h-6 w-1' />
					<GlitchText
						text='Product Lead'
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
					{personalData.socialLinks.map(s => (
						<a
							key={s.platform}
							href={s.url}
							target='_blank'
							rel='noopener noreferrer'
							aria-label={s.platform}
							className='border-border text-muted-foreground hover:border-cyber-cyan/60 hover:text-cyber-cyan flex size-11 items-center justify-center border transition-colors'>
							<Icon icon={s.icon} className='size-5' />
						</a>
					))}
				</div>
			</section>

			{/* CURRENT OP */}
			{current && (
				<MotionReveal>
					<NeonPanel className='clip-notch flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between'>
						<div>
							<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>Current Operation</span>
							<h3 className='font-display mt-1 text-2xl font-bold tracking-wide'>
								{formatPosition(current.position)}
								<span className='text-cyber-yellow'> @ {current.affiliation.name}</span>
							</h3>
							<p className='text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase'>
								{formatAffiliationDuration(current.startDate, current.endDate)}
							</p>
						</div>
						<Link
							href={`/experience/${current.id}` as never}
							className='text-cyber-cyan hover:text-cyber-yellow flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
							Details <Icon icon='mdi:arrow-right' className='size-4' />
						</Link>
					</NeonPanel>
				</MotionReveal>
			)}

			{/* FEATURED PROJECTS */}
			<section className='mt-20'>
				<SectionHeader
					code='01'
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

			{/* CORE SKILLS */}
			<section className='mt-20'>
				<SectionHeader code='02' title='Core Stack' subtitle='Primary tools in active rotation.' />
				<div className='mt-8 flex flex-wrap gap-2'>
					{coreSkills.map(a => (
						<Link
							key={a.name}
							href={`/skills/${slugify(a.name)}` as never}
							className='neon-panel clip-notch-sm hover:border-cyber-yellow/60 flex items-center gap-2 px-3 py-2 transition-colors'>
							<Icon icon={a.icon} className='size-5' />
							<span className='text-sm font-semibold'>{a.name}</span>
						</Link>
					))}
				</div>
				<div className='mt-6'>
					<CyberButton href='/skills' variant='ghost' size='sm'>
						View full arsenal <Icon icon='mdi:arrow-right' />
					</CyberButton>
				</div>
			</section>
		</div>
	)
}

export default HomeContent
