import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const wordpress: Ability = {
	name: 'WordPress',
	icon: 'simple-icons:wordpress',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Expert
}
