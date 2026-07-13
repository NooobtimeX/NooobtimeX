import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Container from '@/components/cyber/Container'
import CyberTag from '@/components/cyber/CyberTag'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectCard from '@/components/projects/ProjectCard'
import { formatExperienceDuration, slugify } from '@/lib/utils'
import { type Organization, experiencesData, projectsData } from '@/common'

interface CompanyDetailProps {
	organization: Organization
}

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const StatCell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
	<div className='border-border/60 border-l-2 pl-3'>
		<p className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{label}</p>
		<p className='mt-0.5 text-sm font-semibold'>{children}</p>
	</div>
)

const CompanyDetail: React.FC<CompanyDetailProps> = ({ organization }) => {
	// Roles held here (newest first, matching experiencesData order).
	const roles = experiencesData.filter(e => e.organization.id === organization.id)
	// Gigs delivered under any of those roles.
	const gigs = projectsData.filter(
		p =>
			p.clientOrganizationId === organization.id
			|| p.viaOrganizationId === organization.id
			|| p.linkedExperienceIds?.some(id => roles.some(r => r.id === id))
	)
	// Skill rollup across those gigs (unique by name).
	const skills = Array.from(new Map(gigs.flatMap(g => g.skills).map(s => [s.name, s])).values())
	// Tenure span: earliest role start → latest end (Present if any role is open).
	const tenureStart = roles.length > 0 ? roles.reduce((a, b) => (a.startDate < b.startDate ? a : b)).startDate : null
	const hasOpenRole = roles.some(r => !r.endDate)
	const tenureEnd =
		hasOpenRole ? undefined : (
			roles.reduce<string | undefined>(
				(max, r) => (r.endDate && (!max || r.endDate > max) ? r.endDate : max),
				undefined
			)
		)

	return (
		<Container className='py-10'>
			<Link
				href='/companies'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> Network
			</Link>

			{/* Company header */}
			<NeonPanel className='clip-notch mt-6 flex flex-col gap-5 p-6 sm:flex-row sm:items-center'>
				{organization.logo && (
					<span className='relative size-16 shrink-0 overflow-hidden rounded-sm bg-white/90'>
						<Image src={organization.logo} alt={organization.name} fill sizes='64px' className='object-contain p-1.5' />
					</span>
				)}
				<div className='flex-1'>
					<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// Corp File</span>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-4xl'>{organization.name}</h1>
					{organization.description && (
						<p className='text-muted-foreground mt-2 max-w-3xl leading-relaxed'>{organization.description}</p>
					)}
				</div>
			</NeonPanel>

			<div className='mt-6 flex flex-wrap gap-2'>
				<CyberTag icon='mdi:domain'>{humanize(organization.type)}</CyberTag>
				<CyberTag icon='mdi:map-marker-outline' tone='yellow'>
					{humanize(organization.location)}
				</CyberTag>
				{organization.url && (
					<a href={organization.url} target='_blank' rel='noopener noreferrer'>
						<CyberTag icon='mdi:open-in-new' tone='magenta'>
							Website
						</CyberTag>
					</a>
				)}
			</div>

			{/* Stat readout */}
			<NeonPanel className='clip-notch-sm mt-6 grid grid-cols-2 gap-4 p-4 sm:grid-cols-4'>
				<StatCell label='Roles'>{roles.length}</StatCell>
				<StatCell label='Tenure'>
					{tenureStart ?
						<span className='text-cyber-yellow'>{formatExperienceDuration(tenureStart, tenureEnd)}</span>
					:	'—'}
				</StatCell>
				<StatCell label='Gigs'>
					<span className='text-cyber-cyan'>{gigs.length}</span>
				</StatCell>
				<StatCell label='Skills Fielded'>{skills.length}</StatCell>
			</NeonPanel>

			{/* Roles held here */}
			{roles.length > 0 && (
				<section className='mt-10'>
					<div className='mb-6 flex items-center gap-3'>
						<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Service Records</h2>
						<span className='bg-border h-px flex-1' />
						<span className='text-muted-foreground font-mono text-xs'>{roles.length}</span>
					</div>
					<div className='grid gap-4 sm:grid-cols-2'>
						{roles.map((role, i) => (
							<MotionReveal key={role.id} delay={(i % 2) * 0.06}>
								<Link
									href={`/career/${role.id}` as never}
									className='group neon-panel clip-notch-sm hover:border-cyber-yellow/60 block p-4 transition-colors'>
									<h3 className='group-hover:text-cyber-yellow leading-tight font-bold tracking-wide uppercase transition-colors'>
										{humanize(role.position)}
									</h3>
									<p className='text-muted-foreground mt-2 font-mono text-[0.65rem] tracking-wider uppercase'>
										{formatExperienceDuration(role.startDate, role.endDate)} · {humanize(role.type)}
									</p>
									<p className='text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed'>{role.description}</p>
								</Link>
							</MotionReveal>
						))}
					</div>
				</section>
			)}

			{/* Gigs delivered here */}
			{gigs.length > 0 && (
				<section className='mt-10'>
					<div className='mb-6 flex items-center gap-3'>
						<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Linked Gigs</h2>
						<span className='bg-border h-px flex-1' />
						<span className='text-muted-foreground font-mono text-xs'>{gigs.length}</span>
					</div>
					<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
						{gigs.map((p, i) => (
							<MotionReveal key={p.id} delay={(i % 3) * 0.08}>
								<ProjectCard project={p} index={i} />
							</MotionReveal>
						))}
					</div>
				</section>
			)}

			{/* Skill rollup */}
			{skills.length > 0 && (
				<section className='mt-10'>
					<div className='mb-6 flex items-center gap-3'>
						<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Loadout</h2>
						<span className='bg-border h-px flex-1' />
						<span className='text-muted-foreground font-mono text-xs'>{skills.length}</span>
					</div>
					<div className='flex flex-wrap gap-2'>
						{skills.map(s => (
							<Link
								key={s.name}
								href={`/skills/${slugify(s.name)}` as never}
								className='border-border hover:border-cyber-cyan/60 flex items-center gap-1.5 border px-2 py-1 text-xs transition-colors'>
								<Icon icon={s.icon} className='size-4' />
								{s.name}
							</Link>
						))}
					</div>
				</section>
			)}
		</Container>
	)
}

export default CompanyDetail
