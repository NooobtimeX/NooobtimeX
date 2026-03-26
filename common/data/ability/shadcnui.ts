import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const shadcnui: Ability = {
	name: 'Shadcn/ui',
	icon: 'simple-icons:shadcnui',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Advanced,
	important: true
}
