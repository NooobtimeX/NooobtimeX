import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const n8n: Ability = {
	name: 'n8n',
	icon: 'simple-icons:n8n',
	category: AbilityCategory.Infrastructure,
	level: AbilityLevel.Expert
}
