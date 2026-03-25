import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const githubActions: Ability = {
	name: 'GitHub Actions',
	category: AbilityCategory.DevOps,
	level: AbilityLevel.Intermediate,
	icon: 'simple-icons:githubactions'
}
