import React from 'react'
import { Metadata } from 'next'
import ProjectsContent from '@/components/projects/ProjectsContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Projects | ${personalData.name}`,
	description: 'Full-stack systems and products shipped end to end — selected builds and experiments.'
}

const ProjectsPage: React.FC = () => {
	return <ProjectsContent />
}

export default ProjectsPage
