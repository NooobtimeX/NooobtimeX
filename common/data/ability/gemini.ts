import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const gemini: Ability = {
	name: 'Gemini',
	icon: 'logos:google-bard-icon',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}
