import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { SlideId } from '@/components/cv/PresentationView'
import { ExperienceId, IssueId } from '@/common'
import type { AffiliationItem, Issue } from '@/common'

export function FoundationalJourneySlide({
	tu,
	rs,
	qrProject,
	rsProject,
	goToId
}: {
	tu: AffiliationItem
	rs: AffiliationItem
	qrProject?: Issue
	rsProject?: Issue
	goToId: (id: SlideId | ExperienceId | IssueId) => void
}) {
	return (
		<div className='flex h-full flex-col justify-center gap-4 px-6 py-6 md:gap-8 md:px-16 md:py-10'>
			<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='text-center'>
				<h2 className='text-[10px] font-black tracking-[0.4em] text-red-500 uppercase md:text-xs'>
					Act I: Foundational Roots
				</h2>
				<h3 className='mt-1 text-xl font-black text-white uppercase md:mt-2 md:text-4xl'>
					Education & Professional Debut
				</h3>
			</motion.div>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8'>
				{/* TU + QR-Food Card */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					className='flex flex-col border border-zinc-800 bg-zinc-900/40 p-5 md:p-8'>
					<div className='mb-4 flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='h-10 w-10 overflow-hidden border border-zinc-700 bg-white p-1 md:h-12 md:w-12'>
								<img src={tu.affiliation.logo} alt='' className='h-full w-full object-contain' />
							</div>
							<div>
								<p className='text-[10px] font-black text-red-500 uppercase'>{tu.position}</p>
								<h4 className='text-sm font-black text-white uppercase md:text-lg'>{tu.affiliation.name}</h4>
							</div>
						</div>
					</div>
					{qrProject && (
						<div className='mt-2 space-y-3 border-t border-zinc-800 pt-4'>
							<h5 className='text-xs font-black text-zinc-300 uppercase'>Lead Project: {qrProject.title}</h5>
							<p className='text-xs leading-relaxed text-zinc-500'>
								{qrProject.description.split('.')[0]}. Developed during undergraduate studies.
							</p>
							<div className='flex flex-wrap gap-1.5'>
								{qrProject.abilities.slice(0, 4).map(a => (
									<span
										key={a.name}
										className='border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[9px] font-bold text-zinc-400 uppercase'>
										<Icon icon={a.icon} className='mr-1 inline text-red-600' />
										{a.name}
									</span>
								))}
							</div>
							<button
								onClick={() => goToId(qrProject.id)}
								className='text-[10px] font-black text-red-500 underline underline-offset-4 hover:text-white'>
								Full Case Study
							</button>
						</div>
					)}
				</motion.div>

				{/* RS Trophy + Web Card */}
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2 }}
					className='flex flex-col border border-zinc-800 bg-red-950/10 p-5 md:p-8'>
					<div className='mb-4 flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='h-10 w-10 overflow-hidden border border-zinc-700 bg-white p-1 md:h-12 md:w-12'>
								<img src={rs.affiliation.logo} alt='' className='h-full w-full object-contain' />
							</div>
							<div>
								<p className='text-[10px] font-black text-red-500 uppercase'>First Tech Role</p>
								<h4 className='text-sm font-black text-white uppercase md:text-lg'>{rs.affiliation.name}</h4>
							</div>
						</div>
					</div>
					{rsProject && (
						<div className='mt-2 space-y-3 border-t border-zinc-800 pt-4'>
							<h5 className='text-xs font-black text-zinc-300 uppercase'>Lead Project: {rsProject.title}</h5>
							<p className='text-xs leading-relaxed text-zinc-500'>
								Modernized legacy trophy production workflows as the sole developer.
							</p>
							<div className='flex flex-wrap gap-1.5'>
								{rsProject.abilities.slice(0, 4).map(a => (
									<span
										key={a.name}
										className='border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-[9px] font-bold text-zinc-400 uppercase'>
										<Icon icon={a.icon} className='mr-1 inline text-red-600' />
										{a.name}
									</span>
								))}
							</div>
							<button
								onClick={() => goToId(rsProject.id)}
								className='text-[10px] font-black text-red-500 underline underline-offset-4 hover:text-white'>
								Full Case Study
							</button>
						</div>
					)}
				</motion.div>
			</div>

			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				className='border-l-4 border-red-600 bg-white/5 p-4 text-xs leading-relaxed text-zinc-400 italic md:text-sm'>
				"I balanced my B.S. in CS at Thammasat with immediate impact at Ruamsuk Plating. This period was my defining
				chapter: learning at day, building at night."
			</motion.p>
		</div>
	)
}
