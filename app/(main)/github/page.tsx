import { Metadata } from 'next'
import GithubStats from '@/components/github/GithubStats'
import { personalData } from '@/common'

export const metadata: Metadata = {
	title: `GitHub | ${personalData.name}`,
	description: 'Live GitHub contribution activity — heatmap, streaks, repos, stars, and followers.'
}

const GithubPage = async ({ searchParams }: { searchParams: Promise<{ year?: string }> }) => {
	const { year } = await searchParams
	return <GithubStats variant='page' year={year} />
}

export default GithubPage
