'use client'

import React from 'react'
import IssueCard from '@/components/issue/IssueCard'
import ComicPop from '@/components/motion/ComicPop'
import { issuesData } from '@/common'

const IssueContent: React.FC = () => {
	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-24'>
			{/* Global Background Elements */}
			<div className='pointer-events-none fixed inset-0 z-0 opacity-20'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_1px,transparent_1px)] bg-size-[24px_24px]'></div>
				{/* Top Right Web */}
				<div className='comic-web-pattern absolute top-0 right-0 h-[500px] w-[500px] rotate-12 transform opacity-30'></div>
				{/* Bottom Left Web */}
				<div className='comic-web-pattern absolute bottom-0 left-0 h-[500px] w-[500px] scale-x-[-1] -rotate-12 transform opacity-30'></div>
			</div>

			<div className='pointer-events-none fixed top-0 left-0 z-0 h-full w-full opacity-10'>
				<div className='bg-primary absolute top-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full blur-[120px]'></div>
				<div className='absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white blur-[100px]'></div>
			</div>

			{/* Header */}
			<div className='relative z-10 container mx-auto mb-24 max-w-7xl px-4 text-center'>
				<ComicPop
					initial={{ opacity: 0, scale: 0.8, y: -50 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					className='relative z-10 inline-block'>
					<div className='silk-hero-badge'>
						<h1 className='silk-hero-badge-text'>ISSUE ARCHIVE</h1>
					</div>
				</ComicPop>
				<p className='mx-auto mt-8 max-w-3xl text-2xl font-black tracking-wide text-white uppercase text-shadow-sm'>
					&quot;Secure data repositories & project dossiers&quot;
				</p>
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
