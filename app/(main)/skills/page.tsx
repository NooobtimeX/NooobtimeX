import React from 'react'
import { Metadata } from 'next'
import SkillsContent from '@/components/skills/SkillsContent'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `Skills | ${personalData.name}`,
	description: 'Technical arsenal — languages, frameworks, infrastructure, and growth/management capabilities.'
}

const SkillsPage: React.FC = () => {
	return <SkillsContent />
}

export default SkillsPage
