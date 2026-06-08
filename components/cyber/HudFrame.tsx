import React from 'react'
import { cn } from '@/lib/utils'

interface HudFrameProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string
}

/**
 * Wrapper that draws HUD corner brackets, with an optional mono label tab.
 */
const HudFrame: React.FC<HudFrameProps> = ({ label, className, children, ...props }) => {
	return (
		<div className={cn('hud-corners relative p-4', className)} {...props}>
			{label && (
				<span className='text-cyber-cyan/80 bg-background absolute -top-2 left-3 px-1 font-mono text-[0.65rem] tracking-widest uppercase'>
					{label}
				</span>
			)}
			{children}
		</div>
	)
}

export default HudFrame
