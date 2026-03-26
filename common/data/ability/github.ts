import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const github: Ability = {
	name: 'Git/GitHub',
	icon: 'logos:github-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Advanced,
	whiteBg: true,
	important: true
}
