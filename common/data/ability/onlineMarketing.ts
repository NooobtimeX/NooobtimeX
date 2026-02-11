import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const onlineMarketing: Ability = {
	name: 'Online Marketing',
	icon: 'material-symbols:palette',
	category: AbilityCategory.Marketing,
	level: AbilityLevel.Intermediate
}
