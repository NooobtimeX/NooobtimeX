import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CompanyDetail from '@/components/companies/CompanyDetail'
import { entitiesData, personalData } from '@/common'

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

	return <CompanyDetail organization={org} />
}

export default CompanyDetailPage
