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
	return (
		<div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader
				code='02'
				title='Skills'
				subtitle={`${skillsData.length} skills across frontend, backend, infrastructure, and growth.`}
			/>

			<div className='mt-12 space-y-12'>
				{ORDER.map((category, idx) => {
					const meta = categoryMetadata[category]
					const items = skillsData.filter(s => s.category === category)
					if (items.length === 0) return null

					return (
						<section key={category}>
							<div className='mb-5 flex items-center gap-3'>
								<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>
									{String(idx + 1).padStart(2, '0')}
								</span>
								<Icon icon={meta.icon} className='text-cyber-yellow size-5' />
								<h3 className='font-display text-xl font-bold tracking-wide uppercase'>{meta.label}</h3>
								<span className='bg-border h-px flex-1' />
								<span className='text-muted-foreground font-mono text-xs'>{items.length}</span>
							</div>

							<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
								{items.map((skill, i) => (
									<MotionReveal key={skill.name} delay={(i % 5) * 0.04}>
										<SkillNode skill={skill} />
									</MotionReveal>
								))}
							</div>
						</section>
					)
				})}
			</div>
		</div>
	)
}

export default SkillsContent
