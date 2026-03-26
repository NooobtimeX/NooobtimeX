'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface IssueThumbnailProps {
	src: string
	alt: string
	title: string
	fill?: boolean
	className?: string
	priority?: boolean
}

/** Generate initials from each word in the title, e.g. "Online Poker Game" → "OPG" */
function getInitials(title: string): string {
	return title
		.split(/\s+/)
		.filter(Boolean)
		.map(word => word[0].toUpperCase())
		.join('')
}

const IssueThumbnail: React.FC<IssueThumbnailProps> = ({ src, alt, title, fill = true, className = '', priority }) => {
	const [hasError, setHasError] = useState(false)

	if (hasError) {
		return (
			<div
				className={`flex items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900 ${fill ? 'absolute inset-0' : 'h-full w-full'}`}>
				<span className='text-5xl font-black tracking-widest text-white/70 select-none md:text-7xl'>
					{getInitials(title)}
				</span>
			</div>
		)
	}

	return (
		<Image
			src={src}
			alt={alt}
			fill={fill}
			className={className}
			priority={priority}
			onError={() => setHasError(true)}
		/>
	)
}

export default IssueThumbnail
