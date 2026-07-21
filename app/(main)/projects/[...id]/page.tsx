import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/projects/ProjectDetail'
import { personalData, projectsData } from '@/common'

const SITE_URL = 'https://nooobtimex.me'

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

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		'name': project.title,
		'description': project.description,
		'applicationCategory': 'WebApplication',
		'operatingSystem': 'Web',
		'image': `${SITE_URL}${project.images.cover}`,
		'datePublished': project.startDate,
		'author': { '@type': 'Person', 'name': personalData.name, 'url': SITE_URL },
		'keywords': project.skills.map(s => s.name).join(', '),
		...(project.links.live && { url: project.links.live })
	}

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<ProjectDetail project={project} />
		</>
	)
}

export default ProjectDetailPage
