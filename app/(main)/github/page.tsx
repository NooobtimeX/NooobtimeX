import GithubStats from '@/components/github/GithubStats'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
	path: '/github',
	title: 'GitHub',
	description: 'Live GitHub contribution activity — heatmap, streaks, repos, stars, and followers.'
})

const GithubPage = async ({ searchParams }: { searchParams: Promise<{ year?: string }> }) => {
	const { year } = await searchParams
	return <GithubStats variant='page' year={year} />
}

export default GithubPage
