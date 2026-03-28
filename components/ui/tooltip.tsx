'use client'

import * as React from 'react'
import { Tooltip as TooltipPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

function TooltipProvider({ delayDuration = 0, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
	return <TooltipPrimitive.Provider data-slot='tooltip-provider' delayDuration={delayDuration} {...props} />
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot='tooltip' {...props} />
		</TooltipProvider>
	)
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />
}

function TooltipContent({
	className,
	sideOffset = 0,
	children,
	...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
	return (
		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				data-slot='tooltip-content'
				sideOffset={sideOffset + 10} /* Increased offset for the tail */
				className={cn(
					'relative z-50 w-fit rounded-none border-4 border-black bg-white px-4 py-2 text-sm font-bold text-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
					'animate-in zoom-in-0 duration-200 ease-out', // Comic Pop animation
					'overflow-visible', // Allow tail to stick out
					// Speech Bubble Tail (Bottom)
					'data-[side=top]:after:absolute data-[side=top]:after:-bottom-[14px] data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2 data-[side=top]:after:border-t-[14px] data-[side=top]:after:border-r-[12px] data-[side=top]:after:border-l-[12px] data-[side=top]:after:border-t-black data-[side=top]:after:border-r-transparent data-[side=top]:after:border-l-transparent',
					// Inner White Triangle for Bottom Tail (to create border effect)
					'data-[side=top]:before:absolute data-[side=top]:before:-bottom-[8px] data-[side=top]:before:left-1/2 data-[side=top]:before:z-10 data-[side=top]:before:-translate-x-1/2 data-[side=top]:before:border-t-[10px] data-[side=top]:before:border-r-[8px] data-[side=top]:before:border-l-[8px] data-[side=top]:before:border-t-white data-[side=top]:before:border-r-transparent data-[side=top]:before:border-l-transparent',

					// Speech Bubble Tail (Top)
					'data-[side=bottom]:after:absolute data-[side=bottom]:after:-top-[14px] data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2 data-[side=bottom]:after:border-r-[12px] data-[side=bottom]:after:border-b-[14px] data-[side=bottom]:after:border-l-[12px] data-[side=bottom]:after:border-r-transparent data-[side=bottom]:after:border-b-black data-[side=bottom]:after:border-l-transparent',
					'data-[side=bottom]:before:absolute data-[side=bottom]:before:-top-[8px] data-[side=bottom]:before:left-1/2 data-[side=bottom]:before:z-10 data-[side=bottom]:before:-translate-x-1/2 data-[side=bottom]:before:border-r-[8px] data-[side=bottom]:before:border-b-[10px] data-[side=bottom]:before:border-l-[8px] data-[side=bottom]:before:border-r-transparent data-[side=bottom]:before:border-b-white data-[side=bottom]:before:border-l-transparent',

					// Speech Bubble Tail (Right) - Source is on Left
					'data-[side=right]:after:absolute data-[side=right]:after:top-1/2 data-[side=right]:after:-left-[14px] data-[side=right]:after:-translate-y-1/2 data-[side=right]:after:border-t-[12px] data-[side=right]:after:border-r-[14px] data-[side=right]:after:border-b-[12px] data-[side=right]:after:border-t-transparent data-[side=right]:after:border-r-black data-[side=right]:after:border-b-transparent',
					'data-[side=right]:before:absolute data-[side=right]:before:top-1/2 data-[side=right]:before:-left-[8px] data-[side=right]:before:z-10 data-[side=right]:before:-translate-y-1/2 data-[side=right]:before:border-t-[8px] data-[side=right]:before:border-r-[10px] data-[side=right]:before:border-b-[8px] data-[side=right]:before:border-t-transparent data-[side=right]:before:border-r-white data-[side=right]:before:border-b-transparent',

					// Speech Bubble Tail (Left) - Source is on Right
					'data-[side=left]:after:absolute data-[side=left]:after:top-1/2 data-[side=left]:after:-right-[14px] data-[side=left]:after:-translate-y-1/2 data-[side=left]:after:border-t-[12px] data-[side=left]:after:border-b-[12px] data-[side=left]:after:border-l-[14px] data-[side=left]:after:border-t-transparent data-[side=left]:after:border-b-transparent data-[side=left]:after:border-l-black',
					'data-[side=left]:before:absolute data-[side=left]:before:top-1/2 data-[side=left]:before:-right-[8px] data-[side=left]:before:z-10 data-[side=left]:before:-translate-y-1/2 data-[side=left]:before:border-t-[8px] data-[side=left]:before:border-b-[8px] data-[side=left]:before:border-l-[10px] data-[side=left]:before:border-t-transparent data-[side=left]:before:border-b-transparent data-[side=left]:before:border-l-white',

					className
				)}
				{...props}>
				{children}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	)
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
