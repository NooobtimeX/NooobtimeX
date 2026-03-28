'use client'

import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { getDynamicAbilities } from '@/common/data/ability/dynamicAbilities'
import { issuesData } from '@/common/data/issue'

const totalProjects = issuesData.length
const totalTech = getDynamicAbilities().flatMap(g => g.abilities).length
const yearsActive = new Date().getFullYear() - 2021

const stats = [
	{ label: 'Years Active', value: `${yearsActive}+`, icon: 'material-symbols:timer' },
	{ label: 'Projects Shipped', value: `${totalProjects}`, icon: 'material-symbols:rocket-launch' },
	{ label: 'Technologies', value: `${totalTech}+`, icon: 'material-symbols:code' },
	{ label: 'Availability', value: 'OPEN', icon: 'material-symbols:circle', pulse: true }
]

export default function StatsBar() {
	return (
		<div className='relative z-10 border-y-4 border-white bg-black'>
			<div className='container mx-auto max-w-7xl'>
				<div className='grid grid-cols-2 divide-x-4 divide-white md:grid-cols-4'>
					{stats.map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.08 }}
							className='flex flex-col items-center justify-center gap-1 px-4 py-6 text-center odd:border-b-4 odd:border-white md:border-b-0'>
							<div className='flex items-center gap-1.5 text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase'>
								<Icon icon={stat.icon} className={`h-3 w-3 ${stat.pulse ? 'text-primary' : 'text-zinc-600'}`} />
								{stat.label}
							</div>
							<div
								className={`text-3xl leading-none font-black md:text-4xl ${
									stat.pulse ? 'text-primary' : 'text-white'
								}`}>
								{stat.value}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
