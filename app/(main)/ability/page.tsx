import React from 'react'
import { Metadata } from 'next'
import { personalData } from '@/common/data/personal'
import AbilityContent from './AbilityContent'

export const metadata: Metadata = {
	title: `Abilities | ${personalData.name}`,
	description: 'Explore my technical arsenal and capabilities including languages, frameworks, and tools.'
}

const AbilityPage: React.FC = () => {
	return <AbilityContent />
}

export default AbilityPage
