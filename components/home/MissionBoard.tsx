'use client'

import { useState } from 'react'
import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { formatAffiliationDuration } from '@/lib/utils'
import { getDynamicAbilities, issuesData, workExperienceData } from '@/common'

const abilityGroups = getDynamicAbilities(issuesData)

// ── ACTIVE OPS (work experience timeline) ──────────────────────────
function ActiveOps() {
	const items = [...workExperienceData].sort(
		(a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
	)
	return (
		<section>
			<SectionLabel icon='material-symbols:work-history' label='Active Ops' />
			<div className='hide-scrollbar relative mt-4 flex gap-3 overflow-x-auto pb-3'>
				{/* Connecting line */}
				<div className='absolute top-[22px] left-0 h-[2px] w-full bg-zinc-800' />
				{items.map(item => {
					const isCurrent = !item.endDate
					return (
						<Link
							key={item.id}
							href={`/affiliation/${item.id}` as Route}
							className='group relative flex shrink-0 flex-col items-center'>
							{/* Timeline dot */}
							<div
								className={`relative z-10 mb-2 flex h-11 w-11 shrink-0 items-center justify-center border-4 border-white transition-all group-hover:scale-110 ${isCurrent ? 'bg-primary shadow-[0_0_12px_hsl(355,85%,60%,0.6)]' : 'bg-zinc-900'}`}>
								{isCurrent && (
									<span className='bg-primary absolute -top-1 -right-1 h-2.5 w-2.5 animate-ping rounded-full' />
								)}
								<Icon icon='material-symbols:work' className='h-4 w-4 text-white' />
							</div>
							{/* Card */}
							<div
								className={`w-[140px] border-2 p-2 transition-all ${isCurrent ? 'border-primary bg-primary/10' : 'border-zinc-800 bg-zinc-900/60 group-hover:border-zinc-600'}`}>
								{isCurrent && (
									<span className='text-primary mb-0.5 block text-[7px] font-black tracking-[0.3em] uppercase'>
										ACTIVE
									</span>
								)}
								<p className='line-clamp-2 text-[9px] leading-tight font-black text-white uppercase'>{item.position}</p>
								<p className='mt-0.5 line-clamp-1 text-[8px] text-zinc-500 uppercase'>{item.affiliation.name}</p>
								<p className='mt-0.5 text-[7px] font-bold text-zinc-600 uppercase'>
									{formatAffiliationDuration(item.startDate, item.endDate)}
								</p>
							</div>
						</Link>
					)
				})}
			</div>
		</section>
	)
}

// ── FEATURED MISSIONS (top 3 issues) ──────────────────────────────
function FeaturedMissions() {
	const featured = issuesData.slice(0, 3)
	return (
		<section>
			<SectionLabel icon='material-symbols:folder-special' label='Featured Missions' />
			<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3'>
				{featured.map((project, i) => (
					<Link
						key={project.id}
						href={`/issue/${project.id}` as Route}
						className='silk-card-interactive group flex flex-col overflow-hidden'>
						{/* Banner */}
						<div className='relative aspect-video overflow-hidden border-b-4 border-white'>
							<Image
								src={project.images.banner}
								alt={project.title}
								fill
								className='object-cover transition-transform duration-500 group-hover:scale-105'
							/>
							<div className='bg-primary absolute top-2 left-2 px-2 py-0.5 text-[9px] font-black text-white uppercase'>
								{i === 0 ? 'STAR ISSUE' : `ISSUE #${String(i + 1).padStart(2, '0')}`}
							</div>
						</div>
						{/* Info */}
						<div className='flex flex-1 flex-col justify-between p-3'>
							<div>
								<h3 className='mb-1 line-clamp-1 text-xs leading-tight font-black text-white uppercase'>
									{project.title}
								</h3>
								<p className='line-clamp-2 text-[10px] leading-snug text-zinc-500'>{project.description}</p>
							</div>
							<div className='mt-2 flex flex-wrap gap-1'>
								{project.abilities.slice(0, 4).map(a => (
									<span
										key={a.name}
										className='flex items-center gap-0.5 border border-zinc-800 px-1 py-0.5 text-[8px] font-bold text-zinc-600 uppercase'>
										<Icon icon={a.icon} className='text-primary h-2 w-2' />
										{a.name}
									</span>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
			<div className='mt-4 flex justify-end'>
				<Link href='/issue' className='silk-button-tactical-outline px-6 py-2 text-xs'>
					VIEW ALL {issuesData.length} ISSUES
					<Icon icon='material-symbols:arrow-forward' className='h-3.5 w-3.5' />
				</Link>
			</div>
		</section>
	)
}

// ── SKILL LOADOUT ──────────────────────────────────────────────────
function SkillLoadout() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<section>
			<SectionLabel icon='material-symbols:psychology' label='Skill Loadout' />

			{/* Tabs — desktop only */}
			<div className='mt-4 hidden gap-1 lg:flex'>
				{abilityGroups.map((g, i) => (
					<button
						key={g.category}
						onClick={() => setActiveTab(i)}
						className={`border-2 px-3 py-1.5 text-[9px] font-black tracking-widest uppercase transition-all ${
							activeTab === i ?
								'border-white bg-white text-black'
							:	'border-zinc-700 bg-transparent text-zinc-500 hover:border-zinc-500 hover:text-zinc-300'
						}`}>
						{g.category}
					</button>
				))}
			</div>

			{/* Desktop: active tab only */}
			<div className='mt-3 hidden lg:block'>
				{abilityGroups[activeTab] && (
					<div className='flex flex-wrap gap-1.5'>
						{abilityGroups[activeTab].abilities.map(a => (
							<Link
								key={a.name}
								href={`/ability/${a.name.toLowerCase().replace(/ /g, '-')}` as Route}
								className='hover:border-primary hover:bg-primary/10 flex items-center gap-1.5 border-2 border-zinc-800 px-2 py-1 transition-all'>
								<Icon icon={a.icon} className='text-primary h-3.5 w-3.5' />
								<span className='text-[10px] font-black text-zinc-300 uppercase'>{a.name}</span>
								{a.important && <span className='bg-primary h-1 w-1 rounded-full' />}
							</Link>
						))}
					</div>
				)}
			</div>

			{/* Mobile: all categories stacked */}
			<div className='mt-3 space-y-4 lg:hidden'>
				{abilityGroups.map(g => (
					<div key={g.category}>
						<div className='mb-1.5 flex items-center gap-2'>
							<Icon icon={g.icon} className='text-primary h-3.5 w-3.5' />
							<span className='text-[9px] font-black tracking-[0.3em] text-zinc-600 uppercase'>{g.category}</span>
						</div>
						<div className='flex flex-wrap gap-1'>
							{g.abilities.map(a => (
								<span
									key={a.name}
									className='flex items-center gap-1 border border-zinc-800 px-1.5 py-0.5 text-[9px] font-black text-zinc-400 uppercase'>
									<Icon icon={a.icon} className='text-primary h-2.5 w-2.5' />
									{a.name}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			<div className='mt-4 flex justify-end'>
				<Link href='/ability' className='silk-button-tactical-outline px-6 py-2 text-xs'>
					FULL SKILL TREE
					<Icon icon='material-symbols:arrow-forward' className='h-3.5 w-3.5' />
				</Link>
			</div>
		</section>
	)
}

// ── SECTION LABEL ──────────────────────────────────────────────────
function SectionLabel({ icon, label }: { icon: string; label: string }) {
	return (
		<div className='flex items-center gap-3'>
			<div className='bg-primary border-2 border-black p-1'>
				<Icon icon={icon} className='h-3.5 w-3.5 text-white' />
			</div>
			<span className='text-sm font-black tracking-widest text-white uppercase'>{label}</span>
			<div className='h-[2px] flex-1 bg-zinc-800' />
		</div>
	)
}

// ── MAIN ───────────────────────────────────────────────────────────
export default function MissionBoard() {
	return (
		<main className='flex flex-col gap-10 border-b-4 border-white bg-black p-6 lg:h-screen lg:overflow-y-auto lg:border-r-4 lg:border-b-0'>
			{/* HUD header bar */}
			<div className='flex items-center justify-between border-b-2 border-zinc-900 pb-4'>
				<div className='flex items-center gap-2'>
					<div className='bg-primary h-3 w-3' />
					<span className='text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase'>Mission Log</span>
				</div>
			</div>

			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className='space-y-10'>
				<ActiveOps />
				<FeaturedMissions />
				<SkillLoadout />
			</motion.div>
		</main>
	)
}
