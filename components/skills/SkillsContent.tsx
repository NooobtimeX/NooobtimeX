'use client'

import React from 'react'
import { Icon } from '@iconify/react'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import SkillCard from '@/components/skills/SkillCard'
import { AbilityCategory, abilitiesData, categoryMetadata } from '@/common'

const ORDER: AbilityCategory[] = [
	AbilityCategory.Frontend,
	AbilityCategory.Backend,
	AbilityCategory.Infrastructure,
	AbilityCategory.GrowthManagement
]

const SkillsContent: React.FC = () => {
	return (
		<div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader
				code='02'
				title='Skills'
				subtitle={`${abilitiesData.length} capabilities across the full stack and beyond.`}
			/>

			<div className='mt-10 space-y-12'>
				{ORDER.map((category, idx) => {
					const meta = categoryMetadata[category]
					const items = abilitiesData.filter(a => a.category === category)
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
							<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
								{items.map((a, i) => (
									<MotionReveal key={a.name} delay={(i % 4) * 0.05}>
										<SkillCard ability={a} />
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
