import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectDetail from '@/components/projects/ProjectDetail'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { DISPLAY_NAME, SITE_URL, pageMetadata } from '@/lib/seo'
import { projectsData } from '@/common'

interface ProjectDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return projectsData.map(p => ({ id: [p.id] }))
}

/**
 * Unknown slugs must 404 at the routing layer, not render.
 *
 * `app/loading.tsx` streams a shell for any matched route, which flushes response
 * headers at 200 — so a later `notFound()` renders 404 UI inside an already-committed
 * 200. That turned every mistyped detail slug into an indexable soft-404 titled
 * "… Not Found". With `generateStaticParams` above and `dynamicParams` false, Next
 * never enters the segment for an unknown param.
 */
export const dynamicParams = false

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const project = projectsData.find(p => p.id === id?.[0])

	if (!project) return { title: 'Project Not Found', robots: { index: false, follow: false } }

	return pageMetadata({
		path: `/projects/${project.id}`,
		title: `${project.title} | Project`,
		description: project.description,
		ogImage: `/card/og/projects/${project.id}`
	})
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
		'author': { '@type': 'Person', 'name': DISPLAY_NAME, 'url': SITE_URL },
		'keywords': project.skills.map(s => s.name).join(', '),
		...(project.links.live && { url: project.links.live })
	}

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Projects', path: '/projects' },
		{ name: project.title, path: `/projects/${project.id}` }
	])

	return (
		<>
			<JsonLd data={jsonLd} />
			<JsonLd data={breadcrumbs} />
			<ProjectDetail project={project} />
		</>
	)
}

export default ProjectDetailPage
