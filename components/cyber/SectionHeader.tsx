import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
	code: string
	title: string
	subtitle?: string
	className?: string
	action?: React.ReactNode
	/**
	 * Heading level. Defaults to `h2` because most uses are sections *within* a page.
	 * Index routes (/projects, /skills, /career, /companies, /github) have no other
	 * heading, so their top SectionHeader passes `as='h1'` — without it those pages
	 * ship no `h1` at all. Purely semantic: the visual styling is identical.
	 */
	as?: 'h1' | 'h2'
}

/**
 * Standard HUD section header: code tag + title + optional subtitle/action.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ code, title, subtitle, className, action, as = 'h2' }) => {
	const Heading = as
	return (
		<div className={cn('border-border/60 flex items-end justify-between gap-4 border-b pb-4', className)}>
			<div>
				<span className='text-cyber-cyan font-mono text-xs tracking-[0.3em] uppercase'>{code} //</span>
				<Heading className='font-display mt-1 text-3xl font-bold tracking-wide md:text-4xl'>{title}</Heading>
				{subtitle && <p className='text-muted-foreground mt-1 max-w-2xl text-sm'>{subtitle}</p>}
			</div>
			{action}
		</div>
	)
}

export default SectionHeader
