import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const jira: Ability = {
	name: 'Jira',
	icon: 'logos:jira',
	category: AbilityCategory.Tools,
	level: AbilityLevel.Intermediate
}
