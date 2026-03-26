import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const docker: Ability = {
	name: 'Docker',
	icon: 'logos:docker-icon',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate,
	important: true
}
