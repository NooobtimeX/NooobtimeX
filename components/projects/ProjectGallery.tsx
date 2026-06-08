'use client'

import React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface ProjectGalleryProps {
	photos: string[]
	title: string
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ photos, title }) => {
	const [active, setActive] = React.useState<string | null>(null)

	if (!photos.length) return null

	return (
		<>
			<div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
				{photos.map((src, i) => (
					<button
						key={`${src}-${i}`}
						onClick={() => setActive(src)}
						className='neon-panel clip-notch-sm group relative aspect-video overflow-hidden'>
						<Image
							src={src}
							alt={`${title} screenshot ${i + 1}`}
							fill
							sizes='(max-width: 640px) 50vw, 33vw'
							className='object-cover opacity-80 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100'
						/>
					</button>
				))}
			</div>

			<Dialog open={!!active} onOpenChange={open => !open && setActive(null)}>
				<DialogContent className='border-cyber-cyan/40 bg-popover max-w-4xl rounded-none! border p-2'>
					<DialogTitle className='sr-only'>{title}</DialogTitle>
					{active && (
						<div className='relative aspect-video w-full'>
							<Image src={active} alt={title} fill sizes='100vw' className='object-contain' />
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}

export default ProjectGallery
