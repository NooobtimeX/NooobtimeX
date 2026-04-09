import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { slugify } from '@/lib/utils'
import { orderedAbilities } from '@/common'
import AbilityDetailContent from './AbilityDetailContent'

export function generateStaticParams() {
	return orderedAbilities.map(ability => ({
		id: [slugify(ability.name)]
	}))
}

interface PageProps {
	params: Promise<{ id: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params
	const slug = id[0]
	const ability = orderedAbilities.find(a => slugify(a.name) === slug)

	if (!ability) return { title: 'Ability Not Found' }

	return {
		title: `${ability.name} | Technical Arsenal`,
		description: `Explore projects and achievements powered by ${ability.name}.`
	}
}

export default async function AbilityDetailPage({ params }: PageProps) {
	const { id } = await params
	const slug = id[0]
	const ability = orderedAbilities.find(a => slugify(a.name) === slug)

	if (!ability) {
		notFound()
	}

	return <AbilityDetailContent ability={ability} />
}
