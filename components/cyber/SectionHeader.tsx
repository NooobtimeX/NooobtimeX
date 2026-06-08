import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
	code: string
	title: string
	subtitle?: string
	className?: string
	action?: React.ReactNode
}

/**
 * Standard HUD section header: code tag + title + optional subtitle/action.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ code, title, subtitle, className, action }) => {
	return (
		<div className={cn('border-border/60 flex items-end justify-between gap-4 border-b pb-4', className)}>
			<div>
				<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>{code} //</span>
				<h2 className='font-display mt-1 text-3xl font-bold tracking-wide md:text-4xl'>{title}</h2>
				{subtitle && <p className='text-muted-foreground mt-1 max-w-2xl text-sm'>{subtitle}</p>}
			</div>
			{action}
		</div>
	)
}

export default SectionHeader
