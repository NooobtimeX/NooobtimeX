import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const python: Ability = {
	name: 'Python',
	icon: 'logos:python',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate
}
