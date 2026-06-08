import React from 'react'
import { cn } from '@/lib/utils'

interface NeonPanelProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: 'cyan' | 'yellow'
	notch?: boolean
	corners?: boolean
}

/**
 * Angular neon-bordered surface — the core cyberpunk container.
 */
const NeonPanel: React.FC<NeonPanelProps> = ({
	className,
	variant = 'cyan',
	notch = true,
	corners = false,
	children,
	...props
}) => {
	return (
		<div
			className={cn(
				'neon-panel relative',
				notch && 'clip-notch',
				variant === 'yellow' && 'neon-panel-yellow',
				corners && 'hud-corners',
				className
			)}
			{...props}>
			{children}
		</div>
	)
}

export default NeonPanel
