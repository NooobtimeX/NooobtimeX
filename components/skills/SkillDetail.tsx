import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
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
		<div className='mx-auto max-w-5xl px-4 py-10 md:px-6'>
			<Link
				href='/skills'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> Skill Tree
			</Link>

			{/* Perk header node */}
			<NeonPanel className={cn('clip-notch mt-6 flex items-center gap-5 p-6', skill.important && 'neon-panel-yellow')}>
				<span
					className={cn(
						'perk-node clip-notch-sm flex size-20 shrink-0 items-center justify-center',
						skill.important && 'perk-node-core',
						skill.whiteBg && 'bg-white/90'
					)}>
					<Icon icon={skill.icon} className='size-12' />
				</span>
				<div>
					<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>
						// Perk · {meta.label} branch
					</span>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-5xl'>{skill.name}</h1>
					{skill.important && (
						<span className='bg-cyber-yellow mt-2 inline-block px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
							Core Perk
						</span>
					)}
				</div>
			</NeonPanel>

			{/* Stat readout */}
			<NeonPanel className='clip-notch-sm mt-6 grid grid-cols-2 gap-4 p-4 sm:grid-cols-3'>
				<StatCell label='Branch'>{meta.label}</StatCell>
				<StatCell label='Class'>
					<span className={skill.important ? 'text-cyber-yellow' : 'text-muted-foreground'}>
						{skill.important ? 'Core' : 'Standard'}
					</span>
				</StatCell>
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
		</div>
	)
}

export default SkillDetail
