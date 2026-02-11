import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const artificialIntelligence: Ability = {
	name: 'Artificial Intelligence',
	icon: 'material-symbols:robot-2',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}
