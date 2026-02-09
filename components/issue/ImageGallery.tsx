'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react'
import ComicPop from '@/components/motion/ComicPop'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

interface ImageGalleryProps {
	images: string[]
	title: string
}

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 300 : -300,
		opacity: 0,
		rotate: direction > 0 ? 5 : -5,
		scale: 0.9
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
		rotate: 0,
		scale: 1
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 300 : -300,
		opacity: 0,
		rotate: direction < 0 ? 5 : -5,
		scale: 0.9
	})
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [[page, direction], setPage] = useState([0, 0])

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection])
		// Keep selectedImageIndex in sync if needed for other things, or replace it.
		// For now, let's just update the local index for compatibility.
		const nextIndex = (selectedImageIndex + newDirection + images.length) % images.length
		setSelectedImageIndex(nextIndex)
	}

	const goToPrevious = () => paginate(-1)
	const goToNext = () => paginate(1)

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowLeft') goToPrevious()
		if (e.key === 'ArrowRight') goToNext()
		if (e.key === 'Escape') setIsOpen(false)
	}

	if (images.length === 0) return null

	return (
		<div className='space-y-4'>
			{/* Thumbnail Grid */}
			<div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
				{images.map((image, index) => (
					<ComicPop
						key={index}
						delay={index * 0.1}
						className='group relative aspect-square cursor-pointer overflow-hidden border-2 border-white bg-black shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white]'
						onClick={() => {
							setSelectedImageIndex(index)
							setPage([index, 0])
							setIsOpen(true)
						}}>
						<div className='bg-primary absolute top-0 right-0 z-10 border-b-2 border-l-2 border-black px-1 font-[Bangers] text-xs text-white opacity-0 transition-opacity group-hover:opacity-100'>
							#{index + 1}
						</div>
						<Image
							src={image}
							alt={`${title} - Image ${index + 1}`}
							fill
							className='object-cover transition-transform duration-500 group-hover:scale-110'
						/>
						<div className='bg-primary/20 pointer-events-none absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100' />
					</ComicPop>
				))}
			</div>

			{/* Lightbox Modal */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent
					className='h-[90vh] w-full max-w-7xl rounded-none border-4 border-white bg-black/95 p-0 shadow-[0_0_50px_rgba(255,255,255,0.2)]'
					onKeyDown={handleKeyDown}>
					<div className='sr-only'>
						<DialogTitle>{title}</DialogTitle>
					</div>
					<div className='relative flex h-full w-full items-center justify-center'>
						{/* Close Button */}
						<Button
							variant='ghost'
							size='icon'
							className='hover:bg-primary hover:border-primary absolute top-4 right-4 z-50 rounded-none border-2 border-white bg-black text-white transition-colors'
							onClick={() => setIsOpen(false)}>
							<XIcon className='h-6 w-6' />
						</Button>

						{/* Navigation Arrows */}
						{images.length > 1 && (
							<>
								<Button
									variant='ghost'
									size='icon'
									className='absolute top-1/2 left-4 z-50 -translate-y-1/2 rounded-none border-2 border-transparent text-white hover:border-white hover:bg-white/20'
									onClick={goToPrevious}>
									<ChevronLeftIcon className='h-10 w-10' />
								</Button>
								<Button
									variant='ghost'
									size='icon'
									className='absolute top-1/2 right-4 z-50 -translate-y-1/2 rounded-none border-2 border-transparent text-white hover:border-white hover:bg-white/20'
									onClick={goToNext}>
									<ChevronRightIcon className='h-10 w-10' />
								</Button>
							</>
						)}

						{/* Main Image */}
						<div className='relative flex h-full w-full items-center justify-center p-12 md:p-20'>
							<div className='relative h-full w-full overflow-hidden border-2 border-white/20 bg-black'>
								<AnimatePresence initial={false} custom={direction} mode='wait'>
									<motion.div
										key={page}
										custom={direction}
										variants={variants}
										initial='enter'
										animate='center'
										exit='exit'
										transition={{
											x: { type: 'spring', stiffness: 300, damping: 30 },
											opacity: { duration: 0.2 },
											rotate: { duration: 0.4 },
											scale: { duration: 0.4 }
										}}
										className='relative h-full w-full'>
										<Image
											src={images[selectedImageIndex]}
											alt={`${title} - Image ${selectedImageIndex + 1}`}
											fill
											className='object-contain'
											priority
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>

						{/* Image Counter */}
						{images.length > 1 && (
							<div className='bg-primary absolute top-4 left-4 border-2 border-white px-4 py-2 font-[Bangers] text-xl text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
								PAGE {selectedImageIndex + 1} OF {images.length}
							</div>
						)}

						{/* Thumbnail Strip (Optional - keeping generic dots/thumbnails minimalist for cleaner view) */}
						{/* Removed thumbnail strip inside modal to focus on image */}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default ImageGallery
