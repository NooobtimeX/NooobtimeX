import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CyberTag from '@/components/cyber/CyberTag'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectCard from '@/components/projects/ProjectCard'
import { cn, formatExperienceDuration } from '@/lib/utils'
import { ExperienceCategory, type ExperienceItem, experiencesData, projectsData } from '@/common'

interface ExperienceDetailProps {
	item: ExperienceItem
}

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const categoryAccent: Record<ExperienceCategory, string> = {
	[ExperienceCategory.Work]: 'text-cyber-cyan',
	[ExperienceCategory.Education]: 'text-cyber-yellow',
	[ExperienceCategory.Personal]: 'text-cyber-magenta'
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ item }) => {
	// Active-today role (started, not yet ended).
	const now = new Date()
	const isNow =
		experiencesData.find(r => new Date(r.startDate) <= now && (!r.endDate || new Date(r.endDate) >= now))?.id
		=== item.id
	const relatedProjects = projectsData.filter(p => p.linkedOrganizationId === item.organization.id)

	return (
		<div className='mx-auto max-w-4xl px-4 py-10 md:px-6'>
			<Link
				href='/experience'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> Career Trace
			</Link>

			<NeonPanel
				className={cn(
					'clip-notch mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center',
					isNow && 'neon-panel-yellow'
				)}>
				{item.organization.logo && (
					<span className='relative size-16 shrink-0 overflow-hidden rounded-sm bg-white/90'>
						<Image
							src={item.organization.logo}
							alt={item.organization.name}
							fill
							sizes='64px'
							className='object-contain p-1.5'
						/>
					</span>
				)}
				<div className='flex-1'>
					<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// Service Record</span>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-4xl'>
						{humanize(item.position)}
					</h1>
					<p className='text-cyber-yellow text-lg'>{item.organization.name}</p>
					<p className='text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase'>
						{formatExperienceDuration(item.startDate, item.endDate)}
					</p>
				</div>
				{isNow && (
					<span className='bg-cyber-yellow now-pulse self-start px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
						Now
					</span>
				)}
			</NeonPanel>

			<div className='mt-6 flex flex-wrap gap-2'>
				<CyberTag icon='mdi:briefcase-outline'>{humanize(item.type)}</CyberTag>
				<CyberTag icon='mdi:map-marker-outline' tone='yellow'>
					{humanize(item.organization.location)}
				</CyberTag>
				<CyberTag icon='mdi:shape-outline' tone='magenta'>
					{humanize(item.category)}
				</CyberTag>
			</div>

			<section className='mt-8'>
				<h2 className={cn('font-mono text-xs tracking-[0.3em] uppercase', categoryAccent[item.category])}>
					// Summary
				</h2>
				<p className='text-muted-foreground mt-3 leading-relaxed'>{item.description}</p>
				{item.organization.url && (
					<a
						href={item.organization.url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-cyber-cyan hover:text-cyber-yellow mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
						<Icon icon='mdi:open-in-new' className='size-4' /> Visit Organization
					</a>
				)}
			</section>

			{relatedProjects.length > 0 && (
				<section className='mt-10'>
					<div className='mb-6 flex items-center gap-3'>
						<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Linked Gigs</h2>
						<span className='bg-border h-px flex-1' />
						<span className='text-muted-foreground font-mono text-xs'>{relatedProjects.length}</span>
					</div>
					<div className='grid gap-5 sm:grid-cols-2'>
						{relatedProjects.map((p, i) => (
							<MotionReveal key={p.id} delay={(i % 2) * 0.08}>
								<ProjectCard project={p} index={i} />
							</MotionReveal>
						))}
					</div>
				</section>
			)}
		</div>
	)
}

export default ExperienceDetail
