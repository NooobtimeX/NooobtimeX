import React from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'
import type { Organization, Project } from '@/common'

interface GigListProps {
	items: Project[]
	selectedId: string
	onSelect: (id: string) => void
	orgFor: (p: Project) => Organization | undefined
	tierFor: (p: Project) => number
}

const GigList: React.FC<GigListProps> = ({ items, selectedId, onSelect, orgFor, tierFor }) => {
	return (
		<div className='flex flex-col gap-2 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-1'>
			{items.map(p => {
				const selected = p.id === selectedId
				const org = orgFor(p)
				const live = !!p.links.live
				return (
					<button
						key={p.id}
						onClick={() => onSelect(p.id)}
						className={cn(
							'clip-notch-sm group relative w-full border px-3 py-3 text-left transition-colors',
							selected ? 'gig-row-active' : 'border-border hover:border-cyber-cyan/50'
						)}>
						<div className='flex items-start justify-between gap-2'>
							<span className='flex min-w-0 items-center gap-2'>
								<span className={cn('size-2 shrink-0 rounded-full', live ? 'bg-cyber-cyan' : 'bg-muted-foreground')} />
								<span
									className={cn(
										'truncate text-sm font-bold tracking-wide uppercase',
										selected ? 'text-cyber-yellow' : 'group-hover:text-foreground'
									)}>
									{p.title}
								</span>
							</span>
							<span className='text-cyber-magenta shrink-0 font-mono text-[0.7rem] tracking-tight'>
								{'▲'.repeat(tierFor(p))}
							</span>
						</div>
						<div className='text-muted-foreground mt-1 flex items-center justify-between font-mono text-[0.65rem] tracking-wider uppercase'>
							<span className='inline-flex items-center gap-1'>
								<Icon icon='mdi:account-tie-outline' className='size-3' />
								{org?.name ?? 'Independent'}
							</span>
							<span className={live ? 'text-cyber-cyan' : ''}>{live ? 'Active' : 'Archived'}</span>
						</div>
					</button>
				)
			})}
		</div>
	)
}

export default GigList
