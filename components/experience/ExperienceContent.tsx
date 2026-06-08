'use client'

import React from 'react'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import ExperienceCard from '@/components/experience/ExperienceCard'
import { educationData, personalProjectsData, workExperienceData } from '@/common'

const GROUPS = [
	{ code: '01', label: 'Work', data: workExperienceData },
	{ code: '02', label: 'Education', data: educationData },
	{ code: '03', label: 'Personal', data: personalProjectsData }
]

const ExperienceContent: React.FC = () => {
	return (
		<div className='mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader code='03' title='Experience' subtitle='Career roles, education, and self-directed builds.' />

			<div className='mt-10 space-y-12'>
				{GROUPS.map(group => {
					if (group.data.length === 0) return null
					return (
						<section key={group.label}>
							<div className='mb-5 flex items-center gap-3'>
								<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>{group.code}</span>
								<h3 className='font-display text-xl font-bold tracking-wide uppercase'>{group.label}</h3>
								<span className='bg-border h-px flex-1' />
							</div>
							<div className='grid gap-5 md:grid-cols-2'>
								{group.data.map((item, i) => (
									<MotionReveal key={item.id} delay={(i % 2) * 0.08}>
										<ExperienceCard item={item} />
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

export default ExperienceContent
