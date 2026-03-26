import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const googleAnalytics: Ability = {
	name: 'Google Analytics',
	icon: 'logos:google-analytics',
	category: AbilityCategory.GrowthManagement,
	level: AbilityLevel.Intermediate
}
