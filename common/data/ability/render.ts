import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const render: Ability = {
	name: 'Render',
	icon: 'simple-icons:render',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Intermediate
}
