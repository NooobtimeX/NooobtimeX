'use client'

import { issuesData } from '@/common/data/issue'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'

export default function IssuePreview() {
	const featuredIssues = issuesData.slice(0, 3)

	return (
		<section id='issue' className='relative bg-black py-20'>
			{/* Background Halftone Pattern */}
			<div className='comic-halftone pointer-events-none absolute inset-0 opacity-30'></div>
			<div className='comic-web-pattern pointer-events-none absolute inset-0 opacity-10'></div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Header */}
				<ComicPop className='relative mb-20 text-center'>
					<div className='relative inline-block'>
						{/* Background splash */}
						<div className='bg-primary absolute inset-0 rotate-2 transform opacity-50 blur-sm'></div>

						{/* Spider Decoration */}
						<div className='absolute -top-12 -right-12 z-20 rotate-12 transform text-6xl drop-shadow-[0_0_10px_rgba(255,50,50,0.8)]'>
							🕷️
						</div>

						<div className='relative rotate-1 transform border-4 border-black bg-white px-10 py-4 text-black shadow-[8px_8px_0px_0px_white]'>
							<h2 className='text-4xl font-black tracking-tight uppercase md:text-6xl'>FEATURED ISSUES</h2>
						</div>
					</div>
					<p className='text-muted-foreground mx-auto mt-8 max-w-2xl text-xl font-black tracking-tight uppercase'>
						A showcase of my recent work and creative solutions
					</p>
				</ComicPop>

				<div className='mb-12 space-y-24'>
					{featuredIssues.map((issue, index) => (
						<IssueCard key={issue.id} issue={issue} index={index} variant='featured' showAllAbilities={false} />
					))}
				</div>
			</div>
		</section>
	)
}
