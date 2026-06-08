import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Container from '@/components/cyber/Container'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectCard from '@/components/projects/ProjectCard'
import { cn } from '@/lib/utils'
import { type Skill, categoryMetadata, projectsData } from '@/common'

interface SkillDetailProps {
	skill: Skill
}

const StatCell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
	<div className='border-border/60 border-l-2 pl-3'>
		<p className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{label}</p>
		<p className='mt-0.5 text-sm font-semibold'>{children}</p>
	</div>
)

const SkillDetail: React.FC<SkillDetailProps> = ({ skill }) => {
	const meta = categoryMetadata[skill.category]
	const deployedIn = projectsData.filter(p => p.skills.some(s => s.name === skill.name))

	return (
		<Container className='py-10'>
			<Link
				href='/skills'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> Skill Tree
			</Link>

			{/* Skill header node */}
			<NeonPanel className='clip-notch mt-6 flex items-center gap-5 p-6'>
				<span
					className={cn(
						'perk-node clip-notch-sm flex size-20 shrink-0 items-center justify-center',
						skill.whiteBg && 'bg-white/90'
					)}>
					<Icon icon={skill.icon} className='size-12' />
				</span>
				<div>
					<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// {meta.label} branch</span>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-5xl'>{skill.name}</h1>
				</div>
			</NeonPanel>

			{/* Stat readout */}
			<NeonPanel className='clip-notch-sm mt-6 grid grid-cols-2 gap-4 p-4'>
				<StatCell label='Branch'>{meta.label}</StatCell>
				<StatCell label='Deployed'>
					<span className='text-cyber-cyan'>{deployedIn.length} gigs</span>
				</StatCell>
			</NeonPanel>

			<section className='mt-10'>
				<div className='mb-6 flex items-center gap-3'>
					<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Deployed In</h2>
					<span className='bg-border h-px flex-1' />
					<span className='text-muted-foreground font-mono text-xs'>{deployedIn.length}</span>
				</div>

				{deployedIn.length > 0 ?
					<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
						{deployedIn.map((p, i) => (
							<MotionReveal key={p.id} delay={(i % 3) * 0.08}>
								<ProjectCard project={p} index={i} />
							</MotionReveal>
						))}
					</div>
				:	<p className='text-muted-foreground font-mono text-sm'>No public gigs tagged with this perk yet.</p>}
			</section>
		</Container>
	)
}

export default SkillDetail
