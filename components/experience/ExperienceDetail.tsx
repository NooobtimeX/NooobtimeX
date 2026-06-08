import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CyberTag from '@/components/cyber/CyberTag'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectCard from '@/components/projects/ProjectCard'
import { formatAffiliationDuration, isCurrentPosition } from '@/lib/utils'
import { type AffiliationItem, issuesData } from '@/common'

interface ExperienceDetailProps {
	item: AffiliationItem
}

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ item }) => {
	const current = isCurrentPosition(item.endDate)
	const relatedProjects = issuesData.filter(p => p.linkedAffiliationId === item.affiliation.id)

	return (
		<div className='mx-auto max-w-4xl px-4 py-10 md:px-6'>
			<Link
				href='/experience'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> All Experience
			</Link>

			<NeonPanel className='clip-notch mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center'>
				{item.affiliation.logo && (
					<span className='relative size-16 shrink-0 overflow-hidden rounded-sm bg-white/90'>
						<Image
							src={item.affiliation.logo}
							alt={item.affiliation.name}
							fill
							sizes='64px'
							className='object-contain p-1.5'
						/>
					</span>
				)}
				<div className='flex-1'>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-4xl'>
						{humanize(item.position)}
					</h1>
					<p className='text-cyber-yellow text-lg'>{item.affiliation.name}</p>
					<p className='text-muted-foreground mt-1 font-mono text-xs tracking-wider uppercase'>
						{formatAffiliationDuration(item.startDate, item.endDate)}
					</p>
				</div>
				{current && (
					<span className='bg-cyber-yellow self-start px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
						Active
					</span>
				)}
			</NeonPanel>

			<div className='mt-6 flex flex-wrap gap-2'>
				<CyberTag icon='mdi:briefcase-outline'>{humanize(item.type)}</CyberTag>
				<CyberTag icon='mdi:map-marker-outline' tone='yellow'>
					{humanize(item.affiliation.location)}
				</CyberTag>
				<CyberTag icon='mdi:shape-outline' tone='magenta'>
					{humanize(item.category)}
				</CyberTag>
			</div>

			<section className='mt-8'>
				<h2 className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// Summary</h2>
				<p className='text-muted-foreground mt-3 leading-relaxed'>{item.description}</p>
				{item.affiliation.url && (
					<a
						href={item.affiliation.url}
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
						<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Related Projects</h2>
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
