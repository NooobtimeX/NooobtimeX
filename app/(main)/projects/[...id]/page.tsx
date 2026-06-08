import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { personalData, projectsData } from '@/common'

interface ProjectDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return projectsData.map(p => ({ id: [p.id] }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const project = projectsData.find(p => p.id === id?.[0])

	if (!project) return { title: 'Project Not Found' }

	return {
		title: `${project.title} | Project | ${personalData.name}`,
		description: project.description
	}
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = async ({ params }) => {
	const { id } = await params
	const project = projectsData.find(p => p.id === id?.[0])

	if (!project) notFound()

	return <ProjectDetail project={project} />
}

export default ProjectDetailPage
