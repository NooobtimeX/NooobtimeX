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

			<div className='relative z-10 container mx-auto max-w-7xl px-4'>
				{/* Header */}
				<ComicPop
					initial={{ opacity: 0, scale: 0.8, y: -50 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					className='mb-24 text-center'>
					<div className='silk-hero-badge'>
						<h1 className='silk-hero-badge-text'>AFFILIATIONS</h1>
					</div>
					<p className='mx-auto mt-8 max-w-3xl text-2xl font-black tracking-wide text-white uppercase text-shadow-sm'>
						&quot;Strategic career history & professional alliances&quot;
					</p>
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
