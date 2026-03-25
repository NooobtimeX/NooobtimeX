import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const express: Ability = {
	name: 'Express.js',
	category: AbilityCategory.Backend,
	level: AbilityLevel.Advanced,
	icon: 'simple-icons:express'
}
