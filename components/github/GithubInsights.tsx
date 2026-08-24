import React from 'react'
import CyberIcon from '@/components/cyber/CyberIcon'
import NeonPanel from '@/components/cyber/NeonPanel'

export interface GithubInsightsData {
	monthly: { key: string; label: string; full: string; count: number }[]
	weekday: { label: string; count: number }[]
	languages: { name: string; bytes: number }[]
	topRepos: { name: string; stars: number; language: string | null; url: string; description: string | null }[]
	activeDays: number
	totalDays: number
	avgPerDay: number
	busiest: { date: string; count: number } | null
}

const Heading: React.FC<{ children: React.ReactNode; count?: React.ReactNode }> = ({ children, count }) => (
	<div className='mb-4 flex items-center gap-3'>
		<h3 className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// {children}</h3>
		<span className='bg-border h-px flex-1' />
		{count != null && <span className='text-muted-foreground font-mono text-xs'>{count}</span>}
	</div>
)

/** Vertical bars — one per month of the trailing year. */
const MonthlyBars: React.FC<{ data: GithubInsightsData['monthly'] }> = ({ data }) => {
	const max = Math.max(...data.map(d => d.count), 1)
	return (
		<>
			<div className='flex h-44 items-end gap-1.5'>
				{data.map(d => (
					<div key={d.key} className='flex h-full flex-1 flex-col justify-end' title={`${d.full} — ${d.count}`}>
						<div
							className='clip-notch-sm to-cyber-cyan from-cyber-cyan/15 hover:to-cyber-yellow w-full bg-gradient-to-t transition-colors'
							style={{ height: `${Math.max(3, (d.count / max) * 100)}%` }}
						/>
					</div>
				))}
			</div>
			<div className='mt-2 flex gap-1.5'>
				{data.map(d => (
					<span key={d.key} className='text-muted-foreground flex-1 text-center font-mono text-[0.55rem] uppercase'>
						{d.label}
					</span>
				))}
			</div>
		</>
	)
}

/** Horizontal bars for the 7 weekdays. */
const WeekdayBars: React.FC<{ data: GithubInsightsData['weekday'] }> = ({ data }) => {
	const max = Math.max(...data.map(d => d.count), 1)
	return (
		<div className='space-y-2.5'>
			{data.map(d => (
				<div key={d.label} className='flex items-center gap-3'>
					<span className='text-muted-foreground w-9 font-mono text-[0.6rem] tracking-widest uppercase'>{d.label}</span>
					<div className='bg-border/40 h-2.5 flex-1 overflow-hidden'>
						<div className='bg-cyber-cyan h-full' style={{ width: `${(d.count / max) * 100}%` }} />
					</div>
					<span className='text-cyber-yellow w-10 text-right font-mono text-[0.6rem]'>{d.count}</span>
				</div>
			))}
		</div>
	)
}

const StatCell: React.FC<{ icon: string; label: string; value: React.ReactNode; sub?: string }> = ({
	icon,
	label,
	value,
	sub
}) => (
	<NeonPanel className='clip-notch-sm flex flex-col gap-1 p-4'>
		<CyberIcon icon={icon} className='text-cyber-cyan size-4' />
		<span className='font-display neon-text-yellow text-2xl leading-none font-bold'>{value}</span>
		<span className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{label}</span>
		{sub && <span className='text-muted-foreground/70 font-mono text-[0.55rem]'>{sub}</span>}
	</NeonPanel>
)

const GithubInsights: React.FC<{ data: GithubInsightsData }> = ({ data }) => {
	const { monthly, weekday, languages, topRepos, activeDays, totalDays, avgPerDay, busiest } = data
	const maxLang = Math.max(...languages.map(l => l.bytes), 1)
	const totalLangBytes = languages.reduce((s, l) => s + l.bytes, 0) || 1
	const activePct = totalDays ? Math.round((activeDays / totalDays) * 100) : 0
	const busiestLabel =
		busiest ? new Date(busiest.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'

	return (
		<div className='mt-12 space-y-5'>
			{/* derived rhythm cells */}
			<div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
				<StatCell
					icon='mdi:calendar-check'
					label='Active days'
					value={`${activeDays}`}
					sub={`${activePct}% of ${totalDays}`}
				/>
				<StatCell icon='mdi:source-commit' label='Commits / day' value={avgPerDay.toFixed(1)} sub='per active day' />
				<StatCell icon='mdi:flash' label='Busiest day' value={busiest ? `${busiest.count}` : '—'} sub={busiestLabel} />
			</div>

			<div className='grid gap-5 lg:grid-cols-2'>
				<NeonPanel className='clip-notch p-5'>
					<Heading>Monthly cadence</Heading>
					<MonthlyBars data={monthly} />
				</NeonPanel>

				<NeonPanel className='clip-notch p-5'>
					<Heading>Weekday rhythm</Heading>
					<WeekdayBars data={weekday} />
				</NeonPanel>
			</div>

			<div className='grid gap-5 lg:grid-cols-2'>
				{languages.length > 0 && (
					<NeonPanel className='clip-notch p-5'>
						<Heading count={languages.length}>Languages</Heading>
						<div className='space-y-2.5'>
							{languages.slice(0, 6).map(l => (
								<div key={l.name} className='flex items-center gap-3'>
									<span className='w-24 truncate text-xs'>{l.name}</span>
									<div className='bg-border/40 h-2 flex-1 overflow-hidden'>
										<div className='bg-cyber-magenta h-full' style={{ width: `${(l.bytes / maxLang) * 100}%` }} />
									</div>
									<span className='text-muted-foreground w-10 text-right font-mono text-[0.6rem]'>
										{Math.round((l.bytes / totalLangBytes) * 100)}%
									</span>
								</div>
							))}
						</div>
					</NeonPanel>
				)}

				{topRepos.length > 0 && (
					<NeonPanel className='clip-notch p-5'>
						<Heading count={topRepos.length}>Top repositories</Heading>
						<div className='-mt-1'>
							{topRepos.map(r => (
								<a
									key={r.name}
									href={r.url}
									target='_blank'
									rel='noopener noreferrer'
									className='border-border/40 hover:text-cyber-cyan group flex items-center justify-between gap-3 border-b py-2.5 transition-colors last:border-0'>
									<div className='min-w-0'>
										<p className='truncate text-sm font-semibold'>{r.name}</p>
										{r.description && <p className='text-muted-foreground truncate text-[0.7rem]'>{r.description}</p>}
									</div>
									<div className='flex shrink-0 items-center gap-3 font-mono text-xs'>
										{r.language && <span className='text-muted-foreground'>{r.language}</span>}
										<span className='text-cyber-yellow flex items-center gap-1'>
											<CyberIcon icon='mdi:star' className='size-3' />
											{r.stars}
										</span>
									</div>
								</a>
							))}
						</div>
					</NeonPanel>
				)}
			</div>
		</div>
	)
}

export default GithubInsights
