'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { formatAffiliationDuration } from '@/lib/utils'
import { getDynamicAbilities, issuesData, personalData, workExperienceData } from '@/common'

const totalTech = getDynamicAbilities(issuesData).flatMap(g => g.abilities).length
const yearsActive = new Date().getFullYear() - 2021

// ── STAT BOX ──────────────────────────────────────────────────────
function StatBox({ value, label, icon }: { value: string; label: string; icon: string }) {
	return (
		<div className='flex flex-col items-center justify-center border-2 border-zinc-800 bg-zinc-900/60 p-3 text-center'>
			<Icon icon={icon} className='text-primary mb-1 h-4 w-4' />
			<div className='text-2xl font-black text-white'>{value}</div>
			<div className='text-[8px] font-black tracking-[0.2em] text-zinc-600 uppercase'>{label}</div>
		</div>
	)
}

// ── CURRENT ASSIGNMENT ─────────────────────────────────────────────
function CurrentAssignment() {
	const current = workExperienceData.find(w => !w.endDate)
	if (!current) return null

	return (
		<div className='border-2 border-zinc-800 bg-zinc-900/40 p-4'>
			<div className='mb-3 flex items-center gap-2'>
				<span className='bg-primary h-1.5 w-1.5 animate-ping rounded-full' />
				<span className='text-[9px] font-black tracking-[0.3em] text-zinc-500 uppercase'>Current Assignment</span>
			</div>
			<div className='border-l-2 border-white pl-3'>
				<p className='text-sm leading-tight font-black text-white uppercase'>{current.position}</p>
				<p className='text-primary mt-1 text-[10px] font-black uppercase'>{current.affiliation.name}</p>
				<p className='mt-1 text-[10px] text-zinc-600 uppercase'>
					{formatAffiliationDuration(current.startDate, current.endDate)}
				</p>
			</div>
			<Link
				href={`/affiliation/${current.id}` as Route}
				className='hover:bg-primary/20 mt-3 flex items-center gap-1 text-[9px] font-black tracking-widest text-zinc-600 uppercase transition-colors hover:text-white'>
				MISSION BRIEF
				<Icon icon='material-symbols:arrow-forward' className='h-3 w-3' />
			</Link>
		</div>
	)
}

// ── STATUS ─────────────────────────────────────────────────────────
function StatusBlock() {
	const time = new Date().toLocaleTimeString('en-US', {
		timeZone: 'Asia/Bangkok',
		hour12: true,
		hour: '2-digit',
		minute: '2-digit'
	})

	return (
		<div className='border-2 border-zinc-800 bg-zinc-900/40 p-4'>
			<div className='mb-3 text-[9px] font-black tracking-[0.3em] text-zinc-600 uppercase'>System Status</div>
			<div className='space-y-2'>
				<div className='flex items-center justify-between'>
					<span className='text-[10px] font-bold text-zinc-600 uppercase'>Availability</span>
					<div className='flex items-center gap-1.5'>
						<span className='h-2 w-2 animate-pulse rounded-full bg-green-500' />
						<span className='text-[10px] font-black text-green-400 uppercase'>OPEN</span>
					</div>
				</div>
				<div className='flex items-center justify-between'>
					<span className='text-[10px] font-bold text-zinc-600 uppercase'>Location</span>
					<span className='text-[10px] font-black text-white uppercase'>Nonthaburi, TH</span>
				</div>
				<div className='flex items-center justify-between'>
					<span className='text-[10px] font-bold text-zinc-600 uppercase'>Local Time</span>
					<span className='text-primary text-[10px] font-black uppercase tabular-nums'>{time}</span>
				</div>
			</div>
		</div>
	)
}

// ── QUICK ACTIONS ──────────────────────────────────────────────────
function QuickActions() {
	const actions = [
		{ label: 'Download CV', href: '/cv', icon: 'material-symbols:download', primary: true },
		{ label: 'Explore Issues', href: '/issue', icon: 'material-symbols:folder-special', primary: false },
		{ label: 'Slide Deck', href: '/cv/presentation', icon: 'material-symbols:slideshow', primary: false }
	]

	return (
		<div className='space-y-2'>
			<div className='mb-3 text-[9px] font-black tracking-[0.3em] text-zinc-600 uppercase'>Quick Actions</div>
			{actions.map(a => (
				<Link
					key={a.label}
					href={a.href as Route}
					target={a.href.startsWith('http') ? '_blank' : undefined}
					rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
					className={`flex w-full items-center gap-3 border-2 px-4 py-2.5 text-xs font-black uppercase transition-all ${
						a.primary ?
							'hover:bg-primary hover:border-primary border-white bg-white text-black hover:text-white'
						:	'border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-500 hover:text-white'
					}`}>
					<Icon icon={a.icon} className='h-4 w-4 shrink-0' />
					{a.label}
					<Icon icon='material-symbols:arrow-forward' className='ml-auto h-3.5 w-3.5' />
				</Link>
			))}
		</div>
	)
}

// ── MAIN ───────────────────────────────────────────────────────────
export default function IntelPanel() {
	return (
		<aside className='flex flex-col gap-5 bg-zinc-950 p-5 lg:h-screen lg:overflow-y-auto lg:border-white'>
			{/* Scanline */}
			<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.03)_50%)] bg-size-[100%_4px] opacity-40' />

			{/* Header */}
			<div className='flex items-center gap-2 border-b-2 border-zinc-900 pb-4'>
				<div className='bg-primary h-3 w-3' />
				<span className='text-[10px] font-black tracking-[0.4em] text-zinc-500 uppercase'>Intel Panel</span>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className='flex flex-col gap-5'>
				{/* Combat stats */}
				<div>
					<div className='mb-3 text-[9px] font-black tracking-[0.3em] text-zinc-600 uppercase'>Combat Stats</div>
					<div className='grid grid-cols-3 gap-2'>
						<StatBox value={`${yearsActive}+`} label='Years' icon='material-symbols:timer' />
						<StatBox value={`${issuesData.length}`} label='Missions' icon='material-symbols:rocket-launch' />
						<StatBox value={`${totalTech}+`} label='Tech' icon='material-symbols:code' />
					</div>
				</div>

				<CurrentAssignment />
				<StatusBlock />

				{/* Divider */}
				<div className='h-[2px] bg-zinc-900' />

				<QuickActions />

				{/* Contact */}
				<div className='border-t-2 border-zinc-900 pt-4'>
					<Link
						href={`mailto:${personalData.contact.email}`}
						className='text-primary text-[10px] font-black break-all uppercase transition-opacity hover:opacity-80'>
						{personalData.contact.email}
					</Link>
					<p className='mt-1 text-[9px] text-zinc-700 uppercase'>{personalData.contact.availability}</p>
				</div>
			</motion.div>
		</aside>
	)
}
