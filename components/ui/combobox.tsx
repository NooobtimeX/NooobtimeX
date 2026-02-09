'use client'

import * as React from 'react'
import { Check, ChevronDown, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface ComboboxProps {
	options: string[]
	selected: string[]
	onChange: (selected: string[]) => void
	placeholder?: string
	className?: string
	maxDisplayed?: number
}

export function Combobox({
	options,
	selected,
	onChange,
	placeholder = 'Select items...',
	className,
	maxDisplayed = 2
}: ComboboxProps) {
	const [open, setOpen] = React.useState(false)

	const handleUnselect = (item: string) => {
		onChange(selected.filter(i => i !== item))
	}

	const handleSelect = (item: string) => {
		if (selected.includes(item)) {
			handleUnselect(item)
		} else {
			onChange([...selected, item])
		}
	}

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className={cn('h-9 w-full justify-between text-sm', className)}>
					<div className='flex flex-wrap items-center gap-1'>
						{selected.length > 0 ?
							<>
								{selected.slice(0, maxDisplayed).map(item => (
									<Badge
										variant='secondary'
										key={item}
										className='h-5 px-1.5 py-0 text-xs'
										onClick={e => {
											e.stopPropagation()
											handleUnselect(item)
										}}>
										{item}
										<X className='ml-1 h-2.5 w-2.5 cursor-pointer' />
									</Badge>
								))}
								{selected.length > maxDisplayed && (
									<Badge variant='secondary' className='h-5 px-1.5 py-0 text-xs'>
										+{selected.length - maxDisplayed}
									</Badge>
								)}
							</>
						:	<span className='text-muted-foreground text-sm'>{placeholder}</span>}
					</div>
					<ChevronDown className='h-3.5 w-3.5 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-full p-0' align='start'>
				<Command>
					<CommandInput placeholder='Search...' className='h-8' />
					<CommandList>
						<CommandEmpty>No options found.</CommandEmpty>
						<CommandGroup>
							{options.map(option => (
								<CommandItem key={option} value={option} onSelect={() => handleSelect(option)} className='text-sm'>
									<Check className={cn('mr-2 h-3.5 w-3.5', selected.includes(option) ? 'opacity-100' : 'opacity-0')} />
									{option}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
