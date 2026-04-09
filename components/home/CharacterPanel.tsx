'use client'

import type { Route } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { personalData, workExperienceData } from '@/common'

// Compute age from birthdate
const age = Math.floor(
	(new Date().getTime() - new Date(personalData.birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25)
)

const highlightIcons = [
	'material-symbols:bolt',
	'material-symbols:rocket-launch',
	'material-symbols:hub',
	'material-symbols:groups'
]

export default function CharacterPanel() {
	const currentRole = workExperienceData.find(w => !w.endDate)

	return (
		<aside className='relative flex flex-col gap-6 border-b-4 border-white bg-zinc-950 p-5 lg:h-screen lg:overflow-y-auto lg:border-r-4 lg:border-b-0'>
			{/* Scanline overlay */}
			<div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.03)_50%)] bg-size-[100%_4px] opacity-40' />

			{/* ── AVATAR ── */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className='relative'>
				{/* Rank badge */}
				<div className='bg-primary absolute -top-3 -right-3 z-20 flex h-12 w-12 -rotate-6 items-center justify-center border-4 border-black shadow-[3px_3px_0px_0px_white]'>
					<div className='text-center leading-none'>
						<div className='text-[7px] font-black text-white uppercase'>LV</div>
						<div className='text-lg font-black text-white'>{age}</div>
					</div>
				</div>

				{/* Avatar frame */}
				<div className='relative border-4 border-white bg-black shadow-[6px_6px_0px_0px_hsl(355,85%,60%)]'>
					<div className='comic-halftone pointer-events-none absolute inset-0 z-10 opacity-20' />
					<Image
						src={personalData.avatar}
						alt={personalData.name}
						width={260}
						height={260}
						className='block w-full object-cover'
						priority
					/>
					{/* Current role tag at bottom of avatar */}
					{currentRole && (
						<div className='bg-primary absolute right-0 bottom-0 left-0 border-t-4 border-white px-2 py-1'>
							<div className='flex items-center justify-center gap-1.5'>
								<span className='h-1.5 w-1.5 animate-ping rounded-full bg-white' />
								<span className='text-[9px] font-black tracking-[0.2em] text-white uppercase'>ACTIVE</span>
							</div>
						</div>
					)}
				</div>
			</motion.div>

			{/* ── IDENTITY ── */}
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
				{/* Callsign */}
				<div className='mb-1 text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase'>CALLSIGN</div>
				<div className='mb-1 text-sm font-black tracking-[0.15em] text-zinc-300 uppercase'>NooobtimeX</div>

				{/* Full name */}
				<div className='border-l-4 border-white pl-3'>
					<div className='text-xl leading-tight font-black text-white uppercase'>{personalData.name.split(' ')[0]}</div>
					<div className='text-sm font-black text-zinc-400 uppercase'>
						{personalData.name.split(' ').slice(1).join(' ')}
					</div>
				</div>

				{/* Title badge */}
				<div className='mt-3 inline-block skew-x-3 bg-white px-3 py-1'>
					<span className='block -skew-x-3 text-xs font-black tracking-widest text-black uppercase'>
						{personalData.title}
					</span>
				</div>
			</motion.div>

			{/* ── DIVIDER ── */}
			<div className='flex items-center gap-3'>
				<div className='bg-primary h-[2px] w-4' />
				<span className='text-[9px] font-black tracking-[0.4em] text-zinc-600 uppercase'>Passive Abilities</span>
				<div className='h-[2px] flex-1 bg-zinc-800' />
			</div>

			{/* ── HIGHLIGHTS ── */}
			<motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className='space-y-2.5'>
				{personalData.about.highlights.map((h, i) => (
					<li key={i} className='flex items-start gap-2.5'>
						<div className='bg-primary mt-0.5 shrink-0 border-2 border-black p-0.5'>
							<Icon icon={highlightIcons[i] ?? 'material-symbols:star'} className='h-3 w-3 text-white' />
						</div>
						<span className='text-[11px] leading-snug font-bold text-zinc-400 uppercase'>{h}</span>
					</li>
				))}
			</motion.ul>

			{/* ── DIVIDER ── */}
			<div className='flex items-center gap-3'>
				<div className='bg-primary h-[2px] w-4' />
				<span className='text-[9px] font-black tracking-[0.4em] text-zinc-600 uppercase'>Links</span>
				<div className='h-[2px] flex-1 bg-zinc-800' />
			</div>

			{/* ── SOCIAL LINKS ── */}
			<div className='flex flex-col gap-2'>
				{personalData.socialLinks.map(s => (
					<Link
						key={s.platform}
						href={s.url as Route}
						target='_blank'
						rel='noopener noreferrer'
						className='hover:border-primary hover:bg-primary/10 flex items-center gap-3 border-2 border-zinc-800 px-3 py-2 text-zinc-500 transition-all hover:text-white'>
						<Icon icon={s.icon} className='h-4 w-4 shrink-0' />
						<span className='text-[11px] font-black uppercase'>{s.username}</span>
						<Icon icon='material-symbols:arrow-forward' className='ml-auto h-3 w-3' />
					</Link>
				))}
			</div>
		</aside>
	)
}
