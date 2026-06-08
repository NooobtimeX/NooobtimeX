import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn, slugify } from '@/lib/utils'
import type { Skill } from '@/common'

interface SkillCardProps {
	ability: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({ ability }) => {
	return (
		<Link
			href={`/skills/${slugify(ability.name)}` as never}
			className={cn(
				'group neon-panel clip-notch-sm hover:border-cyber-yellow/60 flex items-center gap-3 p-3 transition-colors',
				ability.important && 'border-cyber-yellow/40'
			)}>
			<span
				className={cn('flex size-9 shrink-0 items-center justify-center', ability.whiteBg && 'rounded-sm bg-white/90')}>
				<Icon icon={ability.icon} className='size-6' />
			</span>
			<div className='min-w-0'>
				<p className='group-hover:text-cyber-yellow truncate text-sm font-semibold tracking-wide transition-colors'>
					{ability.name}
				</p>
				{ability.important && (
					<span className='text-cyber-cyan font-mono text-[0.6rem] tracking-widest uppercase'>Core</span>
				)}
			</div>
		</Link>
	)
}

export default SkillCard
