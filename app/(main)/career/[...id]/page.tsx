import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ExperienceDetail from '@/components/experience/ExperienceDetail'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { formatPosition } from '@/lib/utils'
import { experiencesData } from '@/common'

interface ExperienceDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return experiencesData.map(e => ({ id: [e.id] }))
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

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const item = experiencesData.find(a => a.id === id?.[0])

	if (!item) return { title: 'Career Entry Not Found', robots: { index: false, follow: false } }

	return pageMetadata({
		path: `/career/${item.id}`,
		title: `${formatPosition(item.position)} @ ${item.organization.name}`,
		description: item.description
	})
}

const ExperienceDetailPage: React.FC<ExperienceDetailPageProps> = async ({ params }) => {
	const { id } = await params
	const item = experiencesData.find(a => a.id === id?.[0])

	if (!item) notFound()

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Career', path: '/career' },
		{ name: `${item.position} @ ${item.organization.name}`, path: `/career/${item.id}` }
	])

	return (
		<>
			<JsonLd data={breadcrumbs} />
			<ExperienceDetail item={item} />
		</>
	)
}

export default ExperienceDetailPage
