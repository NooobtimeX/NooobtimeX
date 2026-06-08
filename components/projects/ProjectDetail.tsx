import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import CyberButton from '@/components/cyber/CyberButton'
import NeonPanel from '@/components/cyber/NeonPanel'
import ProjectGallery from '@/components/projects/ProjectGallery'
import { slugify } from '@/lib/utils'
import { type Issue, experiencesData } from '@/common'

interface ProjectDetailProps {
	project: Issue
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
	const year = new Date(project.startDate).getFullYear()
	const linkedRole =
		project.linkedAffiliationId ?
			experiencesData.find(e => e.affiliation.id === project.linkedAffiliationId)
		:	undefined
	const extraPhotos = project.images.photos.filter(p => p !== project.images.banner)

	return (
		<div className='mx-auto max-w-5xl px-4 py-10 md:px-6'>
			<Link
				href='/projects'
				className='text-muted-foreground hover:text-cyber-cyan inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors'>
				<Icon icon='mdi:arrow-left' className='size-4' /> All Projects
			</Link>

			{/* Banner */}
			<NeonPanel className='clip-notch relative mt-6 aspect-[16/8] w-full overflow-hidden p-0'>
				<Image
					src={project.images.banner}
					alt={project.title}
					fill
					priority
					sizes='(max-width: 1024px) 100vw, 1024px'
					className='object-cover'
				/>
				<div className='from-background/95 via-background/30 absolute inset-0 bg-gradient-to-t to-transparent' />
				<div className='absolute bottom-0 left-0 p-6'>
					<span className='text-cyber-cyan font-mono text-xs tracking-widest'>{year}</span>
					<h1 className='font-display mt-1 text-3xl leading-none font-bold tracking-wide uppercase md:text-5xl'>
						{project.title}
					</h1>
				</div>
			</NeonPanel>

			<div className='mt-8 grid gap-8 md:grid-cols-[1fr_260px]'>
				{/* Main */}
				<div className='space-y-8'>
					<section>
						<h2 className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// Overview</h2>
						<p className='text-muted-foreground mt-3 leading-relaxed'>{project.description}</p>
					</section>

					{extraPhotos.length > 0 && (
						<section>
							<h2 className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>// Gallery</h2>
							<div className='mt-3'>
								<ProjectGallery photos={extraPhotos} title={project.title} />
							</div>
						</section>
					)}
				</div>

				{/* Sidebar */}
				<aside className='space-y-6'>
					{project.links.live && (
						<CyberButton href={project.links.live} external className='w-full'>
							<Icon icon='mdi:open-in-new' /> Visit Live
						</CyberButton>
					)}

					<NeonPanel className='clip-notch-sm p-4'>
						<h3 className='text-cyber-cyan mb-3 font-mono text-xs tracking-widest uppercase'>Stack</h3>
						<div className='flex flex-wrap gap-2'>
							{project.abilities.map(a => (
								<Link
									key={a.name}
									href={`/skills/${slugify(a.name)}` as never}
									className='border-border hover:border-cyber-cyan/60 flex items-center gap-1.5 border px-2 py-1 text-xs transition-colors'>
									<Icon icon={a.icon} className='size-4' />
									{a.name}
								</Link>
							))}
						</div>
					</NeonPanel>

					{linkedRole && (
						<NeonPanel className='clip-notch-sm p-4'>
							<h3 className='text-cyber-cyan mb-2 font-mono text-xs tracking-widest uppercase'>Affiliation</h3>
							<Link
								href={`/experience/${linkedRole.id}` as never}
								className='hover:text-cyber-yellow flex items-center gap-2 text-sm transition-colors'>
								<Icon icon='mdi:briefcase-outline' className='size-4' />
								{linkedRole.affiliation.name}
							</Link>
						</NeonPanel>
					)}
				</aside>
			</div>
		</div>
	)
}

export default ProjectDetail
