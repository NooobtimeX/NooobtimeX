'use client'

import React, { useEffect, useState } from 'react'
import type { Route } from 'next'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import Fuse from 'fuse.js'
import { orderedAbilities } from '@/common/data/ability'
import { affiliationData } from '@/common/data/affiliation'
import { issuesData } from '@/common/data/issue'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator
} from '@/components/ui/command'

export function GlobalSearch() {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	// Data indexing for Fuse.js
	const searchData = [
		...issuesData.map(i => ({
			id: i.id,
			title: i.title,
			type: 'project' as const,
			href: `/issue/${i.id}`,
			icon: 'material-symbols:laptop-chromebook'
		})),
		...orderedAbilities.map(a => ({
			id: a.name,
			title: a.name,
			type: 'skill' as const,
			href: '/ability',
			icon: a.icon
		})),
		...affiliationData.map(a => ({
			id: a.id,
			title: `${a.position} @ ${a.affiliation.name}`,
			type: 'experience' as const,
			href: `/affiliation/${a.id}`,
			icon: 'material-symbols:domain'
		}))
	]

	const fuse = new Fuse(searchData, {
		keys: ['title', 'type'],
		threshold: 0.3
	})

	const [results, setResults] = useState(searchData)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen(open => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	const onSearch = (query: string) => {
		if (!query) {
			setResults(searchData)
			return
		}
		const searchResults = fuse.search(query).map(r => r.item)
		setResults(searchResults)
	}

	const onSelect = (href: string) => {
		setOpen(false)
		router.push(href as Route)
	}

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className='bg-card hover:bg-primary group flex items-center justify-center gap-2 border-2 border-white px-3 py-3 shadow-[4px_4px_0px_0px_white] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white] lg:h-full lg:translate-x-0 lg:translate-y-0 lg:border-0 lg:bg-transparent lg:px-4 lg:py-2 lg:shadow-none lg:hover:bg-transparent'>
				<Icon
					icon='material-symbols:search'
					className='h-6 w-6 text-white transition-transform group-hover:scale-110 lg:h-5 lg:w-5'
				/>
				<span className='hidden text-xl font-black tracking-tight text-white uppercase lg:inline'>Search</span>
				<kbd className='pointer-events-none hidden h-5 items-center gap-1 rounded bg-white/10 px-1.5 font-mono text-[10px] font-medium text-white opacity-100 select-none lg:flex'>
					<span className='text-xs'>⌘</span>K
				</kbd>
			</button>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder='Type a command or search...' onValueChange={onSearch} />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>

					<CommandGroup heading='Projects'>
						{results
							.filter(r => r.type === 'project')
							.map(result => (
								<CommandItem key={result.id} onSelect={() => onSelect(result.href)} className='flex items-center gap-3'>
									<Icon icon={result.icon} className='text-primary h-4 w-4' />
									<span>{result.title}</span>
								</CommandItem>
							))}
					</CommandGroup>

					<CommandSeparator />

					<CommandGroup heading='Skills'>
						{results
							.filter(r => r.type === 'skill')
							.map(result => (
								<CommandItem key={result.id} onSelect={() => onSelect(result.href)} className='flex items-center gap-3'>
									<Icon icon={result.icon} className='text-primary h-4 w-4' />
									<span>{result.title}</span>
								</CommandItem>
							))}
					</CommandGroup>

					<CommandSeparator />

					<CommandGroup heading='Experiences'>
						{results
							.filter(r => r.type === 'experience')
							.map(result => (
								<CommandItem key={result.id} onSelect={() => onSelect(result.href)} className='flex items-center gap-3'>
									<Icon icon={result.icon} className='text-primary h-4 w-4' />
									<span>{result.title}</span>
								</CommandItem>
							))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
