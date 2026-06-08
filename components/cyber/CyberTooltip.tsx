'use client'

import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface CyberTooltipProps {
	label: string
	children: React.ReactElement
	side?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Cyberpunk-styled tooltip. `children` becomes the trigger via Base UI's render prop,
 * so it merges onto your element (link/button) instead of wrapping it in a button.
 */
const CyberTooltip: React.FC<CyberTooltipProps> = ({ label, children, side = 'bottom' }) => {
	return (
		<Tooltip>
			<TooltipTrigger render={children} />
			<TooltipContent
				side={side}
				className='text-cyber-cyan border-cyber-cyan/50 bg-popover rounded-none border font-mono text-[0.7rem] tracking-widest uppercase'>
				{label}
			</TooltipContent>
		</Tooltip>
	)
}

export default CyberTooltip
