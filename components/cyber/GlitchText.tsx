import React from 'react'
import { cn } from '@/lib/utils'

interface GlitchTextProps {
	text: string
	className?: string
	as?: 'span' | 'h1' | 'h2' | 'h3' | 'div'
}

/**
 * RGB-split glitch text. The CSS reads `data-text` for the duplicated layers.
 */
const GlitchText: React.FC<GlitchTextProps> = ({ text, className, as: Tag = 'span' }) => {
	return (
		<Tag data-text={text} className={cn('glitch', className)}>
			{text}
		</Tag>
	)
}

export default GlitchText
