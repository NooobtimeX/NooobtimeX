import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface ComicTooltipProps {
	children: React.ReactNode
	content: React.ReactNode
}

export function ComicTooltip({ children, content }: ComicTooltipProps) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent className='rounded-none border-2 border-white bg-black font-black tracking-wide text-white shadow-[4px_4px_0px_0px_white]'>
				{content}
			</TooltipContent>
		</Tooltip>
	)
}
