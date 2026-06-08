import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import MotionReveal from '@/components/cyber/MotionReveal'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectCard from '@/components/projects/ProjectCard'
import { cn } from '@/lib/utils'
import { type Skill, categoryMetadata, projectsData } from '@/common'

interface SkillDetailProps {
	ability: Skill
}

const SkillDetail: React.FC<SkillDetailProps> = ({ ability }) => {
	const meta = categoryMetadata[ability.category]
	const usedIn = projectsData.filter(p => p.skills.some(a => a.name === ability.name))

	return (
		<div className='mx-auto max-w-5xl px-4 py-10 md:px-6'>
			<Link
				href='/skills'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> All Skills
			</Link>

			<NeonPanel className='clip-notch mt-6 flex items-center gap-5 p-6'>
				<span
					className={cn(
						'border-border flex size-16 shrink-0 items-center justify-center border',
						ability.whiteBg && 'bg-white/90'
					)}>
					<Icon icon={ability.icon} className='size-10' />
				</span>
				<div>
					<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>{meta.label}</span>
					<h1 className='font-display text-3xl font-bold tracking-wide uppercase md:text-5xl'>{ability.name}</h1>
					{ability.important && (
						<span className='bg-cyber-yellow mt-2 inline-block px-2 py-0.5 font-mono text-[0.6rem] font-bold tracking-widest text-black uppercase'>
							Core Skill
						</span>
					)}
				</div>
			</NeonPanel>

			<section className='mt-10'>
				<div className='mb-6 flex items-center gap-3'>
					<h2 className='font-display text-xl font-bold tracking-wide uppercase'>Applied In</h2>
					<span className='bg-border h-px flex-1' />
					<span className='text-muted-foreground font-mono text-xs'>{usedIn.length}</span>
				</div>

				{usedIn.length > 0 ?
					<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
						{usedIn.map((p, i) => (
							<MotionReveal key={p.id} delay={(i % 3) * 0.08}>
								<ProjectCard project={p} index={i} />
							</MotionReveal>
						))}
					</div>
				:	<p className='text-muted-foreground font-mono text-sm'>No public projects tagged with this skill yet.</p>}
			</section>
		</div>
	)
}

export default SkillDetail
