import React from 'react'

export interface ContributionDay {
	date: string
	count: number
	level: number
}

interface ContributionHeatmapProps {
	contributions: ContributionDay[]
}

// level 0–4 → cyber-yellow intensity scale (0 = faint cyan tint)
const SCALE = [
	'rgba(0, 240, 255, 0.08)',
	'rgba(252, 238, 10, 0.28)',
	'rgba(252, 238, 10, 0.5)',
	'rgba(252, 238, 10, 0.72)',
	'#FCEE0A'
]

const CELL = 12 // px
const GAP = 4 // px
const STEP = CELL + GAP
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/**
 * GitHub-style contribution calendar: weeks as columns, weekdays as rows,
 * recolored to the cyberpunk palette. Pure render — native title tooltips.
 */
const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({ contributions }) => {
	if (!contributions.length) return null

	// Pad the start so the first column lines up with the correct weekday (Sun=0).
	const firstWeekday = new Date(contributions[0].date + 'T00:00:00Z').getUTCDay()
	const cells: (ContributionDay | null)[] = [...Array(firstWeekday).fill(null), ...contributions]

	const weeks: (ContributionDay | null)[][] = []
	for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

	// Month label per week column (first week whose first real day starts a new month).
	const monthMarks: { week: number; label: string }[] = []
	let lastMonth = -1
	weeks.forEach((week, wi) => {
		const firstReal = week.find(Boolean)
		if (!firstReal) return
		const m = new Date(firstReal.date + 'T00:00:00Z').getUTCMonth()
		if (m !== lastMonth) {
			monthMarks.push({ week: wi, label: MONTHS[m] })
			lastMonth = m
		}
	})

	const gridWidth = weeks.length * STEP

	return (
		<div className='overflow-x-auto pb-1'>
			<div className='inline-flex gap-2'>
				{/* weekday labels */}
				<div className='text-muted-foreground flex flex-col gap-1 pt-5 font-mono text-[0.55rem]'>
					{['', 'Mon', '', 'Wed', '', 'Fri', ''].map((d, i) => (
						<span key={i} className='flex h-3 items-center leading-none'>
							{d}
						</span>
					))}
				</div>

				<div>
					{/* month labels */}
					<div
						className='text-muted-foreground relative mb-1 h-4 font-mono text-[0.55rem]'
						style={{ width: gridWidth }}>
						{monthMarks.map(m => (
							<span key={`${m.week}-${m.label}`} className='absolute top-0' style={{ left: m.week * STEP }}>
								{m.label}
							</span>
						))}
					</div>

					{/* week columns */}
					<div className='flex gap-1'>
						{weeks.map((week, wi) => (
							<div key={wi} className='flex flex-col gap-1'>
								{Array.from({ length: 7 }).map((_, di) => {
									const day = week[di]
									if (!day) return <span key={di} className='size-3' />
									return (
										<span
											key={di}
											title={`${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
											className='size-3 rounded-[2px]'
											style={{ backgroundColor: SCALE[day.level] ?? SCALE[0] }}
										/>
									)
								})}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* legend */}
			<div className='text-muted-foreground mt-3 flex items-center gap-1.5 pl-8 font-mono text-[0.6rem] tracking-wider uppercase'>
				Less
				{SCALE.map((c, i) => (
					<span key={i} className='size-3 rounded-[2px]' style={{ backgroundColor: c }} />
				))}
				More
			</div>
		</div>
	)
}

export default ContributionHeatmap
