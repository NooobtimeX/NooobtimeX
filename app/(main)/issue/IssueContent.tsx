'use client'

import React from 'react'
import { issuesData } from '@/common/data/issue'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'

const IssueContent: React.FC = () => {
	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-24'>
			{/* Background */}
			<div className='comic-halftone pointer-events-none fixed inset-0 opacity-20'></div>

			{/* Header */}
			<div className='relative z-10 container mx-auto mb-16 max-w-7xl px-4 text-center'>
				<ComicPop initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className='relative inline-block'>
					<div className='-rotate-1 transform border-4 border-black bg-white px-12 py-6 text-black shadow-[8px_8px_0px_0px_white]'>
						<h1 className='text-5xl font-black tracking-wider uppercase md:text-7xl'>ISSUE ARCHIVE</h1>
					</div>
				</ComicPop>
				<ComicPop
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					delay={0.2}
					className='mt-6 text-xl font-black tracking-wide text-gray-400 uppercase'>
					Select an issue to read details
				</ComicPop>
			</div>

			{/* Issues Grid */}
			<section className='relative pb-20'>
				<div className='relative z-10 container mx-auto px-4'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
						{issuesData.map((issue, index) => (
							<IssueCard key={issue.id} issue={issue} index={index} variant='grid' showAllAbilities={false} />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default IssueContent
