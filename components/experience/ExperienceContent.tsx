'use client'

import React from 'react'
import Container from '@/components/cyber/Container'
import MotionReveal from '@/components/cyber/MotionReveal'
import SectionHeader from '@/components/cyber/SectionHeader'
import TraceNode from '@/components/experience/TraceNode'
import { experiencesData } from '@/common'

const ExperienceContent: React.FC = () => {
	// Active-today role (started, not yet ended). Data is sorted by startDate desc.
	const now = new Date()
	const nowId = experiencesData.find(
		r => new Date(r.startDate) <= now && (!r.endDate || new Date(r.endDate) >= now)
	)?.id

	return (
		<Container className='py-12 md:py-16'>
			<SectionHeader
				code='03'
				title='Career Trace'
				subtitle='Chronological lifepath — roles, freelance work, and education.'
			/>

			<div className='relative mt-12'>
				{/* central spine */}
				<span className='spine-line absolute top-0 bottom-0 left-5 w-px lg:left-1/2 lg:-translate-x-1/2' />

				<div className='space-y-8'>
					{experiencesData.map((item, i) => (
						<MotionReveal key={item.id} delay={(i % 2) * 0.06}>
							<TraceNode item={item} side={i % 2 === 0 ? 'left' : 'right'} isNow={item.id === nowId} />
						</MotionReveal>
					))}
				</div>
			</div>
		</Container>
	)
}

export default ExperienceContent
