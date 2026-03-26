import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const postgresql: Ability = {
	name: 'PostgreSQL',
	icon: 'logos:postgresql',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	important: true
}
