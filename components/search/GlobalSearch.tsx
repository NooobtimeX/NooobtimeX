'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { NAV_LINKS } from '@/components/navigation/links'
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from '@/components/ui/command'
import { entitiesData, experiencesData, projectsData, skillsData } from '@/common'

interface GlobalSearchProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

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
					{NAV_LINKS.map(item => (
						<CommandItem key={item.href} value={`nav ${item.label}`} onSelect={() => go(item.href)}>
							<Icon icon={item.icon} className='text-cyber-cyan size-4' />
							<span className='font-mono uppercase'>{item.label}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Projects'>
					{projectsData.map(p => (
						<CommandItem key={p.id} value={`project ${p.title}`} onSelect={() => go(`/projects/${p.id}`)}>
							<Icon icon='mdi:folder-outline' className='text-cyber-yellow size-4' />
							<span>{p.title}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Skills'>
					{skillsData.map(a => (
						<CommandItem key={a.name} value={`skill ${a.name}`} onSelect={() => go(`/skills/${a.id}`)}>
							<Icon icon={a.icon} className='size-4' />
							<span>{a.name}</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Career'>
					{experiencesData.map(e => (
						<CommandItem
							key={e.id}
							value={`career ${e.position} ${e.organization.name}`}
							onSelect={() => go(`/career/${e.id}`)}>
							<Icon icon='mdi:briefcase-outline' className='text-cyber-cyan size-4' />
							<span className='truncate'>
								{e.organization.name}
								<span className='text-muted-foreground'> — {e.position}</span>
							</span>
						</CommandItem>
					))}
				</CommandGroup>

				<CommandGroup heading='Companies'>
					{entitiesData.map(o => (
						<CommandItem key={o.id} value={`company ${o.name}`} onSelect={() => go(`/companies/${o.id}`)}>
							<Icon icon='mdi:domain' className='text-cyber-yellow size-4' />
							<span className='truncate'>{o.name}</span>
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}

export default GlobalSearch
