import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const githubCopilot: Ability = {
	name: 'GitHub Copilot',
	icon: 'simple-icons:githubcopilot',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}
