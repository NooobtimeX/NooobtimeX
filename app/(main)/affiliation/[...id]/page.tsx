import React from 'react'
import { Metadata } from 'next'
import { affiliationData } from '@/data/affiliationData'
import AffiliationDetailContent from './AffiliationDetailContent'

interface AffiliationDetailPageProps {
	params: Promise<{
		id: string[]
	}>
}

export async function generateMetadata({ params }: AffiliationDetailPageProps): Promise<Metadata> {
	const resolvedParams = await params
	const id = resolvedParams.id?.[0]
	const affiliationItem = affiliationData.find(a => a.id === id)

	if (!affiliationItem) {
		return {
			title: 'Affiliation Not Found'
		}
	}

	return {
		title: `${affiliationItem.position} at ${affiliationItem.affiliation.name} | Affiliation`,
		description: affiliationItem.description
	}
}

const AffiliationDetailPage: React.FC<AffiliationDetailPageProps> = async ({ params }) => {
	const resolvedParams = await params
	const id = resolvedParams.id?.[0]

	return <AffiliationDetailContent id={id} />
}

export default AffiliationDetailPage
