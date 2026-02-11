import { AbilityCategory, AbilityLevel } from '@/common/enum'
import type { Ability } from '@/common/interface'

export const antigravity: Ability = {
	name: 'Antigravity',
	icon: 'logos:google-gemini',
	category: AbilityCategory.AI,
	level: AbilityLevel.Advanced
}
