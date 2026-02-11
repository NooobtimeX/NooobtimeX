import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const clickup: Ability = {
	name: 'ClickUp',
	icon: 'logos:clickup-icon',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Intermediate
}
