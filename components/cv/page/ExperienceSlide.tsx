import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { SlideId } from '@/components/cv/PresentationView'
import { formatAffiliationDuration } from '@/lib/utils'
import { AffiliationId, IssueId, issuesData } from '@/common'
import type { AffiliationItem } from '@/common'

export function ExperienceSlide({
	exp,
	goToId
}: {
	exp: AffiliationItem
	goToId: (id: SlideId | AffiliationId | IssueId) => void
}) {
	const linkedProjects = issuesData.filter(p => p.linkedAffiliationId === exp.id)
	const allAbilities = Array.from(new Map(linkedProjects.flatMap(p => p.abilities).map(a => [a.name, a])).values())
	return (
		<div className='flex h-full flex-col justify-center gap-4 px-6 py-6 md:gap-5 md:px-16 md:py-10'>
			{/* Header */}
			<div className='flex flex-col items-start justify-between gap-4 md:flex-row'>
				<div>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className='mb-1 text-[10px] font-black tracking-[0.3em] text-red-500 uppercase md:text-xs'>
						{exp.affiliation.name}
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className='text-2xl font-black tracking-tight text-white uppercase md:text-4xl'>
						{exp.position}
					</motion.h2>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500 md:gap-4 md:text-sm'>
						<span className='flex items-center gap-1.5'>
							<Icon icon='material-symbols:calendar-month' className='text-red-500' />
							{formatAffiliationDuration(exp.startDate, exp.endDate)}
						</span>
						<span className='flex items-center gap-1.5'>
							<Icon icon='material-symbols:work' className='text-red-500' />
							{exp.type}
						</span>
						{exp.affiliation.location && (
							<span className='hidden items-center gap-1.5 md:flex'>
								<Icon icon='material-symbols:location-on' className='text-red-500' />
								{exp.affiliation.location}
							</span>
						)}
					</motion.div>
				</div>
				{exp.affiliation.logo && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.15 }}
						className='h-12 w-24 shrink-0 overflow-hidden border border-zinc-700 bg-white p-2 md:h-16 md:w-32'>
						<img src={exp.affiliation.logo} alt={exp.affiliation.name} className='h-full w-full object-contain' />
					</motion.div>
				)}
			</div>

			{exp.description && (
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.25 }}
					className='border-l-2 border-red-600 pl-4 text-xs leading-relaxed text-zinc-400 md:text-sm'>
					{exp.description}
				</motion.p>
			)}

			{allAbilities.length > 0 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
					<p className='mb-2 text-[8px] font-black tracking-widest text-zinc-600 uppercase md:text-[10px]'>
						Tech Stack
					</p>
					<div className='flex flex-wrap gap-1.5 md:gap-2'>
						{allAbilities.map((a, i) => (
							<motion.span
								key={a.name}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ delay: 0.3 + i * 0.03 }}
								className='flex items-center gap-1.5 border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-[9px] font-bold text-zinc-300 uppercase md:px-2 md:py-1 md:text-[11px]'>
								<Icon icon={a.icon} className='h-3 w-3 text-red-500' />
								{a.name}
							</motion.span>
						))}
					</div>
				</motion.div>
			)}

			{linkedProjects.length > 0 && (
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
					<p className='mb-2 text-[8px] font-black tracking-widest text-zinc-600 uppercase md:text-[10px]'>
						{linkedProjects.length} Project{linkedProjects.length > 1 ? 's' : ''} — click to view
					</p>
					<div className='flex flex-wrap gap-1.5 md:gap-2'>
						{linkedProjects.map(p => (
							<button
								key={p.id}
								onClick={() => goToId(p.id)}
								className='cursor-pointer border border-red-800 bg-red-950/30 px-2.5 py-0.5 text-[10px] font-bold text-red-400 uppercase transition-colors hover:bg-red-600 hover:text-white md:px-3 md:py-1 md:text-xs'>
								{p.title}
							</button>
						))}
					</div>
				</motion.div>
			)}
		</div>
	)
}
