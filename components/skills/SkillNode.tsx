import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn, slugify } from '@/lib/utils'
import type { Skill } from '@/common'

interface SkillNodeProps {
	skill: Skill
}

/**
 * A single perk node in a skill lane. Core (important) skills render larger with a
 * yellow glow. Sits on the lane's vertical spine and links to the skill detail page.
 */
const SkillNode: React.FC<SkillNodeProps> = ({ skill }) => {
	return (
		<Link
			href={`/skills/${slugify(skill.name)}` as never}
			className={cn(
				'perk-node clip-notch-sm group relative z-10 flex w-full items-center gap-2.5',
				skill.important ? 'perk-node-core px-3 py-2.5' : 'px-3 py-2'
			)}>
			<span
				className={cn(
					'flex shrink-0 items-center justify-center',
					skill.important ? 'size-7' : 'size-6',
					skill.whiteBg && 'rounded-sm bg-white/90'
				)}>
				<Icon icon={skill.icon} className={skill.important ? 'size-6' : 'size-5'} />
			</span>
			<span
				className={cn(
					'group-hover:text-cyber-yellow truncate font-semibold transition-colors',
					skill.important ? 'text-sm' : 'text-[0.8rem]'
				)}>
				{skill.name}
			</span>
			{skill.important && (
				<span className='text-cyber-yellow ml-auto font-mono text-[0.55rem] tracking-widest'>CORE</span>
			)}
		</Link>
	)
}

export default SkillNode
