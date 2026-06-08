import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import CyberButton from '@/components/cyber/CyberButton'
import { slugify } from '@/lib/utils'
import type { Organization, Project } from '@/common'

interface GigDetailProps {
	project: Project
	org: Organization | undefined
	tier: number
}

const MetaCell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
	<div className='border-border/60 border-l-2 pl-3'>
		<p className='text-muted-foreground font-mono text-[0.6rem] tracking-widest uppercase'>{label}</p>
		<p className='mt-0.5 text-sm font-semibold'>{children}</p>
	</div>
)

const GigDetail: React.FC<GigDetailProps> = ({ project, org, tier }) => {
	const live = !!project.links.live
	const year = new Date(project.startDate).getFullYear()

	return (
		<motion.div
			key={project.id}
			initial={{ opacity: 0, x: 12 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
			className='neon-panel clip-notch flex flex-col overflow-hidden'>
			{/* Banner */}
			<div className='border-border/60 relative aspect-[16/7] w-full border-b'>
				<Image
					src={project.images.banner}
					alt={project.title}
					fill
					sizes='(max-width: 1024px) 100vw, 60vw'
					className='object-cover opacity-85'
				/>
				<div className='from-background via-background/30 absolute inset-0 bg-gradient-to-t to-transparent' />
				<span className='text-cyber-cyan absolute top-3 left-3 font-mono text-[0.65rem] tracking-[0.3em] uppercase'>
					// Gig Briefing
				</span>
				<div className='absolute bottom-0 left-0 p-5'>
					<h2 className='font-display text-2xl leading-none font-bold tracking-wide uppercase md:text-4xl'>
						{project.title}
					</h2>
				</div>
			</div>

			{/* Meta */}
			<div className='grid grid-cols-2 gap-4 p-5 sm:grid-cols-4'>
				<MetaCell label='Client'>{org?.name ?? 'Independent'}</MetaCell>
				<MetaCell label='Tier'>
					<span className='text-cyber-magenta'>{'▲'.repeat(tier)}</span>
				</MetaCell>
				<MetaCell label='Status'>
					<span className={live ? 'text-cyber-cyan' : 'text-muted-foreground'}>{live ? 'Active' : 'Archived'}</span>
				</MetaCell>
				<MetaCell label='Year'>{year}</MetaCell>
			</div>

			{/* Brief */}
			<div className='px-5 pb-2'>
				<p className='text-cyber-cyan font-mono text-[0.6rem] tracking-widest uppercase'>// Brief</p>
				<p className='text-muted-foreground mt-2 text-sm leading-relaxed'>{project.description}</p>
			</div>

			{/* Loadout */}
			<div className='px-5 py-4'>
				<p className='text-cyber-cyan font-mono text-[0.6rem] tracking-widest uppercase'>// Loadout</p>
				<div className='mt-2 flex flex-wrap gap-1.5'>
					{project.skills.map(s => (
						<Link
							key={s.name}
							href={`/skills/${slugify(s.name)}` as never}
							className='border-border hover:border-cyber-cyan/60 flex items-center gap-1.5 border px-2 py-1 text-xs transition-colors'>
							<Icon icon={s.icon} className='size-4' />
							{s.name}
						</Link>
					))}
				</div>
			</div>

			{/* Actions */}
			<div className='border-border/60 mt-auto flex flex-wrap items-center gap-3 border-t p-5'>
				{live && (
					<CyberButton href={project.links.live!} external>
						<Icon icon='mdi:flash' /> Jack In
					</CyberButton>
				)}
				<CyberButton href={`/projects/${project.id}`} variant='outline'>
					<Icon icon='mdi:file-document-outline' /> Full Dossier
				</CyberButton>
			</div>
		</motion.div>
	)
}

export default GigDetail
