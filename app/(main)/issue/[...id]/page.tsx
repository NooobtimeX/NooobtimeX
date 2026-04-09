import React from 'react'
import { Metadata } from 'next'
import { issuesData, personalData } from '@/common'
import IssueDetailContent from './IssueDetailContent'

interface IssueDetailPageProps {
	params: Promise<{
		id: string[]
	}>
}

export async function generateStaticParams() {
	return issuesData.map(post => ({
		id: [post.id]
	}))
}

export async function generateMetadata({ params }: IssueDetailPageProps): Promise<Metadata> {
	const resolvedParams = await params
	const id = resolvedParams.id?.[0]
	const issue = issuesData.find(p => p.id === id)

	if (!issue) {
		return {
			title: 'Issue Not Found'
		}
	}

	return {
		title: `${issue.title} | Issue | ${personalData.name}`,
		description: issue.description
	}
}

const IssueDetailPage: React.FC<IssueDetailPageProps> = async ({ params }) => {
	const resolvedParams = await params
	const id = resolvedParams.id?.[0]

	return <IssueDetailContent id={id} />
}

export default IssueDetailPage
