import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SkillDetail from '@/components/skills/SkillDetail'
import { slugify } from '@/lib/utils'
import { abilitiesData, personalData } from '@/common'

interface PageProps {
	params: Promise<{ id: string[] }>
}

export function generateStaticParams() {
	return abilitiesData.map(ability => ({ id: [slugify(ability.name)] }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params
	const ability = abilitiesData.find(a => slugify(a.name) === id?.[0])

	if (!ability) return { title: 'Skill Not Found' }

	return {
		title: `${ability.name} | Skill | ${personalData.name}`,
		description: `Projects and work powered by ${ability.name}.`
	}
}

export default async function SkillDetailPage({ params }: PageProps) {
	const { id } = await params
	const ability = abilitiesData.find(a => slugify(a.name) === id?.[0])

	if (!ability) notFound()

	return <SkillDetail ability={ability} />
}
