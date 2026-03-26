import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const typescript: Ability = {
	name: 'TypeScript',
	icon: 'logos:typescript-icon',
	category: AbilityCategory.Frontend,
	level: AbilityLevel.Expert,
	important: true
}
