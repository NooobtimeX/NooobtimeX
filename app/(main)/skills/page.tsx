import React from 'react'
import SkillsContent from '@/components/skills/SkillsContent'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
	path: '/skills',
	title: 'Skills',
	description: 'Technical arsenal — languages, frameworks, infrastructure, and growth/management capabilities.'
})

const SkillsPage: React.FC = () => {
	return <SkillsContent />
}

export default SkillsPage
