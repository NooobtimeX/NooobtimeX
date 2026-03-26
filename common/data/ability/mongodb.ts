import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const mongodb: Ability = {
	name: 'MongoDB',
	icon: 'logos:mongodb-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate,
	important: true
}
