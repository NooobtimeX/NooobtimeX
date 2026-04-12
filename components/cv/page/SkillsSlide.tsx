import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import type { AbilityGroup } from '@/common'
import { abilitiesData, categoryMetadata, getDynamicAbilities, issuesData } from '@/common'

export function SkillsSlide() {
	const groups = getDynamicAbilities(issuesData, categoryMetadata, abilitiesData).filter((g: AbilityGroup) =>
		['Frontend', 'Backend', 'Infrastructure'].includes(g.category)
	)
	return (
		<div className='flex h-full flex-col justify-center px-6 md:px-16'>
			<motion.h2
				initial={{ x: -40, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				className='mb-6 text-[10px] font-black tracking-[0.3em] text-red-500 uppercase md:mb-10 md:text-sm'>
				Core Competencies
			</motion.h2>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
				{groups.map((group, gi) => {
					const core = group.abilities.filter(a => a.important)
					return (
						<div key={group.category}>
							<motion.h3
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: gi * 0.1 }}
								className='mb-3 text-[10px] font-black tracking-widest text-zinc-500 uppercase md:mb-4 md:text-xs'>
								{group.category}
							</motion.h3>
							<div className='flex flex-wrap gap-1.5 md:gap-2'>
								{core.map((a, ai) => (
									<motion.span
										key={a.name}
										initial={{ scale: 0.8, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: gi * 0.1 + ai * 0.04 }}
										className='flex items-center gap-1.5 border border-zinc-700 bg-zinc-900 px-1.5 py-0.5 text-[9px] font-bold text-zinc-300 uppercase md:px-2 md:py-1 md:text-[11px]'>
										<Icon icon={a.icon} className='h-3 w-3 text-red-500' />
										{a.name}
									</motion.span>
								))}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
