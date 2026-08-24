import React from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

/**
 * NOTE: deliberately still `@iconify/react`, not `CyberIcon`.
 *
 * CyberTag is a shared primitive rendered from CLIENT components too
 * (`contact/ContactContent.tsx`, `contact/ChannelCard.tsx`). Importing CyberIcon here
 * would drag `lib/og-icons.generated.json` (~143 KB) into the client bundle — the exact
 * cost the generate/subset pipeline exists to avoid. Server-only components get the
 * inlined-SVG treatment; anything reachable from a client boundary stays on the API.
 */
interface CyberTagProps {
	children: React.ReactNode
	icon?: string
	className?: string
	tone?: 'cyan' | 'yellow' | 'magenta'
}

const toneClass: Record<NonNullable<CyberTagProps['tone']>, string> = {
	cyan: 'border-cyber-cyan/55 text-cyber-cyan bg-cyber-cyan/[0.08]',
	yellow: 'border-cyber-yellow/55 text-cyber-yellow bg-cyber-yellow/[0.08]',
	magenta: 'border-cyber-magenta/55 text-cyber-magenta bg-cyber-magenta/[0.08]'
}

/**
 * Small monospace chip used for tech tags, statuses, and metadata.
 */
const CyberTag: React.FC<CyberTagProps> = ({ children, icon, className, tone = 'cyan' }) => {
	return (
		<span
			className={cn(
				'inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[0.7rem] tracking-wider uppercase',
				toneClass[tone],
				className
			)}>
			{icon && <Icon icon={icon} className='size-3' />}
			{children}
		</span>
	)
}

export default CyberTag
