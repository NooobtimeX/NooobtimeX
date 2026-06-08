import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SkillDetail from '@/components/skills/SkillDetail'
import { personalData, skillsData } from '@/common'

interface PageProps {
	params: Promise<{ id: string[] }>
}

export function generateStaticParams() {
	return skillsData.map(skill => ({ id: [skill.id] }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params
	const skill = skillsData.find(s => s.id === id?.[0])

	if (!skill) return { title: 'Skill Not Found' }

	return {
		title: `${skill.name} | Skill | ${personalData.name}`,
		description: `Projects and work powered by ${skill.name}.`
	}
}

export default async function SkillDetailPage({ params }: PageProps) {
	const { id } = await params
	const skill = skillsData.find(s => s.id === id?.[0])

	if (!skill) notFound()

	return <SkillDetail skill={skill} />
}
