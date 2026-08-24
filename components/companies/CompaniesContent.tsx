import React from 'react'
import Link from 'next/link'
import Container from '@/components/cyber/Container'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import { type EntityType, type Organization, entitiesData, experiencesData, projectsData } from '@/common'

const humanize = (value: string) =>
	value
		.split('-')
		.map(w => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ')

const groups: { type: EntityType; label: string }[] = [{ type: 'company', label: 'Companies' }]

const CompanyCard: React.FC<{ org: Organization; index: number }> = ({ org, index }) => {
	const roles = experiencesData.filter(e => e.organization.id === org.id)
	const gigs = projectsData.filter(
		p =>
			p.clientOrganizationId === org.id
			|| p.viaOrganizationId === org.id
			|| p.linkedExperienceIds?.some(id => roles.some(r => r.id === id))
	)

	return (
		<MotionReveal delay={(index % 3) * 0.08}>
			<Link
				href={`/companies/${org.id}` as never}
				className='group neon-panel clip-notch-sm hover:border-cyber-yellow/60 flex h-full flex-col p-5 transition-colors'>
				<div className='flex items-center gap-4'>
					{org.logo && (
						<span className='relative size-12 shrink-0 overflow-hidden rounded-sm bg-white/90'>
							<img
								src={org.logo}
								alt={org.name}
								loading='lazy'
								decoding='async'
								className='absolute inset-0 size-full object-contain p-1'
							/>
						</span>
					)}
					<div className='min-w-0'>
						<h3 className='group-hover:text-cyber-yellow truncate leading-tight font-bold tracking-wide uppercase transition-colors'>
							{org.name}
						</h3>
						<p className='text-muted-foreground font-mono text-[0.65rem] tracking-wider uppercase'>
							{humanize(org.location)}
						</p>
						{org.industry && <p className='text-cyber-cyan/70 mt-0.5 truncate text-[0.7rem]'>{org.industry}</p>}
					</div>
				</div>
				{org.description && (
					<p className='text-muted-foreground mt-3 line-clamp-3 text-sm leading-relaxed'>{org.description}</p>
				)}
				<p className='text-cyber-cyan mt-auto pt-3 font-mono text-[0.65rem] tracking-wider uppercase'>
					{roles.length} {roles.length === 1 ? 'role' : 'roles'} · {gigs.length} {gigs.length === 1 ? 'gig' : 'gigs'}
				</p>
			</Link>
		</MotionReveal>
	)
}

const CompaniesContent: React.FC = () => {
	return (
		<Container className='py-10'>
			<SectionHeader
				as='h1'
				code='05'
				title='Network'
				subtitle={`${entitiesData.length} organizations across the career map — employers and collaborators.`}
			/>

			{groups.map(group => {
				const orgs = entitiesData.filter(o => o.type === group.type)
				if (orgs.length === 0) return null
				return (
					<section key={group.type} className='mt-10'>
						<div className='mb-6 flex items-center gap-3'>
							<h2 className='font-display text-xl font-bold tracking-wide uppercase'>{group.label}</h2>
							<span className='bg-border h-px flex-1' />
							<span className='text-muted-foreground font-mono text-xs'>{orgs.length}</span>
						</div>
						<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
							{orgs.map((org, i) => (
								<CompanyCard key={org.id} org={org} index={i} />
							))}
						</div>
					</section>
				)
			})}
		</Container>
	)
}

export default CompaniesContent
