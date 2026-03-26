import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const nodejs: Ability = {
	name: 'Node.js',
	icon: 'logos:nodejs-icon',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	important: true
}
