import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CompanyDetail from '@/components/companies/CompanyDetail'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { SITE_URL, pageMetadata } from '@/lib/seo'
import { entitiesData } from '@/common'

interface CompanyDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return entitiesData.map(org => ({ id: [org.id] }))
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

export async function generateMetadata({ params }: CompanyDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const org = entitiesData.find(o => o.id === id?.[0])
	if (!org) return { title: 'Company Not Found', robots: { index: false, follow: false } }

	return pageMetadata({
		path: `/companies/${org.id}`,
		title: `${org.name} | Company`,
		description: org.about ?? org.description ?? `Roles and projects at ${org.name}.`
	})
}

const CompanyDetailPage: React.FC<CompanyDetailPageProps> = async ({ params }) => {
	const { id } = await params
	const org = entitiesData.find(o => o.id === id?.[0])
	if (!org) notFound()

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': org.type === 'university' ? 'CollegeOrUniversity' : 'Organization',
		'name': org.name,
		'description': org.about ?? org.description,
		...(org.url && { url: org.url }),
		...(org.logo && { logo: `${SITE_URL}${org.logo}` }),
		...(org.founded && { foundingDate: org.founded }),
		...(org.headquarters && { address: org.headquarters })
	}

	const breadcrumbs = breadcrumbSchema([
		{ name: 'Home', path: '/' },
		{ name: 'Companies', path: '/companies' },
		{ name: org.name, path: `/companies/${org.id}` }
	])

	return (
		<>
			<JsonLd data={jsonLd} />
			<JsonLd data={breadcrumbs} />
			<CompanyDetail organization={org} />
		</>
	)
}

export default CompanyDetailPage
