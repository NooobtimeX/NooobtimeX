import React from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import Container from '@/components/cyber/Container'
import CyberIcon from '@/components/cyber/CyberIcon'
import NeonPanel from '@/components/cyber/NeonPanel'
import SectionHeader from '@/components/cyber/SectionHeader'
import ContributionHeatmap from '@/components/github/ContributionHeatmap'
import GithubInsights from '@/components/github/GithubInsights'
import { type ContributionDay, type RepoSummary, USERNAME, getContributions, getProfile, getRepos } from '@/lib/github'
import { cn } from '@/lib/utils'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Roll the daily series up into the visualizations the insights panel needs. */
function buildInsights(days: ContributionDay[], repos: RepoSummary | null) {
	const monthMap = new Map<string, number>()
	const weekdaySums = Array<number>(7).fill(0)
	let activeDays = 0
	let total = 0
	let busiest: ContributionDay | null = null

	for (const d of days) {
		monthMap.set(d.date.slice(0, 7), (monthMap.get(d.date.slice(0, 7)) ?? 0) + d.count)
		weekdaySums[new Date(d.date).getUTCDay()] += d.count
		if (d.count > 0) activeDays++
		total += d.count
		if (!busiest || d.count > busiest.count) busiest = d
	}

	const monthly = [...monthMap.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.slice(-12)
		.map(([key, count]) => {
			const m = Number(key.slice(5, 7)) - 1
			return { key, label: MONTHS[m][0], full: `${MONTHS[m]} ${key.slice(0, 4)}`, count }
		})

	const weekday = WEEKDAYS.map((label, i) => ({ label, count: weekdaySums[i] }))

	return {
		monthly,
		weekday,
		languages: repos?.languages ?? [],
		topRepos: repos?.top ?? [],
		activeDays,
		totalDays: days.length,
		avgPerDay: activeDays ? total / activeDays : 0, // averaged over active days, not the full window
		busiest: busiest ? { date: busiest.date, count: busiest.count } : null
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

const GithubStats = async ({ variant = 'page', year = 'last' }: { variant?: 'home' | 'page'; year?: string }) => {
	// Home is always the trailing year; only the dedicated page honors a selected calendar year.
	const selectedYear = variant === 'page' && /^\d{4}$/.test(year) ? year : 'last'
	const contrib = await getContributions(selectedYear)
	if (!contrib) return null // omit the section entirely if core data is unavailable

	const [profile, repos] = await Promise.all([getProfile(), getRepos()])
	const { current, longest } = computeStreaks(contrib.days)

	const currentYear = new Date().getFullYear()
	const startYear = profile?.createdYear ?? currentYear - 5
	const years = [
		'last',
		...Array.from({ length: Math.max(0, currentYear - startYear) + 1 }, (_, i) => String(currentYear - i))
	]

	const allStats: { label: string; value: string; icon: string; homeHidden?: boolean }[] = [
		{
			label: selectedYear === 'last' ? 'Contributions / yr' : `Contributions ${selectedYear}`,
			value: fmt(contrib.total),
			icon: 'mdi:source-commit'
		},
		{ label: 'Current streak', value: `${current}d`, icon: 'mdi:fire' },
		{ label: 'Longest streak', value: `${longest}d`, icon: 'mdi:trophy-outline' },
		{
			label: 'Public repos',
			value: profile ? fmt(profile.repos) : '—',
			icon: 'mdi:source-repository',
			homeHidden: true
		},
		{ label: 'Stars earned', value: repos ? fmt(repos.stars) : '—', icon: 'mdi:star-outline' },
		{
			label: 'Followers',
			value: profile ? fmt(profile.followers) : '—',
			icon: 'mdi:account-multiple-outline',
			homeHidden: true
		}
	]
	// Home keeps the four activity-focused cards; the full repos/followers set lives on /github.
	const stats = variant === 'home' ? allStats.filter(s => !s.homeHidden) : allStats

	return (
		<Container as='section' className={variant === 'home' ? 'mt-20 pb-4' : 'py-12 md:py-16'}>
			{/* On home the hero owns the h1; only the standalone /github page promotes this. */}
			<SectionHeader
				as={variant === 'home' ? 'h2' : 'h1'}
				code='04'
				title='GitHub'
				subtitle={
					selectedYear === 'last' ?
						'Live contribution activity, refreshed daily.'
					:	`Contribution activity in ${selectedYear}.`
				}
				action={
					variant === 'home' ?
						<Link
							href='/github'
							className='text-cyber-cyan hover:text-cyber-yellow hidden items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors md:inline-flex'>
							View activity <CyberIcon icon='mdi:arrow-right' className='size-4' />
						</Link>
					:	<a
							href={`https://github.com/${USERNAME}`}
							target='_blank'
							rel='noopener noreferrer'
							className='text-cyber-cyan hover:text-cyber-yellow hidden items-center gap-1.5 font-mono text-xs tracking-widest uppercase transition-colors md:inline-flex'>
							<CyberIcon icon='simple-icons:github' className='size-4' /> @{USERNAME}
						</a>
				}
			/>

			{/* Server-rendered framing. Everything below this point is numbers pulled from the
			    GitHub API, so without it the standalone page ships almost no prose — a crawler
			    saw a heading, some digits and a heatmap of empty cells. */}
			{variant === 'page' && (
				<p className='text-muted-foreground mt-6 max-w-3xl text-base leading-relaxed'>
					A running record of what actually gets shipped: commits, pull requests and issues across public repositories,
					refreshed daily. Most of the work behind the projects on this site lives in private repositories, so treat
					this as a floor rather than a total. Pick a year to see how the shape of the work changed — the heatmap below
					reads left to right, one column per week.
				</p>
			)}

			{variant === 'page' && (
				<div className='mt-6 flex flex-wrap gap-2'>
					{years.map(y => {
						const active = y === selectedYear
						return (
							<Link
								key={y}
								href={(y === 'last' ? '/github' : `/github?year=${y}`) as Route}
								className={cn(
									'clip-notch-sm border px-3 py-1 font-mono text-xs tracking-widest uppercase transition-colors',
									active ?
										'bg-cyber-yellow border-cyber-yellow text-black'
									:	'border-border text-muted-foreground hover:border-cyber-cyan hover:text-cyber-cyan'
								)}>
								{y === 'last' ? 'Last 12 mo' : y}
							</Link>
						)
					})}
				</div>
			)}

			<div
				className={
					variant === 'home' ?
						'mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4'
					:	'mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6'
				}>
				{stats.map(s => (
					<NeonPanel key={s.label} className='clip-notch-sm flex flex-col gap-1 p-4'>
						<CyberIcon icon={s.icon} className='text-cyber-cyan size-4' />
						<span className='font-display neon-text-yellow text-2xl leading-none font-bold'>{s.value}</span>
						<span className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{s.label}</span>
					</NeonPanel>
				))}
			</div>

			<NeonPanel className='clip-notch mt-5 p-5'>
				<ContributionHeatmap contributions={contrib.days} />
			</NeonPanel>

			{variant === 'page' && <GithubInsights data={buildInsights(contrib.days, repos)} />}
		</Container>
	)
}

export default GithubStats
