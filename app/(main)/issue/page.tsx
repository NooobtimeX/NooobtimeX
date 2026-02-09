import React from 'react'
import { Metadata } from 'next'
import { personalData } from '@/data/personal'
import IssueContent from './IssueContent'

export const metadata: Metadata = {
	title: `Issue | ${personalData.name}`,
	description: 'Archives of my projects, experiments, and contributions to the open-source world.'
}

const IssuePage: React.FC = () => {
	return <IssueContent />
}

export default IssuePage
