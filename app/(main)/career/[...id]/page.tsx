import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ExperienceDetail from '@/components/experience/ExperienceDetail'
import { experiencesData, personalData } from '@/common'

interface ExperienceDetailPageProps {
	params: Promise<{ id: string[] }>
}

export async function generateStaticParams() {
	return experiencesData.map(e => ({ id: [e.id] }))
}

export async function generateMetadata({ params }: ExperienceDetailPageProps): Promise<Metadata> {
	const { id } = await params
	const item = experiencesData.find(a => a.id === id?.[0])

	if (!item) return { title: 'Career Entry Not Found' }

	return {
		title: `${item.position} @ ${item.organization.name} | Career | ${personalData.name}`,
		description: item.description
	}
}

const ExperienceDetailPage: React.FC<ExperienceDetailPageProps> = async ({ params }) => {
	const { id } = await params
	const item = experiencesData.find(a => a.id === id?.[0])

	if (!item) notFound()

	return <ExperienceDetail item={item} />
}

export default ExperienceDetailPage
