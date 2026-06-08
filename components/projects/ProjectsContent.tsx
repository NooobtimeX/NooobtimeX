'use client'

import React from 'react'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import ProjectCard from '@/components/projects/ProjectCard'
import { issuesData } from '@/common'

const ProjectsContent: React.FC = () => {
	return (
		<div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader
				code='01'
				title='Projects'
				subtitle={`${issuesData.length} systems — architected, built, and shipped.`}
			/>
			<div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
				{issuesData.map((p, i) => (
					<MotionReveal key={p.id} delay={(i % 3) * 0.08}>
						<ProjectCard project={p} index={i} />
					</MotionReveal>
				))}
			</div>
		</div>
	)
}

export default ProjectsContent
