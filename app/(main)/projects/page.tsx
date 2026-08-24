import React from 'react'
import ProjectsContent from '@/components/projects/ProjectsContent'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
	path: '/projects',
	title: 'Projects',
	description: 'Full-stack systems and products shipped end to end — selected builds and experiments.'
})

const ProjectsPage: React.FC = () => {
	return <ProjectsContent />
}

export default ProjectsPage
