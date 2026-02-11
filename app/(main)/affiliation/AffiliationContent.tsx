'use client'

import React from 'react'
import { affiliationData } from '@/common/data/affiliation'
import { AffiliationEntityType } from '@/common/enum'
import AffiliationCard from '@/components/affiliation/AffiliationCard'
import ComicPop from '@/components/motion/ComicPop'

const AffiliationContent: React.FC = () => {
	// Filter for Company type affiliations
	const companiesData = affiliationData.filter(item => item.affiliation.type === AffiliationEntityType.Company)

	return (
		<div className='relative min-h-screen w-full overflow-x-hidden bg-black pt-24 pb-20'>
			{/* Background elements */}
			<div className='bg-[radial-gradient(circle_at_top_right,theme(colors.primary.DEFAULT)_0%,transparent_40%)] pointer-events-none fixed inset-0 opacity-20'></div>
			<div className='comic-halftone pointer-events-none fixed inset-0 opacity-10'></div>

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Header */}
				<ComicPop initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='mb-24 text-center'>
					<div className='group relative inline-block'>
						<div className='-rotate-1 transform border-4 border-black bg-white px-12 py-6 text-black shadow-[8px_8px_0px_0px_white] transition-transform group-hover:rotate-0'>
							<h1 className='font-[Bangers] text-5xl tracking-wider uppercase md:text-7xl'>AFFILIATIONS</h1>
						</div>
					</div>
					<p className='mt-8 font-[Bangers] text-xl tracking-wide text-gray-400 uppercase'>Career & Companies</p>
				</ComicPop>

				{/* Grid */}
				<section className='relative pb-20'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3'>
						{companiesData.map((item, index) => (
							<AffiliationCard key={item.id} item={item} index={index} />
						))}
					</div>
				</section>
			</div>
		</div>
	)
}

export default AffiliationContent
