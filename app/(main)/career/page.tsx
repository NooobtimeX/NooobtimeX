import React from 'react'
import { Metadata } from 'next'
import ExperienceContent from '@/components/experience/ExperienceContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Career | ${personalData.name}`,
	description: 'Professional roles, freelance work, and education across the timeline.'
}

const ExperiencePage: React.FC = () => {
	return <ExperienceContent />
}

export default ExperiencePage
