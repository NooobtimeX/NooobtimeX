'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/cyber/SectionHeader'
import GigDetail from '@/components/projects/GigDetail'
import GigList from '@/components/projects/GigList'
import { type Project, entitiesData, projectsData } from '@/common'

const orgFor = (p: Project) =>
	p.linkedOrganizationId ? entitiesData.find(o => o.id === p.linkedOrganizationId) : undefined

const tierFor = (p: Project) => Math.min(3, Math.max(1, Math.ceil(p.skills.length / 4)))

const ProjectsContent: React.FC = () => {
	const [selectedId, setSelectedId] = React.useState<string>(projectsData[0]?.id ?? '')
	const selected = projectsData.find(p => p.id === selectedId) ?? projectsData[0]

	return (
		<div className='mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16'>
			<SectionHeader
				code='01'
				title='Gig Board'
				subtitle={`${projectsData.length} contracts on the wire — select a gig to view the briefing.`}
			/>

			<div className='mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]'>
				<GigList
					items={projectsData}
					selectedId={selected?.id ?? ''}
					onSelect={setSelectedId}
					orgFor={orgFor}
					tierFor={tierFor}
				/>

				{selected && (
					<AnimatePresence mode='wait'>
						<GigDetail key={selected.id} project={selected} org={orgFor(selected)} tier={tierFor(selected)} />
					</AnimatePresence>
				)}
			</div>
		</div>
	)
}

export default ProjectsContent
