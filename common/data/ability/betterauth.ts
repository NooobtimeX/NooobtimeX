import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const betterauth: Ability = {
	name: 'Better Auth',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Intermediate,
	icon: 'material-symbols:lock'
}
