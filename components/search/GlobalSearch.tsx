'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import { slugify } from '@/lib/utils'
import { abilitiesData, experiencesData, issuesData } from '@/common'

interface GlobalSearchProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

const NAV = [
	{ label: 'Home', href: '/', icon: 'mdi:home-variant-outline' },
	{ label: 'Projects', href: '/projects', icon: 'mdi:folder-multiple-outline' },
	{ label: 'Skills', href: '/skills', icon: 'mdi:chip' },
	{ label: 'Experience', href: '/experience', icon: 'mdi:timeline-text-outline' },
	{ label: 'CV', href: '/cv', icon: 'mdi:file-account-outline' }
] as const

const GlobalSearch: React.FC<GlobalSearchProps> = ({ open, onOpenChange }) => {
	const router = useRouter()

	const go = (href: string) => {
		onOpenChange(false)
		router.push(href as never)
	}

	return (
		<CommandDialog
			open={open}
			onOpenChange={onOpenChange}
			className='border-cyber-cyan/40 bg-popover rounded-none! border'
			title='Search'
			description='Jump to a section, project, skill, or role.'>
			<CommandInput placeholder='> search projects, skills, experience…' />
			<CommandList>
				<CommandEmpty className='font-mono text-sm'>No matches found.</CommandEmpty>

				<CommandGroup heading='Navigate'>
					{NAV.map(item => (
						<CommandItem key={item.href} value={`nav ${item.label}`} onSelect={() => go(item.href)}>
							<Icon icon={item.icon} className='text-cyber-cyan size-4' />
							<span className='font-mono uppercase'>{item.label}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Projects'>
					{issuesData.map(p => (
						<CommandItem key={p.id} value={`project ${p.title}`} onSelect={() => go(`/projects/${p.id}`)}>
							<Icon icon='mdi:folder-outline' className='text-cyber-yellow size-4' />
							<span>{p.title}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Skills'>
					{abilitiesData.map(a => (
						<CommandItem key={a.name} value={`skill ${a.name}`} onSelect={() => go(`/skills/${slugify(a.name)}`)}>
							<Icon icon={a.icon} className='size-4' />
							<span>{a.name}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Experience'>
					{experiencesData.map(e => (
						<CommandItem
							key={e.id}
							value={`experience ${e.position} ${e.affiliation.name}`}
							onSelect={() => go(`/experience/${e.id}`)}>
							<Icon icon='mdi:briefcase-outline' className='text-cyber-cyan size-4' />
							<span className='truncate'>
								{e.affiliation.name}
								<span className='text-muted-foreground'> — {e.position}</span>
							</span>
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}

export default GlobalSearch
