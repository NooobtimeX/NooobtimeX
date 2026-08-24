import React from 'react'
import Link from 'next/link'
import CyberIcon from '@/components/cyber/CyberIcon'
import { cn } from '@/lib/utils'
import type { Skill } from '@/common'

interface SkillNodeProps {
	skill: Skill
}

/** A single skill node linking to its detail page. */
const SkillNode: React.FC<SkillNodeProps> = ({ skill }) => {
	return (
		<Link
			href={`/skills/${skill.id}` as never}
			className='perk-node clip-notch-sm group flex w-full items-center gap-2.5 px-3 py-2'>
			<span
				className={cn('flex size-6 shrink-0 items-center justify-center', skill.whiteBg && 'rounded-sm bg-white/90')}>
				<CyberIcon icon={skill.icon} className='size-5' />
			</span>
			<span className='group-hover:text-cyber-yellow truncate text-[0.8rem] font-semibold transition-colors'>
				{skill.name}
			</span>
		</Link>
	)
}

export default SkillNode
