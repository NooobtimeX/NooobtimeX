import React from 'react'
import { Icon } from '@iconify/react'
import NeonPanel from '@/components/cyber/NeonPanel'
import SectionHeader from '@/components/cyber/SectionHeader'
import ContributionHeatmap, { type ContributionDay } from '@/components/github/ContributionHeatmap'

const USERNAME = 'NooobtimeX'
const REVALIDATE = 86400 // refresh daily
const GH_HEADERS = { 'User-Agent': `${USERNAME}-portfolio`, 'Accept': 'application/vnd.github+json' }

async function getContributions(): Promise<{ lastYear: number; days: ContributionDay[] } | null> {
	try {
		const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, {
			next: { revalidate: REVALIDATE }
		})
		if (!res.ok) return null
		const json = (await res.json()) as { total?: { lastYear?: number }; contributions?: ContributionDay[] }
		return { lastYear: json.total?.lastYear ?? 0, days: json.contributions ?? [] }
	} catch {
		return null
	}
}

async function getProfile(): Promise<{ repos: number; followers: number } | null> {
	try {
		const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
			headers: GH_HEADERS,
			next: { revalidate: REVALIDATE }
		})
		if (!res.ok) return null
		const json = (await res.json()) as { public_repos?: number; followers?: number }
		return { repos: json.public_repos ?? 0, followers: json.followers ?? 0 }
	} catch {
		return null
	}
}

async function getStars(): Promise<number | null> {
	try {
		const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`, {
			headers: GH_HEADERS,
			next: { revalidate: REVALIDATE }
		})
		if (!res.ok) return null
		const repos = (await res.json()) as { stargazers_count?: number }[]
		return repos.reduce((sum, r) => sum + (r.stargazers_count ?? 0), 0)
	} catch {
		return null
	}
}

function computeStreaks(days: ContributionDay[]) {
	let longest = 0
	let run = 0
	for (const d of days) {
		if (d.count > 0) {
			run++
			longest = Math.max(longest, run)
		} else {
			run = 0
		}
	}
	let current = 0
	for (let i = days.length - 1; i >= 0; i--) {
		if (days[i].count > 0) current++
		else break
	}
	return { current, longest }
}

const fmt = (n: number) => n.toLocaleString('en-US')

const GithubStats = async () => {
	const contrib = await getContributions()
	if (!contrib) return null // omit the section entirely if core data is unavailable

	const [profile, stars] = await Promise.all([getProfile(), getStars()])
	const { current, longest } = computeStreaks(contrib.days)

	const stats: { label: string; value: string; icon: string }[] = [
		{ label: 'Contributions / yr', value: fmt(contrib.lastYear), icon: 'mdi:source-commit' },
		{ label: 'Current streak', value: `${current}d`, icon: 'mdi:fire' },
		{ label: 'Longest streak', value: `${longest}d`, icon: 'mdi:trophy-outline' },
		{ label: 'Public repos', value: profile ? fmt(profile.repos) : '—', icon: 'mdi:source-repository' },
		{ label: 'Stars earned', value: stars != null ? fmt(stars) : '—', icon: 'mdi:star-outline' },
		{ label: 'Followers', value: profile ? fmt(profile.followers) : '—', icon: 'mdi:account-multiple-outline' }
	]

	return (
		<section className='mx-auto mt-20 max-w-7xl px-4 pb-4 md:px-6'>
			<SectionHeader
				code='04'
				title='GitHub'
				subtitle='Live contribution activity, refreshed daily.'
				action={
					<a
						href={`https://github.com/${USERNAME}`}
						target='_blank'
						rel='noopener noreferrer'
						className='text-cyber-cyan hover:text-cyber-yellow hidden items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors md:inline-flex'>
						<Icon icon='simple-icons:github' className='size-4' /> @{USERNAME}
					</a>
				}
			/>

			<div className='mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'>
				{stats.map(s => (
					<NeonPanel key={s.label} className='clip-notch-sm flex flex-col gap-1 p-4'>
						<Icon icon={s.icon} className='text-cyber-cyan size-4' />
						<span className='font-display neon-text-yellow text-2xl leading-none font-bold'>{s.value}</span>
						<span className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{s.label}</span>
					</NeonPanel>
				))}
			</div>

			<NeonPanel className='clip-notch mt-5 p-5'>
				<ContributionHeatmap contributions={contrib.days} />
			</NeonPanel>
		</section>
	)
}

export default GithubStats
