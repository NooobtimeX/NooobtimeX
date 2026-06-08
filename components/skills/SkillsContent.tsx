'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import SkillNode from '@/components/skills/SkillNode'
import { SkillCategory, categoryMetadata, skillsData } from '@/common'

const ORDER: SkillCategory[] = [
	SkillCategory.Frontend,
	SkillCategory.Backend,
	SkillCategory.Infrastructure,
	SkillCategory.GrowthManagement
]

const SkillsContent: React.FC = () => {
	const coreCount = skillsData.filter(s => s.important).length

	return (
		<div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader
				code='02'
				title='Skill Tree'
				subtitle={`${skillsData.length} perks · ${coreCount} core · 4 attribute branches`}
			/>

			<div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4'>
				{ORDER.map((category, idx) => {
					const meta = categoryMetadata[category]
					const items = skillsData.filter(s => s.category === category)
					if (items.length === 0) return null

					return (
						<MotionReveal key={category} delay={idx * 0.08} className='relative'>
							<div className='relative flex flex-col items-center gap-3.5'>
								{/* vertical spine behind the nodes */}
								<span className='spine-line absolute top-[4.5rem] bottom-2 left-1/2 w-px -translate-x-1/2' />

								{/* Attribute header node */}
								<div className='perk-node-core clip-notch relative z-10 flex w-full flex-col items-center gap-1 px-4 py-4 text-center'>
									<Icon icon={meta.icon} className='text-cyber-yellow size-7' />
									<span className='font-display text-sm font-bold tracking-widest uppercase'>{meta.label}</span>
									<span className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>
										{String(idx + 1).padStart(2, '0')} · {items.length} perks
									</span>
								</div>

								{/* connector pip */}
								<span className='bg-cyber-cyan/60 relative z-10 size-1.5 rotate-45' />

								{/* Skill nodes cascade down the spine */}
								{items.map(skill => (
									<SkillNode key={skill.name} skill={skill} />
								))}
							</div>
						</MotionReveal>
					)
				})}
			</div>
		</div>
	)
}

export default SkillsContent
