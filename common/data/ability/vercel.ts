import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const vercel: Ability = {
	name: 'Vercel',
	icon: 'logos:vercel-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Advanced,
	whiteBg: true,
	important: true
}
