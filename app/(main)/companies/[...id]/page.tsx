import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CompanyDetail from '@/components/companies/CompanyDetail'
import { entitiesData, personalData } from '@/common'

const SITE_URL = 'https://nooobtimex.me'

interface CompanyDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return entitiesData.map(org => ({ id: [org.id] }))
}

export async function generateMetadata({ params }: CompanyDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const org = entitiesData.find(o => o.id === id?.[0])
	if (!org) return { title: 'Company Not Found' }

	return {
		title: `${org.name} | Companies | ${personalData.name}`,
		description: org.about ?? org.description ?? `Roles and projects at ${org.name}.`
	}
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

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			<CompanyDetail organization={org} />
		</>
	)
}

export default CompanyDetailPage
