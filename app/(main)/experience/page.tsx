import React from 'react'
import { Metadata } from 'next'
import ExperienceContent from '@/components/experience/ExperienceContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Experience | ${personalData.name}`,
	description: 'Professional roles, education, and personal projects across the timeline.'
}

const ExperiencePage: React.FC = () => {
	return <ExperienceContent />
}

export default ExperiencePage
